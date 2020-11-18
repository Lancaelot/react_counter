import React, { useState, useEffect } from 'react';
import './App.scss';
import { request } from './api/api';
import { AnnouncementList } from './Components/Announcement/announcementsList';
import { AnnouncementAddForm } from './Components/Forms/annuncementAddForm';

const apiSection = 'posts';

async function getAnnouncements() {
  const announcementsFromServer = await request(apiSection, { method: 'GET' });

  return announcementsFromServer;
}

const App = () => {
  /* eslint-disable */
  const [announcements, setAnnouncements] = useState([]);
  let x = 5;

  const handleChange = () => {
    x++;

    console.log(x);
  };

  useEffect(() => getAnnouncements()
    .then(
      announcementFromServer => {
        console.log('hello')
        return setAnnouncements(announcementFromServer)},
    ), [x]);

  return (
    <div className="App">
      <AnnouncementList announcements={announcements} />
      <AnnouncementAddForm handleChangeRender={handleChange} />
    </div>
  );
};

export default App;
