import React from 'react';
import { EditAnnouncement } from '../Forms/editAnnouncement';
import './announcement.scss';

export const Announcement = (props) => {
  /* eslint-disable */
  const { title, body, id } = props;

  return (
    <li className="ui floating message" key={id}>
      <div className="header">{title}</div>
      <p>{body}</p>
      <EditAnnouncement {...props} />
    </li>
  );
};
