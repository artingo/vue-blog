# Vue.js course

This project is meant to teach Vue.js fundamentals by creating a blog, step by step. It uses the [Material Design / Vuetify](https://vuetifyjs.com/en/) framework and stores its data in the Google [Firebase](https://firebase.google.com/) cloud.

Follow these steps to continuously build a client-side Blog web app with [Vue.js](https://vuejs.org/guide/introduction.html).

## 1. Create project
1. In your IDE, create a new Vue.js project:<br/>
![New project](screenshots/New_project.png)


2. Create these folders and files:<br/>
![folders](screenshots/Folder_structure.png)


3. Create the application routes in [`src/router/index.js`](src/router/index.js):
```javascript
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
]
```

4. Create and mount all necessary plugins and Vue in `main.js`:<br/>
![main.js code](screenshots/Main_code.png)


## 2. Add props to `PostCard`
1. To add `props` to the [`PostCard`](src/components/PostCard.vue) component, insert the following code:
```javascript
const props = defineProps(['title', 'subtitle', 'avatar'])
```
2. In [`Overview`](src/views/posts/Overview.vue), create some test PostCards and pass the proper `props`.
```javascript
const avatars = ref([
'/female_avatar.jpeg',
'/male_avatar.png',
'/user1-128x128.jpg',
])
```
```vue
<v-col v-for="i in 9" :key="i" cols="auto">
  <PostCard :title="'Post no ' + i"
    :subtitle="'Freddie on ' + new Date().toDateString()"
    :avatar="avatars[i % 3]">
      Lorum ipsum...
  </PostCard>
</v-col>
```

## 3. 'Create post' view
![Create post screenshot](screenshots/Create_post.png)


1. In [`Create`](src/views/posts/Create.vue), add these form fields:
```vue
<v-text-field label="Title"  v-model="title" :rules="titleRules" required/>
<v-select label="Categories" v-model="categories" multiple
  :items="['Attractions', 'Beaches', 'Cities', 'Escape Rooms', 'Mountains', 'Museums']">
</v-select>
<v-textarea label="Content" v-model="body" :rules="bodyRules"></v-textarea>
```
2. Add some model variables and validation rules:
```javascript
const title = ref('')
const titleRules = [(value) => value ? true : 'Please enter a post title']
const categories = ref([])
const body = ref('')
const bodyRules = [(value) => value ? true : 'Please enter some post content']
```



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
