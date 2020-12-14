<template>
  <v-card :color="color" dark>
    <v-card-title class="headline" v-text="name"></v-card-title>
    {{ youbi }}
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
    name: String,
    youbi: Number,
  }
}
</script>