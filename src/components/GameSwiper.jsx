import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import './gameswiper.css';

import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import GameSlide from './GameSlide';

const GameSwiper = ({ games }) => {

    const [active, setActive] = useState(false);

    const handleToogleVideo = () => {
        setActive(!active);
    }

    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            navigation={true}
            loop={true}
            centeredSlides={'auto'}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 35,
                stretch: 200,
                depth: 250,
                modifier: 1,
                slideShadows: true,
            }}
            // autoplay={{
            //     delay: 2500,
            //     disableOnInteraction: false,
            // }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            className="gameSwiper"
        >
            {games.map(game => (

                <SwiperSlide key={game._id}>
                    <GameSlide game={game} active={active} toogleVideo={handleToogleVideo} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default GameSwiper

// Uncaught TypeError: Cannot read properties of undefined (reading 'id')
// at p.recieveWindowMessage (injectCoinbaseWalletDappProvider.js:1:8986)