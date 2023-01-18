import { useRouter } from "next/router";
import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import { getFeaturedEvents, getEventById } from "../../helpers/api-utils";

const EventDetails = ({ event }) => {
  if (!event) {
    return <p className="center">Loading...</p>;
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

export const getStaticProps = async (context) => {
  const { eventId } = context.params;

  const event = await getEventById(eventId);
  return {
    props: {
      event: event,
    },
  };
};

export const getStaticPaths = async (context) => {
  const allEvents = await getFeaturedEvents();
  const paths = allEvents.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths: paths,
    fallback: "blocking",
  };
};

export default EventDetails;
