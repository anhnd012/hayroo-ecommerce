export const subTotal = (id, price) => {
  let carts = JSON.parse(localStorage.getItem("cart"));
  let subTotalCost = carts.filter((items) => items.id === id ).reduce((total, item) => total + item.quantitiy * price, 0);
  return subTotalCost;
};

export const quantity = (id) => {
  let product = 0;
  let carts = JSON.parse(localStorage.getItem("cart"));
  if (carts) {
    carts.forEach((item) => {
      if (item.id === id) {
        product = item.quantitiy;
      }
    });
  }
  return product;
};

export const totalCost = () => {
  let totalCost = 0;
  let carts = JSON.parse(localStorage.getItem("cart"));
  if (carts) {
    carts.forEach((item) => {
      totalCost += item.quantitiy * item.price;
    });
  }
  return totalCost;
};
