import { useState } from "react"
import IFile from "../interfaces/IFile"
import RightArrowIcon from "./SVG/Right"
import BottomArrowIcon from "./SVG/Bottom"
import RenderFileIcon from "./RenderFileIcon"
import { useDispatch, useSelector } from "react-redux"
import {  setClickedFileAction, setOpenedFileAction} from "../app/feature/treeSlice"
import { RootState } from "../app/store"
import { doesFileExist } from "../utils/functions"
interface IProps{
    fileTree:IFile
}


const RecursiveComponent=({fileTree}:IProps)=>{
    const dispatch=useDispatch();
    const {openedFile}=useSelector((state:RootState)=>state.tree)
    const [isOpen,setIsOpen]=useState<boolean>(false);

    const handleOnClickFile=()=>{
        dispatch(setClickedFileAction({name:fileTree.name,content:fileTree.content,activeTapId:fileTree.id}))
        if(doesFileExist(openedFile,fileTree.id)) {
            return
        }
        dispatch(setOpenedFileAction([...openedFile,fileTree]))
        
    }

    const toggle=()=>{setIsOpen(prv=>!prv)}
    return (
        <div className="mb-1 ml-4 cursor-pointer">
            <div onClick={toggle} className="flex items-center">
                <span className="mr-1">
                    {fileTree.isFolder ? (
                        <div className="flex items-center">
                            {!isOpen ? <RightArrowIcon/> : <BottomArrowIcon/>}
                            <RenderFileIcon fileName={fileTree.name} isOpen={isOpen} isFolder/>    
                            <span className="ml-1 ">{fileTree.name}</span> 
                        </div>
                    ) :(
                        <div onClick={handleOnClickFile} className="flex items-center">
                            <RenderFileIcon fileName={fileTree.name} />
                            <span className="ml-1 ">{fileTree.name}</span> 
                            
                        </div>
                        
                    )
                        }
                </span>
            </div>
            {isOpen&&fileTree.children && fileTree.children.map((file,idx)=>(
                <RecursiveComponent fileTree={file} key={idx}/>
            ))}
        </div>
    )
}   
export default RecursiveComponent