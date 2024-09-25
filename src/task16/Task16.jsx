

function Task16() {
    const words = ['Audi', 'Mercedes', 'BMW', ['Kia', 'Hyundai', 'Skoda']];

    const singleLevel = (arr) => {
        return arr.flat();
    }

    const result = singleLevel(words);
    console.log(result);

    return(
        <div>Task 16</div>
    );
}

export default Task16;