import React from "react"
import "./About.scss"
import pp2 from "../../../assets/pp2.png"
import { myBios } from "../../../Resources"
import {motion} from "framer-motion"

const About = () => {
    return (
        <div
        className="wrapper about-wrapper"
        id="about">
            <motion.div 
            initial={{opacity: 0}}
            whileInView={{y: [-50, 0],opacity: 1}}
            transition={{duration: 1}}
            className="AH">
                <p>Who is this guy?</p> 
                <h1>Meet Bayorr</h1>
            </motion.div>
            <div className="about-section">
                <div>
                <motion.article 
                initial={{x: 0, opacity: 0}}
                whileInView={{x: [-200, 0], opacity: 1}}
                transition={{duration: 0.8 }}
                className="sideone">
                    <img src={pp2} alt="myself"></img>
                </motion.article>
                </div>
                <motion.article 
                initial={{x: 0, opacity: 0}}
                whileInView={{x: [200, 0], opacity: 1}}
                transition={{duration: 0.8 }}
                className="sidetwo">
                    <p className="about-me_desc">
                        Always busting like a beehive. I'm a very enthusiastic nerd with lots of
                        optimism and I always get things done... no matter what. I am a very good team
                        player and I have worked on a couple of collaborative projects. Strange, I studied
                        English in the University but here I am ready to get you your world class project
                    </p>
                    {myBios.map(myBio => {
                        return (
                            <div className="mybio" key={myBio.id}>
                                <span className="key">
                                    {myBio.icon}{myBio.key}
                                </span>
                                <span className="value">
                                    {myBio.value}
                                </span>
                            </div>
                        )
                    })}
                    <motion.a className="download" href="#a" download=""
                    whileHover={{scale: 1.07}}
                    transition={{duration: 0.25}}>
                        Download Resume
                    </motion.a>
                </motion.article>
            </div>
        </div>
    )
}

export default About