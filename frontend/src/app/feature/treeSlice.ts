import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import IFile from '../../interfaces/IFile'

interface IClickedFile{
    name:string,
    content:string|undefined,
    activeTapId:string|null,
}
interface IInitialState{
    clickedFile:IClickedFile,
    openedFile:IFile[],
    currentTapId:string|null
}
const initialState:IInitialState={
    clickedFile:{
        name:'',
        content:"",
        activeTapId:null
    },
    openedFile:[],
    currentTapId:null
}
const fileTreeSlice=createSlice({
    name:'fileTree',
    initialState,
    reducers:{
        setOpenedFileAction:(state,actionPayload:PayloadAction<IFile[]>)=>{
            state.openedFile=actionPayload.payload
        },
        setClickedFileAction:(state,action:PayloadAction<IClickedFile>)=>{
            state.clickedFile=action.payload
        },
        setRemoveCurrentTapAction:(state,action:PayloadAction<string|null>)=>{
            state.currentTapId=action.payload
        }
    }
})
export const {setOpenedFileAction,setRemoveCurrentTapAction,setClickedFileAction}=fileTreeSlice.actions

export default fileTreeSlice.reducer
