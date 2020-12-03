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

  computed: {
    tasks() {
      return this.$store.state.tasks  
    }
  }

};
</script>
