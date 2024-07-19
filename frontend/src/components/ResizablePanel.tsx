import { ReactNode } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

interface IProps{
    defaultLayout?:number[]|undefined,
    rightSide:ReactNode,
    leftSide:ReactNode,
    showLeftPanel:boolean
}


const ResizablePanel = ({showLeftPanel,defaultLayout=[14,86],rightSide,leftSide}:IProps) => {
    const Layout=(sizes:number[])=>{
        document.cookie=`react-resizable-panels:layout=${JSON.stringify(sizes)}`
    }
    return (
        <div className="w-full h-full">
            <PanelGroup direction="horizontal" onLayout={Layout} autoSaveId="condition">
                {
                    showLeftPanel && (
                        <>
                            <Panel defaultSize={defaultLayout[0]} collapsible>
                                {leftSide}
                            </Panel>
                            <PanelResizeHandle className="border-r-2 border-zinc-600"/>
                        </>
                    )
                }
                <Panel defaultSize={defaultLayout[1]}>
                    {rightSide}
                </Panel>
            </PanelGroup>
        </div>
);
};

export default ResizablePanel