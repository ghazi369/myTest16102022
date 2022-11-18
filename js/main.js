//
import { Users } from './gh.js';


let userName = document.querySelector('#input_name'),
    userAge = document.querySelector('#input_age'),
    userPhone = document.querySelector('#input_phone'),
    userEmail = document.querySelector('#input_email'),
    btnAdd = document.querySelector('#input_button'),
    result = document.querySelector('#result');

// Add User:
btnAdd.onclick = () => {
    if (userName.value !== "" && userAge.value !== "" && userPhone.value !== "" && userEmail.value !== "") {
        
        const user = new Users(userName.value, userAge.value, userPhone.value, userEmail.value);
        result.innerHTML = user.getinfo()
        
        clearInput()
        //user.getinfo()
        // user.getDays()
        // user.getHour()
        //console.log(user.phone)
        
    } else {
        result.innerHTML = "Error !!";
        
    }
}


// clearInput:
const clearInput = () => {
    userName.value = "";
    userAge.value = "";
    userPhone.value = "";
    userEmail.value = "";
    
}


//const path = `${__dirname}/TestSqlite3.db`; 
//console.log(path); // output: /var/www/html/TypeScript/dist/BookMarks.db





// function createTable() {
//     // const sqlite = require('sqlite3').verbose();

//     // let db = new sqlite.Database('../TestSqlite3.db', sqlite.OPEN_READWRITE, (err) => {
//     //     if (err) {
//     //       return console.error('err Con:', err.message);
//     //     }
//     //     console.log('Connected to the TestSqlite3 SQlite database.');
//     // });


//     // ----------------------------------------------------------

//     // ---------------------------------------------
//     // CREATE TABLE:
//     let sql;
//     sql =`CREATE TABLE IF NOT EXISTS users(
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         us_name TEXT NOT NULL,
//         us_age TEXT NOT NULL,
//         us_phone TEXT,
//         us_email TEXT);`
         
//     db.run(sql);
    
    
//     // ---------------------------------------------

    
//     db.close((err) => {
//         if (err) {
//             console.error('err close:', err.message);
//         }
//         console.log('Close the database connection.');
//     });
// }

// createTable()



// function insertbookmark(txt_title, txt_url, txt_tags, txt_details) {
//     const sqlite = require('sqlite3').verbose();

//     let db = new sqlite.Database('./TestSqlite3.db', sqlite.OPEN_READWRITE, (err) => {
//         if (err) {
//           return console.error('err Con:', err.message);
//         }
//         console.log('Connected to the BookMarks SQlite database.');
//     });


//     // ----------------------------------------------------------


//     // ----------------------------------------------------------

//     // let sql = 'INSERT INTO users(us_name, us_age us_phone, us_email) VALUES(?, ?, ?, ?)'
//     // db.run(sql, [txt_title, txt_url, txt_tags, txt_details], (err) => {
//     //     if (err) {
//     //       return console.error('Error INSERT:', err.message);
//     //     }
//     //     console.log('User added successfully.');
//     // });
    
//     // ----------------------------------------------------------
//     db.close((err) => {
//         if (err) {
//             console.error('err close:', err.message);
//         }
//         console.log('Close the database connection.');
//     });
// }
