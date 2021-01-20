<template>
  <v-main>
    <v-container>
      <v-checkbox :input-value="notifiEnable" @change="updateEnable" :label="`通知： ${(notifiEnable ? '有効' : '無効')}`"></v-checkbox>
      <p>前日の通知時間： <input type="time" :value="notifiTime" @input="updateTime"></p>
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