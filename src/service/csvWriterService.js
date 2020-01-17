const { parse } = require('json2csv');
const fs = require('fs');

const environment = require('../../config/config');
const KeePassEntry = require('../models/keePassEntry.js');

class CsvWriterService {
    /**
     * Write the CSV file for KeePass
     * @param {KeePassEntry[]} passwords
     */
    static writeCSVFile(passwords) {
        if(passwords.length > 0) {
            try {
                const csv = this._toCSV(passwords);
                fs.writeFile(environment.keePassCSV.path, csv, () => {
                    console.log('Successfully writing file!');
                });
            } catch (err) {
                console.error(err);
            }
        }

    }

    /**
     * Convert KeePassEntry array to CSV string
     * @param {KeePassEntry[]} passwords
     * @return {string}
     * @private
     */
    static _toCSV(passwords) {
        const fields = Object.keys(passwords[0]);
        const csv = parse(passwords, { fields, delimiter: ',', doubleQuote: true });
        return csv
    }
}

module.exports = CsvWriterService;
