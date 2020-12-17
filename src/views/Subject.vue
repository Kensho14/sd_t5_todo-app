<template>    
    <v-main>
      <v-row dense>
        <v-col>
          <v-text-field v-on:click="mouseClickHandler" label="教科名を入力" v-model="inputName">
          </v-text-field>
          
          <v-select　v-if="isClicked"
            label="曜日を選択"
            :items="youbi"
            item-text="name"
            item-value="val"
            v-model="inputYoubi"
            dense
          ></v-select>

          <v-menu>
            <template v-slot:activator="{ on, atters }">
              <v-text-field 
              label="色を選択" 
              v-model="inputColor"
              v-on="on"
              v-bind="atters"
              ></v-text-field>
            </template>
            <v-color-picker
              v-model="inputColor"
              dot-size="25"
              swatches-max-height="200"
              hide-inputs
            ></v-color-picker>
          </v-menu>

          <v-btn v-if="isClicked" v-on:click="addSubject">登録</v-btn>
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
    inputColor: '',
    //youbiVal:0,
    inputYoubi: 0,
    /*
    youbi: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日']
    */
    youbi: [
      { name: '日曜日', val: 0 },
      { name: '月曜日', val: 1 },
      { name: '火曜日', val: 2 },
      { name: '水曜日', val: 3 },
      { name: '木曜日', val: 4 },
      { name: '金曜日', val: 5 },
      { name: '土曜日', val: 6 },    
    ],
    
  }),
  
  methods: {
    mouseClickHandler(){
      this.isClicked = true
    },
    addSubject() {
      this.$store.dispatch('addSubject', {
        color: this.inputColor,
        name: this.inputName,
        youbi: this.inputYoubi,
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
