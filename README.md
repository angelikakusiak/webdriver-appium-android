# Webdriver.io appium android test

## Based on

This is currently based on:

- **WebdriverIO:** `7.##.#`
- **Appium:** `1.22.#`

## Installation

1. Running `npm install`
2. Installing Appium on a local machine [here](./docs/APPIUM.md)
3. Setting up Android and iOS on a local machine [here](./docs/ANDROID_IOS_SETUP.md)
4. Create a `./apps` directory, and put `.apk` inside that folder.
5. Make sure all dependencies are correctly installed and android emulator is running. 
6. Running tests `npm run android.app`

```sh
# For Android local execution
npm run android.app
```


## Configuration files

- Android capabilites configuration file [`wdio.android.app.conf.ts`](./config/wdio.android.app.conf.ts)

- Shared wdio configuration [`wdio.shared.conf.ts`](./config/wdio.shared.conf.ts)

- Local appium configuration file [`wdio.shared.local.appium.conf.ts`](./config/wdio.shared.local.appium.conf.ts)