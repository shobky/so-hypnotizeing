import React, { useRef, useState } from 'react'
import video from '../../assets/8f70714b.mp4'
import './form.css'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineDone } from 'react-icons/md'
import { ImSpinner8 } from 'react-icons/im'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase/Config'


const Form = () => {
    const navigate = useNavigate()

    const nameRef = useRef()
    const fromRef = useRef()
    const discusRef = useRef()
    const ideaRef = useRef()
    const learnRef = useRef()
    const contactRef = useRef()

    const [budget, setBudget] = useState('not specified')

    const [form, setForm] = useState('SUBMIT')

    const hadnleSubmitForm = async (e) => {
        e.preventDefault()
        setForm('buffer')
        console.log(learnRef.current.value)
        await setDoc(doc(db, `form-data/${contactRef.current.value}`), {
            MSG: `Hello, So Hypnotizing, My name is ${nameRef.current.value}. from ${fromRef.current.value}.
             I would like to discus ${discusRef.current.value}.my project Idea and design prief is 
             '${ideaRef.current.value}'. The budget for this project is ${budget}. I learned about you 
             thruogh ${learnRef.current.value}. Contact me at ${contactRef.current.value}.
            `,
            contents: {
                name: nameRef.current.value,
                from: fromRef.current.value,
                discus: discusRef.current.value,
                idea: ideaRef.current.value,
                learn: learnRef.current.value,
                budget: budget,
                contact: contactRef.current.value
            }
        }).then(() => {
            setForm('done')
            setTimeout(() => {
                navigate('/')
            }, 500);

        }).catch(() => {
            setForm('SUBMIT')
        })
    }

    return (
        <div className='form'>
            <Link to='/' className='form_back-ico' > <HiArrowNarrowLeft className='form_back-ico' /></Link>
            <video className="form_video" loop muted autoPlay playsInline >
                <source src={video} />
            </video>
            <div className='form_container'>
                <form onSubmit={hadnleSubmitForm} className='form_inform'>
                    <p re className='form_header'>Hello, So Hypnotizing</p>
                    <div>
                        <label type="text" className='form_label'>My name is</label>
                        <input required ref={nameRef} placeholder='Full name' className='form_input form_input-margin form_input-margin__mb' />
                        <label required type="text" className='form_label'>from</label>
                        <input ref={fromRef} placeholder='Website or company name' className='form_input form_input-margin ' />
                    </div>
                    <br />

                    <div className='discus_container'>
                        <label type="text" className='form_label'>I would like to discus</label>
                        <select required ref={discusRef} className='form_discus_select'>
                            <option className='form_sidcus_option'>software devolpment</option>
                            <option className='form_sidcus_option'>software defv</option>
                            <option className='form_sidcus_option'>software defv</option>
                            <option className='form_sidcus_option'>software defv</option>
                            <option className='form_sidcus_option'>software defv</option>

                        </select>
                    </div>
                    <br />
                    <label type="text" className='form_label '>Project idea & design brief</label>
                    <textarea required ref={ideaRef} maxLength='170' placeholder={`PITCH YOU PROJECT IDEA`} className='form_input form_msg-input' />
                    <br />
                    <div className='budget_container'>
                        <label type="text" className='form_label '>The budget for that project is</label>
                        <div className={'form_budget'}>
                            <button onClick={() => setBudget('> $5k')} type='button' className={budget === '> $5k' ? 'form_budget-btns__active' : 'form_budget-btns'}>{`> $5k`}</button>
                            <button onClick={() => setBudget('$10k ~ 20k')} type='button' className={budget === '$10k ~ 20k' ? 'form_budget-btns__active' : 'form_budget-btns'}>{` $10k ~ 20k`}</button>
                            <button onClick={() => setBudget('$20k ~ 50k')} type='button' className={budget === '$20k ~ 50k' ? 'form_budget-btns__active' : 'form_budget-btns'}>{` $20k ~ 50k`}</button>
                            <button onClick={() => setBudget('$50k ~ 200k')} type='button' className={budget === '$50k ~ 200k' ? 'form_budget-btns__active' : 'form_budget-btns'}>{` $50k ~ 200k`}</button>

                        </div>
                    </div>
                    <br />
                    <div>
                        <label type="text" className='form_label '>I learned about you company through</label>
                        <input required ref={learnRef} placeholder='' className='form_input form_input-margin' />
                    </div>
                    <br />
                    <div className='contactme_container'>
                        <div className='form_input-col'>
                            <label type="text" className='form_label '>Contact me back at</label>
                            <input required type="email" ref={contactRef} placeholder='YOUR EMAIL' className='form_input form_input-margin ' />
                        </div>
                        <button type='submit' className='form_button'> {form === 'SUBMIT' ? form : form === 'buffer' ? <ImSpinner8 className='spin' /> : <MdOutlineDone className='done-ico' />} </button>
                    </div>
                    <br />



                </form>
            </div>
        </div>
    )
}

export default Form



