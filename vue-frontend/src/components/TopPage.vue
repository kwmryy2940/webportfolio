<template>
  <div id="top">
    <v-container
      fluid
      fill-height
      class="d-flex align-center justify-center home_main_content"
      style="height: 1000px"
    >
      <v-row>
        <v-col class="home_main_content_text">
          <p>Welcome to Yuya's website.</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.home_main_content {
  background: url("../assets/img/home_background.jpg");

}

.home_main_content_text{
  color: white;
    text-align: left;
    font-size: 40px;
    font-weight: bold;
}

</style>
