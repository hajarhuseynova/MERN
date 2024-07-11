const blogBoxes = document.querySelectorAll('.text');


export const bindBlogData = (data) => {


    blogBoxes.forEach((box, index) => {
        const title = box.querySelector('h3 a');
        const time=box.querySelector('h4')
        const description = box.querySelector('p');
        title.textContent = data[index].title;
        time.textContent = data[index].time;
        description.textContent = data[index].desc;
    });
    
};
