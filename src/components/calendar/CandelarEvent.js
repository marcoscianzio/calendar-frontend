import React from "react";

const CandelarEvent = ({ event }) => {
    const { title, user } = event;
    return (
        <div>
            <strong>{title} - </strong>
            <span>{user.name}</span>
        </div>
    );
};

export default CandelarEvent;
