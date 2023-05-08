import React, { useState } from 'react'
import DatePicker from "react-datepicker";

const formatDate = (date) => {
    const options = { timeZone: 'America/Toronto', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second:'numeric' }
    const torontoTime = date.toLocaleString('en-US', options)
    return torontoTime
}

export default function DiaryForm({ addItem }) {
    const [title, setTitle] = useState("")
    const [acf2, setAcf2] = useState("")
    const [text, setText] = useState("")
    const [commentDate, setCommentDate] = useState("")

    const onSubmit = (event) => {
        event.preventDefault()
        let itemObject = {
            title: title,
            acf2: acf2,
            date: formatDate(new Date()),
            text: text
        }
        addItem(itemObject)
        setTitle("")
        setText("")
        setAcf2("")
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="diary-form">
                    <input value={title} maxLength={30} onChange={(event) => setTitle(event.target.value)} placeholder="Feedback Subject" className="diary-subject-input"/>
                    <input value={acf2} maxLength={4} onChange={(event) => setAcf2(event.target.value)} placeholder="ACF2 id" className="diary-acf2-input"/>
                    {/* <input value={commentDate} onChange={(event) => setCommentDate(event.target.value)} type="date" className="diary-date-input"/> */}
                </div>
                <textarea value={text} maxLength={150} onChange={(event) => setText(event.target.value)} placeholder="Enter feedback here" rows="2" className="diary-textarea">
                </textarea>
                <button type="submit" className="diary-button">Add Item To Feedback List</button>
            </form>
        </div>
    )
}
