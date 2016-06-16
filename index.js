let transChoice = messageBag => locale => (key, count) => {
    if (locale == 'ru') {
        let messages = messageBag[key].split('|');
        let lastDigit = count % 10;
        let lastDigits = count % 100;
        if (lastDigits > 10 && lastDigits < 20) return messages[2];
        if (lastDigit > 1 && lastDigit < 5) return messages[1];
        if (lastDigit == 1) return messages[0];
        return messages[2];
    }
}

module.exports = transChoice
