/*
 *
 * This file is part of the Hybreed package.
 * @license Copyright (c) 2010-2014, atSistemas S.A. All Rights Reserved.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 */
define(["backbone.wreqr"], function (Wreqr) {
    return {
        commands: new Wreqr.Commands(),
        reqres: new Wreqr.RequestResponse(),
        events: new Wreqr.EventAggregator()
    };
});
