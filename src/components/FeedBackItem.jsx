import React from 'react'
import Card from './shared/Card'
import { FaTimes,FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedBackItem({ item }) {
    const { deleteItem,editFeedback } = useContext(FeedbackContext)

    return (
        <Card>
            <div className="num-display">
                {item.rating}
            </div>
            <button onClick={()=> deleteItem(item.id)} className='close'><FaTimes color='purple' /></button>
            <button className='edit' color='purple' onClick={()=>editFeedback(item)}><FaEdit/></button>
            <div className="text-display">
                {item.text}
            </div>
        </Card>


    )
}

export default FeedBackItem