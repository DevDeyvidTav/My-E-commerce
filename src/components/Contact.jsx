import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import Wpp from '../images/Whatsapp_icon-icons.com_66931.svg'
import mario from '../images/mario.png'

export function Contact(){
    return (
        <div className="w-full h-5/6 justify-center flex flex-wrap mt-20 text-white font-bold text-2xl font-arial gap-5 md:gap-44 absolute">
            <div className=" flex flex-col w-72 items-center ">
                <a href="https://wa.me/5581997210434" target="_blank"><button className="w-96 rounded-md hover:shadow-2xl hover:shadow-zinc-800 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 hover:duration-300  flex items-center justify-center">WhatsApp<img className="w-7 h-7" src={Wpp} alt="" /></button></a>
                <a href=""><button className="w-96 rounded-md hover:shadow-2xl hover:shadow-zinc-800 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 hover:duration-300  flex items-center justify-center">E-mail</button></a>
                <a href="https://www.linkedin.com/in/deyvid-tavares-37918b236/" target="_blank"> <button className="w-96 rounded-md hover:shadow-2xl hover:shadow-zinc-800 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 hover:duration-300  flex items-center justify-center">LinkedIn</button></a>
            </div>
            <div className="flex flex-col gap-10">
            <h2 className="text-3xl md:text-white text-violet-800">Mais Projetos</h2>
                <div className="flex flex-wrap">
                <img src={mario} className="w-44 h-32 cursor-pointer hover:w-56 hover:h-40 hover:duration-300 hover:shadow-2xl hover:shadow-white fixed" alt="" />
                </div>
            </div>
        </div>
    )
}