/**
 * 1357. Apply Discount Every n Orders
 */
class Cashier {
  constructor(n, discount, products, prices) {
    this.countOfCustomers = 0;
    this.n = n;
    this.discount = discount;
    this.pp = this._storePP(products, prices);
  }

  _storePP(products, prices) {
    const pp = {};
    products.forEach((value, idx) => {
      pp[value] = prices[idx];
    });

    return pp;
  }

  getBill(product, amount) {
    let res = 0;
    this.countOfCustomers++;
    product.forEach((value, idx) => {
      res += this.pp[value] * amount[idx];
    });

    if (this.countOfCustomers % this.n === 0) {
      return (res - (this.discount * res) / 100);
    }
    return res;
  }
}
