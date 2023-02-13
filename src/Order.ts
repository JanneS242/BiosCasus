import { MovieTicket } from "./MovieTicket";
import { TicketExportFormat } from "./TicketExportFormat";
import * as fs from 'fs';
import { PricingBehaviour } from "./pricing/PricingBehaviour";
import { NormalPricingBehaviour } from "./pricing/NormalPricingBehaviour";
import { IState } from "./states/IState";
import { CreateState } from "./states/CreateState";

export class Order{
    orderNr: number;
    calculator : PricingBehaviour;
    tickets : Array<MovieTicket>;
    currentState : IState;

    private fs = require("fs");

    constructor(orderNr: number, calculator : PricingBehaviour){
        this.calculator = calculator;
        this.orderNr = orderNr;
        this.tickets = new Array<MovieTicket>;
        this.currentState = new CreateState(this);
    }

    public getOrderNr() : number {
        return this.orderNr;
    }

    public addSeatReservation(ticket: MovieTicket){
        this.tickets.push(ticket);
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

    public changeState(state:IState): void
    {
        this.currentState = state;
    }

}