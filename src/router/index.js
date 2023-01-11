import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    // vue.config.js에 prefetch 삭제를 default값으로 해놔서 true로 변경
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch:true */ '../views/ContactView.vue')
    //component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
  },
  {
    path: '/basic',
    name: 'Basic',
    component: () => import(/* webpackChunkName: "basic" */ '../views/BasicView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: () => import(/* webpackChunkName: "databinding" */ '../views/DataBinding.vue')
  },
  {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: () => import(/* webpackChunkName: "databindinghtml" */ '../views/DataBindingHtml.vue')
  },
  {
    path: '/example',
    name: 'Example',
    component: () => import(/* webpackChunkName: "example" */ '../views/Example.vue')
  },
  {
    path: '/attributebinding',
    name: 'AttributeBinding',
    component: () => import(/* webpackChunkName: "attributebinding" */ '../views/AttributeBinding.vue')
  },
  {
    path: '/classbinding',
    name: 'ClassBinding',
    component: () => import(/* webpackChunkName: "classbinding" */ '../views/ClassBinding.vue')
  },
  {
    path: '/listrendering',
    name: 'ListRendering',
    component: () => import(/* webpackChunkName: "listrendering" */ '../views/ListRendering.vue')
  },
  {
    path: '/renderinggrammer',
    name: 'RenderingGrammer',
    component: () => import(/* webpackChunkName: "renderinggrammer" */ '../views/RenderingGrammer.vue')
  },
  {
    path: '/eventview',
    name: 'EventView',
    component: () => import(/* webpackChunkName: "eventview" */ '../views/EventView.vue')
  },
  {
    path: '/computedview',
    name: 'ComputedView',
    component: () => import(/* webpackChunkName: "computedview" */ '../views/ComputedView.vue')
  },
  {
    path: '/watchview',
    name: 'WatchView',
    component: () => import(/* webpackChunkName: "watchview" */ '../views/WatchView.vue')
  },
  {
    path: '/selectinsert',
    name: 'SelectInsert',
    component: () => import(/* webpackChunkName: "selectinsert" */ '../views/SelectInsert.vue')
  },
  {
    path: '/insertuser',
    name: 'InsertUser',
    component: () => import(/* webpackChunkName: "insertuser" */ '../views/InsertUser.vue')
  },
  {
    path: '/serverdata',
    name: 'ServerData',
    component: () => import(/* webpackChunkName: "serverdata" */ '../views/ServerData.vue')
  },
  {
    path: '/pagetitle',
    name: 'PageTitle',
    component: () => import(/* webpackChunkName: "pagetitle" */ '../views/PageTitle.vue')
  },
  {
    path: '/slot',
    name: 'SlotUseModalLayout',
    component: () => import(/* webpackChunkName: "slot" */ '../views/SlotUseModalLayout.vue')
  },
  {
    path: '/mixin',
    name: 'MixinTest',
    component: () => import(/* webpackChunkName: "mixin" */ '../views/MixinTest.vue')
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: () => import(/* webpackChunkName: "calculator" */ '../views/Calculator.vue')
  },
  {
    path: '/compositionapi',
    name: 'CompositionApi',
    component: () => import(/* webpackChunkName: "compositionapi" */ '../views/CompositionApi.vue')
  },
  {
    path: '/compositionapi2',
    name: 'CompositionApi2',
    component: () => import(/* webpackChunkName: "compositionapi2" */ '../views/CompositionApi2.vue')
  },
  {
    path: '/compositionapi3',
    name: 'CompositionApi3',
    component: () => import(/* webpackChunkName: "compositionapi3" */ '../views/CompositionApi3.vue')
  },
  {
    path: '/compositionapi4',
    name: 'CompositionApi4',
    component: () => import(/* webpackChunkName: "compositionapi4" */ '../views/CompositionApi4.vue')
  },
  {
    path: '/compositionapiprovide',
    name: 'CompositionApiProvide',
    component: () => import(/* webpackChunkName: "compositionapiprovide" */ '../views/CompositionApiProvide.vue')
  },
  {
    path: '/customdirective',
    name: 'CustomDirective',
    component: () => import(/* webpackChunkName: "customdirective" */ '../views/CustomDirective.vue')
  },
  {
    path: '/plugins',
    name: 'PluginsView',
    component: () => import(/* webpackChunkName: "plugins" */ '../views/PluginsView.vue')
  },
  {
    path: '/storeaccess',
    name: 'StoreAccess',
    component: () => import(/* webpackChunkName: "storeaccess" */ '../views/StoreAccess.vue')
  },
  {
    path: '/kakaologin',
    name: 'KakaoLogin',
    component: () => import( /* webpackChunkName: "kakaologin" */ '../views/KakaoLogin.vue')
  },
  {
    path: '/login',
    name: 'KakaoLogin',
    component: () => import( /* webpackChunkName: "kakaologin" */ '../views/KakaoLogin.vue')
  },
  {
    path: '/naverlogin',
    name: 'NaverLogin',
    component: () => import( /* webpackChunkName: "naverlogin" */ '../views/NaverLogin.vue')
  },
  {
    path: '/googlelogin',
    name: 'GoogleLogin',
    component: () => import( /* webpackChunkName: "googlelogin" */ '../views/GoogleLogin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
