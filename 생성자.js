function Item(title, price) {
  this.title = title;
  this.price = price;
  this.showPrice = function () {
    console.log(`가격은 ${price}입니다.`);
  };
}

const item1 = new Item("인형", 8000);
const item2 = new Item("초콜릿", 1200);
const item3 = new Item("아이스크림", 5000);
const item4 = new Item("플라스틱 공구함", 18000);

console.log(item1, item2, item3, item4);
item3.showPrice();
