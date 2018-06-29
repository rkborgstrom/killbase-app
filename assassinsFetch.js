document.addEventListener('DOMContentLoaded', function(event) {
    console.log()
})

let link='http://localhost:8000/assassins';


addButton.addEventListener('click', function (event) {
    if (search.value === "") {
        alert('Please enter city')
    } else {
        event.preventDefault();
        fetch(link)
            .then(response => response.json())
            .then(data => {
                console.log(data);