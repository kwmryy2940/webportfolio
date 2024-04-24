<script setup>
import { ref } from "vue";

const drawer = ref(false); // ナビゲーションドロワーの表示を制御する変数

const navigationItems = ref([
  { text: "Work", icon: "mdi-briefcase" },
  { text: "Skill", icon: "mdi-pen" },
]);
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-subheader>MENU</v-list-subheader>
        <v-list-item
          v-for="(item, i) in navigationItems"
          :key="i"
          :value="item"
          color="primary"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.text"></v-list-item-title>
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
