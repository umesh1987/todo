import React from "react";

import "./Header.css";

const Header = (props) => {
    return (
        <div className="twelve wide column column-right header">
            {props.header}
        </div>
    );
};

export default Header;