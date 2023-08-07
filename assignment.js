const fs = require('fs');

const addresses = fs.readFileSync('addresses.txt', 'utf-8').split('\n').map(line => line.trim());
const drivers = fs.readFileSync('drivers.txt', 'utf-8').split('\n').map(line => line.trim());

function calculateSuitabilityScore(driver, address) {
    const driverName = driver.toLowerCase();
    const addressName = address.toLowerCase().replace(/[0-9]/g, '').replace(',', '');

    const driverVowels = driverName.match(/[aeiou]/g)?.length || 0;
    const driverConsonants = driverName.match(/[bcdfghjklmnpqrstvwxyz]/g)?.length || 0;
    const addressLength = addressName.length;

    let baseSS;
    if (addressLength % 2 === 0) {
        baseSS = driverVowels * 1.5;
    } else {
        baseSS = driverConsonants;
    }

    if (getCommonFactors(driver.length, addressLength).length > 0) {
        return baseSS * 1.5;
    }

    return baseSS;
}

function getCommonFactors(a, b) {
    const factors = [];
    for (let i = 2; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

function findBestAssignment() {
    const assignments = [];

    for (const address of addresses) {
        let maxSS = -1;
        let bestDriver = '';

        for (const driver of drivers) {
            const ss = calculateSuitabilityScore(driver, address);
            if (ss > maxSS && !assignments.includes(driver)) {
                maxSS = ss;
                bestDriver = driver;
            }
        }

        if (bestDriver) {
            assignments.push(bestDriver);
        }
    }

    return assignments;
}

(function main() {
    const assignments = findBestAssignment();

    let totalSS = 0;
    for (let i = 0; i < assignments.length; i++) {
        totalSS += calculateSuitabilityScore(assignments[i], addresses[i]);
    }

    console.log('Total Suitability Score:', totalSS);
    console.log('Assignments:');
    for (let i = 0; i < assignments.length; i++) {
        console.log(addresses[i], '->', assignments[i]);
    }
})();
