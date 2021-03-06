import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    component: () => import('@/components/AppHome.vue'),
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/components/home_child/Index.vue')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/components/home_child/Me.vue')
      },
      {
        path: 'like',
        name: 'BookLike',
        component: () => import('@/components/home_child/Bookrack.vue')
      },
      {
        path: 'category',
        name: 'category',
        component: () => import('@/components/home_child/Category.vue')
      }
    ]
  },
  {
    path: '/chapterlist',
    name: 'chapterlist',
    component: () => import('@/components/AppChapterList.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('@/components/AppDetail.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/components/user_child/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/user_child/Login.vue')
  },
  {
    path: '/userinfo',
    name: 'userinfo',
    component: () => import('@/components/user_child/Userinfo.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/components/AppSearch.vue')
  },
  {
    path: '/repassword',
    name: 'Repassword',
    component: () => import('@/components/user_child/Repassword.vue')
  },
  {
    path: '*',
    component: () => import('@/components/AppNotFunt.vue')
  },
];
const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to,from,next)=>{
  let islogin = localStorage.getItem('article_token') ? true : false;
  if(to.path === '/about' && islogin === false){
    next('/login')
  }else{
    next()
  }
})
export default router;