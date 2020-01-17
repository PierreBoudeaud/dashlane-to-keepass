const Environment = require('../../config/config');

const DashlanePassEntry = require('../models/dashlanePassEntry');

/**
 * Object to interact with JSON and Dashlane pass objects
 */
class DashlanePassEntryAdapter {

    /**
     * Load passwords from JSON Dashlane export file
     * @return {Object[]}
     */
    static fromDashlaneExportJSON() {
        const data = require(`../../${Environment.dashlaneJSON.path}`);
        return data['AUTHENTIFIANT'];
    }

    /**
     * Transform JSON password to DashlanePassEntry password
     * @param {*} brutPass
     * @return {DashlanePassEntry}
     */
    static toPassEntry(brutPass) {
        return new DashlanePassEntry(
            brutPass.domain,
            brutPass.email,
            brutPass.login,
            brutPass.note,
            brutPass.password,
            brutPass.secondaryLogin,
            brutPass.title,
        );
    }
}

module.exports = DashlanePassEntryAdapter;
