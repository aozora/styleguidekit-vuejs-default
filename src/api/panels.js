/*!
 * Default Panels for Pattern Lab plus Panel related events
 *
 * Copyright (c) 2016 Dave Olsen, http://dmolsen.com
 * Licensed under the MIT license
 *
 * config is coming from the default viewer and is passed through from PL's config
 *
 * @requires prism-languages.js
 */

const Panels = {

  panels: [],

  count() {
    return this.panels.length;
  },

  get() {
    return JSON.parse(JSON.stringify(this.panels));
  },

  add(panel) {
    // if ID already exists in panels array ignore the add()
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.panels.length; ++i) {
      if (panel.id === this.panels[i].id) {
        return;
      }
    }

    // it wasn't found so push the tab onto the tabs
    this.panels.push(panel);
  }

};

// set-up the base file extensions to fetch
const fileSuffixPattern = ((config.outputFileSuffixes !== undefined) && (config.outputFileSuffixes.rawTemplate !== undefined)) ? config.outputFileSuffixes.rawTemplate : '';
const fileSuffixMarkup = ((config.outputFileSuffixes !== undefined) && (config.outputFileSuffixes.markupOnly !== undefined)) ? config.outputFileSuffixes.markupOnly : '.markup-only';

// add the default panels
Panels.add({
  id: 'sg-panel-pattern', default: true, templateID: 'pl-panel-template-code', httpRequest: true, httpRequestReplace: fileSuffixPattern, httpRequestCompleted: false, prismHighlight: true, keyCombo: 'ctrl+shift+u'
});
Panels.add({
  id: 'sg-panel-html', name: 'HTML', default: false, templateID: 'pl-panel-template-code', httpRequest: true, httpRequestReplace: `${fileSuffixMarkup}.html`, httpRequestCompleted: false, prismHighlight: true, language: 'markup', keyCombo: 'ctrl+shift+y'
});

// gather panels from plugins
Dispatcher.trigger('setupPanels');
