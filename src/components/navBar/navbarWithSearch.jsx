import React from "react";
import {
    Navbar,
    IconButton,
    Input,
} from "@material-tailwind/react";

import {House, UserRound, UserRoundPlus, Search} from "lucide-react";
import {Link} from "react-router-dom";

const NavbarWithSearch = () => {

    return (
        <Navbar className="bg-slate-500 shadow-md w-full border-none p-4">
            <div className="flex items-center justify-between w-full">

                {/* Left: Navigation buttons */}
                <div className="flex gap-4">
                    <Link to="/">
                        <IconButton className="p-3 shadow-slate-900 cursor-pointer">
                            <House/>
                            <p className="ml-1">Home</p>
                        </IconButton>
                    </Link>

                    <Link to="/contacts">
                        <IconButton className="p-3 shadow-slate-900 cursor-pointer">
                            <UserRound/>
                            <p className="ml-1">Contacts</p>
                        </IconButton>
                    </Link>

                    <Link to="/add-contact">
                        <IconButton className="p-3 shadow-slate-900 cursor-pointer">
                            <UserRoundPlus/>
                            <p className="ml-1">Add Contact</p>
                        </IconButton>
                    </Link>
                </div>

                {/* Right: Search input */}
                <div className="max-w-xs w-full sm:w-auto">
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <Search className="h-5 w-5 text-gray-400"/>
                        </span>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-10 pr-4 py-2 rounded-md bg-slate-600 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>




            </div>
        </Navbar>
    );
};

export default NavbarWithSearch;
