import React, { useState } from 'react'
import Button from '../atoms/Button'
import Layout from '../components/Layout'
import PageLayout from '../components/PageLayout'
import Word from '../components/Word'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { motion } from "framer-motion";


const container = {
    visible: { transition: { staggerChildren: 0.08 } }
  };
  
const wordItem = {
    hidden: { y: 3, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};
  

let addIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-5 w-5 text-airhouse-400"><path fill="currentColor" d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z"/></svg>


export default function AddWordsView() {
    const [words, setWordsList] = useLocalStorage('words', '')
 
    const [input, setInput] = useState("")

    const handleAddItem = (e) => {
        e.preventDefault(); 
        setWordsList([ ...words,{ word: input, datetime: new Date() }]); 
        setInput("")
    }

    return (
        <Layout>
            <PageLayout title={"Add Words View"}>

            <form onSubmit={(e)=>handleAddItem(e)}>
              <div className='flex w-full border-b pb-4 border-gray-100 mb-4'>
                <div className="relative rounded-xl shadow-sm flex-1 mr-3">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">{addIcon}</div> 
                    <input required placeholder="Add word" value={input} className='pl-10 bg-gray-50 transition duration-200 ease-in-out font-semibold rounded-xl p-3 w-full focus:ring-airhouse-300 focus:border-airhouse-300 outline-none focus:ring-2 border' onChange={(e) => setInput(e.target.value)} />
                </div>
 
                     <Button type="submit" className={"py-1"}>Add Word</Button> 
 
             
                </div>
                </form> 
                <motion.ul
                    className='space-y-3'
                    variants={container}
                    initial="hidden"
                    animate="visible"
                > <>

                        {words && words.map(({word, datetime}) => <motion.li variants={wordItem} key={datetime}><Word word={word}  id={datetime} /></motion.li>)}
                    </>
                </motion.ul>


            </PageLayout>
        </Layout>
    )
}