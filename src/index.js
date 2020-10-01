module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    const spreadMatrix = matrix.reduce((acc, item, index) => {
        if (index % 2 !== 0) {
            Array.prototype.push.apply(acc, [...item].reverse());
        } else {
            Array.prototype.push.apply(acc, [...item]);
        }
        return acc;
    }, []);

    return spreadMatrix;
};
