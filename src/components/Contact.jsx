import { BsGithub } from 'react-icons/bs'
import {AiFillLinkedin, AiOutlineWhatsApp} from 'react-icons/ai'

export function Contact(){
    return (
        <div className="w-full h-5/6 justify-center items-center flex flex-wrap mt-20 text-white font-bold text-2xl font-arial gap-5 md:gap-44 absolute">
            <div className=" flex flex-col w-72 items-center ">
                <a href="https://wa.me/5581997210434" target="_blank"><button className="w-96 rounded-md hover:shadow-2xl hover:shadow-zinc-800 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 hover:duration-300 gap-3 flex items-center justify-center"><AiOutlineWhatsApp/> WhatsApp</button></a>
                <a href=""><button onClick={(e) => e.preventDefault()} className="w-96 rounded-md hover:shadow-2xl hover:shadow-zinc-800 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 hover:duration-300  flex items-center justify-center">E-mail: devdeyvid2022@gmail.com</button></a>
                <a href="https://www.linkedin.com/in/deyvid-tavares-37918b236/" target="_blank"> <button className="w-96 rounded-md hover:shadow-2xl hover:shadow-zinc-800 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 hover:duration-300 gap-3  flex items-center justify-center"><AiFillLinkedin/>  LinkedIn</button></a>
                <a href="https://github.com/DevDeyvidTav" target="_blank"> <button className="w-96 rounded-md hover:shadow-2xl hover:shadow-zinc-800 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 hover:duration-300 gap-3 flex items-center justify-center"><BsGithub/>  GitHub</button> </a>
            </div>
        </div>
    )
}