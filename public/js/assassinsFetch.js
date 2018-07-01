(function () {
    console.log('What in the hell?');
    let link = 'http://localhost:8000/assassins';
    let assassinList = document.getElementById('assassins-list');
    let _rating = document.getElementById('_rating');
    let _kills = document.getElementById('_kills');
    let _price = document.getElementById('_price');
    let _age = document.getElementById('_age');
    let _weapon = document.getElementById('_weapon');
    let _contact = document.getElementById('_contact');
    let _addButton = document.getElementById('_addButton');

    document.addEventListener('DOMContentLoaded', function (event) {
        // console.log('What in the hell part 2');
        fetch(link)
            .then(response => {
                console.log('Reponse', response);
                return response.json()
            })
            .then(assassinsData => {
                // console.log('Why you no display my:', assassinsData);
                assassinsData.forEach(function (assassinData) {
                    // Manually create EACH element you need to display assassin data. Append
                    // each child element to the assassin section. When done, append assassin section
                    // to the assassinList section.

                    let assassinImg = document.createElement('img');
                    assassinImg = assassinData.image - container;
                    assassinSection.appendChild(assassinImg);

                    let assassinSection = document.createElement('section');
                    let assassinName = document.createElement('strong');
                    assassinName.innerText = assassinData.Full_name;
                    assassinSection.appendChild(assassinName);

                    let ratingSection = document.createElement('section');
                    ratingSection = assassinData.rating;
                    assassinSection.appendChild(ratingSection);

                    let killsSection = document.createElement('section');
                    killsSection = assassinData.kills;
                    assassinSection.appendChild(killsSection);

                    let priceSection = document.createElement('section');
                    priceSection = assassinData.price;
                    assassinSection.appendChild(priceSection);

                    let ageSection = document.createElement('section');
                    ageSection = assassinData.age;
                    assassinSection.appendChild(ageSection);

                    let weaponSection = document.createElement('section');
                    weaponSection = assassinData.weapon;
                    assassinSection.appendChild(weaponSection);

                    let contactSection = document.createElement('section');
                    contactSection = assassinData.contact;
                    assassinSection.appendChild(contactSection);

                    let rating = data.main.rating;
                    let kills = data.main.kills;
                    let price = data.main.price;
                    let age = data.main.age;
                    let weapon = data.main.weapon;
                    let contact = data.main.contact;

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

                    assassinList.appendChild(assassinSection);
                })

            })
            .catch(error => console.log(error));
    })


})();