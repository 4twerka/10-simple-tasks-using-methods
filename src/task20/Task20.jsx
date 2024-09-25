function Task20() {
    const words = ['Artem', 'Vlad', 'Lilia', 'Olga'];

    const removeFirstItem = (arr) => {
        return arr.shift();
    }

    const result = removeFirstItem(words);
    console.log(words);
    console.log(result);

    return(
        <div>Task 20</div>
    )
}

export default Task20;