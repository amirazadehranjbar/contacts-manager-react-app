import React from "react";
import {
    Navbar,
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
                        <div className="flex items-center gap-2 px-4 py-2 bg-slate-600 rounded-md shadow hover:bg-slate-700 transition text-white">
                            <House className="h-5 w-5" />
                            <span>Home</span>
                        </div>
                    </Link>

                    <Link to="/contacts">
                        <div className="flex items-center gap-2 px-4 py-2 bg-slate-600 rounded-md shadow hover:bg-slate-700 transition text-white">
                            <UserRound className="h-5 w-5" />
                            <span>Contacts</span>
                        </div>
                    </Link>

                    <Link to="/add-contact">
                        <div className="flex items-center gap-2 px-4 py-2 bg-slate-600 rounded-md shadow hover:bg-slate-700 transition text-white">
                            <UserRoundPlus className="h-5 w-5" />
                            <span>Add Contact</span>
                        </div>
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
