import {useLocation} from "react-router-dom";
import BlurredFooterCard from "../cards/blurredFooterCard.jsx";


const ViewContact = () => {

    const location = useLocation();
    const contactInfo = location.state.contactInfo;

    return (
        <div className="w-full h-[calc(100vh-64px)] flex justify-center items-center bg-slate-700 overflow-y-auto">
            <div className="flex justify-center items-center">
                <BlurredFooterCard
                    contactEmail={contactInfo.email}
                    contactImage={contactInfo.image}
                    contactName={contactInfo.name}
                    contactPhone={contactInfo.phone}
                />
            </div>
        </div>
    );

}

export default ViewContact;