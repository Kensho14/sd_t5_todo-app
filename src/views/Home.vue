<template>
    <v-main>
      <v-row dense>
        <v-col>
          <v-row justify="center" >
          <v-card 
          color="white"
          height="10%"
          width="90%"
          >
            <v-card-actions>
              <v-row class="flex-column" align="center">
                <v-col>
              <v-text-field v-on:click="isClicked = true" label="タスクを入力" v-model="inputTitle"></v-text-field>
              <v-text-field v-if="isClicked" label="タスク詳細" v-model="inputDetail"></v-text-field>
              <v-select　v-if="isClicked"
                label="科目を選択"
                :items="subject"
                item-text="name"
                item-value="id"
                v-model="inputId"
              ></v-select>
                  <v-btn class="float-right" v-if="isClicked" v-on:click="addTasks();">登録</v-btn>
                  <v-btn class="float-right" v-if="isClicked" v-on:click="isClicked = false">閉じる</v-btn>
                    
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
          </v-row>
        </v-col>
        </v-row>
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
    // mouseClickHandler(){
    //   this.isClicked = !this.isClicked;
    // },
    addTasks() {
      this.$store.dispatch('addTask', {
        subjectId: this.inputId,
        title: this.inputTitle,
        desc: this.inputDetail
      });
      this.inputTitle = '';
      this.inputDetail = '';
      this.isClicked = false;
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