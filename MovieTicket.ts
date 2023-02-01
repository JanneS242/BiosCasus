class MovieTicket{
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
        return 0.0;
    }

    public toString() : String{
        return "";
    }
}