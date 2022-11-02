<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-grid>
          <ion-row>
            <ion-col>9:41</ion-col>
            <ion-col></ion-col>
            <ion-col>
              <ion-icon :icon="batteryFull" />
              <ion-icon :icon="wifi" />
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
            <ion-grid>
              <ion-row>
                <ion-col>
                  <ion-title class="ion-float-left">Kolam</ion-title>
                </ion-col>
                <ion-col size="1">
                  <ion-icon src="/assets/icon/Sorting.svg"></ion-icon>
                </ion-col>
                <ion-col size="1.1">
                  <ion-icon src="/assets/icon/Vector.svg"></ion-icon>
                </ion-col>
              </ion-row>
            </ion-grid>
        <div>
          <ion-card class="box">
            <ion-card-header>
              <div class="cardhead">
                <ion-card-title class="abjad">Alpha</ion-card-title>
                <p class="actv">Aktif</p>
              </div>
              <div class="garis"></div>
            </ion-card-header>

            <ion-card-content>
              <ion-grid>
                <ion-row class="ion-justify-content-start">
                  <ion-col size="1">
                    <ion-icon src="/assets/icon/Calendar.svg"></ion-icon>
                  </ion-col>
                  <ion-col size="auto">
                    01-09-2022
                  </ion-col>
                </ion-row>
                <ion-row class="ion-justify-content-start">
                  <ion-col size="1">
                    <ion-icon src="/assets/icon/Timesheet.svg"></ion-icon>
                  </ion-col>
                  <ion-col size="auto">
                    90 Hari
                  </ion-col>
                </ion-row>
                <ion-row class="ion-justify-content-start">
                  <ion-col size="1">
                    <ion-icon src="assets/icon/Whole_Fish.svg"></ion-icon>
                  </ion-col>
                  <ion-col size="auto">
                    200 Ekor
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-card-content>
          </ion-card>

          <ion-card class="box">
            <ion-card-header>
              <div class="cardhead">
                <ion-card-title class="abjad">Bravo</ion-card-title>
                <p class="noactv">Tidak Aktif</p>
              </div>
              <div class="garis"></div>
            </ion-card-header>

            <ion-card-content>
              <ion-grid>
                <ion-row class="ion-justify-content-start">
                  <ion-col size="1">
                    <ion-icon src="assets/icon/Calendar.svg"></ion-icon>
                  </ion-col>
                  <ion-col size="auto">
                    01-09-2022
                  </ion-col>
                </ion-row>
                <ion-row class="ion-justify-content-start">
                  <ion-col size="1">
                    <ion-icon src="assets/icon/Timesheet.svg"></ion-icon>
                  </ion-col>
                  <ion-col size="auto">
                    90 Hari
                  </ion-col>
                </ion-row>
                <ion-row class="ion-justify-content-start">
                  <ion-col size="1">
                    <ion-icon src="assets/icon/Whole_Fish.svg"></ion-icon>
                  </ion-col>
                  <ion-col size="auto">
                    200 Ekor
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-card-content>
          </ion-card>

          <ion-card class="box">
            <ion-card-header>
              <div class="cardhead">
                <ion-card-title class="abjad">Charlie</ion-card-title>
                <p class="actv">Aktif</p>
              </div>
              <div class="garis"></div>
            </ion-card-header>

            <ion-card-content>
              <ion-grid>
                <ion-row class="ion-justify-content-start">
                  <ion-col size="1">
                    <ion-icon src="assets/icon/Calendar.svg"></ion-icon>
                  </ion-col>
                  <ion-col size="auto">
                    01-09-2022
                  </ion-col>
                </ion-row>
                <ion-row class="ion-justify-content-start">
                  <ion-col size="1">
                    <ion-icon src="assets/icon/Timesheet.svg"></ion-icon>
                  </ion-col>
                  <ion-col size="auto">
                    90 Hari
                  </ion-col>
                </ion-row>
                <ion-row class="ion-justify-content-start">
                  <ion-col size="1">
                    <ion-icon src="assets/icon/Whole_Fish.svg"></ion-icon>
                  </ion-col>
                  <ion-col size="auto">
                    200 Ekor
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-card-content>
          </ion-card>

          <ion-card class="box">
            <ion-card-header>
              <div class="cardhead">
                <ion-card-title class="abjad">Delta</ion-card-title>
                <p class="actv">Aktif</p>
              </div>
              <div class="garis"></div>
            </ion-card-header>

            <ion-card-content>
              <ion-grid>
                <ion-row class="ion-justify-content-start">
                  <ion-col size="1">
                    <ion-icon src="assets/icon/Calendar.svg"></ion-icon>
                  </ion-col>
                  <ion-col size="auto">
                    01-09-2022
                  </ion-col>
                </ion-row>
                <ion-row class="ion-justify-content-start">
                  <ion-col size="1">
                    <ion-icon src="assets/icon/Timesheet.svg"></ion-icon>
                  </ion-col>
                  <ion-col size="auto">
                    90 Hari
                  </ion-col>
                </ion-row>
                <ion-row class="ion-justify-content-start">
                  <ion-col size="1">
                    <ion-icon src="assets/icon/Whole_Fish.svg"></ion-icon>
                  </ion-col>
                  <ion-col size="auto">
                    200 Ekor
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-card-content>
          </ion-card>

          <ion-card class="box">
            <ion-card-header>
              <div class="cardhead">
                <ion-card-title class="abjad">Echo</ion-card-title>
                <p class="actv">Aktif</p>
              </div>
              <div class="garis"></div>
            </ion-card-header>

            <ion-card-content>
              <ion-grid>
                <ion-row class="ion-justify-content-start">
                  <ion-col size="1">
                    <ion-icon src="assets/icon/Calendar.svg"></ion-icon>
                  </ion-col>
                  <ion-col size="auto">
                    01-09-2022
                  </ion-col>
                </ion-row>
                <ion-row class="ion-justify-content-start">
                  <ion-col size="1">
                    <ion-icon src="assets/icon/Timesheet.svg"></ion-icon>
                  </ion-col>
                  <ion-col size="auto">
                    90 Hari
                  </ion-col>
                </ion-row>
                <ion-row class="ion-justify-content-start">
                  <ion-col size="1">
                    <ion-icon src="assets/icon/Whole_Fish.svg"></ion-icon>
                  </ion-col>
                  <ion-col size="auto">
                    200 Ekor
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-card-content>
          </ion-card>
        </div>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>
  
