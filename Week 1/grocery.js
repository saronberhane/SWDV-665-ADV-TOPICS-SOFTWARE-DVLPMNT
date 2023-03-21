var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price, category) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.category = category;
    }
    return Grocery;
}());
var groceries = [
    new Grocery("Milk", 3, 2.99, "Dairy"),
    new Grocery("Cake", 6, 1.99, "Bakery"),
    new Grocery("Eggs", 11, 0.99, "Dairy"),
];
var groceryList = "\n    <h1>Grocery List</h1>\n    <ul>\n        ".concat(groceries.map(function (grocery) { return "\n        <li>".concat(grocery.quantity, " ").concat(grocery.name, " - $").concat(grocery.price.toFixed(2), "  ").concat(grocery.category, "</li>\n        "); }).join(''), "\n    </ul>\n");
document.body.innerHTML = groceryList;
