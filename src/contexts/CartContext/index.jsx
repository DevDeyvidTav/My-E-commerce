import { createContext } from "react";
import { useState } from "react";
export const CartContext = createContext({})
import { toast } from 'react-toastify'

export const CartProvider = ({ children}) => {
    const [cart, setCart] = useState([])
    const [valores, setValores] = useState([])
    let [soma, setSoma] = useState(0)
    function cartDelete(i) {
        const tempCart = [...cart]
        tempCart.splice(i, 1)
        setCart(tempCart)
        const tempValores = [...valores]
        tempValores.splice(i, 1)
        setValores(tempValores)
        setQtditems(qtditems - 1)
        toast.success('removido')
      }
      function valorTotal() {
        var numeros = [...valores];
        var total = numeros.reduce(function(total, numero){
        return total + numero;
        }, 0);
        setSoma(total);
    }
    function valorTotal() {
        var numeros = [...valores];
        var total = numeros.reduce(function(total, numero){
        return total + numero;
        }, 0);
        setSoma(total);
    }
    function addItem(produto) {
        setCart([...cart, produto])
        setValores([...valores, produto.Preco])
        setQtditems(qtditems + 1)
        toast.success('adicionado')
      }
    const [qtditems, setQtditems] = useState(0)
    const [pedidos, setPedidos] = useState([])
    const finalizePurchase = () => {
        toast.success(`Compra finalizada`)
        setPedidos([...cart])
        setCart([])
        setSoma(0)
        setQtditems(0)
        setValores([])
  
    }
    const [open, setOpen] = useState(false)

    return(
        <CartContext.Provider value={{ open, setOpen, cart, setCart, valores, setValores, soma, setSoma, finalizePurchase,cartDelete, valorTotal, qtditems, setQtditems, addItem, pedidos
        }} > {children}</CartContext.Provider>

    )
}