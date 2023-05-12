"use strict";
exports.id = 727;
exports.ids = [727];
exports.modules = {

/***/ 2727:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "diagram": () => (/* binding */ diagram)
/* harmony export */ });
/* harmony import */ var _styles_16907e1b_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1833);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9857);
/* harmony import */ var dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(680);
/* harmony import */ var _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(314);
/* harmony import */ var _index_5219d011_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8599);
/* harmony import */ var _utils_d622194a_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8786);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2841);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3598);
/* harmony import */ var dagre_d3_es_src_dagre_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2701);
/* harmony import */ var dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3893);
/* harmony import */ var _khanacademy_simple_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4174);
/* harmony import */ var _braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5123);




















const sanitizeText = (txt) => _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.e.sanitizeText(txt, (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.g)());
let conf = {
  dividerMargin: 10,
  padding: 5,
  textHeight: 10,
  curve: void 0
};
const addClasses = function(classes, g, _id, diagObj) {
  const keys = Object.keys(classes);
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.l.info("keys:", keys);
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.l.info(classes);
  keys.forEach(function(id) {
    var _a, _b;
    const vertex = classes[id];
    let cssClassStr = "";
    if (vertex.cssClasses.length > 0) {
      cssClassStr = cssClassStr + " " + vertex.cssClasses.join(" ");
    }
    const styles2 = { labelStyle: "", style: "" };
    const vertexText = vertex.label ?? vertex.id;
    const radius = 0;
    const shape = "class_box";
    const node = {
      labelStyle: styles2.labelStyle,
      shape,
      labelText: sanitizeText(vertexText),
      classData: vertex,
      rx: radius,
      ry: radius,
      class: cssClassStr,
      style: styles2.style,
      id: vertex.id,
      domId: vertex.domId,
      tooltip: diagObj.db.getTooltip(vertex.id) || "",
      haveCallback: vertex.haveCallback,
      link: vertex.link,
      width: vertex.type === "group" ? 500 : void 0,
      type: vertex.type,
      // TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
      padding: ((_a = (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.g)().flowchart) == null ? void 0 : _a.padding) ?? ((_b = (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.g)().class) == null ? void 0 : _b.padding)
    };
    g.setNode(vertex.id, node);
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.l.info("setNode", node);
  });
};
const addNotes = function(notes, g, startEdgeId, classes) {
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.l.info(notes);
  notes.forEach(function(note, i) {
    var _a, _b;
    const vertex = note;
    const cssNoteStr = "";
    const styles2 = { labelStyle: "", style: "" };
    const vertexText = vertex.text;
    const radius = 0;
    const shape = "note";
    const node = {
      labelStyle: styles2.labelStyle,
      shape,
      labelText: sanitizeText(vertexText),
      noteData: vertex,
      rx: radius,
      ry: radius,
      class: cssNoteStr,
      style: styles2.style,
      id: vertex.id,
      domId: vertex.id,
      tooltip: "",
      type: "note",
      // TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
      padding: ((_a = (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.g)().flowchart) == null ? void 0 : _a.padding) ?? ((_b = (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.g)().class) == null ? void 0 : _b.padding)
    };
    g.setNode(vertex.id, node);
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.l.info("setNode", node);
    if (!vertex.class || !(vertex.class in classes)) {
      return;
    }
    const edgeId = startEdgeId + i;
    const edgeData = {
      id: `edgeNote${edgeId}`,
      //Set relationship style and line type
      classes: "relation",
      pattern: "dotted",
      // Set link type for rendering
      arrowhead: "none",
      //Set edge extra labels
      startLabelRight: "",
      endLabelLeft: "",
      //Set relation arrow types
      arrowTypeStart: "none",
      arrowTypeEnd: "none",
      style: "fill:none",
      labelStyle: "",
      curve: (0,_utils_d622194a_js__WEBPACK_IMPORTED_MODULE_9__.o)(conf.curve, d3__WEBPACK_IMPORTED_MODULE_0__/* .curveLinear */ .c_6)
    };
    g.setEdge(vertex.id, vertex.class, edgeData, edgeId);
  });
};
const addRelations = function(relations, g) {
  const conf2 = (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.g)().flowchart;
  let cnt = 0;
  relations.forEach(function(edge) {
    var _a;
    cnt++;
    const edgeData = {
      //Set relationship style and line type
      classes: "relation",
      pattern: edge.relation.lineType == 1 ? "dashed" : "solid",
      id: "id" + cnt,
      // Set link type for rendering
      arrowhead: edge.type === "arrow_open" ? "none" : "normal",
      //Set edge extra labels
      startLabelRight: edge.relationTitle1 === "none" ? "" : edge.relationTitle1,
      endLabelLeft: edge.relationTitle2 === "none" ? "" : edge.relationTitle2,
      //Set relation arrow types
      arrowTypeStart: getArrowMarker(edge.relation.type1),
      arrowTypeEnd: getArrowMarker(edge.relation.type2),
      style: "fill:none",
      labelStyle: "",
      curve: (0,_utils_d622194a_js__WEBPACK_IMPORTED_MODULE_9__.o)(conf2 == null ? void 0 : conf2.curve, d3__WEBPACK_IMPORTED_MODULE_0__/* .curveLinear */ .c_6)
    };
    _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.l.info(edgeData, edge);
    if (edge.style !== void 0) {
      const styles2 = (0,_utils_d622194a_js__WEBPACK_IMPORTED_MODULE_9__.n)(edge.style);
      edgeData.style = styles2.style;
      edgeData.labelStyle = styles2.labelStyle;
    }
    edge.text = edge.title;
    if (edge.text === void 0) {
      if (edge.style !== void 0) {
        edgeData.arrowheadStyle = "fill: #333";
      }
    } else {
      edgeData.arrowheadStyle = "fill: #333";
      edgeData.labelpos = "c";
      if (((_a = (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.g)().flowchart) == null ? void 0 : _a.htmlLabels) ?? (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.g)().htmlLabels) {
        edgeData.labelType = "html";
        edgeData.label = '<span class="edgeLabel">' + edge.text + "</span>";
      } else {
        edgeData.labelType = "text";
        edgeData.label = edge.text.replace(_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.e.lineBreakRegex, "\n");
        if (edge.style === void 0) {
          edgeData.style = edgeData.style || "stroke: #333; stroke-width: 1.5px;fill:none";
        }
        edgeData.labelStyle = edgeData.labelStyle.replace("color:", "fill:");
      }
    }
    g.setEdge(edge.id1, edge.id2, edgeData, cnt);
  });
};
const setConf = function(cnf) {
  conf = {
    ...conf,
    ...cnf
  };
};
const draw = function(text, id, _version, diagObj) {
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.l.info("Drawing class - ", id);
  const conf2 = (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.g)().flowchart ?? (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.g)().class;
  const securityLevel = (0,_commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.g)().securityLevel;
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.l.info("config:", conf2);
  const nodeSpacing = (conf2 == null ? void 0 : conf2.nodeSpacing) ?? 50;
  const rankSpacing = (conf2 == null ? void 0 : conf2.rankSpacing) ?? 50;
  const g = new dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_1__/* .Graph */ .k({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: diagObj.db.getDirection(),
    nodesep: nodeSpacing,
    ranksep: rankSpacing,
    marginx: 8,
    marginy: 8
  }).setDefaultEdgeLabel(function() {
    return {};
  });
  const classes = diagObj.db.getClasses();
  const relations = diagObj.db.getRelations();
  const notes = diagObj.db.getNotes();
  _commonDb_573409be_js__WEBPACK_IMPORTED_MODULE_8__.l.info(relations);
  addClasses(classes, g, id, diagObj);
  addRelations(relations, g);
  addNotes(notes, g, relations.length + 1, classes);
  let sandboxElement;
  if (securityLevel === "sandbox") {
    sandboxElement = (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)("#i" + id);
  }
  const root = securityLevel === "sandbox" ? (
    // @ts-ignore Ignore type error for now
    (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)(sandboxElement.nodes()[0].contentDocument.body)
  ) : (0,d3__WEBPACK_IMPORTED_MODULE_0__/* .select */ .Ys)("body");
  const svg = root.select(`[id="${id}"]`);
  const element = root.select("#" + id + " g");
  (0,_index_5219d011_js__WEBPACK_IMPORTED_MODULE_10__.r)(
    element,
    g,
    ["aggregation", "extension", "composition", "dependency", "lollipop"],
    "classDiagram",
    id
  );
  _utils_d622194a_js__WEBPACK_IMPORTED_MODULE_9__.u.insertTitle(svg, "classTitleText", (conf2 == null ? void 0 : conf2.titleTopMargin) ?? 5, diagObj.db.getDiagramTitle());
  (0,_utils_d622194a_js__WEBPACK_IMPORTED_MODULE_9__.s)(g, svg, conf2 == null ? void 0 : conf2.diagramPadding, conf2 == null ? void 0 : conf2.useMaxWidth);
  if (!(conf2 == null ? void 0 : conf2.htmlLabels)) {
    const doc = securityLevel === "sandbox" ? sandboxElement.nodes()[0].contentDocument : document;
    const labels = doc.querySelectorAll('[id="' + id + '"] .edgeLabel .label');
    for (const label of labels) {
      const dim = label.getBBox();
      const rect = doc.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("rx", 0);
      rect.setAttribute("ry", 0);
      rect.setAttribute("width", dim.width);
      rect.setAttribute("height", dim.height);
      label.insertBefore(rect, label.firstChild);
    }
  }
};
function getArrowMarker(type) {
  let marker;
  switch (type) {
    case 0:
      marker = "aggregation";
      break;
    case 1:
      marker = "extension";
      break;
    case 2:
      marker = "composition";
      break;
    case 3:
      marker = "dependency";
      break;
    case 4:
      marker = "lollipop";
      break;
    default:
      marker = "none";
  }
  return marker;
}
const renderer = {
  setConf,
  draw
};
const diagram = {
  parser: _styles_16907e1b_js__WEBPACK_IMPORTED_MODULE_11__.p,
  db: _styles_16907e1b_js__WEBPACK_IMPORTED_MODULE_11__.d,
  renderer,
  styles: _styles_16907e1b_js__WEBPACK_IMPORTED_MODULE_11__.s,
  init: (cnf) => {
    if (!cnf.class) {
      cnf.class = {};
    }
    cnf.class.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    _styles_16907e1b_js__WEBPACK_IMPORTED_MODULE_11__.d.clear();
  }
};

//# sourceMappingURL=classDiagram-v2-72bddc41.js.map


/***/ })

};
;