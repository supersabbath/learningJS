/*
 *
 * This file is part of the Hybreed package.
 * @license Copyright (c) 2010-2014, atSistemas S.A. All Rights Reserved.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 */
define(['mocha', 'chai', 'sinon-chai', 'css!vendor/test/mocha-1.14.0.css'],
    function (mocha, chai, sinonChai) {

        "use strict";

        chai.use(sinonChai);

        mocha.setup({
            ui: 'bdd',
            ignoreLeaks: true
        });

        // Tests to be passed
        require([
            'config.test'
        ], function () {

            if (window.mochaPhantomJS) {
                mochaPhantomJS.run();
            } else {
                mocha.run();
            }

        });
    });
