import { Order } from "../Order";
import { CancelState } from "./CancelState";
import { IState } from "./IState";

export class PayState implements IState{
    
    private order : Order
    
    public constructor(order: Order) {
        this.order = order;
    }
    
    create(): void {
        throw new Error("Method is not possible");
    }

    confirm() : void{
        throw new Error("Method is not possible");
    }

    pay(): void {
        throw new Error("Method is not possible");
    }

    change(): void {
        throw new Error("Method is not possible");
    }
    
    cancel(): void {
        this.order.changeState(new CancelState(this.order));
    }

    complete(): void{
        throw new Error("Method is not possible");
    }
}