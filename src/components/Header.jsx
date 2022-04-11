import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {VscThreeBars} from 'react-icons/vsc'


function Header() {
    const [showMenu, setShowmenu] = useState('md:hidden')
    const menuItems = [
        {
            title: 'Home',
            key: '/'
        },

        {
            title: 'Contact',
            key: '/contact'
        }
    ]

    const pathname = window.location.pathname

  return (
      <div className='text-white font-pops fixed top-0 left-0 right-0 z-50'>
          <div className={`flex bg-theme justify-between items-center p-2 shadow-lg ${showMenu=='' && 'md:flex-col'}`}>
                <div className='flex justify-between w-full items-center'>
                    <h1 className='text-4xl font-semi-bold'>A N D R E W</h1>
                    <VscThreeBars onClick={()=>{
                    if(showMenu===`md:hidden`) {
                        setShowmenu('')
                    }
                    else {
                        setShowmenu(`md:hidden`)
                    } 
                    }}
                    className='lg:hidden xl:hidden 2xl:hidden 3xl:hidden md:flex cursor-pointer text-size-5'/>

                </div>

                <div className='flex md:hidden'>
                    {menuItems.map((item) => {
                        return <li className={`list-none mx-5 p-1 py-1 ${item.key==pathname && 'bg-white text-blue-500 font-semi-bold rounded-md'}`}> 
                            <Link to={`${item.key}`}>{item.title}</Link>
                        </li>
                    })}
                </div>
                {/* MOBILE MENU flex col to columnize the li titles */}
                <div className={`md:flex items-start justify-start w-full flex-col 2xl:hidden xl:hidden 3xl:hidden lg:hidden ${showMenu}`}>
                    {menuItems.map((item) => {
                        return <li className={`list-none my-1 mt-2 ${item.key==pathname && 'bg-white p-1 text-blue-500 font-semi-bold rounded-md'}`}> 
                            <Link to={`${item.key}`}>{item.title}</Link>
                        </li>

                    })}
                </div>
          </div>
      </div>
  )
}

export default Header