import React from 'react'
import Navbar from '../compositions/Navbar/index'
import ViewContainer from './ViewContainer'

export default function Layout() {
    return (
        <div>
           <Navbar/>
           <ViewContainer/>
        </div>
    )
}