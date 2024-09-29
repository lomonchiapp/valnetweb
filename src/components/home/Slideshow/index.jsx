import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid2 } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import "swiper/css/autoplay";
// import required modules
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";

// Import Component
import { FamiliaConectada } from "./FamiliaConectada";
import { PlanConectao } from "./PlanConectao";
import { PlanCinematica } from "./PlanCinematica";
import { PlanEstudio } from "./PlanEstudio";
 
const styles = {
  Slider: {
    backgroundColor: 'grey',
    position: 'relative',
    zIndex: 10,
  },
  progressCircle: {
    position: 'absolute',
    bottom: '10px',
    right: '60px',
    zIndex: 100,
    transform: 'translateX(-50%)',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: '2px solid #F37021',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '13px',
  },
  navigationButton: {
    color: 'white',
    textShadow: '0 0 10px rgba(0,0,0,0.5)',
    fontSize: '30px',
    '&::after': {
      fontSize: '40px',
    },
    padding: '50px', // Add padding to move the buttons away from the edge
  },
};

export const Slideshow = () => {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <Grid2 container sx={styles.Slider}>
      <Grid2 item size={12}>
        <Swiper
          modules={[Pagination, Navigation, Autoplay, EffectFade]}
          spaceBetween={0}
          effect={'fade'}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          
          <SwiperSlide>
          <PlanConectao/>
          </SwiperSlide>
          <SwiperSlide>
          <PlanEstudio/>
          </SwiperSlide>
          <SwiperSlide>
          <PlanCinematica/>
          </SwiperSlide>
          <SwiperSlide>
          <FamiliaConectada/>
          </SwiperSlide>
          
          {/* Add more slides here */}
          
          {/* Progress Circle */}
         
          <div ref={progressCircle} style={styles.progressCircle}>
            <div ref={progressContent}></div>
          </div>
          
        </Swiper>
        <div className="swiper-button-next swiper-button" style={styles.navigationButton}></div>
          <div className="swiper-button-prev  swiper-button" style={styles.navigationButton}></div>
      </Grid2>
    </Grid2>
  );
};