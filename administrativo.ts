export interface observador {
    update(message: string): void;
}
export interface sujeito {
    registerObserver(observer: observador): void;
    removeObserver(observer: observador): void;
    notifyObservers(message: string): void;
}
export class order implements sujeito {
    private observers: observador[] = [];
    registerObserver(observer: observador): void {
        this.observers.push(observer);
    }
    removeObserver(observer: observador): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }
    notifyObservers(message: string): void {
        for (const observer of this.observers) {
            observer.update(message);
        }
    }
    processOrder(): void {
        console.log("Processando pedido...");
        this.notifyObservers("Pedido processado com sucesso!");
    }
}  
export class emailNotification implements observador {
    update(message: string): void {
        console.log("Enviando email de notificação: " + message);
    }
}