const PassEntryAdapter = require("./adapters/dashlanePassEntryAdapter");
const KeePassEntryAdapter = require("./adapters/keePassEntryAdapter");
const CSVWriter = require("./service/csvWriterService");

function main() {
    const package = require('../package.json');
    console.log(`${package['name']} (v${package['version']})`);
    const jsonPasswords = PassEntryAdapter.fromDashlaneExportJSON();

    const passwords = Array.from(jsonPasswords, jsonPass => {
        const passEntry = PassEntryAdapter.toPassEntry(jsonPass);
        return KeePassEntryAdapter.toKeePassEntry(passEntry);
    });

    CSVWriter.writeCSVFile(passwords);
}

main();
