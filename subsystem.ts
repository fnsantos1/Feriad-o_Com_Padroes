class estoque{
    checkStock(){
        console.log("Verificando estoque...");
    }
}
class pagamento{
    processPayment(){
        console.log("Processando pagamento...");
    }
}
class order{
    processOrder(){
        console.log("Processando pedido...");
    }
}
class envio{
    arrangeShipping(){
        console.log("Organizando envio...");
    }
}
export class ecommerceFacade{
    private estoque: estoque;
    private pagamento: pagamento;
    private order: order;
    private envio: envio;
    
    constructor() {
        this.estoque = new estoque();
        this.pagamento = new pagamento();
        this.order = new order();
        this.envio = new envio();
    }
    processarPedido(){
        this.estoque.checkStock();
        this.pagamento.processPayment();
        this.order.processOrder();
        this.envio.arrangeShipping();
        console.log("Pedido processado com sucesso!");
    }
}