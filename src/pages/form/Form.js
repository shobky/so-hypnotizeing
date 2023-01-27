import React from 'react'
import video from '../../assets/8f70714b.mp4'
import './form.css'
import textandico from '../../assets/textandico.png'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import { IoMdSend } from 'react-icons/io'


const Form = () => {
    const navigate = useNavigate()
    return (
        <div className='form'>
            <Link to='/' className='form_back-ico' > <HiArrowNarrowLeft className='form_back-ico' /></Link>
            <video className="form_video" loop muted autoPlay playsInline >
                <source src={video} />
            </video>
            <div className='form_container'>
                <form className='form_inform'>
                    <p className='form_header'>Hello, So Hypnotizing</p>
                    <div>
                        <label type="text" className='form_label'>My name is</label>
                        <input placeholder='Full name' className='form_input form_input-margin form_input-margin__mb' />
                        <label type="text" className='form_label'>from</label>
                        <input placeholder='Website or company name' className='form_input form_input-margin ' />
                    </div>
                    <br />

                    <div className='discus_container'>
                        <label type="text" className='form_label'>I would like to discus</label>
                        <select className='form_discus_select'>
                            <option className='form_sidcus_option'>software devolpment</option>
                            <option className='form_sidcus_option'>software defv</option>
                            <option className='form_sidcus_option'>software defv</option>
                            <option className='form_sidcus_option'>software defv</option>
                            <option className='form_sidcus_option'>software defv</option>

                        </select>
                    </div>
                    <br />
                    <label type="text" className='form_label '>Project idea & design brief</label>
                    <textarea rows="2" cols="20" maxLength='170' placeholder={`PITCH YOU PROJECT IDEA`} className='form_input form_msg-input' />
                    <br />
                    <div className='budget_container'>
                        <label type="text" className='form_label '>The budget for that project is</label>
                        <div className='form_budget'>
                            <button type='button' className='form_budget-btns'>{`< $5k`}</button>
                            <button type='button' className='form_budget-btns'>{` $10k ~ 20k`}</button>
                            <button type='button' className='form_budget-btns'>{` $20k ~ 50k`}</button>
                            <button type='button' className='form_budget-btns'>{` $50k ~ 200k`}</button>

                        </div>
                    </div>
                    <br />
                    <div>
                        <label type="text" className='form_label '>I learned about you company through</label>
                        <input placeholder='' className='form_input form_input-margin' />
                    </div>
                    <br />
                    <div className='contactme_container'>
                        <div>
                            <label type="text" className='form_label '>Contact me back at</label>
                            <input placeholder='YOUR EMAIL' className='form_input form_input-margin ' />
                        </div>
                        <button type='button' className='form_button'> SUBMIT </button>
                    </div>
                    <br />



                </form>
            </div>
        </div>
    )
}

export default Form



