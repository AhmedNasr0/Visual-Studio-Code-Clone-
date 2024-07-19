import RenderIconImg from "./renderImg"
import FileIcon from "./SVG/File"

interface IProps{
    fileName:string,
    isFolder?:boolean,
    isOpen?:boolean,
}

const extensionIconPaths:Record<string,string>={
    jsx:'/icons/react',
    tsx:'/icons/react_ts',
    js:'/icons/javascript',
    ts:'/icons/typescript',
    css:'/icons/css',
    html:'/icons/html',
    ejs:'/icons/eja',
    json:'/icons/json',
    // folders
    node_modules:'/icons/folder-node',
    public:'/icons/folder-public',
    src:'/icons/folder-src',
    components:'/icons/folder-components',
    data:'/icons/folder-database',
    database:'/icons/folder-database'
}

const RenderFileIcon=({fileName,isFolder,isOpen}:IProps)=>{
    const extension=fileName.split('.').pop()

    
    if(extension && Object.prototype.hasOwnProperty.call(extensionIconPaths,extension)){
        const iconPath= isFolder ? isOpen ? `${extensionIconPaths[extension]}-open.svg` : `${extensionIconPaths[extension]}.svg` : `${extensionIconPaths[extension]}.svg`
        return <RenderIconImg src={iconPath}/>
    }
    if(isFolder && isOpen) return <RenderIconImg src="/icons/folder-default-open.svg" />
    if(isFolder && !isOpen) return <RenderIconImg src="/icons/folder-default.svg" />
    if(!isFolder) return <FileIcon/>
    
}
export default RenderFileIcon