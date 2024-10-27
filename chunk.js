function chunkArray(array, size) {
    const chunks = [];
    let index = 0;

    while (index < array.length) {
        const chunk = array.slice(index, index + size);
        chunks.push(chunk);
        index += size;
    }

    return chunks;
}

const array1 = [1, 2, 3, 4, 5, 6, 7];
const chunkSize1 = 3;

const array2 = [1, 2, 3, 4, 5];
const chunkSize2 = 2;

console.log(`Chunks for array1:`, chunkArray(array1, chunkSize1));
console.log(`Chunks for array2:`, chunkArray(array2, chunkSize2));
