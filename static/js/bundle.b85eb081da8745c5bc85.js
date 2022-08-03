/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 2921:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// NAMESPACE OBJECT: ./src/store/rootReducer.ts
var rootReducer_namespaceObject = {};
__webpack_require__.r(rootReducer_namespaceObject);
__webpack_require__.d(rootReducer_namespaceObject, {
  "default": () => (store_rootReducer)
});

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 18 modules
var es = __webpack_require__(9704);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/index.js + 18 modules
var config_provider = __webpack_require__(3869);
// EXTERNAL MODULE: ./node_modules/antd/lib/locale/ru_RU.js
var ru_RU = __webpack_require__(1612);
// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(7484);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./node_modules/dayjs/locale/ru.js
var ru = __webpack_require__(600);
// EXTERNAL MODULE: ./node_modules/react-router-dom/index.js
var react_router_dom = __webpack_require__(9711);
// EXTERNAL MODULE: ./node_modules/react-router/index.js
var react_router = __webpack_require__(6974);
// EXTERNAL MODULE: ./node_modules/antd/es/layout/index.js
var layout = __webpack_require__(7183);
;// CONCATENATED MODULE: ./src/hocs/WithPageContent/WithPageContent.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const WithPageContent_WithPageContent = ({"content":"dk30mc1B4ADSvoNjT5RU","breadcrumbs":"NdNN4NKKE4vF4lYo_LWB"});
;// CONCATENATED MODULE: ./src/hocs/WithPageContent/WithPageContent.tsx



var Content = layout/* default.Content */.Z.Content;

var WithPageContent = function WithPageContent(props) {
  var children = props.children;
  return /*#__PURE__*/react.createElement(Content, {
    className: WithPageContent_WithPageContent.content
  }, children);
};

/* harmony default export */ const hocs_WithPageContent_WithPageContent = (WithPageContent);
// EXTERNAL MODULE: ./src/common/img/logo-white.svg
var logo_white = __webpack_require__(5611);
;// CONCATENATED MODULE: ./src/layout/Header/Header.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Header = ({"header":"VhFyipUdsszphNgS1SWR","logo":"S5Nswz50FkmpvGLr93jt"});
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(7536);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(1577);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 22 modules
var modal = __webpack_require__(2214);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 7 modules
var input = __webpack_require__(5019);
// EXTERNAL MODULE: ./node_modules/antd/es/divider/index.js
var divider = __webpack_require__(7049);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/UserOutlined.js + 1 modules
var UserOutlined = __webpack_require__(9366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(9439);
;// CONCATENATED MODULE: ./src/features/login/components/LoginModal/useLoginModal.ts



var useLoginModal = function useLoginModal() {
  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      isModalVisible = _useState2[0],
      setModalVisibility = _useState2[1];

  var _useForm = (0,index_esm/* useForm */.cI)(),
      control = _useForm.control,
      handleSubmit = _useForm.handleSubmit;

  var onSubmit = handleSubmit(function (params) {
    return console.log(params);
  });
  return {
    values: {
      isModalVisible: isModalVisible,
      control: control
    },
    operations: {
      setModalVisibility: setModalVisibility,
      onSubmit: onSubmit
    }
  };
};
// EXTERNAL MODULE: ./src/features/login/components/LoginModal/img/justice.svg
var justice = __webpack_require__(5599);
// EXTERNAL MODULE: ./src/features/login/components/LoginModal/img/vk.svg
var vk = __webpack_require__(7245);
;// CONCATENATED MODULE: ./src/features/login/components/LoginModal/LoginModal.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const LoginModal = ({"loginBtn":"jt3FGKkGnM2G2rS770X9","wrapper":"_qghPSyKBNpow0sdNbMx","form":"XG3AFCF4BMCPxEXzQnus","submitBtn":"_Vn0lSvwwANUz_vaYUyQ","socialsWrapper":"MxsMY4sN43A4DxJ8fy8f"});
;// CONCATENATED MODULE: ./src/components/Label/Label.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Label_Label = ({"label":"p4KpWw_jqd8bXlI9uF9i","column":"AnM7AdYLz0gcr2ZVlIOE","labelText":"xXoBq7Rt39OKWjei59xk"});
;// CONCATENATED MODULE: ./src/components/Label/Label.tsx



var Label = function Label(props) {
  var label = props.label,
      children = props.children,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style,
      _props$isRow = props.isRow,
      isRow = _props$isRow === void 0 ? false : _props$isRow,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className;
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    react.createElement("label", {
      style: style,
      className: [Label_Label.label, className].concat(isRow ? [] : Label_Label.column).join(' ')
    }, /*#__PURE__*/react.createElement("span", {
      className: Label_Label.labelText
    }, label), children)
  );
};

/* harmony default export */ const components_Label_Label = (Label);
;// CONCATENATED MODULE: ./src/features/login/components/LoginModal/LoginModal.tsx










var LoginModalView = function LoginModalView(props) {
  var _props$values = props.values,
      isModalVisible = _props$values.isModalVisible,
      control = _props$values.control,
      _props$operations = props.operations,
      setModalVisibility = _props$operations.setModalVisibility,
      onSubmit = _props$operations.onSubmit;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(es_button/* default */.Z, {
    className: LoginModal.loginBtn,
    type: "link",
    onClick: function onClick() {
      return setModalVisibility(true);
    }
  }, "\u0412\u043E\u0439\u0442\u0438"), /*#__PURE__*/react.createElement(modal/* default */.Z, {
    title: "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C",
    centered: true,
    visible: isModalVisible,
    width: 1000,
    footer: null
  }, /*#__PURE__*/react.createElement("div", {
    className: LoginModal.wrapper
  }, /*#__PURE__*/react.createElement("form", {
    className: LoginModal.form,
    onSubmit: onSubmit
  }, /*#__PURE__*/react.createElement(index_esm/* Controller */.Qr, {
    name: "login",
    control: control,
    render: function render(_ref) {
      var onChange = _ref.field.onChange;
      return /*#__PURE__*/react.createElement(components_Label_Label, {
        label: "\u041B\u043E\u0433\u0438\u043D"
      }, /*#__PURE__*/react.createElement(input/* default */.Z, {
        size: "large",
        onChange: onChange,
        prefix: /*#__PURE__*/react.createElement(UserOutlined/* default */.Z, null),
        placeholder: "example@email.ru"
      }));
    }
  }), /*#__PURE__*/react.createElement(index_esm/* Controller */.Qr, {
    name: "password",
    control: control,
    render: function render(_ref2) {
      var onChange = _ref2.field.onChange;
      return /*#__PURE__*/react.createElement(components_Label_Label, {
        label: "\u041F\u0430\u0440\u043E\u043B\u044C"
      }, /*#__PURE__*/react.createElement(input/* default.Password */.Z.Password, {
        size: "large",
        onChange: onChange,
        placeholder: "example@email.ru"
      }));
    }
  }), /*#__PURE__*/react.createElement(es_button/* default */.Z, {
    onSubmit: onSubmit,
    className: LoginModal.submitBtn,
    size: "large",
    type: "primary"
  }, "\u0412\u043E\u0439\u0442\u0438"), /*#__PURE__*/react.createElement(divider/* default */.Z, null, "\u0438\u043B\u0438"), /*#__PURE__*/react.createElement("div", {
    className: LoginModal.socialsWrapper
  }, /*#__PURE__*/react.createElement("img", {
    src: vk,
    alt: "vk"
  }))), /*#__PURE__*/react.createElement("img", {
    width: 500,
    src: justice,
    alt: "\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"
  }))));
};

/* harmony default export */ const LoginModal_LoginModal = (function () {
  var behavior = useLoginModal();
  return /*#__PURE__*/react.createElement(LoginModalView, behavior);
});
;// CONCATENATED MODULE: ./src/layout/Header/Header.tsx





var Header_Header = layout/* default.Header */.Z.Header;

var AppHeader = function AppHeader() {
  return /*#__PURE__*/react.createElement(Header_Header, {
    className: Header.header
  }, /*#__PURE__*/react.createElement("img", {
    className: Header.logo,
    src: logo_white,
    alt: "logo"
  }), /*#__PURE__*/react.createElement("div", {
    className: "logo"
  }), /*#__PURE__*/react.createElement(LoginModal_LoginModal, null));
};

/* harmony default export */ const layout_Header_Header = (AppHeader);
;// CONCATENATED MODULE: ./src/layout/Footer/Footer.tsx


var Footer = layout/* default.Footer */.Z.Footer;

var AppFooter = function AppFooter() {
  return /*#__PURE__*/react.createElement(Footer, {
    style: {
      textAlign: 'center'
    }
  }, "Ant Design \xA92018 Created by Ant UED");
};

