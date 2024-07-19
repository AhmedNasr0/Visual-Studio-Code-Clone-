import IFile from "../interfaces/IFile";
import {v4 as uuid} from 'uuid'
export const fileTree:IFile={
    id:uuid(),
    name:"VSClone",
    isFolder:true,
    children:[
        {
            id:uuid(),
            name:"ahmed.html",
            isFolder:false,
            content:"Content About Ahmed Nasr"
        },
        {
            id:uuid(),
            name:'src',
            isFolder:true, 
            children:[
                {
                    id:uuid(),
                    name:'App.ts',
                    isFolder:false 
                },
                {
                    id:uuid(),
                    name:'components',
                    isFolder:true,
                    children:[
                        {
                            id:uuid(),
                            name:'renderComponent.tsx',
                            isFolder:false ,
                            content:`const FileSyntaxHighlighter = ({content}:IProps) => {
    return  <SyntaxHighlighter language="javascript" style={atomOneDark} 
            customStyle={{
                backgroundColor:"transparent",
                width:"100%",
                maxHeight:"100vh",
                overflowX:"auto",
                fontSize:"18px"
                }}
                showInlineLineNumbers
            >
                    {String(content)}
            </SyntaxHighlighter>
    };
export default FileSyntaxHighlighter`
                        }
                    ]
                },
                {
                    id:uuid(),
                    name:'index.css',
                    isFolder:false
                }

            ]
        },
        {
            id:uuid(),
            name:"node_modules",
            isFolder:true,
            children:[
                {
                    id:uuid(),
                    name:'.vite',
                    isFolder:true,
                    children:[
                        {
                            id:uuid(),
                            name:"newFile.ts",
                            isFolder:false
                        },
                        {
                            id:uuid(),
                            name:"file",
                            isFolder:false ,
                            content:`onent Could Be Here 
                                wjdkqjvd
                                kjhg`
                        }
                    ]
                },
                {
                    id:uuid(),
                    name:'react.js',
                    isFolder:false
                }
            ]
        },{
            id:uuid(),
            name:'data',
            isFolder:true ,
            children:[
                {
                    id:uuid(),
                    name:'data.json',
                    isFolder:false,
                }
            ]
        }
    ]
}