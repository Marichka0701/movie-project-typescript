import React, {FC, PropsWithChildren} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import '../../index.css';

import { FreeMode, Pagination } from 'swiper/modules';
import {IMovie} from "../../interfaces/IMovie";
import MovieCard from "../MovieCard/MovieCard";


interface IProps extends PropsWithChildren {
    content: IMovie[],
}

const MovieSwiper: FC<IProps> = ({content}) => {
    const breakpoints = {
        320: {
            slidesPerView: 2,
            spaceBetween: 100,
        },
        375: {
            slidesPerView: 2,
            spaceBetween: 100,
        },
        425: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 100,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 100,
        },
        1440: {
            slidesPerView: 5,
            spaceBetween: 100,
        },
    };

    return (
        <>
            <Swiper
                breakpoints={breakpoints}
                freeMode={true}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {
                    content && content.map((item, index) =>
                        <SwiperSlide><MovieCard key={index} card={item}/></SwiperSlide>)
                }
            </Swiper>
        </>
    );
};

export default MovieSwiper;
