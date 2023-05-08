import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=> import('../modules/home/Home.vue')
const Main = ()=> import('../modules/home/modules/main/Main.vue')
const TermsConditions = ()=> import('../modules/home/modules/terms_conditions/TermsConditions.vue')
const TermsConditionsDrivers = ()=> import('../modules/home/modules/terms_conditions_drivers/TermsConditionsDrivers.vue')

const Auth = ()=> import('../modules/auth/Auth.vue')
const Login = ()=> import('../modules/auth/components/login/Login.vue')
const Register = ()=> import('../modules/auth/components/register/Register.vue')
const SendEmail = ()=> import('../modules/auth/components/send-email/SendEmail.vue')
const ForgotPassword = ()=> import('../modules/auth/components/forgot-password/ForgotPassword.vue')
const ChangePassword = ()=> import('../modules/auth/components/change-password/ChangePassword.vue')

const Cms = ()=> import('../modules/cms/Cms.vue')
const TrainingProgram = ()=> import('../modules/cms/modules/training-program/TrainingProgram.vue')
const Driver = ()=> import('../modules/cms/modules/driver/Driver.vue')
const Setting = ()=> import('../modules/cms/modules/setting/Setting.vue')
const ChangePasswordCms = ()=> import('../modules/cms/modules/setting/components/ChangePassword.vue')
const WhatsAppGroup = ()=> import('../modules/cms/modules/setting/components/WhatsAppGroup.vue')
const PresentationVideo = ()=> import('../modules/cms/modules/setting/components/PresentationVideo.vue')


import UserService from '@/shared/services/UserService'


Vue.use(VueRouter)

const routes = [
  
  {
    path: '',
    name: 'home',
    component: Home,

    children: [

      {
        path: '',
        name: 'main',
        component: Main 
      },

      {
        path: 'terms_conditions',
        name: 'terms_conditions',
        component: TermsConditions 
      },

      {
        path: 'terms_conditions_drivers',
        name: 'terms_conditions_drivers',
        component: TermsConditionsDrivers 
      }

    ]
  },

  {
    path: '/auth',
    name: 'auth',
    component: Auth,

    children: [
      { 
        path: '', 
        redirect: 'login' 
      },

      {
        path: 'login',
        name: 'login',
        component: Login
      },

      {
        path: 'register',
        name: 'register',
        component: Register
      },

      {
        path: 'send-email/:email',
        name: 'send-email',
        component: SendEmail
      },

      {
        path: 'forgot-password',
        name: 'forgot-password',
        component: ForgotPassword
      },

      {
        path: 'change-password/:email/:token',
        name: 'change-password',
        component: ChangePassword
      }
    ]
  },

  {
    path: '/cms',
    name: 'cms',
    component: Cms,
    meta: { requiresAuth: true },

    children: [
      {
        path: '',
        name: 'training-program',
        component: TrainingProgram
      },

      {
        path: 'drivers',
        name: 'drivers',
        component: Driver
      },

      {
        path: 'setting',
        name: 'setting',
        component: Setting,

        children: [

          {
            path: '',
            name: 'WhatsApp Group',
            component: WhatsAppGroup
          },

          {
            path: 'presentation-video',
            name: 'Presentation Video',
            component: PresentationVideo
          },

          {
            path: 'change-password',
            name: 'Change Password',
            component: ChangePasswordCms
          },

          
        ]
      }

    ]
  }

]

const router = new VueRouter({
  routes,

  scrollBehavior (to, from, savedPosition) 
  {
    if(savedPosition) 
      return savedPosition
    else 
      return { x: 0, y: 0 }
  }
})


router.beforeEach(async (to, from, next) => 
{
  if(to.matched.some(route => route.meta.requiresAuth))
  {
    let destRoute = to.path.split('/')[1]

    if(localStorage.getItem('token') != undefined)
    {
      const resp = await UserService.getUser()
      const user = resp.data

      console.log(resp.data)

      if(user != null)
        next()
      else
        location.href = Vue.prototype.domain

    }else 
      location.href = Vue.prototype.domain

  }else
    next()
})



export default router
