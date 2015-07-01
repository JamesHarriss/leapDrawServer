var React = require('react');

var img = React.createClass({
  render: function() {
    return (
      <div>
        <img className="img-item" src={this.props.image.url} />
      </div>
    )
  }
});

module.exports = img;
