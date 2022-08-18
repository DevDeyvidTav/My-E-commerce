import { useContext, useEffect } from "react"
import { CartContext } from "../contexts/CartContext"

export function Cart(){
    const { cart, setCart, valores, setValores, soma, setSoma, cartDelete,valorTotal } = useContext(CartContext)
    useEffect(()=>valorTotal(),[valores])
    return (
        
        <ul className="flex flex-col gap-5 w-72 mt-5 ">
        {cart.map((cart, i) => {
          return (
            <li className="bg-white shadow-2xl shadow-zinc-800" key={i} >{cart.nome}
              <div className="flex justify-between">
                <img className="w-10 h-10" src={cart.img} alt="" />
                <button onClick={() => cartDelete(i)} className="bg-red-400 w-6 h-6">x</button>
              </div>

            </li>
          )
        })}
        <p className={`${soma == 0 ?'hidden' :'flex'} bg-green-400 p-2 rounded-md`}>Valor total: R${soma}</p>
        <p className={`${soma == 0 ?'flex' :'hidden'} bg-white rounded-md`}>Seu carrinho ainda está vazio, compre algo na loja</p>
      </ul>
    )
}