import React, { useState, useEffect } from "react";

const DateTime = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDateTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <h2>Date et Heure</h2>
            <p>{dateTime.toLocaleString()}</p>
        </div>
    );
};

export default DateTime;