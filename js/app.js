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

const createDoggoListItem = function(form) {
  const doggoListItem =
  document.createElement('li');
  doggoListItem.classList.add('doggolist-item');

  const name = document.createElement('h2');
  name.textContent = form.name.value;
  doggoListItem.appendChild(name);

  const gender = document.createElement('h3');
  gender.textContent = form.gender.value;
  doggoListItem.appendChild(gender);

  const breed = document.createElement('p');
  breed.textContent = form.breed.value;
  doggoListItem.appendChild(breed);

  return doggoListItem;
}

const handleDeleteAllClick = function(event) {
  const doggoList = document.querySelector('#doggolist');
  doggoList.innerHTML = '';
}
