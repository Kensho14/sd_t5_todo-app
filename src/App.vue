<template>
  <v-app>
    <!-- アプリバーとナビゲーションドロワーはアプリで共通（ページごとに書いたりしない） -->
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
      >
        <v-list-item v-on:click="goPage('/')">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item v-on:click="goPage('/subjects')">
          <v-list-item-icon>
            <v-icon>mdi-book</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Subject</v-list-item-title>
        </v-list-item>

        <v-list-item v-on:click="goPage('/settings')">
          <v-list-item-icon>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- ここにvue-routerによって，./views/Home.vue とかが流し込まれる。 -->
    <router-view/>

  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false,
  }),
  methods: {
    goPage(path){
      if (this.$route.path === path){
        console.log('current page');
        return;
      }
      console.log('go to '+path);
      this.$router.push({path: path});
    }
  },
  mounted() {
    this.$store.dispatch('loadStates');
  },
};
</script>