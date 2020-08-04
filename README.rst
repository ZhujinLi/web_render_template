web_render_template
===================

Framework & Toolchain
---------------------

* node.js
* three.js
* TypeScript
* webpack
* Visual Studio Code

Setup
-----

1. Download and install node.js (with npm) from https://nodejs.org.
2. Switch to a fast mirror site:
   ::
      npm config set registry https://registry.npm.taobao.org
#. Install dependencies in the root directory of the repository:
   ::
      npm install
#. Download and install Visual Studio Code from https://code.visualstudio.com/.
#. Open `[your_project_name_here].code-workspace` with Visual Studio Code.
#. (Recommended) Install TSLint extension for error checking.
#. Debug: run `start` in the view `NPM SCRIPTS` to live-preview the web page.
#. Deploy: run `start` in the view `NPM SCRIPTS` to compile the website into `dist/`.