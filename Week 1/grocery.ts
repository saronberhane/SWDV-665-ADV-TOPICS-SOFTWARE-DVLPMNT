class Grocery {
    name: string;
    quantity: number;
    price: number;
    category: string;
  
    constructor(name: string, quantity: number, price: number, category: string) {
      this.name = name;
      this.quantity = quantity;
      this.price = price;
      this.category = category;
    }
}
  
let groceries: Grocery[] = [
    new Grocery("Milk", 3, 2.99, "Dairy"),
    new Grocery("Cake", 6, 1.99, "Bakery"),
    new Grocery("Eggs", 11, 0.99, "Dairy"),
];

const groceryList = `
    <h1>Grocery List</h1>
    <ul>
        ${groceries.map(grocery => `
        <li>${grocery.quantity} ${grocery.name} - $${grocery.price.toFixed(2)}  ${grocery.category}</li>
        `).join('')}
    </ul>
`;

document.body.innerHTML = groceryList;