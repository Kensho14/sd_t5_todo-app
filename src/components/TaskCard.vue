<template>
  <v-card :color="color" dark>
    <v-card-title class="headline" v-text="title"></v-card-title>
    {{ description }}
    <v-card-actions>
      <v-btn>Edit</v-btn>
      <v-btn>Done</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    color: String,
    title: String,
    description: String,
  }
}
</script>