import React from 'react'
import { Outlet } from 'react-router-dom'
import Form from '../Form/Form'
import Groups from '../Groups/Groups'
import Header from '../Header/Header'
const Home = () => {
  return (
    <>
     <Header/>
     <Form/>
     <Groups/>
     <Outlet/>
    </>
  )
}

export default Home