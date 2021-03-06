// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {
  ReactInstance,
  Surface,
  } from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const width = 4500
  const height = 4000
  const surface = r360.getDefaultSurface()
  // surface.setShape(Surface.SurfaceShape.Flat);
  surface.resize(width, height)

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('Hello360', { imageUrl: r360.getAssetURL('pimpin.png'), width: width, height: height}),
    surface
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
