<script setup>
import TopPage from "../components/TopPage.vue";
import Skill from "../components/Skill.vue";
import Work from "../components/Work.vue";
import { HeaderComponent } from "../components/Header.vue";
import { FooterComponent } from "../components/Footer.vue";
</script>

<template>
  <div class="home">
    <v-app>
      <HeaderComponent />
      <v-main>
        <TopPage />
        <Skill />
        <Work />
      </v-main>
      <FooterComponent />
    </v-app>
  </div>
</template>
