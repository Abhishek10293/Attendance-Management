document.getElementById('attendance-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the input value
    const nameInput = document.getElementById('name');
    const name = nameInput.value;

    if (name.trim() === "") {
        alert("Name cannot be empty");
        return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = name;

    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';
    removeButton.onclick = function() {
        li.remove();
    };

    // Append the remove button to the list item
    li.appendChild(removeButton);

    // Append the new list item to the attendance list
    document.getElementById('attendance-list').appendChild(li);

    // Clear the input
    nameInput.value = "";
});
