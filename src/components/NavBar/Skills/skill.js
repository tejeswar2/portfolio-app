
import React from 'react'
import './skill.css'
import UIdesign from '../../../assets/ui-design.png'
import Webdesign from '../../../assets/website-design.png'
import Appdesign from '../../../assets/app-design.png'

export const Skill = () => {
  return (
   <section id='skills'>
     <span className='skilltitle'>What I do</span>
      <span className='skilldesc'>I am a passionate web designer creating user friendly web sites, I have strong understanding in javascript and can make the design of pages highly interactive and responsive</span>

         <div className='skillbar'>
            <img className='skillbarimg' src={UIdesign} alt='uidesign'></img>
             <div className='skillbartext'>
              <h2>UI/UX design </h2>
                <p></p>
             </div>
         </div>

         <div className='skillbar'>
            <img className='skillbarimg' src={Webdesign} alt='webdesign'></img>
             <div className='skillbartext'>
              <h2>Web Design</h2>
                <p></p>
             </div>

         </div>
         <div className='skillbar'>
            <img className='skillbarimg' src={Appdesign} alt='appdesign'></img>
             <div className='skillbartext'>
              <h2>App Design </h2>
                <p></p>
             </div>
         </div>
   </section>
  )
}

