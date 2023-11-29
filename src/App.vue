<script setup>
import BlogIcon from "@/components/icons/IconBlog.vue";
import {ref} from 'vue'

const drawer = ref(true)
</script>

<template>
  <VLayout row wrap rounded rounded-md align-start>
    <VAppBar rounded class="transparent">
      <VAppBarNavIcon variant="text" @click.stop="drawer = !drawer"/>
      <VToolbarTitle>Travel Blog</VToolbarTitle>

      <VSpacer></VSpacer>
      <VBtn variant="text" icon="mdi-magnify"></VBtn>
      <VBtn variant="text" icon>
        <VIcon>mdi-filter</VIcon>
        <VMenu activator="parent">
          <VList density="compact">
            <VListItem>Attractions</VListItem>
            <VListItem>Beaches</VListItem>
            <VListItem>Cities</VListItem>
            <VListItem>Escape Rooms</VListItem>
            <VListItem>Mountains</VListItem>
            <VListItem>Museums</VListItem>
          </VList>
        </VMenu>
      </VBtn>

      <VBtn variant="text" icon>
        <VIcon>mdi-dots-vertical</VIcon>
        <VMenu activator="parent">
          <VList density="compact">
            <VListItem>Profile</VListItem>
            <VListItem>Settings</VListItem>
          </VList>
        </VMenu>
      </VBtn>
    </VAppBar>

    <VBottomNavigation grow >
      <VBtn size="large" link to="/users">
        <VIcon>mdi-account-multiple</VIcon>
        Users
      </VBtn>
      <VBtn size="large" link to="/posts">
        <VIcon>mdi-note-plus</VIcon>
        Posts
      </VBtn>
      <VBtn size="large" link to="/categories">
        <VIcon>mdi-shape</VIcon>
        Categories
      </VBtn>
    </VBottomNavigation>

    <VNavigationDrawer mobile-breakpoint="sm" v-model="drawer" class="transparent">
      <VList>
        <VListItem :prepend-icon="BlogIcon" link to="/posts">
          Posts
        </VListItem>
        <VListItem prepend-icon="mdi-shape" link to="/categories">
          Categories
        </VListItem>
        <VListItem prepend-icon="mdi-account-multiple" link to="/users">
          Users
        </VListItem>
      </VList>
    </VNavigationDrawer>

    <VMain>
      <RouterView></RouterView>
    </VMain>
    <VBtn link to="/posts/create"
          variant="elevated" icon="mdi-plus" color="indigo-darken-4"
          position="fixed" size="large" style="bottom:5em; right:3em">
    </VBtn>


  </VLayout>
</template>

