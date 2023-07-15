import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

type LayoutProps ={
  children:any;
}


const Layout:React.FC<LayoutProps> = ({children}) => {
  return (
    <React.Fragment>
      
      <div>
        <Header />
      </div>
      {children}
      <div>
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Layout
