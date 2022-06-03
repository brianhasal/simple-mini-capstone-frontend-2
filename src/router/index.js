import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsNew from '../views/ProductsNew.vue'
import ProductsShow from '../views/ProductsShow.vue'
import ProductsEdit from '../views/ProductsEdit.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products/new',
    name: 'products-new',
    component: ProductsNew
  },
  {
    path: '/products/:id',
    name: 'products-show',
    component: ProductsShow
  },
  {
    path: '/products/:id/edit',
    name: 'products-edit',
    component: ProductsEdit
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
