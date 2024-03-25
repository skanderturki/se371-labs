
const deleteBook = (obj) => {
  const id = obj.dataset.bookid;
  let deletePromise = fetch(`/books/v1/${id}`, {method: 'DELETE'});
  deletePromise.then(data => { return data.json() })
  .then(result => {
    alert("The operation was successful");
    window.location = result.redirectTo;
  })
  .catch(error => {
    console.log(error);
  });
}

const updateBook = (obj) => {

}