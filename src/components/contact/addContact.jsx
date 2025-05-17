import {useState} from "react";
import axios from "axios";
import swal from 'sweetalert';

const AddContact = () => {

    const [newUserData, setNewUserData] = useState({});

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setNewUserData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSaveContact = async (e) => {
        e.preventDefault();

        try {

            await axios.post("http://localhost:8000/contact", newUserData).then((res) => {
                if (res.status === 201) {
                    swal({
                        title: "Contact Added",
                        text: "Contact added successfully",
                        icon: "success",
                        button: "OK",
                    }).then(() => {
                        window.history.back();
                    });
                } else {
                    swal({
                        title: "Error",
                        text: res.data.message,
                        icon: "error",
                        button: "OK",
                    });
                }
            });

        } catch (err) {
            console.log(err);
            await swal({
                title: "Error",
                text: err.message,
                icon: "error",
                button: "OK",
            });
        }
    }

    return (
        <div className="w-full h-[calc(100vh-64px)] flex justify-center items-center bg-slate-700 overflow-y-auto">
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
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
                        onChange={handleInputChange}
                    />
                </div>
                {/*endregion*/}

                {/*region add contact and back button */}
                <div className="w-full flex flex-row space-x-2">
                    <button
                        className="w-full bg-slate-800 text-slate-300 font-bold py-2 px-4 rounded-md
                        hover:bg-blue-900 transition duration-200 cursor-pointer"
                        onClick={handleSaveContact}
                    >
                        Add Contact
                    </button>

                    <button
                        className="w-full bg-slate-800 text-slate-300 font-bold py-2 px-4 rounded-md
                        hover:bg-blue-900 transition duration-200 cursor-pointer"
                        onClick={() => {
                            window.history.back();
                        }}
                    >
                        Back
                    </button>
                </div>
                {/*endregion*/}
            </div>
        </div>
    );
};

export default AddContact;
