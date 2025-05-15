import Contact from "./contact.jsx";
import {useEffect, useState} from "react";
import Spinner from "../spinner/Spinner.jsx";

const Contacts = () => {

    const [loading, setLoading] = useState(false);
    const [contactInfo, setContactInfo] = useState([]);

    useEffect(() => {

        setContactInfo([
            {
                name: "Amir Azadeh Ranjbar",
                email: "amirazadehranjbar@gmail.com",
                phone: "+98 910 866 2128",
            },
            {
                name: "shadi rostaee",
                email: "shadi@gmail.com",
                phone: "+98 910 8787 778",
            },
            {
                name: "Ali Rezaei",
                email: "ali@gmail.com",
                phone:"+98 912 588 877" }

        ])

    }, []);




    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full h-full bg-slate-700 overflow-y-auto">
            {
                loading ? (
                    <div className="flex items-center justify-center w-full h-full">
                        <Spinner />
                    </div>
                ) : (
                    contactInfo.length > 0 ? (
                            contactInfo.map((contact , index) => (
                                <Contact key={index} contactInfo={contact} />
                            ))
                        ):
                        (
                            <div className="flex items-center justify-center w-full h-full">
                                <p className="text-white">No contacts available</p>
                            </div>
                        )
                )
            }
        </div>
    )
}

export default Contacts;