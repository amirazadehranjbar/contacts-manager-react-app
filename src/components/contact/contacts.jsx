import { useEffect, useState } from 'react';
import axios from 'axios';
import Contact from '../contact/contact.jsx';

const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const res = await axios.get('http://localhost:8000/contact');
                setContacts(res.data);
            } catch (err) {
                setError(`Failed to fetch contacts - ${err.message}`);
            } finally {
                setLoading(false);
            }
        };
        fetchContacts();
    }, []);

    const filtered = contacts.filter(c =>
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
