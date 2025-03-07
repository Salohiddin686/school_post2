let API3 = "https://api.39ortomekteb.info/api/gallery";
const wrap = document.querySelector(".galary_list");
let escapeBtn = document.querySelector('.header_logo1')



fetch(API3)
  .then((res) => res.json())
  .then((gl) => {
    gl = gl.data;

    gl.forEach((item) => {
      // console.log(item);

      const li3 = document.createElement("li");
      li3.classList.add("galary_li");

      li3.innerHTML = `
        <img class="galary_img" src=${item.image} alt="">
      `



      wrap.appendChild(li3);
    });
  })
  .catch((error) => console.error("Error:", error));

escapeBtn.addEventListener('click', () => {
  window.location.href = "../../index.html"
})
