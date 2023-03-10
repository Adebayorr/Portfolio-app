import React from "react"
import { connects } from "../../../Resources"
import { contacts } from "../../../Resources" 
import {motion} from "framer-motion"
import "./ContactUs.scss"

const ContactUs = () => {
    return (
        <div 
    className="wrapper" 
    id="contact">
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0],opacity: 1}}
        transition={{duration: 1}}
        className="AH">
            <p>Connect With Me</p>
            <h1>Contact Me</h1>
        </motion.div>
        <div className="form-wrapper">
            <div className="left-wrapper">
                <h3>Let's Work Together</h3>
                <p className="left-wrapper_desc">Come on! Let's go through the focus on tour project, it's aims and hope
                    and I will walk you through my thorough way of making a dream website a 
                    reality. What do you say?<br/>
                    Through my rigorous Growth Oriented Design or GOD as I like to call it,
                    you are guaranteed of high-performant website with all headaches deleted
                </p>
                {contacts.map(contact => {
                    return (
                        <div className="left"
                        key={contact.id}>
                            <div className="icon">
                            {contact.icon}
                            </div>
                            <p>{contact.infoText}</p>
                        </div>
                    )
                })}
                <div className="connects">
                    {connects.map((connect, i) => {
                        return (
                            <div className="key" key={i}>{connect}</div>
                        )
                    })}
                </div>
            </div>
            <div className="right-wrapper">
                <h3>Get In Touch</h3>
                <div className="input-wrapper">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                </div>
                <div className="input-wrapper">
                    <input type="number" placeholder="Phone Number" />
                    <input type="email" placeholder="Your Email" />
                </div>
                <div className="input-wrapper">
                    <textarea placeholder="Say sumthin' to me"></textarea>
                </div>
                <motion.div className="btn-wrapper"
                whileHover={{scale: 1.07}}
                transition={{duration : 0.25}}>
                    <a href="#a">Shoot Me</a>
                </motion.div>
            </div>
        </div>
    </div>
    )

}

export default ContactUs