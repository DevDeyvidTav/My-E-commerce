import { createContext } from "react";
import { useState } from "react";
export const CartContext = createContext({})

export const CartProvider = ({ children}) => {
    const hello = {
        nome: 'hello'
    }
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
      }
    const [qtditems, setQtditems] = useState(0)

    return(
        <CartContext.Provider value={{hello, cart, setCart, valores, setValores, soma, setSoma, cartDelete, valorTotal, qtditems, setQtditems, addItem}} > {children}</CartContext.Provider>

    )
}