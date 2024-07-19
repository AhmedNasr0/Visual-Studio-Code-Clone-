
import CloseIcon from "./SVG/CloseIcon";
import RenderFileIcon from "./RenderFileIcon";
import IFile from "../interfaces/IFile";
import { useDispatch, useSelector } from "react-redux";
import { setClickedFileAction, setOpenedFileAction, setRemoveCurrentTapAction } from "../app/feature/treeSlice";
import { RootState } from "../app/store";

interface IProps{
    file:IFile 
}
const OpenedFile=({file}:IProps)=>{
    const dispatch=useDispatch()
    const {clickedFile,openedFile}=useSelector((state:RootState)=>state.tree)
    const {name,content}=file
    const onClick=()=>{
        dispatch(setClickedFileAction({name,content,activeTapId:file.id}))
    }
    const onClose=(selectedId:string)=>{
        const filtered:IFile[]=openedFile.filter((file)=> file.id!==selectedId )
        if(filtered.length==0){
            dispatch(setClickedFileAction({activeTapId:null,name:"",content:""}))
            dispatch(setOpenedFileAction([]));    
            return ;
        }
        const {name,id,content} = filtered[filtered.length-1]
        dispatch(setClickedFileAction({activeTapId:id,name,content}))
        dispatch(setOpenedFileAction(filtered));
    }
    return (
            <div className="flex border-x-2 cursor-pointer border-zinc-800 h-10 gap-1 items-center  p-2" key={file.id} onClick={onClick} 
                style={{borderTop:file.id===clickedFile.activeTapId?" 3px solid gray":"3px solid transparent" ,
                    borderBottom:file.id!==clickedFile.activeTapId?"1px solid gray":"1px solid transparent" 
                }} onContextMenu={(e)=>{
                    e.preventDefault();
                    dispatch(setRemoveCurrentTapAction(file.id))
                }}>
                <RenderFileIcon fileName={file.name}/>
                <span className="">{file.name}</span>
                <div onClick={(e)=>{
                    e.stopPropagation()
                    onClose(file.id)
                }} className=" cursor-pointer duration-300 hover:bg-gray-400 rounded-md">
                    <CloseIcon />
                </div>
            </div>
    )
}
export default OpenedFile