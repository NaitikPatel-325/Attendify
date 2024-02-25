import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Logo from "../../../assets/Event1.jpg";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import axios from 'axios';

export const P1 = () => {
   const settings = {
      dots: false, 
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
   };

   const [userdata,setUserdata] = useState({});

   useEffect(() => {
      console.log("using effect");
      axios.post("http://localhost:5000/get_student_data",{}).then((res) => {
         setUserdata(res);
         console.log(userdata);
         console.log("then");
      }).catch((err) => {
         console.log(err);
         console.log("catch");
      })
   },[]);

   return (
      <div className='flex flex-col md:flex-row p-4'>

         <div className='w-1/4'>
            <div className='flex-row flex-wrap justify-center items-center p-4'>
               <div className='text-9xl flex justify-center items-center pt-12'>
                  <FontAwesomeIcon icon={faUserCircle} size="lg" />
               </div>
               <div className='flex justify-center p-2'><h1>Apeksha Shah</h1></div>

               <div className='flex justify-center p-2'>
                  <button className='pl-2 pr-2 bg-slate-800 text-white hover:text-black rounded-full'>Follow</button>
                  <button className='ml-4 pl-2 bg-slate-800 pr-2 text-white hover:text-black rounded-full'>Message</button>
               </div>
            </div>

            <div className='flex-row flex-wrap justify-center items-center p-4'>
               <div className='dark:border 2w-88 h-52 flex justify-center items-center'>
                  QR CODE
               </div>
            </div>
         </div>

         <div className='w-3/4'>
            <div className='flex flex-col items-center h-1/2'>
               <div className='flex justify-center'>
                  <h1 className='font-bold text-xl'>Upcoming Events</h1>
               </div>
               <div className='w-3/4 m-auto'>
                  <div className='mt-2 shadow-xl dark:bg-white-900'>
                     <Slider {...settings} className='slick-slider-custom'>
                        {data.map((d, index) => (
                           <div key={index} className=' h-[25px] text-black rounded-xl'>
                              <div className='h-38 rounded-t-xl flex justify-center items-center'>
                                 <img src={d.img} alt="" className='h-44 w-44 rounded-full' />
                              </div>
                              <div className='flex flex-col justify-center items-center gap-4 p-4'>
                                 <p className='text-xl font-semibold'>{d.name}</p>
                                 <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
                              </div>
                           </div>   
                        ))}
                     </Slider>
                  </div>
               </div>
            </div>

            <div className='flex flex-col items-center h-1/2 pt-4'>
               <div className='flex justify-center'>
                  <h1 className='font-bold text-xl'>Past Events</h1>
               </div>

               <div className='w-3/4 m-auto'>
                  <div className='mt-2 shadow-xl dark:bg-white-900'>
                     <Slider {...settings} className='slick-slider-custom'>
                        {data.map((d, index) => (
                           <div key={index} className=' h-[25px] text-black rounded-xl'>
                              <div className='h-38 rounded-t-xl  flex justify-center items-center'>
                                 <img src={d.img} alt="" className='h-44 w-44 rounded-full' />
                              </div>
                              <div className='flex flex-col justify-center items-center gap-4 p-4'>
                                 <p className='text-xl font-semibold'>{d.name}</p>
                                 <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
                              </div>
                           </div>
                        ))}
                     </Slider>
                  </div>
               </div>
            </div>

         </div>
      </div>
   )
}

const data = [
   {
      name: 'Event1',
      img: Logo,
   },
   {
      name: 'Event2',
      img: Logo,
   },
   {
      name: 'Event3',
      img: Logo,
   },
   {
      name: 'Event4',
      img: Logo,
   },
   {
      name: 'Event5',
      img: Logo,
   },
   {
      name: 'Event6',
      img: Logo,
   },
   {
      name: 'Event7',
      img: Logo,
   },
   {
      name: 'Event8',
      img: Logo,
   },
   {
      name: 'Event9',
      img: Logo,
   },
   {
      name: 'Event10',
      img: Logo,
   },
]
