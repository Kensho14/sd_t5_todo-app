<template>
  <v-row syyle="height: 90px" justify="center">
    <v-col cols=11>
      <v-card :color="color" dark>
        <v-card-title class="headline" v-text="title"></v-card-title>
        {{ description }}
        <v-card-actions>
          <v-btn v-on:click="deleteTask">完了</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    color: String,
    title: String,
    description: String,
    id: String,
  },
  methods: {
    deleteTask(){
      this.$store.dispatch('deleteTask', this.id)
    },
  },
}
</script>