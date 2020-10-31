import Home from "views/pages/Home";
import WishList from "views/pages/WishList";
import MinhasDisciplinas from "views/pages/MinhasDisciplinas";
import HistCompras from "views/pages/HistCompras";
import Login from "views/pages/Login";
import Cadastro from "views/pages/Cadastro";

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
        path: "/login",
        name: "Login",
        icon: "ni ni-key-25 text-info",
        component: Login,
        layout: "/auth"
      },
      {
        path: "/register",
        name: "Register",
        icon: "ni ni-circle-08 text-pink",
        component: Cadastro,
        layout: "/auth"
      }
    ],
  },
];
export default routes;
