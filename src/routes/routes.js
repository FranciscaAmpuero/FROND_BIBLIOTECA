import React, { lazy } from 'react'
import { HomeRedirect } from './RouteUtils'
import RouteController from './RouteController'
const Dashboard = lazy(() => import('../components/views/Dashboard'))
const Login = lazy(() => import('../components/views/Login'))
const Home = lazy(() => import('../components/views/Home'))
const Prestamos = lazy(() => import('../components/views/Prestamos'))

const routes = [
    {
        path: "/",
        exact: true,
        component: HomeRedirect
    },
    {
        path: "/login",
        exact: true,
        render: props => <Login {...props} />
    },
    {
        path: "/app",
        render: props => <RouteController component={Home} {...props} />,
        routes: [
            {
                path: "/app",
                exact: true,
                render: props => <RouteController component={Dashboard} {...props} />
            }
        ]
    },
    {
        path: "/prestamos",
        render: props => <RouteController component={Home} {...props} />,
        routes: [
            {
                path: "/prestamos",
                exact: true,
                render: props => <RouteController component={Prestamos} {...props} />
            }
        ]
    }
]

export default routes