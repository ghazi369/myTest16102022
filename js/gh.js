
export class Users {

    constructor(name, age, phone, email) {
        this.name = name,
        this.age = age,
        this.phone = phone,
        this.email = email
    }

    getinfo() {
        //console.log(`Name: ${this.name}, Age: ${this.age}, Phone: ${this.phone}, Email: ${this.email}`)
        return `Name: ${this.name}, Age: ${this.age}, Phone: ${this.phone}, Email: ${this.email}`
    }

    getDays() {
        console.log(`Age in Days: ${this.age * 365}`)
        //return `Age-Days: ${this.age * 365}`
    }

    getHour() {
        console.log(`Age in Hours: ${(this.age * 365) * 24}`)
    }
}
// 0.00274 - 0.0027397261
// const user1 = new Users('Ghazi', 19, '0555655369', 'gh@gh.com');

//user1.getinfo()
// user1.getDays()
// user1.getHour()
//console.log(user1.phone)