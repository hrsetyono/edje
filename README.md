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
    +h( p05 )

  @media ($above-m) and ($portrait)
    +h( p15 )
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
<div class="bg-red b2 b-black_50 p1 c-white">
  ...
</div>
```

It felt weird when I first saw that, but [this article](https://www.mikecr.it/ramblings/functional-css/) convinced me to give it a try. The idea is not having to write CSS and no need to think about class name.

But in practice, I still need to write CSS for Hover effect, Pseudoselector, Media query, and other advanced CSS like animation. **I ended up going back and forth between my HTML and CSS** which gets messy.

Edje framework solves that.

If you need Hover effect, Pseudoselector, or Media Query:

```scss
.button
  +h( bg-red p1 c-white )

  &:hover
    +h( bg-blue )

  @media ($below-s)
    +h( p05 ) // padding: 0.5rem
```

If you need advanced CSS, simply write it old-fashioned way:

```scss
.button
  +h( bg-red p1 c-white )

  animation: 1s fadeInUp both
  transform: rotate(5deg)
```

----

## How to Compile Sass

1. Install [Node JS](https://nodejs.org/en/download/).

1. Open CMD (or Terminal if you're using Mac) and run the command `npm install -g node-sass`.

1. Open CMD inside your project directory and run the command `npm run sass`. That command is a shortcut we defined in **package.json**.

### Credit

- [Mike CR](https://www.mikecr.it/ramblings/functional-css/) for convincing me to give Functional CSS a try which turned into this framework.
- [Adam Moore](https://tachyons.io/) - For making Tachyon CSS, which I used as basis of this framework.