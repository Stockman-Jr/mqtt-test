import mqtt from 'mqtt';

let client = null;

export const connectClient = (brokerUrl, options = {}) => {
    client = mqtt.connect(brokerUrl, options);

    client.on('connect', () => console.log('Connected to broker.'));
    client.on('error', (err) =>  {
        console.log('Connection error.', err);
        client.end();
    });
    client.on('close', () => console.log('Disconnected from broker'));

    return client;
};

export const getClient = () => client;