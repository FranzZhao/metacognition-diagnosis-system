import { mockKnowledgeMapList } from '@/utils/mock';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const getDate = () => {
    let date = new Date();
    let y = date.getFullYear();
    let m = (date.getMonth() + 1 + '').padStart(2, '0');
    let d = date.getDate().toString().padStart(2, '0');
    let h = date.getHours().toString().padStart(2, '0');
    let min = date.getMinutes().toString().padStart(2, '0');
    let s = date.getSeconds().toString().padStart(2, '0');
    return `${y}/${m}/${d} ${h}:${min}:${s}`;
};

interface MapDetailProps {
    id: number;
    title: string;
    intro: string;
    tags: string[];
    time: string;
    nodes: any[];
    links: any[];
    relations: any[];
}

interface MapProps {
    mapList: MapDetailProps[];
    currentSelectMap: MapDetailProps | null;
    nextMapId: number;
}

const initialMapState: MapProps = {
    // mapList: mockKnowledgeMapList,
    mapList: [],
    currentSelectMap: null,
    nextMapId: 1
};

// 根据ID获取map
export const getMapById = createAsyncThunk('map/getMap', (mapId: number) => {
    return mapId;
});

// 保存地图信息
export const saveMapById = createAsyncThunk('map/saveMap', (mapInfo: any) => {
    return mapInfo;
});

// 新建知识地图
export const newMap = createAsyncThunk('map/newMap', (mapBaseInfo: any) => {
    return mapBaseInfo;
});

export const MapSlice = createSlice({
    name: 'map',
    initialState: initialMapState,
    reducers: {},
    extraReducers: {
        [getMapById.fulfilled.type]: (state, action) => {
            state.currentSelectMap = state.mapList.filter((map) => map.id === action.payload)[0];
        },
        [saveMapById.fulfilled.type]: (state, action) => {
            let newMapInfo = action.payload;
            let newMapList = [...state.mapList];
            state.mapList.map((map, index) => {
                if (map.id === newMapInfo.id) {
                    newMapList[index].title = newMapInfo.title;
                    newMapList[index].intro = newMapInfo.intro;
                    newMapList[index].tags = newMapInfo.tags;
                    newMapList[index].nodes = newMapInfo.nodes;
                    newMapList[index].links = newMapInfo.links;
                    newMapList[index].relations = newMapInfo.relations;
                }
            });
            // console.log('new map list =>', newMapList[0].title);
            state.mapList = newMapList;
        },
        [newMap.fulfilled.type]: (state, action) => {
            let newMapBaseInfo = action.payload;
            let newMapList = [...state.mapList];
            newMapList.push({
                id: state.nextMapId,
                title: newMapBaseInfo.mapTitle,
                intro: newMapBaseInfo.mapIntro,
                tags: newMapBaseInfo.mapTags,
                time: getDate(),
                nodes: [],
                links: [],
                relations: []
            });
            state.nextMapId += 1;
            state.mapList = newMapList;
        }
    }
});
