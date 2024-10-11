import React, { useState } from 'react'
import teams from './data'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

const Team = ()=>{
   const [index,setIndex] = useState(0);
   const{name,job,image,text} = teams[index]
   const checkNumber = (number) =>{
    if(number > teams.length - 1){
        return 0;
    }
    if(number < 0){
        return teams.length - 1;
    }
    return number;
   }

   const prevPerson = ()=>{
   setIndex((index)=>{
    let newIndex = index -1;
    return checkNumber(newIndex)
   })
   }
   const nextPerson = ()=>{
    setIndex((index)=>{
        let newIndex = index +1;
        return checkNumber(newIndex)
       })
   }
   return(

    <>
    <section className='team'>
    <div className='container'>
    <div className='img-container'>
    <img src={image} alt={name}/>
    </div>
    <div className='text-container'>
    <div className='team-details'>
    <h4>{name}</h4>
    <p>{job}</p>
    <p>{text}</p>
    </div>

    <div className='button-container'>
    <button className='prev-btn' onClick={prevPerson}>
    <FaChevronLeft />
    </button>
    <button className='next-btn' onClick={nextPerson}>
    <FaChevronRight />
    </button>
    </div>

    </div>
    </div>
    </section>
    </>
   )
}

export default Team;