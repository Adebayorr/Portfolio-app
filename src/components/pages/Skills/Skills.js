import React from "react"
import "./Skills.scss"
import {icons} from "../../../Resources"
import { useState } from "react"
import { workHistory , completions} from "../../../Resources"
import { motion } from "framer-motion"

const Skills = () => {
    const [active, setActive] = useState(1)
    return (<div
    className="wrapper hero-wrapper"
    id="skills">
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0],opacity: 1}}
        transition={{duration: 1}}
        className="AH">
            <p>Who Can You Do?</p>
            <h1>Skills And Expertise</h1>
        </motion.div>
        <motion.div 
        initial={{opacity: 0.5}}
        whileInView={{y: [-40, 0],opacity: 1}}
        transition={{duration: 1}}
        className="options">
            <button
            onClick={()=> {setActive(1)}}
            className={active === 1? "active" : ""}>Skills</button>
            <button
            onClick={()=> {setActive(2)}}
            className={active === 2? "active" : ""}>Experience</button>
        </motion.div>
        <motion.div className="techs"
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0],opacity: 1}}
        transition={{duration: 1.1}}>
            {active === 1 && icons.map((icon, i) => {
                return (
                    <div className="icons" key={i}>
                        {icon}
                    </div>
                )
            })}
        </motion.div>
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0],opacity: 1}}
        transition={{duration: 1.1}}
        className="workhistory">
            {active === 2 && workHistory.map(work => {
                return (
                    <div className="work" key={work.id}>
                        <span>{work.year}</span>
                        <div className="post">
                            <h3>{work.post}</h3>
                            <p>{work.company}</p>
                        </div>
                    </div>
                )
            })}
        </motion.div>
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0],opacity: 1}}
        transition={{duration: 1.1}}
        className="completed">
            {completions.map(completion => {
                return (
                    <div className="completed-items" key={completion.id}>
                        <div className="number">{completion.number}</div>
                        <div className="item" >{completion.itemName}</div>
                    </div>
                )
            })}
        </motion.div>
</div>

)}

export default Skills