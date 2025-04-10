import React, { useState } from 'react';
import { connectClient } from '../utils/client';
import { subscribeToTopic, unsubscribeFromTopic } from '../utils/subscribe';
import { publishToTopic } from '../utils/publisher';

const brokerUrl = 'ws://broker.hivemq.com:8000/mqtt'; 

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
        </div>
    );
}