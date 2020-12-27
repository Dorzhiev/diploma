const sendForms = () => {
//     const errorMessage = 'ошибка..',
//         loadMessage = 'идет отправка',
//         successMesage = 'отправлено';
//     const form = document.getElementById('form1');

//     const statusMessage = document.createElement('div');
//     statusMessage.textContent = 'тут будет сообщение';
//     statusMessage.style.cssText = 'font-size: 2rem; color: #85be32;';
    
//     form.addEventListener('submit', (event) => {
//         event.preventDefault();
         

//         const request = new XMLHttpRequest();
//         request.open('POST', './server.php');
//         request.setRequestHeader('Content-Type', 'multipart/form-data');
//         const formData = new FormData(form);
//         request.send(formData);

//     request.addEventListener('redystatechandge', ()=>{
//         statusMessage.textContent = loadMessage;
//     });
    
//   });
 
};

export default sendForms;