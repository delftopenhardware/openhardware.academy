# Proposed data structure

folders in this directory should be named `YYYY` (e.g. `2022`). Deviations from the format will result in problems.

Items **in** the `YYYY` directories with a `.yml` extension will be attempted to be rendered on the website. If you want to add some kind of comments or write other notes for documentation purposes, you could add a markdown file (or any other file with a non-yaml extension.)

# Proposed data format

> The format described below is a suggestion, small tweaks such as custom fields are totally possible and can easily be added to the [page renderer](../open-hardware.html). It can also change over time, provided some missing field logic is added to the [page renderer](../open-hardware.html).

The data format resembles the [OKH-manifest](https://okh.makernet.org/form) closely, as this would allow some of the fields to be lifted directly from the project. 

We add the custom fields:
* `development-plans` - Where participants describe what is next for the project. A few lines or a few paragraphs. 

We also use the following practices

* Avoid listing email address of participant for spam concerns. If the participant wants to be contacted that info will/should be present on their project page.
* The `licensor` is used as the display name rather than the manifest-author. In almost all cases these will be the same anyway.

A minimal example of fields that should be present is listed below

```yml
title: SpotiStation
description: Spotify-enabled music player built around a raspberry pi and rgb matrix
  display. Streams and controls playback as an independent device and uses RGB
  matrix display as interface.
intended-use: The design is focussed on being accessible to people with physical and
  cognitive disabilities by use of few and large buttons and simple UI. It
  should allow anyone to enjoy music without supervision.
keywords:
  - spotify
  - 3D-printing
  - raspberry-pi
  - accessibility
  - music
development-stage: released
development-plans: The project has had an initial release, with some ‘field testing’ to boot.
  The hardware and software are functional, if a little rough around some of the edges. 
  Certainly areas to improve on, but none that require immediate attention. All the design
  files and code are available for reproduction - provided you have basic (electronics) tinkering
  skills.
project-link: https://github.com/NemoAndrea/SpotiStation
image: https://raw.githubusercontent.com/NemoAndrea/SpotiStation/main/media/banner.png
license:
  hardware: GPL-3.0-only
licensor:
  name: Nemo Andrea
okh-manifest-version: 1.0.0
date-created: 2022-09-23
manifest-author:
  name: Nemo Andrea
contact:
  social:
    - platform: twitter
      user-handle: cursed_tubule
```

### External libraries

For yaml parsing we use [js-yaml](https://www.npmjs.com/package/js-yaml); specifically the minified version 4.1.0