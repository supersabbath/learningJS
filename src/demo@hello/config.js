/*
 *
 * This file is part of the Hybreed package.
 * @license Copyright (c) 2010-2014, atSistemas S.A. All Rights Reserved.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 */
define(function (require) {

    "use strict";

    return {
        /* Define CSS to inject on Module load */
        css_hello: require("css!src/demo@hello/views/hello.css"),

        /* Define HTMLs used in the views */
        html_hello: require("text!src/demo@hello/views/hello.html")
    };
});
