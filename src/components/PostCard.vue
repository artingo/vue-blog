<script setup>
import {computed, inject} from "vue"

const props = defineProps(['post', 'avatar'])
const categories = inject('categories')
const subtitle = computed(() => {
  // collect the category names
  const cats = props.post.categories?.map(cat => categories[cat])
  return cats?.join(', ')
})
</script>

<template>
  <v-card class="mx-auto" width="280" link :to="'/posts/' + props.post.id"
          :title="props.post.title"
          :subtitle="subtitle">
    <template v-slot:prepend>
      <v-avatar>
        <v-img :src="avatar" alt="Avatar"/>
      </v-avatar>
    </template>
    <v-divider/>
    <v-card-text>
      {{ post.body }}
    </v-card-text>
  </v-card>
</template>

<style>
#overview .v-card {
  height: 100%;
}

#overview .v-card-text {
  height: 11rem;
  overflow: hidden;
  margin-bottom: 1.2em;
}
</style>
