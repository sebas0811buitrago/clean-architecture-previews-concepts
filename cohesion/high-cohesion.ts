interface ICustomer {
  createCustomer(email: string, password: string): void;
  loginCustomer(email: string, password: string): void;
  updateCustomerProfile(customerId: string, name: string): void;
}

class Customer implements ICustomer {
  private customer: any;

  public createCustomer(email: string, password: string) {} // customers

  public loginCustomer(email: string, password: string) {} // customers

  public updateCustomerProfile(customerId: string, name: string) {} // customers
}

interface IProductList {
  addProduct(title: string, price: number): void;
  updateProduct(productId: string, title: string, price: number): void;
  removeProduct(productId: string): void;
  getAvailableItems(productId: string): void;
  restockProduct(productId: string): void;
}

class ProductList implements IProductList {
  private offeredProducts: any;

  public addProduct(title: string, price: number) {} // offeredProducts

  public updateProduct(productId: string, title: string, price: number) {} // offeredProducts

  public removeProduct(productId: string) {} // offeredProducts

  public getAvailableItems(productId: string) {} // offeredProducts

  public restockProduct(productId: string) {} // offeredProducts
}

class Order {
  private orders: any;
  private customer;
  private product;

  constructor(product: IProductList, customer: ICustomer) {
    this.customer = customer;
    this.product = product;
  }

  public makePurchase(customerId: string, productId: string) {} // customers, orders, offeredProducts

  public addOrder(customerId: string, productId: string, quantity: number) {} // customers, orders, offeredProducts

  public refund(orderId: string) {} // customers, orders
}

export default { Order, Customer, ProductList };
