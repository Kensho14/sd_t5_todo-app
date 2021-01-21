<template>
    <v-main>
      <v-card width="70vw">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header hide-actions>
              <v-toolbar
                v-on:click="mouseClickopen"
                flat
                color="blue-grey"
                dark
              ><v-toolbar-title>タスクを入力＋</v-toolbar-title>
              </v-toolbar>
            </v-expansion-panel-header>
            <v-card-text>
              <v-expansion-panel-content>
      <v-row dense>
        <v-col>
          <v-text-field v-if="isClicked" label="タスクを入力" v-model="inputTitle">
          </v-text-field>

          <v-text-field v-if="isClicked" label="タスク詳細" v-model="inputDetail">
          </v-text-field>

          <v-select　v-if="isClicked"
            label="科目を選択"
            :items="subject"
            item-text="name"
            item-value="id"
            v-model="inputId"
          ></v-select>

          <v-btn v-if="isClicked" v-on:click="addTasks();mouseClickclose()">登録</v-btn>

        </v-col>
        </v-row>
        </v-expansion-panel-content>

      </v-card-text>
      </v-expansion-panel>
      </v-expansion-panels>
        </v-card>
        <v-col
          v-for="(item, i) in tasks"
          :key="i"
          cols="12"
        >
          <TaskCard :color="getSubjectData(item.subjectId).color" :title="item.title" :description="item.desc" :id="item.id" :subjectName="getSubjectData(item.subjectId).name" :subjectYoubi="getSubjectData(item.subjectId).youbi"></TaskCard>
        </v-col>
    </v-main>
</template>

<script>
import TaskCard from '../components/TaskCard';

export default {
  components: {
    TaskCard,
  },
  data: () => ({
    isClicked: false,
    inputTitle: '',
    inputDetail: '',
    inputId: '',
  }),
  methods: {
    mouseClickopen(){
      this.isClicked = true;
    },
    mouseClickclose(){
      this.isClicked = false;
    },
    addTasks() {
      this.$store.dispatch('addTask', {
        subjectId: this.inputId,
        title: this.inputTitle,
        desc: this.inputDetail
      });
      this.inputTitle = '';
      this.inputDetail = '';
    },
    getSubjectData(id) {
      const a = this.subject.filter(x => x.id == id);
      if(a.length == 1){
        return a[0];
      }else{
        console.error('教科データの取得に失敗しました！');
        return {};
      }
    }
  },
  computed: {
    tasks() {
      return this.$store.state.tasks;
    },
    subject() {
      return this.$store.state.subjectList;
    }
  },
};
</script>