
function Task17() {
    const numbers = [92, 52, 4, 10, 65, 28];

    const findIndex = (arr) => {
        return arr.findIndex((elem) => elem < 10);
    }

    const result = findIndex(numbers);
    console.log(result);

    return(
        <div>Task 17</div>
    )
}

export default Task17