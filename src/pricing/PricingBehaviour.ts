import { MovieTicket } from "../MovieTicket";

export interface PricingBehaviour{
    calculatePrice(tickets : Array<MovieTicket>) : number;
}