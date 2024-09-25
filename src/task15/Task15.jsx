

function Task15() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const reversedArray = (arr) => {
        return arr.reverse();
    }

    const result = reversedArray(numbers);
    console.log(result);

    return (
        <div>Task 15</div>
    );
}

export default Task15;