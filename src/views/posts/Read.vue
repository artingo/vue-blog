<script setup>
import {doc, deleteDoc, getDoc} from 'firebase/firestore'
import db from '/src/db'
import {onMounted, ref, inject, computed} from 'vue'
import {useRouter} from "vue-router";

const props = defineProps(['id'])
const router = useRouter()
const categories = inject('categories')
const subtitle = computed(() => {
  // collect the category names
  const cats = post.value.categories?.map(cat => categories[cat])
  return cats?.join(', ')
})

// Vue variables
const post = ref({})

onMounted(async () =>  await loadPost(props.id))

// load the post from FireStore, using it's ID
async function loadPost(id) {
  const postDoc = await getDoc(doc(db, "posts", id))

  if (postDoc.exists()) {
    post.value = {
      title: postDoc.data().title,
      body: postDoc.data().body,
      categories: postDoc.data().categories?.map(cat => cat.id)
    }
  } else {
    // if post with this ID doesn't exist, show a warning
    post.value = {title: 'No entry with post id ' + props.id}
  }
}

// delete the post from FireStore, using it's ID
async function deletePost(id) {
  await deleteDoc(doc(db, "posts", id))
  // forward to overview page
  router.push('/posts')
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col sm="8" lg="4">
        <v-card class="mx-auto" :title="post.title" :subtitle="subtitle">
          <template v-slot:prepend>
            <v-avatar image="/male_avatar.png"/>
          </template>
          <v-divider/>
          <v-card-text>
            {{ post.body }}
          </v-card-text>

          <v-card-actions>
<!--
            <v-dialog width="auto">
              <template v-slot:activator="{ props }">
                <v-btn color="red-darken-4" variant="elevated" v-bind="props">Delete</v-btn>
              </template>
              <template v-slot:default="{ isActive }">
                <v-card>
                  <v-toolbar color="red-darken-4" title="Delete posting"/>
                  <v-card-text>
                    <div class="text-h4 pa-8">
                      Are you sure that you<br/> want to delete this post?
                    </div>
                  </v-card-text>
                  <v-card-actions class="justify-space-between">
                    <v-btn variant="elevated" color="grey-darken-1"
                           @click="isActive.value = false">
                      Cancel
                    </v-btn>
                    <v-btn variant="elevated" color="red-darken-4"
                           @click="deletePost(props.id)">
                      Yes, delete
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>

            <v-btn color="primary" variant="elevated" link :to="'/posts/edit/'+props.id">
              Edit
            </v-btn>
-->
            <v-col class="text-right">
              <v-btn color="grey-darken-1" variant="elevated" link to="/posts">
                Close
              </v-btn>
            </v-col>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
