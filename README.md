# Angled Edges

A SASS mixin for creating angled edges on sections by dynamically encoding SVGs.

By default, this mixin creates a right triangle that is absolute positioned to it's parent element.

## Options

```scss
angled-edge ( $location, $hypotenuse, $fill, $width: 1500, $height: 80 )
```

| Parameter | Description |
| ----------| ----------- |
| `$location` | Location of shape relative to parent element <uL><li>'inside top'</li><li>'outside top'</li><li>'inside bottom'</li><li>'outside bottom'</li></ul> |
| `$hypotenuse` | Side of the right triangle that the hypotenuse is on <uL><li>'upper left'</li><li>'upper right'</li><li>'lower left'</li><li>'lower righ't</li></ul> |
| `$fill` | Fill color of triangle |
| `$height` | Height of triangle - 80px default |
| `$width` | Width of triangle - 1500px default |

## Usage

Import partial:
```scss
@import "angled-edges";
```
Include mixin:
```scss
@include angled-edge('outside bottom','lower left','#FF0000');
```

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
