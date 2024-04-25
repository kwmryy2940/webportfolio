<script setup>
import { ref } from "vue";

const drawer = ref(false); // ナビゲーションドロワーの表示を制御する変数
</script>

<template>
  <v-app id="top">
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-subheader>MENU</v-list-subheader>
        <v-list-item
          color="primary"
          prepend-icon="mdi-pen"
          title="Skill"
          href="#skill"
          v-smooth-scroll
        >
        </v-list-item>

        <v-list-item
          color="primary"
          prepend-icon="mdi-briefcase"
          title="Work"
          href="#work"
          v-smooth-scroll
        >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :order="order"
      color="primary"
      :elevation="2"
      scroll-behavior="inverted hide"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>My portofolio</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid class="d-flex align-center justify-center">
        Main Contents
      </v-container>
      <v-container style="height: 1000px"></v-container>
    </v-main>
  </v-app>
</template>
