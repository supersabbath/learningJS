/*
 *
 * This file is part of the Hybreed package.
 * @license Copyright (c) 2010-2014, atSistemas S.A. All Rights Reserved.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 */
define(['squire', 'chai'], function (Squire, chai) {

    var should = chai.should();
    var expect = chai.expect;

    /* SUT required but with dependencies mocked */
    describe("Module demo@hello", function () {
        describe("Constructor", function () {

            it('context should exist', function () {
                should.exist(1);
            });

        });


    });
});

