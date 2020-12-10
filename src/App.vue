<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon v-on:click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>ToDo</v-toolbar-title>
      
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      ><v-list-item-group
          v-model="group"
          active-class="primary--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Subject</v-list-item-title>
          </v-list-item>

        </v-list-item-group>

      </v-list>
    </v-navigation-drawer>
    
    <v-main>
      <v-row dense>
        <v-col>
          <v-text-field v-on:click="mouseClickHandler" label="タスクを入力" v-model="inputTitle">
          </v-text-field>
          <v-text-field v-if="isClicked" label="タスク詳細" v-model="inputDetail">
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
//import SubjectCard from './components/SubjectCard';

export default {
  name: 'App',
  components: {
    TaskCard,
    //SubjectCard,
  },

  data: () => ({
    isClicked: false,
    drawer: false,
    group: null,
  }),
  methods: {
    mouseClickHandler(){
      this.isClicked = true
    },
  },
  data: () => ({
    isClicked: false,
    inputTitle: '',
    inputDetail: '',
  }),
  methods: {
    mouseClickHandler(){
      this.isClicked = true
    },
    addTasks() {
      this.$store.commit('addTask', {
        color: '#1F7087',
        title: this.inputTitle,
        desc: this.inputDetail
      });
      this.inputTitle = '';
      this.inputDetail = '';
    },
  },
  computed: {
    tasks() {
      return this.$store.state.tasks  
    },
    subject() {
      return this.$store.state.subject
    }
  },
};
</script>
