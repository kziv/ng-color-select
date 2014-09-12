# COLOR SELECT

An AngularJS directive that turns a select (multi or single) into a clickable palette of colors.

This is different from other color pickers out there because it limits the available colors to those listed in the select box.

It's also designed to work first as a standard select element, then as a select element with an ngModel attached, then as the actual color select widget.

## Options

### Single vs multiple selections

By default, a single color can be selected; use the `select` element's `multiple` attribute to indicate more than one color may be selected.

### Color values

This directive looks for colors in the following locations, in this order, in each color's `option` element:

1. `data-color` attribute
1. `value` attribute

A color value can be either a named HTML color or a hex code (no pound sign necessary)

## Examples/Demo

### Single value widget with named colors

```html
<select name="color" data-ng-color-select>
  <option value="">- Select -</option>
  <option value="red">Red</option>
  <option value="orange">Orange</option>
  <option value="yellow">Yellow</option>
</select>
```

### Multiple values widget with hex colors

```html
<select name="color" multiple="multiple" data-ng-color-select>
  <option value="">- Select -</option>
  <option value="f00">Red</option>
  <option value="f60">Orange</option>
  <option value="ff0">Yellow</option>
</select>
```

### Single value widget with hex colors as a data attribute

```html
<select name="color" data-ng-color-select>
  <option value="">- Select -</option>
  <option value="stop" data-color="f00">Stop</option>
  <option value="caution" data-color="ff0">Caution</option>
  <option value="go" data-color="0f0">Go</option>
</select>
```

## Authors

Karen Ziv <me@karenziv.com>

## Inspired By

http://bootstrap-colorselector.flaute.com/