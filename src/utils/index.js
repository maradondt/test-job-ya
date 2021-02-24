const getRandom = (from, to) => Math.round(from + (Math.random() * to));

const getRandomCellValue = () => getRandom(0, 1);

export default getRandomCellValue;
