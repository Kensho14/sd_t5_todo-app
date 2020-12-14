<template>    
    <v-main>
      <v-row dense>
        <v-col>
          <v-text-field v-on:click="mouseClickHandler" label="教科名を入力" v-model="inputName">
          </v-text-field>
          <v-text-field v-if="isClicked" label="曜日" v-model="inputYoubi">
          </v-text-field>
          <v-select　v-if="isClicked"
            label="曜日を選択"
          ></v-select>
          <v-btn v-if="isClicked" v-on:click="addTasks">登録</v-btn>
        </v-col>
        <v-col
          v-for="(item, i) in subjects"
          :key="i"
          cols="12"
        >
          <SubjectCard :color="item.color" :name="item.name" :youbi="item.youbi"></SubjectCard>
        </v-col>
      </v-row>
    </v-main>
</template>

<script>
import SubjectCard from '../components/SubjectCard';

export default {
  components: {
    SubjectCard,
  },

  data: () => ({
    isClicked: false,
    inputName: '',
    inputYoubi: 0,
  }),
  methods: {
    mouseClickHandler(){
      this.isClicked = true
    },
    addSubject() {
      this.$store.dispatch('addSubject', {
        color: '#1F7087',
        name: this.inputName,
        youbi: this.inputYoubi
      });
      this.inputName = '';
      this.inputYoubi = 0;
    },
  },
  computed: {
    subjects() {
      return this.$store.state.subjectList;
    }
  },
};
</script>
