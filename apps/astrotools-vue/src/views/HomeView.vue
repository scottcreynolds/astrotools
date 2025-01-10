<script setup lang="ts">
import { ref } from 'vue';
import { calculatePeriod } from '../lib/calcs';

const semimajor = ref('');

function calc() {
  const a = semimajor.value;
  console.log(a);
  console.log(calculatePeriod(a));
}
</script>

<template>
  <main>
    <h1 class="text-h1">Vuetify</h1>
    <div id="gravity">
      <h2 class="text-h2">Kepler's Third Law</h2>
      <div>
        <v-text-field type="number" v-model="semimajor"></v-text-field>
        <v-btn color="tertiary" variant="tonal" @click="calc"
          >Calculate Orbital Period</v-btn
        >
      </div>
    </div>
  </main>
</template>
