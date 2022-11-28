
//TODO declare anonymous function
(() => {
  //TODO bind elements using (QS) to input, #submit, and ul
  const inputEl = document.querySelector('input');
  const submitBtn = document.querySelector('#submit');
  const itemList = document.querySelector('ul');
  //TODO create function addTask that takes in a label
  const addTask = (label) => {
    //TODO Create the DOM elements for the new task, li and span, using createElement(CE)
    const newListItem = document.createElement('li');
    const spanEl = document.createElement('span');
    //TODO Using appendChild(AC), place span element in the li element
    newListItem.appendChild(spanEl);
    //TODO Using Node.textContent here instead of Element.innerHTML
    //TODO to prevent XSS (Cross Site Scripting), place the label in the li element
    newListItem.textContent = label;
    //TODO create DELETE button
    //TODO use (CE) to create element, button 
    const deleteButton = document.createElement('button');
    //TODO Give it text using (TC)
    deleteButton.textContent = 'Delete';

    //TODO Using (AC), place button into the li element
    newListItem.appendChild(deleteButton);
    //TODO Add the new task (li element) to the list (ul element) using .append()
    itemList.append(newListItem);
  }
  //TODO Create new function to delete tasks that will be called using upcoming (EL), pass in an element
  const deleteTask = (currEl) => {
    //TODO Remove the task from the list by using removeChild(passed in element) on parentNode on the passed in element
    currEl.parentNode.removeChild(currEl);
  }
  //TODO add click (EL) to the button element created above
  submitBtn.addEventListener('click', () => {
    //TODO call addTask and pass in the `value` of the input element created above
    addTask(inputEl.value);
    //TODO Reset the input so that new tasks can be added.
    inputEl.value = '';
  })
  //TODO add click(EL) to the list whose cb function takes in the event
  itemList.addEventListener('click', (event) => {
    //TODO check 'if' tagName, the target, is === to 'BUTTON', if so, call deleteTask, passing in the target.parentNode
    if (event.target.tagName === 'BUTTON') {
      deleteTask(event.target.parentNode);
    }
  })
}
//TODO CALL FUNCTION
)();
