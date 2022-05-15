import React from 'react'
import Button from '../atoms/Button'

const WordListEmptyState = () => (
    <div className='py-20 text-center'>
        <h2 className='font-bold text-gray-600 text-lg md:text-xl'>Word list is empty</h2>
        <p className='text-gray-400'>Start by adding a few words to the list.</p>
        <Button to={'/add'} className="my-6">Add words</Button>
    </div>
)

export default WordListEmptyState