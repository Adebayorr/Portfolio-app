import React, { useState } from "react"
import './Navigation.scss'
import { navItems } from "../../../Resources"
import { connects } from "../../../Resources"
import {HiMenu} from "react-icons/hi"
import {GrClose} from "react-icons/gr"
import {motion} from "framer-motion"

const Navigation = () => {
    const [toggle, setToggle] = useState(false)

    const menuVariants = {
        hidden : {
            scale: 0
        },
        visible: {
            scale: 50,
            transition: {
                type: "tween",
                duration: .5,
            },
        }
    }

    const navItemVariants = {
        hidden: {
            display: "none",
            opacity: 0,
        },
        visible: {
            opacity: 1,
            y: -31,
            transition: {
                delay: .8,
            }
        }
    }
    return (
        <div className="header">
            <div className="nav_wrapper">
            <div className="logo">
                <h2>Bayorr</h2>
                <h2 className="marked">Code</h2>
            </div>
            <ul className="Navlinks">
                {
                    navItems.map((navItem, index) => {
                        return (
                            <li key={index}>
                                <a href={`${navItem}`}> {navItem}</a>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="connects">
               {
                    connects.map((connect, index) => {
                        return (
                            <div key={index}>
                                {connect}
                            </div>
                        )
                    }
               )}
            </div>
            <div className="hamburger">
                <HiMenu 
                onClick= { () => {
                    setToggle(true)
                }}
                />
            </div>
            <motion.div 
                className="close"
                variants={menuVariants}
                initial="hidden"
                animate={toggle ? "visible" : "hidden"}>
            </motion.div>
            <motion.div 
                className="menuOpen"
                variants={navItemVariants}
                animate={toggle ? "visible" : "hidden" }>
                <GrClose onClick= {() => {
                    setToggle(false) 
                }}/>
                {navItems.map((navItem, index) => {
                    return <li key={index}>
                        <a href={`${navItem}`}>{navItem}</a>
                    </li>
                })}

            </motion.div>
        </div>
        </div>
    )

}

export default Navigation