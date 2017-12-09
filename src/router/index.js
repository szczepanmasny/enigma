import Vue from 'vue';
import Router from 'vue-router';
import NotSelected from './NotSelected';
import Parking from './Parking';
import Poi from './Poi';
import Vehicle from './Vehicle';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NotSelected',
      component: NotSelected,
    },
    {
      path: '/parking',
      name: 'Parking',
      component: Parking,
    },
    {
      path: '/poi',
      name: 'Poi',
      component: Poi,
    },
    {
      path: '/vehicle',
      name: 'Vehicle',
      component: Vehicle,
    },
  ],
});
