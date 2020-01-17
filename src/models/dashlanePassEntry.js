/**
 * Model of a Dashlane password
 */
class DashlanePassEntry {
    /**
     * DashlanePassEntry
     * @param {string} domain 
     * @param {string} email 
     * @param {string} login 
     * @param {string} note
     * @param {string} password 
     * @param {string} secondaryLogin 
     * @param {string} title 
     */
    constructor(
        domain = '',
        email = '', 
        login = '',
        note = '',
        password = '',
        secondaryLogin = '',
        title = '',
        ) {
        this.domain = domain;
        this.email = email;
        this.login = login;
        this.note = note;
        this.password = password;
        this.secondaryLogin = secondaryLogin;
        this.title = title;
    }


}

module.exports = DashlanePassEntry;
