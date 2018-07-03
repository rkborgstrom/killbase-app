// (function () {
//     let link = 'http://localhost:8000/assassins';
//     let assassinList = document.getElementById('assassins-list');
//     let _fullName = document.getElementById('Full_name');
//     let _rating = document.getElementById('_rating');
//     let _kills = document.getElementById('_kills');
//     let _price = document.getElementById('_price');
//     let _age = document.getElementById('_age');
//     let _weapon = document.getElementById('_weapon');
//     let _contact = document.getElementById('_contact');
//     let _addButton = document.getElementById('_addButton');

//     document.addEventListener('DOMContentLoaded', function (event) {
//         fetch(link)
//             .then(response => {
//                 console.log('Reponse', response);
//                 return response.json()
//             })
//             .then(assassinsData => {
//                 assassinsData.forEach(function (assassinData) {

//                     let _fullName = assassinData.Full_name;
//                     let _codeName = assassinData.code_names;
//                     let _rating = assassinData.rating;
//                     let _price = assassinData.price;
//                     let _kills = assassinData.kills;
//                     let _age = assassinData.age;
//                     let _weapon = assassinData.weapon;

//                     let startingDiv = document.getElementById('assassin-section');

//                     // let allAssassins = document.getElementsByClassName('all-content-assassins');
//                     // startingDiv.appendChild(allAssassins);

//                     function populateAssassinInfo(parentElem, elem, statTitle, stat) {
//                         let assassinStat = document.createElement(elem);
//                         assassinStat.innerText = statTitle.bold() + ' ' + stat;
//                         parentElem.appendChild(assassinStat);
//                         return assassinStat;


//                         // let codeNameDiv = document.createElement('div');
//                         // let ratingDiv = document.createElement('div');
//                         // let killsDiv = document.createElement('div');
//                         // let priceDiv = document.createElement('div');
//                         // let ageDiv = document.createElement('div');
//                         // let weaponDiv = document.createElement('div');

//                         // nameDiv.innerText = `Full Name: ${_fullName}`;
//                         // codeNameDiv.innerText = `Full Name: ${_codeName}`;
//                         // ratingDiv.innerText = `Full Name: ${_rating}`;
//                         // priceDiv.innerText = `Full Name: ${_price}`;
//                         // killsDiv.innerText = `Full Name: ${_kills}`;
//                         // ageDiv.innerText = `Full Name: ${_age}`;




//                         //innerText
//                         //classList?
//                         //create elements
//                         //append
//                         //
//                     };

//                     let row = document.createElement('div');
//                     startingDiv.appendChild(row);

//                     populateAssassinInfo(row, 'div', 'Full Name:', _fullName); // creating Full_Name element
//                     populateAssassinInfo(row, 'div', 'Code Name:', _codeName);




//                     // populateAssassinInfo(row, 'div', 'Rating:',_rating);
//                     // populateAssassinInfo(row, 'div', 'Price:', _price);
//                     // populateAssassinInfo(row, 'div', 'Full Name:', _kills);



//                     let assassinSection = document.createElement('div');
//                     startingDiv.appendChild(assassinSection);

//                     // let nameDiv = document.createElement('div');
//                     // nameDiv.innerText = `Full Name: ${_fullName}`;
//                     // startingDiv.appendChild(nameDiv);



//                     // let codeNameDiv = document.createElement('div');
//                     // codeNameDiv.innerHTML = `Code Name: ${_codeName}`;
//                     // startingDiv.appendChild(codeNameDiv);

//                     let ratingDiv = document.createElement('div');
//                     ratingDiv.innerText = `Rating: ${_rating}`;
//                     ratingDiv.classList.add("col-6");
//                     ratingDiv.classList.add("col-sm-3");
//                     row.appendChild(ratingDiv);

//                     let priceDiv = document.createElement('div');
//                     priceDiv.innerText = `Price: ${_price}`;
//                     priceDiv.classList.add("col-6");
//                     priceDiv.classList.add("col-sm-3");
//                     row.appendChild(priceDiv);

//                     let killsDiv = document.createElement('div');
//                     killsDiv.innerHTML = `Kills: ${_kills}`;
//                     killsDiv.classList.add("col-6");
//                     killsDiv.classList.add("col-sm-3");
//                     row.appendChild(killsDiv);

//                     let ageDiv = document.createElement('div');
//                     ageDiv.innerText = `Age: ${_age}`;
//                     ageDiv.classList.add("col-6");
//                     ageDiv.classList.add("col-sm-3");
//                     row.appendChild(ageDiv);

//                     // let weaponDiv = document.createElement('div');
//                     // weaponDiv.innerHTML = `Weapon: ${_weapon}`;
//                     // startingDiv.appendChild(weaponDiv);

//                     // let contactSection = document.createElement('section');
//                     // contactSection = assassinData.contact;
//                     // assassinSection.appendChild(contactSection);

//                 })

//             })
//             .catch(error => console.log(error));
//     })


// })();