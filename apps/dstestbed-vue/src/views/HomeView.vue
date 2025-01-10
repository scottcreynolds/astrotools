<script setup lang="ts">
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import { Dt } from 'ornl-ds';

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
    <div>Shoelace (Web Components)</div>
    <div id="gravity">
      <text-h2>Kepler's Third Law</text-h2>
      <Button label="hello from ornl" />
      <div>
        <sl-input type="number" v-model="semimajor" />
        <sl-button variant="default"> Calculate Orbital Period </sl-button>
        <sl-button @click="calc" variant="primary">Test</sl-button>
      </div>
    </div>
  </main>
</template>
