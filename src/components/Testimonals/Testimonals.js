import React from "react";
import {motion} from 'framer-motion';
// Import Swiper React components
import { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Testimonals.css';



export const Testimonals = () => {
  return (
    <div id='testimonals' className='test'>
      <motion.div
      whileInView={{ x: [-300, 0]}}
      transition={{duration: 1}}
      >
      <h1>Testi<j>monials</j></h1>


        <Swiper className='test-row'
         modules={[Navigation, Pagination]}
         spaceBetween={100}
         slidesPerView={1}
         navigation
         pagination={{ clickable: true }}
         
         
      
        >
                <SwiperSlide className="testbox">
                  <div className='testbox-img1'>
                            {/* <img src="avatar1.jpg" alt='person'/> */}
                            </div>
                            <h2>Ryan <j>Zyan</j></h2>
                            <h3>Fellow Web-Developer</h3>
                            <p>My experience working with Chidi has always been a smooth and positive one.
                                i always recieve quality service from him. I high;y recommending him because he is the absolute best. </p>
                    </SwiperSlide>
                    <SwiperSlide className="testbox">
                      <div className='testbox-img2'>
                    {/* <img src="avatar2.jpg" alt='person'/> */}
                    </div>
                        <h2>Edeh <j>Johnpaul</j></h2>
                        <h3>Fellow Web-Developer</h3>
                        <p>My experience working with Chidi has always been a smooth and positive one.
                            i always recieve quality service from him. I high;y recommending him because he is the absolute best. </p>
                </SwiperSlide>
                <SwiperSlide className="testbox">
                  <div className='testbox-img3'>
                {/* <img src="avatar3.jpg" alt='person'/> */}
                </div>
                    <h2>Ugwu <j>Ferdinard</j></h2>
                    <h3>Fellow Web-Developer</h3>
                    <p>My experience working with Chidi has always been a smooth and positive one.
                        i always recieve quality service from him. I high;y recommending him because he is the absolute best. </p>
            </SwiperSlide>
            <SwiperSlide className="testbox">
              <div className='testbox-img4'>
            {/* <img src="avatar4.jpg" alt='person'/> */}
            </div>
                <h2>Eradz <j>Joel</j></h2>
                <h3>Fellow Web-Developer</h3>
                <p>My experience working with Chidi has always been a smooth and positive one.
                    i always recieve quality service from him. I high;y recommending him because he is the absolute best. </p>
            </SwiperSlide>
       </Swiper>

      
       </motion.div>
    </div>
  )
}
