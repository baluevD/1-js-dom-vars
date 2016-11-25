'use strict';
var names = ['Вася', 'Дима', 'Катя','Лена','Люся','Люда','Саша','Алеша','Петя','Костя'];
var jobs = ['Слесарь', 'Менеджер', 'Премьер Министр','Кассир','Инженер',
    'Сантехник','Риэлтор','Администратор','Продавец','Дворник'];
var arr = [];
for(var i = 0; i < 10; i++) {
    arr.push({
        'ФИО': names.splice(
            Math.floor(Math.random() * names.length), 1
        )[0],
        'Возраст': Math.floor(Math.random() * 15) + 20,
        'Профессия': jobs.splice(
            Math.floor(Math.random() * jobs.length), 1
        )[0],
        'Зарплата': Math.floor(Math.random() * 100) + 20
    })
}

for(var i = 0; i < arr.length; i++) {
    var item = document.createElement('li');
    var block1 = document.createElement('div');
    var block2 = document.createElement('div');
    var block3 = document.createElement('div');
    var block4 = document.createElement('div');
    block1.innerHTML = arr[i].ФИО;
    block1.className='ФИО';
    item.appendChild(block1);
    block2.innerHTML = arr[i].Возраст;
    item.appendChild(block2);
    block3.innerHTML = arr[i].Профессия;
    item.appendChild(block3);
    block4.innerHTML = arr[i].Зарплата;
    item.appendChild(block4);
    document.body.firstElementChild.appendChild(item);
    block1.style.display = 'inline-block';
    block1.style.textDecoration = 'inherit';
    block2.style.display = 'inline-block';
    block2.style.textDecoration = 'inherit';
    block3.style.display = 'inline-block';
    block3.style.textDecoration = 'inherit';
    block4.style.display = 'inline-block';
    block4.style.textDecoration = 'inherit';
    if((arr[i].Возраст >= 20)&&(arr[i].Возраст < 27)) {
        block1.style.fontWeight='bold';// {
    }
    item.style.backgroundColor = 'green';
    if((arr[i].ФИО === 'Катя')||(arr[i].ФИО === 'Лена')||(arr[i].ФИО === 'Люда')||(arr[i].ФИО === 'Саша')||(arr[i].ФИО === 'Люся'))
        item.style.fontSize = '150%';
    if(arr[i].Зарплата < 50)
        item.style.backgroundColor = 'red';
    if((arr[i].Зарплата < 80) && (arr[i].Зарплата >= 50))
        item.style.backgroundColor = 'yellow';
    if(arr[i].Профессия === 'Премьер Министр')
        item.style.textDecoration = 'underline';

}