import React from "react";
import sunlifeLogo from "./sunlife3.jpg";

function Header() {

    return (
      <div>
        <div className="sunlife-header">
            <img src={sunlifeLogo} className="sunlife-logo" alt="Sunlife Logo" />
        </div>
      </div>
    );
}

export default Header