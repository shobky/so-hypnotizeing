import React from 'react'

const SingleMsg = ({ msg }) => {
    return (
        <div className='singlemsg'>
            <p>SUBJECT : <strong>{msg.contents.discus}</strong></p>
            <br/>
            <p>Hello, So Hypnotizing, <br /> My name is <span>{msg.contents.name}</span>,  from <span>{msg.contents.from}</span>.  <br /> I would like to discus<span> {msg.contents.discus}</span> and my
                My project idea is : <span>"{msg.contents.idea}"</span>. <br />
                The budget for this project is <span>{msg.contents.budget}</span>. I learned about you through <span>{msg.contents.learn}</span>.
                <br />  Contact me at <span>{msg.contents.contact}</span>.</p>
            <br />
            \<br />
            <br />

            <p>Name: <strong>{msg.contents.name}</strong></p>
            <p>Website/Company: <strong>{msg.contents.from}</strong></p>
            <p>Budget: <strong>{msg.contents.budget}</strong></p>
            <p>Through: <strong>{msg.contents.learn}</strong></p>
            <p>Email: <strong>{msg.contents.contact}</strong></p>

        </div>
    )
}

export default SingleMsg