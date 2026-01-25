import { useState } from 'react';
import './Journal.css'
import Header from "../../components/Header/Header"
import Navbar from '../../components/Navbar/Navbar';

function JournalEntry(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [entryText, setEntryText] = useState(
        "I hope to become someone I'm proud of, someone kind, strong, and grounded. I want to always remember how hard I worked in college and how every challenge shaped me. It was a rewarding experience that taught me how to growth."
    );
    const [tempText, setTempText] = useState(entryText);

    const handleEdit = () => {
        setTempText(entryText);
        setIsEditing(true);
    };

    const handleSave = () => {
        setEntryText(tempText);
        setIsEditing(false);
    };

    return (
        <div>
            <Header currentCircle={props.circleName || "Name Placeholder"} profileImage="#" />
            <div className="manage-layout">
                <Navbar activePage="journal" />
                <main className='manage-main'>
                    <div className="journal-entry-container">
                        <h2 className="journal-prompt">
                            Write a message to your future self about who you hope to become and what lessons you want to remember from this moment.
                        </h2>

                        <div className="journal-entry-content">
                            {isEditing ? (
                                <textarea
                                    className="journal-textarea"
                                    value={tempText}
                                    onChange={(e) => setTempText(e.target.value)}
                                />
                            ) : (
                                <p className="journal-body">{entryText}</p>
                            )}
                        </div>

                        <div className="journal-entry-buttons">
                            {isEditing ? (
                                <button className="journal-btn save-btn" onClick={handleSave}>
                                    Save
                                </button>
                            ) : (
                                <button className="journal-btn edit-btn" onClick={handleEdit}>
                                    Edit
                                </button>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default JournalEntry