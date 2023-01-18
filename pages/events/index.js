import EventList from "../../components/events/EventsList";
import EventsSearch from "../../components/events/EventsSearch";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/api-utils";

const AllEventPage = ({ events }) => {
  const router = useRouter();
  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    console.log(fullPath);
    router.push(fullPath);
  };

  if (!events) {
    return <p>Loading...</p>;
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export const getStaticProps = async (ctx) => {
  const allEvent = await getAllEvents();
  return {
    props: {
      events: allEvent,
    },
    revalidate: 60,
  };
};

export default AllEventPage;
