/*
 * Copyright (c) 2022 Mooncord Team
 * Licensed under the Open Software License version 3.0
 */

function withCSSVariable(variable) {
  return `var(--${variable})`;
}

const brand = {
  100: withCSSVariable('brand-100'),
  130: withCSSVariable('brand-130'),
  160: withCSSVariable('brand-160'),
  200: withCSSVariable('brand-200'),
  230: withCSSVariable('brand-230'),
  260: withCSSVariable('brand-260'),
  300: withCSSVariable('brand-300'),
  330: withCSSVariable('brand-330'),
  360: withCSSVariable('brand-360'),
  400: withCSSVariable('brand-400'),
  430: withCSSVariable('brand-430'),
  460: withCSSVariable('brand-460'),
  500: withCSSVariable('brand'),
  530: withCSSVariable('brand-530'),
  560: withCSSVariable('brand-560'),
  600: withCSSVariable('brand-600'),
  630: withCSSVariable('brand-630'),
  660: withCSSVariable('brand-660'),
  700: withCSSVariable('brand-700'),
  730: withCSSVariable('brand-730'),
  760: withCSSVariable('brand-760'),
  800: withCSSVariable('brand-800'),
  830: withCSSVariable('brand-830'),
  860: withCSSVariable('brand-860'),
  900: withCSSVariable('brand-900'),
  '05a': withCSSVariable('brand-05a'),
  '10a': withCSSVariable('brand-10a'),
  '15a': withCSSVariable('brand-15a'),
  '20a': withCSSVariable('brand-20a'),
  '25a': withCSSVariable('brand-25a'),
  '30a': withCSSVariable('brand-30a'),
  '35a': withCSSVariable('brand-35a'),
  '40a': withCSSVariable('brand-40a'),
  '45a': withCSSVariable('brand-45a'),
  '50a': withCSSVariable('brand-50a'),
  '55a': withCSSVariable('brand-55a'),
  '60a': withCSSVariable('brand-60a'),
  '65a': withCSSVariable('brand-65a'),
  '70a': withCSSVariable('brand-70a'),
  '75a': withCSSVariable('brand-75a'),
  '80a': withCSSVariable('brand-80a'),
  '85a': withCSSVariable('brand-85a'),
  '90a': withCSSVariable('brand-90a'),
  '95a': withCSSVariable('brand-95a'),
};

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    textColor: {
      'header-primary': withCSSVariable('header-primary'),
      'header-secondary': withCSSVariable('header-secondary'),
      normal: withCSSVariable('text-normal'),
      muted: withCSSVariable('text-muted'),
      link: withCSSVariable('text-link'),
      'link-low-saturation': withCSSVariable('text-link-low-saturation'),
      positive: withCSSVariable('text-positive'),
      warning: withCSSVariable('text-warning'),
      danger: withCSSVariable('text-danger'),
      brand: withCSSVariable('text-brand'),
      'interactive-normal': withCSSVariable('interactive-normal'),
      'interactive-hover': withCSSVariable('interactive-hover'),
      'interactive-active': withCSSVariable('interactive-active'),
      'interactive-muted': withCSSVariable('interactive-muted'),
      'logo-primary': withCSSVariable('logo-primary'),
      brand,
      white: '#fff',
      'deprecated-text-input-prefix': withCSSVariable(
        'deprecated-text-input-prefix'
      ),
      'background-modifier-accent': withCSSVariable(
        'background-modifier-accent'
      ),
    },
    backgroundColor: {
      primary: withCSSVariable('background-primary'),
      secondary: withCSSVariable('background-secondary'),
      'secondary-alt': withCSSVariable('background-secondary-alt'),
      tertiary: withCSSVariable('background-tertiary'),
      accent: withCSSVariable('background-accent'),
      floating: withCSSVariable('background-floating'),
      'nested-floating': withCSSVariable('background-nested-floating'),
      'mobile-primary': withCSSVariable('background-mobile-primary'),
      'mobile-secondary': withCSSVariable('background-mobile-secondary'),
      'modifier-hover': withCSSVariable('background-modifier-hover'),
      'modifier-active': withCSSVariable('background-modifier-active'),
      'modifier-selected': withCSSVariable('background-modifier-selected'),
      'modifier-accent': withCSSVariable('background-modifier-accent'),
      brand,
      'deprecated-text-input-bg': withCSSVariable('deprecated-text-input-bg'),
    },
    borderColor: {
      primary: withCSSVariable('background-primary'),
      secondary: withCSSVariable('background-secondary'),
      tertiary: withCSSVariable('background-tertiary'),
      'deprecated-text-input-border': withCSSVariable(
        'deprecated-text-input-border'
      ),
      'deprecated-text-input-border-hover': withCSSVariable(
        'deprecated-text-input-border-hover'
      ),
      'deprecated-text-input-border-disabled': withCSSVariable(
        'deprecated-text-input-border-disabled'
      ),
      link: withCSSVariable('text-link'),
      danger: withCSSVariable('text-danger'),
      brand,
    },
    boxShadow: {
      high: withCSSVariable('elevation-high'),
    },
    extend: {
      gridTemplateColumns: {
        '1-auto': '1fr auto',
        'cards-small': 'repeat(auto-fill,minmax(140px,1fr))',
        'cards-large': 'repeat(auto-fill,minmax(219px,1fr))',
      },
      flex: { '1/2': '1 1 50%' },
    },
  },
  plugins: [],
};
