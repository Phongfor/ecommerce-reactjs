import { lazy } from 'react'

const routers = [
    {
        path: '/',
        component: lazy(() => import('@components/HomePage/HomePage'))
    },
    {
        path: '/blog',
        component: lazy(() => import('@components/Blog/Blog'))
    },
    {
        path: '/shop',
        component: lazy(() => import('@Pages/OurShop/OurShop'))
    },
    {
        path: '/cart',
        component: lazy(() => import('@Pages/Cart/Cart'))
    }
]

export default routers