const tabs2 = () => {

    const tabHeader = document.querySelector('.slideInDown'),
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

export default tabs2;