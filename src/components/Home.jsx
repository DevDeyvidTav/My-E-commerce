import { NavLink } from "react-router-dom"

export function Home(){
    return(
        <div className="w-full h-5/6 flex justify-center items-center ">
           <div className="text-2xl font-bold text-white p-5 flex flex-col justify-center items-center w-96 h-72 shadow-2xl shadow-zinc-800 rounded-md gap-10" >
               <p className=" text-center"> A DTStore foi criada pelo desenvolvedor front-end <span className="text-violet-800 text-3xl font-black">Deyvid Tavares</span>, usando react, tailwindcss e router-dom.</p>
               <button className="bg-violet-800 shadow-zinc-800 shadow-md p-2 font-arial rounded-xl"><NavLink to="/Loja">Conheça a Loja!</NavLink></button>

           </div>
        </div>
    )
}