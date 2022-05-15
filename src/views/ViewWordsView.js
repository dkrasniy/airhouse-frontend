import React from 'react'
import Layout from '../components/Layout'
import PageLayout from '../components/PageLayout'
import { useLocalStorage } from '../hooks/useLocalStorage'
import Word from '../components/Word'
import { motion } from "framer-motion";
import WordListEmptyState from '../components/WordListEmptyState'
import { Link } from 'react-router-dom'

const container = {
  visible: { transition: { staggerChildren: 0.08 } }
};

const wordItem = {
  hidden: { y: 3, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function ViewWordsView() {
  const [words, setWords] = useLocalStorage('words', '')

  const deleteWord = (id) => {
    let updatedWords = words.filter(word => word.datetime !== id)
    setWords([...updatedWords])
  }

  return (
    <Layout>
      <PageLayout title={"View Words"}>
        {words && words.length < 1 ? <WordListEmptyState /> : <div className='border-b mb-4 pb-4 border-gray-100'><h2 className='font-bold text-gray-600 md:text-lg '>List contains {words && words.length} word{words && words.length !== 1 ? 's' : ''}</h2>
        <p className='text-gray-400'><Link to='/add' className='text-gray-400 transition ease duration-200 hover:text-airhouse-600'>Add more words</Link></p></div> }
        <motion.ul className='space-y-3' variants={container} initial="hidden" animate="visible">
          {words && words.map(({ word, datetime }) => <motion.li key={datetime} variants={wordItem}>
            <Word word={word} id={datetime} allowDelete={true} deleteWord={deleteWord} />{word.datetime}</motion.li>)}
        </motion.ul>
      </PageLayout>
    </Layout>)
}