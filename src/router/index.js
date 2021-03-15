import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      layout: "main"
    },
    component: () => import("../views/pages/Home.vue")
  },
  {
    path: "/albums",
    name: "Albums",
    meta: {
      layout: "main"
    },
    component: () => import("../views/pages/Albums.vue")
  },
  {
    path: "/albums/:id",
    name: "Album",
    props: true,
    meta: {
      layout: "main"
    },
    component: () => import("../views/pages/SingleAlbum")
  },
  {
    path: "/create-album",
    name: "Create album",
    meta: {
      layout: "main"
    },
    component: () => import("../views/pages/CreateAlbum")
  },
  {
    path: "/edit-album/:id",
    name: "Edit album",
    props: true,
    meta: {
      layout: "main"
    },
    component: () => import("../views/pages/EditAlbum")
  },
  {
    path: "*",
    name: "404",
    meta: {
      layout: "undefined"
    },
    component: () => import("../views/pages/404")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
