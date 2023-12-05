<script setup>
import BlogIcon from "@/components/icons/IconBlog.vue"
import {inject, ref} from 'vue'

const categories = inject('categories')
const drawer = ref(true)
</script>

<template>
  <v-layout>
    <v-app-bar rounded class="transparent">
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"/>
      <v-toolbar-title>Travel Blog</v-toolbar-title>

      <v-spacer/>
      <v-btn variant="text" icon="mdi-magnify"></v-btn>
      <v-btn variant="text" icon>
        <v-icon>mdi-filter</v-icon>
        <v-menu activator="parent">
          <v-list density="compact">
            <v-list-item v-for="category in categories">
              {{ category }}
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>

      <v-btn variant="text" icon>
        <v-icon>mdi-dots-vertical</v-icon>
        <v-menu activator="parent">
          <v-list density="compact">
            <v-list-item>Profile</v-list-item>
            <v-list-item>Settings</v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer mobile-breakpoint="md" v-model="drawer" class="transparent">
      <v-list>
        <v-list-item :prepend-icon="BlogIcon" link to="/posts">
          Posts
        </v-list-item>
        <v-list-item prepend-icon="mdi-shape" link to="/categories">
          Categories
        </v-list-item>
        <v-list-item prepend-icon="mdi-account-multiple" link to="/users">
          Users
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="fluid">
        <RouterView/>

      <v-btn link to="/posts/create"
             variant="elevated" icon="mdi-plus" color="indigo-darken-4"
             position="fixed" size="large" style="bottom:4em; right:2em">
      </v-btn>
    </v-main>

    <v-bottom-navigation grow class="hidden-sm-and-up">
      <v-btn size="large" link to="/users">
        <v-icon>mdi-account-multiple</v-icon>
        Users
      </v-btn>
      <v-btn size="large" link to="/posts">
        <v-icon>mdi-note-plus</v-icon>
        Posts
      </v-btn>
      <v-btn size="large" link to="/categories">
        <v-icon>mdi-shape</v-icon>
        Categories
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>

