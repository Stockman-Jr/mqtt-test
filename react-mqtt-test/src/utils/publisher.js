import { getClient } from './client';

export const publishToTopic = (topic, message) => {
  const client = getClient();
  if (!client) return;

  client.publish(topic, message, {}, (err) => {
    if (err) console.error('Publish error:', err);
    else console.log(`Published to ${topic}:`, message);
  });
};