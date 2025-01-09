import React from 'react'
import FeedbackContext from '../context/FeedbackContext'
import { useContext } from 'react'

function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)
    let average=feedback.reduce((acc,curr)=>{
        return acc+curr.rating
    },0) /feedback.length
    //zero is the default accumulator value
    average=average.toFixed(1)//sets the decimal places to always 1

    return (
        <div className='feedbackStats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Ratings: {isNaN(average)?0:average}</h4>
        </div>
    )
}

export default FeedbackStats