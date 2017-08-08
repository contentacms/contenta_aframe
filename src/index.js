/**
 * @file index.js
 * Defines the ContentaAframe react component, and renders it against #root.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Scene, Entity } from 'aframe-react';

require('aframe');
require('./index.css');

// Load paths to assets.
const assets = {
  models: {
    layout: require('./assets/models/layout.dae'),
    bowl: require('./assets/models/bowl.dae'),
    stoveDoor: require('./assets/models/stove-door.dae')
  },
  images: {
    floor: require('./assets/images/floor.jpg'),
    skymap: require('./assets/images/sky.jpg')
  }
};

/**
 * Main ContentaAframe component.
 * {@inheritdoc}
 */
const ContentaAframe = () =>
  <Scene inspector="url: https://aframe.io/releases/0.4.0/aframe-inspector.min.js">
    <Entity primitive="a-assets">
      <img id="floor" src={assets.images.floor} />
      <img id="skymap" src={assets.images.skymap} />
      <a-asset-item id="layout" src={assets.models.layout} />
      <a-asset-item id="bowl" src={assets.models.bowl} />
      <a-asset-item id="stove-door" src={assets.models.stoveDoor} />
    </Entity>

    <Entity
      id="main__layout"
      collada-model="#layout"
      rotation={{ x: 0, y: 180, z: 0 }}
    />
    <Entity
      id="main__bowl"
      collada-model="#bowl"
      position={{ x: -0.926, y: 0.01, z: -1.052 }}
    />
    <Entity
      id="main__stove-door"
      collada-model="#stove-door"
      position={{ x: 0.967, y: -0.097, z: -0.49 }}
      rotation={{ x: 0, y: -70.18732990352585, z: 0 }}
    />
    <Entity
      id="main__ground"
      primitive="a-circle"
      geometry={{
        radius: 12
      }}
      rotation={{ x: -90, y: 0, z: 0 }}
      material={{
        shader: 'flat',
        src: '#floor'
      }}
    />
    <Entity id="main__sky" primitive="a-sky" src="#skymap" radius={30} />
  </Scene>;

// Render the ContentaAframe component in the scene container div.
ReactDOM.render(<ContentaAframe />, document.getElementById('root'));
