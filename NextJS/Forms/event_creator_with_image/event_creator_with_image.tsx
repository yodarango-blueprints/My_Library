import React, { useState, useRef } from "react";
import { EventItem, WhiteButton, LoaderWrappaer } from "./event_creator_with_image.styled";

type addEventProps = {
  events?: any;
  handleCancel: any;
  refresh: any;
};

// SET SELECTED THUMBNAIL AS BKG =============
let thumbnail: any;
const AddEvent = ({ handleCancel, refresh }: addEventProps) => {
  const [thumbnailState, setthumbnailState] = useState<any>(false);

  const handleThumbnail = async (e: any) => {
    const blob = URL.createObjectURL(e.target.files[0]);
    console.log(blob);

    const reader = new FileReader();
    reader.onloadend = () => {
      thumbnail = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);

    setthumbnailState(
      <div
        style={{
          backgroundImage: `url(${blob})`,
        }}
      ></div>
    );
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
        thumbnail: thumbnail,
      };

      console.log(eventData);
      const res = await fetch("/api/new-event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });
      if (res.status < 300) {
        refresh();
        setspinerState(false);
        handleCancel();
      }
    }
  };

  return (
    <>
      {spinerState}
      <EventItem>
        {thumbnailState}
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
        />
        <input type='date' required ref={date} />
        <textarea
          required
          maxLength={500}
          ref={description}
          placeholder='description (required, max char: 500)'
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

export default AddEvent;