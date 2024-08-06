import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import CountryPage from './pages/CountryPage/CountryPage'
import Layout from './components/Layout'

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='/:country' element={<CountryPage/>} />
          <Route path='/:country/exam' element={<CountryPage/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
