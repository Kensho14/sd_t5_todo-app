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
    tasks: [
      {
        color: '#1F7087',
        title: 'ソフトウェア開発演習',
        desc: 'vue.jsを使いこなす。',
      },
      {
        color: '#952175',
        title: 'OS',
        desc: 'ex1.11',
      },
      {
        color: '#1F7087',
        title: 'test',
        desc: 'testtest'
      }
    ],
  }),
  mounted(){
    this.$store.commit('setTasks', tasks);
  }
};
</script>
