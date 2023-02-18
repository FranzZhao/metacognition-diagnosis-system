与 API 相关的内容。包括：axios、mock、请求

## 前后端联调

> Mock 变动: 前缀全都不需要加（原先的/api）

[后端接口文档](https://amethyst-leech-e46.notion.site/a09eeeab3dc54e26b8139f91b6411463)
如有与 coding 中设计文档不符合的地方，一般以接口文档为准，或询问对应的后端负责人

两种方式自由选择：

-   直接在不开启 mock 环境下进行联调（`yarn start`）
-   先在开启 mock 环境（`yarn start:mock`）进行联调，需要注释掉对应 mock。如果当前返回的是 mock 数据会有提示。

每一接口的联调完成后在需求文档中打勾。

## 测试账号

对应模块的账号有对应模块的数据权限，不过现在大部分还没有加数据权限 所以都一样。
目前教研员、管理员、超级管理员的页面是一样的。

```json
"userName":"auth",

"passWord":"12345678"
```

```json
"userName":"server-model",

"passWord":"12345678"
```

```json
"userName":"server-data-basic",

"passWord":"12345678"
```

```json
"userName":"server-data-edu",

"passWord":"12345678"
```

```json
"userName":"server-application",

"passWord":"12345678"
```

```json
"userName":"el2b-team233",

"passWord":"12345678"
```

```json
"userName":"kongmingtai",

"passWord":"12345678"
```

## Axios 相关

`/src/api`文件夹中是真实 api 接口，使用 axios。

其中 axios 的 config 中添加了三个设置项。

```ts static
declare module 'axios' {
    export interface AxiosRequestConfig {
        // [自定义属性声明]
        // 接口报错是否需要toast提示
        needErrorToast?: boolean;
        // 接口成功是否需要toast提示
        needSuccessToast?: boolean;
        // 接口是否不需要token（默认都会加上token）
        noToken?: boolean;
        // 接口返回是否不符合统一格式
        isSpecialRes?: boolean;
    }
}
```

在 axios 拦截器中会为所有 noToken==false 的接口的请求头中加上 token。

```ts static
// 因为后端使用微服务，每个模块的baseURL存在区别
const BASE_URL = '/user';

// 例子1:这个请求是post方法，第一个参数是地址user/login/login-username，第二个参数是请求体，第三个参数是config
// 入参和出参均声明类型
const userLogin = (data: LoginProps) =>
    request.post<Token>(`${BASE_URL}/login/login-username`, data, {
        needSuccessToast: true, // 登陆成功后显示成功消息的Toast
        needErrorToast: true, // 请求失败后显示错误信息的Toast
        noToken: true ，// noToken默认为false。登陆不需要token，所以配置为true，其他接口可以忽略这个配置。
    });

// 例子2:这个请求是get方法，id是路由参数，通过第二个参数设置config
const getSomething = (id, token) =>
    request.get(BASE_URL + `/something/${id}`, {
        needErrorToast: true
    });

// 记得导出
export const userAPI = {
    userLogin,
    getSomething
};
```

## Mock 相关

** 变动较大**

[mockjs 文档](http://mock.pe666.cn/random/random.html)

由于后端接口未开发完成，如果直接请求会请求错误，没有办法进行数据调试。
所以我们使用 mockjs 来模拟假数据。

mock 是什么：在前端项目中使用，直接拦截前端项目发出的请求，返回假数据。

以上面的两个接口为例。我们在`/mock`文件夹中找到这个接口对应的模块，比如这两个接口都是 user 模块的所以我们在 user.js 中编写 mock 数据

```js static
Mock.mock('/api/user/login', 'post', {
    userName: '王老师'
});

// getsomething，返回了一个数组，用:id来匹配路由中含有参数的的API
Mock.mock('/api/user/something/:id', 'get', [
    {
        id: 1,
        name: 'xxx'
    },
    {
        id: 2,
        name: 'yyy'
    }
]);
```

可以通过函数判断来返回不同的东西，

```js static
Mock.mock('/api/common/login/login-username', 'post', ({ params }) => {
    const { userName, passWord } = params;
    // 根据账号密码判断来返回是否登陆成功
    if (passWord === 'root' && userName === 'front') {
        return {
            code: 200,
            msg: '登陆成功',
            data: {
                accessToken: 'accessToken',
                refreshToken: 'refreshToken'
            }
        };
    } else {
        return {
            code: 401,
            msg: '密码错误',
            data: {}
        };
    }
});
```

-   注意 1: 可以热更新。
-   注意 2: mockjs 的原理是对 XMLHttpRequest 对象进行改写，在请求发出前如果检测到请求的接口已注册 mock 规则，则返回设定好的测试数据，实际并没有发出 AJAX 请求。所以无法在控制台检测到其网络请求。因此对原生 mockjs 进行改写，使其返回测试数据时先打印到控制台，方便调试，
-   注意 3: 开头都要加个`/api`，这是因为 request 设置了 baseURL 为`/api`，这样后面改成后端给的数据就不会使用 mock 数据而是使用后端真实数据了。

```js static
export const request = axios.create({
    baseURL: '/api' // 后续设置成后端给的地址
});
```

-   注意 4: **需要使用 `yarn start:mock` 来开启 mock 环境，默认不开启**

```bash static
    "start": "react-app-rewired start",
    "start:mock": "react-app-rewired start mock",
    "build": "react-app-rewired build",
    "build:mock": "react-app-rewired build mock",
```

## 项目中实际调用 API

而调用这一 API 是通过 redux 调用的。

在 slice 里创建异步 action，并把数据存储在 redux 中。

```js static
// In userSlice.ts

import { userAPI } from '@/api';
// ...

// 创建异步action
export const signIn = createAsyncThunk(
    //action name space
    'user/signIn',
    // async-await action func
    async () => {
        // using axios to get/post/delete... data
        const { data } = await userAPI.userLogin({
            userName: 'front',
            password: 'root',
            identityCode: '0'
        });
        return data;
    }
);

// ...

// 响应action不同状态
extraReducers: {
    // data send success: return token
    [signIn.fulfilled.type]: (state, { payload }) => {
        state.token = payload.token;
    },
    // data send fail: return error msg from try-catch
    [signIn.rejected.type]: (state, action) => {
        // ...
    },
}
```

在组件中调用 redux dispatch。
实际上也可直接用 axios，但是这样数据就没有经过 redux。当需要保持数据统一时，必须通过 redux 来调用。

```js static
import { signIn } from '@/store/slices';

const dispatch = useAppDispatch();

const handleLogin = () => {
    // 通过redux请求
    dispatch(signIn()).then(() => {
        //请求完成后跳转
        history.push('/');
    });

    // 直接通过axios
    // const { data } = await userAPI.userLogin({
    //     userName: 'front',
    //     password: 'root',
    //     identityCode: '0'
    // });
};
```
