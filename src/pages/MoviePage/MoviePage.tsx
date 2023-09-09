import React, {FC, PropsWithChildren} from 'react';

import NowPlayingMovie from "../../components/NowPlayingMovie/NowPlayingMovie";
import PopularMovie from "../../components/PopularMovie/PopularMovie";
import TopRatedMovie from "../../components/TopRatedMovie/TopRatedMovie";
import UpcomingMovie from "../../components/UpcomingMovie/UpcomingMovie";

interface IProps extends PropsWithChildren {

}

const MoviePage: FC<IProps> = () => {
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
