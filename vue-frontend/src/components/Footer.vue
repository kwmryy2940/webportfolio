<template>
  <div id="footer">
    <v-footer class="bg-grey-lighten-1" absolute app>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="item in items"
          :href="'#' + item.link"
          class="mx-2"
          color="white"
          rounded="xl"
          variant="text"
          v-smooth-scroll
        >
          {{ item.text }}
        </v-btn>
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>Yuya.K</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  { text: "Top", link: "top" },
  { text: "Skill", link: "skill" },
  { text: "Work", link: "work" },
]);
</script>

<script>
export { default as FooterComponent } from "./Footer.vue";
</script>
