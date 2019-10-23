import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Homepage from '@/components/homepage'
import Classify from '@/components/classify'
import Shopcar from '@/components/shopcar'
import Oneuser from '@/components/oneuser'
import Signin from '@/components/signin'
import Voucher from '@/components/voucher'
import Bargain from '@/components/bargain'
import Specialcolumn from '@/components/specialcolumn'
import Gose from '@/components/gose'


Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path:"/",
      component:Homepage,
      children:[
        {
          path:'/',
          component:Home
        }
      ]
     
    },
    {
      path: "/classify",
      component: Classify
    },
    {
      path:'/shopcar',
      component:Shopcar
    },
    {
      path:'/oneuser',
      component:Oneuser
    },
    {
      path:'/signin',
      component:Signin,
    },
    {
      path:'/gose',
      component:Gose
    },
    {
      path:'/voucher',
      component:Voucher
    },
    {
      path:'/bargain',
      component:Bargain
    },
    {
      path:"/specialcolumn",
      compontent:Specialcolumn
    }
  ]
})
