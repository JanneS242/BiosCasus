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

    public isGroupDiscount(amountOfTickets : number) : boolean{
        if(this.isStudentOrder){
            return false;
        }

        this.tickets.forEach(m => {
            let dayOfWeek = m.movieScreening.dateAndtime.getDay();
            //Sunday = 0, Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saterday = 6
            if(dayOfWeek == 5 || dayOfWeek == 6 || dayOfWeek == 0 ){
                return false;
            }

            if(amountOfTickets >= 6){
                return true;
            }
        });

        return false;
    }

    public isSecondTicketForFree() : boolean{
        if(this.isStudentOrder){
            return true;
        }

        this.tickets.forEach(m => {
            let dayOfWeek = m.movieScreening.dateAndtime.getDay();
            //Sunday = 0, Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saterday = 6
            if(dayOfWeek == 5 || dayOfWeek == 6 || dayOfWeek == 0 ){
                return false;
            }
        });

        return true;
    }

    public calculatePrice(secondTicketFree : boolean, discount : number) : number{
        let totalPrice : number = 0;
        let premiumPrice : number = this.isStudentOrder ? 2 : 3;
        let isFree : boolean = false;

        this.tickets.forEach(m => {
            if(!secondTicketFree && !isFree){
                totalPrice += m.getPrice();

                if(m.isPremium){
                    totalPrice += premiumPrice;
                }
            }

            isFree = !isFree;
        });

        if(discount){
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