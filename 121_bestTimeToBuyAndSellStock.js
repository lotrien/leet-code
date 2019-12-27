/**
 * 121. Best Time to Buy and Sell Stock
 */
const maxProfit = function(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    }
    
    if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  }

  return maxProfit;
}
