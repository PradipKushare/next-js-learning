import { getFeaturedEvents } from "../dummy-data";
import EventsList from "../components/events/EventsList";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <ul>
        <EventsList items={featuredEvents} />
      </ul>
    </div>
  );
};

export default HomePage;
