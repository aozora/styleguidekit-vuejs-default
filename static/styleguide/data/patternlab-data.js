var config = {
  "paths": {
    "source": {
      "root": "./source/",
      "app": "./source/_app",
      "patterns": "./source/_patterns/",
      "data": "./source/_data/",
      "meta": "./source/_meta/",
      "annotations": "./source/_annotations/",
      "styleguide": "./node_modules/styleguidekit-assets-default/dist/",
      "patternlabFiles": "./node_modules/styleguidekit-mustache-default/views/",
      "js": "./source/js/",
      "images": "./source/images/",
      "fonts": "./source/fonts/",
      "css": "./source/css/"
    },
    "public": {
      "root": "./public/",
      "patterns": "./public/patterns/",
      "data": "./public/styleguide/data/",
      "annotations": "./public/annotations/",
      "styleguide": "./public/styleguide/",
      "js": "./public/js/",
      "images": "./public/images/",
      "fonts": "./public/fonts/",
      "css": "./public/css/"
    }
  },
  "server": { "url": "http://localhost", "port": 8002 },
  "webpackMerge": { "entry": "replace" },
  "styleGuideExcludes": [],
  "defaultPattern": "all",
  "defaultShowPatternInfo": false,
  "cleanPublic": true,
  "patternExtension": "mustache",
  "ignored-extensions": ["scss", "sass", "DS_Store", "less"],
  "ignored-directories": ["scss", "sass"],
  "debug": false,
  "ishControlsHide": {
    "s": false,
    "m": false,
    "l": false,
    "full": false,
    "random": false,
    "disco": false,
    "hay": true,
    "mqs": false,
    "find": false,
    "views-all": false,
    "views-annotations": false,
    "views-code": false,
    "views-new": false,
    "tools-all": false,
    "tools-docs": false
  },
  "ishViewportRange": { "s": [240, 500], "m": [768, 768], "l": [800, 2600] },
  "patternStateCascade": ["inprogress", "inreview", "complete"],
  "patternStates": {},
  "patternExportPatternPartials": [],
  "patternExportDirectory": "./pattern_exports/",
  "cacheBust": true,
  "starterkitSubDir": "dist",
  "starterkitPostInstallClean": false,
  "outputFileSuffixes": { "rendered": ".rendered", "rawTemplate": "", "markupOnly": ".markup-only" },
  "cleanOutputHtml": true,
  "exportToGraphViz": false
};
var ishControls = {
  "ishControlsHide": {
    "s": false,
    "m": false,
    "l": false,
    "full": false,
    "random": false,
    "disco": false,
    "hay": true,
    "mqs": false,
    "find": false,
    "views-all": false,
    "views-annotations": false,
    "views-code": false,
    "views-new": false,
    "tools-all": false,
    "tools-docs": false
  }
};
var navItems = {
  "patternTypes": [{
    "patternTypeLC": "atoms",
    "patternTypeUC": "Atoms",
    "patternType": "00-atoms",
    "patternTypeDash": "atoms",
    "patternTypeItems": [{
      "patternSubtypeLC": "global",
      "patternSubtypeUC": "Global",
      "patternSubtype": "00-global",
      "patternSubtypeDash": "global",
      "patternSubtypeItems": [{
        "patternPartial": "viewall-atoms-global",
        "patternName": "View All",
        "patternPath": "00-atoms-00-global/index.html",
        "patternType": "00-atoms",
        "order": 0
      }, {
        "patternPartial": "atoms-colors",
        "patternName": "Colors",
        "patternState": "",
        "patternSrcPath": "00-atoms/00-global/00-colors",
        "patternPath": "00-atoms-00-global/00-atoms-00-global.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "atoms-fonts",
        "patternName": "Fonts",
        "patternState": "",
        "patternSrcPath": "00-atoms/00-global/01-fonts",
        "patternPath": "00-atoms-00-global/00-atoms-00-global.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "atoms-animations",
        "patternName": "Headings",
        "patternState": "",
        "patternSrcPath": "00-atoms/00-global/02-animations",
        "patternPath": "00-atoms-00-global/00-atoms-00-global.html",
        "order": 9007199254740991
      }]
    }, {
      "patternSubtypeLC": "text",
      "patternSubtypeUC": "Text",
      "patternSubtype": "01-text",
      "patternSubtypeDash": "text",
      "patternSubtypeItems": [{
        "patternPartial": "viewall-atoms-text",
        "patternName": "View All",
        "patternPath": "00-atoms-01-text/index.html",
        "patternType": "00-atoms",
        "order": 0
      }, {
        "patternPartial": "atoms-headings",
        "patternName": "Animations",
        "patternState": "",
        "patternSrcPath": "00-atoms/01-text/00-headings",
        "patternPath": "00-atoms-01-text/00-atoms-01-text.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "atoms-paragraph",
        "patternName": "Paragraph",
        "patternState": "",
        "patternSrcPath": "00-atoms/01-text/01-paragraph",
        "patternPath": "00-atoms-01-text/00-atoms-01-text.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "atoms-blockquote",
        "patternName": "Blockquote",
        "patternState": "",
        "patternSrcPath": "00-atoms/01-text/02-blockquote",
        "patternPath": "00-atoms-01-text/00-atoms-01-text.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "atoms-inline-elements",
        "patternName": "Inline Elements",
        "patternState": "",
        "patternSrcPath": "00-atoms/01-text/03-inline-elements",
        "patternPath": "00-atoms-01-text/00-atoms-01-text.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "atoms-time",
        "patternName": "Time",
        "patternState": "",
        "patternSrcPath": "00-atoms/01-text/04-time",
        "patternPath": "00-atoms-01-text/00-atoms-01-text.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "atoms-preformatted-text",
        "patternName": "Preformatted Text",
        "patternState": "",
        "patternSrcPath": "00-atoms/01-text/05-preformatted-text",
        "patternPath": "00-atoms-01-text/00-atoms-01-text.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "atoms-hr",
        "patternName": "HR",
        "patternState": "",
        "patternSrcPath": "00-atoms/01-text/06-hr",
        "patternPath": "00-atoms-01-text/00-atoms-01-text.html",
        "order": 9007199254740991
      }]
    }, {
      "patternSubtypeLC": "lists",
      "patternSubtypeUC": "Lists",
      "patternSubtype": "02-lists",
      "patternSubtypeDash": "lists",
      "patternSubtypeItems": [{
        "patternPartial": "viewall-atoms-lists",
        "patternName": "View All",
        "patternPath": "00-atoms-02-lists/index.html",
        "patternType": "00-atoms",
        "order": 0
      }, {
        "patternPartial": "atoms-unordered",
        "patternName": "Unordered",
        "patternState": "",
        "patternSrcPath": "00-atoms/02-lists/00-unordered",
        "patternPath": "00-atoms-02-lists/00-atoms-02-lists.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "atoms-ordered",
        "patternName": "Ordered",
        "patternState": "",
        "patternSrcPath": "00-atoms/02-lists/01-ordered",
        "patternPath": "00-atoms-02-lists/00-atoms-02-lists.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "atoms-definition",
        "patternName": "Definition",
        "patternState": "",
        "patternSrcPath": "00-atoms/02-lists/02-definition",
        "patternPath": "00-atoms-02-lists/00-atoms-02-lists.html",
        "order": 9007199254740991
      }]
    }, {
      "patternSubtypeLC": "controls",
      "patternSubtypeUC": "Controls",
      "patternSubtype": "03-controls",
      "patternSubtypeDash": "controls",
      "patternSubtypeItems": [{
        "patternPartial": "viewall-atoms-controls",
        "patternName": "View All",
        "patternPath": "00-atoms-03-controls/index.html",
        "patternType": "00-atoms",
        "order": 0
      }, {
        "patternPartial": "atoms-button",
        "patternName": "Button",
        "patternState": "",
        "patternSrcPath": "00-atoms/03-controls/00-button",
        "patternPath": "00-atoms-03-controls/00-atoms-03-controls.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "atoms-button-variants",
        "patternName": "Button Variants",
        "patternState": "",
        "patternSrcPath": "00-atoms/03-controls/01-button-variants",
        "patternPath": "00-atoms-03-controls/00-atoms-03-controls.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "atoms-slider",
        "patternName": "Slider",
        "patternState": "",
        "patternSrcPath": "00-atoms/03-controls/02-slider",
        "patternPath": "00-atoms-03-controls/00-atoms-03-controls.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "atoms-slider-variants",
        "patternName": "Slider Variants",
        "patternState": "",
        "patternSrcPath": "00-atoms/03-controls/03-slider-variants",
        "patternPath": "00-atoms-03-controls/00-atoms-03-controls.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "atoms-switch",
        "patternName": "Switch",
        "patternState": "",
        "patternSrcPath": "00-atoms/03-controls/04-switch",
        "patternPath": "00-atoms-03-controls/00-atoms-03-controls.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "atoms-switch-variants",
        "patternName": "Switch Variants",
        "patternState": "",
        "patternSrcPath": "00-atoms/03-controls/05-switch-variants",
        "patternPath": "00-atoms-03-controls/00-atoms-03-controls.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "atoms-close-button",
        "patternName": "Close Button",
        "patternState": "",
        "patternSrcPath": "00-atoms/03-controls/06-close-button",
        "patternPath": "00-atoms-03-controls/00-atoms-03-controls.html",
        "order": 9007199254740991
      }]
    }, {
      "patternSubtypeLC": "media",
      "patternSubtypeUC": "Media",
      "patternSubtype": "04-media",
      "patternSubtypeDash": "media",
      "patternSubtypeItems": [{
        "patternPartial": "viewall-atoms-media",
        "patternName": "View All",
        "patternPath": "00-atoms-04-media/index.html",
        "patternType": "00-atoms",
        "order": 0
      }, {
        "patternPartial": "atoms-badge",
        "patternName": "Badge",
        "patternState": "",
        "patternSrcPath": "00-atoms/04-media/00-badge",
        "patternPath": "00-atoms-04-media/00-atoms-04-media.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "atoms-badge-variants",
        "patternName": "Badge Variants",
        "patternState": "",
        "patternSrcPath": "00-atoms/04-media/01-badge-variants",
        "patternPath": "00-atoms-04-media/00-atoms-04-media.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "atoms-label",
        "patternName": "Label",
        "patternState": "",
        "patternSrcPath": "00-atoms/04-media/02-label",
        "patternPath": "00-atoms-04-media/00-atoms-04-media.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "atoms-label-variants",
        "patternName": "Label Variants",
        "patternState": "",
        "patternSrcPath": "00-atoms/04-media/03-label-variants",
        "patternPath": "00-atoms-04-media/00-atoms-04-media.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "atoms-thumbnail",
        "patternName": "Thumbnail",
        "patternState": "",
        "patternSrcPath": "00-atoms/04-media/04-thumbnail",
        "patternPath": "00-atoms-04-media/00-atoms-04-media.html",
        "order": 9007199254740991
      }]
    }],
    "patternItems": [{
      "patternPartial": "viewall-atoms-all",
      "patternName": "View All",
      "patternPath": "00-atoms/index.html",
      "order": -9007199254740991
    }]
  }, {
    "patternTypeLC": "molecules",
    "patternTypeUC": "Molecules",
    "patternType": "01-molecules",
    "patternTypeDash": "molecules",
    "patternTypeItems": [{
      "patternSubtypeLC": "layout",
      "patternSubtypeUC": "Layout",
      "patternSubtype": "00-layout",
      "patternSubtypeDash": "layout",
      "patternSubtypeItems": [{
        "patternPartial": "viewall-molecules-layout",
        "patternName": "View All",
        "patternPath": "01-molecules-00-layout/index.html",
        "patternType": "01-molecules",
        "order": 0
      }, {
        "patternPartial": "molecules-float-classes",
        "patternName": "Float Classes",
        "patternState": "",
        "patternSrcPath": "01-molecules/00-layout/00-float-classes",
        "patternPath": "01-molecules-00-layout/01-molecules-00-layout.html",
        "order": 9007199254740991
      }]
    }, {
      "patternSubtypeLC": "controls",
      "patternSubtypeUC": "Controls",
      "patternSubtype": "01-controls",
      "patternSubtypeDash": "controls",
      "patternSubtypeItems": [{
        "patternPartial": "viewall-molecules-controls",
        "patternName": "View All",
        "patternPath": "01-molecules-01-controls/index.html",
        "patternType": "01-molecules",
        "order": 0
      }, {
        "patternPartial": "molecules-button-group",
        "patternName": "Button Group",
        "patternState": "",
        "patternSrcPath": "01-molecules/01-controls/00-button-group",
        "patternPath": "01-molecules-01-controls/01-molecules-01-controls.html",
        "order": 9007199254740991
      }]
    }, {
      "patternSubtypeLC": "navigation",
      "patternSubtypeUC": "Navigation",
      "patternSubtype": "02-navigation",
      "patternSubtypeDash": "navigation",
      "patternSubtypeItems": [{
        "patternPartial": "viewall-molecules-navigation",
        "patternName": "View All",
        "patternPath": "01-molecules-02-navigation/index.html",
        "patternType": "01-molecules",
        "order": 0
      }, {
        "patternPartial": "molecules-accordion-menu",
        "patternName": "Accordion Menu",
        "patternState": "",
        "patternSrcPath": "01-molecules/02-navigation/00-accordion-menu",
        "patternPath": "01-molecules-02-navigation/01-molecules-02-navigation.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "molecules-breadcrumbs",
        "patternName": "Breadcrumbs",
        "patternState": "",
        "patternSrcPath": "01-molecules/02-navigation/01-breadcrumbs",
        "patternPath": "01-molecules-02-navigation/01-molecules-02-navigation.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "molecules-drilldown-menu",
        "patternName": "Drilldown Menu",
        "patternState": "",
        "patternSrcPath": "01-molecules/02-navigation/02-drilldown-menu",
        "patternPath": "01-molecules-02-navigation/01-molecules-02-navigation.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "molecules-dropdown-menu",
        "patternName": "Dropdown Menu",
        "patternState": "",
        "patternSrcPath": "01-molecules/02-navigation/03-dropdown-menu",
        "patternPath": "01-molecules-02-navigation/01-molecules-02-navigation.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "molecules-dropdown-pane",
        "patternName": "Dropdown Pane",
        "patternState": "",
        "patternSrcPath": "01-molecules/02-navigation/04-dropdown-pane",
        "patternPath": "01-molecules-02-navigation/01-molecules-02-navigation.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "molecules-menu-variants",
        "patternName": "Menu",
        "patternState": "",
        "patternSrcPath": "01-molecules/02-navigation/05-menu-variants",
        "patternPath": "01-molecules-02-navigation/01-molecules-02-navigation.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "molecules-menu",
        "patternName": "Menu",
        "patternState": "",
        "patternSrcPath": "01-molecules/02-navigation/05-menu",
        "patternPath": "01-molecules-02-navigation/01-molecules-02-navigation.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "molecules-pagination",
        "patternName": "Pagination",
        "patternState": "",
        "patternSrcPath": "01-molecules/02-navigation/06-pagination",
        "patternPath": "01-molecules-02-navigation/01-molecules-02-navigation.html",
        "order": 9007199254740991
      }]
    }, {
      "patternSubtypeLC": "containers",
      "patternSubtypeUC": "Containers",
      "patternSubtype": "03-containers",
      "patternSubtypeDash": "containers",
      "patternSubtypeItems": [{
        "patternPartial": "viewall-molecules-containers",
        "patternName": "View All",
        "patternPath": "01-molecules-03-containers/index.html",
        "patternType": "01-molecules",
        "order": 0
      }, {
        "patternPartial": "molecules-accordion",
        "patternName": "Accordion",
        "patternState": "",
        "patternSrcPath": "01-molecules/03-containers/00-accordion",
        "patternPath": "01-molecules-03-containers/01-molecules-03-containers.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "molecules-callout",
        "patternName": "Callout",
        "patternState": "",
        "patternSrcPath": "01-molecules/03-containers/01-callout",
        "patternPath": "01-molecules-03-containers/01-molecules-03-containers.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "molecules-callout-variants",
        "patternName": "Callout Variants",
        "patternState": "",
        "patternSrcPath": "01-molecules/03-containers/02-callout-variants",
        "patternPath": "01-molecules-03-containers/01-molecules-03-containers.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "molecules-table",
        "patternName": "Table",
        "patternState": "",
        "patternSrcPath": "01-molecules/03-containers/03-table",
        "patternPath": "01-molecules-03-containers/01-molecules-03-containers.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "molecules-tabs",
        "patternName": "Tabs",
        "patternState": "",
        "patternSrcPath": "01-molecules/03-containers/04-tabs",
        "patternPath": "01-molecules-03-containers/01-molecules-03-containers.html",
        "order": 9007199254740991
      }]
    }, {
      "patternSubtypeLC": "media",
      "patternSubtypeUC": "Media",
      "patternSubtype": "04-media",
      "patternSubtypeDash": "media",
      "patternSubtypeItems": [{
        "patternPartial": "viewall-molecules-media",
        "patternName": "View All",
        "patternPath": "01-molecules-04-media/index.html",
        "patternType": "01-molecules",
        "order": 0
      }, {
        "patternPartial": "molecules-flex-video",
        "patternName": "Flex Video",
        "patternState": "",
        "patternSrcPath": "01-molecules/04-media/00-flex-video",
        "patternPath": "01-molecules-04-media/01-molecules-04-media.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "molecules-media-object",
        "patternName": "Media Object",
        "patternState": "",
        "patternSrcPath": "01-molecules/04-media/01-media-object",
        "patternPath": "01-molecules-04-media/01-molecules-04-media.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "molecules-orbit",
        "patternName": "Orbit",
        "patternState": "",
        "patternSrcPath": "01-molecules/04-media/02-orbit",
        "patternPath": "01-molecules-04-media/01-molecules-04-media.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "molecules-tooltip",
        "patternName": "Tooltip",
        "patternState": "",
        "patternSrcPath": "01-molecules/04-media/03-tooltip",
        "patternPath": "01-molecules-04-media/01-molecules-04-media.html",
        "order": 9007199254740991
      }]
    }, {
      "patternSubtypeLC": "forms",
      "patternSubtypeUC": "Forms",
      "patternSubtype": "05-forms",
      "patternSubtypeDash": "forms",
      "patternSubtypeItems": [{
        "patternPartial": "viewall-molecules-forms",
        "patternName": "View All",
        "patternPath": "01-molecules-05-forms/index.html",
        "patternType": "01-molecules",
        "order": 0
      }, {
        "patternPartial": "molecules-input",
        "patternName": "Input",
        "patternState": "",
        "patternSrcPath": "01-molecules/05-forms/00-input",
        "patternPath": "01-molecules-05-forms/01-molecules-05-forms.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "molecules-input-variants",
        "patternName": "Input Variants",
        "patternState": "",
        "patternSrcPath": "01-molecules/05-forms/01-input-variants",
        "patternPath": "01-molecules-05-forms/01-molecules-05-forms.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "molecules-radio",
        "patternName": "Radio",
        "patternState": "",
        "patternSrcPath": "01-molecules/05-forms/02-radio",
        "patternPath": "01-molecules-05-forms/01-molecules-05-forms.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "molecules-checkbox",
        "patternName": "Checkbox",
        "patternState": "",
        "patternSrcPath": "01-molecules/05-forms/03-checkbox",
        "patternPath": "01-molecules-05-forms/01-molecules-05-forms.html",
        "order": 9007199254740991
      }, {
        "patternPartial": "molecules-input-group",
        "patternName": "Input Group",
        "patternState": "",
        "patternSrcPath": "01-molecules/05-forms/04-input-group",
        "patternPath": "01-molecules-05-forms/01-molecules-05-forms.html",
        "order": 9007199254740991
      }]
    }],
    "patternItems": [{
      "patternPartial": "viewall-molecules-all",
      "patternName": "View All",
      "patternPath": "01-molecules/index.html",
      "order": -9007199254740991
    }]
  }, {
    "patternTypeLC": "organisms",
    "patternTypeUC": "Organisms",
    "patternType": "02-organisms",
    "patternTypeDash": "organisms",
    "patternTypeItems": [{
      "patternSubtypeLC": "navigation",
      "patternSubtypeUC": "Navigation",
      "patternSubtype": "02-navigation",
      "patternSubtypeDash": "navigation",
      "patternSubtypeItems": [{
        "patternPartial": "viewall-organisms-navigation",
        "patternName": "View All",
        "patternPath": "02-organisms-02-navigation/index.html",
        "patternType": "02-organisms",
        "order": 0
      }, {
        "patternPartial": "organisms-top-bar",
        "patternName": "Top Bar",
        "patternState": "",
        "patternSrcPath": "02-organisms/02-navigation/00-top-bar",
        "patternPath": "02-organisms-02-navigation/02-organisms-02-navigation.html",
        "order": 9007199254740991
      }]
    }],
    "patternItems": [{
      "patternPartial": "viewall-organisms-all",
      "patternName": "View All",
      "patternPath": "02-organisms/index.html",
      "order": -9007199254740991
    }]
  }],
  "ishControlsHide": {
    "s": false,
    "m": false,
    "l": false,
    "full": false,
    "random": false,
    "disco": false,
    "hay": true,
    "mqs": false,
    "find": false,
    "views-all": false,
    "views-annotations": false,
    "views-code": false,
    "views-new": false,
    "tools-all": false,
    "tools-docs": false
  }
};
var patternPaths = {
  "atoms": {
    "colors": "00-atoms-00-global-00-colors",
    "fonts": "00-atoms-00-global-01-fonts",
    "animations": "00-atoms-00-global-02-animations",
    "headings": "00-atoms-01-text-00-headings",
    "paragraph": "00-atoms-01-text-01-paragraph",
    "blockquote": "00-atoms-01-text-02-blockquote",
    "inline-elements": "00-atoms-01-text-03-inline-elements",
    "time": "00-atoms-01-text-04-time",
    "preformatted-text": "00-atoms-01-text-05-preformatted-text",
    "hr": "00-atoms-01-text-06-hr",
    "unordered": "00-atoms-02-lists-00-unordered",
    "ordered": "00-atoms-02-lists-01-ordered",
    "definition": "00-atoms-02-lists-02-definition",
    "button": "00-atoms-03-controls-00-button",
    "button-variants": "00-atoms-03-controls-01-button-variants",
    "slider": "00-atoms-03-controls-02-slider",
    "slider-variants": "00-atoms-03-controls-03-slider-variants",
    "switch": "00-atoms-03-controls-04-switch",
    "switch-variants": "00-atoms-03-controls-05-switch-variants",
    "close-button": "00-atoms-03-controls-06-close-button",
    "badge": "00-atoms-04-media-00-badge",
    "badge-variants": "00-atoms-04-media-01-badge-variants",
    "label": "00-atoms-04-media-02-label",
    "label-variants": "00-atoms-04-media-03-label-variants",
    "thumbnail": "00-atoms-04-media-04-thumbnail"
  },
  "molecules": {
    "float-classes": "01-molecules-00-layout-00-float-classes",
    "button-group": "01-molecules-01-controls-00-button-group",
    "accordion-menu": "01-molecules-02-navigation-00-accordion-menu",
    "breadcrumbs": "01-molecules-02-navigation-01-breadcrumbs",
    "drilldown-menu": "01-molecules-02-navigation-02-drilldown-menu",
    "dropdown-menu": "01-molecules-02-navigation-03-dropdown-menu",
    "dropdown-pane": "01-molecules-02-navigation-04-dropdown-pane",
    "menu-variants": "01-molecules-02-navigation-05-menu-variants",
    "menu": "01-molecules-02-navigation-05-menu",
    "pagination": "01-molecules-02-navigation-06-pagination",
    "accordion": "01-molecules-03-containers-00-accordion",
    "callout": "01-molecules-03-containers-01-callout",
    "callout-variants": "01-molecules-03-containers-02-callout-variants",
    "table": "01-molecules-03-containers-03-table",
    "tabs": "01-molecules-03-containers-04-tabs",
    "flex-video": "01-molecules-04-media-00-flex-video",
    "media-object": "01-molecules-04-media-01-media-object",
    "orbit": "01-molecules-04-media-02-orbit",
    "tooltip": "01-molecules-04-media-03-tooltip",
    "input": "01-molecules-05-forms-00-input",
    "input-variants": "01-molecules-05-forms-01-input-variants",
    "radio": "01-molecules-05-forms-02-radio",
    "checkbox": "01-molecules-05-forms-03-checkbox",
    "input-group": "01-molecules-05-forms-04-input-group"
  },
  "organisms": { "top-bar": "02-organisms-02-navigation-00-top-bar" }
};
var viewAllPaths = {
  "atoms": {
    "global": "00-atoms-00-global",
    "all": "00-atoms",
    "text": "00-atoms-01-text",
    "lists": "00-atoms-02-lists",
    "controls": "00-atoms-03-controls",
    "media": "00-atoms-04-media"
  },
  "molecules": {
    "layout": "01-molecules-00-layout",
    "all": "01-molecules",
    "controls": "01-molecules-01-controls",
    "navigation": "01-molecules-02-navigation",
    "containers": "01-molecules-03-containers",
    "media": "01-molecules-04-media",
    "forms": "01-molecules-05-forms"
  },
  "organisms": { "navigation": "02-organisms-02-navigation", "all": "02-organisms" }
};
var plugins = [];
var theme = undefined;
var defaultShowPatternInfo = false;
var defaultPattern = "all";
