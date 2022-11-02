<template>
    <ion-page>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="HomePage" href="/tabs/home">
            <ion-icon :icon="home" />
          </ion-tab-button>
          <ion-tab-button tab="PageSecond" href="/tabs/page2">
            <ion-icon :icon="apps" />
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
  import { home, apps } from 'ionicons/icons';
  
  export default defineComponent({
    name: 'TabBar',
    components: {IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
    setup() {
      return {
        home, 
        apps,
      }
    }
  });
  </script>