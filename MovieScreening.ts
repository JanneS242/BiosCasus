class MovieScreening{
    dateAndtime: Date;
    pricePerSeat: number;
    movie: Movie;

    constructor(movie: Movie, dateAndTime: Date, pricePerSeat: number){
        this.dateAndtime = dateAndTime;
        this.pricePerSeat = pricePerSeat;
        this.movie = movie;
    }

    public getPricePerSeat() : number{
        return 0.0;
    }

    public toString() : String {
        return "";
    }
}