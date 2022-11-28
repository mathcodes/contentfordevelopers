// HTML:
{/* <div>
  <h1>Todo List</h1>
  <div>
    <input
      aria-label="Add new task"
      type="text"
      placeholder="Add your task" />
    <div>
      <button id="submit">Submit</button>
    </div>
  </div>
  <ul>
    <li>
      <span>Walk the dog</span>
      <button>Delete</button>
    </li>
    <li>
      <span>Water the plants</span>
      <button>Delete</button>
    </li>
    <li>
      <span>Wash the dishes</span>
      <button>Delete</button>
    </li>
  </ul>
</div> */}
//TODO declare anonymous function
(() => {
  // Retain a reference to the elements which persist
  // throughout usage of the app.
  //TODO bind elements using (QS) to input, #submit, and ul
  const $inputEl = document.querySelector('input');
  const $submitButtonEl = document.querySelector('#submit');
  const $todoListEl = document.querySelector('ul');
  //TODO create function addTask that takes in a label
  function addTask(label) { 
    //TODO Create the DOM elements for the new task, li and span, using createElement(CE)
    const $newTaskElement = document.createElement('li');
    const $span = document.createElement('span');
    //TODO Using appendChild(AC), place span element in the li element
    $newTaskElement.appendChild($span);
    //TODO Using Node.textContent here instead of Element.innerHTML
    //TODO to prevent XSS (Cross Site Scripting), place the label in the li element
    $newTaskElement.textContent = label;

    //TODO create DELETE button
    //TODO use (CE) to create element, button
    const $btn = document.createElement('button');
    //TODO Give it text using (TC)
    $btn.textContent = 'Delete';
    //TODO Using (AC), place button into the li element
    $newTaskElement.appendChild($btn);

    //TODO Add the new task (li element) to the list (ul element) using .append()
    $todoListEl.append($newTaskElement);
  }

  //TODO Create new function to delete tasks that will be called using upcoming (EL), pass in an element
  function deleteTask($itemEl) {
    //TODO Remove the task from the list by using removeChild(passed in element) on parentNode on the passed in element
    $itemEl.parentNode.removeChild($itemEl);
  }

  //TODO add click (EL) to the button element created above
  $submitButtonEl.addEventListener('click', () => {
    //TODO call addTask and pass in the value of the input element created above
    addTask($inputEl.value);
    //TODO Reset the input so that new tasks can be added.
    $inputEl.value = '';
  });

  //TODO add click(EL) to the list whose cb function takes in the event
  // Add a listener to the list instead of individual tasks.
  // This is called event delegation and the benefit is that
  // the Delete button of newly-added tasks will also respond
  // to clicks without you having to manually add event listeners
  // to them. You also don't have to remove any event listeners
  // when the task is removed.
  $todoListEl.addEventListener('click', (event) => {
    // Check that the button is being clicked and not something
    // else (e.g. the task label).
    //TODO check 'if' tagName, the target, is === to 'BUTTON', if so, call deleteTask, passing in the target.parentNode
    if (event.target.tagName === 'BUTTON') {
      deleteTask(event.target.parentNode);
    }
  });
})();
