import { getClient } from "./client";

export const subscribeToTopic = (topic, callback) => {
    const client = getClient();
    if (!client) return;

    client.subscribe(topic, (err) => {
        if (err) {
            console.error('Subscribe error:', err);
          } else {
            console.log(`Subscribed to ${topic}`);
          }
    });

    client.on('message', (receivedTopic, message) => {
        if (receivedTopic === topic) {
            callback(message.toString());
        }
    });
};

export const unsubscribeFromTopic = (topic) => { 
    const client = getClient();
    if (!client) return;

    client.unsubscribe(topic, (err) => {
        if (err) {
            console.error('Unsubscribe error:', err);
          } else {
            console.log(`Unsubscribed from ${topic}`);
          }
    });
};

