

function Task13() {
    const number = [13, 52, 25, 90, 4];

    const findIndex = (arr) => {
        if (arr.indexOf(25)) {
            console.log(true);
        }
        return arr.indexOf(25);
    }

    const result = findIndex(number);
    console.log(result);

    return(
        <div>Task 13</div>
    );
}

export default Task13;