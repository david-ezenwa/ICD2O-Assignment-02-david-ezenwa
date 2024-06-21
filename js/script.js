// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates volume.
 */
function calculateVolumeOfPyramid() {
  // input
  const baseLength = parseInt(document.getElementById('base-length').value)
  const baseWidth = parseInt(document.getElementById('base-width').value)
  const heighOfPyramid = parseInt(document.getElementById('height').value)

  // process
  const volumeOfPyramid = (baseLength * baseWidth * heighOfPyramid) / 3

  // output
  document.getElementById("volume").innerHTML = 'Volume is: ' + volumeOfPyramid.toFixed(2) + ' m³'
}