interface order{
    process(): void;
}
export class fisico implements order{
    process(): void {
        console.log("Processando pedido físico...");
    }
}
export class digital implements order{
    process(): void {
        console.log("Processando pedido digital...");
    }
}
export class assinatura implements order{
    process(): void {
        console.log("Processando pedido de assinatura...");
    }
}
export class orderFactory{
    static createOrder(type: string): order{
        switch(type){
            case "fisico":
                return new fisico();
            case "digital":
                return new digital();
            case "assinatura":
                return new assinatura();
            default:
                throw new Error("Tipo de pedido inválido");
        }
    }
}