import { MovieTicket } from "../MovieTicket";
import { PricingBehaviour } from "./PricingBehaviour";

export class StudentPricingBehaviour implements PricingBehaviour{
    
    calculatePrice(tickets : Array<MovieTicket>): number {
        let totalPrice : number = 0;
        let premiumPrice : number = 2;

        for (let i = 0; i < tickets.length; i++) {
            var ticket = tickets[i];
            var ticketPrice = ticket.isPremiumTicket() ? ticket.getPrice() + premiumPrice : ticket.getPrice();
            if (i % 2 == 0) {
                totalPrice += ticketPrice;
            } 
        }

        return totalPrice;
    }

}