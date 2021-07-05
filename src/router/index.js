import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')

const Video = () => import('../views/video/Video')
const VideoShow = () => import('../views/video/videoshow/VideoShow')

const Music = () => import('../views/music/Music')
const MusicShow = () => import('../views/music/musicshow/MusicShow')

const Comics = () => import('../views/comics/Comics')
const ComicsShow = () => import('../views/comics/comicsshow/ComicsShow')

const Column = () => import('../views/column/Column')
const ColumnShow = () => import('../views/column/columnshow/ColumnShow')

const Login = () => import('../views/login/Login')
const PersonalCenter = () => import('../views/personalcenter/PersonalCenter')
const Registered = () => import('../views/login/registered/Registered')
const Forget = () => import('../views/login/forget/Forget')

const Administrator = () => import('../views/login/administrator/Administrator')
const Admin = () => import('../views/admin/Admin')

const Contribution = () => import('../views/column/contribution/Contribution')

const Error = () => import('../views/error/Error')



Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },

  {
    path: '/video',
    name: 'Video',
    component: Video
  },
  {
    path: '/video/videoshow',
    name: 'VideoShow',
    component: VideoShow
  },

  {
    path: '/music',
    name: 'Music',
    component: Music
  },
  {
    path: '/music/musicshow',
    name: 'MusicShow',
    component: MusicShow
  },

  {
    path: '/comics',
    name: 'Comics',
    component: Comics
  },
  {
    path: '/comics/comicsshow',
    name: 'ComicsShow',
    component: ComicsShow
  },

  {
    path: '/column',
    name: 'Column',
    component: Column
  },
  {
    path: '/column/columnshow',
    name: 'ColumnShow',
    component: ColumnShow
  },
  {
    path: '/column/contribution',
    name: 'Contribution',
    component: Contribution
  },


  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registered',
    name: 'Registered',
    component: Registered
  },
  {
    path: '/forget',
    name: 'Forget',
    component: Forget
  },


  {
    path: '/administrator',
    name: 'Administrator',
    component: Administrator
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },


  {
    path: '/personalcenter',
    name: 'PersonalCenter',
    component: PersonalCenter
  },

  {
    path: '/error',
    name: 'Error',
    component: Error
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
