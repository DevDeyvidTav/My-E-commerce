import { useContext, useEffect } from "react"
import { CartContext } from "../contexts/CartContext"
import { NavLink } from "react-router-dom"
export function Cart() {
  const { cart, setCart, valores, setValores, soma, setSoma, cartDelete, valorTotal } = useContext(CartContext)
  useEffect(() => valorTotal(), [valores])
  return (
    <div className="cart | w-screen h-5/6 flex items-center justify-center">
      <ul className="flex flex-col mt-20 gap-2 w-72  justify-center items-center">
        {cart.map((cart, i) => {
          return (
            <li className="bg-white shadow-2xl w-72 rounded-lg p-2 font-bold shadow-zinc-800" key={i} >{cart.nome}
              <div className="flex justify-between items-center">
                <img className="w-10 rounded-lg h-10" src={cart.img} alt="" />
                <p className="text-green-400">R${cart.Preco}</p>
                <button onClick={() => cartDelete(i)} className="bg-red-400 w-6 h-6">x</button>
              </div>

            </li>
          )
        })}
        <p className={`${soma == 0 ? 'hidden' : 'flex'} bg-green-400 gap-6 w-72 p-2 rounded-md`}>Valor total: R${soma}</p>
        <p className={`${soma == 0 ? 'flex' : 'hidden'} max-h-80 h-80 mt-32  flex-col  gap-10 text-2xl w-72 text-white shadow-2xl shadow-zinc-300 rounded-md p-10 items-center justify-center`}><p className="relative">Seu carrinho ainda está vazio, compre algo na loja</p>
          <button className="bg-violet-800 w-56 max-w-56 relative rounded-md p-2 hover:w-64 hover:duration-300 ease-in-out"><NavLink to="/Loja">Voltar para a Loja</NavLink></button>
        </p>
        <button className={`${soma == 0 ? 'hidden' : 'flex'} "font-arial font-bold text-white text-2xl flex justify-center bg-violet-800 w-56 max-w-56 relative rounded-md p-2 hover:w-64 hover:duration-300 ease-in-out`}>Comprar</button>
      </ul>
    </div>

  )
}