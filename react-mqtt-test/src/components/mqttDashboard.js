import React, { useState } from 'react';
import { connectClient } from '../utils/client';
import { subscribeToTopic, unsubscribeFromTopic } from '../utils/subscribe';
import { publishToTopic } from '../utils/publisher';

const brokerUrl = 'ws://broker.emqx.io:8083/mqtt'; 

export default function MqttDashboard() {
    const [topic, setTopic] = useState('test/topic');
    const [incomingMessages, setIncomingMessages] = useState([]);
    const [message, setMessage] = useState('');

    const handleConnect = () => {
        connectClient(brokerUrl);
    };

    const handleSubscribe = () => {
        subscribeToTopic(topic, (msg) => {
            setIncomingMessages((prev) => [...prev, msg]);
        });
    };

    const handleUnsubscribe = () => {
        unsubscribeFromTopic(topic);
    };

    const handlePublish = () => {
        publishToTopic(topic, message);
    };

    return (
        <div>
            <h2>MQTT Dashboard Test</h2>
            <button onClick={handleConnect}>Connect</button>
            <div>
                <input value={topic} onChange={(e) => setTopic(e.target.value)} />
                <button onClick={handleSubscribe}>Subscribe</button>
                <button onClick={handleUnsubscribe}>Unsubscribe</button>
            </div>
            <div>
                <input value={message} onChange={(e) => setMessage(e.target.value)} />
                <button onClick={handlePublish}>Publish</button>
            </div>
            <h3>Messages:</h3>
            <ul>
                {incomingMessages.map((msg, idx) => (
                <li key={idx}>{msg}</li>
                ))}
            </ul>
        </div>
    );
}