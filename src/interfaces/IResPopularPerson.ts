import {IPopularPerson} from "./IPopularPerson";

export interface IResPopularPerson {
    page: number,
    results: IPopularPerson[],
    total_pages: number,
    total_results: number,
}