import React,{useState,useEffect,useContext} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Logo from "../../../assets/Event1.jpg";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import axios from 'axios';
import UserContext from '../../../context/create';  
import moment from 'moment';

import {QR} from './QR';


export const P1 = () => {
   const { username,setIsLoggedIn } = useContext(UserContext);
   const navigate = useNavigate();
   const [data,setData] = useState([]);
   const [currentEvents,setCurrentEvents] = useState([]);
   const [pastEvents,setPastEvents] = useState([]);

   const settings = {
      dots: false, 
      infinite: true,
      speed: 500,
      slidesToShow: 3,        
      slidesToScroll: 3
   };


      useEffect(() => {
         console.log("using effect");
         console.log(username);
         let dt = moment().format('yyyy-mm-DDThh:mm:ss.ss') + 'z';
         console.log(dt);
         axios.post("http://localhost:5000/get_student_data",{username:username }).then((res) => {
            // setData(res.data.data); 
            console.log(res.data.data.data);
            setData(res.data.data);
         //    data.forEach((item) => {
         //       var dateLimit = moment(item.endDate.limit)
         //       var now = moment()
         //       console.log(now)
         //       console.log(dateLimit)
         //       if (item.endDate.limit != null || item != ' ' && now == dateLimit) {
         //       }
         //   })
            console.log(pastEvents);
            console.log(currentEvents);
            console.log("then");
         }).catch((err) => {
            console.log(err);
            console.log("catch");
         })
      },[]);

   return (
      <div className='flex flex-col md:flex-row p-4 bg-color:#'>

         <div className='w-full sm:w-full md:w-1/4 lg:w-1/4 xl:w-1/4 '>
            <div className='flex-row flex-wrap justify-center items-center p-4'>
               <div className='text-9xl flex justify-center items-center pt-12'>
                  <FontAwesomeIcon icon={faUserCircle} size="lg" />
               </div>
               

               <div className='flex justify-center p-2'>
                  <span>Name : </span><h1>{username}</h1>
               </div>


               <div className=" flex justify-center text-white text-xl font-semibold dark:text-white">
                  <button onClick={() => {setIsLoggedIn(false); navigate('/')}} className=" border-2 px-4 py-2 bg-blue-500 rounded-md hover:text-black hover:bg-slate-200 focus:outline-none focus:ring focus:border-blue-300">
                     Logout
                  </button>
                  
               </div>
            </div>

            <div className='flex-row flex-wrap justify-center items-center p-4'>
               <div className='dark:border 2w-88 h-52 flex justify-center items-center'>
                  <QR />
               </div>
            </div>
         </div>

         <div className='mt-20 w-full sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 '>
            <div className='items-center h-1/2'>
               <div className='flex justify-center'>
                  <h1 className='font-bold text-xl'>Your Events</h1>
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

            {/*<div className='flex flex-col items-center h-1/2 pt-4'>
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
            </div> */}

         </div>
      </div>
   )
}

