import React from "react";

class Nav extends React.PureComponent {
    render() {
        return (
            <nav className="navbar">
                <section>
                    <ul>
                        <li>Introduction</li>
                        <li>Hello</li>
                        <li>World</li>
                    </ul>
                </section>
            </nav>
        );
    }
}

export default Nav;
