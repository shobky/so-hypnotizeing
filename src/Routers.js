import { async } from '@firebase/util'
import { collection, doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import { db } from './firebase/Config'
import Form from './pages/form/Form'
import Home from './pages/home/Home'
import ReadForm from './pages/readForm/ReadForm'

const Routers = () => {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Form />} />
            <Route path={`/001`} element={<ReadForm />} />
        </Routes>
    )
}

export default Routers