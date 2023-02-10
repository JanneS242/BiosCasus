import { Movie } from "./Movie";

export class MovieScreening{
    dateAndtime: Date;
    pricePerSeat: number;
    // movie: Movie;

    constructor(dateAndTime: Date, pricePerSeat: number, movie : Movie){
        this.dateAndtime = dateAndTime;
        this.pricePerSeat = pricePerSeat;
        // this.movie = movie;
    }

    public getPricePerSeat() : number{
        return this.pricePerSeat;
    }

    public toString() : String {
        return `At ${this.dateAndtime} the movie plays. The price is ${this.pricePerSeat}`;
    }
}