import React, { ReactNode } from 'react'
import Header from '../components/Header'

const MainLayout = ({ children }: { children: ReactNode }) => {

  return (
    <>
        <Header />
        <div className='container'>
            { children }
        </div>
        fghfyu
        fghjk
    </>
  )
}

export default MainLayout