'use client'

import { MdSearch } from 'react-icons/md'



export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col  items-center justify-between p-24 font-sans`}
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
    </main>
  );
}
