'use strict';
var names = ['Вася', 'Дима', 'Катя', 'Лена', 'Люся', 'Люда', 'Саша', 'Алеша', 'Петя', 'Костя'];
var namesFemale = ['Катя', 'Лена', 'Люся', 'Люда', 'Саша'];
var jobs = ['Слесарь', 'Менеджер', 'Премьер Министр', 'Кассир', 'Инженер',
    'Сантехник', 'Риэлтор', 'Администратор', 'Продавец', 'Дворник'
];
var arrPeople = [];
for (var i = 0; i < 10; i++) {
    arrPeople.push({
        name: names.splice(
            Math.floor(Math.random() * names.length), 1
        )[0],
        age: Math.floor(Math.random() * 15) + 20,
        profession: jobs.splice(
            Math.floor(Math.random() * jobs.length), 1
        )[0],
        salary: Math.floor(Math.random() * 100) + 20
    })
}

for (var i = 0; i < arrPeople.length; i++) {
    var item = document.createElement('li');
    var blockName = document.createElement('div');
    var blockAge = document.createElement('div');
    var blockProfession = document.createElement('div');
    var blockSalary = document.createElement('div');
    blockName.innerHTML = arrPeople[i].name;
    blockName.className = 'name';
    item.appendChild(blockName);
    blockAge.innerHTML = arrPeople[i].age;
    item.appendChild(blockAge);
    blockProfession.innerHTML = arrPeople[i].profession;
    item.appendChild(blockProfession);
    blockSalary.innerHTML = arrPeople[i].salary;
    item.appendChild(blockSalary);
    document.body.firstElementChild.appendChild(item);
    blockName.style.display = 'inline-block';
    blockName.style.textDecoration = 'inherit';
    blockAge.style.display = 'inline-block';
    blockAge.style.textDecoration = 'inherit';
    blockProfession.style.display = 'inline-block';
    blockProfession.style.textDecoration = 'inherit';
    blockSalary.style.display = 'inline-block';
    blockSalary.style.textDecoration = 'inherit';
    if ((arrPeople[i].age >= 20) && (arrPeople[i].age < 27))
        blockName.style.fontWeight = 'bold';
    item.style.backgroundColor = 'green';
    if(namesFemale.indexOf(arrPeople[i].name) >= 0)
       item.style.fontSize = '150%';
    if (arrPeople[i].salary < 50)
        item.style.backgroundColor = 'red';
    if ((arrPeople[i].salary < 80) && (arrPeople[i].salary >= 50))
        item.style.backgroundColor = 'yellow';
    if (arrPeople[i].profession === 'Премьер Министр')
        item.style.textDecoration = 'underline';
}
