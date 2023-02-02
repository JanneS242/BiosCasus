import { MovieScreening } from "./MovieScreening";

export class MovieTicket{
    rowNr: number;
    seatNr: number;
    isPremium: boolean;
    movieScreening: MovieScreening;

    constructor(moviescreening : MovieScreening, isPremiumReservation: boolean, seatRow: number, seatNr: number){
        this.isPremium = isPremiumReservation;
        this.rowNr = seatRow;
        this.seatNr = seatNr;
        this.movieScreening = moviescreening;
    }

    public isPremiumTicket() : boolean{
        return this.isPremium;
    }

    public getPrice(): number{
        return this.movieScreening.pricePerSeat;
    }

    public toString() : String{
        return `The ticket is at rownumber ${this.rowNr} and seatnumber ${this.seatNr}.`;
    }
}