# contenta_aframe
An [A-Frame](https://aframe.io) [WebVR](https://webvr.info/) consumer for [Contenta CMS](http://www.contentacms.org/).

## Status
* [x] base models
* [x] base a-frame layout
* [ ] contenta integration for populating recipes  

## Requirements
 * Node.js (see .nvmrc for correct version).
 * Yarn

## Setup
 * Clone this repository.
 * In this repository's root folder, run `yarn`.
 * Run `yarn start` to start the WebVR app dev server.

## Coding standards
This project uses Eslint, configured to use AirBnb's standard set. To lint code in this project, run `yarn lint`. This project also uses Prettier, which will format your code according to the Prettier standard. As enforced by Husky, you cannot commit code that does not fit the defined standard.

## Developing in Google Daydream
The development server in this project is set up so that it can be accessed by any device on your local network. That's why you access your development instance from your local IP instead of just `localhost`.

Before you get started, navigate to `chrome://flags` in Chrome on your phone. Then, enable the WebVR and Gamepad API flags, and restart Chrome.

After doing this, start your dev server (`yarn start`) and navigate to the non-local IP address given in the output.

## Experience
* [Simple Cooking Simulator](https://github.com/contentacms/contenta_aframe/issues/1)
* [Basic A-Frame Environment](http://www.contentacms.org/contenta_aframe/index.html)

## Models
* [Basic Model Descriptions](https://github.com/contentacms/contenta_aframe/pull/7)

## Initiatives
* Please see the [issue queue](https://github.com/contentacms/contenta_aframe/issues)
