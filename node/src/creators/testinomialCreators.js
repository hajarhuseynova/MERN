const testBoxes = document.querySelectorAll('.test');

console.log(testBoxes)

export const bindTestinomialData = (data) => {
    testBoxes.forEach((box, index) => {

        const name = box.querySelector('h3');
        const description = box.querySelector('p');
        const prof = box.querySelector('h4');

        name.textContent = data[index].title;
        description.textContent = data[index].desc;
        prof.textContent = data[index].prof;
    });
};