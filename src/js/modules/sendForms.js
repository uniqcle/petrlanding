import { messagesForm } from "../data/messages";
import { postData } from "../services/services";

const sendForms = () => {
    const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        phoneInputs = document.querySelectorAll('input[name="user_phone"]');

    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });

    forms.forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();

            console.log(form)

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.appendChild(statusMessage);

            const formData = new FormData(form);


            const clearInputs = () => {
                inputs.forEach(input => {
                    input.value = ''
                })
            }

            postData('http://localhost:8000/server.php', formData)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    statusMessage.textContent = message.failure
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 3000)
                })

        })
    })
}

export default sendForms; 