import React, { useState } from 'react';
import { postRequest } from '../../api/api';
import './annuncementAddForm.scss';

const handleChange = (event, callBack) => {
  callBack(event.target.value);
};

export const AnnouncementAddForm = (props) => {
  /* eslint-disable */
  const [announcementBody, setAnnouncementBody] = useState('');
  const [announcementTitle, setAnnouncementTitle] = useState('');

  return (
    <form
      className="ui form attached fluid message announcementForm"
      onSubmit={(event) => {
        event.preventDefault();
        postRequest(announcementTitle, announcementBody);
        setAnnouncementBody('');
        setAnnouncementTitle('');
        props.handleChangeRender();
      }}
    >
      <div className="header aligned center">
        Add new announcement
      </div>
      <label htmlFor="title">
        Title
        <input
          name="title"
          className="field"
          value={announcementTitle}
          onChange={event => handleChange(event, setAnnouncementTitle)}
        />
      </label>
      <label htmlFor="body">
        Text
        <textArea
          name="body"
          className="field"
          value={announcementBody}
          placeholder="Enter some description here"
          onChange={event => handleChange(event, setAnnouncementBody)}
        />
      </label>
      <div className="ui two bottom buttons">
        <button type="submit" className="floated ui secondary button">
          Save
        </button>
        <button
          className="floated ui button"
          type="button"
          onClick={() => {
            setAnnouncementBody('');
            setAnnouncementTitle('');
          }}
        >
          Abort
        </button>
      </div>
    </form>
  );
};
