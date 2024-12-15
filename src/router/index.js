import { createRouter, createWebHashHistory } from 'vue-router'
import profile from '@/profile/profile.vue'
import home from '@/home/home.vue'


const router = createRouter({
    history: createWebHashHistory(),
    routes:[
      {path:'/profile',component: profile},
      {path:'/',component: home}
      
    ]
    
  })
  
  export default router