<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>ToDo</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-row dense>
        <v-col>
          <v-text-field v-on:click="mouseClickHandler" label="タスクを入力" ref="inputTitle">
          </v-text-field>
          <v-text-field v-if="isClicked" label="タスク詳細" ref="inputDetail">
          </v-text-field>
          <v-select　v-if="isClicked"
            label="科目を選択"
          ></v-select>
          <v-btn v-if="isClicked" v-on:click="addTasks">登録</v-btn>
        </v-col>
        <v-col
          v-for="(item, i) in tasks"
          :key="i"
          cols="12"
        >
          <TaskCard :color="item.color" :title="item.title" :description="item.desc"></TaskCard>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import TaskCard from './components/TaskCard';

export default {
  name: 'App',

  components: {
    TaskCard,
  },

  data: () => ({
    isClicked: false,
  }),
  methods: {
    mouseClickHandler(){
      this.isClicked = true
    },
    addTasks() {
      var inputTitle = this.$refs.inputTitle
      var inputDetail = this.$refs.inputDetail
      this.tasks.push({
        color: '#1F7087',
        title: inputTitle.title,
        desc: inputDetail.desc
      })
    },
  },
  computed: {
    tasks() {
      return this.$store.state.tasks  
    }
  },

};
</script>
