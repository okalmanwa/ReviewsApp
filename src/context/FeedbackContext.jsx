import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export function FeedbackProvider({ children }) {
    const [feedback, setFeedback] = useState([{ id: 1, text: 'This post is from the context component', rating: 10 }])

    const deleteItem = (id) => {
        if (window.confirm("Are you sure you want to delete the feedback ?")) {
            setFeedback(feedback.filter((response) => response.id != id))//returns new array
        }
    }
    const addFeedback = (newFeedback) => {
        newFeedback.id = feedback.length + 1;
        setFeedback([newFeedback, ...feedback])
    }
    const [feedbackEdit, setFeedbackEdit] = useState({//globalStae
        item: {},
        edit: false
    })
    const editFeedback = (item) => {
        setFeedbackEdit(
          {
            item,
            edit:true
          }
        )
    }

    const updateFeedback=(id,updateItem)=>{
        setFeedback(
            feedback.map((item)=>item.id===id?{...item,...updateItem}:item)
        )

    }
  

    return (
        <FeedbackContext.Provider value={{ feedback, deleteItem, addFeedback,editFeedback,feedbackEdit,updateFeedback  }}>
            {children}
        </FeedbackContext.Provider>

    )
}

export default FeedbackContext
