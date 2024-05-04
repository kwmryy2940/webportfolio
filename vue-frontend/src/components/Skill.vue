<template>
  <div id="skill">
    <v-container
      fluid
      class="d-flex align-center justify-center skill_contents_text"
    >
      Skill
    </v-container>

    <!-- フロントエンドスキルのコンテンツ -->
    <v-container fluid class="d-flex align-center justify-center">
      <v-sheet class="frontend_skill_contents">
        <p
          class="d-flex align-center justify-center frontend_skill_contents_text"
        >
          FrontEnd
        </p>
        <v-row>
          <v-col md-5
            ><img src="../assets/img/vuejs.png" width="250px" height="250px"
          /></v-col>
          <v-col md-5>iamge2</v-col>
          <v-col md-5>image3</v-col>
        </v-row>
      </v-sheet>
    </v-container>

    <!-- バックエンドスキルのコンテンツ -->
    <v-container fluid class="d-flex align-center justify-center">
      <v-sheet class="backend_skill_contents">
        <p
          class="d-flex align-center justify-center backend_skill_contents_text"
        >
          BackEnd
        </p>
        <v-row>
          <v-col md-1
            ><img src="../assets/img/clang.png" width="150px" height="160px"
          /></v-col>
          <v-col md-1
            ><img src="../assets/img/cpp.png" width="150px" height="160px"
          /></v-col>
          <v-col md-1
            ><img src="../assets/img/csharp.png" width="150px" height="160px"
          /></v-col>
          <v-col md-1
            ><img src="../assets/img/spring.png" width="300px" height="90px"
          /></v-col>
        </v-row>
      </v-sheet>
    </v-container>

    <!--その他のスキルのコンテンツ -->
    <v-container fluid class="d-flex align-center justify-center">
      <v-sheet class="other_skill_contents">
        <p
          class="d-flex align-center justify-center other_skill_contents_text"
        >
        Other
        </p>
        <v-row>
          <v-col md-5
            ><img src="../assets/img/postgres.png" width="150px" height="160px"
          /></v-col>
          <v-col md-5
            ><img
              src="../assets/img/git_octcat.png"
              width="150px"
              height="130px"
          /></v-col>
          <v-col md-5
            ><img
              src="../assets/img/dotnetframework.png"
              width="250px"
              height="150px"
          /></v-col>
        </v-row>
      </v-sheet>
    </v-container>
  </div>
</template>

<style scoped>
.frontend_skill_contents {
  background-color: red;
}
.backend_skill_contents {
  background-color: blue;
}
.other_skill_contents {
  background-color: green;
}
</style>
