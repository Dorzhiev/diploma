'use strict';

import 'es6-promise';
import '@babel/polyfill';
import 'fetch-polyfill';
import 'formdata-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);


import toggleMenu from './modules/toggleMenu';
import sendForms from './modules/sendForms';
import formsValid from './modules/formsValid';
import tabs from './modules/tabs';
import tabs2 from './modules/tabs2';
import calcTab from './modules/calcTab';
import calcResult from './modules/calcResult';
import btnMore from './modules/btnMore';
import checkList from './modules/checkList';
import popupDiscount from './modules/popupDiscount';
import popupConsult from './modules/popupConsult';

//модальное окно (1)
toggleMenu();
//отправка форм (2)
sendForms();
//валидация форм (2)
formsValid();
//аккардеон (3)
tabs();
//аккардеон2
tabs2();
//аккардеон калькулятор
calcTab();
//калькулятор рассчеты
calcResult();
//кнопка "Больше"
btnMore();
//окно checkList
checkList();
//скидка
popupDiscount();
//консультация
popupConsult();