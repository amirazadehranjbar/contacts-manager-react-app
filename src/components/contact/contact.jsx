const Contact = ({ contactInfo }) => {
    return (
        <a
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm p-4
      hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-1/2 contain-content"
        >
            <img
                className="w-32 h-32 rounded-full object-cover mb-4"
                src="https://avatar.iran.liara.run/public"
                alt=""
            />
            <div className="text-center">
                <h5 className="text-xl font-bold text-gray-900 dark:text-white">
                    {contactInfo.name}
                </h5>
                <p className="text-sm text-gray-400">{contactInfo.email}</p>
                <p className="text-sm text-gray-400">{contactInfo.phone}</p>
            </div>
        </a>
    );
};

export default Contact;