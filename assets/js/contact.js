
const APIContact = "https://api.39ortomekteb.info/api/contact";
const APIContactCreate = "https://api.39ortomekteb.info/api/contact/create";

let nameInput = document.querySelector('.contact_name');
let messageInput = document.querySelector('.contact_message_inp');
let btn = document.querySelector('.contact_btn');
let ul = document.querySelector('.contact_message_wrapper');


fetch(APIContact)
    .then((response) => response.json())
    .then((messages) => {
        messages = messages.data;
        messages.forEach((item) => {
            const li = document.createElement('li');
            li.classList.add('contact_message');
            li.innerHTML = `
                        <div class="contact_hr_wrapper">
                            <hr>
                            <div class="contact_messages_wrappers">
                                <h3 class="contact_mrssage_title">${item.name}</h3>
                                <p class="contact_mrssage_subtitle">${item.message}</p>
                            </div>
                        </div>            
                `;
            ul.appendChild(li);
        });
    })
    .catch((error) => {
        console.error("Error:", error);
    });

btn.addEventListener('click', () => {
    const name = nameInput.value;
    const message = messageInput.value;

    if (name && message) {
        fetch(APIContactCreate, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, message })
        })
            .then(response => response.json())
            .then(data => {

                const li = document.createElement('li');
                li.classList.add('contact_message');
                li.innerHTML = `
                        <div class="contact_hr_wrapper">
                            <hr>
                            <div class="contact_messages_wrappers">
                                <h3 class="contact_mrssage_title">${data.name}</h3>
                                <p class="contact_mrssage_subtitle">${data.message}</p>
                            </div>
                        </div>
            `;

                ul.appendChild(li);
                nameInput.value = ''
                messageInput.value = ''
            })
            .catch(err => {
                console.error("Error:", err);
            });
    }
});
