import { Order } from "../Order";
import { CancelState } from "./CancelState";
import { CompleteState } from "./CompleteState";
import { IState } from "./IState";
import { PayState } from "./PayState";

export class ProvisionalState implements IState{
    
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
        this.order.changeState(new PayState(this.order));
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