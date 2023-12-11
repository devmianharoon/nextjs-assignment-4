'use client'
import { useState } from "react"

export default function Home() {

  const data: string[] = ["IMRAN KHAN", "ALI MUHAMMAD KHAN", "MURAD SEEAD", "IMRAN RIAZ",
    "MEHAR TAYYAB", "MUHAMMAD ALI MIRZA", "SHAH MEHMOOD QURASHI ", "SHER AFZAL MURWAT"]
  const [index, setIndex] = useState<number>(0);
  const [name, setName] = useState<string>("MEHAR HAROON");

  const incrementHandler = () => {
    const nextIndex = (index + 1) % data.length;
    setIndex(nextIndex)
    setName(data[nextIndex])
  }; 
  const decrementHandler = () => {
    const preIndex = (index - 1 + data.length) % data.length;
    setIndex(preIndex);
    setName(data[preIndex])
  }
  return (
    <div>
      <h1 className="font-bold text-lg mt-10 mx-10">Develop a Next js app and use states to ahow the name of a person from a list and on click of button it should print next or previous name from the list</h1>
      <div className=" mt-10 mx-10 flex gap-14 justify-center items-center ">
      <button className="border-[3px] font-mono font-bold px-3 py-2 bg-orange-500 rounded-lg" onClick={decrementHandler}>Prev</button>
        <h1 className="font-mono font-bold text-lg  text-center">{name}</h1>
        <button className="border-[3px] font-mono font-bold px-3 py-2 bg-orange-500 rounded-lg" onClick={incrementHandler}>Next</button>
      </div>
    </div>
  )
}
