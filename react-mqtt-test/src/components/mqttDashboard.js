import React, { useState } from 'react';


export default function MqttDashboard() {
    const [topic, setTopic] = useState('test/topic');

    return (
        <div>
            <h2>MQTT Dashboard Test</h2>
        </div>
    );
}