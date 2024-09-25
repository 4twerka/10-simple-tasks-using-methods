

function Task11() {
    const words = ['Rodrygo', 'Cristiano', 'Francisco', 'Artem', 'Vlad', 'Noah'];


    const sliceFirstWords = (arr) => {
        return arr.slice(0, 3);
    }
  
    const result = sliceFirstWords(words);
    console.log(result);

    return(
        <div>Task 11</div>
    );
}

export default Task11