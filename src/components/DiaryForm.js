import React, { useState } from 'react'

export default function DiaryForm({ addItem }) {
    const [title, setTitle] = useState("")
    const [acf2, setAcf2] = useState("")
    const [date, setDate] = useState("")
    const [text, setText] = useState("")


    const onSubmit = (event) => {
        event.preventDefault()
        let itemObject = {
            title: title,
            acf2: acf2,
            date: date,
            text: text
        }
        addItem(itemObject)
        setTitle("")
        setText("")
        setDate("")
        setAcf2("")
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="diary-form">
                    <input value={title} maxLength={30} onChange={(event) => setTitle(event.target.value)} placeholder="Feedback Subject" className="diary-subject-input"/>
                    <input value={acf2} maxLength={4} onChange={(event) => setAcf2(event.target.value)} placeholder="ACF2 id" className="diary-acf2-input"/>
                    <input value={date} onChange={(event) => setDate(event.target.value)} placeholder="enter date here" className="diary-date-input" />
                    {/* <input value={date} onChange={(event) => setDate(event.target.value)} type="date" className="diary-date-input"/> */}
                </div>
                <textarea value={text} maxLength={150} onChange={(event) => setText(event.target.value)} placeholder="Enter feedback here" rows="2" className="diary-textarea">
                </textarea>
                <button type="submit" className="diary-button">Add Item To Feedback List</button>
            </form>
        </div>
    )
}
