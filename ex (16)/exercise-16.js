


function createStore() {

  let products = [];
  
  return function addtoStore (obj) {
  products.push(obj);
  console.log(products);
  }

  // console.log(addtoStore());

  

}

const redPants = { id: 1, name: 'Red Pants' };
const whiteHat = { id: 2, name: 'White Hat' };
const blackHat = { id: 3, name: 'Black Hat' };
const blackSneakers = { id: 4, name: 'Black Sneakers' };

console.log('--- Dress Store ---');
const dressStore = createStore();
dressStore(redPants);
dressStore(whiteHat);
dressStore(blackHat);

console.log('--- Shoes Store ---');
const shoesStore = createStore();
shoesStore(blackSneakers);