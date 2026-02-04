import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Journal.css'
import Header from "../../components/Header/Header"
import Navbar from '../../components/Navbar/Navbar';

function Journal(props) {
    const [searchQuery, setSearchQuery] = useState('');

    const entries = [
        { id: 1, title: "A Letter to My Future Self" },
        { id: 2, title: "Reflections on Growth" },
        { id: 3, title: "Moments of Gratitude" },
    ];

    const filteredEntries = entries.filter(entry =>
        entry.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <Header currentCircle={props.circleName || "Name Placeholder"} profileImage="#" />
            <div className="manage-layout">
                <Navbar activePage="journal" />
                <main className='manage-main'>
                    <div className="journal-container">
                        <div className="journal-top-bar">
                            <input
                                type="text"
                                className="journal-search"
                                placeholder="Search entries..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="journal-btn new-entry-btn">
                                New Entry
                            </button>
                        </div>
                        <h1 className="journal-heading">Our Entries</h1>
                        <ul className="journal-entries-list">
                            {filteredEntries.map((entry) => (
                                <li key={entry.id} className="journal-entry-item">
                                    <Link to={`/journal/entry/${entry.id}`}>
                                        {entry.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Journal
