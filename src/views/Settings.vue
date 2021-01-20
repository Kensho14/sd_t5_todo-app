<template>
  <v-main>
    <v-container>
      <v-checkbox :input-value="notifiEnable" @change="updateEnable" :label="`通知： ${(notifiEnable ? '有効' : '無効')}`"></v-checkbox>
      <p>前日の通知時間： <input type="time" :value="notifiTime" @input="updateTime"></p>
      <v-btn @click="clickBtn">通知をテストする</v-btn>
    </v-container>
  </v-main>
</template>

<script>
export default {
  methods: {
    updateEnable(val){
      this.$store.dispatch('setEnableNotification', (val ? true:false));
    },
    updateTime(event){
      this.$store.dispatch('setNotificationTime', event.target.value);
    },
    clickBtn(){
      console.log('click btn!');
      // 通知のテスト
      Push.create('通知のテスト！');
    }
  },
  computed: {
    notifiEnable() {
      return this.$store.state.enableNotification;
    },
    notifiTime() {
      return this.$store.state.notificationTime;
    }
  }
}
</script>