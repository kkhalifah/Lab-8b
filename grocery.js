
var newElement = document.createElement("div");
newElement.style.backgroundColor="tan";
newElement.style.height='800px';
newElement.style.width="600px";
document.body.appendChild(newElement);
//document.style.float = "right";
//make the price.style.marginRight = "10px";

var groceryList =  [
  {food: "apples",
    price: 0.99},
    {food: "bread",
    price: 1.50},
    {food: "steak",
    price: 7.59},
    {food: "beer",
    price: 11.99},
    {food: "candy",
    price: 2.99},
    {food: "potatoes",
    price: 4.05},
    {food: "butter",
    price: 3.25},
    {food: "vodka",
    price: 3.99},
    {food: "cheese",
    price: 3.75},
    {food: "chicken", price: 5.67}
  ];

var tax = 1.06;
 var total = 0;
groceryList.forEach(function(i){
  var itemName = document.createElement("p");
  itemName.className= "foodList";
    itemName.innerText=i.food;
    newElement.appendChild(itemName);

    var itemPrice = document.createElement("p");
    itemPrice.className= "priceList";
      itemPrice.innerText=i.price;
      newElement.appendChild(itemPrice);

// var groceryList total =
//  console.log("Food: " + i.food, "Price: " + i.price),
total += i.price;
});
groceryList.forEach(function(i){
var total = document.createElement("p");
total.innerText=i.total;

//newElement.appendChild(total);

});
// var groceryList.totalAmount = function (){
console.log("subtotal is " + total);
console.log("total is " + total * tax);
