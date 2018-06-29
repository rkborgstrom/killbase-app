(function () {

    let link = 'http://localhost:8000/assassins';
    let _rating = document.getElementById('_rating');
    let _kills = document.getElementById('_kills');
    let _price = document.getElementById('_price');
    let _age = document.getElementById('_age');
    let _weapon = document.getElementById('_weapon');
    let _contact = document.getElementById('_contact');


    addButton.addEventListener('click', function (event) {
        fetch(link)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                let rating = data.main.rating;
                let kills = data.main.kills;
                let price = data.main.price;
                let age = data.main.age;
                let weapon = data.main.weapon;
                let contact = ddata.main.contact;

                _rating.setAttribute('value', rating);
                _kills.setAttribute('value', kills);
                _price.setAttribute('value', price);
                _age.setAttribute('value', age);
                _weapon.setAttribute('value', weapon);
                _contact.setAttribute('value', contact);

                _rating.innerHTML = (`Rating: ${rating}`);
                _kills.innerHTML = (`Kills: ${kills}`);
                _price.innerHTML = (`Price: ${price}`);
                _age.innerHTML = (`Age: ${age}`);
                _weapon.innerHTML = (`The Weapon: ${weapon}`);
                _contact.innerHTML = (`Contact: ${contact}`);

            })
            .catch(error => console.log(error));
    })


})();