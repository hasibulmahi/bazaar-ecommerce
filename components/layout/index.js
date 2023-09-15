import React from 'react';
import Toolbar from '../header/toolbar.component';
import Navbar from '../header/navbar.component';

function Layout({children}) {
    return (
        <div>
            <Toolbar/>
            <Navbar/>
            {children}
        </div>
    );
}

export default Layout;