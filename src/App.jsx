import{NavbarWithSearch} from "./components/navBar/navbarWithSearch.jsx";
import Contacts from "./components/contact/contacts.jsx";

const App = () => {

    return (
        <div className="min-h-screen w-screen bg-slate-700 flex flex-col">
            <NavbarWithSearch />
            <div className="flex-1 overflow-y-auto">
                <Contacts />
            </div>
        </div>


    )
}

export default App
