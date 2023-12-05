<script setup>
import PostCard from "@/components/PostCard.vue"
import {onMounted, ref} from "vue"
import {collection, getDocs} from 'firebase/firestore'
import db from '/src/db'

const avatars = ref([
  '/female_avatar.jpeg',
  '/male_avatar.png',
  '/user1-128x128.jpg',
])
const posts = ref([])

onMounted(async () => await loadPostings())

// loads all postings from FireStore
async function loadPostings() {
  const postings = await getDocs(collection(db, "posts"))
  postings.forEach(post => {
    const currentPost = {
      id: post.id,
      title: post.data().title,
      body: post.data().body,
      categories: post.data().categories?.map(cat => cat.id)
    }
    posts.value.push(currentPost)
  })
}

</script>

<template>
  <v-container>
    <h1>Posts overview</h1>
    <v-row id="overview">
      <v-col v-for="post,i in posts" :key="i" cols="auto">
        <PostCard :post="post" :avatar="avatars[i % 3]"/>
      </v-col>
    </v-row>
  </v-container>
</template>
