type Route = {
    path: string;
    component: string;
};
type RoutingCOnfig = {
    routes: Route[];
};
const routingConfig: RoutingCOnfig = {
    routes: [
        {
            path: 'home',
            component: 'HomeComponent',
        },
        {
            path: 'about',
            component: 'AboutComponent',
        },
        {
            path: 'contact',
            component: 'ContactComponent',
        },
    ],
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createRoutes = (config: {
    routes: {
        path: string;
        component: string;
    }[];
}) => {};

createRoutes(routingConfig);
