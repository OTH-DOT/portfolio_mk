import React from 'react'
import { motion } from 'framer-motion';

const About = ({name}) => {
  return (
    <div name={name} className='h-[100vh]'>
      <motion.p>
        Hi, I'm a full stack developer with expertise in both front-end and back-end technologies. 
        I build dynamic, user-friendly web applications that focus on delivering seamless experiences. 
        From crafting intuitive interfaces to developing efficient server-side logic, 
        I ensure that every part of the application works together smoothly.
        <br />
        <br />
        I’m experienced in working with various tools and technologies to create robust, scalable, 
        and efficient solutions tailored to your needs. 
        My holistic approach ensures a well-rounded and complete development process, 
        from concept to deployment. I’m passionate about solving challenges and driving innovation 
        through my work.
      </motion.p>
    </div>
  )
}

export default About