/* harmony default export */ const Footer_Footer = (AppFooter);
;// CONCATENATED MODULE: ./src/app/pathDict.ts
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-shadow,no-unused-vars
var pathDict = {
  root: {
    pathname: '/home'
  },
  about: {
    pathname: '/about'
  },
  calculators: {
    pathname: '/calculators'
  },
  getCalculatorById: function getCalculatorById(calcId) {
    return {
      pathname: "/calculators/".concat(calcId)
    };
  }
};
/* harmony default export */ const app_pathDict = (pathDict);
// EXTERNAL MODULE: ./node_modules/antd/es/typography/index.js + 19 modules
var typography = __webpack_require__(7009);
// EXTERNAL MODULE: ./node_modules/antd/es/breadcrumb/index.js + 5 modules
var breadcrumb = __webpack_require__(2498);
// EXTERNAL MODULE: ./node_modules/antd/es/row/index.js + 3 modules
var row = __webpack_require__(2161);
// EXTERNAL MODULE: ./node_modules/antd/es/col/index.js + 1 modules
var col = __webpack_require__(1635);
// EXTERNAL MODULE: ./src/pages/Main/img/home.svg
var home = __webpack_require__(168);
// EXTERNAL MODULE: ./src/pages/Main/img/home2.svg
var home2 = __webpack_require__(2514);
// EXTERNAL MODULE: ./src/pages/Main/img/target.png
var target = __webpack_require__(8377);
// EXTERNAL MODULE: ./src/pages/Main/img/checked.png
var checked = __webpack_require__(8884);
// EXTERNAL MODULE: ./src/pages/Main/img/document.png
var img_document = __webpack_require__(1186);
// EXTERNAL MODULE: ./src/pages/Main/img/shield.png
var shield = __webpack_require__(8542);
;// CONCATENATED MODULE: ./src/pages/Main/Main.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const Main_Main = ({"section":"x7Z8tTAuieCUQsoV9vGK","textSubsectionLeft":"li0c74PCHapdrvbgTfhT","sectionImage":"XgRSRpCB5RgKdZNaSQtw","textSubsectionRight":"LPZvUzJwP_FBSjt4GoUH","textWhite":"wddk9kxYBmH6GHWxiopF","sectionBlue":"XXYymz8UI_s84uEfZh8o","advantagesItem":"MSs_7w43yBFmaIysnX4X","advantagesTitle":"V4_jLhYJyDu4y07AmbrW","advantagesText":"POBpvRH82LOfvT68kr7V","sectionImageWrapper":"sf0NRoNQNyMiucnHioxB","toCalcWrapper":"lBYpFKBIfc4EQhv0L3KE"});
;// CONCATENATED MODULE: ./src/pages/Main/Main.tsx











var Title = typography/* default.Title */.Z.Title,
    Paragraph = typography/* default.Paragraph */.Z.Paragraph,
    Text = typography/* default.Text */.Z.Text;
var advantagesList = [{
  imagePath: target,
  title: 'Точность расчётов',
  text: 'Программный расчёт исключает ошибки, связанные с человеческим фактором'
}, {
  imagePath: img_document,
  title: 'Документ готов для суда',
  text: 'Вам останется только указать реквизиты сторон и судебного дела'
}, {
  imagePath: shield,
  title: 'Сохранение данных расчёта',
  text: 'Вы сможете вернуться к расчёту в любое время или пересчитать неустойку после претензии для подготовки иска'
}, {
  imagePath: checked,
  title: 'Актуальность данных',
  text: 'Данные о ставце ЦБ РФ и иные, которые важны для расчёта регулярно обновляются и всегда будут актуальны'
}];

var Main = function Main() {
  var navigate = (0,react_router/* useNavigate */.s0)();

  var calcsNavitageHandler = function calcsNavitageHandler() {
    return navigate(app_pathDict.calculators);
  };

  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(breadcrumb/* default */.Z, {
    style: {
      padding: '16px 0'
    }
  }, /*#__PURE__*/react.createElement(breadcrumb/* default.Item */.Z.Item, null, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F")), /*#__PURE__*/react.createElement(row/* default */.Z, {
    className: Main_Main.section
  }, /*#__PURE__*/react.createElement(col/* default */.Z, {
    lg: 12,
    className: Main_Main.textSubsectionLeft
  }, /*#__PURE__*/react.createElement(typography/* default */.Z, null, /*#__PURE__*/react.createElement(Title, {
    level: 3
  }, "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440\u044B"), /*#__PURE__*/react.createElement(Paragraph, null, "\u041F\u0440\u043E\u0435\u043A\u0442 \u0441\u043E\u0437\u0434\u0430\u043D \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0443\u044E\u0449\u0438\u043C\u0438 \u044E\u0440\u0438\u0441\u0442\u0430\u043C\u0438", ' ', /*#__PURE__*/react.createElement("br", null), ' ', "(\u043D\u0435 \u0431\u0435\u0437 \u043F\u043E\u043C\u043E\u0449\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442\u043E\u0432) \u0434\u043B\u044F \u0434\u0440\u0443\u0433\u0438\u0445 \u044E\u0440\u0438\u0441\u0442\u043E\u0432 \u0438 \u0432\u0441\u0435\u0445 \u0442\u0435\u0445, \u043A\u043E\u043C\u0443 \u043D\u0443\u0436\u043D\u043E \u043F\u043E\u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0447\u0442\u043E-\u0442\u043E \u0434\u043B\u044F \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u043F\u0440\u0435\u0442\u0435\u043D\u0437\u0438\u0438, \u0438\u0441\u043A\u043E\u0432\u043E\u0433\u043E \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u0438 \u0432 \u0438\u043D\u044B\u0445 \u0441\u043B\u0443\u0447\u0430\u044F\u0445"), /*#__PURE__*/react.createElement("div", {
    className: Main_Main.toCalcWrapper
  }, /*#__PURE__*/react.createElement(es_button/* default */.Z, {
    onClick: calcsNavitageHandler,
    size: "large",
    shape: "round",
    type: "primary"
  }, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440\u0430\u043C")))), /*#__PURE__*/react.createElement(col/* default */.Z, {
    className: Main_Main.sectionImageWrapper,
    lg: 12
  }, /*#__PURE__*/react.createElement("img", {
    className: Main_Main.sectionImage,
    width: "400",
    src: home,
    alt: "justice"
  }))), /*#__PURE__*/react.createElement(row/* default */.Z, {
    className: "".concat(Main_Main.section, " ").concat(Main_Main.sectionBlue)
  }, /*#__PURE__*/react.createElement(col/* default */.Z, {
    lg: 12,
    className: Main_Main.sectionImageWrapper
  }, /*#__PURE__*/react.createElement("img", {
    className: Main_Main.sectionImage,
    width: "200",
    src: home2,
    alt: "justice"
  })), /*#__PURE__*/react.createElement(col/* default */.Z, {
    lg: 12,
    className: Main_Main.textSubsectionRight
  }, /*#__PURE__*/react.createElement(typography/* default */.Z, null, /*#__PURE__*/react.createElement(Paragraph, {
    className: Main_Main.textWhite
  }, "\u041D\u0430\u0448 \u0441\u0435\u0440\u0432\u0438\u0441 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D \u0434\u043B\u044F \u044E\u0440\u0438\u0441\u0442\u043E\u0432, \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043E\u0432 \u0438 \u043E\u0431\u044B\u0447\u043D\u044B\u0445 \u0433\u0440\u0430\u0436\u0434\u0430\u043D, \u043F\u0440\u0438\u0437\u0432\u0430\u043D \u0443\u0441\u0442\u0440\u0430\u043D\u0438\u0442\u044C \u0433\u043E\u043B\u043E\u0432\u043D\u0443\u044E \u0431\u043E\u043B\u044C, \u0432\u043E\u0437\u043D\u0438\u043A\u0430\u044E\u0449\u0443\u044E \u0443 \u044E\u0440\u0438\u0441\u0442\u043E\u0432 \u0432 \u0441\u0435\u0433\u043E\u0434\u043D\u044F\u0448\u043D\u0438\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u0445 \u0434\u0435\u0444\u0438\u0446\u0438\u0442\u0430 \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u043F\u0440\u0438 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u0435\u043D\u0438\u0438 \u0441\u043B\u043E\u0436\u043D\u044B\u0445 \u0440\u0430\u0441\u0447\u0451\u0442\u043E\u0432 \u0431\u0435\u0437 \u043F\u043E\u0442\u0435\u0440\u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0433\u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430 \u0438 \u043F\u043E\u043F\u0440\u0430\u0432\u043E\u043A \u043D\u0430 \u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u043A\u0438\u0439 \u0444\u0430\u043A\u0442\u043E\u0440. \u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u043E\u0432, \u0438\u043C\u0435\u044E\u0449\u0438\u0445 \u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u043E\u043F\u044B\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0433\u043E \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F \u0438 \u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0441\u0443\u0434\u0435\u0431\u043D\u044B\u0445 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432.")))), /*#__PURE__*/react.createElement(row/* default */.Z, {
    className: Main_Main.section
  }, advantagesList.map(function (it) {
    return /*#__PURE__*/react.createElement(col/* default */.Z, {
      xs: 12,
      lg: 6,
      className: Main_Main.advantagesItem
    }, /*#__PURE__*/react.createElement(Text, {
      className: Main_Main.advantagesTitle
    }, it.title), /*#__PURE__*/react.createElement("img", {
      width: "100",
      src: it.imagePath,
      alt: it.title
    }), /*#__PURE__*/react.createElement(Text, {
      className: Main_Main.advantagesText
    }, it.text));
  })));
};

/* harmony default export */ const pages_Main_Main = (Main);
;// CONCATENATED MODULE: ./src/pages/About/About.tsx


var About_Title = typography/* default.Title */.Z.Title,
    About_Paragraph = typography/* default.Paragraph */.Z.Paragraph,
    About_Text = typography/* default.Text */.Z.Text;

var About = function About() {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(breadcrumb/* default */.Z, {
    style: {
      padding: '16px 0'
    }
  }, /*#__PURE__*/react.createElement(breadcrumb/* default.Item */.Z.Item, null, "\u041E \u041D\u0430\u0441")), /*#__PURE__*/react.createElement(typography/* default */.Z, null, /*#__PURE__*/react.createElement(About_Title, null, "About"), /*#__PURE__*/react.createElement(About_Paragraph, null, "In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development."), /*#__PURE__*/react.createElement(About_Paragraph, null, "After massive project practice and summaries, Ant Design, a design language for background applications, is refined by Ant UED Team, which aims to", ' ', /*#__PURE__*/react.createElement(About_Text, {
    strong: true
  }, "uniform the user interface specs for internal background projects, lower the unnecessary cost of design differences and implementation and liberate the resources of design and front-end development"), "."), /*#__PURE__*/react.createElement(About_Title, {
    level: 2
  }, "Guidelines and Resources"), /*#__PURE__*/react.createElement(About_Paragraph, null, "We supply a series of design principles, practical patterns and high quality design resources (", /*#__PURE__*/react.createElement(About_Text, {
    code: true
  }, "Sketch"), ' ', "and", ' ', /*#__PURE__*/react.createElement(About_Text, {
    code: true
  }, "Axure"), "), to help people create their product prototypes beautifully and efficiently.")));
};

