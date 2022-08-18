import { Routes, Route, BrowserRouter as Router, NavLink } from "react-router-dom"
import { Home } from "./components/Home"
import { Loja } from "./components/Loja"
import { useContext, useState } from "react"
import { Contact } from "./components/Contact"
import { Cart } from "./components/Cart"
import { CartContext } from "./contexts/CartContext"

export function App() {
  const [open, setOpen] = useState(false)
  const { qtditems, setQtditems} = useContext(CartContext)
  return (
    <div className="max-w-screen-sm md:max-w-none absolute lg:max-w-none bg-gradient-to-t from-white to-violet-800 w-screen h-screen">
      <Router>
        <div className="Navegation| shadow-sm shadow-zinc-800 flex w-screen h-12 bg-violet-800 text-white font-arial font-extrabold items-center justify-between">
          <NavLink className="text-3xl ml-2" to="/">DTStore.</NavLink>
          <div className="md:flex gap-32 mr-6 hidden ">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/loja/">Loja</NavLink>
            <NavLink to="/contact"> contate-nos</NavLink>
            <NavLink to="/Cart"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg><p className={`${qtditems == 0  ? 'hidden' : 'flex'} w-6 h-6 bg-red-700 absolute text-white rounded-full flex items-center justify-center`}>{qtditems}</p></NavLink>
          </div>
          <div className=" flex gap-8 mr-4 md:hidden ">
            <NavLink to="cart"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg><p className={`${qtditems == 0  ? 'hidden' : 'flex'} w-6 h-6 bg-red-700 absolute text-white rounded-full flex items-center justify-center`}>{qtditems}</p></NavLink>
            <button onClick={() => setOpen(!open)}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg></button>

          </div>
        </div>
        <div className={`${open ? ' w-44 h-96 ' : 'w-0'} bg-violet-800  text-white font-extrabold font-arial flex flex-col  absolute duration-300`}>
          <button onClick={() => setOpen(!open)} className={`${open ? 'flex w-6 h-6 items-center justify-center' : 'hidden'}`}><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg></button>
          <div className={`${open ? 'flex flex-col' : 'hidden'} gap-10 justify-center w-full h-3/4 items-center `} >
            <NavLink onClick={() => setOpen(!open)} to='/'>Home</NavLink>
            <NavLink onClick={() => setOpen(!open)} to='/Loja'>Loja</NavLink>
            <NavLink onClick={() => setOpen(!open)} to='/Contact'>Contate-nos</NavLink>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loja" element={<Loja />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  )
}