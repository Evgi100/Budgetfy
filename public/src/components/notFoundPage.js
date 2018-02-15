import React from 'react'
import {  Link } from 'react-router-dom'


const notFoundPage = () => (
    <div>
        404!
        <Link to="/" >Take me home </Link>
    </div>
)

export default notFoundPage;