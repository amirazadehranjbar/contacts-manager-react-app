import{NavbarWithSearch} from "./components/navBar/myNavBar.jsx";
import Contacts from "./components/contact/contacts.jsx";

const App = () => {

    return (
        <div className="h-screen w-screen flex flex-col bg-slate-700">

            <NavbarWithSearch/>
            <Contacts></Contacts>

        </div>

    )
}

export default App
