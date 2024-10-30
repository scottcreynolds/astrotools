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
    <h1 class="text-h1">Carbon (Vue Native)</h1>
    <div id="gravity">
      <h2 class="text-h2">Kepler's Third Law</h2>
      <div>
        <cv-text-input
          label="Distance in AU"
          v-model="semimajor"
        ></cv-text-input>
        <cv-button kind="primary" default="Primary" @click="calc"
          >Calculate Orbital Period</cv-button
        >
      </div>
    </div>
  </main>
</template>
