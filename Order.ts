import { MovieTicket } from "./MovieTicket";
import { TicketExportFormat } from "./TicketExportFormat";
import * as fs from 'fs';

export class Order{
    orderNr: number;
    isStudentOrder: boolean;
    tickets : Array<MovieTicket>;

    private fs = require("fs");

    constructor(orderNr: number, isStudentOrder: boolean){
        this.isStudentOrder = isStudentOrder;
        this.orderNr = orderNr;
        this.tickets = new Array<MovieTicket>;
    }

    public getOrderNr() : number {
        return this.orderNr;
    }

    public addSeatReservation(ticket: MovieTicket){
        this.tickets.push(ticket);
    }

    //check if weekend  
    private isWeekend() : boolean {
        var weekendDays: Array<number> = [0, 5, 6]; //sunday, friday, saturday
        for (let ticket of this.tickets) {
            var weekdayOfScreening = ticket.movieScreening.dateAndtime.getDay(); //number of weekday
            //if weekdayOfScreening is in weekendDays
            return weekendDays.includes(weekdayOfScreening) ? true : false;
        }
        return false;
    }

    // get discount if group != isStudent && .length >=6
    private isGroupDiscount(): boolean {
        var amountOfTickets = this.tickets.length;
        return this.isStudentOrder == false && amountOfTickets >= 6 ? this.isWeekend(): false;
    }
    
    //if student order  
    private isSecondTicketFree(): boolean {
        return this.isStudentOrder ? this.isStudentOrder : !this.isWeekend();
    }

    public calculatePrice() : number{
        let totalPrice : number = 0;
        let premiumPrice : number = this.isStudentOrder ? 2 : 3;
        let isFree : boolean = this.isSecondTicketFree();

        for (let i = 0; i < this.tickets.length; i++) {
            var ticket = this.tickets[i];
            var ticketPrice = ticket.isPremiumTicket() ? ticket.getPrice() + premiumPrice : ticket.getPrice();
            if (isFree) {
                if (i % 2 == 0) {
                    totalPrice += ticketPrice;
                }
            } else {
                totalPrice += ticketPrice;
            }
        }

        if(this.isGroupDiscount()){
            totalPrice *= 0.9;
        }

        return totalPrice;
    }

    public export(exportFormat: TicketExportFormat){
        if (exportFormat == TicketExportFormat.PLAINTEXT) {
            fs.writeFile(`resources/txt/order-${this.orderNr}.txt`, this.toString(), function (err) {
                if (err) {
                    return console.error(err);
                }
                console.log("Order has been created!");
            });
        } else if (exportFormat == TicketExportFormat.JSON) {
            const content = JSON.stringify(this, null, 2);
            fs.writeFile(`resources/json/order-${this.orderNr}.json`, content, (err) => {
                if (err) {
                    return console.error(err);
                }
                console.log("Order has been created!");
            });
            // sla op in een download
        } else {
            throw new Error("Invalid data format");
        }
    }

}