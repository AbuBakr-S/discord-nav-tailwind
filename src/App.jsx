import ChannelBar from './components/ChannelBar/ChannelBar'
import Sidebar from './components/SideBar/SideBar'
import ContentContainer from './components/ContentContainer/ContentContainer'

function App() {

  return (
    <div className="flex">
      <Sidebar />
      <ChannelBar />
      <ContentContainer />
    </div>
  )
}

export default App
