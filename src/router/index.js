import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from "@/views/Login";
import Main from "@/views/Main";
import Home from "@/views/main/Home";
import {CM} from "@/config/constants.config";

// Masterlist
import MasterList from "@/views/MasterList";
import CrewMasterList from "@/views/masterlist/Crew";
import CrewList from '@/components/modules/masterlist/crew/List';
import CreateCrew from "@/components/modules/masterlist/crew/CreateCrew";

Vue.use(VueRouter)

const login = {
  path: '/',
  name: 'Login',
  component: Login
}

const routes = [
  login,
  {
    path: '/',
    name: 'Main',
    component: Main,
    meta: {
      requiresAuth: true,
    },
    children:[
      {
        path: '/home',
        name: 'Home',
        component: Home,
      },

      {
        path: '/masterlist',
        name: 'Masterlist',
        component: MasterList,
        redirect: 'masterlist/crew',
        children:
            [
              {
                path : 'crew',
                name : 'CrewMasterList',
                component: CrewMasterList,
                redirect: 'crew/list',
                children: [
                  {
                    path: 'list',
                    name: 'CrewList',
                    component: CrewList,
                  },

                  {
                    path: 'create',
                    name: 'CreateCrew',
                    component: CreateCrew,
                  },

                ]
              },
            ]
      },

    ]


  }

]


// const routes = [
//
//   {
//     path: '/',
//     name: 'Login',
//     component: Login,
//     meta: {
//       requiresAuth: false,
//     },
//   },
//
//   {
//     path: '/m',
//     name: 'Main',
//     component: Main,
//     redirect: '/m/home',
//     meta: {
//       requiresAuth: true,
//     },
//     children:[
//       {
//         path: '/m/home',
//         name: 'Home',
//         component: Home,
//         meta: {
//           requiresAuth: true,
//         }
//       },
//     ]
//
//
//   }
//
//
//
//   // {
//   //   path: '/',
//   //   name: 'home',
//   //   component: HomeView
//   // },
//   // {
//   //   path: '/about',
//   //   name: 'about',
//   //   // route level code-splitting
//   //   // this generates a separate chunk (about.[hash].js) for this route
//   //   // which is lazy-loaded when the route is visited.
//   //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   // }
//
// ]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach(function(to, from, next) {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem(CM.TOKEN_NAME) != null) {
      next();
      console.log('got the token')
      // console.log(localStorage.getItem(CM.TOKEN_NAME))
      return;
    }
    next('/');

  } else {
    next();
  }
});

export default router
