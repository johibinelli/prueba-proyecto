import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../views/Home"
import Profile from "../views/Profile"

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil" element={<Profile />} />
      </Routes >
    </BrowserRouter>
  )
}

export default RouterApp