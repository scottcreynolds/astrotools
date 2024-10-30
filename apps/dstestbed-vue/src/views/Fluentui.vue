<script setup lang="ts">
import '../lib/CurrentDate';

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
    <h1 class="text-h1">Fluent UI (Web Components)</h1>
    <div id="gravity">
      <h2 class="text-h2">Kepler's Third Law</h2>
      <current-date></current-date>

      <fluent-text-field
        type="number"
        appearance="outline"
        v-model="semimajor"
      />
      <fluent-button appearance="accent" @click="calc">
        Calculate Orbital Period
      </fluent-button>
    </div>
  </main>
</template>
