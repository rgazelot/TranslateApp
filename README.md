TranslateApp
============

Simple Chrome Extension which uses Google Translate API to provide an easy way to translate words

Version
-------

1.0.0

Installation
------------

- Download the extension that is located into ``src`` folder and rename it with your own extension name. Maybe **My Awesome Translate Extension**.
- Bring up the Extensions management page by going to this URL : **chrome://extensions**.
- Ensure that the **Developer mode** checkbox in the top right-hand corner is checked.
- Click **Load unpacked extension…** and upload the extension.

Parameters
----------

The extension use **Google Translate API**. This API isn't free and you need a Google account to use this API. If you already have a Google Account, then you can visit the [Google APIs console](http://code.google.com/apis/console) to set up a new project and get your API key.

- Create a ``parameters.js`` file and use the same model like `parameters.js.dist`.
- Set your `apiKey` and your translate language `lang`.

Usage
-----

Extension is a **background extension**. This means that it is always available on every web pages you'll visite. To use it, just press `Cmd` on **Mac OSX** or `Crtl` on **Windows** and select **one (or some)** word which you want the translate.

![Simple table](https://raw.github.com/rgazelot/TranslateApp/master/images/selected_word.png)

You will see appear a little box on the top right corner of your web page with you translate.

![Simple table](https://raw.github.com/rgazelot/TranslateApp/master/images/popup.png)

**Tips :** you can use the double-clicking mode on a word to select it entirely

