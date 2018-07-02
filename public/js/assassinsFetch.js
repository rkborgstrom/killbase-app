(function () {
    let link = 'http://localhost:8000/assassins';
    let assassinList = document.getElementById('assassins-list');
    let _fullName = document.getElementById('Full_name');
    let _rating = document.getElementById('_rating');
    let _kills = document.getElementById('_kills');
    let _price = document.getElementById('_price');
    let _age = document.getElementById('_age');
    let _weapon = document.getElementById('_weapon');
    let _contact = document.getElementById('_contact');
    let _addButton = document.getElementById('_addButton');

    document.addEventListener('DOMContentLoaded', function (event) {
        fetch(link)
            .then(response => {
                console.log('Reponse', response);
                return response.json()
            })
            .then(assassinsData => {
                assassinsData.forEach(function (assassinData) {

                    let _fullName = assassinData.Full_name;
                    let _codeName = assassinData.code_names;
                    let _rating = assassinData.rating;
                    let _price = assassinData.price;
                    let _kills = assassinData.kills;
                    let _age = assassinData.age;
                    let _weapon = assassinData.weapon;

                    let startingDiv = document.getElementById('assassin-section');

                    // let allAssassins = document.getElementsByClassName('all-content-assassins');
                    // startingDiv.appendChild(allAssassins);

                    let assassinSection = document.createElement('div');
                    startingDiv.appendChild(assassinSection);

                    let nameDiv = document.createElement('div');
                    nameDiv.innerText = `Full Name: ${_fullName}`;
                    startingDiv.appendChild(nameDiv);

                    let row = document.createElement('div');
                    startingDiv.appendChild(row);

                    let codeNameDiv = document.createElement('div');
                    codeNameDiv.innerHTML = `Code Name: ${_codeName}`;
                    startingDiv.appendChild(codeNameDiv);

                    let ratingDiv = document.createElement('div');
                    ratingDiv.innerText = `Rating: ${_rating}`;
                    ratingDiv.classList.add("col-6");
                    ratingDiv.classList.add("col-sm-3");
                    row.appendChild(ratingDiv);

                    let priceDiv = document.createElement('div');
                    priceDiv.innerText = `Price: ${_price}`;
                    priceDiv.classList.add("col-6");
                    priceDiv.classList.add("col-sm-3");
                    row.appendChild(priceDiv);

                    let killsDiv = document.createElement('div');
                    killsDiv.innerHTML = `Kills: ${_kills}`;
                    killsDiv.classList.add("col-6");
                    killsDiv.classList.add("col-sm-3");
                    row.appendChild(killsDiv);

                    let ageDiv = document.createElement('div');
                    ageDiv.innerText = `Age: ${_age}`;
                    ageDiv.classList.add("col-6");
                    ageDiv.classList.add("col-sm-3");
                    row.appendChild(ageDiv);

                    // let weaponDiv = document.createElement('div');
                    // weaponDiv.innerHTML = `Weapon: ${_weapon}`;
                    // startingDiv.appendChild(weaponDiv);

                    // let contactSection = document.createElement('section');
                    // contactSection = assassinData.contact;
                    // assassinSection.appendChild(contactSection);

                    // let rating = data.main.rating;
                    // let kills = data.main.kills;
                    // let price = data.main.price;
                    // let age = data.main.age;
                    // let weapon = data.main.weapon;
                    // let contact = data.main.contact;

                    // _rating.setAttribute('value', rating);
                    // _kills.setAttribute('value', kills);
                    // _price.setAttribute('value', price);
                    // _age.setAttribute('value', age);
                    // _weapon.setAttribute('value', weapon);
                    // _contact.setAttribute('value', contact);

                    // _rating.innerHTML = (`Rating: ${rating}`);
                    // _kills.innerHTML = (`Kills: ${kills}`);
                    // _price.innerHTML = (`Price: ${price}`);
                    // _age.innerHTML = (`Age: ${age}`);
                    // _weapon.innerHTML = (`The Weapon: ${weapon}`);
                    // _contact.innerHTML = (`Contact: ${contact}`);

                    // assassinList.appendChild(assassinSection);
                })

            })
            .catch(error => console.log(error));
    })


})();