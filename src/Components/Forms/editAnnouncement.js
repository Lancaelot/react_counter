import React, { useState } from 'react';
import { deleteRequest, putRequest } from '../../api/api';

export const EditAnnouncement = (props) => {
  /* eslint-disable */
  const { body, id } = props;
  const [editBody, setEditBody] = useState(body);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      <div className="ui three bottom attached buttons formButton">
        <button
          className="ui black button"
          type="button"
          onClick={() => deleteRequest(id)}
        >
          Show details
        </button>
        <button
          className="ui yellow button"
          type="button"
          onClick={() => setIsEdit(!isEdit)}
        >
          {!isEdit
            ? 'Edit announcement'
            : 'Hide edit panel'
          }
        </button>
        <button
          className="ui red button"
          type="button"
          onClick={() => deleteRequest(id)}
        >
          Delete
        </button>
      </div>
      {isEdit && (
        <form
          className="ui form success"
          onSubmit={(event) => {
            event.preventDefault();
            putRequest(body, id);
            setIsEdit(false);
          }}
        >
          <div className="field">
            <textarea
              type="text"
              rows="4"
              value={editBody}
              onChange={
                event => setEditBody(event.target.value)
              }
            />
          </div>
          <button className="ui submit button" type="submit">Submit</button>
        </form>
      )}
    </>
  );
};
