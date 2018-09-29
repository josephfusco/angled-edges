# Angled Edges :triangular_ruler: [![Build Status](https://travis-ci.org/josephfusco/angled-edges.svg?branch=master)](https://travis-ci.org/josephfusco/angled-edges) [![Bower version](https://badge.fury.io/bo/angled-edges.svg)](https://badge.fury.io/bo/angled-edges) [![npm version](https://badge.fury.io/js/angled-edges.svg)](https://badge.fury.io/js/angled-edges)

A Sass mixin for creating angled edges on sections by dynamically encoding SVGs.

<img width="1262" alt="angled edge" src="https://cloud.githubusercontent.com/assets/6676674/16118929/33700404-33a7-11e6-8e94-a9ace624a41a.png">

## Usage

Import partial:
```scss
@import "angled-edges";
```

This mixin has 3 required parameters: **location**, **hypotenuse**, **fill**
```scss
@include angled-edge($location, $hypotenuse, $fill);
```

The main mixin creates an svg right triangle that is encoded, set as a background image of a pseudo element, and absolutely positioned.

### Examples

https://codepen.io/fusco/pen/mzymKm

## Options

| Parameter | Description |
| ----------| ----------- |
| `$location` | Location of shape relative to parent element <uL><li><code>inside top</code></li><li><code>outside top</code></li><li><code>inside bottom</code></li><li><code>outside bottom</code></li></ul> |
| `$hypotenuse` | Side of the right triangle that the hypotenuse is on <uL><li><code>upper left</code></li><li><code>upper right</code></li><li><code>lower left</code></li><li><code>lower right</code></li></ul> |
| `$fill` | Fill color of triangle |
| `$height` | Optional - Height of triangle - Accepts a unitless integer that is equivalent to height in `px` |
| `$width` | Optional - Width of triangle - Accepts a unitless integer that is equivalent to width in `px` (If nothing is passed triangle will span to a 100% fluid width) |

## Upgrading from 1.x

Version 2 now defaults with a fluid width of 100%. Since this is the preferred value, width and height parameters have switched order with height now being first. This allows for easier usage where
```scss
@include angled-edge('outside bottom', 'lower right', 150);
```
now means a 150px tall with at a default of 100% width. If a fluid width is not needed, you can still pass in a unitless width like in 1.x. If you previously were using `background-size` to manipulate the shape, you will need to remove this property as the mixin also uses this to assist with making the shape full-width.

## Demo

[https://angled-edges.josephfus.co](http://angled-edges.josephfus.co)

## Browser Support

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

## Project Ports

+ [Stylus Angled Edges](https://github.com/OlegWock/stylus-angled-edges)
