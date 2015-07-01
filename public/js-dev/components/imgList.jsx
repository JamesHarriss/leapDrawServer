var React = require('react');

//components
var Img = require('./img.jsx');

var imgList = React.createClass({
  render: function() {
    var imgs = this.props.images.map(function(img){
      return <Img image={img} />
    });
    return (
      <div className="img-list">
        {imgs}
      </div>
    )
  }
});

module.exports = imgList;
