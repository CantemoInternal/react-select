'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var React = require('react');

var classes = require('classnames');

var Option = (function (_React$Component) {
	_inherits(Option, _React$Component);

	function Option(props) {
		_classCallCheck(this, Option);

		_get(Object.getPrototypeOf(Option.prototype), 'constructor', this).call(this, props);
	}

	_createClass(Option, [{
		key: 'blockEvent',
		value: function blockEvent(event) {
			event.preventDefault();
			if (event.target.tagName !== 'A' || !('href' in event.target)) {
				return;
			}

			if (event.target.target) {
				window.open(event.target.href);
			} else {
				window.location.href = event.target.href;
			}
		}
	}, {
		key: 'handleMouseDown',
		value: function handleMouseDown(e) {
			this.props.mouseDown(this.props.option, e);
		}
	}, {
		key: 'handleMouseEnter',
		value: function handleMouseEnter(e) {
			this.props.mouseEnter(this.props.option, e);
		}
	}, {
		key: 'handleMouseLeave',
		value: function handleMouseLeave(e) {
			this.props.mouseLeave(this.props.option, e);
		}
	}, {
		key: 'render',
		value: function render() {
			var option = this.props.option;
			var label = option.create ? this.props.addLabelText.replace('{label}', option.label) : this.props.renderFunc(option);
			var optionClasses = classes(this.props.className, option.className);

			return option.disabled ? React.createElement(
				'div',
				{ className: optionClasses,
					onMouseDown: this.blockEvent,
					onClick: this.blockEvent },
				label
			) : React.createElement(
				'div',
				{ className: optionClasses,
					style: option.style,
					onMouseDown: this.handleMouseDown,
					onMouseEnter: this.handleMouseEnter,
					onMouseLeave: this.handleMouseLeave,
					onClick: this.handleMouseDown,
					title: option.title },
				label
			);
		}
	}]);

	return Option;
})(React.Component);

;

Option.propTypes = {
	addLabelText: _propTypes2['default'].string, // string rendered in case of allowCreate option passed to ReactSelect
	className: _propTypes2['default'].string, // className (based on mouse position)
	mouseDown: _propTypes2['default'].func, // method to handle click on option element
	mouseEnter: _propTypes2['default'].func, // method to handle mouseEnter on option element
	mouseLeave: _propTypes2['default'].func, // method to handle mouseLeave on option element
	option: _propTypes2['default'].object.isRequired, // object that is base for that option
	renderFunc: _propTypes2['default'].func // method passed to ReactSelect component to render label text
};

module.exports = Option;