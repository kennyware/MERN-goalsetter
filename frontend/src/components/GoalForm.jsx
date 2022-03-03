import { useState } from "react"
import { useDispatch } from 'react-redux'
import { toast } from "react-toastify"
import {createGoal} from '../features/goals/goalSlice'

function GoalForm() {
    const dispatch = useDispatch()
    const [text, setText] = useState('')

    const onSubmit = e => {
        e.preventDefault()

        if(!text) {
            toast.error('Please type a goal')
        }

        dispatch(createGoal({text}))
        setText('')
    }
    
  return (
    <section className="form">
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">Goal</label>
                <input type="text" className="form-control" name='text' id='text' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-group">
                <button className="btn btn-dark btn-block" type="submit">Add</button>
            </div>
    </form>
    </section>
  )
}

export default GoalForm