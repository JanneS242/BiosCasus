class Order{
    orderNr: number;
    isStudentOrder: boolean;
    tickets : Array<MovieTicket>;

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

    public calculatePrice() : number{
        return 0.0;
    }

    public export(exportFormat: TicketExportFormats){

    }

}