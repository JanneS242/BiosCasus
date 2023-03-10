import { Movie } from "../src/Movie";
import { MovieScreening } from "../src/MovieScreening";
import { MovieTicket } from "../src/MovieTicket";
import { Order } from "../src/Order";
import { NormalPricingBehaviour } from "../src/pricing/NormalPricingBehaviour";
import { StudentPricingBehaviour } from "../src/pricing/StudentPricingBehaviour";

describe('Test order free ticket functions', ()=>{
    it('get second ticket free as a student on a monday', ()=>{
        var pricingBahaviour = new StudentPricingBehaviour();
        
        const order = new Order(1, pricingBahaviour); //Student order
        
        var movie = new Movie("Jurassic Park");
        var movieScreening = new MovieScreening(new Date("2/6/2023 12:00"),2,movie); //Movie screening on a monday -> 2 euros per ticket
        movie.addScreening(movieScreening);

        var ticket = new MovieTicket(movieScreening, false, 2, 15); //Not premium
        var ticket2 = new MovieTicket(movieScreening, false, 2, 17); //Not premium

        order.addSeatReservation(ticket);
        order.addSeatReservation(ticket2);

        expect(pricingBahaviour.calculatePrice(order.tickets)).toBe(2);
    });

    it('get second ticket free as a student on a friday', ()=>{
        var pricingBahaviour = new StudentPricingBehaviour();
        const order = new Order(1, pricingBahaviour); //Student order
        
        var movie = new Movie("Jurassic Park");
        var movieScreening = new MovieScreening(new Date("2/3/2023 12:00"),2,movie); //Movie screening on a friday -> 2 euros per ticket
        movie.addScreening(movieScreening);

        var ticket = new MovieTicket(movieScreening, false, 2, 15); //Not premium
        var ticket2 = new MovieTicket(movieScreening, false, 2, 17); //Not premium

        order.addSeatReservation(ticket);
        order.addSeatReservation(ticket2);

        expect(pricingBahaviour.calculatePrice(order.tickets)).toBe(2);
    });

    it('do not get second ticket free as a not-student on a friday', ()=>{
        var pricingBahaviour = new NormalPricingBehaviour();
        
        const order = new Order(1, pricingBahaviour); //No student order
        
        var movie = new Movie("Jurassic Park");
        var movieScreening = new MovieScreening(new Date("2/3/2023 12:00"),2,movie); //Movie screening on a friday -> 2 euros per ticket
        movie.addScreening(movieScreening);

        var ticket = new MovieTicket(movieScreening, false, 2, 15); //Not premium
        var ticket2 = new MovieTicket(movieScreening, false, 2, 17); //Not premium

        order.addSeatReservation(ticket);
        order.addSeatReservation(ticket2);

        expect(pricingBahaviour.calculatePrice(order.tickets)).toBe(4);
    });
});


describe('Test order discount functions', ()=>{
    it('get discount as a not-student on a saturday when ordering 7 tickets', ()=>{
        var pricingBahaviour = new NormalPricingBehaviour();
        
        const order = new Order(1, pricingBahaviour); //No student order
        
        var movie = new Movie("Jurassic Park");
        var movieScreening = new MovieScreening(new Date("2/4/2023 12:00"),2,movie); //Movie screening on a saturday -> 2 euros per ticket
        movie.addScreening(movieScreening);

        var ticket = new MovieTicket(movieScreening, false, 2, 15); //Not premium
        var ticket2 = new MovieTicket(movieScreening, false, 2, 17); //Not premium
        var ticket3 = new MovieTicket(movieScreening, false, 2, 19); //Not premium
        var ticket4 = new MovieTicket(movieScreening, false, 2, 21); //Not premium
        var ticket5 = new MovieTicket(movieScreening, false, 2, 23); //Not premium
        var ticket6 = new MovieTicket(movieScreening, false, 2, 25); //Not premium
        var ticket7 = new MovieTicket(movieScreening, false, 2, 27); //Not premium

        order.addSeatReservation(ticket);
        order.addSeatReservation(ticket2);
        order.addSeatReservation(ticket3);
        order.addSeatReservation(ticket4);
        order.addSeatReservation(ticket5);
        order.addSeatReservation(ticket6);
        order.addSeatReservation(ticket7);

        expect(pricingBahaviour.calculatePrice(order.tickets)).toBe(12.60);
    });

    it('get no discount as a not-student on a saturday when ordering 4 tickets', ()=>{
        var pricingBahaviour = new NormalPricingBehaviour();
        
        const order = new Order(1, pricingBahaviour); //No student order
        
        var movie = new Movie("Jurassic Park");
        var movieScreening = new MovieScreening(new Date("2/4/2023 12:00"),2,movie); //Movie screening on a saturday -> 2 euros per ticket
        movie.addScreening(movieScreening);

        var ticket = new MovieTicket(movieScreening, false, 2, 15); //Not premium
        var ticket2 = new MovieTicket(movieScreening, false, 2, 17); //Not premium
        var ticket3 = new MovieTicket(movieScreening, false, 2, 19); //Not premium
        var ticket4 = new MovieTicket(movieScreening, false, 2, 21); //Not premium

        order.addSeatReservation(ticket);
        order.addSeatReservation(ticket2);
        order.addSeatReservation(ticket3);
        order.addSeatReservation(ticket4);

        expect(pricingBahaviour.calculatePrice(order.tickets)).toBe(8);
    });

    it('get no discount as a not-student on a monday when ordering 7 tickets, get second ticket free', ()=>{
        var pricingBahaviour = new NormalPricingBehaviour();
        
        const order = new Order(1, pricingBahaviour); //No student order
        
        var movie = new Movie("Jurassic Park");
        var movieScreening = new MovieScreening(new Date("2/6/2023 12:00"),2,movie); //Movie screening on a monday -> 2 euros per ticket
        movie.addScreening(movieScreening);

        var ticket = new MovieTicket(movieScreening, false, 2, 15); //Not premium
        var ticket2 = new MovieTicket(movieScreening, false, 2, 17); //Not premium
        var ticket3 = new MovieTicket(movieScreening, false, 2, 19); //Not premium
        var ticket4 = new MovieTicket(movieScreening, false, 2, 21); //Not premium
        var ticket5 = new MovieTicket(movieScreening, false, 2, 23); //Not premium
        var ticket6 = new MovieTicket(movieScreening, false, 2, 25); //Not premium
        var ticket7 = new MovieTicket(movieScreening, false, 2, 27); //Not premium

        order.addSeatReservation(ticket);
        order.addSeatReservation(ticket2);
        order.addSeatReservation(ticket3);
        order.addSeatReservation(ticket4);
        order.addSeatReservation(ticket5);
        order.addSeatReservation(ticket6);
        order.addSeatReservation(ticket7);

        //No discount, but second ticket is free
        expect(pricingBahaviour.calculatePrice(order.tickets)).toBe(8);
    });
});

