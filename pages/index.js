import { getFeaturedEvents } from "../dummy-data";
import EventsList from "../components/events/EventsList";
import fs from "fs";
import Link from "next/link";
import path from "path";

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

export const getStaticProps = async () => {
  console.log("re generating....");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return {
    props: {
      products: data?.products,
    },
    revalidate: 10,
  };
};

export default HomePage;
