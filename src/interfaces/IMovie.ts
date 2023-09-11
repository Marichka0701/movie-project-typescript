import {IGenre} from "./IGenre";

export interface IMovie {
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    poster_path: string,
    release_date: string,
    title: string,
    vote_average: number,
    tagline: string,
    budget: number,
    runtime: number,
    genres: IGenre[],
}
