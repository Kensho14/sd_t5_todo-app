<template>
  <v-container>
  <v-card :color="color" height="100" dark>
    <v-row>
      <v-col cols="12" md>
        <v-card-title class="headline">
          {{name}}
        </v-card-title>
      </v-col>
      <v-col cols="12" md>
        <v-card-title class="headline">
          {{youbiText}}
        </v-card-title>
      </v-col>

      <v-col cols="12" md>
      <v-card-actions>
        <v-spacer></v-spacer>
          <v-btn v-on:click="deleteSubject">削除</v-btn>
      </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    color: String,
    name: String,
    youbi: Number,
    id: String,
  },
  computed: {
    youbiText() {
      return [ "日", "月", "火", "水", "木", "金", "土" ][this.youbi] ;
    },
    colorText() {
      return this.color;
    }
  },
  methods: {
    deleteSubject(){
      this.$store.dispatch('deleteSubject', this.id)
    },
  },
}
</script>