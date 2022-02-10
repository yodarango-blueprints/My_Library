import React from "react";
import Image from "next/image";
import Link from "next/link";

import { EventItem, EventsGridWrapper, OrangeLinkButton } from "./eventsGrid.styled";

const EventsGrid = ({ events }: any) => {
  return (
    <EventsGridWrapper>
      <h1>COMING UP</h1>
      {events.map((evt: any) => (
        <EventItem key={evt._id}>
          <div>
            {evt.thumbnail && (
              <Image
                layout='fill'
                src={`${evt.thumbnail}`}
                alt='event image '
              />
            )}
            {!evt.thumbnail && (
              <Image
                layout='fill'
                src='/assets/images/event-bkg.png'
                alt='event image '
              />
            )}
          </div>
          <h2>{evt.title}</h2>
          <h3>{`${evt.date.split("-")[1]}/${evt.date.split("-")[2]}/${
            evt.date.split("-")[0]
          }`}</h3>
          <p>{evt.description}</p>
          <Link href={`/events/${evt._id}`} passHref>
            <OrangeLinkButton
              style={{ width: "100%", height: "4rem", maxWidth: `400px` }}
            >
              LEARN MORE
            </OrangeLinkButton>
          </Link>
        </EventItem>
      ))}
    </EventsGridWrapper>
  );
};

export default EventsGrid;