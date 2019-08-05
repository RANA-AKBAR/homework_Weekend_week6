document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const sportsItem = createSportStarItem(event.target);
  const sports = document.querySelector('#sport-star');
  sports.appendChild(sportsItem);

  event.target.reset();
}

const createSportStarItem = function (form)

{
  const sportsItem = document.createElement('li');
  sportsItem.classList.add('sport-Star-item');

  const first_name = document.createElement('h2');
  first_name.textContent = form.first_name.value;
  sportsItem.appendChild(first_name);

  const last_name = document.createElement('h3');
  last_name.textContent = form.last_name.value;
  sportsItem.appendChild(last_name);

  const team = document.createElement('p');
  team.textContent = form.team.value;
  sportsItem.appendChild(team);

  return sportsItem;
}

const handleDeleteAllClick = function (event) {
  const sports =
  document.querySelector('#sport-star');
  sports.innerHTML = '';
}
