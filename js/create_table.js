const sqlite = require('sqlite3').verbose();

//import sqlite3 from 'sqlite3'

let db = new sqlite3.Database('../TestSqlite3.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error('err Con:', err.message);
    }
    console.log('Connected to the TestSqlite3 SQlite database.');
});

let sql;
sql =`CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    us_name TEXT NOT NULL,
    us_age TEXT NOT NULL,
    us_phone TEXT,
    us_email TEXT);`
        
db.run(sql);
    
    
// ---------------------------------------------


db.close((err) => {
    if (err) {
        console.error('err close:', err.message);
    }
    console.log('Close the database connection.');
});
