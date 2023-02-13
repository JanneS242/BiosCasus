export interface IState{
    create(): void;
    confirm() : void;
    pay() : void;
    change(): void;
    complete() : void;
    cancel() : void;
}