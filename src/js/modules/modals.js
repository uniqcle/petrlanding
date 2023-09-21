const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const triggers = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]');

        // кнопки, ссылки по кот. кликаем
        triggers.forEach(trigger => {

            trigger.addEventListener('click', e => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(window => {
                    window.style.display = 'none'
                });

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                // document.body.classList.add('modal-open')
            })

        })


        // закрытие модального окна при клике на крестик
        close.addEventListener('click', () => {

            windows.forEach(window => {
                window.style.display = 'none'
            });


            modal.style.display = "none";
            document.body.style.overflow = "";
            // document.body.classList.remove('modal-open');
        });

        // закрытие при клике на пустую область
        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {

                windows.forEach(window => {
                    window.style.display = 'none'
                });


                modal.style.display = "none";
                document.body.style.overflow = "";
                // document.body.classList.remove('modal-open')
            }
        })
    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "";
        }, time)
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

    //showModalByTime('.popup', 3000);

};

export default modals; 