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
                <div className='form_vid-s'>
                    <img onClick={() => navigate('/')} alt="so hypnotizing" src={textandico} className="form_vid-s_logo" />
                </div>
                <div className='form_inputs-s'>
                    <form className='form_inform'>
                        <label type="text" className='form_label'>YOUR NAME</label>
                        <br />
                        <input placeholder='Full name' className='form_input' />

                        <label type="text" className='form_label'>FROM</label>
                        <br />
                        <input placeholder='Website or company name' className='form_input' />

                        <label type="text" className='form_label'>SUBJECT</label>
                        <br />
                        <input placeholder='What is your message about' className='form_input' />

                        <label type="text" className='form_label '>YOUR MESSAGE</label>
                        <br />
                        <textarea rows="2" cols="20" maxLength='170' placeholder={`Let's get in touch`} className='form_input form_msg-input' />
                        <br />

                        <button type='button' className='form_button'> SEND <IoMdSend className='send-ico' /></button>


                    </form>
                </div>
            </div>

        </div>
    )
}

export default Form



