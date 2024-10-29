import React, { ReactElement, useRef } from 'react';
import { PrimaryButton, TextField } from '@fluentui/react';
import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
import SlButton from '@shoelace-style/shoelace/dist/react/button/index.js';
import SlInput from '@shoelace-style/shoelace/dist/react/input/index.js';

import { calculatePeriod } from '../lib/calcs';
setBasePath(
  'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.18.0/cdn/'
);

export function Shoelace(): ReactElement {
  const semiMajorRef = useRef();

  const calculateOrbit = () => {
    const semimajor = semiMajorRef.current.value;
    console.log(semimajor);
    const p = calculatePeriod(semimajor);
    console.log(p);
    return p;
  };
  return (
    <>
      <div>Material UI</div>
      <div id="gravity">
        <h2>Kepler's Third Law</h2>
        <div>
          <SlInput
            label="Semimajor Axis (AU):"
            type="number"
            id="semimajor"
            placeholder="e.g. 1 for Earth"
            ref={semiMajorRef}
          ></SlInput>
        </div>
        <SlButton variant="danger" onClick={calculateOrbit}>
          Calculate Orbital Period
        </SlButton>
      </div>
    </>
  );
}
