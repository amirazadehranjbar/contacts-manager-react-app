import React from "react";
import {
    Navbar,
    MobileNav,
    Button,
    IconButton,
    Input,
} from "@material-tailwind/react";

import {House, UserRound} from "lucide-react";
import {Link} from "react-router-dom";

const NavbarWithSearch = () => {

    return (
        <Navbar className="bg-slate-500 shadow-md w-full h-1/4 border-none p-4">

            <Link to="/">
                <IconButton className="p-3 shadow-amber-900 mr-10 cursor-pointer">
                    <House></House>
                </IconButton>
            </Link>


            <Link to="/contacts">
                <IconButton className="p-3 shadow-amber-900 mr-10 cursor-pointer">
                    <UserRound></UserRound>
                </IconButton>
            </Link>

        </Navbar>
    )
}

export default NavbarWithSearch;