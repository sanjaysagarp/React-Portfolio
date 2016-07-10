import React from "react";

import Footer from "../components/Layout/Footer";

export default class Layout extends React.Component {
  render() {
    const containerStyle = {
      marginTop: "60px"
    };

    return (
	<div className="container" style={containerStyle}>
		<div className="row">
			<div className="col-lg-12">
				<h1>Hiyaaaa</h1>
			</div>
		</div>
		<Footer/>
	</div>

    );
  }
}
