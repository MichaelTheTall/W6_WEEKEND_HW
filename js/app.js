document.addEventListener('DOMContentLoaded', () => {
  const newItemform =
  document.querySelector('#newdoggoform');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton =
  document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function(event) {
  event.preventDefault();

  const doggoListItem =
  createDoggoListItem(event.target);
  const doggoList =
  document.querySelector('#doggolist');
  doggoList.appendChild(doggoListItem);

  event.target.reset();
}
