<template>    
    <v-main>
      <v-row justify="center" >
          <v-card 
          color="white"
          height="10%"
          width="90%"
          >
            <v-card-actions>
              <v-row class="flex-column" align-content="center">
                <v-col>
              <v-text-field v-on:click="isClicked = true" label="科目名を入力" v-model="inputName"></v-text-field>
                <!-- </v-col> -->
                <!-- <v-col  -->
                <v-col cols="4" sm="4" md="4" lg="4" xl="4">
                <v-select　v-if="isClicked"
                    label="曜日を選択"
                    :items="youbi"
                    item-text="name"
                    item-value="val"
                    v-model="inputYoubi"
                    filled  
                    dense
                ></v-select>
                <!-- </v-col>
                <v-col cols="4" sm="4" md="4" lg="4" xl="4"> -->
                <v-menu v-if="isClicked" top :close-on-content-click="false">
               <template v-slot:activator="{ on, attrs }">
                <v-textarea
                  label="色を選択" 
                  :background-color="inputColor"
                  auto-grow
                  outlined
                  single-line
                  rows="1"
                  row-height="12"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-textarea>
              </template>
              <v-color-picker 
                v-model="inputColor"
                dot-size="25"
                swatches-max-height="200"
                hide-inputs
              ></v-color-picker>
              </v-menu>
                </v-col>
                <!-- </v-col> -->
                <!-- <v-col> -->
                  <v-btn class="float-right" v-if="isClicked" v-on:click="addSubject()">登録</v-btn>
                  <v-btn class="float-right" v-if="isClicked" v-on:click="isClicked = false">閉じる</v-btn>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
          </v-row>
        <v-col
          v-for="(item, i) in subjects"
          :key="i"
          cols="12"
        >
          <SubjectCard :color="item.color" :name="item.name" :youbi="item.youbi" :id="item.id"></SubjectCard>
        </v-col>
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
    inputID: '',
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
    // mouseClickHandler(){
    //   this.isClicked = !this.isClicked;
    // },
    addSubject() {
      this.$store.dispatch('addSubject', {
        color: this.inputColor,
        name: this.inputName,
        youbi: this.inputYoubi,
        id: this.inputID,
      });
      this.inputName = '';
      this.inputYoubi = 0;
      this.inputID = '';
    },
  },
  computed: {
    subjects() {
      return this.$store.state.subjectList;
    }
  },
};
</script>
