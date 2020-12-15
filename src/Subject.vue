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
          <v-text-field v-on:click="mouseClickHandler" label="教科名を入力" v-model="inputName">
          </v-text-field>
          <v-text-field v-if="isClicked" label="曜日" v-model="inputYoubi">
          </v-text-field>
          <v-select　v-if="isClicked"
            :items="youbi"
            label="曜日を選択"
            dense
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
    inputName: '',
    inputYoubi: 0,
    youbi: ['月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日', '日曜日'],
  }),
  methods: {
    mouseClickHandler(){
      this.isClicked = true
    },
    addSubject() {
      this.$store.commit('addSubject', {
        color: '#1F7087',
        name: this.inputName,
        youbi: this.inputYoubi
      });
      this.inputTitle = '';
      this.inputYoubi = 0;
    },
  },
  computed: {
    subject() {
      return this.$store.state.subjectList
    }
  },
};
</script>
