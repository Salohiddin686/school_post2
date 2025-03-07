const API = "https://api.39ortomekteb.info/api/teachers";
const list = document.querySelector('.tech_api');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector(".modal_img");
let modalName = document.querySelector('.modal_name');
let modalName2 = document.querySelector('.modal_name2');
let overlay = document.querySelector(".overlay");
let esc = document.querySelector('.modal_esc')


let data = [];
fetch(API)
    .then((res) => res.json())
    .then((teachers) => {

        teachers = teachers.data;
        teachers.forEach((item) => {

            const li = document.createElement("li");
            li.classList.add('tech_li');
            li.innerHTML = `
            <img class="tech_img" src=${item.image} alt="">
            <p class="tech_name">${item.full_name}</p> 
            <p class="tech_name">${item.subject}</p> 
            `;

            li.addEventListener('click', () => {
                console.log(item);
                modal.classList.remove('hidden');
                overlay.classList.remove('hidden');
                modalImg.setAttribute('src', item.image);
                modalName.value = item.full_name;
                modalName2.value = item.subject;
            });
            
            
            
            list.appendChild(li);
        });
        overlay.addEventListener("click", () => {
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
        });

        esc.addEventListener("click", () => {
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
        });
        
        
        
    })
    .catch((err) => console.log("Error:", err));
