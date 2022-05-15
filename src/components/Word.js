import React from 'react'
import PropTypes from 'prop-types';
import Button from '../atoms/Button'
import { timeAgo } from '../helpers/timeAgo'

const deleteIcon =<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-4 h-4'><path fill="currentColor" d="M150.1 166.1L258.7 57.37C283.7 32.38 324.3 32.38 349.3 57.37L486.6 194.7C511.6 219.7 511.6 260.3 486.6 285.3L377.9 393.9L150.1 166.1z"/><path className="opacity-50" d="M355.9 416H480C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H150.6C133.7 480 117.4 473.3 105.4 461.3L25.37 381.3C.3786 356.3 .3786 315.7 25.37 290.7L150.1 166.1L195.3 211.3L70.63 336L150.6 416H265.4L332.7 348.7L377.9 393.9L355.9 416z"/></svg>

const Word = ({ word, id, deleteWord }) => (
    <div className='bg-white dark:bg-gray-700 shadow-sm overflow-hidden rounded-md px-6 py-4 flex items-center'>
        <span className="font-semibold text-lg flex-1 text-gray-900 dark:text-white">{word}</span>
        <div className="flex items-center">
            <span className="hidden sm:block text-gray-300 text-xs mr-2 ">added {timeAgo(id)}</span>
            {deleteWord ? <Button color="secondary" className={"text-gray-500 hover:text-gray-800 dark:text-white dark:hover:text-white"} onClick={() => deleteWord(id)}>{deleteIcon}</Button> : null}
        </div>
    </div>
)


Word.propTypes = {
    word: PropTypes.string,
    id: PropTypes.string,
    deleteWord: PropTypes.func
}; 
Word.defaultProps = {
    word: 'Default word',
};

export default Word