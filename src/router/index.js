import Overview from "@/views/posts/Overview.vue";
import Users from "@/views/Users.vue";
import Categories from "@/views/Categories.vue";
import Read from "@/views/posts/Read.vue";
import Create from "@/views/posts/Create.vue";

const routes = [
  {path: '/', component: Overview},
  {path: '/posts', component: Overview},
  {path: '/posts/:id', component: Read},
  {path: '/posts/create', component: Create},
  {path: '/posts/update', component: Overview},
  {path: '/posts/save', component: Overview},
  {path: '/posts/delete', component: Overview},
  {path: '/categories', component: Categories},
  {path: '/users', component: Users},
];
export default routes;
