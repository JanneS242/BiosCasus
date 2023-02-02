import { Movie } from "./Movie";
import { MovieScreening } from "./MovieScreening";
import { MovieTicket } from "./MovieTicket";
import { Order } from "./Order";
import { TicketExportFormat } from "./TicketExportFormat";

const order = new Order(1, true);

var movie = new Movie('Leuke film');
var movieScreening = new MovieScreening(new Date('2/4/2023 12:00'), 2, movie);
movie.addScreening(movieScreening);
var ticket = new MovieTicket(movieScreening, true, 2, 15);
var ticket2 = new MovieTicket(movieScreening, false, 2, 17);
var ticket3 = new MovieTicket(movieScreening, false, 2, 19);
var ticket4 = new MovieTicket(movieScreening, true, 2, 19);
var ticket5 = new MovieTicket(movieScreening, false, 2, 19);
var ticket6 = new MovieTicket(movieScreening, false, 2, 19);
order.addSeatReservation(ticket);
order.addSeatReservation(ticket2);
order.addSeatReservation(ticket3);
order.addSeatReservation(ticket4);
order.addSeatReservation(ticket5);
order.addSeatReservation(ticket6);

console.log('Orderprice is: ' + order.calculatePrice(false, 10));
const format = TicketExportFormat.JSON;
order.export(format);