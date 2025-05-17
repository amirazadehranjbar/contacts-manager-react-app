const AddContact = () => {
    return (
        <div className="w-full h-[calc(100vh-64px)] flex justify-center items-center bg-slate-700 ">
            <div
                className="flex flex-col w-80 bg-slate-400 rounded-md border border-gray-200 shadow-md p-4 space-y-8">
                {/*region contact name input */}
                <div className="w-full">
                    <label htmlFor="name" className="text-gray-700 font-bold ">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full border border-gray-300 rounded-md p-2 mt-2"
                        placeholder="Enter name"
                    />
                </div>
                {/*endregion*/}

                {/*region contact email input */}
                <div className="w-full">
                    <label htmlFor="email" className="text-gray-700 font-bold">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        className="w-full border border-gray-300 rounded-md p-2 mt-2"
                        placeholder="Enter email"
                    />
                </div>
                {/*endregion*/}

                {/*region contact phone input */}
                <div className="w-full">
                    <label htmlFor="email" className="text-gray-700 font-bold">Phone</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="w-full border border-gray-300 rounded-md p-2 mt-2"
                        placeholder="Enter phone"
                    />
                </div>
                {/*endregion*/}

                {/*region contact imageURL input */}
                <div className="w-full">
                    <label htmlFor="email" className="text-gray-700 font-bold">image url</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        className="w-full border border-gray-300 rounded-md p-2 mt-2"
                        placeholder="Enter image url"
                    />
                </div>
                {/*endregion*/}

                {/*region add contact and back button */}
                <div className="w-full flex flex-row space-x-2">
                    <button
                        className="w-full bg-slate-800 text-slate-300 font-bold py-2 px-4 rounded-md
                        hover:bg-blue-900 transition duration-200 cursor-pointer"
                    >
                        Add Contact
                    </button>

                    <button
                        className="w-full bg-slate-800 text-slate-300 font-bold py-2 px-4 rounded-md
                        hover:bg-blue-900 transition duration-200 cursor-pointer"
                    >
                        Back
                    </button>
                </div>


            </div>
        </div>
    );
};

export default AddContact;
