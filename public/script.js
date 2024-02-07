//У вас есть массив объектов, каждый из которых представляет собой человека 
//с полями "имя" и "возраст". Напишите функцию на TypeScript, которая сортирует 
//этот массив по возрастанию возраста.
//??-оператор нулевого сравнения:
//если операнд слева undefind или null, то возвращает операнд справа
let persons = [
    { name: "Vasya", age: 15 },
    { name: "Lena", age: 34 },
    { name: "Nick", age: 90 },
    { name: "Olga", age: 5 },
    { name: "Marina", age: 22 },
    { name: "Masyanya", age: 47 }
];
function sortPersonByAge1() {
    return persons.sort((a, b) => {
        if (a.age > b.age) {
            return 1;
        }
        if (a.age < b.age) {
            return -1;
        }
        return 0;
    });
}
console.log(sortPersonByAge1());
function sortPersonByAge2() {
    for (let i = 0; i < persons.length - 1; i++) {
        for (let j = 0; j < persons.length - 1; j++) {
            if (persons[j].age > persons[j + 1].age) {
                let temp = persons[j];
                persons[j] = persons[j + 1];
                persons[j + 1] = temp;
            }
        }
    }
    return persons;
}
console.log(sortPersonByAge2());
const products = [
    { title: "A", price: 1 },
    { title: "B", price: 2 },
    { title: "C", price: 3 },
    { title: "D", price: 4 },
    { title: "E", price: 5 },
    { title: "F", price: 6 },
    { title: "G", price: 7 }
];
function filterProductByPrice() {
    return products.filter((e) => e.price > 4);
}
;
console.log(filterProductByPrice());
//У вас есть массив объектов, представляющих книги. Напишите функцию, 
//которая находит книгу по её названию.
const books = [
    { title: "Name1", author: "Autor1", issue: 2001 },
    { title: "Name2", author: "Autor2", issue: 2002 },
    { title: "Name3", author: "Autor3", issue: 2003 },
    { title: "Name4", author: "Autor4", issue: 2004 }
];
function findBookByTitle(title) {
    return books.find((e) => e.title === title);
}
;
console.log(findBookByTitle("Name3"));
//У вас есть массив объектов, представляющих продукты с полем "цена". 
//Напишите функцию, которая вычисляет общую сумму цен продуктов.
function totalPrice() {
    return products.reduce((sum, product) => {
        return sum + product.price;
    }, 0);
}
console.log(totalPrice());
const students = [
    { name: "Name1", grade: 100 },
    { name: "Name2", grade: 101 },
    { name: "Name3", grade: 100 },
    { name: "Name4", grade: 102 },
    { name: "Name5", grade: 103 },
    { name: "Name6", grade: 104 }
];
function updateStudentsGrades(name, newGrade) {
    students.forEach((e) => {
        if (e.name === name) {
            e.grade = newGrade;
        }
    });
}
;
updateStudentsGrades("Name3", 110);
console.log(students);
//У вас есть массив объектов, представляющих заказы с полем "статус" 
//(например, "в обработке" или "доставлено"). 
//Напишите функцию, которая подсчитывает количество заказов с определенным статусом.
const orders = [
    { orderNumber: 1, status: "in processing" },
    { orderNumber: 2, status: "delivered" },
    { orderNumber: 3, status: "delivered" },
    { orderNumber: 4, status: "in processing" },
    { orderNumber: 5, status: "delivered" },
    { orderNumber: 6, status: "delivered" },
];
function orderStatusCalculation(status) {
    return orders.reduce((sum, order) => {
        if (order.status === status) {
            sum++;
        }
        ;
        return sum;
    }, 0);
}
;
console.log(orderStatusCalculation("delivered"));
//У вас есть массив объектов, представляющих товары с полем "цена". 
//Напишите функцию, которая находит товар с максимальной ценой. 
//Если таких товаров несколько, верните первый.
function maxPrice() {
    let max = { title: "", price: 0 };
    for (let i = 0; i < products.length; i++) {
        if (products[i].price > max.price) {
            max.price = products[i].price;
            max.title = products[i].title;
        }
        ;
    }
    return max;
}
;
console.log(maxPrice());
let autos = [
    { model: "M1", issueYear: 2020 },
    { model: "M2", issueYear: 2022 },
    { model: "M3", issueYear: 2024 },
    { model: "M1", issueYear: 2020 },
    { model: "M5", issueYear: 2023 }
];
function filterByModelAndIssue(model, issueYear) {
    return autos.filter((e) => e.model === model && e.issueYear === issueYear);
}
;
console.log(filterByModelAndIssue("M1", 2020));
//У вас есть два массива объектов с одинаковой структурой. 
//Напишите функцию, которая объединяет эти массивы в один.
let autos1 = [
    { model: "M7", issueYear: 2020 },
    { model: "M8", issueYear: 2021 },
    { model: "M9", issueYear: 2022 }
];
function combiningArrays() {
    autos1.forEach((e) => autos.push(e));
}
;
combiningArrays();
console.log(autos);
export {};
