import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import CountryPage from './pages/CountryPage/CountryPage'
import Layout from './components/Layout'
import CommunityPage from './pages/CommunityPage/CommunityPage'
import ExamPage from './pages/ExamPage/ExamPage'
import TrafficSignsPage from './pages/TrafficSignsPage/TrafficSignsPage'
import StudyPage from './pages/StudyPage/StudyPage'
import VideosPage from './pages/VideosPage/VideosPage'
import SafetySignsPage from './pages/SafetySignsPage/SafetySignsPage'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/:country' element={<CountryPage/>} />
          <Route path='/:country/practice-test' element={<ExamPage/>} />
          <Route path='/:country/traffic-signs' element={<TrafficSignsPage/>} />
          <Route path='/:country/study' element={<StudyPage/>} />
          <Route path='/:country/comments' element={<CommunityPage/>} />
          <Route path='/:country/videos' element={<VideosPage/>} />
          <Route path='/:country/safety-signs' element={<SafetySignsPage/>} />

        </Route>
      </Routes>
    </>
  )
}

export default App
