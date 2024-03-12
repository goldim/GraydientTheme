/* ************************************************************************

   Copyright:
     2015-2021 Norbert Schröder

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Norbert Schröder (scro34)
     * Dmitrii Zolotov (goldim)

************************************************************************ */

/**
 * @asset(graydienttheme/about.html)
 */
qx.Class.define("graydienttheme.demo.Application", {
  extend: scro34.themedemo.Application,

  members: {
    main(){
      super.main({ title: "Graydient", about_url: "graydienttheme/about.html" });
    }
  }
});
