/*
 *
 * This file is part of the Hybreed package.
 * @license Copyright (c) 2010-2014, atSistemas S.A. All Rights Reserved.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 */

/**
 * All modules must be defined in the same line
 * "src/module/a", "src/module/b", "src/module/c"...
 */
define(["src/groove@shark/groover"],
    function () {
        "use strict";
        return {
            /**
             * Object Container App regions.
             * Divs must be defined at index.html
             * <div id="<region>"></div>
             */
            "regions": {
                "header": "#header",
                "content": "#content",
                "tabbar": "#tabbar"
            },
            /**
             * Broker commands.
             * It's triggers on startup to launch mediator modules.
             */
            "init": {
                "commands": [
                    "groove@shark:start"
                ]
            }
        };
    });