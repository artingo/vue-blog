<script setup>
const props = defineProps(['title'])
</script>

<template>
  <VCard
      class="mx-auto"
      max-width="280"
      :title="props.title"
      subtitle="Freddie on 2023-11-15, 05:15"
  >
    <template v-slot:prepend>
      <VAvatar >
        <VImg src="/user1-128x128.jpg" alt="Freddie"/>
      </VAvatar>
    </template>
<!--        <v-badge content="Beaches" color="error"/>-->
    <VDivider/>
    <VCardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
    </VCardText>
  </VCard>
</template>
