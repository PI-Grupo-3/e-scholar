import Home from "views/pages/Home";
import WishList from "views/pages/WishList";
import MinhasDisciplinas from "views/pages/MinhasDisciplinas";
import HistCompras from "views/pages/HistCompras";
import Discipline from "views/pages/Discipline";


const routes = [
  {
    collapse: true,
    name: "Examples",
    icon: "ni ni-ungroup text-orange",
    state: "examplesCollapse",
    views: [
      {
        path: "/home",
        name: "Página principal",
        component: Home,
        layout: "/auth",
      },
      {
        path: "/wishlist",
        name: "Lista de desejo",
        component: WishList,
        layout: "/auth",
      },
      {
        path: "/mydiscipline",
        name: "Minhas Disciplinas",
        component: MinhasDisciplinas,
        layout: "/auth",
      },
      {
        path: "/hist",
        name: "Histórico de compras",
        component: HistCompras,
        layout: "/auth",
      },
      {
        path: "/discipline/:id",
        name: "Disciplina",
        component: Discipline,
        layout: "/auth",
      },
    ],
  },
];
export default routes;
