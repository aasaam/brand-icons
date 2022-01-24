
# Contributing to aasaam brand icons

aasaam brand icons welcomes contributions and corrections. Before contributing, please make sure you have read the guidelines below. If you decide to contribute anything, please do the following:

1. Fork this repository
1. Create a new branch from the latest `develop` (read more [here](https://guides.github.com/introduction/flow/))
1. Start hacking on the new branch
1. Commit and push to the new branch
1. Make a pull request

## Table of contents

* [Requesting an Icon](#requesting-an-icon)
* [Adding or Updating an Icon](#adding-or-updating-an-icon)
* [Building](#building)

## Requesting an Icon

We welcome icon requests. Before you submit a new issue please make sure the icon:

* Has not already been requested or not included in [Simple Icons](https://github.com/simple-icons/simple-icons). If you find an existing issue or pull request for the brand you're looking for then please add a reaction or comment to show your support.
* Is of a _popular_ brand. For websites, the [Alexa rank](https://www.alexa.com/siteinfo) should be less than 500k. For anything else, popularity will be judged on a case-by-case basis.
* Isn't related to anything that provides an illegal service (e.g. piracy, malware, threatening material, spam, etc.).

If you are in doubt, feel free to submit it and we'll have a look.

When submitting a request for a new or updated icon include helpful information such as:

* **Issue Title:** The brand name. For example:
  * New Icons: `Request: GitHub Icon`
  * Icon Updates: `Update: GitHub Color` or `Update: GitHub Icon`

* **Issue Body:** Links to official sources for the brand's icon (e.g. media kits, brand guidelines, SVG files etc.)

If you have an affiliation to the brand you are requesting that allows you to speak on their behalf then please disclose that in your issue as it can help speed up our research process.

## Adding or Updating an Icon

**Note**: If you decide to add an icon without requesting it first, the requirements above still apply.

### 1. Identify Official Logos

Most of the icons on aasaam brand icons have been derived from official sources. Using official sources helps ensure that the icons in aasaam brand icons accurately match the brand they represent. Thankfully, this is usually a simple process as organizations often provide brand guides and high quality versions of their logo for download.

Official high quality brand logos can usually be found in the following locations:

1. About pages, Press pages, Media Kits, and Brand Guidelines.
1. Website headers (you can use [svg-grabber](https://chrome.google.com/webstore/detail/svg-grabber-get-all-the-s/ndakggdliegnegeclmfgodmgemdokdmg) for Chrome)
1. Favicons
1. Wikimedia (which should provide a source)
1. GitHub repositories

Working with an SVG version of the logo is best. In the absence of an SVG version, other vector filetypes may work as well (e.g. EPS, AI, PDF). In the absence of vector logos, a vector can be created from a high quality rasterized image, however this is much more labor intensive.

### 2. Extract the Icon from the Logo

There are many different tools for editing SVG files, some options include:

| Name | Description | Platform | Price |
| :---- | :---- | :----: | :----: |
| [Inkscape](https://inkscape.org/en/) **Recommended** | Vector Graphics Editor | Windows, Mac, Linux | Free |
| [Affinity Designer](https://affinity.serif.com/de/designer/) | Vector Graphics Editor | Windows, Mac | $ |
| [Adobe Illustrator](https://www.adobe.com/products/illustrator.html) | Vector Graphics Editor | Windows, Mac | $ - $$$ |
| [IcoMoon](https://icomoon.io/) | Icon Editing/Management Tool | Online | Free |

Using your preferred tool you should:

1. Isolate the icon from any text or extraneous items.
1. Merge any overlapping paths.
1. Compound all paths into one.
1. Change the icon's viewbox/canvas/page size to 24x24.
1. Scale the icon to fit the viewbox, while preserving the icon's original proportions. This means the icon should be touching at least two sides of the viewbox.
1. Center the icon horizontally and vertically.
1. Remove all colors. The icon should be monochromatic.
1. Export the icon as an SVG.

### 3. Optimize the Icon

All icons in aasaam brand icons have been optimized with the [SVGO tool](https://github.com/svg/svgo). This can be done in one of two ways:

* The [SVGO Command Line Tool](https://github.com/svg/svgo)
  * Install dependencies
    * With npm: `npm install` from the root of this repository
  * Run the following command `npm run svgo -- svg/ir_aasaam.svg`
  * Check if there is a loss of quality in the output, if so increase the precision.

After optimizing the icon, double-check it against your original version to ensure no visual imperfections have crept in. Also make sure that the dimensions of the path have not been changed so that the icon no longer fits exactly within the canvas. We currently check the dimensions up to a precision of 3 decimal points.

### 4. Annotate the Icon

Each icon in aasaam brand icons has been annotated with a number of attributes and elements to increase accessibility. These include:

* An svg element with:
  * An img role attribute.
    * `role="img"`
  * A 24x24 viewbox.
    * `viewBox="0 0 24 24"`
  * The svg namespace.
    * `xmlns="http://www.w3.org/2000/svg"`

Here is _part of_ the svg for the aasaam icon as an example:

```svg
<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">...</svg>
```

### 5. Check the Icon

The final icon should:

* Be properly annotated [as discussed above](#4-annotate-the-icon).
* Be monochromatic.
  * Remove all fill colors so that icon defaults to black.
* Be scaled to fit the viewbox, while preserving the icon's original proportions.
  * This means the icon should be touching at least two sides of the viewbox.
* Be vertically and horizontally centered.
* Be minified to a single line with no formatting.
* Contain only a single `path` element.
* Not contain extraneous elements.
  * This includes: `circ`, `ellipse`, `rect`, `polygon`, `line`, `g`, etc.
* Not contain extraneous attributes.
  * This includes: `width`, `height`, `fill`, `stroke`, `clip`, `font`, etc.

Here is the svg for the aasaam icon as an example:

```svg
<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10a10 10 0 0 1-4 7.988V12a6 6 0 0 0-1.76-4.24L18 6h-6a6 6 0 0 0-4.24 1.76l-.002-.002-2.828 2.828L3.516 12l1.414 1.414 2.12 2.121-2.788 2.79A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2zm0 6a4 4 0 0 1 4 4v9.152A10 10 0 0 1 12 22a10 10 0 0 1-6.324-2.262l1.02-1.02 1.835-1.835 1.348-1.348A7998.88 7998.88 0 0 0 6.344 12L9.17 9.172l.002.002A4 4 0 0 1 12 8zm-1 1.75a1.25 1.25 0 0 0-.541 2.377h.002v-.002A1.25 1.25 0 1 0 11 9.75z"/></svg>
```

#### SVG Filename Convention

File name for iranian brand start with `ir_` and `wi_`; For non-iranian brands. All must be lowercase and `[a-z_0-9]+`.

### 7. Building

1. `npm install`
1. Store icon with name in `ir_sample.svg` in `svg/`
1. Run optimization via `npm run svgo svg/ir_sample.svg`
1. Run lint via `npm run lint:svg svg/ir_sample.svg`
1. Fix buffer issue and increase it `sax.MAX_BUFFER_LENGTH = ...` to `sax.MAX_BUFFER_LENGTH = 2048 * 1024` in `node_modules/sax/lib/sax.js`
1. Build fonts `npm run build:fonts`
1. Build website `npm run build:docs`

### 7. Create a Pull Request

Once you've completed the previous steps, create a pull request to merge your edits into the *develop* branch. You can run `npm run lint-all:svg` to check if there are any issues you still need to address.

If you have an affiliation to the brand you contributing that allows you to speak on their behalf then please disclose that in your pull request as it can help speed up our research and review processes.
