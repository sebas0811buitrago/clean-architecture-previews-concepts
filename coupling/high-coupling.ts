class OrderProcessor {
  paymentService: PaypalPayment;

  constructor() {
    this.paymentService = new PaypalPayment(); // Direct dependency on PaymentService
  }

  processOrder(orderId: string) {
    const paymentStatus = this.paymentService.processPayment(orderId);
    if (paymentStatus) {
      console.log('Order processed successfully.');
    } else {
      console.log('Payment failed.');
    }
  }
}

const paypalService = (orderId: string) => {
  return true;
};

class PaypalPayment {
  processPayment(orderId: string) {
    // Logic to process payment
    return paypalService(orderId); // Assume payment is always successful
  }
}

const payUServices = (orderId: string) => {
  return 'success';
};

class PayUPayment {
  paymentTransaction(orderId: string) {
    // Logic to process payment
    return payUServices(orderId); // Assume payment is always successful
  }
}

export default OrderProcessor;
