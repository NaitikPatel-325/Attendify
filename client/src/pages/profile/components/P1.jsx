import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../../assets/Event1.jpg"

export const P1 = () => {
  return (
     <div className='flex flex-row flex-wrap p-4'>
      
      <div className='w-1/4'>
         <div className='flex-row flex-wrap justify-center items-center p-4'>
             <div className='text-9xl flex justify-center items-center pt-12'>
                <i class="fa-solid fa-circle-user"></i>
             </div>
             <div className='flex justify-center p-2'><h1>Apeksha Shah</h1></div>
             
             <div className='flex justify-center p-2'>
                <button className='pl-2 pr-2 bg-slate-800 text-white hover:text-black'>Follow</button>
                <button className='ml-4 pl-2 bg-slate-800 pr-2 text-white hover:text-black'>Message</button>
             </div>
         </div>

         <div className='flex-row flex-wrap justify-center items-center p-4'>
               <div className='text-9xl flex justify-center items-center pt-12'>
                  <i class="fa-solid fa-circle-user"></i>
               </div>
               <div className='flex justify-center p-2'><h1>Apeksha Shah</h1></div>
               
               <div className='flex justify-center p-2'>
                  <button className='pl-2 pr-2 bg-slate-800 text-white hover:text-black'>Follow</button>
                  <button className='ml-4 pl-2 bg-slate-800 pr-2 text-white hover:text-black'>Message</button>
               </div>
         </div>
      </div>
     

      <div className='w-3/4'>

         <div className='flex flex-col items-center h-1/2 border-2'>

               <div className='flex justify-center'>
                  <h1 className='font-bold'>Upcoming Events</h1>
               </div>
               
               <div className='flex flex-row'>
                  <div className='event-card flex flex-col items-center w-96 p-4'>
                     <img className='object-cover object-center w-3/4 h-3/4' src={Logo} alt="past_event1" />
                     <h3>Event Name</h3>
                     <div className='flex justify-center w-full'>
                        <button>Read more</button>
                     </div>
                  </div>  

                  <div className='event-card flex flex-col items-center w-96 p-4'>
                     <img className='object-cover object-center w-3/4 h-3/4' src={Logo} alt="past_event1" />
                     <h3>Event Name</h3>
                     <div className='flex justify-center w-full'>
                        <button>Read more</button>
                     </div>
                  </div>  
                  
                  <div className='event-card flex flex-col items-center w-96 p-4'>
                     <img className='object-cover object-center w-3/4 h-3/4' src={Logo} alt="past_event1" />
                     <h3>Event Name</h3>
                     <div className='flex justify-center w-full'>
                        <button>Read more</button>
                     </div>
                  </div>  
               </div>
            </div>
         
         <div className='flex flex-col items-center h-1/2 border-2 pt-2'>
               <div className='flex justify-center'>
                  <h1 className='font-bold'>Upcoming Events</h1>
               </div>
               
               <div className='flex flex-row'>
                  <div className='event-card flex flex-col items-center w-96 p-4'>
                     <img className='object-cover object-center w-3/4 h-3/4' src={Logo} alt="past_event1" />
                     <h3>Event Name</h3>
                     <div className='flex justify-center w-full'>
                        <button>Read more</button>
                     </div>
                  </div>  

                  <div className='event-card flex flex-col items-center w-96 p-4'>
                     <img className='object-cover object-center w-3/4 h-3/4' src={Logo} alt="past_event1" />
                     <h3>Event Name</h3>
                     <div className='flex justify-center w-full'>
                        <button>Read more</button>
                     </div>
                  </div>  
                  
                  <div className='event-card flex flex-col items-center w-96 p-4'>
                     <img className='object-cover object-center w-3/4 h-3/4' src={Logo} alt="past_event1" />
                     <h3>Event Name</h3>
                     <div className='flex justify-center w-full'>
                        <button>Read more</button>
                     </div>
                  </div>  
               </div>
            
      </div>
      </div>
      </div>
  )
}
