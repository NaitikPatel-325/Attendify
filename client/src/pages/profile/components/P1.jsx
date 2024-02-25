import React,{useState,useEffect,useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Logo from "../../../assets/Event1.jpg";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import axios from 'axios';
import UserContext from '../../../context/create';  
<<<<<<< Updated upstream
import moment from 'moment';

=======
import {QR} from './QR';
>>>>>>> Stashed changes


export const P1 = () => {
   const { username } = useContext(UserContext);

   const [data,setData] = useState([]);

   const settings = {
      dots: false, 
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
   };


      useEffect(() => {
         console.log("using effect");
<<<<<<< Updated upstream
         console.log(username);
         let dt = moment().format('YYYY-MM-DD HH-MM-SS');
         console.log(dt);
         axios.post("http://localhost:5000/get_student_data",{username:username }).then((res) => {
            // setUserdata(res); 
            console.log(res.data.data);
            setData(res.data.data);
=======
         axios.post("http://localhost:5000/get_student_data",{username}).then((res) => {
            setUserdata(res); 
            console.log(res);
>>>>>>> Stashed changes
            console.log("then");
         }).catch((err) => {
            console.log(err);
            console.log("catch");
         })
      },[]);

   return (
      <div className='flex flex-col md:flex-row p-4'>

         <div className='w-full sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4 '>
            <div className='flex-row flex-wrap justify-center items-center p-4'>
               <div className='text-9xl flex justify-center items-center pt-12'>
                  <FontAwesomeIcon icon={faUserCircle} size="lg" />
               </div>
               

               <div className='flex flex-co justify-center p-2'>
                  <span>Name : </span><h1>{username}</h1>
               </div>
            </div>

            <div className='flex-row flex-wrap justify-center items-center p-4'>
               <div className='dark:border 2w-88 h-52 flex justify-center items-center'>
                  <QR />
               </div>
            </div>
         </div>

         <div className='w-full sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 '>
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
                                 <img src={Logo} alt="" className='h-44 w-44 rounded-full' />
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
                                 <img src={Logo} alt="" className='h-44 w-44 rounded-full' />
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

// const data = [
//    {
//       name: 'Event1',
//       img: Logo,
//    },
//    {
//       name: 'Event2',
//       img: Logo,
//    },
//    {
//       name: 'Event3',
//       img: Logo,
//    },
//    {
//       name: 'Event4',
//       img: Logo,
//    },
//    {
//       name: 'Event5',
//       img: Logo,
//    },
//    {
//       name: 'Event6',
//       img: Logo,
//    },
//    {
//       name: 'Event7',
//       img: Logo,
//    },
//    {
//       name: 'Event8',
//       img: Logo,
//    },
//    {
//       name: 'Event9',
//       img: Logo,
//    },
//    {
//       name: 'Event10',
//       img: Logo,
//    },
// ]
