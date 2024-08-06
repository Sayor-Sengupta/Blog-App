import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import MyComponent from './utils/QuillEditor'
import MainScreen from './pages/MainScreen'
import CreatePost from './pages/CreatePost'
import PostPage from './pages/PostPage'
import { Route, Routes ,Navigate} from 'react-router-dom'
import { useUserContext } from './context/userContext'

function App() {
  // const {authUser} = useUserContext()

  return (
    <>
      <Routes>
        <Route path='/' element = {<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup'  element={<SignUp/> }/>
        <Route path='/Home' element={<MainScreen/>}/>
        <Route path='/create' element={<CreatePost/>}/>
        <Route path='/post/:id' element={<PostPage/>}/>

      </Routes>
     
    </>
  )
}

export default App
