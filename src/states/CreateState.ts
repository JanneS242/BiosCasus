import { Order } from "../Order";
import { ConfirmedState } from "./ConfirmedState";
import { IState } from "./IState";
import { PayState } from "./PayState";

export class CreateState implements IState{
    private order : Order
    
    public constructor(order: Order) {
        this.order = order;
    }
    
    create(): void {
        this.order.changeState(new ConfirmedState(this.order));
    }

    confirm(): void{
        throw new Error("Method is not possible");
    }

    pay(): void {
        throw new Error("Method is not possible");
    }
    change(): void {
        throw new Error("Method is not possible");
    }
    cancel(): void {
        throw new Error("Method is not possible");
    }

    complete(): void{
        throw new Error("Method is not possible");
    }
    
}