# Modus Underline - Animated SVG Underline Library

A lightweight, dependency-free library for creating beautiful animated SVG underlines with multiple trigger options.

## Demo

[View Live Demo →](https://YOUR_USERNAME.github.io/modus-underline-js/)

*Replace `YOUR_USERNAME` with your GitHub username after deployment*

## Features

- 9 unique underline styles that are randomly selected
- Lightweight with no dependencies - pure vanilla JavaScript
- Multiple trigger options: hover, scroll, click, focus, and load
- Smooth CSS-powered draw-in animations
- Keyboard accessible with focus support
- Simple HTML data attributes for easy setup
- Underlines persist after being drawn (except click triggers)
- Staggered animations with configurable delays

## Installation

```bash
npm install modus-underline-js
```

## Quick Start

### 1. Include CSS and JavaScript

**Via CDN or local files:**
```html
<link rel="stylesheet" href="node_modules/modus-underline-js/dist/underline.css">
<script src="node_modules/modus-underline-js/dist/underline.js"></script>
```

**Via ES Modules:**
```javascript
import { initRandomUnderlines } from 'modus-underline-js';
import 'modus-underline-js/dist/underline.css';
```

### 2. Markup Your Text

**That's it!** The SVG symbols are automatically injected into the DOM. No manual setup required.

```html
<h1>
  True <b data-draw-line>creativity</b> thrives when 
  <b data-draw-line>expression</b> guides the vision.
</h1>
```

**That's it!** The inner span is automatically generated. No need to add `data-draw-line-box` manually.

## Triggers

### Hover (Default)

The simplest trigger - underlines appear on mouse hover and stay visible:

```html
<b data-draw-line>hover me</b>
```

**Note:** When no `data-triggers` attribute is specified, hover is the default behavior.

### Load with Staggered Delays

Animate underlines sequentially on page load with custom delays:

```html
<h1>
  <b data-draw-line data-triggers="load,hover" data-load-delay="0">First</b> appears immediately,
  <b data-draw-line data-triggers="load,hover" data-load-delay="300">second</b> after 300ms,
  <b data-draw-line data-triggers="load,hover" data-load-delay="600">third</b> after 600ms.
</h1>
```

**Attributes:**
- `data-triggers="load"` - Triggers on page load
- `data-load-delay="300"` - Delay in milliseconds (0 = immediate)

**Tip:** Combine with `hover` to allow re-triggering on hover: `data-triggers="load,hover"`

### Scroll into Viewport

Animate underlines when elements scroll into view:

```html
<section>
  <p>
    Scroll down to see 
    <b data-draw-line data-triggers="scroll">animated underlines</b>
  </p>
</section>
```

**Advanced Scroll Options:**

```html
<!-- Staggered scroll animations with delays -->
<b data-draw-line data-triggers="scroll" data-scroll-delay="0">first</b>
<b data-draw-line data-triggers="scroll" data-scroll-delay="150">second</b>
<b data-draw-line data-triggers="scroll" data-scroll-delay="300">third</b>

<!-- Show immediately without animation -->
<b data-draw-line data-triggers="scroll" data-scroll-animate="false">instant appearance</b>

<!-- Clear underline when leaving viewport -->
<b data-draw-line data-triggers="scroll" data-scroll-clear="true">clears on scroll out</b>
```

**Attributes:**
- `data-scroll-delay` - Delay in milliseconds before animating on scroll (default: `0`)
- `data-scroll-animate="false"` - Show immediately without animation
- `data-scroll-clear="true"` - Remove underline when element leaves viewport

**Scroll Threshold:** Elements trigger when 30% visible in viewport.

### Click

Trigger underlines on click:

```html
<b data-draw-line data-triggers="click">click me</b>
```

**Behavior:** Underline appears on click and auto-clears after 2 seconds.

### Focus (Accessibility)

Keyboard-accessible underlines for better accessibility:

```html
<b data-draw-line data-triggers="focus" tabindex="0">focusable element</b>
```

**Usage:** Use Tab key to navigate and see underlines appear on focus.

**Note:** The library automatically adds `tabindex="0"` if not present.

### Multiple Triggers

Combine multiple triggers for flexible interactions:

```html
<!-- Hover, click, and scroll -->
<b data-draw-line data-triggers="hover,click,scroll">multiple triggers</b>

<!-- Load on page load, then hover to re-trigger -->
<b data-draw-line data-triggers="load,hover" data-load-delay="200">load then hover</b>

<!-- Scroll and focus for accessibility -->
<b data-draw-line data-triggers="scroll,focus" tabindex="0">scroll or focus</b>
```

## Complete Example

Here's a complete example showcasing multiple features:

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="node_modules/modus-underline-js/dist/underline.css">
</head>
<body>
  <!-- Hero Section with Load Triggers -->
  <section class="hero">
    <h1>
      True <b data-draw-line data-triggers="load,hover" data-load-delay="0">creativity</b> thrives when 
      <b data-draw-line data-triggers="load,hover" data-load-delay="300">expression</b> guides the vision, but imagination shapes the 
      <b data-draw-line data-triggers="load,hover" data-load-delay="600">journey</b>.
    </h1>
  </section>

  <!-- Scroll Triggered Section -->
  <section style="min-height: 150vh; padding: 50px;">
    <h2>
      Scroll to see 
      <b data-draw-line data-triggers="scroll">scroll-triggered</b> underlines
    </h2>
    <p>
      These words animate when entering viewport: 
      <b data-draw-line data-triggers="scroll" data-scroll-delay="0">amazing</b>, 
      <b data-draw-line data-triggers="scroll" data-scroll-delay="150">beautiful</b>, 
      <b data-draw-line data-triggers="scroll" data-scroll-delay="300">creative</b>
    </p>
  </section>

  <!-- Interactive Section -->
  <section>
    <p>
      <b data-draw-line data-triggers="hover,click">Hover or click</b> to trigger
    </p>
  </section>

  <script src="node_modules/modus-underline-js/dist/underline.js"></script>
</body>
</html>
```

## Configuration

### JavaScript Configuration

Customize SVG path and container selector:

```javascript
import { initRandomUnderlines } from 'modus-underline';

// Use custom SVG file from URL (optional)
initRandomUnderlines({
  svgPath: '/custom/path/to/underlines.svg',
  containerSelector: '.my-symbol-container'
});

// Default configuration (auto-initializes)
// Uses embedded SVG symbols - no file needed!
// Automatically creates container if it doesn't exist
```

### CSS Customization

Customize animation timing, easing, and offset:

```css
:root {
  /* Animation speed (doubled for draw-in duration) */
  --underline-speed: 0.24s;
  
  /* Easing function */
  --underline-easing: ease-in-out;
  
  /* Distance from text baseline */
  --underline-offset: 12px;
}

/* Customize underline appearance */
.underline-svg path {
  stroke-width: 8; /* Thinner line */
  stroke: #ff6b6b; /* Custom color */
}
```

### Custom SVG Symbols

Create your own underline styles by editing or replacing `underlines.svg`:

```html
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="underline-1" viewBox="0 0 310 40" preserveAspectRatio="none">
    <path fill="none" stroke="#e55050" stroke-width="10" d="M5 20.9999C26.7762..." />
  </symbol>
  <!-- Add more symbols with id="underline-2", "underline-3", etc. -->
</svg>
```

Then reference your custom file:

```javascript
initRandomUnderlines({
  svgPath: '/path/to/your/custom-underlines.svg'
});
```

## API Reference

### `initRandomUnderlines(options)`

Initialize the underline system.

**Parameters:**
- `options.svgPath` (string, optional) - Path to SVG symbols file. If not provided, uses embedded SVG symbols (no file needed). Default: `null`
- `options.containerSelector` (string, optional) - CSS selector for symbol container. Automatically created if it doesn't exist. Default: `'.symbol-library'`

**Returns:** `Promise<void>`

### `loadSymbolLibrary(svgPath, containerSelector)`

Manually load SVG symbol library. Automatically creates container if it doesn't exist.

**Parameters:**
- `svgPath` (string, optional) - Path to SVG symbols file. If not provided, uses embedded SVG symbols. Default: `null`
- `containerSelector` (string, optional) - CSS selector for symbol container. Default: `'.symbol-library'`

**Returns:** `Promise<void>`

## Data Attributes Reference

| Attribute | Values | Description |
|-----------|--------|-------------|
| `data-draw-line` | (required) | Marks element as underline target. Inner span is auto-generated. |
| `data-triggers` | `hover`, `scroll`, `click`, `focus`, `load` (comma-separated) | Trigger types. Default: `hover` |
| `data-load-delay` | number (milliseconds) | Delay for load trigger. Default: `0` |
| `data-scroll-delay` | number (milliseconds) | Delay before animating on scroll. Default: `0` |
| `data-scroll-animate` | `true`, `false` | Animate on scroll. Default: `true` |
| `data-scroll-clear` | `true`, `false` | Clear when leaving viewport. Default: `false` |

## Behavior Notes

- **Persistent Underlines:** Once drawn, underlines remain visible (except for click triggers which auto-clear)
- **Random Selection:** Each trigger randomly selects from available underline styles
- **Sequential Selection:** Styles cycle through variants to ensure variety
- **Scroll Threshold:** Scroll triggers activate when element is 30% visible
- **Auto-initialization:** Library auto-initializes when loaded as a script tag

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Modern mobile browsers

Requires:
- ES6+ support
- CSS Custom Properties (CSS Variables)
- Intersection Observer API (for scroll triggers)
- Fetch API (for loading SVG symbols)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
