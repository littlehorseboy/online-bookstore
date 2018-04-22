import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld'

import Home from '@/pages/Home';
import Category from '@/pages/Category';
import ShoppingCart from '@/pages/ShoppingCart';
import Me from '@/pages/Me';
import BookDetails from '@/components/BookDetails';

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld,
    // },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Category,
    },
    {
      path: '/shopping-cart',
      name: 'ShoppingCart',
      component: ShoppingCart,
    },
    {
      path: '/me',
      name: 'Me',
      component: Me,
    },
    {
      path: '/books/:id',
      name: 'BookDetail',
      component: BookDetails,
    },
  ],
});
