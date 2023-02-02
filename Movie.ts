class Movie{
    title: String;
    movieScreenings : Array<MovieScreening>;

    constructor(title: String){
        this.title = title;
        this.movieScreenings = new Array<MovieScreening>;
    }

    public addScreening(screening: MovieScreening){
        this.movieScreenings.push(screening);
    }

    public toString() : String{
        return  `The title of the film is ${this.title}`;
    }
}