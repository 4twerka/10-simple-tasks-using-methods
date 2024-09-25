

function Task14() {
    const words = ['Kyiv', 'is', 'the', 'capital', 'of', 'Ukraine'];

    const fromArraytoString = (arr) => {
        return arr.join();
        // return arr.join('');
        // return arr.join('-');
    }

    const result = fromArraytoString(words);
    console.log(result);

    return(
        <div>Task 14</div>
    );
}

export default Task14