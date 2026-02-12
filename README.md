![](https://img.shields.io/badge/Built%20with%20%E2%9D%A4%EF%B8%8F-at%20Technologiestiftung%20Berlin-blue)

<!-- ALL-CONTRIBUTORS-BADGE:START -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![npm version](https://img.shields.io/npm/v/berlin-ui-library?color=blue)](https://www.npmjs.com/package/berlin-ui-library)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

# Berlin UI Library

A reusable, themeable, accessible React UI component library built with Vite, TypeScript, and Tailwind CSS.

## Prerequisites

- Node.js v14 or higher
- npm v6 or higher

## Installation

Install from npm registry:

```bash
npm install berlin-ui-library
```

Or consume directly from this public GitHub repo (no npm publish required):

```bash
# via npm
npm install github:technologiestiftung/berlin-ui-library

# or via git+ssh
npm install git+ssh://git@github.com/technologiestiftung/berlin-ui-library.git
```

## Usage

Import global styles once in your entrypoint (e.g., `index.tsx`):

```tsx
import "berlin-ui-library/dist/assets/style.css";
```

Then use components anywhere in your app without re-importing styles:

```tsx
import React from "react";
import { Button } from "berlin-ui-library";

export const App = () => (
	<Button onClick={() => alert("Clicked!")}>Click me</Button>
);
```

## Development

Clone and start Storybook for interactive component development:

```bash
git clone <repository-url>
cd berlin-ui-library
npm install
npm run dev
npm run storybook
```

Runs Storybook at http://localhost:6006

## Build

Bundle library for production:

```bash
npm run build
```

## Tests

Execute tests:

```bash
npm run test
```

## Contributing

Before creating a pull request, please open an issue to discuss your changes.

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/JonathanHaudenschild-TsB"><img src="https://avatars.githubusercontent.com/u/201598680?v=4?s=64" width="64px;" alt="Jonathan Haudenschild"/><br /><sub><b>Jonathan Haudenschild</b></sub></a><br /><a href="https://github.com/technologiestiftung/template-default/commits?author=JonathanHaudenschild-TsB" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Content Licensing

Texts and content available under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

Illustrations by MARIA_MUSTERFRAU, all rights reserved.

## Credits

<table>
  <tr>
    <td>
      Made by  <a href="https://www.technologiestiftung-berlin.de/">
        <br />
        <br />
        <img width="150" src="https://logos.citylab-berlin.org/logo-technologiestiftung-berlin-de.svg" />
      </a>
    </td>
    <td>
      Supported by <a href="https://www.berlin.de/">
        <br />
        <br />
        <img width="150" src="https://logos.citylab-berlin.org/logo-berlin.svg" />
      </a>
    </td>
  </tr>
</table>
