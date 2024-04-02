'use client'

import { MdSearch } from 'react-icons/md'



export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col  items-center p-24 font-sans`}
    >
      <header className="flex flex-col">
        <div className="flex text-3xl italic items-center justify-center">
          Bar Italia 
        </div>
        <p className="flex mt-2 items-center justify-center">Cocktail Bar</p>
        <div className="flex mt-10 " >
          <input
          className=" w-[350px] max-w-96 rounded-md border border-gray-200 py-[9px] pl-6 text-sm outline-2 text-black placeholder:text-gray-500"
          placeholder={"Search"}
          />
          <MdSearch className=' m-1 w-[2rem] h-[2rem] -ml-10 text-black'/>
        </div>
      </header>
      <section className=' flex flex-col items-center w-full mt-10'>
        <div className="flex-col ">
          <div className=' w-[400px] h-32 mt-5 bg-slate-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10'>
            <div className=' p-4 text-2xl ml-3'>Pizza</div>
            <div className=" p-4 text-sm ml-3">Mozarella, Cheese, Tomato, and peproni</div>
          </div>
          <div className=' w-[400px] h-32 mt-5 bg-slate-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10'></div>
        </div>
      </section>
    </main>
  );
}
