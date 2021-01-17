<template>
  <v-row syyle="height: 90px" justify="center">
    <v-col cols=11>
      <v-card :color="color" dark>
        <v-row syyle="height: 90px" justify="center">
          <v-card-title class="headline" v-text="title"></v-card-title>
          <v-col class="text-right">
            {{youbiText}}：{{subjectName}}
          </v-col>
        </v-row>
        {{ description }}
        <v-card-actions>
          <v-col class="text-right">
            <v-btn v-on:click="deleteTask">完了</v-btn>
          </v-col>
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
    subjectName: String,
    subjectYoubi: Number,
  },
  methods: {
    deleteTask(){
      this.$store.dispatch('deleteTask', this.id);
    },
  },
  computed: {
    youbiText() {
      return [ "日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日" ][this.subjectYoubi];
    },
  },
}
</script>