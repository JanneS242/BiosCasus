class MovieScreening{
    dateAndtime: Date;
    pricePerSeat: number;
    // movie: Movie;

    constructor(movie: Movie, dateAndTime: Date, pricePerSeat: number){
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