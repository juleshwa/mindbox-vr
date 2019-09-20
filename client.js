// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface } from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options
  });

  introSurface = new Surface(
    500,
    400,
    Surface.SurfaceShape.Cylinder
  );


  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('mindbox_vr', {
      /* initial props */
    }),
    // r360.getDefaultSurface(),
    introSurface
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('sample.jpg'));
  // r360.compositor.setBackground(null);
}

window.React360 = { init };
