import { messagesForm } from "../data/messages";
import { postData } from "../services/services";
import checkNumInputs from './checkNumInputs';

const sendForms = (state) => {
    const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]')

    forms.forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();

            console.log(form)

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.appendChild(statusMessage);

            const formData = new FormData(form);

            if (form.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key])
                }
            }


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