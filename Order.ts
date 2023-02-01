import fs from "fs";

class Order{
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

    public export(exportFormat: TicketExportFormats){
        if(exportFormat == TicketExportFormats.PLAINTEXT){
            this.fs.writeFile("file.txt", Order.toString(), function(err: any){
                if(err){
                    return console.error(err);
                }
                console.log("Order has been created");
            });
        } else if(exportFormat == TicketExportFormats.JSON){
            const content = JSON.stringify(Order, null, 2);
            this.fs.writeFile("file.json", content, (err: any) => {
                if(err){
                    return console.error(err);
                }
                console.log("Oder has been created");
            });
        } else{
            throw new Error("Invalid data format")
        }
    }

}