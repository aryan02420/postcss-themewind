# PostCSS Themewind

[PostCSS] plugin to make theming with [TailwindCSS] simpler.

[postcss]: https://github.com/postcss/postcss
[tailwindcss]: https://github.com/tailwindlabs/tailwindcss

```css
/* Input */
.foo {
  --brand-primary: useColor(theme('colors.red.500'));
  --brand-secondary: useColor(#ffee33);
}

/* Output */
.foo {
  --brand-primary: 239, 68, 68;
  --brand-secondary: 255, 238, 51;
}
```

## Usage

**Step 1:** Install plugin:

```sh
npm i -D postcss-themewind
```

**Step 2:** Add the plugin to `postcss.config.js`:

```diff
module.exports = {
  plugins: {
    tailwindcss: {},
+   'postcss-themewind': {},
    autoprefixer: {},
  },
}
```

**Step 3:** Modify `tailwind.config.js`:

```diff
+const { useColor } = require('postcss-themewind/utils')

module.exports = {
  ...
  theme: {
    extend: {
      colors: {
        brand: {
+         primary: useColor('--brand-primary'),
+         secondary: useColor('--brand-secondary'),
        }
      },
    },
  },
}
```

## Demo

[aryan02420/postcss-themewind-demo](https://github.com/aryan02420/postcss-themewind-demo/)

