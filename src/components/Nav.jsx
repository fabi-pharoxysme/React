import React from 'react';
import MenuButtons from './MenuButtons.jsx';
import LogoMozilla from './LogoMozilla.jsx';


const NavBar = () => {
    return(
        <nav className = 'Nav'>
            <LogoMozilla/>
            <MenuButtons id = 'FirefoxBtn' text = 'Firefox'/>
            <MenuButtons id = 'ProjectsBtn' text = 'Proyectos' />
            <MenuButtons id = 'DevBtn' text = 'Desarrolladores' />
            <MenuButtons id = 'AboutBtn' text = 'Acerca de'/>
            <MenuButtons className = 'DownloadBtn' text = 'Descarga Firefox' />    
       </nav>
    )
};

export default NavBar;