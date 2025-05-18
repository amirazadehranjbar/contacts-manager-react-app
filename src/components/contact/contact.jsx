import {Link} from "react-router-dom";

const Contact = ({ contactInfo }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-800 p-4 w-full max-w-sm mx-auto">
            <div className="relative">
                <img
                    className="w-32 h-32 rounded-full object-cover mx-auto"
                    src={contactInfo.image}
                    alt=""
                />
            </div>
            <div className="text-center mt-4">
                <h5 className="text-xl font-bold text-gray-900 dark:text-white">
                    {contactInfo.name}
                </h5>
            </div>
            <div className="text-center text-slate-900 font-mono mt-2">
                <Link
                    to={"/view-contact/"}
                    state={{ contactInfo: contactInfo }}
                    className="text-sm text-blue-500 hover:underline"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};
export default Contact;