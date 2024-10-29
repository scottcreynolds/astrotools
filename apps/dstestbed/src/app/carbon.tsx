import React, { ReactElement, useRef } from 'react';
import { Button, TextInput } from '@carbon/react';
import TextField from '@mui/material/TextField';
import { calculatePeriod } from '../lib/calcs';
export function Carbon(): ReactElement {
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
          <TextInput
            labelText="Semimajor Axis (AU):"
            type="number"
            id="semimajor"
            placeholder="e.g. 1 for Earth"
            ref={semiMajorRef}
          ></TextInput>
        </div>
        <Button onClick={calculateOrbit}>Calculate Orbital Period</Button>
      </div>
    </>
  );
}
