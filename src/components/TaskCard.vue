<template>
　<v-container :fluid="true">
  <v-card :color="color" dark>
    <v-row no-gutters>
      <v-col cols="6" sm="6" md="6" lg="6" xl="6">
        <v-card-title class="headline" v-text="title"></v-card-title>
      </v-col>
      <v-col cols="2" sm="2" md="2" lg="2" xl="2"></v-col>
      <v-col cols="4" sm="4" md="4" lg="4" xl="4"
        class="text-right">
        <v-card-text>
          <div>
            <p class="font-weight-black">
              {{youbiText}}：{{subjectName}}
            </p>
          </div>
        </v-card-text>
      </v-col>
        <v-row>
          <v-col>
            <v-card-text>
              <div>
                <p class="font-weight-medium">
                  {{ description }}
                </p>
              </div>
            </v-card-text>
          </v-col>
          <v-card-actions>
            <v-col class="text-right">
              <v-btn v-on:click="deleteTask">完了</v-btn>
            </v-col>
          </v-card-actions>
        </v-row>
      </v-col>
    </v-row>
    </v-card>
　</v-container>
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