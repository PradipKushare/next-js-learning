import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

const EventDetails = () => {
  const { query } = useRouter();
  console.log(query.eventId);
  const eventId = query.eventId;

  const event = getEventById(eventId);
  console.log(event);

  if (!event) {
    return <p>No event found</p>;
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        alt={event.alt}
      />
      <EventContent />
      <p>{event.description}</p>
    </Fragment>
  );
};

export default EventDetails;
