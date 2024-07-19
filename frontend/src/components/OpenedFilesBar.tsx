import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import OpenedFile from "./OpenedFiles";
import FileSyntaxHighlighter from "./FileSyntaxHighliter";
import DropMenu from "./menu/dropmenu";
import { useState } from "react";

const OpenedFilesBar=()=>{
    const {openedFile,clickedFile}=useSelector((state:RootState)=>state.tree);
    const [menuPos,setMenuPos]=useState({x:0,y:0})
    const [clicked,setClicked]=useState(false)
    const onContextMenu=(e)=>{
        e.preventDefault()
        setMenuPos({x:e.clientX,y:e.clientY})
        setClicked(true)
    }
    return(
        <div>
            <div className="flex" onContextMenu={onContextMenu}>
            {
                openedFile.map((file)=>(
                        <OpenedFile file={file} />
                    )
                )
            }
            {clicked&& <DropMenu  setClicked={setClicked} position={menuPos}/>}
            </div>
            <FileSyntaxHighlighter content={String(clickedFile.content)}/>
        </div>
    )
}
export default OpenedFilesBar