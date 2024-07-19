import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import {  setOpenedFileAction } from "../../app/feature/treeSlice";
import { RootState } from "../../app/store";
import IFile from "../../interfaces/IFile";

interface IProps{
    position:{x:number,y:number},
    setClicked:(prop:boolean)=>void
}

const DropMenu=({position,setClicked}:IProps)=>{
    const menuRef=useRef<HTMLDivElement>(null);
    const dispatch=useDispatch();
    const {openedFile,currentTapId}=useSelector((state:RootState)=>state.tree)
    useEffect(()=>{
        const handleClickOutSide=()=>{
            if(menuRef.current && !menuRef.current.contains(event?.target)){
                setClicked(false);
            }
        }
        window.addEventListener('click',handleClickOutSide)
        return ()=>{
            window.removeEventListener('click',handleClickOutSide);
        }
    },[setClicked])
    const handleCloseAll=()=>{
        dispatch(setOpenedFileAction([]));
        setClicked(false);
    }
    const handleCloseTap=()=>{
        const filtered:IFile[]=openedFile.filter((file)=> file.id!==currentTapId )
        if(filtered.length==0){
            dispatch(setOpenedFileAction([]));
            return ;
        }
        dispatch(setOpenedFileAction(filtered));
        setClicked(false);
    }
    return (
        <div  ref={menuRef}> 
            <ul className="bg-white flex flex-col rounded-lg text-black w-fit px-2 py-2" style={{
                position:"absolute",left:position.x,top:position.y
            }}>
                <li onClick={handleCloseTap} className="cursor-pointer rounded-md pl-1 pr-6 hover:bg-gray-300">Close </li>
                <li className="cursor-pointer rounded-md pl-1 pr-6 hover:bg-gray-300" onClick={handleCloseAll}>Close All</li>
            </ul>
        </div>
    )
}
export default DropMenu