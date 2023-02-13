import { Order } from "../Order";
import { IState } from "./IState";

export class CompleteState implements IState{
    
    private order : Order
    
    public constructor(order: Order) {
        this.order = order;
    }
    
    create(): void {
        throw new Error("Method is not possible");
    }
    confirm(): void {
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