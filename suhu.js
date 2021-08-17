//! ini bagian Celcius Convert ke....

celciusToReamur = (c) => {
    reamur = (4 / 5) * c
    return console.log(`${reamur} reamur`);;
}

celciusToFarenheit = (c) => {
    farenheit = parseInt((9 / 5) * c) + 32
    return console.log(`${farenheit} farenheit`);
}

celciusToKelvin = (c) => {
    kelvin = parseFloat(c + 273)
    return console.log(`${kelvin} kelvin `);
}

//! ini bagian Reamur convert ke.....

reamurToCelcius = (r) => {
    celcius = (5 / 4) * r
    return console.log(`${celsius} reamur`);
}

reamurTofarenheit = (r) => {
    farenheit = ((9 / 4) * r) + 32
    return console.log(`${farenheit} farenheit`);
}
reamurToKelvin = () => {
    kelvin = ((5 / 4) * r) + 237
    return console.log(`${kelvin} kelvin`);
}

//! ini bagian Farenheit convert ke.....

farenheitToCelcius = (f) => {
    celcius = (5 / 9 * (f - 32))
    console.log(`${celcius} celcius`);
}
farenheitToreamur = (f) => {
    reamur = (4 / 9 * (f - 32))
    return console.log(`${reamur} reamur`);
}
farenheitToKelvin = (f) => {
    Kelvin = (5 / 9 * (f - 32)) + 273
    return console.log(`${Kelvin} kelvin`);
}

//! ini bagian Kelvin convert ke.....

kelvinToCelcius = (k) => {
    celcius = k - 273
    return console.log(`${celcius} celcius`);
}

kelvinToReamur = (K) => {
    reamur = (4 / 5 * (K - 273))
    return console.log(`${reamur} reamur`);
}
kelvinTofarenheit = (k) => {
    farenheit = (9 / 5 * (k - 273)) + 32
    return console.log(`${farenheit} farenheit`);
}

module.exports = {
    celciusToReamur, celciusToFarenheit, celciusToKelvin,
    reamurTofarenheit, reamurToKelvin, reamurToCelcius,
    farenheitToCelcius, farenheitToreamur, farenheitToKelvin,
    kelvinToCelcius, kelvinToReamur, kelvinTofarenheit
}

