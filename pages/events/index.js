import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventsList";
import EventsSearch from "../../components/events/EventsSearch";
import { Fragment } from "react";
import { useRouter } from "next/router";

const AllEventPage = () => {
  const router = useRouter();
  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    console.log(fullPath);
    router.push(fullPath);
  };
  const events = getAllEvents();
  return (
    <Fragment>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export default AllEventPage;
