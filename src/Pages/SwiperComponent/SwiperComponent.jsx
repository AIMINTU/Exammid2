import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const Swipercomponent = () => {
    return (
        <div>
            <div style={{ width: '100%', height: '300px' }}>
                {/* Swiper container */}
                <Swiper
                    spaceBetween={50}  // Space between slides
                    slidesPerView={1}  // Number of slides to show at once
                    navigation={true}  // Enable navigation arrows
                    pagination={{ clickable: true }}  // Enable pagination
                    loop={true}  // Enable loop
                >
                    {/* Swiper slides */}
                    <SwiperSlide>
                        <div style={{ backgroundColor: 'lightblue', height: '100%' }}>
                            Slide 1
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ backgroundColor: 'lightgreen', height: '100%' }}>
                            Slide 2
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ backgroundColor: 'lightcoral', height: '100%' }}>
                            Slide 3
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Swipercomponent;