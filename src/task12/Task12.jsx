
function Task12() {
    const words = ['Fish', 'Jaguar', 'Sun', 'Computer', 'Girl'];

    const removeSecondElem = (arr) => {
         arr.splice(1, 1, 'Drum');
         console.log(arr);
    }

    removeSecondElem(words);

    return(
        <div>Task 12</div>
    )
}

export default Task12;