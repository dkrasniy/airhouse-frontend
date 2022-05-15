import React, { useState } from 'react'
import Button from '../atoms/Button'
import Layout from '../components/Layout'
import PageLayout from '../components/PageLayout'
import Word from '../components/Word'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { motion } from "framer-motion";
import { PlusCircleIcon } from '@heroicons/react/solid'

const container = {
    visible: { transition: { staggerChildren: 0.08 } }
  };
  
const wordItem = {
    hidden: { y: 3, opacity: 0 },
    visible: { y: 0, opacity: 1 }
}; 

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
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><PlusCircleIcon className='h-5 w-5 text-airhouse-400'/></div> 
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