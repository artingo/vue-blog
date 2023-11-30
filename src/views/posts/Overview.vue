<script setup>
import PostCard from "@/components/PostCard.vue";
import {ref} from "vue";

const avatars = ref([
  '/female_avatar.jpeg',
  '/male_avatar.png',
  '/user1-128x128.jpg',
])
</script>

<template>
  <v-container>
    <h1>Posts overview</h1>
    <v-row>
      <v-col v-for="i in 9" :key="i" cols="auto" >
        <PostCard :title="'Post no ' + i"
                  :subtitle="'Freddie on ' + new Date().toDateString()"
                  :avatar="avatars[i % 3]">
          Ondernomen schipbreuk en natuurlijk ontsnappen ingezameld op verlichten ze. Er herkenbaar in ingenieuse
          ongebruikt om er. Jaar de op kilo tijd toen zelf maar. Onder raakt china banka heeft hun een kreeg.
          Specerijen nauwelijks traliewerk oog ook rijkdommen bescheiden. Bak van lot enkele kosten dieren.
          Op spuwen in zielen ruimer. Ze diepe banka vindt er noemt om deele.
        </PostCard>
      </v-col>
    </v-row>
  </v-container>
</template>
