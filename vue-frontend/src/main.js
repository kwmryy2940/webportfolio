import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Vuetify のインポートを追加 **********/
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// v-smooth-scroll のインポートを追加 **********/
import vueSmoothScroll from "vue3-smooth-scroll";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.use(vuetify);
app.use(vueSmoothScroll);
app.use(router);
app.mount("#app");
