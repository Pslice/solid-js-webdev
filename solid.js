//single responsibility
//
//dependency inversion
class Store {
    constructor(user) {
        this.stripe = new this.stripe(user);
    }

    purchaseTubing(qty) {
        this.stripe.makePayment(200 * qty * 100);
    }
    purchaseSensors(qty) {
        this.stripe.makePayment(15 * qty);
    }
}

class Stripe {
    constructor(user) {
        this.user = user
    }
    makePayment(amount) {
        console.log(`${this.user} made payment of ${amount / 100} with Stripe`)
    }
}