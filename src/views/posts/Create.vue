<script setup>
import {ref} from "vue"

const title = ref('')
const titleRules = [(value) => value ? true : 'Please enter a post title']

const categories = ref([])
const body = ref('')
const bodyRules = [(value) => value ? true : 'Please enter some post content']
</script>

<template>
  <v-container>
    <h1>Create Post</h1>
    <v-row>
      <v-col sm="8" lg="4">
        <v-sheet class="pa-3" elevation="4">
          <v-form @submit.prevent>
            <v-text-field label="Title" variant="outlined" required
                          v-model="title" :rules="titleRules"
                          placeholder="Write your post title here..."/>
            <v-select label="Categories" variant="outlined" class="mt-3"
                      v-model="categories" multiple
                      :items="['Attractions', 'Beaches', 'Cities', 'Escape Rooms', 'Mountains', 'Museums']">
            </v-select>
            <v-textarea label="Content" variant="outlined"
                        v-model="body" :rules="bodyRules"></v-textarea>
            <v-spacer class="mt-4"/>
            <v-btn size="large" elevation="4" color="grey-darken-1" link to="/">Cancel</v-btn>
            <v-btn type="submit" size="large" elevation="4" color="primary" class="float-end">Save</v-btn>
          </v-form>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
