const ramdomIndex = (array) => {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
};

export default ramdomIndex;