<script setup>
const props = defineProps([
    'title',
    'subtitle',
    'avatar',
])
</script>

<template>
  <VCard
      class="mx-auto"
      max-width="280"
      :title="props.title"
      :subtitle="props.subtitle"
  >
    <template v-slot:prepend>
      <VAvatar >
        <VImg :src="avatar" alt="Avatar"/>
      </VAvatar>
    </template>
<!--        <v-badge content="Beaches" color="error"/>-->
    <VDivider/>
    <VCardText>
      <slot>Lorum ipsum</slot>
    </VCardText>
  </VCard>
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
