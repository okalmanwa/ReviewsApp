import Card from "./shared/Card"
import { useState,useContext,useEffect } from "react"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import FeedbackContext from "../context/FeedbackContext"
function Form() {
    const [text, setText] = useState('')
    const [disableBtn, setDisabledBtn] = useState(true)
    const [message, setMessage] = useState("")
    const [rating, setRating] = useState(10)

    const {addFeedback,feedbackEdit,updateFeedback}=useContext(FeedbackContext)

    useEffect(()=>{
        if(feedbackEdit.edit===true){
            setDisabledBtn(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }

    },[feedbackEdit])//dependencies that when changed causes the function to run

    const handleTextChange = (e) => {
        setText(e.target.value)
        if (text === "") {
            setDisabledBtn(true)
            setMessage(null)
        } else if (text != null && text.trim().length <= 10) {
            setDisabledBtn(true)
            setMessage("Text must be atleast 10 characters")
        } else {
            setMessage(null)
            setDisabledBtn(false)
        }

    }

    const newRating = (newRating) => {
        return newRating
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text,//same as text:text
                rating
            }
            if(feedbackEdit.edit===true){
                updateFeedback(feedbackEdit.item.id,newFeedback)
            }else{
                addFeedback(newFeedback)
            }
      
        }
       


    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us</h2>
                <RatingSelect handleSelect={(rate)=>setRating(rate)} />{/* or handleSelect={(rate)=>{setRating(rate)}} */}
                <div className="input-group">
                    <input type="text" onChange={handleTextChange} value={text} placeholder="Write a review" />
                    <Button type="submit" isDisabled={disableBtn}>send</Button>
                </div>
                <div className="message">{message}</div>
            </form>
        </Card>
    )
}
export default Form