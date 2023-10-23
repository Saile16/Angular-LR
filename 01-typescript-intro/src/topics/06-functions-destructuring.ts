export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Nokia1",
  price: 1213,
};

const tablet: Product = {
  description: "Ipad Air",
  price: 250,
};

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

export function taxCalculation(
  options: TaxCalculationOptions
): [number, number] {
  //con el number,number decimos que solo habra 2 elementos dentro
  const { products, tax } = options;
  let total = 0;
  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, taxes] = taxCalculation({
  products: shoppingCart,
  tax: tax,
});

// console.log("TOTAL", total);
// console.log("Tax", taxes);
