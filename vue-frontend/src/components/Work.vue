<template>
  <div id="work">
    <v-container fluid class="d-flex align-center justify-center bg-primary">
      Works
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="3">
          <v-card
            elevation="2"
            href="https://kwmryy2940.github.io/timerapp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img width="150px" src="../assets/img/work/timer.PNG" />
            <v-card-title>Timer App</v-card-title>
            <v-card-text> シンプルなタイマーアプリです。</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card
            elevation="2"
            href="https://kwmryy2940.github.io/bingo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img width="150px" src="../assets/img/work/bingo.png" />
            <v-card-title>Bingo</v-card-title>
            <v-card-text> 1～75の範囲でビンゴができるアプリです。</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
