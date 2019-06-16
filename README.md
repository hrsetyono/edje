# Edje Framework

Edje is a faster way to write SCSS by using shorthand syntaxes.

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
  @include h( d-flex  bg-red  p1_5  c-white );
}

// or use Sass syntax (recommended)
.page-thumbnail
  +h( d-flex  bg-red  p1_5  c-white )
```

If you have used Emmet in your text-editor, you will feel at home.

-----

**TABLE OF CONTENTS**

- [Why use Edje](#why-use-edje)
- [How to use Edje?](#how-to-use-edje)
- [Where to Learn more about Edje?](#where-to-learn-more-about-edje)
- [Other Features](#other-features)
    1. [Grid System](#grid-system)
    1. [Media Query](#media-query)
- [What is the Difference with Functional CSS](what-is-the-difference-with-functional-css)
- [How to Compile Sass](#how-to-compile-sass)
- [Credit](#credit)


## Why use Edje?

- **Compact Codebase** - Easier to skim through.

- **Act as Styleguide** - Easier to limit what colors and values your team can use.

- **Flexible** - Unlike Functional CSS, we can still write normal CSS, pseudo-selector, and media query.

- **Fun**. Yeah I know this is subjective. But if you enjoy writing CSS with Emmet, you are going to love this framework.


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


## Where to Learn more about Edje?

- [Full Documentation](https://hrsetyono.github.io/edje/)
- [Our WordPress theme](https://github.com/hrsetyono/edje-wp-theme) - You can take a look at `assets/sass` folder as an example.

-----

# Other Features

## 1. Grid System

We use the new CSS3 Grid. It is divided into 12 columns and you can define the portion using the class `large-x` and `small-x`.

Small column size is applied when the screen is below 767px (customizable in variable `$size-s`).

[Read more about our Grid System](https://hrsetyono.github.io/edje/#/helper/grid)

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

-----

## 2. Media Query

We don't like using mixin for media query, instead we use variable within `@media` block like this:

```scss
.button
  +h( p1 )

  @media ($below-s)
    +h( p0_5 )

  @media ($above-m) and ($portrait)
    +h( p1_5 )
```

Those variables are defined in **_settings.scss**. Let me explain what those mean.

First thing first, there are 4 default breakpoints in Edje:

- XS (extra xmall) is 480px
- S (small) is 767px
- M (medium) is 960px
- and L (large) is 1120px.

So the variable `$below-s` means when the screen is below 767px or translated to `max-width: 767px`.

Same thing goes to `$above-m` which translated to `min-width: 961px`. For "$above", we add 1px to the breakpoint so it won't clash with "$below".

[Read Media Query documentation here](https://hrsetyono.github.io/edje/#/helper/media-query)


-----

## What is the Difference with Functional CSS?

You might recognize Edje's concept from Functional CSS framework such as [Tachyon](https://tachyons.io/). They write the shorthand syntax as HTML class like this:

```html
<div class="d-flex  bg-red  p1_5  c-white">
  ...
</div>
```

It felt weird when I first saw that, but [this article](https://www.mikecr.it/ramblings/functional-css/) convinced me to give it a try.

I ended up loving it! But it feels very limited. I can't add Hover effect, Pseudoselector, and complex style like `animation` or `transform`.

Edje framework solves that. You are free to add pseudoselector and normal CSS like below:

```scss
.button
  +h( bg-yellow )
  animation: 1s fadeInUp both
  transform: rotate(5deg)

  &:hover
    +h( bg-yellow-light )

  @media ($below-s)
    +h( p0_5 ) // padding: 0.5rem
```

### Credit

- [Mike CR](https://www.mikecr.it/ramblings/functional-css/) for convincing me to give Functional CSS a try which turned into this framework.
- [Adam Moore](https://tachyons.io/) - For making Tachyon CSS, which I used as basis of this framework.
