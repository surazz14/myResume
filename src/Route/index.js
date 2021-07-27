import Profile from '../modulus/profile/profile'
import Content from 'modulus/profile/content/blog/blogDescription/blogDescription';
export default [
    {
        component: Profile,
        path: '/',
        exact: true
    },
    {
        component: Content,
        path: '/suraj/:id',
        exact: true
    },
];
