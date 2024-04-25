<template>
  <div id="header">
    <v-app-bar color="primary" app>
      <v-app-bar-title>My portofolio</v-app-bar-title>
      <v-btn href="#top" v-smooth-scroll>Top</v-btn>
      <v-btn href="#skill" v-smooth-scroll>Skill</v-btn>
      <v-btn href="#work" v-smooth-scroll>Work</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export { default as HeaderComponent } from "./Header.vue";
</script>
