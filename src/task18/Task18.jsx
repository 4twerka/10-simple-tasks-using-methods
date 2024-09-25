function Task18() {
    const words = ['Apple', 'Samsung', 'Xiomi'];

    const pushNewWord = (arr) => {
        return arr.push('Nokia', 'Google Pixel');
    }

    const result = pushNewWord(words);
    console.log(words);
    console.log(result);

    return(
        <div>Task 18</div>
    )
}

export default Task18;