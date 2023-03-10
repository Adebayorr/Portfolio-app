import React from "react"
import "./Homepage.scss"
import pp1 from "../../../assets/pp1.png"
import {motion} from "framer-motion"


const Homepage = () => {

    const moveVariants = {
        animation: {
            y: [0, -15],
            transition: {
                yoyo: Infinity,
                duration: 2,
                delay: 1,
            }
        }
    }
    return (
        <motion.div
        initial={{y: -16, opacity: 0.3}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 1.5, delay: 0.6}}
        className="home-wrapper wrapper"
        id="home">        
        <div className="me">
        <img src={pp1} alt="profile-shot"></img>
        </div>
        <div className="desc">
            {/* looking for a web-developer with creative ideas, a keen eye for detail, 
            and the technical know-how to bring your project to life? Then you’ve come to the right place.  */}
            <h3 className="name">
                Hi! I'm <span>Bayorr</span>
            </h3>
        </div>
        <article className="title">
            Webflow Developer/Web Developer
        </article>
        <article className="subtitle">
            Technical Know-how <br/>
            Bring life to your project <br />
        </article>
        <motion.a className="cta_btn" href="contact"
        variants={moveVariants}
        animate="animation"
        whileHover={{scale: 1.07}}
        transition={{duration: 0.25}}>
            Hit Me Up!
        </motion.a>
        <div className="free webdev">Web Developer</div>
        <div className="free webflow">Webflow Designer</div>
        <div className="free freelance">Freelancer</div>
    </motion.div>

    )
}

export default Homepage