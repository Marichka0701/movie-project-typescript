import React, {FC, PropsWithChildren} from 'react';

import NowPlayingMovie from "../../components/NowPlayingMovie/NowPlayingMovie";
import PopularMovie from "../../components/PopularMovie/PopularMovie";
import TopRatedMovie from "../../components/TopRatedMovie/TopRatedMovie";
import UpcomingMovie from "../../components/UpcomingMovie/UpcomingMovie";
import {useAppSelector} from "../../hooks/useAppSelector";
import Loader from "../../components/Loader/Loader";

interface IProps extends PropsWithChildren {

}

const MoviePage: FC<IProps> = () => {
    const {status} = useAppSelector(state => state.movie);

    // if (status === 'loading') {
    //     return <Loader/>
    // }

    return (
        <>
            <NowPlayingMovie/>
            <PopularMovie/>
            <TopRatedMovie/>
            <UpcomingMovie/>
        </>
    );
};

export default MoviePage;
