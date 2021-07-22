// store -> StripeApi
//this implies store has all code to manage stripe API or we can say that our store depends on stripe API. or the store is very coupled with the stripe api.
// Problems-> what if we have to switch to Paypal or test our code of store?
//We add an interface in the middle=> Store->Payment Processor<-Stripe API

//We create a wrapper around external dependencies.
//Comoonly known as idea adapter pattern or the facade pattern.
//Code depends on the wrapper we created and not on the actual implementation of the detail for dependendency we are using.
//Dependency Inversion Principle -> We dont want our high level code to depend on the low level implementaion of our dependencies.

class Store {
  // constructor(user) {
  //   this.paypal = new Paypal();
  //   this.User = user;
  //   this.stripe = new Stripe(user);
  // }
  constructor(PaymentProcessor) {
    this.PaymentProcessor = PaymentProcessor;
  }

  purchaseBike(quantity) {
    // this.paypal.makePayment(this.User, 200 * quantity);
    // this.stripe.makePayment(200 * quantity * 100);
    this.PaymentProcessor.pay(200 * quantity);
  }
  purchaseHelmet(quantity) {
    // this.paypal.makePayment(this.User, 15 * quantity);
    // this.stripe.makePayment(15 * quantity * 100);
    this.PaymentProcessor.pay(15 * quantity);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }
  makePayment(amountInCents) {
    console.log(
      `${this.user} made payment of $${amountInCents / 100} with stripe`
    );
  }
}

class StripePaymentProcessor {
  constructor(user) {
    this.stripe = new Stripe(user);
  }
  pay(amountInDollars) {
    this.stripe.makePayment(amountInDollars * 100);
  }
}

class Paypal {
  makePayment(user, amountInDollars) {
    console.log(`${user} made payment of $${amountInDollars} with Paypal`);
  }
}

class PaypalPaymentProcessor {
  constructor(user) {
    this.user = user;
    this.paypal = new Paypal();
  }
  pay(amountInDollars) {
    this.paypal.makePayment(this.user, amountInDollars);
  }
}

// const store = new Store('John');
const store = new Store(new StripePaymentProcessor('John'));
store.purchaseBike(2);
store.purchaseHelmet(2);

const store2 = new Store(new PaypalPaymentProcessor('John'));
store2.purchaseBike(2);
store2.purchaseHelmet(2);

// The main idea of the dependency inversion principle is that any class that uses a dependency should only ever use the dependency through a predefined interface/wrapper. This makes it so that your code will never directly depend on a low level API for its operations. The reason this is so important is because if you ever need to change or remove that dependency it becomes really difficult when it is used all over your code. By wrapping this dependency in an interface you can depend on the interface you created which will make changing out the dependency painless.
