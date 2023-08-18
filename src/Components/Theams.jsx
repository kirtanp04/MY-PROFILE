import React, { useEffect, useState } from 'react'
import { themes } from '../data'
import TheamsItem from './TheamsItem'
import { FaCog } from 'react-icons/fa'
import {BsSun, BsMoon} from "react-icons/bs"
import "./theams.css"

const getStoreColor = () =>{
    let color = 'hsl(19,96%,52%'
    if(localStorage.getItem('color')){
        color = localStorage.getItem('color')
    }
    return color;
}

const Theams = () => {
    const[showSwitcher,setShowSwitcher] = useState(false)
    const[color,setColor] = useState(getStoreColor())
    const[theme,setTheme] = useState('light-theme')

    const changeColor = (color)=>{
        setColor(color)
    }
    const toggleTheme = () =>{
        if(theme === 'light-theme'){
            setTheme('dark-theme')
        }else{
            setTheme('light-theme')
        }
    }

    useEffect(()=>{
        document.documentElement.style.setProperty('--first-color', color)
        localStorage.setItem('color',color)
    },[color])

    useEffect(()=>{
        document.documentElement.className = theme
    },[theme])
  return (
    <div>
        <div className={`${showSwitcher ? 'show-switcher' : ''} style__switcher`}>
            <div className="style__switcher-toggler"
            onClick={()=>setShowSwitcher(!showSwitcher)}>
                <FaCog/>
            </div>

            <div className="theme__toggler"  onClick={toggleTheme}>
                {
                    theme === 'light-theme' ? <BsMoon/> : <BsSun/>
                }
            </div>

            <h3 className="style__switcher-title">
                Style Switcher
            </h3>
            <div className="style__switcher-items">
                {
                    themes.map((theme,index)=>{
                        return <TheamsItem key={index} {...theme} changeColor={changeColor}/>
                    })
                }
            </div>

            <div className="style__switcher-close" onClick={()=>setShowSwitcher(!showSwitcher)}>&times;</div>
        </div>
    </div>
  )
}

export default Theams