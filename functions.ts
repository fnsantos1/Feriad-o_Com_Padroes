export interface order{
    getdescription(): string;
    getCost(): number;
}
export class basicorder implements order{
    getdescription(): string {
        return "pedido basico";
    }
    getCost(): number {
        return 10;
    }
}
export class orderdecorator implements order{
    protected order: order;
    constructor(order: order) {
        this.order = order;
    }
    getdescription(): string {
        return this.order.getdescription();
    }
    getCost(): number {
        return this.order.getCost();
    }
}
export class giftwrapdecorator extends orderdecorator{
    constructor(order: order) {
        super(order);
    }
    getdescription(): string {
        return super.getdescription() + " + embrulho para presente";
    }
    getCost(): number {
        return super.getCost() + 5;
    }
}
export class expressshippingdecorator extends orderdecorator{
    constructor(order: order) {
        super(order);
    }
    getdescription(): string {
        return super.getdescription() + " + frete expresso";
    }
    getCost(): number {
        return super.getCost() + 15;
    }
}