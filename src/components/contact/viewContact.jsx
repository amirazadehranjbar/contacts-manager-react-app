import {useLocation} from "react-router-dom";

const ViewContact = () => {

    const location = useLocation();
    const contactInfo = location.state.contactInfo;

    return (
        <div className="flex flex-col items-center bg-slate-500 border border-gray-200 rounded-lg shadow-sm p-4">



        </div>
    );

}

export default ViewContact;