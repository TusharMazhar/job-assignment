import './App.css'
import {BrowserRouter ,Routes, Route } from "react-router-dom";
import PostList from './components/PostList'
import PostDetails from './components/PostDetails'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PostList />} />
            <Route path='/post/:postId' element={<PostDetails />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
