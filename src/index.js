function main() {
    const package = require('../package.json');
    console.log(`${package['name']} (v${package['version']})`);
}

main();
