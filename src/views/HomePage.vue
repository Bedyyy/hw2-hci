<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar class="navbar">
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
        <div>
          <ion-title class="title">Home</ion-title>
        </div>
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-title>Kolam</ion-card-title>
                <ion-card-subtitle>10</ion-card-subtitle>
              </ion-card-header>


            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-title>Kolam Aktif</ion-card-title>
                <ion-card-subtitle>8</ion-card-subtitle>
              </ion-card-header>


            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-title>Ikan Hidup</ion-card-title>
                <ion-card-subtitle>182 Ekor</ion-card-subtitle>
              </ion-card-header>


            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-title>Ikan Mati</ion-card-title>
                <ion-card-subtitle>89 Ekor</ion-card-subtitle>
              </ion-card-header>


            </ion-card>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-title>Panen 2022</ion-card-title>
                <ion-card-subtitle>109 Kg</ion-card-subtitle>
              </ion-card-header>


            </ion-card>
          </ion-col>
          <ion-col>
            <ion-card>
              <ion-card-header>
                <ion-card-title>Total Pakan</ion-card-title>
                <ion-card-subtitle>223 Kg</ion-card-subtitle>
              </ion-card-header>
            </ion-card>
          </ion-col>
        </ion-row>

        <h1>TOTAL BERAT IKAN</h1>

        <ion-row>

          <h1>
            <ion-card>
              <center>
                <img src="https://kawanpustaka.com/wp-content/uploads/2019/08/lele.jpg" />
              </center>
              <ion-card-header>
                <head-title>Lele</head-title>
                <ion-card-title>
                  <blue>200kg</blue>
                </ion-card-title>
              </ion-card-header>
            </ion-card>
          </h1>

          <h1>
            <ion-card>
              <center>
                <img
                  src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//99/MTA-24168843/tidak_ada_merk_ikan_nila_merah_full01_m2ei90vb.jpg" />
              </center>
              <ion-card-header>
                <head-title>Nila Merah</head-title>
                <ion-card-title>
                  <blue>200kg</blue>
                </ion-card-title>
              </ion-card-header>
            </ion-card>
          </h1>
        </ion-row>
        <h1>KUALITAS AIR</h1>
        <ion-row>
          <h1>
            <ion-card>
              <ion-card-header>
                <h2>pH</h2>
                <br>
                <subtitle>Normal <blue>6 Kolam</blue>
                </subtitle><br>
                <subtitle>Abnormal <blue>6 Kolam</blue>
                </subtitle>
              </ion-card-header>
            </ion-card>
          </h1>

          <h1>
            <ion-card>
              <ion-card-header>
                <h2>DO</h2>
                <br>
                <subtitle>Normal <blue> 6 Kolam</blue>
                </subtitle><br>
                <subtitle>Abnormal <blue> 6 Kolam</blue>
                </subtitle>
              </ion-card-header>
            </ion-card>
          </h1>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonCol, IonGrid, IonRow } from '@ionic/vue';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import { IonPage, IonContent, IonIcon } from '@ionic/vue';
import { batteryFull, wifi } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: { IonCol, IonGrid, IonRow, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonPage, IonIcon },
  setup() {
    return { batteryFull, wifi, }
  }
});
</script>

<style scoped>
* {
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  font-size: 20px;
  font-weight: 600;
  margin-left: 10px;
}

ion-card-title {
  font-size: 15px;
  color: black;
}

ion-card-subtitle {
  font-size: 20px;
  font-weight: 600;
  text-transform: capitalize;
  color: black;
}

subtitle {
  font-size: 15px;
  font-weight: 600;
  text-transform: capitalize;
  color: black;
}

ion-card {
  background-color: white;
  padding: 0;
  margin: 2px;
}

img {
  margin: auto;
  padding: 10px;
  height: 150px;
  width: 180px;
}

h2 {
  font-size: 20px;
  color: black;
  margin: 0;
  font-weight: 600;
}

blue {
  color: #2C96F1;
}

head-title {
  margin-top: 0;
  font-size: 25px;
  color: black;
}
</style>