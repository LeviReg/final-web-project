import { IOpening_Hours, IPlace, IPhotos, ICandidate } from './placeService';

export class Place implements ICandidate
{
    candidates: IPlace[];
    candidate: IPlace[];
    formatted_address: string;
    name: string;
    opening_hours: IOpening_Hours[];
    photos: IPhotos[];
    rating: number;

    constructor(candidate:IPlace[], formatted_address:string,name:string,opening_hours:IOpening_Hours[],photos:IPhotos[],rating:number)
    {
        this.candidate = candidate;
        this.formatted_address = formatted_address;
        this.name = name;
        this.opening_hours = opening_hours;
        this.photos = photos;
        this.rating = rating;
    }

}