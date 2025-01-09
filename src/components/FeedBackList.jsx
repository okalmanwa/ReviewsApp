import FeedBackItem from "./FeedBackItem";
import Card from "./shared/Card"
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedBackList() {
    const {feedback}=useContext(FeedbackContext)
    if (!feedback || feedback.length === 0) return <p>No reviews yet</p>

    return (
        <div className="feedback-list">
            {feedback.map((item) => {
                return <FeedBackItem 
                key={item.id} 
                item={item} 
                 />//must do return!!
            })}

        </div>
    )

}

export default FeedBackList;