const profElements = document.querySelectorAll(".prof");
const paragraph=document.querySelector(".paragraph")
export const bindIntroData = (data) => {
    const professions = data.professions;
    paragraph.textContent=data.desc
    profElements.forEach((element, index) => {
        element.textContent = professions[index];
    });
};
