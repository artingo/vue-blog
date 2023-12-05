<script setup>
import {addDoc, collection, doc, getDoc, setDoc} from "firebase/firestore";
import db from "@/db";
import {useRouter} from 'vue-router'
import {computed, inject, onMounted, ref} from "vue"

const props = defineProps(['id'])
const router = useRouter()

// create key/value-pairs for <select>
const allCategories = []
for (const [key, value] of Object.entries(inject('categories'))) {
  allCategories.push({value: key, title: value})
}
// show different titles for a new or existing posting
const displayTitle = computed(() => isNewDoc.value ? 'Create new post' : `Edit '${title.value}'`)

// Vue variables
const isNewDoc = ref(true)
const title = ref('')
const categories = ref(null)
const body = ref('')

// validation rules
const titleRules = [(value) => value ? true : 'Please enter a post title']
const bodyRules = [(value) => value ? true : 'Please enter some post content']
const isValid = ref()

onMounted(async () => {
  // only execute for existing posting
  if (props.id) await loadPost(props.id)
})

// loads the post from FireStore, using it's ID
async function loadPost(id) {
  const post = await getDoc(doc(db, "posts", id))

  if (post.exists()) {
    isNewDoc.value = false
    title.value = post.data().title
    body.value = post.data().body
    categories.value = post.data().categories?.map(cat => cat.id)
  } else {
    // if post with this ID doesn't exist, show a warning
    title.value = 'No entry with post id ' + props.id
  }
}

// saves the form data to FireStore
async function savePost() {
  // if there is a validation error, abort
  if (!isValid.value) return false

  // load the FireStore references for selected categories
  const selectedCategories = categories.value?.map(catRef => doc(db, 'categories', catRef))
  const newPost = {
    title: title.value,
    body: body.value,
    categories: selectedCategories
  }
  const coll = collection(db, "posts")

  if (isNewDoc.value) {
    // create a new Posting in FireStore
    await addDoc(coll, newPost)
  } else {
    // update the existing Posting in FireStore
    await setDoc(doc(coll, props.id), newPost)
  }

  // forward to overview page
  router.push('/posts')
}
</script>

<template>
  <v-container>
    <h1>{{ displayTitle }}</h1>
    <v-row>
      <v-col sm="8" lg="4">
        <v-sheet class="pa-3" elevation="4">
          <v-form @submit.prevent="savePost" v-model="isValid">
            <v-text-field label="Title" variant="outlined" required
                          v-model="title" :rules="titleRules"
                          placeholder="Write your post title here..."/>
            <v-select label="Categories" variant="outlined" class="mt-3" multiple
                      v-model="categories" :items="allCategories">
            </v-select>
            <v-textarea label="Content" variant="outlined" rows="8"
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
