//single responsibility
//
//dependency inversion
class Store {
    constructor(user) {
        this.stripe = new this.stripe(user);
    }

    purchaseTubing(qty) {
        this.stripe.makePayment();
    }
    purchaseSensors(qty) {
        this.stripe.makePayment();
    }

}

