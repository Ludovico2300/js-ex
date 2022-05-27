const order = {};

// if (order && order.customer && order.customer.address && !order.customer.address.city) {
//   console.log('City is required');
// }



if (!order?.customer?.address?.city) { //cosi facendo uso l'optional chaining (order?.customer?.address?.city) preceduto dalla negazione "!"
  console.log('City is required');
}