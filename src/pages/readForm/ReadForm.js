import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/Config';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import SingleMsg from './SingleMsg';
import './readForm.css'
import SearchBar from './SearchBar';
import { FaEnvelopeOpen } from 'react-icons/fa'

const ReadForm = () => {

    const [password, setPassword] = useState()
    const [input, setInput] = useState()


    const formQ = collection(db, 'form-data')
    const [formData] = useCollectionData(formQ)

    const [displayDiv, setDisplayDiv] = useState(null);

    const handleClick = (index) => {
        setDisplayDiv(index);
    }

    const close = () => {
        setDisplayDiv(null)
    }

    useEffect(() => {
        const getPassword = async () => {
            const docRef = doc(db, "SECRETS", "PASSWORD");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setPassword(docSnap.data())
            } else {
                // doc.data() will be undefined in this case
                alert('problem')
            }
        }
        getPassword()
    }, [])

    return (
        <div className='forms'>
            {
                input !== password?.password ?
                    <div className='form_password-div'>
                        <input className='form_password-input' placeholder='ADMIN PASSWORD' onChange={(e) => setInput(e.target.value)} />
                    </div>
                    :
                    <>
                        <SearchBar close={close} />
                        <div>
                            {
                                formData?.map((msg, index) => (
                                    <div>
                                        <div className='form_msg-expandable' >
                                            {
                                                displayDiv == null ?

                                                    <div className='forms_msg-out'>
                                                        <div className='forms_msg-out_layout'>
                                                            <p className='forms-out-name'>{msg.contents.name}</p>
                                                            {<p style={{ opacity: .6 }}>{msg.contents.idea.slice(0, window.innerWidth > 800 ? 100 : 40)}...</p>}
                                                        </div>
                                                        <button onClick={() => handleClick(index)} className='expand-ico'><FaEnvelopeOpen /></button>
                                                    </div>

                                                    : index === displayDiv && (
                                                        <SingleMsg displayDiv={displayDiv} key={msg.contents.email} msg={msg} />
                                                    )
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div></>
            }


        </div>
    )
}

export default ReadForm