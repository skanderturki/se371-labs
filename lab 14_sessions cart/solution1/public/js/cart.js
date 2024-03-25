
const addToCart = (obj) => {
  const chairid = obj.dataset.chairid;
  fetch(`/cart/v1/${chairid}`, {method: 'post'})
    .then(data => { return data.json()})
    .then(data => {
      if(data.added){
        alert("Item added to your cart");
        console.log(data.cart);
      }
    })
    .catch(error => {
      console.log(error);
    });
}