const sendForms = () => {
const errorMessage = 'ошибка..',
        loadMessage = 'Идет отпарвка',
        successMesage = 'Отправлено';
    const form = document.querySelectorAll('form');

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem; color: #85be32;';

    form.forEach(item => item.addEventListener('submit', (event) => {
        event.preventDefault();
        item.appendChild(statusMessage); // добавляем к определенной форме сообщение
        statusMessage.textContent = loadMessage;
        const formData = new FormData(item); // записываем данные с определенной формы
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });

        const popup = document.querySelector('.popup');
        postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                statusMessage.textContent = successMesage;
                setTimeout(() => {
                    popup.style.display = 'none';
                    statusMessage.textContent = '';
                    [...document.querySelectorAll('input')].forEach(item => item.value = '');
                }, 3000);
            }, (error) => {
                statusMessage.textContent = errorMessage;
                setTimeout(() => {
                    popup.style.display = 'none';
                    statusMessage.textContent = '';
                    [...document.querySelectorAll('input')].forEach(item => item.value = '');
                }, 3000);
            });
    }));

    const postData = (body) => {
        return fetch( './server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
            credentials: 'include',
            cache: 'default'
        })
        
  };
    const formPhone = document.querySelectorAll('.phone-user');
    formPhone.forEach((item) => {
        item.addEventListener('input', (event) => {
            const target = event.target;
            if (target.matches('input')) {
                target.value = target.value.replace(/(?!^\+)\D/g, '').substr(0,13);
            }
        });
    });

    const formName = document.querySelectorAll('.user-name');
    formName.forEach((item) => {
        item.addEventListener('input', (event) => {
            const target = event.target;
            if (target.matches('input')) {
                target.value = target.value.replace(/(?![а-яА-Я])\D|[0-9]/g, '').substr(0,21);
            }
        });
    });

    const formMessage = document.querySelector('.user-quest');
    formMessage.addEventListener('input', (event) => {
        const target = event.target;
        target.value = target.value.replace(/[^а-яА-Я\s\,\.\?\!\-\;\:]/g, '').substr(0,30);

    });

 
};

export default sendForms;