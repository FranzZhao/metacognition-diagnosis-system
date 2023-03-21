import { combineReducers, configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// slices
import { UserSlice, SystemSlice, AgentSlice, KnowledgeLearningSlice } from './slices';

// 持久化配置信息
const persistConfig = {
    key: 'root', // 数据根目录
    storage, // 数据保存方法: local-storage(默认) || session-storage
    whitelist: [
        // 白名单, 指明保存的store中的特定数据
        'user' // 保存user信息(jwt), 暂不持久化
    ]
};

// 将所有的Reducer捆绑起来
const rootReducer = combineReducers({
    user: UserSlice.reducer,
    system: SystemSlice.reducer,
    agent: AgentSlice.reducer,
    knowledgeLearning: KnowledgeLearningSlice.reducer
});

// 将原有的reducer加强为可持续久化的
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 创建数据仓库
const store = configureStore({
    // 传入的reducer, 使用persisted过的
    reducer: persistedReducer,
    // 中间件, 因为redux本身就有一些中间件了, 为了防止重写, 可以使用对象展开的方法
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(),

    devTools: true
});

// 创建持久化的store
const persistor = persistStore(store);

// type
export type RootState = ReturnType<typeof store.getState>; // 输出store的数据类型state
export type AppDispatch = typeof store.dispatch; // Getting the Dispatch type
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

const rootStore = {
    store,
    persistor
};

export default rootStore;
export * from './hooks';
