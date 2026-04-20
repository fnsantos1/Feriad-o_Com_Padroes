export interface payment {
    processPayment(): void;
}
export class externalpayment{
    makePayment(payment: payment): void {
        payment.processPayment();
    }
}
export class paymentadapter implements payment {
    private externalpayment: externalpayment;
    constructor(externalpayment: externalpayment) {
        this.externalpayment = externalpayment;
    }
    processPayment(): void {
        console.log("Adaptando pagamento para o sistema externo...");
        this.externalpayment.makePayment(this);
    }
}