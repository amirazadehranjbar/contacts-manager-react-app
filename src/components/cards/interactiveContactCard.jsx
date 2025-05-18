import { UserPen, UserX } from "lucide-react";

const InteractiveContactCard = ({ name, phone, image ,email }) => {
    return (
        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl
        transition duration-300 flex flex-col items-center
        hover:bg-slate-300
        ">


            <img src={image} alt="avatar" className="w-48 h-48 rounded-full object-cover mb-2" />
            <h4 className="font-bold text-gray-800">{name}</h4>
            <p className="text-gray-500 text-sm mb-4">{phone}</p>
            <p className="text-gray-500 text-sm mb-4">{email}</p>
            <div className="flex gap-2">
                <UserPen className="text-blue-500 hover:text-blue-700 cursor-pointer" />
                <UserX className="text-red-500 hover:text-red-700 cursor-pointer" />
            </div>
        </div>
    );
};

export default InteractiveContactCard;