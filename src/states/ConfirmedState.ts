import { Order } from "../Order";
import { CancelState } from "./CancelState";
import { IState } from "./IState";
import { PayState } from "./PayState";
import { ProvisionalState } from "./ProvisionalState";

export class ConfirmedState implements IState{
    
    private order : Order
    
    public constructor(order: Order) {
        this.order = order;
    }
    
    create(): void {
        throw new Error("Method is not possible");
    }

    confirm(): void{
        this.order.changeState(new PayState(this.order));
    }

    pay(): void {
        throw new Error("Method is not possible");
    }

    change(): void {
        this.order.changeState(new ProvisionalState(this.order));
    }
    
    cancel(): void {
        this.order.changeState(new CancelState(this.order));
    }

    complete(): void{
        throw new Error("Method is not possible");
    }
}