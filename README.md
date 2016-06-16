# Angled Edges

A SASS mixin for creating angled edges on sections by dynamically encoding SVGs.

## Usage

Import partial:
```scss
@import "angled-edges";
```

This mixin has 3 required parameters, **location**, **hypotenuse**, & **fill**.
```scss
@include angled-edge($location, $hypotenuse, $fill, $width: 1500, $height: 80);
```

The main mixin creates an svg right triangle that is encoded, set as a background image of a psuedo element, and absolutely positioned.

## Options

| Parameter | Description |
| ----------| ----------- |
| `$location` | Location of shape relative to parent element <uL><li>'inside top'</li><li>'outside top'</li><li>'inside bottom'</li><li>'outside bottom'</li></ul> |
| `$hypotenuse` | Side of the right triangle that the hypotenuse is on <uL><li>'upper left'</li><li>'upper right'</li><li>'lower left'</li><li>'lower righ't</li></ul> |
| `$fill` | Fill color of triangle |
| `$width` | Width of triangle - 1500px default |
| `$height` | Height of triangle - 80px default |

## Browser Support

Anywhere SVG is supported.

+ IE 9+
+ Edge
+ Firefox
+ Chrome
+ Safari
+ Opera
+ iOS Safari
+ Opera Mini
+ Android Browser
+ Chrome for Android
