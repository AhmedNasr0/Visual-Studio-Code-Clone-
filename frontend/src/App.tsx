import PreviewContent from './components/PreviewContent'
import RecursiveComponent from './components/RecursiveComponent'
import ResizablePanel from './components/ResizablePanel'
import { fileTree } from './data/fileTree'
function App() {
  return (
    <div className='flex w-full h-screen'>
      <ResizablePanel rightSide={
        <PreviewContent/>
      } 
      leftSide={
        <div className='pt-3'>
            <RecursiveComponent  fileTree={fileTree}/>
        </div>
      } 
      showLeftPanel={true}
      />
      
    </div>

  )
}

export default App