/* harmony default export */ const About_About = (About);
// EXTERNAL MODULE: ./node_modules/antd/es/date-picker/index.js + 59 modules
var date_picker = __webpack_require__(1505);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(3433);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CloseCircleOutlined.js + 1 modules
var CloseCircleOutlined = __webpack_require__(3218);
;// CONCATENATED MODULE: ./src/features/calculators/components/DynamicTable/DynamicTable.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const DynamicTable_DynamicTable = ({"item":"CaJjH60iNtUjnfDkEYBA","wrapper":"Xqk_Vl2MPlp5pfhmnfyT","deleteButton":"nX7VhHEreJvP8R6MezCo","sumWrapper":"W5cq3taN0ffPjEgtarJy"});
;// CONCATENATED MODULE: ./src/features/calculators/components/DynamicTable/DynamicTable.tsx








var initialState = [];

var DynamicTable = function DynamicTable(props) {
  var _useState = (0,react.useState)(initialState),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var label = props.label,
      onChange = props.onChange;

  var addItem = function addItem() {
    return setState(function (prevState) {
      return [].concat((0,toConsumableArray/* default */.Z)(prevState), [{
        id: state.length,
        sum: 0,
        date: 0
      }]);
    });
  };

  var inputHandler = function inputHandler(params) {
    var id = params.id,
        inputSum = params.inputSum,
        inputDate = params.inputDate;

    if (inputSum !== undefined) {
      var _state$find = state.find(function (it) {
        return it.id === id;
      }),
          date = _state$find.date;

      var _filteredState = state.filter(function (it) {
        return it.id !== id;
      });

      var _payload = [].concat((0,toConsumableArray/* default */.Z)(_filteredState), [{
        id: id,
        sum: inputSum,
        date: date
      }]);

      onChange(_payload);
      setState(_payload);
    }

    var _state$find2 = state.find(function (it) {
      return it.id === id;
    }),
        sum = _state$find2.sum;

    var filteredState = state.filter(function (it) {
      return it.id !== id;
    });
    var payload = [].concat((0,toConsumableArray/* default */.Z)(filteredState), [{
      id: id,
      sum: sum,
      date: inputDate
    }]);
    onChange(payload);
    setState(payload);
  };

  var itemDeleteHandler = function itemDeleteHandler(id) {
    var payload = state.filter(function (it) {
      return it.id !== id;
    });
    setState(payload);
  };

  return /*#__PURE__*/react.createElement("div", {
    className: DynamicTable_DynamicTable.wrapper
  }, /*#__PURE__*/react.createElement("div", {
    className: DynamicTable_DynamicTable.formRow
  }, /*#__PURE__*/react.createElement(components_Label_Label, {
    label: label
  })), state.map(function (it, i) {
    return /*#__PURE__*/react.createElement("div", {
      key: it.id,
      className: DynamicTable_DynamicTable.item
    }, /*#__PURE__*/react.createElement(components_Label_Label, {
      className: DynamicTable_DynamicTable.sumWrapper,
      label: i === 0 ? 'Сумма' : ''
    }, /*#__PURE__*/react.createElement(input/* default */.Z, {
      placeholder: "1000",
      suffix: "\u20BD",
      onChange: function onChange(evt) {
        return inputHandler({
          id: it.id,
          inputSum: Number(evt.target.value)
        });
      }
    })), /*#__PURE__*/react.createElement(components_Label_Label, {
      label: i === 0 ? 'Дата' : ''
    }, /*#__PURE__*/react.createElement(date_picker/* default */.Z, {
      format: dateFormat,
      placeholder: "20-05-2022",
      onChange: function onChange(evt) {
        return inputHandler({
          id: it.id,
          inputDate: evt.unix()
        });
      }
    })), /*#__PURE__*/react.createElement(es_button/* default */.Z, {
      className: DynamicTable_DynamicTable.deleteButton,
      onClick: function onClick() {
        return itemDeleteHandler(it.id);
      },
      shape: "circle",
      icon: /*#__PURE__*/react.createElement(CloseCircleOutlined/* default */.Z, null)
    }));
  }), /*#__PURE__*/react.createElement(es_button/* default */.Z, {
    onClick: addItem
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"));
};

/* harmony default export */ const components_DynamicTable_DynamicTable = (DynamicTable);
;// CONCATENATED MODULE: ./src/features/calculators/components/CalculatorsForms/CalcBy395/CalcBy395.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const CalcBy395_module = ({"formRow":"ooDDbf4yewnd9gKy6v5E","dynamicTableRow":"YbusDsOUcuu2WkkDZrU3","submitButton":"TQFj3lhysuNY2x3_79K9"});
;// CONCATENATED MODULE: ./src/features/calculators/components/CalculatorsForms/CalcBy395/CalcBy395.tsx








var useCalcBy395 = function useCalcBy395() {
  var _useForm = (0,index_esm/* useForm */.cI)(),
      control = _useForm.control,
      handleSubmit = _useForm.handleSubmit;

  var onSubmit = handleSubmit(function (params) {
    return console.log(params);
  });
  return {
    values: {
      control: control
    },
    operations: {
      handleSubmit: onSubmit
    }
  };
};

var CalcBy365View = function CalcBy365View(props) {
  var control = props.values.control,
      handleSubmit = props.operations.handleSubmit;
  return /*#__PURE__*/react.createElement("form", null, /*#__PURE__*/react.createElement("div", {
    className: CalcBy395_module.formRow
  }, /*#__PURE__*/react.createElement(index_esm/* Controller */.Qr, {
    name: "endDate",
    control: control,
    render: function render(_ref) {
      var _onChange = _ref.field.onChange;
      return /*#__PURE__*/react.createElement(components_Label_Label, {
        label: "\u041A\u043E\u043D\u0435\u0447\u043D\u0430\u044F \u0434\u0430\u0442\u0430 \u043F\u0440\u043E\u0441\u0440\u043E\u0447\u043A\u0438"
      }, /*#__PURE__*/react.createElement(date_picker/* default */.Z, {
        format: dateFormat,
        onChange: function onChange(val) {
          return _onChange(val.unix());
        }
      }));
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: CalcBy395_module.formRow
  }, /*#__PURE__*/react.createElement(index_esm/* Controller */.Qr, {
    name: "debtList",
    control: control,
    render: function render(_ref2) {
      var onChange = _ref2.field.onChange;
      return /*#__PURE__*/react.createElement(components_DynamicTable_DynamicTable, {
        onChange: onChange,
        label: "\u0412\u043E\u0437\u043D\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u0435 \u0437\u0430\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438"
      });
    }
  }), /*#__PURE__*/react.createElement(index_esm/* Controller */.Qr, {
    name: "creditList",
    control: control,
    render: function render(_ref3) {
      var onChange = _ref3.field.onChange;
      return /*#__PURE__*/react.createElement(components_DynamicTable_DynamicTable, {
        onChange: onChange,
        label: "\u0427\u0430\u0441\u0442\u0438\u0447\u043D\u0430\u044F \u043E\u043F\u043B\u0430\u0442\u0430 \u0437\u0430\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438"
      });
    }
  })), /*#__PURE__*/react.createElement(es_button/* default */.Z, {
    className: CalcBy395_module.submitButton,
    type: "primary",
    onClick: handleSubmit
  }, "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C"));
};

/* harmony default export */ const CalcBy395 = (function () {
  var behavior = useCalcBy395();
  return /*#__PURE__*/react.createElement(CalcBy365View, behavior);
});
// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 49 modules
var es_select = __webpack_require__(820);
;// CONCATENATED MODULE: ./src/features/calculators/components/CalculatorsForms/CalcBy317/CalcBy317.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const CalcBy317_module = ({"formRow":"Vol0rIiHbz0mqtrRRh0w","dynamicTableRow":"MltrS_vJuWG8c8Nx_jFt","submitButton":"XLzRVc8IfnzzqTUF7ngF"});
;// CONCATENATED MODULE: ./src/features/calculators/components/CalculatorsForms/CalcBy317/CalcBy317.tsx







var Option = es_select/* default.Option */.Z.Option;

var useCalcBy317 = function useCalcBy317() {
  var _useForm = (0,index_esm/* useForm */.cI)(),
      control = _useForm.control,
      handleSubmit = _useForm.handleSubmit;

  var onSubmit = handleSubmit(function (params) {
    return console.log(params);
  });
  return {
    values: {
      control: control
    },
    operations: {
      handleSubmit: onSubmit
    }
  };
};

var CalcBy317View = function CalcBy317View(props) {
  var control = props.values.control,
      handleSubmit = props.operations.handleSubmit;
  return /*#__PURE__*/react.createElement("form", null, /*#__PURE__*/react.createElement("div", {
    className: CalcBy317_module.formRow
  }, /*#__PURE__*/react.createElement(index_esm/* Controller */.Qr, {
    name: "endDate",
    control: control,
    render: function render(_ref) {
      var _onChange = _ref.field.onChange;
      return /*#__PURE__*/react.createElement(components_Label_Label, {
        label: "\u041A\u043E\u043D\u0435\u0447\u043D\u0430\u044F \u0434\u0430\u0442\u0430 \u043F\u0440\u043E\u0441\u0440\u043E\u0447\u043A\u0438"
      }, /*#__PURE__*/react.createElement(date_picker/* default */.Z, {
        format: dateFormat,
        onChange: function onChange(val) {
          return _onChange(val.unix());
        }
      }));
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: CalcBy317_module.formRow
  }, /*#__PURE__*/react.createElement(index_esm/* Controller */.Qr, {
    name: "debtList",
    control: control,
    render: function render(_ref2) {
      var onChange = _ref2.field.onChange;
      return /*#__PURE__*/react.createElement(components_DynamicTable_DynamicTable, {
        onChange: onChange,
        label: "\u0412\u043E\u0437\u043D\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u0435 \u0437\u0430\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438"
      });
    }
  }), /*#__PURE__*/react.createElement(index_esm/* Controller */.Qr, {
    name: "creditList",
    control: control,
    render: function render(_ref3) {
      var onChange = _ref3.field.onChange;
      return /*#__PURE__*/react.createElement(components_DynamicTable_DynamicTable, {
        onChange: onChange,
        label: "\u0427\u0430\u0441\u0442\u0438\u0447\u043D\u0430\u044F \u043E\u043F\u043B\u0430\u0442\u0430 \u0437\u0430\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438"
      });
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: CalcBy317_module.formRow
  }, /*#__PURE__*/react.createElement(index_esm/* Controller */.Qr, {
    name: "keyRate",
    control: control,
    render: function render(_ref4) {
      var onChange = _ref4.field.onChange;
      return /*#__PURE__*/react.createElement(components_Label_Label, {
        label: "\u041A\u043B\u044E\u0447\u0435\u0432\u0430\u044F \u0441\u0442\u0430\u0432\u043A\u0430",
        style: {
          width: '290px'
        }
      }, /*#__PURE__*/react.createElement(es_select/* default */.Z, {
        onChange: onChange
      }, /*#__PURE__*/react.createElement(Option, {
        value: "\u043D\u0430 \u0434\u0435\u043D\u044C \u043D\u0430\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432"
      }, "\u043D\u0430 \u0434\u0435\u043D\u044C \u043D\u0430\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432"), /*#__PURE__*/react.createElement(Option, {
        value: "\u043D\u0430 \u0434\u0435\u043D\u044C \u0444\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043E\u043F\u043B\u0430\u0442\u044B"
      }, "\u043D\u0430 \u0434\u0435\u043D\u044C \u0444\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043E\u043F\u043B\u0430\u0442\u044B"), /*#__PURE__*/react.createElement(Option, {
        value: "\u043F\u043E \u0440\u0435\u0440\u0438\u043E\u0434\u0430\u043C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441\u0442\u0430\u0432\u043A\u0438"
      }, "\u043F\u043E \u0440\u0435\u0440\u0438\u043E\u0434\u0430\u043C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441\u0442\u0430\u0432\u043A\u0438"), /*#__PURE__*/react.createElement(Option, {
        value: "\u043D\u0430 \u0434\u0435\u043D\u044C \u043F\u043E\u0434\u0430\u0447\u0438 \u0438\u0441\u043A\u0430 \u0432 \u0441\u0443\u0434"
      }, "\u043D\u0430 \u0434\u0435\u043D\u044C \u043F\u043E\u0434\u0430\u0447\u0438 \u0438\u0441\u043A\u0430 \u0432 \u0441\u0443\u0434")));
    }
  }), /*#__PURE__*/react.createElement(index_esm/* Controller */.Qr, {
    name: "keyRateDate",
    control: control,
    render: function render(_ref5) {
      var onChange = _ref5.field.onChange;
      return /*#__PURE__*/react.createElement(components_Label_Label, {
        label: "\xA0",
        style: {
          width: '150px'
        }
      }, /*#__PURE__*/react.createElement(date_picker/* default */.Z, {
        onChange: onChange,
        format: dateFormat
      }));
    }
  })), /*#__PURE__*/react.createElement(es_button/* default */.Z, {
    className: CalcBy317_module.submitButton,
    type: "primary",
    onClick: handleSubmit
  }, "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C"));
};

/* harmony default export */ const CalcBy317 = (function () {
  var behavior = useCalcBy317();
  return /*#__PURE__*/react.createElement(CalcBy317View, behavior);
});
;// CONCATENATED MODULE: ./src/features/calculators/components/CalculatorsForms/CalcPenaltyKeyRate/CalcPenaltyKeyRate.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const CalcPenaltyKeyRate_module = ({"formRow":"wjzOJvOU6DPPXD3qzsht","dynamicTableRow":"_n9L52fcKUk7vaP1C5Py","submitButton":"OXNg1i89hLYtOfKK7Za4"});
;// CONCATENATED MODULE: ./src/features/calculators/components/CalculatorsForms/CalcPenaltyKeyRate/CalcPenaltyKeyRate.tsx







var CalcPenaltyKeyRate_Option = es_select/* default.Option */.Z.Option;

var useCalcPenaltyKeyRate = function useCalcPenaltyKeyRate() {
  var _useForm = (0,index_esm/* useForm */.cI)(),
      control = _useForm.control,
      handleSubmit = _useForm.handleSubmit;

  var onSubmit = handleSubmit(function (params) {
    return console.log(params);
  });
  return {
    values: {
      control: control
    },
    operations: {
      handleSubmit: onSubmit
    }
  };
};

var CalcPenaltyKeyRateView = function CalcPenaltyKeyRateView(props) {
  var control = props.values.control,
      handleSubmit = props.operations.handleSubmit;
  return /*#__PURE__*/react.createElement("form", null, /*#__PURE__*/react.createElement("div", {
    className: CalcPenaltyKeyRate_module.formRow
  }, /*#__PURE__*/react.createElement(index_esm/* Controller */.Qr, {
    name: "endDate",
    control: control,
    render: function render(_ref) {
      var _onChange = _ref.field.onChange;
      return /*#__PURE__*/react.createElement(components_Label_Label, {
        label: "\u041A\u043E\u043D\u0435\u0447\u043D\u0430\u044F \u0434\u0430\u0442\u0430 \u043F\u0440\u043E\u0441\u0440\u043E\u0447\u043A\u0438"
      }, /*#__PURE__*/react.createElement(date_picker/* default */.Z, {
        format: dateFormat,
        onChange: function onChange(val) {
          return _onChange(val.unix());
        }
      }));
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: CalcPenaltyKeyRate_module.formRow
  }, /*#__PURE__*/react.createElement(index_esm/* Controller */.Qr, {
    name: "debtList",
    control: control,
    render: function render(_ref2) {
      var onChange = _ref2.field.onChange;
      return /*#__PURE__*/react.createElement(components_DynamicTable_DynamicTable, {
        onChange: onChange,
        label: "\u0412\u043E\u0437\u043D\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u0435 \u0437\u0430\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438"
      });
    }
  }), /*#__PURE__*/react.createElement(index_esm/* Controller */.Qr, {
    name: "creditList",
    control: control,
    render: function render(_ref3) {
      var onChange = _ref3.field.onChange;
      return /*#__PURE__*/react.createElement(components_DynamicTable_DynamicTable, {
        onChange: onChange,
        label: "\u0427\u0430\u0441\u0442\u0438\u0447\u043D\u0430\u044F \u043E\u043F\u043B\u0430\u0442\u0430 \u0437\u0430\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438"
      });
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: CalcPenaltyKeyRate_module.formRow
  }, /*#__PURE__*/react.createElement(index_esm/* Controller */.Qr, {
    name: "keyRate",
    control: control,
    render: function render(_ref4) {
      var onChange = _ref4.field.onChange;
      return /*#__PURE__*/react.createElement(components_Label_Label, {
        label: "\u041A\u043B\u044E\u0447\u0435\u0432\u0430\u044F \u0441\u0442\u0430\u0432\u043A\u0430",
        style: {
          width: '290px'
        }
      }, /*#__PURE__*/react.createElement(es_select/* default */.Z, {
        onChange: onChange
      }, /*#__PURE__*/react.createElement(CalcPenaltyKeyRate_Option, {
        value: "\u043D\u0430 \u0434\u0435\u043D\u044C \u043D\u0430\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432"
      }, "\u043D\u0430 \u0434\u0435\u043D\u044C \u043D\u0430\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432"), /*#__PURE__*/react.createElement(CalcPenaltyKeyRate_Option, {
        value: "\u043D\u0430 \u0434\u0435\u043D\u044C \u0444\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043E\u043F\u043B\u0430\u0442\u044B"
      }, "\u043D\u0430 \u0434\u0435\u043D\u044C \u0444\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043E\u043F\u043B\u0430\u0442\u044B"), /*#__PURE__*/react.createElement(CalcPenaltyKeyRate_Option, {
        value: "\u043F\u043E \u0440\u0435\u0440\u0438\u043E\u0434\u0430\u043C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441\u0442\u0430\u0432\u043A\u0438"
      }, "\u043F\u043E \u0440\u0435\u0440\u0438\u043E\u0434\u0430\u043C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441\u0442\u0430\u0432\u043A\u0438"), /*#__PURE__*/react.createElement(CalcPenaltyKeyRate_Option, {
        value: "\u043D\u0430 \u0434\u0435\u043D\u044C \u043F\u043E\u0434\u0430\u0447\u0438 \u0438\u0441\u043A\u0430 \u0432 \u0441\u0443\u0434"
      }, "\u043D\u0430 \u0434\u0435\u043D\u044C \u043F\u043E\u0434\u0430\u0447\u0438 \u0438\u0441\u043A\u0430 \u0432 \u0441\u0443\u0434")));
    }
  }), /*#__PURE__*/react.createElement(index_esm/* Controller */.Qr, {
    name: "keyRateDate",
    control: control,
    render: function render(_ref5) {
      var onChange = _ref5.field.onChange;
      return /*#__PURE__*/react.createElement(components_Label_Label, {
        label: "\xA0",
        style: {
          width: '150px'
        }
      }, /*#__PURE__*/react.createElement(date_picker/* default */.Z, {
        onChange: onChange,
        format: dateFormat
      }));
    }
  })), /*#__PURE__*/react.createElement(index_esm/* Controller */.Qr, {
    name: "keyRateShare",
    control: control,
    render: function render(_ref6) {
      var onChange = _ref6.field.onChange;
      return /*#__PURE__*/react.createElement(components_Label_Label, {
        label: "\u0414\u043E\u043B\u044F \u043E\u0442 \u043A\u043B\u044E\u0447\u0435\u0432\u043E\u0439 \u0441\u0442\u0430\u0432\u043A\u0438",
        style: {
          width: '290px'
        }
      }, /*#__PURE__*/react.createElement(es_select/* default */.Z, {
        onChange: onChange
      }, /*#__PURE__*/react.createElement(CalcPenaltyKeyRate_Option, {
        value: "1/300"
      }, "1/300"), /*#__PURE__*/react.createElement(CalcPenaltyKeyRate_Option, {
        value: "1/150"
      }, "1/150"), /*#__PURE__*/react.createElement(CalcPenaltyKeyRate_Option, {
        value: "1/130"
      }, "1/130")));
    }
  }), /*#__PURE__*/react.createElement(es_button/* default */.Z, {
    className: CalcPenaltyKeyRate_module.submitButton,
    type: "primary",
    onClick: handleSubmit
  }, "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C"));
};

/* harmony default export */ const CalcPenaltyKeyRate = (function () {
  var behavior = useCalcPenaltyKeyRate();
  return /*#__PURE__*/react.createElement(CalcPenaltyKeyRateView, behavior);
});
// EXTERNAL MODULE: ./node_modules/antd/es/input-number/index.js + 12 modules
var input_number = __webpack_require__(507);
;// CONCATENATED MODULE: ./src/features/calculators/components/CalculatorsForms/CalcDoublePenaltyKeyRate/CalcDoublePenaltyKeyRate.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const CalcDoublePenaltyKeyRate_module = ({"formRow":"oNjp9fvwsNTddELhlV6g","dynamicTableRow":"B6WbBBr3TApHg9Nx7tkA","submitButton":"L4CvAAewsav766YcQz17"});
;// CONCATENATED MODULE: ./src/features/calculators/components/CalculatorsForms/CalcDoublePenaltyKeyRate/CalcDoublePenaltyKeyRate.tsx







var CalcDoublePenaltyKeyRate_Option = es_select/* default.Option */.Z.Option;

var useCalcDoublePenaltyKeyRate = function useCalcDoublePenaltyKeyRate() {
  var _useForm = (0,index_esm/* useForm */.cI)(),
      control = _useForm.control,
      handleSubmit = _useForm.handleSubmit;

  var onSubmit = handleSubmit(function (params) {
    return console.log(params);
  });
  return {
    values: {
      control: control
    },
    operations: {
      handleSubmit: onSubmit
    }
  };
};

var CalcDoublePenaltyKeyRateView = function CalcDoublePenaltyKeyRateView(props) {
  var control = props.values.control,
      handleSubmit = props.operations.handleSubmit;
  return /*#__PURE__*/react.createElement("form", null, /*#__PURE__*/react.createElement("div", {
    className: CalcDoublePenaltyKeyRate_module.formRow
  }, /*#__PURE__*/react.createElement(index_esm/* Controller */.Qr, {
    name: "endDate",
    control: control,
    render: function render(_ref) {
      var _onChange = _ref.field.onChange;
      return /*#__PURE__*/react.createElement(components_Label_Label, {
        label: "\u041A\u043E\u043D\u0435\u0447\u043D\u0430\u044F \u0434\u0430\u0442\u0430 \u043F\u0440\u043E\u0441\u0440\u043E\u0447\u043A\u0438"
      }, /*#__PURE__*/react.createElement(date_picker/* default */.Z, {
        format: dateFormat,
        onChange: function onChange(val) {
          return _onChange(val.unix());
        }
      }));
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: CalcDoublePenaltyKeyRate_module.formRow
  }, /*#__PURE__*/react.createElement(index_esm/* Controller */.Qr, {
    name: "debtList",
    control: control,
    render: function render(_ref2) {
      var onChange = _ref2.field.onChange;
      return /*#__PURE__*/react.createElement(components_DynamicTable_DynamicTable, {
        onChange: onChange,
        label: "\u0412\u043E\u0437\u043D\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u0435 \u0437\u0430\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438"
      });
    }
  }), /*#__PURE__*/react.createElement(index_esm/* Controller */.Qr, {
    name: "creditList",
    control: control,
    render: function render(_ref3) {
      var onChange = _ref3.field.onChange;
      return /*#__PURE__*/react.createElement(components_DynamicTable_DynamicTable, {
        onChange: onChange,
        label: "\u0427\u0430\u0441\u0442\u0438\u0447\u043D\u0430\u044F \u043E\u043F\u043B\u0430\u0442\u0430 \u0437\u0430\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438"
      });
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: CalcDoublePenaltyKeyRate_module.formRow
  }, /*#__PURE__*/react.createElement(index_esm/* Controller */.Qr, {
    name: "keyRate",
    control: control,
    render: function render(_ref4) {
      var onChange = _ref4.field.onChange;
      return /*#__PURE__*/react.createElement(components_Label_Label, {
        label: "\u041A\u043B\u044E\u0447\u0435\u0432\u0430\u044F \u0441\u0442\u0430\u0432\u043A\u0430",
        style: {
          width: '290px'
        }
      }, /*#__PURE__*/react.createElement(es_select/* default */.Z, {
        onChange: onChange
      }, /*#__PURE__*/react.createElement(CalcDoublePenaltyKeyRate_Option, {
        value: "\u043D\u0430 \u0434\u0435\u043D\u044C \u043D\u0430\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432"
      }, "\u043D\u0430 \u0434\u0435\u043D\u044C \u043D\u0430\u0441\u0442\u0443\u043F\u043B\u0435\u043D\u0438\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432"), /*#__PURE__*/react.createElement(CalcDoublePenaltyKeyRate_Option, {
        value: "\u043D\u0430 \u0434\u0435\u043D\u044C \u0444\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043E\u043F\u043B\u0430\u0442\u044B"
      }, "\u043D\u0430 \u0434\u0435\u043D\u044C \u0444\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043E\u043F\u043B\u0430\u0442\u044B"), /*#__PURE__*/react.createElement(CalcDoublePenaltyKeyRate_Option, {
        value: "\u043F\u043E \u0440\u0435\u0440\u0438\u043E\u0434\u0430\u043C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441\u0442\u0430\u0432\u043A\u0438"
      }, "\u043F\u043E \u0440\u0435\u0440\u0438\u043E\u0434\u0430\u043C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0441\u0442\u0430\u0432\u043A\u0438"), /*#__PURE__*/react.createElement(CalcDoublePenaltyKeyRate_Option, {
        value: "\u043D\u0430 \u0434\u0435\u043D\u044C \u043F\u043E\u0434\u0430\u0447\u0438 \u0438\u0441\u043A\u0430 \u0432 \u0441\u0443\u0434"
      }, "\u043D\u0430 \u0434\u0435\u043D\u044C \u043F\u043E\u0434\u0430\u0447\u0438 \u0438\u0441\u043A\u0430 \u0432 \u0441\u0443\u0434")));
    }
  }), /*#__PURE__*/react.createElement(index_esm/* Controller */.Qr, {
    name: "keyRateDate",
    control: control,
    render: function render(_ref5) {
      var onChange = _ref5.field.onChange;
      return /*#__PURE__*/react.createElement(components_Label_Label, {
        label: "\xA0",
        style: {
          width: '150px'
        }
      }, /*#__PURE__*/react.createElement(date_picker/* default */.Z, {
        onChange: onChange,
        format: dateFormat
      }));
    }
  })), /*#__PURE__*/react.createElement(index_esm/* Controller */.Qr, {
    name: "keyRateMultiplicity",
    control: control,
    render: function render(_ref6) {
      var onChange = _ref6.field.onChange;
      return /*#__PURE__*/react.createElement(components_Label_Label, {
        label: "\u041A\u0440\u0430\u0442\u043D\u043E\u0441\u0442\u044C \u043A\u043B\u044E\u0447\u0435\u0432\u043E\u0439 \u0441\u0442\u0430\u0432\u043A\u0438",
        style: {
          width: '290px'
        }
      }, /*#__PURE__*/react.createElement(input_number/* default */.Z, {
        onChange: onChange,
        defaultValue: 2
      }));
    }
  }), /*#__PURE__*/react.createElement(es_button/* default */.Z, {
    className: CalcDoublePenaltyKeyRate_module.submitButton,
    type: "primary",
    onClick: handleSubmit
  }, "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C"));
};

/* harmony default export */ const CalcDoublePenaltyKeyRate = (function () {
  var behavior = useCalcDoublePenaltyKeyRate();
  return /*#__PURE__*/react.createElement(CalcDoublePenaltyKeyRateView, behavior);
});
;// CONCATENATED MODULE: ./src/features/calculators/components/CalculatorsForms/CalcPenaltyByContract/CalcPenaltyByContract.module.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const CalcPenaltyByContract_module = ({"formRow":"KseHXKKxLIjyxDVnbw2D","dynamicTableRow":"OgWXGIGpqWAuKWb0QHS_","percentText":"tlAIgPLVrmihj8sTx1EH","maxPercentRubles":"g71j2kgFEfwvzrWIZoag","submitButton":"SwYMRYlkV_fUaOnLLxec"});
;// CONCATENATED MODULE: ./src/features/calculators/components/CalculatorsForms/CalcPenaltyByContract/CalcPenaltyByContract.tsx







var CalcPenaltyByContract_Option = es_select/* default.Option */.Z.Option;

var useCalcPenaltyByContract = function useCalcPenaltyByContract() {
  var _useForm = (0,index_esm/* useForm */.cI)(),
      control = _useForm.control,
      handleSubmit = _useForm.handleSubmit;

  var onSubmit = handleSubmit(function (params) {
    return console.log(params);
  });
  return {
    values: {
      control: control
    },
    operations: {
      handleSubmit: onSubmit
    }
  };
};

var selectAfter = /*#__PURE__*/react.createElement(es_select/* default */.Z, {
  defaultValue: "\u0432 \u0434\u0435\u043D\u044C",
  className: "select-after"
}, /*#__PURE__*/react.createElement(CalcPenaltyByContract_Option, {
  value: "\u0432 \u0434\u0435\u043D\u044C"
}, "\u0432 \u0434\u0435\u043D\u044C"), /*#__PURE__*/react.createElement(CalcPenaltyByContract_Option, {
  value: "\u0432 \u043C\u0435\u0441\u044F\u0446"
}, ".\u0432 \u043C\u0435\u0441\u044F\u0446"), /*#__PURE__*/react.createElement(CalcPenaltyByContract_Option, {
  value: "\u0432 \u0433\u043E\u0434"
}, "\u0432 \u0433\u043E\u0434"));

var CalcPenaltyByContractView = function CalcPenaltyByContractView(props) {
  var control = props.values.control,
      handleSubmit = props.operations.handleSubmit;
  return /*#__PURE__*/react.createElement("form", null, /*#__PURE__*/react.createElement("div", {
    className: CalcPenaltyByContract_module.formRow
  }, /*#__PURE__*/react.createElement(index_esm/* Controller */.Qr, {
    name: "endDate",
    control: control,
    render: function render(_ref) {
      var _onChange = _ref.field.onChange;
      return /*#__PURE__*/react.createElement(components_Label_Label, {
        label: "\u041A\u043E\u043D\u0435\u0447\u043D\u0430\u044F \u0434\u0430\u0442\u0430 \u043F\u0440\u043E\u0441\u0440\u043E\u0447\u043A\u0438"
      }, /*#__PURE__*/react.createElement(date_picker/* default */.Z, {
        format: dateFormat,
        onChange: function onChange(val) {
          return _onChange(val.unix());
        }
      }));
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: CalcPenaltyByContract_module.formRow
  }, /*#__PURE__*/react.createElement(index_esm/* Controller */.Qr, {
    name: "debtList",
    control: control,
    render: function render(_ref2) {
      var onChange = _ref2.field.onChange;
      return /*#__PURE__*/react.createElement(components_DynamicTable_DynamicTable, {
        onChange: onChange,
        label: "\u0412\u043E\u0437\u043D\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u0435 \u0437\u0430\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438"
      });
    }
  }), /*#__PURE__*/react.createElement(index_esm/* Controller */.Qr, {
    name: "creditList",
    control: control,
    render: function render(_ref3) {
      var onChange = _ref3.field.onChange;
      return /*#__PURE__*/react.createElement(components_DynamicTable_DynamicTable, {
        onChange: onChange,
        label: "\u0427\u0430\u0441\u0442\u0438\u0447\u043D\u0430\u044F \u043E\u043F\u043B\u0430\u0442\u0430 \u0437\u0430\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438"
      });
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: CalcPenaltyByContract_module.formRow
  }, /*#__PURE__*/react.createElement(index_esm/* Controller */.Qr, {
    name: "percent",
    control: control,
    render: function render(_ref4) {
      var onChange = _ref4.field.onChange;
      return /*#__PURE__*/react.createElement(components_Label_Label, {
        label: "\xA0",
        style: {
          width: '180px'
        }
      }, /*#__PURE__*/react.createElement(input_number/* default */.Z, {
        prefix: "%",
        onChange: onChange,
        defaultValue: 2,
        addonAfter: selectAfter
      }));
    }
  }), /*#__PURE__*/react.createElement(index_esm/* Controller */.Qr, {
    name: "maxPercentInRuble",
    control: control,
    render: function render(_ref5) {
      var onChange = _ref5.field.onChange;
      return /*#__PURE__*/react.createElement(components_Label_Label, {
        isRow: true,
        label: "\xA0",
        style: {
          width: '350px'
        }
      }, /*#__PURE__*/react.createElement("span", {
        className: CalcPenaltyByContract_module.percentText
      }, "\u043D\u043E \u043D\u0435 \u0431\u043E\u043B\u043B\u0435\u0435"), /*#__PURE__*/react.createElement(input_number/* default */.Z, {
        style: {
          width: '150px'
        },
        className: CalcPenaltyByContract_module.maxPercentRubles,
        prefix: "\u20BD",
        onChange: onChange
      }));
    }
  })), /*#__PURE__*/react.createElement(es_button/* default */.Z, {
    className: CalcPenaltyByContract_module.submitButton,
    type: "primary",
    onClick: handleSubmit
  }, "\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044C"));
};

/* harmony default export */ const CalcPenaltyByContract = (function () {
  var behavior = useCalcPenaltyByContract();
  return /*#__PURE__*/react.createElement(CalcPenaltyByContractView, behavior);
});
;// CONCATENATED MODULE: ./src/constants.ts
// eslint-disable-next-line no-shadow





var calcConfigs = {
  calc395: {
    title: 'Расчёт процентов по ст. 395 ГК РФ',
    component: CalcBy395
  },
  calc317: {
    title: 'Расчёт процентов задолженности по ст. 317.1 ГК РФ',
    component: CalcBy317
  },
  calcPenaltyKeyRate: {
    title: 'Расчёт неустойки по 1/300, 1/150 или 1/130 от ключевой ставки ЦБ РФ',
    component: CalcPenaltyKeyRate
  },
  calcDoublePenaltyKeyRate: {
    title: 'Расчёта неустойки по двойной ключевой ставке ЦБ РФ',
    component: CalcDoublePenaltyKeyRate
  },
  calcPenaltyByContract: {
    title: 'Расчёта неустойки по договору',
    component: CalcPenaltyByContract
  }
};
var dateFormat = 'DD.MM.YYYY';
var LoadingStatus;

(function (LoadingStatus) {
  LoadingStatus["NONE"] = "NONE";
  LoadingStatus["LOADING"] = "LOADING";
  LoadingStatus["FINISHED"] = "Finished";
  LoadingStatus["ERROR"] = "ERROR";
})(LoadingStatus || (LoadingStatus = {}));
// EXTERNAL MODULE: ./node_modules/antd/es/card/index.js + 33 modules
var card = __webpack_require__(6343);
;// CONCATENATED MODULE: ./src/features/calculators/components/CalculatorsList/CalculatorsList.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const CalculatorsList_CalculatorsList = ({"cardLink":"RBxfCDA49D6dUat4EpSE"});
;// CONCATENATED MODULE: ./src/features/calculators/components/CalculatorsList/CalculatorsList.tsx







var CalculatorsList = function CalculatorsList() {
  var calculatorsList = Object.entries(calcConfigs);
  return /*#__PURE__*/react.createElement(row/* default */.Z, {
    gutter: 16
  }, calculatorsList.map(function (it) {
    return /*#__PURE__*/react.createElement(col/* default */.Z, {
      span: 24,
      lg: 12,
      xl: 8,
      key: it[0]
    }, /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
      className: CalculatorsList_CalculatorsList.cardLink,
      to: app_pathDict.getCalculatorById(it[0]).pathname
    }, /*#__PURE__*/react.createElement(card/* default */.Z, {
      title: it[1].title,
      bordered: true
    }, "Card content")));
  }));
};

/* harmony default export */ const components_CalculatorsList_CalculatorsList = (CalculatorsList);
;// CONCATENATED MODULE: ./src/pages/Calculators/Calculators.tsx






var Calculators_Title = typography/* default.Title */.Z.Title;

var Calculators = function Calculators() {
  var params = (0,react_router/* useParams */.UO)();
  var calcId = params.calcId;
  var Component = calcId ? calcConfigs[calcId].component : components_CalculatorsList_CalculatorsList;
  var title = calcId ? calcConfigs[calcId].title : 'Юридические калькуляторы';

  var renderBredCrumbs = function renderBredCrumbs() {
    return calcId ? /*#__PURE__*/react.createElement(breadcrumb/* default */.Z, {
      style: {
        padding: '16px 0'
      }
    }, /*#__PURE__*/react.createElement(breadcrumb/* default.Item */.Z.Item, null, /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
      to: app_pathDict.calculators.pathname
    }, "\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440\u044B")), /*#__PURE__*/react.createElement(breadcrumb/* default.Item */.Z.Item, null, calcConfigs[calcId].title)) : /*#__PURE__*/react.createElement(breadcrumb/* default */.Z, {
      style: {
        padding: '16px 0'
      }
    }, /*#__PURE__*/react.createElement(breadcrumb/* default.Item */.Z.Item, null, "\u041A\u0430\u043B\u044C\u043A\u0443\u043B\u044F\u0442\u043E\u0440\u044B"));
  };

  return /*#__PURE__*/react.createElement("div", null, renderBredCrumbs(), /*#__PURE__*/react.createElement(Calculators_Title, {
    level: 2
  }, title), /*#__PURE__*/react.createElement(Component, null));
};

/* harmony default export */ const Calculators_Calculators = (Calculators);
;// CONCATENATED MODULE: ./src/app/routes.ts




var routes = [{
  path: app_pathDict.root.pathname,
  component: pages_Main_Main
}, {
  path: app_pathDict.about.pathname,
  component: About_About
}, {
  path: "".concat(app_pathDict.calculators.pathname),
  component: Calculators_Calculators
}, {
  path: "".concat(app_pathDict.calculators.pathname, "/:calcId"),
  component: Calculators_Calculators
}];
/* harmony default export */ const app_routes = (routes);
;// CONCATENATED MODULE: ./src/app/App.scss
// extracted by mini-css-extract-plugin
/* harmony default export */ const App = ({"content":"q95IGSIX8nzXVHVm9Ty9","inner":"RLOb353qs9tx06i_Qgcp","routeContent":"e5wb8vku9rvPeuv1crqC"});
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/HomeOutlined.js + 1 modules
var HomeOutlined = __webpack_require__(9271);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CalculatorOutlined.js + 1 modules
var CalculatorOutlined = __webpack_require__(5369);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/InfoCircleOutlined.js + 1 modules
var InfoCircleOutlined = __webpack_require__(8628);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/MenuUnfoldOutlined.js + 1 modules
var MenuUnfoldOutlined = __webpack_require__(1351);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/MenuFoldOutlined.js + 1 modules
var MenuFoldOutlined = __webpack_require__(6629);
// EXTERNAL MODULE: ./node_modules/antd/es/menu/index.js + 5 modules
var menu = __webpack_require__(8682);
;// CONCATENATED MODULE: ./src/layout/Navigation/Navigation.tsx







function getItem(label, key, icon, children, type) {
  return {
    key: key,
    icon: icon,
    children: children,
    label: label,
    type: type
  };
}

var items = [getItem('Главная', app_pathDict.root.pathname, /*#__PURE__*/react.createElement(HomeOutlined/* default */.Z, null), undefined, undefined), getItem('Калькуляторы', app_pathDict.calculators.pathname, /*#__PURE__*/react.createElement(CalculatorOutlined/* default */.Z, null), undefined, undefined), getItem('О Нас', app_pathDict.about.pathname, /*#__PURE__*/react.createElement(InfoCircleOutlined/* default */.Z, null), undefined, undefined)];

var Navigation_App = function App() {
  var _items$find;

  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      collapsed = _useState2[0],
      setCollapsed = _useState2[1];

  var navigate = (0,react_router/* useNavigate */.s0)();
  var location = (0,react_router/* useLocation */.TH)();

  var toggleCollapsed = function toggleCollapsed() {
    setCollapsed(!collapsed);
  };

  var onClick = function onClick(e) {
    navigate(e.keyPath[0]);
  };

  var defaultSelected = ((_items$find = items.find(function (it) {
    return location.pathname.includes(it.key);
  })) === null || _items$find === void 0 ? void 0 : _items$find.key) || app_pathDict.root.pathname;
  return /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#001529'
    }
  }, /*#__PURE__*/react.createElement(es_button/* default */.Z, {
    type: "primary",
    onClick: toggleCollapsed,
    style: {
      marginBottom: 16
    }
  }, collapsed ? /*#__PURE__*/react.createElement(MenuUnfoldOutlined/* default */.Z, null) : /*#__PURE__*/react.createElement(MenuFoldOutlined/* default */.Z, null)), /*#__PURE__*/react.createElement(menu/* default */.Z, {
    onClick: onClick,
    defaultSelectedKeys: [defaultSelected],
    mode: "inline",
    theme: "dark",
    inlineCollapsed: collapsed,
    items: items
  }));
};

/* harmony default export */ const Navigation = (Navigation_App);
;// CONCATENATED MODULE: ./src/app/App.tsx













dayjs_min_default().locale('ru');

function App_App() {
  return /*#__PURE__*/react.createElement(react_router_dom/* BrowserRouter */.VK, null, /*#__PURE__*/react.createElement(config_provider/* default */.ZP, {
    locale: ru_RU/* default */.Z
  }, /*#__PURE__*/react.createElement("div", {
    className: App.content
  }, /*#__PURE__*/react.createElement(layout_Header_Header, null), /*#__PURE__*/react.createElement("div", {
    className: App.inner
  }, /*#__PURE__*/react.createElement(Navigation, null), /*#__PURE__*/react.createElement("div", {
    className: App.routeContent
  }, /*#__PURE__*/react.createElement(react_router/* Routes */.Z5, null, app_routes.map(function (route) {
    var path = route.path,
        component = route.component;
    var Component = component;
    return /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
      key: path,
      path: path,
      element: /*#__PURE__*/react.createElement(hocs_WithPageContent_WithPageContent, null, /*#__PURE__*/react.createElement(Component, null))
    });
  }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    path: "*",
    element: /*#__PURE__*/react.createElement(react_router/* Navigate */.Fg, {
      to: app_pathDict.root.pathname,
      replace: true
    })
  })), /*#__PURE__*/react.createElement(Footer_Footer, null))))));
}

/* harmony default export */ const app_App = (App_App);
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(5227);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js + 2 modules
var redux_toolkit_esm = __webpack_require__(6403);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(4890);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(5861);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(4687);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ./src/api/apiDict.ts
/* harmony default export */ const api_apiDict = ({
  calculators: {
    percentsByContract: '/calc5'
  },
  login: '/token',
  addUser: '/add_user',
  checkUser: '/check'
});
;// CONCATENATED MODULE: ./src/api/utils.ts
var TOKEN_KEY = 'token';
var setAccessToken = function setAccessToken(token) {
  return localStorage.setItem(TOKEN_KEY, token);
};
var getAccessToken = function getAccessToken() {
  return localStorage.getItem(TOKEN_KEY);
};
var removeAccessToken = function removeAccessToken() {
  return localStorage.removeItem(TOKEN_KEY);
};
;// CONCATENATED MODULE: ./src/utils/utils.ts
/* eslint-disable import/prefer-default-export */


var toCamel = function toCamel(s) {
  return s.replace(/([-_][a-z])/ig, function ($1) {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });
};

var isArray = function isArray(a) {
  return Array.isArray(a);
};

var isObject = function isObject(o) {
  return o === Object(o) && !isArray(o) && typeof o !== 'function';
};

var keysToCamel = function keysToCamel(o) {
  if (isObject(o)) {
    var n = {};
    Object.keys(o).forEach(function (k) {
      n[toCamel(k)] = keysToCamel(o[k]);
    });
    return n;
  }

  if (isArray(o)) {
    return o.map(function (i) {
      return keysToCamel(i);
    });
  }

  return o;
};
var disabledDate = function disabledDate(current) {
  return current && current > dayjs(new Date());
};
;// CONCATENATED MODULE: ./src/api/api.ts




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/* eslint-disable import/prefer-default-export,max-len */




var axiosInstance = axios_default().create({
  baseURL: '/'
});
axiosInstance.interceptors.request.use(function (config) {
  return _objectSpread(_objectSpread({}, config), {}, {
    headers: {
      authorization: "Bearer ".concat(getAccessToken())
    }
  });
}, function (error) {
  return Promise.reject(error);
});
/* axiosInstance.interceptors.response.use((response) => response, (error) => {
=======
axiosInstance.interceptors.response.use((response) => response, (error) => {
>>>>>>> origin/development
  if (error.response.status === 401) {
    removeAccessToken();
    window.history.pushState('', '', `/app${pathDict.login}`);
  }
  return error;
<<<<<<< HEAD
}); */

var fetchReportPercentByContract = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(payload) {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", axiosInstance.post(apiDict.calculators.percentsByContract, payload));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchReportPercentByContract(_x) {
    return _ref.apply(this, arguments);
  };
}()));
var fetchLogin = /*#__PURE__*/function () {
  var _ref2 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2(userData) {
    return regenerator_default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", axiosInstance.post(api_apiDict.login, userData).then(function (res) {
              return keysToCamel(res.data);
            }).then(function (res) {
              return setAccessToken(res.accessToken);
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function fetchLogin(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var fetchAddUser = /*#__PURE__*/function () {
  var _ref3 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee3(userData) {
    return regenerator_default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", axiosInstance.post(api_apiDict.addUser, userData));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function fetchAddUser(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var fetchCheckUser = /*#__PURE__*/function () {
  var _ref4 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee4() {
    return regenerator_default().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", axiosInstance.get(api_apiDict.checkUser).then(function (res) {
              return res.data.data;
            }));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function fetchCheckUser() {
    return _ref4.apply(this, arguments);
  };
}();
;// CONCATENATED MODULE: ./src/app/enums.ts
var enums_LoadingStatus;

(function (LoadingStatus) {
  LoadingStatus["NONE"] = "NONE";
  LoadingStatus["PENDING"] = "PENDING";
  LoadingStatus["FULFILLED"] = "FULFILLED";
  LoadingStatus["FAILED"] = "FAILED";
})(enums_LoadingStatus || (enums_LoadingStatus = {}));
;// CONCATENATED MODULE: ./src/features/user/userSlice.ts



/* eslint-disable no-param-reassign */



var userSlice_initialState = {
  loginStatus: enums_LoadingStatus.PENDING,
  registrationStatus: enums_LoadingStatus.NONE,
  userName: null
};
var getToken = (0,redux_toolkit_esm/* createAsyncThunk */.hg)('fetchToken', /*#__PURE__*/function () {
  var _ref = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(userData) {
    return regenerator_default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", fetchLogin(userData));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
var getUser = (0,redux_toolkit_esm/* createAsyncThunk */.hg)('getUser', /*#__PURE__*/(0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2() {
  return regenerator_default().wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", fetchCheckUser());

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
})));
var addUser = (0,redux_toolkit_esm/* createAsyncThunk */.hg)('addUser', /*#__PURE__*/function () {
  var _ref3 = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee3(userData) {
    return regenerator_default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", fetchAddUser(userData));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x2) {
    return _ref3.apply(this, arguments);
  };
}());
var userSlice = (0,redux_toolkit_esm/* createSlice */.oM)({
  name: 'user',
  initialState: userSlice_initialState,
  reducers: {
    setRegistrationStateToDefault: function setRegistrationStateToDefault(state) {
      state.registrationStatus = enums_LoadingStatus.NONE;
    }
  },
  extraReducers: function extraReducers(builder) {
    builder.addCase(getToken.fulfilled, function (state) {
      state.loginStatus = enums_LoadingStatus.FULFILLED;
    });
    builder.addCase(getToken.rejected, function (state) {
      state.loginStatus = enums_LoadingStatus.FAILED;
    });
    builder.addCase(getToken.pending, function (state) {
      state.loginStatus = enums_LoadingStatus.PENDING;
    });
    builder.addCase(getUser.fulfilled, function (state, action) {
      state.userName = action.payload.user;
      state.loginStatus = enums_LoadingStatus.FULFILLED;
    });
    builder.addCase(getUser.rejected, function (state) {
      state.loginStatus = enums_LoadingStatus.NONE;
    });
    builder.addCase(addUser.pending, function (state) {
      state.registrationStatus = enums_LoadingStatus.PENDING;
    });
    builder.addCase(addUser.fulfilled, function (state) {
      state.registrationStatus = enums_LoadingStatus.FULFILLED;
    });
    builder.addCase(addUser.rejected, function (state) {
      state.registrationStatus = enums_LoadingStatus.FAILED;
    });
  }
});
var setRegistrationStateToDefault = userSlice.actions.setRegistrationStateToDefault;

/* harmony default export */ const user_userSlice = (userSlice.reducer);
;// CONCATENATED MODULE: ./src/store/rootReducer.ts


var rootReducer = (0,redux/* combineReducers */.UY)({
  user: user_userSlice
});
/* harmony default export */ const store_rootReducer = (rootReducer);
;// CONCATENATED MODULE: ./src/store/store.ts


var store = (0,redux_toolkit_esm/* configureStore */.xC)({
  reducer: rootReducer_namespaceObject,
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware();
  },
  devTools: "production" !== 'production'
});
/* harmony default export */ const store_store = (store);
;// CONCATENATED MODULE: ./src/index.js






document.addEventListener('DOMContentLoaded', function () {
  var $root = document.getElementById('root');
  $root.style.minHeight = '100vh';
  $root.style.display = 'flex';
  $root.style.flexDirection = 'column';

  function Main() {
    return /*#__PURE__*/react.createElement(react.StrictMode, null, /*#__PURE__*/react.createElement(es/* Provider */.zt, {
      store: store_store
    }, /*#__PURE__*/react.createElement(app_App, null)));
  }

  react_dom.render( /*#__PURE__*/react.createElement(Main, null), $root);
});

/***/ }),

/***/ 5611:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b61f78636f4d1ae518c.svg";

/***/ }),

/***/ 5599:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "88279c0e2c94e93237eb.svg";

/***/ }),

/***/ 7245:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c22782c229144a07982e.svg";

/***/ }),

/***/ 8884:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1cb86fef89d82949f242.png";

/***/ }),

/***/ 1186:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a2bc2858511c795849da.png";

/***/ }),

/***/ 168:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb53996d423fa2a11538.svg";

/***/ }),

/***/ 2514:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "934f46215e3d6cdbdd3a.svg";

/***/ }),

/***/ 8542:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc7bac93fe9fb46f0ba8.png";

/***/ }),

/***/ 8377:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b9e784bf9f6f64f6eb25.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklaw_calculator"] = self["webpackChunklaw_calculator"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, [987], () => (__webpack_require__(1008)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [987], () => (__webpack_require__(2921)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.b85eb081da8745c5bc85.js.map