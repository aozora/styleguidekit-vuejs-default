import $ from 'jquery';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'jquery.cookie';

/*!
 * Data Saver
 *
 * Copyright (c) 2013-2014 Dave Olsen, http://dmolsen.com
 * Licensed under the MIT license
 */

const DataSaver = {

  // the name of the cookie to store the data in
  cookieName: 'patternlab',

  /**
   * Add a given value to the cookie
   * @param  {String}   name    the name of the key
   * @param  {String}   val    the value
   */
  addValue(name, val) {
    let cookieVal = $.cookie(this.cookieName);
    cookieVal = ((cookieVal === null) || (cookieVal === '')) ? `${name}~${val}` : `${cookieVal}|${name}~${val}`;
    $.cookie(this.cookieName, cookieVal);
  },

  /**
   * Update a value found in the cookie. If the key doesn't exist add the value
   * @param  {String}   name    the name of the key
   * @param  {String}   val    the value
   */
  updateValue(name, val) {
    if (this.findValue(name)) {
      let updateCookieVals = '';
      const cookieVals = $.cookie(this.cookieName).split('|');
      for (let i = 0; i < cookieVals.length; i += 1) {
        const fieldVals = cookieVals[i].split('~');
        if (fieldVals[0] === name) {
          fieldVals[1] = val;
        }
        updateCookieVals += (i > 0) ? `|${fieldVals[0]}~${fieldVals[1]}` : `${fieldVals[0]}~${fieldVals[1]}`;
      }
      $.cookie(this.cookieName, updateCookieVals);
    } else {
      this.addValue(name, val);
    }
  },

  /**
   * Remove the given key
   * @param  {String}   name    the name of the key
   */
  removeValue(name) {
    let updateCookieVals = '';
    const cookieVals = $.cookie(this.cookieName).split('|');
    let k = 0;
    for (let i = 0; i < cookieVals.length; i += 1) {
      const fieldVals = cookieVals[i].split('~');
      if (fieldVals[0] !== name) {
        updateCookieVals += (k === 0) ? `${fieldVals[0]}~${fieldVals[1]}` : `|${fieldVals[0]}~${fieldVals[1]}`;
        k += 1;
      }
    }
    $.cookie(this.cookieName, updateCookieVals);
  },

  /**
   * Find the value using the given key
   * @param  {String} name      the name of the key
   */
  findValue(name) {
    if ($.cookie(this.cookieName)) {
      const cookieVals = $.cookie(this.cookieName).split('|');
      for (let i = 0; i < cookieVals.length; i += 1) {
        const fieldVals = cookieVals[i].split('~');
        if (fieldVals[0] === name) {
          return fieldVals[1];
        }
      }
    }

    return false;
  }

};

export default DataSaver;
