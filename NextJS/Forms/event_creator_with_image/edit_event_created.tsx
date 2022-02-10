import React, { useState, useRef } from "react";
import { WhiteButton } from "./display_event_created_list.styled";
import { LoaderWrappaer, EventItem } from "./event_creator_with_image.styled";

type editEventProps = {
  events?: any;
  handleCancel: any;
  refresh: any;
  evt: any;
};

// SET SELECTED THUMBNAIL AS BKG =============
const EditEvent = ({ handleCancel, refresh, evt }: editEventProps) => {
  const currThumb = evt.thumbnail ? evt.thumbnail : false;
  const [thumbnailState, setthumbnailState] = useState<any>(currThumb);

  const handleThumbnail = async (e: any) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setthumbnailState(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  // =================  SUBMIT EVENT ==============
  const title = useRef<HTMLInputElement>(null);
  const date = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);
  const [spinerState, setspinerState] = useState<boolean | JSX.Element>(false);

  // ========== refresh the data Props on data submit
  const submitEvent = async () => {
    if (title.current && description.current && date.current) {
      setspinerState(
        <LoaderWrappaer>
          <div>
            <i></i>
          </div>
        </LoaderWrappaer>
      );
      const eventData = {
        title: title.current.value,
        description: description.current.value,
        date: date.current.value,
        thumbnail: thumbnailState,
      };

      const res = await fetch(`/api/event/${evt._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      console.log(res);
      if (res.status < 300) {
        refresh();
        handleCancel();
      }
    }
  };

  return (
    <>
      {spinerState}
      <EventItem>
        {thumbnailState && (
          <div
            style={{
              backgroundImage: `url(${thumbnailState})`,
            }}
          ></div>
        )}
        <p>
          <i> images bigger than 3.5MB are not allowed</i>
        </p>
        <label htmlFor='thumbnail'>CHOOSE THUMBNAIL</label>
        <input
          type='file'
          accept='image/png, image/jpeg'
          id='thumbnail'
          name='thumbnail'
          onChange={handleThumbnail}
        />
        <input
          type='text'
          maxLength={150}
          required
          ref={title}
          placeholder='title (required)'
          defaultValue={evt.title}
        />
        <input type='date' required ref={date} defaultValue={evt.date} />
        <textarea
          required
          maxLength={500}
          ref={description}
          placeholder='description (required, max char: 500)'
          defaultValue={evt.description}
        ></textarea>
        <section>
          <WhiteButton
            style={{ color: "green", borderColor: "green" }}
            onClick={submitEvent}
          >
            SAVE
          </WhiteButton>
          <WhiteButton
            style={{ color: "red", borderColor: "red" }}
            onClick={handleCancel}
          >
            CANCEL
          </WhiteButton>
        </section>
      </EventItem>
    </>
  );
};

export default EditEvent;