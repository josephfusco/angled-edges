# Angled Edges :triangular_ruler: [![Build Status](https://travis-ci.org/josephfusco/angled-edges.svg?branch=master)](https://travis-ci.org/josephfusco/angled-edges) [![Bower version](https://badge.fury.io/bo/angled-edges.svg)](https://badge.fury.io/bo/angled-edges) [![MIT License](http://img.shields.io/:license-mit-blue.svg)](LICENSE)

A SASS mixin for creating angled edges on sections by dynamically encoding SVGs.

<img width="1262" alt="angled edge" src="https://cloud.githubusercontent.com/assets/6676674/16118929/33700404-33a7-11e6-8e94-a9ace624a41a.png">

## Usage :ledger:

Import partial:
```scss
@import "angled-edges";
```

This mixin has 3 required parameters, **location**, **hypotenuse**, & **fill**.
```scss
@include angled-edge($location, $hypotenuse, $fill, $width: 2800, $height: 100);
```

The main mixin creates an svg right triangle that is encoded, set as a background image of a pseudo element, and absolutely positioned.

## Options :wrench:

| Parameter | Description |
| ----------| ----------- |
| `$location` | Location of shape relative to parent element <uL><li>'inside top'</li><li>'outside top'</li><li>'inside bottom'</li><li>'outside bottom'</li></ul> |
| `$hypotenuse` | Side of the right triangle that the hypotenuse is on <uL><li>'upper left'</li><li>'upper right'</li><li>'lower left'</li><li>'lower right'</li></ul> |
| `$fill` | Fill color of triangle |
| `$width` | Width of triangle - 2800px default |
| `$height` | Height of triangle - 100px default |

## Demo :bicyclist:

[http://angled-edges.josephfus.co](http://angled-edges.josephfus.co)

## Browser Support :white_check_mark:

Anywhere SVG is supported.

- [x] IE 9+
- [x] Edge
- [x] Firefox
- [x] Chrome
- [x] Safari
- [x] Opera
- [x] iOS Safari
- [x] Opera Mini
- [x] Android Browser
- [x] Chrome for Android
