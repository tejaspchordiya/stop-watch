const minTwoDigits = n => (n < 10 ? '0' : '') + n;

const calculateMinutesPart = ms => minTwoDigits(Math.floor(ms / 60_000));
const calculateSecondsPart = ms => minTwoDigits(Math.floor(ms / 1000) % 60);
const calculateMilliSecondsPart = ms => minTwoDigits(ms % 100);

export {
    minTwoDigits,
    calculateMinutesPart,
    calculateSecondsPart,
    calculateMilliSecondsPart
}