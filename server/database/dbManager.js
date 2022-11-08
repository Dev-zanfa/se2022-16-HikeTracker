'use strict';

const sqlite3 = require('sqlite3');
const config = require("../config.json");


class DBManager {
    #db;
    #address;
    constructor(dbName) {
        if (DBManager._instance) {
            return DBManager._instance;
        }
        DBManager._instance = this;
        const address = config.dbAddresses[dbName]; 

        if (!address) {
            throw `The database was not found!`;
        }
        this.#address = address;
    }

    openConnection() {
        this.#db = new sqlite3.Database(this.#address, (err) => { if (err) throw err; });
    }

    closeConnection() {
        this.#db.close((err) => { if (err) throw err; });
    }

    get(sqlQuery, params, takeFirst) {
        return new Promise((resolve, reject) => {
            this.#db.all(sqlQuery, params, (err, rows) => {
                if (err)
                    reject(err);
                else
                    resolve(takeFirst ? rows[0] : rows);
            })
        });
    }

    query(sqlQuery, params) {
        return new Promise((resolve, reject) => {
            this.#db.run(sqlQuery, params, function (err) {
                if (err)
                    reject(err);
                else
                    resolve(this.lastID);
            });
        });
    }
}

// Singleton class
const dbManager = new DBManager("PROD");
dbManager.openConnection();

module.exports = DBManager;