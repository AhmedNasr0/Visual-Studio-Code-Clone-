import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import OpenedFilesBar from "./OpenedFilesBar"
import CloseIcon from "./SVG/CloseIcon"

const PreviewContent=()=>{
    const {openedFile} =useSelector((state:RootState)=>state.tree)
    return (
        <div>
            {
                openedFile.length==0 ? (
                <div>
                    <div className="flex w-fit border-x-2 shadow-lg bg-black cursor-pointer border-zinc-800 h-10 gap-1 items-center  p-2"
                            style={{borderTop:"3px solid gray"}}>
                                <img src="/icons/vscode.svg" className="w-5 h-5"/>
                                <span className="">Welcome</span>
                                <div onClick={(e)=>{
                                    e.stopPropagation()
                                    // onClose(file.id)
                                }} className=" cursor-pointer duration-300 hover:bg-gray-400 rounded-md">
                                <CloseIcon />
                            </div>
                        </div>
                    <div className="flex w-full h-screen pt-[30px] items-center flex-col">
                        
                        <div className="ml-[100px] mb-10  flex flex-col flex-start w-full"> 
                            <div className="text-white text-[40px]">Visual Studio Code</div>
                            <div className="text-gray-500 text-[30px]">Editing evolved</div>
                        </div>
                        <img src="/icons/vscode.svg" className="w-[300px] h-[300px]"/>
                    </div>
                    </div>
                    
                ):(
                    <div>
                        <OpenedFilesBar />
                    </div>
                )
            }
        </div>
    )
}
export default PreviewContent