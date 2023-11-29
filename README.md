# Vue.js course

This project is meant to teach Vue.js fundamentals by creating a blog, step by step. It uses the [Material Design / Vuetify](https://vuetifyjs.com/en/) framework and stores its data in the Google [Firebase](https://firebase.google.com/) cloud.

Follow these steps to continuously build a client-side Blog web app with [Vue.js](https://vuejs.org/guide/introduction.html).

## 1. Create project
1. In your IDE, create a new Vue.js project:
![New project](screenshots/New_project.png)


2. Create these folders and files:<br/>
![folders](screenshots/Folder_structure.png)


3. Create the application routes in [`src/router/index.js`](src/router/index.js):
```javascript
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
```

4. Create and mount all necessary plugins and Vue in `main.js`:
![main.js code](screenshots/Main_code.png)



### Project Setup
```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
