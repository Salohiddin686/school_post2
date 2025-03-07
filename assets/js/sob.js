const sobRev = "https://api.39ortomekteb.info/api/blog";
const list2 = document.querySelector(".sob_list");
let modal2 = document.querySelector('.modal');
let modalImg2 = document.querySelector(".modal_img");
let modalName1 = document.querySelector('.modal_name');
let modalName22 = document.querySelector('.modal_name2');
let overlay2 = document.querySelector(".overlay");
let esc2 = document.querySelector('.modal_esc')
let input2 = document.querySelector('#input')

fetch(sobRev)
    .then((res) => res.json())
    .then((sob) => {
        sob = sob.data;

        sob.forEach((item) => {

            const li2 = document.createElement("li");
            li2.classList.add("sob_li");

            let doby = JSON.parse(`${item.body}`)

            li2.innerHTML = `
        <img class="sob_img" src="${doby.image}" alt="Изображение">
        <p class="sob_name">${item.title}</p>
        
        <div class="sob_position">${doby.date}</div>
      `;


            li2.addEventListener('click', () => {
                console.log(item);
                modal2.classList.remove('hidden');
                overlay2.classList.remove('hidden');
                modalImg2.setAttribute('src', doby.image);
                modalName1.value = item.title;
            });


            list2.appendChild(li2);
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
    .catch((error) => console.error("Error:", error));