describe('Test order premium functions', ()=>{
    it('get 2 euro extra for premium ticket as student', ()=>{
        var pricingBahaviour = new StudentPricingBehaviour();

        const order = new Order(1, pricingBahaviour); //Student order
        
        var movie = new Movie("Jurassic Park");
        var movieScreening = new MovieScreening(new Date("2/4/2023 12:00"),2,movie); //Movie screening on a saturday -> 2 euros per ticket
        movie.addScreening(movieScreening);

        var ticket = new MovieTicket(movieScreening, true, 2, 15); //Premium

        order.addSeatReservation(ticket);

        expect(pricingBahaviour.calculatePrice(order.tickets)).toBe(4);
    });

    it('get 3 euro extra for premium ticket as a not-student', ()=>{
        var pricingBahaviour = new NormalPricingBehaviour();

        const order = new Order(1, pricingBahaviour); //No student order
        
        var movie = new Movie("Jurassic Park");
        var movieScreening = new MovieScreening(new Date("2/4/2023 12:00"),2,movie); //Movie screening on a saturday -> 2 euros per ticket
        movie.addScreening(movieScreening);

        var ticket = new MovieTicket(movieScreening, true, 2, 15); //Premium

        order.addSeatReservation(ticket);

        expect(pricingBahaviour.calculatePrice(order.tickets)).toBe(5);
    });

    it('get 3 euro extra + second ticket free for premium ticket as a not-student', ()=>{
        var pricingBahaviour = new NormalPricingBehaviour();

        const order = new Order(1, pricingBahaviour); //No student order
        
        var movie = new Movie("Jurassic Park");
        var movieScreening = new MovieScreening(new Date("2/6/2023 12:00"),2,movie); //Movie screening on a monday -> 2 euros per ticket
        movie.addScreening(movieScreening);

        var ticket = new MovieTicket(movieScreening, true, 2, 15); //Premium
        var ticket2 = new MovieTicket(movieScreening, true, 2, 17); //Premium

        order.addSeatReservation(ticket);
        order.addSeatReservation(ticket2);

        expect(pricingBahaviour.calculatePrice(order.tickets)).toBe(5);
    });

    it('get 2 euro extra + second ticket free for premium ticket as a student', ()=>{
        var pricingBahaviour = new StudentPricingBehaviour();

        const order = new Order(1, pricingBahaviour); //Student order
        
        var movie = new Movie("Jurassic Park");
        var movieScreening = new MovieScreening(new Date("2/6/2023 12:00"),2,movie); //Movie screening on a monday -> 2 euros per ticket
        movie.addScreening(movieScreening);

        var ticket = new MovieTicket(movieScreening, true, 2, 15); //Premium
        var ticket2 = new MovieTicket(movieScreening, true, 2, 17); //Premium

        order.addSeatReservation(ticket);
        order.addSeatReservation(ticket2);

        expect(pricingBahaviour.calculatePrice(order.tickets)).toBe(4);
    });

    it('get 3 euro extra + discount for premium ticket as a not-student', ()=>{
        var pricingBahaviour = new NormalPricingBehaviour();

        const order = new Order(1, pricingBahaviour); //No student order
        
        var movie = new Movie("Jurassic Park");
        var movieScreening = new MovieScreening(new Date("2/4/2023 12:00"),2,movie); //Movie screening on a saturday -> 2 euros per ticket
        movie.addScreening(movieScreening);

        var ticket = new MovieTicket(movieScreening, true, 2, 15); //Premium
        var ticket2 = new MovieTicket(movieScreening, true, 2, 15); //Premium
        var ticket3 = new MovieTicket(movieScreening, true, 2, 15); //Premium
        var ticket4 = new MovieTicket(movieScreening, true, 2, 15); //Premium
        var ticket5 = new MovieTicket(movieScreening, true, 2, 15); //Premium
        var ticket6 = new MovieTicket(movieScreening, true, 2, 15); //Premium
        var ticket7 = new MovieTicket(movieScreening, true, 2, 15); //Premium


        order.addSeatReservation(ticket);
        order.addSeatReservation(ticket2);
        order.addSeatReservation(ticket3);
        order.addSeatReservation(ticket4);
        order.addSeatReservation(ticket5);
        order.addSeatReservation(ticket6);
        order.addSeatReservation(ticket7);

        expect(pricingBahaviour.calculatePrice(order.tickets)).toBe(31.50);
    });
});