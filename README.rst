web_render_template
===================

Framework & toolchain
---------------------

* node.js
* three.js
* TypeScript
* webpack
* Visual Studio Code

Setup
-----

1. Download and install node.js (with npm) from https://nodejs.org.
2. (Recommended) Switch to a faster mirror site:
   ::
      npm config set registry https://registry.npm.taobao.org
#. Install dependencies in the root directory of the repository:
   ::
      npm install
#. Download and install Visual Studio Code (VSC) from https://code.visualstudio.com.
#. Open `[your_project_name_here].code-workspace` with VSC.
#. (Recommended) Install VSC extension `ESLint`.
#. Debug: run `start` in the view `NPM SCRIPTS` to live-preview the web page.
#. Deploy: run `build` in the view `NPM SCRIPTS` to compile the website into `dist/` for publish.