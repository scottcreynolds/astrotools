import React, { ReactElement, useRef } from 'react';
import { PrimaryButton, TextField } from '@fluentui/react';
import { calculatePeriod } from '../lib/calcs';
export function Fluent(): ReactElement {
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
          <TextField
            label="Semimajor Axis (AU):"
            type="number"
            id="semimajor"
            placeholder="e.g. 1 for Earth"
            ref={semiMajorRef}
          ></TextField>
        </div>
        <PrimaryButton type="hero" onClick={calculateOrbit}>
          Calculate Orbital Period
        </PrimaryButton>
      </div>
    </>
  );
}
