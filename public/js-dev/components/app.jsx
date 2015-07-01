var React = require('react');
var request = require('superagent');

//components
var ImgList = require('./imgList.jsx');

var app = React.createClass({
    componentDidMount: function() {
      this._getImages();
    },
    getInitialState: function() {
      return {
        images: []
      }
    },
    render: function() {
      return (
        <div>
          <ImgList images={this.state.images}/>
        </div>
      )
    },
    _getImages: function() {
      var self = this;
      request
      .get('http://' + window.location.host + '/images')
      .end(function(err, res){
        if (res.ok) {
          self.setState({
            images: res.body
          })
        }
      })
    }
});

module.exports = app;
