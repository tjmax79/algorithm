function insertionSort(arr) {
    // Iterate over the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; // The element to be inserted into the sorted portion
        let j = i - 1; // The index of the last element in the sorted portion

        // Move elements of arr[0..i-1] that are greater than key to one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; // Shift element to the right
            j--; // Move to the next element in the sorted portion
        }

        // Place the key in its correct position
        arr[j + 1] = key;
    }

    return arr;
}

// Example usage:
const array = [5, 2, 9, 1, 5, 6];
console.log("Original array:", array);
const sortedArray = insertionSort(array);
console.log("Sorted array:", sortedArray);
