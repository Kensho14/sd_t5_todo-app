<template>
  <v-container>
<<<<<<< HEAD
    <v-card :color="color" dark>
      <v-row>
        <v-col cols="4" sm="4" md="4" lg="4" xl="4">
          <v-card-title class="headline">
            {{name}}
          </v-card-title>
        </v-col>
        <v-col cols="4" sm="4" md="4" lg="4" xl="4">
          <v-card-title class="headline">
            {{youbiText}}
          </v-card-title>
        </v-col>
=======
  <v-card :color="color" height="70" dark>
    <v-row syyle="height: 100x">
      <v-col cols="4" sm="4" md="4" lg="4" xl="4">
        <v-card-title class="headline">
          {{name}}
        </v-card-title>
      </v-col>
      <v-col cols="4" sm="4" md="4" lg="4" xl="4">
        <v-card-title class="headline">
          {{youbiText}}
        </v-card-title>
      </v-col>
>>>>>>> 008b8c2431937ad19bd4e33cf464736e12a16b9b

        <v-row justify="center" align-content="center"> 
          <v-col cols="4" sm="4" md="4" lg="4" xl="4">
            <v-card-actions>
              <v-spacer></v-spacer>
                <v-btn v-on:click="deleteSubject">削除</v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
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