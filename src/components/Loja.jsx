import { useContext, useEffect, useState } from "react"
import { CartContext } from "../contexts/CartContext"
import { produtos } from "../Products"
import { toast } from 'react-toastify'

export function Loja() {

  const [message, setMessage] = useState(false)
  const { cart, setCart, valores, setValores, soma, setSoma,valorTotal, addItem } = useContext(CartContext)
  

  useEffect(()=>valorTotal(),[valores])

  return (

    <ul className="flex flex-wrap gap-4 justify-center mt-20">
      <p className={`${message ? 'flex' : 'hidden' } fixed bg-green-500 text-white px-12 rounded-lg p-2 font-bold font-arial text-2xl`}>Item adicionado ao carrinho</p>
      {produtos.map((produto, i) => {
        return (<li className="shadow-zinc-700 bg-white shadow-2xl rounded-md p-2" key={i}><img className="w-64 rounded-md h-80 " src={produto.img} alt="" /><p>{produto.nome}</p><p>Preço: <span className="text-blue-700">R${produto.Preco}</span></p><button className="p-2 shadow-zinc-700 shadow-md rounded-md text-white bg-violet-800 " onClick={() => addItem(produto)}>adicionar ao carrinho</button></li>)
      })}

    </ul>
  )
}