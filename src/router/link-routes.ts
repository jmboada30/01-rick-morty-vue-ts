export interface RouteLink {
  path: string;
  name: string;
  title: string;
}

const routerLinks: RouteLink[] = [
  {
    path: '/',
    name: 'home',
    title: 'Inicio',
  },
  {
    path: '/about',
    name: 'about',
    title: 'Sobre',
  },
  {
    path: '/characters',
    name: 'characters',
    title: 'Personajes',
  },
];

export default routerLinks;
