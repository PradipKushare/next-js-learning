import EventsList from "../components/events/EventsList";
import { getFeaturedEvents } from "../helpers/api-utils";

const HomePage = ({ events }) => {
  if (!events) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ul>
        <EventsList items={events} />
      </ul>
    </div>
  );
};

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
      revalidate: 1800,
    },
  };
};

export default HomePage;
