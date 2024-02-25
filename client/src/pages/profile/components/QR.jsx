import React, { useState } from 'react';
import QRCode from 'react-qr-code';

export const QR = () => {
  const [userData, setUserData] = useState([
    {
      username: 'user1',
      startTime: '2024-02-25T08:00:00',
      endTime: '2024-02-25T17:00:00',
      events: ['Event1', 'Event2', 'Event3'],
    },
    {
      username: 'user2',
      startTime: '2024-02-26T09:00:00',
      endTime: '2024-02-26T18:00:00',
      events: ['Event4', 'Event5', 'Event6'],
    },
  ]);

  return (
    <div style={{ background: 'white', padding: '16px' }}>
      {userData.map(({ username, startTime, endTime, events }) => (
        <div key={username} style={{ margin: '10px' }}>
          <QRCode
            size={256}
            style={{ height: 'auto', maxWidth: '100%', width: '200px' }}
            value={`${username}-${startTime}-${endTime}-${events.join(',')}`}
            viewBox={`0 0 256 256`}
          />
          <p>
            Username: {username}<br />
            Start Time: {startTime}<br />
            End Time: {endTime}<br />
            Events: {events.join(', ')}
          </p>
        </div>
      ))}
    </div>
  );
};
