import React from 'react';
import PureRenderinMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
	mixins: [PureRenderinMixin],
	render: function() {
		return <div>Hello from results!</div>
	}
});