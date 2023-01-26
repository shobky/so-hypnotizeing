import React from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import Form from './pages/form/Form'
import Home from './pages/home/Home'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Form />} />

        </Routes>
    )
}

export default Routers