class OrderProcessor {
  paymentService: PaymentServiceInterface;

  constructor(paymentService: PaymentServiceInterface) {
    this.paymentService = paymentService; // Dependency is injected
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

interface PaymentServiceInterface {
  processPayment(orderId: string): boolean;
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

class PayUPayment implements PaymentServiceInterface {
  processPayment(orderId: string) {
    // Logic to process payment
    return payUServices(orderId) === 'success'; // Assume payment is always successful
  }
}

const main = () => {
  const newOrderPaypal = new OrderProcessor(new PaypalPayment());
  const newOrderPayU = new OrderProcessor(new PayUPayment());

  newOrderPaypal.processOrder('2');
  newOrderPayU.processOrder('2');
};
export default OrderProcessor;
