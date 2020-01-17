const KeePassEntry = require('../models/keePassEntry');
const DashlanePassEntry = require('../models/dashlanePassEntry');

/**
 * Add object to interact with KeePass object
 */
class KeePassEntryAdapter {
    /**
     * Regrouping not used properties in notes to avoid to loose it
     * @param {DashlanePassEntry} pass
     * @returns {string}
     * @private
     */
    static _generateNotes(pass) {
        let addNotes = '';
        if (pass.login && pass.login !== '' && pass.email && pass.email !== '' && pass.login !== pass.email) addNotes+= `email: ${pass.email}\n`;
        if (pass.secondaryLogin && pass.secondaryLogin !== '') addNotes+= `SecondaryLogin: ${pass.secondaryLogin}\n`;
        if (pass.notes === '' && addNotes !== '') {
            addNotes = addNotes.slice(0, -1);
        }
        return addNotes + pass.note;
    }

    /**
     * Replace login by Email if login empty
     * @param {DashlanePassEntry} pass
     * @returns {string}
     * @private
     */
    static _regroupLoginEmail(pass) {
        if ((!pass.login || pass.login === '') && pass.email) {
            return pass.email;
        }
        return pass.login;
    }

    /**
     * Transform {DashlanePassEntry} to {KeePassEntry}
     * @param {DashlanePassEntry} passEntry
     * @returns {KeePassEntry}
     * @public
     */
    static toKeePassEntry(passEntry) {
        const login = this._regroupLoginEmail(passEntry);
        const notes = this._generateNotes(passEntry);
        return new KeePassEntry(passEntry.domain, login, passEntry.password, passEntry.title, notes);
    }
}

module.exports = KeePassEntryAdapter;
