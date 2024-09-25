function Task19() {
    const words = ['Football' , 'Basketball', 'Chess', 'Voleyball'];

    const removeLastElement = (arr) => {
        return arr.pop();
    }

    const result = removeLastElement(words);
    console.log(words);
    console.log('Removed item:', result);

    return(
        <div>Task 19</div>
    )
}

export default Task19;