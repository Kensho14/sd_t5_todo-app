<template>    
    <v-main>
      <v-card width="70vw">
        <v-expansion-panels>
          
          <v-expansion-panel>
            <v-expansion-panel-header hide-actions>
              <v-toolbar
                v-on:click="mouseClickHandler"
                flat
                color="blue-grey"
                dark
              ><v-toolbar-title>教科カードを追加する＋</v-toolbar-title>
              </v-toolbar>
            </v-expansion-panel-header>

            <v-card-text>
                <v-expansion-panel-content>

                  <v-text-field  v-if="isClicked"
                    filled  
                    label="教科名を入力" 
                    v-model="inputName">
                  </v-text-field>
          
                  <v-row>
                    <v-col cols="3">
                    <v-select　v-if="isClicked"
                      label="曜日を選択"
                      :items="youbi"
                      item-text="name"
                      item-value="val"
                      v-model="inputYoubi"
                      filled  
                      dense
                    ></v-select>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="3">
                      <v-menu>
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
                  </v-row>

                  <v-row
                    justify="end">
                    <v-btn v-if="isClicked" v-on:click="addSubject">登録</v-btn>
                  </v-row>
                
                </v-expansion-panel-content>

              </v-card-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
        <v-col
          v-for="(item, i) in subjects"
          :key="i"
          cols="12"
        >
          <SubjectCard :color="item.color" :name="item.name" :youbi="item.youbi"></SubjectCard>
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
      if(this.isClicked==false){
        this.isClicked = true
      }
      else{this.isClicked = false}
      
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
