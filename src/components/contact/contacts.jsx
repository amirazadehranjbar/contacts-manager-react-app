// Using Redux Toolkit to fetch and display contacts
import { useEffect, useState } from 'react';
import Contact from './contact.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../features/contactSlice.js';

const Contacts = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const { contactInfo, loading, error } = useSelector((state) => state.contact);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const filtered = contactInfo.filter(c =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.phone.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <div className="p-4 text-white">Loading...</div>;
    if (error) return <div className="p-4 text-red-500">{error}</div>;

    return (
        <div className="p-4">
            <input
                type="text"
                placeholder="Search contacts..."
                className="mb-4 p-2 rounded bg-slate-600 text-white w-full md:w-1/2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filtered.length > 0 ? filtered.map((c, i) => (
                    <Contact key={i} contactInfo={c} />
                )) : (
                    <p className="text-white">No contacts found.</p>
                )}
            </div>
        </div>
    );
};

export default Contacts;