<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/vue';
import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/vue';
import { IonCol, IonGrid, IonRow } from '@ionic/vue';
import { batteryFull, wifi } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageSecond',
  components: { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonRow },
  setup() {
    return { batteryFull, wifi, }
  }
});
</script>
  
<style scoped>

#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}

h1 {
  font-size: 20px;
  font-weight: 600;
  margin-left: 30px;
}


@font-face {
  font-family: 'poppin';
  src: url(../theme/Poppins-Bold.ttf);
}

.box {
  padding: 10px 0px;
  background-color: white;
  color: black;
  margin: 30px;
  border-radius: 16px;
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
}

.cardhead {
  columns: 2;
}

.abjad {
  font-family: poppin;
  color: black;
  margin-top: 10px;
}

@font-face {
  font-family: 'popreg';
  src: url(../theme/Poppins-Regular.ttf);
}

.actv {
  font-family: popreg;
  font-size: 16px;
  margin-left: 70px;
  margin-bottom: -20px;
  background-color: #1B7C1A;
  text-align: center;
  vertical-align: middle;
  padding: 10px 5px;
  color: white;
  border-radius: 14px;
}

.noactv {
  font-family: popreg;
  font-size: 16px;
  margin-left: 70px;
  margin-bottom: -20px;
  background-color: #952229;
  text-align: center;
  vertical-align: middle;
  padding: 10px 5px;
  color: white;
  border-radius: 14px;
}

.garis {
  margin-top: 10px;
  border-bottom: black 2px solid;
}
</style>