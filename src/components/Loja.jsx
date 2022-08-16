import { useEffect, useState } from "react"
import { produtos } from "../Products"

export function Loja() {
  let [soma, setSoma] = useState(0)
  const [valores, setValores] = useState([])
  const [cart, setCart] = useState([])


  
  function cartDelete(i) {
    const tempCart = [...cart]
    tempCart.splice(i, 1)
    setCart(tempCart)
    const tempValores = [...valores]
    tempValores.splice(i, 1)
    setValores(tempValores)
  }

  
  useEffect(()=>valorTotal(),[valores])

  function valorTotal() {
    var numeros = [...valores];
    var total = numeros.reduce(function(total, numero){
    return total + numero;
    }, 0);
    console.log(total)
    setSoma(total);
  }
  function addItem(produto) {
    setCart([...cart, produto])
    setValores([...valores, produto.Preco])
  }
  return (
    <ul className="flex flex-wrap gap-4 justify-center mt-4">
      {produtos.map((produto, i) => {
        return (<li className="shadow-zinc-700 bg-white shadow-2xl rounded-md p-2" key={i}><img className="w-64 rounded-md h-80 " src={produto.img} alt="" /><p>{produto.nome}</p><p>Preço: <span className="text-blue-700">R${produto.Preco}</span></p><button onClick={() => addItem(produto)}>adicionar ao carrinho</button></li>)
      })}
      <ul>
        {cart.map((cart, i) => {
          return (
            <li key={i} >{cart.nome}
              <div className="flex justify-between">
                <img className="w-10 h-10" src={cart.img} alt="" />
                <button onClick={() => cartDelete(i)} className="bg-red-400 w-6 h-6">x</button>
              </div>

            </li>
          )
        })}
        <p>{soma}</p>
      </ul>
    </ul>
  )
}