import {NavbarWithSearch , Contacts} from "./components"
import {Outlet} from "react-router-dom";

const App = () => {

    return (
        <div className="min-h-screen w-screen bg-slate-700 flex flex-col">
            <NavbarWithSearch />
            <Outlet />
        </div>


    )
}

export default App
