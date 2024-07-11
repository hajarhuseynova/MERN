const num= document.querySelectorAll(".num")

export const bindNumbersData = (data) => {
    num.forEach((box, index) => {
        const num = box.querySelector('h3');
        num.textContent = data[index].number;
        const description = box.querySelector('h4');
        description.textContent = data[index].desc;
    });
};
