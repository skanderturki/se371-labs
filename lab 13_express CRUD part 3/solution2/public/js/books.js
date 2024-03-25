
const deleteBook = (obj) => {
  const id = obj.dataset.bookid;

  let deletePromise = fetch(`/books/v1/${id}`, {method: "DELETE"});
  deletePromise.then((data) => {
    return data.json()
  }).then(result => {
    alert("Delete succeeded");
    window.location = result.redirect;
    return;
  })
  .catch((err) => {
    console.log(err);
  });
}

const updateBook = (obj) => {

}