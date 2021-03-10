import { createGlobalStyle } from 'styled-components';

export const LeafletStyles = createGlobalStyle`
  .leaflet-container {
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  .leaflet-control-attribution {
    display: none;
  }
`;
