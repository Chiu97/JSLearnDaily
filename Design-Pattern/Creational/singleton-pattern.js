
class Database {
  constructor(data) {
    if(Database.exists) {
      return Database.instance;
    }
    this._data = data;
    Database.instance = this;
    Database.exists = true;
    return this;
  }

  get data() {
    return this._data;
  }

  set data(data) {
    this._data = data;
  }
}

const mongo = new Database('mongo');
console.log(mongo.data);

const mysql = new Database('mysql');
console.log(mysql.data);