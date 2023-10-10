
import React from 'react'
import './intro.css'
import resume from '../../Resume/Tejeswar_Boora_resume.pdf'


export const Intro = () => {

  const alert=()=> {
    window.alert('cv download')
    
  }
  return (
    <section id='intro'>
    <div className='introcontent'>
       <span className='hello'>Hello,</span>
       <span className='introtext'>I'am <span className='introname'>Tejeswar</span>
       <br/>Software developer
       <p className='intropara'>Motivated software developer with a passion for UI/UX design</p>
       </span>
      
    
      <a href={resume} download>
      <button className='btn' type='button' onClick={alert}>
        Download CV</button>
        </a>
    

      
      

    </div>
    {/* <img src={bg} alt='profile'  className='bg'></img> */}
    </section>
  )
}


