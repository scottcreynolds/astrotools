import './app.module.css';

import NxWelcome from './nx-welcome';
import { Carbon } from './carbon';
import { MUI } from './mui';

import { Route, Routes, Link } from 'react-router-dom';
import { Fluent } from './fluent';
import { Shoelace } from './shoelace';

export function App() {
  return (
    <div>
      {/* <NxWelcome title="dstestbed" /> */}

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mui">MUI</Link>
          </li>
          <li>
            <Link to="/carbon">Carbon</Link>
          </li>
          <li>
            <Link to="/fluent">Fluent</Link>
          </li>
          <li>
            <Link to="/shoelace">Shoelace</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route path="/mui" element={<MUI />} />
        <Route path="/carbon" element={<Carbon />} />
        <Route path="/fluent" element={<Fluent />} />
        <Route path="/shoelace" element={<Shoelace />} />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
