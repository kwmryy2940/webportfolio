<template>
  <div id="work" class="bg-secondary">
    <v-container fluid class="d-flex align-center justify-center bg-primary">
      Works
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12" sm="8" md="6" lg="4" xl="3">
          <v-card class="fill-height" elevation="2" href="#top">
            <v-img
              style="width: 100%"
              :height="150"
              :src="workImg1"
              contain
            ></v-img>
            <v-card-title>portofolio</v-card-title>
            <v-card-text
              >本ホームページです。
              <p>Vue3・Vuetifyの練習も兼ねて作りました。</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="8" md="6" lg="4" xl="3">
          <v-card
            class="fill-height"
            elevation="2"
            href="https://kwmryy2940.github.io/timerapp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-img
              style="width: 100%"
              :height="150"
              :src="workImg2"
              contain
            ></v-img>
            <v-card-title>Timer App</v-card-title>
            <v-card-text> シンプルなタイマーアプリです。</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="8" md="6" lg="4" xl="3">
          <v-card
            class="fill-height"
            elevation="2"
            href="https://kwmryy2940.github.io/bingo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-img
              style="width: 100%"
              :height="150"
              :src="workImg3"
              contain
            ></v-img>
            <v-card-title>Bingo</v-card-title>
            <v-card-text> 1～75の範囲でビンゴができるアプリです。</v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="8" md="6" lg="4" xl="3">
          <v-card
            class="fill-height"
            elevation="2"
            href="https://kwmryy2940.github.io/DreamDiary/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-img
              style="width: 150%"
              :height="150"
              :src="workImg4"
              contain
            ></v-img>
            <v-card-title>Dream Diary</v-card-title>
            <v-card-text>
              <p>見た夢を簡単に記録できるアプリです。</p>
              <p>
                保存先はブラウザのローカルストレージになるので、あまり大量の記録は保存できません。
              </p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="8" md="6" lg="4" xl="3">
          <v-card
            class="fill-height"
            elevation="2"
            href="https://kwmryy2940.github.io/animedb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-img
              style="width: 150%"
              :height="150"
              :src="workImg5"
              contain
            ></v-img>
            <v-card-title>アニメ検索</v-card-title>
            <v-card-text>
              <p>放送年・放送シーズン・タイトルをぼり込んでアニメを検索できるアプリです。</p>
              <p>
                作品情報はAnnict API、キャストやスタッフ情報はしょぼいカレンダーAPIを使用して取得しています。
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import imageSource1 from "../assets/img/work/portofolio.svg";
import imageSource2 from "../assets/img/work/timer.svg";
import imageSource3 from "../assets/img/work/bingo.svg";
import imageSource4 from "../assets/img/work/dreamdiary.svg"
import imageSource5 from "../assets/img/work/animedb.svg"

const workImg1 = imageSource1;
const workImg2 = imageSource2;
const workImg3 = imageSource3;
const workImg4 = imageSource4;
const workImg5 = imageSource5;
</script>
