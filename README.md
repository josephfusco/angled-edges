# Angled Edges

A SASS mixin for creating angled edges on sections by dynamically encoding SVGs.

## Usage
Import partial:
```scss
@import "angled-edges";
```
Include mixin:
```scss
@include angled-edge('outside bottom','lower left','#FF0000');
```

By default, this mixin creates a right triangle that is absolute positioned to it's parent element.

```scss
angled-edge ( $location, $hypotenuse, $fill, $width: 1500, $height: 80 )
```

| Parameter | Description |
| ----------| ----------- |
| `$location` | Location of shape relative to parent element |
| `$hypotenuse` | Side of the right triangle that the hypotenuse is on |
| `$fill` | Fill color of triangle |
| `$height` | Height of triangle - 80px default |
| `$width` | Width of triangle - 1500px default |

## Options

| $location  | $hypotenuse |
| ---------- | ----------- |
| inside top | upper left |
| outside top | upper right |
| inside bottom | lower left |
| outside bottom | lower right |

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
