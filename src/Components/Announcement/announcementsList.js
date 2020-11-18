import React from 'react';
import { Announcement } from './announcement';
import './announcement.scss';

export const AnnouncementList = (props) => {
  /* eslint-disable */
  const { announcements } = props;

  return (
    <ul>
      {announcements.map(announcement => (<Announcement {...announcement} />))}
    </ul>
  );
};


export default AnnouncementList;
