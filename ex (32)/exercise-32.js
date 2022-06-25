function uncompletedNotes(notes) {
 for (let index = 0; index < notes.length; index++) {
  
  
 }
}

// ---------------------------------------
// removeFromCart: prende l'id di un prodotto e ne rimuove una unità dal carrello. Se quantity diventa 0, rimuove il prodotto dall'array
// ---------------------------------------
// */

// function removeFromCart(id) {
// for (let index = 0; index < productsInCart.length; index++) {
//     if (productsInCart[index].id == id) {
//         productsInCart[index].quantity = productsInCart[index].quantity - 1;
//         if (productsInCart[index].quantity == 0) {
//             delete productsInCart[index];
//         }
//     }
// }
// return productsInCart;
// }

const notes = [
  {
    id: 1,
    description: 'Workout program',
    todos: [
      {
        id: 1,
        name: 'Push ups - 10 x 3',
        done: false
      },
      {
        id: 2,
        name: 'Abdominals - 20 x 3',
        done: true
      },
      {
        id: 3,
        name: 'Tapis Roulant - 15min',
        done: true
      }
    ]
  },
  {
    id: 2,
    description: 'Front-end Roadmap',
    todos: [
      {
        id: 1,
        name: 'Learn HTML',
        done: true
      },
      {
        id: 2,
        name: 'Learn CSS',
        done: true
      },
      {
        id: 3,
        name: 'Learn JavaScript',
        done: true
      },
      {
        id: 4,
        name: 'Learn Angular',
        done: true
      }
    ]
  }
]

const notesInProgress = uncompletedNotes(notes);
console.log('All notes: ', notes);
console.log('Notes In Progress: ', notesInProgress);