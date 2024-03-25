
const addToCart = (obj) => {
  const id = obj.dataset.chairid;
  fetch(`/cart/v1/${id}`, {method: "post"})
    .then(data => {return data.json()})
    .then(data => {
      if(data.added) {
        console.log(data.cart);
        alert(`Item added to cart`);
      } else {
        alert('Something went wrong !!');
      }
    })
    .catch(error => {
      alert('Something went wrong !!');
    });
}