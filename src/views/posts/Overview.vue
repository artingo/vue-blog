<script setup>
import PostCard from "@/components/PostCard.vue";
</script>

<template>
  <v-container>
    <h1>Posts overview</h1>
    <v-row>
      <v-col
          v-for="i in 9"
          :key="i"
          cols="auto"
      >
        <PostCard :title="'Post no ' + i"/>
      </v-col>
    </v-row>
  </v-container>
</template>
