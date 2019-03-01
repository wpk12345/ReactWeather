import React, { Component } from "react";

class GoogleMap extends Component {
  componentDidMount() {
      //this.refs.map is the html element where we will embed the map
    new google.maps.Map(this.refs.map, {
      zoom: 11,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    //the "ref" makes use of the React reference or "ref" system.  this system allows us to get a direct reference to a html element that has been rendered to the page.  so after this component has been rendered to the screen, we can then use this.refs.map
    return <div ref="map" />;
  }
}

export default GoogleMap;
