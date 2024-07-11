const serviceBoxes = document.querySelectorAll('.boxService');
export const bindServiceData = (data) => {
    serviceBoxes.forEach((box, index) => {
        const title = box.querySelector('h3');
        const description = box.querySelector('p');
        title.textContent = data[index].title;
        description.textContent = data[index].desc;
    });
};
