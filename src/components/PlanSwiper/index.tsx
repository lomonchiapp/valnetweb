import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid2 } from "@mui/material";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Component
import { PlanItem } from "../Planes/PlanItem";
import { planesInternet } from "@/data/planesInternet";
import { PlanInternet } from "@/types";
import { tokens } from "@/theme";
import {useTheme} from "@mui/material";
import { useSelectedPlan } from "@/contexts/global/useSelectedPlan";



interface PlanSwiperProps {
  plans: PlanInternet[];
}


export const PlanSwiper: React.FC<PlanSwiperProps> = ({ plans }) => {
  const theme = useTheme();
  const {selectedPlan, setSelectedPlan} = useSelectedPlan();
  const colors = tokens(theme.palette.mode);

  const styles = {
    Slider: {
      position: 'relative',
      zIndex: 10,
      px:10,
    },
    navigationButton: {
      color: colors.blueAccent[400],
      fontSize: '30px',
      '&::after': {
        fontSize: '40px',
      },
      padding: '50px', // Add padding to move the buttons away from the edge
    },
  };

  const plansWithColors = plans.map((plan, index) => ({
    ...plan,
    downloadColor: colors.blueAccent[index * 100] || colors.blueAccent[400],
    uploadColor: colors.orangeAccent[index * 100] || colors.greenAccent[400],
  })
  );
  return (
    <Grid2 container sx={styles.Slider}>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={0}
          effect={'fade'}
          slidesPerView={4}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
         {plansWithColors.map((plan) => (
            <SwiperSlide key={plan.id}>
                <PlanItem plan={plan} />
            </SwiperSlide>
            ))}
            4
        </Swiper>
        <div className="swiper-button-next swiper-button" style={styles.navigationButton}></div>
          <div className="swiper-button-prev  swiper-button" style={styles.navigationButton}></div>
            
    </Grid2>
  );
};