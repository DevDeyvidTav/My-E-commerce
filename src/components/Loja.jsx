import { produtos } from "../Products"

export function Loja(){
    return (
        <ul className="flex flex-wrap gap-4 justify-center mt-4">
          {produtos.map((produto, i) => {
            return (<li className="shadow-zinc-700 bg-white shadow-2xl rounded-md p-2" key={i}><img className="w-64 rounded-md h-80 " src={produto.img} alt="" /><p>{produto.nome}</p><p>Preço: <span className="text-blue-700">R${produto.Preco}</span></p></li>)
          })}  
        </ul>
    )
}