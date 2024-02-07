//создаем папку types в папке src
//в папке types создаем файл Person.ts
//"module": "ES2015" вставляем в файл tsconfig в 28 строку
//в html-файле добавить <script type="module" src="public/script.js"></script> 
//после компиляции в папке public появится папка types c файлом Person.js
export type Person ={//export- позволяет экспортировать этот тип в другие модули кода
    name: string, 
    age:number
};