import React from "react";

export default class Footer extends React.Component {
  render() {
    const footerStyles = {
      marginTop: "30px",
    };

    return (
      <footer style={footerStyles}>
        <div className="row">
          <div className="col-lg-12">
            <p>This is a footer</p>
          </div>
        </div>
      </footer>
    );
  }
}