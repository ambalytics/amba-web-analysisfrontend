import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import { VueCookieNext } from 'vue-cookie-next'

import 'primeflex/primeflex.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
// import 'primevue/resources/themes/md-light-indigo/theme.css';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Menubar from 'primevue/menubar';
import Card from 'primevue/card';
import Chart from 'primevue/chart';
import InputText from 'primevue/inputtext';
import SelectButton from 'primevue/selectbutton';


const app = createApp(App);

app.provide('selectedTime', {
                    name: '6h',
                    icon: "pi pi-fw pi-clock",
                    duration: 3600 * 6
                });
app.use(VueCookieNext);
app.use(router);

app.use(PrimeVue);
app.component('Menubar', Menubar);
app.component('Card', Card);
app.component('Chart', Chart);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('InputText', InputText);
app.component('SelectButton', SelectButton);

app.mount('#app');
