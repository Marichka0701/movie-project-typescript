import {IMovie} from "./IMovie";

export interface IPopularPerson {
    adult: string,
    gender: number,
    id: number,
    known_for: IMovie[],
    known_for_department: string,
    name: string,
    popularity: string,
    profile_path: string,
}