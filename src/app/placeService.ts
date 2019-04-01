export interface ICandidate
{
    candidates: IPlace[]
}

export interface IPlace
{
    formatted_address: string,
    name: string,
    opening_hours: IOpening_Hours[],
    photos: IPhotos[],
    rating: number
}

export interface IOpening_Hours
{
    open_now : boolean
}

export interface IPhotos
{
    height: number,
    html_attributions: string[],
    photo_reference: string,
    width: number
}