import { MovieTicket } from "../MovieTicket";
import { PricingBehaviour } from "./PricingBehaviour";

export class NormalPricingBehaviour implements PricingBehaviour{  
    calculatePrice(tickets : Array<MovieTicket>): number {
        let totalPrice : number = 0;
        let premiumPrice : number = 3;

        var weekendDays: Array<number> = [0, 5, 6]; //sunday, friday, saturday

        for (let i = 0; i < tickets.length; i++) {
            var ticket = tickets[i];
            var ticketPrice = ticket.isPremiumTicket() ? ticket.getPrice() + premiumPrice : ticket.getPrice();
            var weekdayOfScreening = ticket.movieScreening.dateAndtime.getDay(); //number of weekday
            //if weekdayOfScreening is in weekendDays
            if (!weekendDays.includes(weekdayOfScreening)) {
                if (i % 2 == 0) {
                    totalPrice += ticketPrice;
                }
            } else {
                totalPrice += ticketPrice;
            }           
        }

        if(tickets.length >= 6 && weekendDays.includes(tickets[1].movieScreening.dateAndtime.getDay())){
            totalPrice *= 0.9;
        }

        return totalPrice;
    }
}