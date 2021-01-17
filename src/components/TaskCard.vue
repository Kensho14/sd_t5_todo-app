<template>
  <v-row syyle="height: 100px" justify="center"> 
    <v-col cols=11>
        <v-card :color="color" dark>
          <v-col cols=6>
          <v-card-title class="headline" v-text="title"></v-card-title>
          {{ description }}
          </v-col>
          <v-card-actions>
            <v-btn v-on:click="deleteTask">Done</v-btn>
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