import Overview from "@/views/posts/Overview.vue";
import Users from "@/views/Users.vue";
import Categories from "@/views/Categories.vue";
import Read from "@/views/posts/Read.vue";
import Edit from "@/views/posts/Edit.vue";

const routes = [
  {path: '/', component: Overview},
  {path: '/posts', component: Overview},
  {path: '/posts/:id', component: Read, props: true},
  {path: '/posts/create', component: Edit},
  {path: '/posts/edit/:id', component: Edit, props: true},
  {path: '/categories', component: Categories},
  {path: '/users', component: Users},
];
export default routes;
