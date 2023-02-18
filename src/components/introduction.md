## 组件库开发注意事项

### README.md

-   设置了 skipComponentsWithoutExample，只有写了 readme 文档的组件才会显示在 styleguidist 中。
-   readme 文件中写示例要 import 组件。

### 修改组件尽量保证已使用的地方不会出错

在修改已经在页面上被使用的组件时，注意向下兼容，即最好保持调用的地方没有出现问题。
或者如果改动很大没办法保证这一点，一定要通知使用组件者，进行相应的修改。

### 组件放在正确位置

分为四种组件。
上一版的组件放的位置可能没有严格按照以下定义放，所以不要直接看上一版这个组件放哪就放哪，

#### 业务组件

-   目录：components/business
-   定义：包含业务逻辑，也包括一些与后端接口通讯的逻辑/包含若干个基础组件
-   例如：选择实体（EntitySelect）组件

跨模块使用的、与业务相关的组件请放在这里

---

#### 基础组件

-   目录：components/common
-   定义：主要指那些本身不包含任何业务逻辑、可以被轻松复用的组件，传入 props 即可
-   例如：timepicker、toast、dialog、上一版的 KMTIcon

如果你只是对 mui 组件简单封装一层就放在基础组件中。

---

#### 页面组件

-   目录：pages/\*\*/components
-   定义：只在该页面使用到的组件

在对应的页面层级下创建 components 文件夹编写组件

---

#### 布局组件

-   目录：components/layout
-   定义：放布局容器和 Header、Drawer 等与布局相关的组件
