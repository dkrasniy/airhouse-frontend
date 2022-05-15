import React, { useState } from 'react'
import Button from '../atoms/Button'
import Layout from '../components/Layout'
import PageLayout from '../components/PageLayout'
import WordListEmptyState from '../components/WordListEmptyState'
import Word from '../components/Word'
import { isMatchAlgorithm } from '../helpers/isMatchAlgorithm'
import { useLocalStorage } from '../hooks/useLocalStorage'

let filterIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='h-5 w-5 text-airhouse-400'>       <path fill='currentColor' d="M195.4 55.93C201.8 41.39 216.1 32 231.1 32H600C615.9 32 630.2 41.39 636.6 55.93C643 70.46 640.2 87.4 629.4 99.08L480 261.5V416C480 428.1 473.2 439.2 462.3 444.6C451.5 450 438.5 448.9 428.8 441.6L364.8 393.6C356.7 387.6 352 378.1 352 368V261.5L202.6 99.08C191.8 87.4 188.1 70.46 195.4 55.93H195.4z" /><path className="opacity-50" fill='currentColor' d="M39.99 96H164.1C167.3 105 172.3 113.4 179 120.7L320 273.1V290.7L288 325.5V448C288 460.1 281.2 471.2 270.3 476.6C259.5 482 246.5 480.9 236.8 473.6L172.8 425.6C164.7 419.6 160 410.1 160 400V325.5L10.55 163.1C-.197 151.4-3.019 134.5 3.36 119.9C9.74 105.4 24.11 96 39.99 96V96z" /></svg>

export default function FilterWordsView() {
    const [searchInput, setSearchInput] = useState("")
    const [filterPattern, setFilterPattern] = useState("")
    const [filteredWords, setFilteredWords] = useState([])

    const [words] = useLocalStorage('words')
    const [showResults, setShowResults] = useState(false) // on load, show all words until filtered


    const filterWords = (e) => {
        e.preventDefault();
        setFilterPattern(searchInput)
        let matchedWords = []
        for (let i = 0; i < words.length; i++) {
            if (isMatchAlgorithm(searchInput, words[i].word)) {
                matchedWords.push(words[i])
            }
        }
        setFilteredWords([...matchedWords]);
        setShowResults(true);
    }


    return (
        <Layout>
            <PageLayout title={"Filter"}> 
                <form onSubmit={(e) => filterWords(e)}>
                    <div className='flex w-full border-b pb-4 border-gray-100 mb-4'>
                        <div className="relative rounded-xl shadow-sm flex-1 mr-3">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">{filterIcon}</div>
                            <input required placeholder="Filter words" value={searchInput} className='pl-10 bg-gray-50 transition duration-200 ease-in-out font-semibold rounded-xl p-3 w-full focus:ring-airhouse-300 focus:border-airhouse-300 outline-none focus:ring-2 border' onChange={(e) => setSearchInput(e.target.value)} />
                        </div>
                        <Button type="submit">Filter</Button>
                    </div>
                </form>

                {(!words || words.length < 1) && !showResults ? <WordListEmptyState /> : null}
                
                {showResults ? <div><span className='block text-gray-600 font-semibold text-lg mb-2'>{filteredWords.length} result{filteredWords.length !== 1 ? 's' : ''} for <span className='text-airhouse-500 font-bold'>{filterPattern}</span></span>
                    <div className='space-y-3'>{filteredWords && filteredWords.map(({ word, datetime }) => {
                        return <Word key={datetime} word={word} id={datetime} />
                    })}
                    </div>
                </div> : null} 
            </PageLayout>
        </Layout>)
} 