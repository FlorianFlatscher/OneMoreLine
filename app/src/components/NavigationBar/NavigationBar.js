import React from "react";
import Logo from "../../images/logo.svg"

import {
    Menu,
} from 'semantic-ui-react'

export const NavigationBar = (props) => {

    return <Menu  inverted>

        <Menu.Menu position='right'>
            <Menu.Item as='a'>Account</Menu.Item>
        </Menu.Menu>
    </Menu>
}
