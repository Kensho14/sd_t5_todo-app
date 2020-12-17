<template>
  <v-card :color="color" dark>
    <v-card-title class="headline" v-text="name"></v-card-title>
    {{ youbiText }}
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
  },
  computed: {
    youbiText() {
      return [ "日", "月", "火", "水", "木", "金", "土" ][this.youbi] ;
    }
  }
}
</script>