export default [
  {
    name: 'Demo-Stepper',
    path: '/demo/stepper',
    component: () => import('../../views/example/stepper/index.vue')
  },
  {
    name: 'Demo-Loading',
    path: '/demo/loading',
    component: () => import('../../views/example/loading/index.vue')
  },
  {
    name: 'Demo-Switch',
    path: '/demo/switch',
    component: () => import('../../views/example/switch/index.vue')
  },
  {
    name: 'Demo-H5-Search',
    path: '/demo/h5/search',
    component: () => import('../../views/example/h5-search/index.vue')
  },
  {
    name: 'Demo-H5-Navbar',
    path: '/demo/h5/navbar/h',
    component: () => import('../../views/example/h5-navbar/index-h.vue')
  },
  {
    name: 'Demo-H5-Navbar',
    path: '/demo/h5/navbar/v',
    component: () => import('../../views/example/h5-navbar/index-v.vue')
  }
]
