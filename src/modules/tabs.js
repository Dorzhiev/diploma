const tabs = () => {

    const tabHeader = document.querySelector('.panel-group'),
        panelНeading = tabHeader.querySelectorAll('.panel-heading'),
        tabContent = tabHeader.querySelectorAll('.panel-collapse');

    const toggleTabContent = (index) => {
        for (let i = 0; i < tabContent.length; i++) {
            if (index === i) {
                console.log('test');
                tabContent[i].classList.add('in');
            } else {

                tabContent[i].classList.remove('in');
            };
        };
    };

    tabHeader.addEventListener('click', (event) => {
        let target = event.target;

        target = target.closest('.panel-heading'); //поднимается выше до родителя и ищет элемент
        event.preventDefault();
        if (target) {


            panelНeading.forEach((item, i) => {
                if (item === target) {

                    toggleTabContent(i);
                }
            });

        }

    });
};

export default tabs;


// const panelGroup = document.querySelector('.panel-group'),//родитель
//     panelDefault =  document.querySelectorAll('.panel-heading'),
//     panelBody =  tabHeader.querySelectorAll('.panel-body');

// const toggleTabContent = (index) => {
//     for(let i = 0; i < panelBody.length; i++){
//         if(index === i){
//             console.log('test');
//             panelBody[i].classList.remove('d-none');
//         } else {
//             panelBody[i].classList.add('d-none');
//         }
//     }
// };
//     panelGroup.addEventListener('click', (event) => { //колбек ф.
//         let target = event.target;//получаем эл-т куда кликнули
//         if (target.classList.contains('panel-heading')){//contains – проверка наличия класса у элемента
//             panelDefault.forEach((item, i) => {
//                 if(item === target){
//                     toggleTabContent(i);
//                 }
//             });
//         }
//     });