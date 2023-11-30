<script setup>
const props = defineProps(['title', 'subtitle', 'avatar'])
</script>

<template>
  <v-card class="mx-auto" max-width="280"
      :title="props.title"
      :subtitle="props.subtitle">
    <template v-slot:prepend>
      <v-avatar>
        <v-img :src="avatar" alt="Avatar"/>
      </v-avatar>
    </template>
    <v-divider/>
    <v-card-text>
      <slot>Lorum ipsum</slot>
    </v-card-text>
  </v-card>
</template>

<style>
.v-card {
  height: 12rem;
}

.v-card-text {
  overflow: hidden;
  padding-bottom: 1em;
}
</style>
