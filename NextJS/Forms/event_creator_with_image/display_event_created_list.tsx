import React, { useState } from "react";

//styles
import {
    WhiteButton,
  AllEventsWrapper,
  AreYouSureModal,
  SingleEvent,
} from "./display_event_created_list";

const AllEvents = ({ events, refreshData, editEvent }: any) => {
  // DELETE EVENT
  const [areYouSureModal, setareYouSureModal] = useState<boolean | JSX.Element>(
    false
  );

  const deleteEvent = async (id: string) => {
    const proceedWithDeletion = async () => {
      const res = await fetch(`/api/event/${id}`, {
        method: "DELETE",
      });

      if (res.status < 3000) {
        refreshData();
        setareYouSureModal(false);
      }
    };

    setareYouSureModal(
      <AreYouSureModal>
        <div>
          <p>Are you sure that you want to delete this event?</p>
          <div>
            <WhiteButton
              style={{ color: "green", borderColor: "green" }}
              onClick={() => setareYouSureModal(false)}
            >
              NO
            </WhiteButton>
            <WhiteButton
              style={{ color: "red", borderColor: "red" }}
              onClick={proceedWithDeletion}
            >
              YES
            </WhiteButton>
          </div>
        </div>
      </AreYouSureModal>
    );
  };

  return (
    <>
      {areYouSureModal}
      <AllEventsWrapper>
        {events.map((evt: any) => (
          <SingleEvent key={evt._id}>
            {evt.title} <span onClick={() => deleteEvent(evt._id)}></span>
            <span onClick={() => editEvent(evt._id)}></span>
          </SingleEvent>
        ))}
      </AllEventsWrapper>
    </>
  );
};

export default AllEvents;