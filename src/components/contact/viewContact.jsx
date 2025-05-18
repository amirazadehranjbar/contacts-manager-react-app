import {useLocation} from "react-router-dom";
import InteractiveContactCard from "../cards/interactiveContactCard.jsx";


const ViewContact = () => {

    const location = useLocation();
    const contactInfo = location.state.contactInfo;

    return (
        <div className="w-full h-[calc(100vh-64px)] flex justify-center items-center bg-slate-700 overflow-y-auto">
            <div className="flex justify-center items-center">

                <InteractiveContactCard
                    name={contactInfo.name}
                    image={contactInfo.image}
                    phone={contactInfo.phone}
                    email={contactInfo.email}
                ></InteractiveContactCard>

            </div>
        </div>
    );

}

export default ViewContact;