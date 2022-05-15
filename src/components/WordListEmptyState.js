import React from 'react'
import PropTypes from 'prop-types';
import Button from '../atoms/Button'


const WordListEmptyState = ({hideAddLink}) => (
    <div className='py-20 text-center'>
        <h2 className='font-bold text-gray-600 text-lg md:text-xl'>Word list is empty</h2>
        <p className='text-gray-400'>Start by adding a few words to the list.</p>
        {!hideAddLink ? <Button to={'/add'} className="my-6">Add words</Button> : null}
    </div>
)

WordListEmptyState.propTypes = {
    hideAddLink: PropTypes.bool
};
WordListEmptyState.defaultProps = {
    hideAddLink: false
};

export default WordListEmptyState

