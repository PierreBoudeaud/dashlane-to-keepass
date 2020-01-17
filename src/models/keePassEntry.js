/**
 * Model of a KeePass password
 */
class KeePassEntry {
    /**
     * KeePassEntry
     * @param {string} domain
     * @param {string} login
     * @param {string} password
     * @param {string} title
     * @param {string} notes
     */
    constructor(
        domain,
        login,
        password,
        title,
        notes
        ) {
        this.domain = domain;
        this.login = login;
        this.password = password;
        this.title = title;
        this.notes = notes;
    }
}

module.exports = KeePassEntry;
