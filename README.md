# Edje Framework

Edje is a faster way to write Sass by using shorthand syntaxes.

For example, we have a normal CSS below:

```css
.page-thumbnail {
  display: flex;
  background-color: red;
  border: 2px solid black;
  padding: 1.5rem;
  color: white;
}
```

With **Edje framework**, we can convert it like this:

```scss
// SCSS
.page-thumbnail {
  @include h( d-flex  bg-red  b2-solid bc-black  p1_5  c-white );
}

// or use Sass syntax (recommended)
.page-thumbnail
  +h( d-flex  bg-red b2-solid bc-black  p1_5  c-white )
```

-----

**TABLE OF CONTENTS**

- [Wiki / Full Documentation](https://github.com/hrsetyono/edje/wiki)
- [Why use Edje?](#why-use-edje)
- [How to use Edje?](#how-to-use-edje)
- [Other Features](#other-features)
    1. [Grid System](#grid-system)
    1. [Media Query](#media-query)
- [How to Compile Sass](#how-to-compile-sass)
- [Credit](#credit)


## Why use Edje?

- **Compact Codebase** - Easier to skim through.

- **Act as Styleguide** - Easier to limit what colors and values your team can use.

- **Flexible** - Unlike Functional CSS, we can still write normal CSS, pseudo-selector, and media query.

- **Fun**. Yeah I know this is subjective. But give it a try and you will understand how fresh this framework is.


## How to Use Edje?

**One-time setup:**

1. Install Node JS.
1. Open command prompt and install Sass compiler by running: `npm install -g node-sass`.

**For play-testing:**

1. Clone this repository.
1. Open command prompt in this folder and type `npm run sass`. It will compile the Sass files whenever there's changes.
1. Open `sass/app.sass` and try changing it. Check `css/app.css` for the result.

**For use in existing project:**

1. Clone this repository.
1. Copy the whole `/sass` folder into your project.
1. If you want to use the `h` mixin in your existing Sass file, simply add `@import "settings";` at the top.


# Other Features

## 1. Grid System

We used the new CSS3 Grid for our grid system. It is divided into 12 columns just like most libraries out there.

The wrapper uses custom element `<h-grid>` and the column size defined using the class `large-[num]` and `small-[num]` (Small column is applied when the screen is below 767px).

**EXAMPLE**

```html
<h-grid>
  <div class="large-8 small-6">
    ...
  </div>
  <div class="large-4 small-6">
    ...
  </div>
</h-grid>
```

Result:

![Edje Grid Sample](https://raw.github.com/hrsetyono/cdn/master/edje/grid-large-small.jpg)

[Read more about our Grid System](https://hrsetyono.github.io/edje/#/helper/grid)

-----

## 2. Media Query

There are 4 breakpoints in Edje:

| Name | Description | Default Size |
| -----|-------|-------|
| `xs` | Extra Small (Mobile) | 480px |
| `s` | Small | 767px |
| `m` | Medium | 960px |
| `l` | Large | 1120px |

We have prepared variables named `$below-[size]` and `$above-[size]` for use in `@media` block like this:

```scss
.button
  +h( p1 )

  @media ($below-s)
    +h( p0_5 )

  @media ($above-m) and ($portrait)
    +h( p1_5 )
```

- `$below-s` translates to `(max-width:767px)`.
- `$above-m` translates to `(min-width:961px)`. We added 1px so it doesn't clash with `$below-m`.
- `$portrait` translates to `orientation: portrait`. We have the variable `$landscape` too!


## 3. Utility Mixins

**CLEARFIX**

```scss
.my-wrapper
  +clearfix()


// Compiled

.my-wrapper::before,
.my-wrapper::after {
  content: "";
  display: table;
}

.my-wrapper::after {
  clear: both;
}
```

**INPUT PLACEHOLDER**

```scss
input[type="text"]
  +placeholder
    
```

## Used In

Here are some websites that use this CSS framework:

- [WordPress Tips - Advanced Tutorial](https://wptips.dev)
- [Angela Chung - Fashion Designer](https://angela-chung.com)
- [Briliant Glass - Glassware Factory](https://briliant.glass)
- [Fitnation - Premium Gym](https://fitnation.co.id)
- [Istana Mie - Restaurant Franchise](https://istanamie.com)
- [LTL School - Learn Mandarin in China](https://ltl-school.com)
- [GES13 - Refrigeration Distributor](https://ges13.com)
- [Paritama - Garden Architecture](https://paritama.com)
- [Pandarin - Mandarin Learning Center](https://pandarin.net)
- [Pixel Studio - Web Designer](https://pixelstudio.id)
- [Premiera Skincare](https://premieraskincare.com/)

### Credit

- [Mike CR](https://www.mikecr.it/ramblings/functional-css/) for convincing me to give Functional CSS a try which turned into this framework.
- [Adam Moore](https://tachyons.io/) - For making Tachyon CSS, which I used as basis of this framework.
