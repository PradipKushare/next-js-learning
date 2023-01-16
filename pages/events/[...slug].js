import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventsList from "../../components/events/EventsList";
import { Fragment } from "react";

const FilteredEventPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;
  console.log("filterData", filterData);
  const filterredYear = filterData?.[0];
  const filteredMonth = filterData?.[1];
  console.log("filterredYear", filterredYear);
  console.log("filteredMonth", filteredMonth);

  const numYear = +filterredYear;
  const numMonth = +filteredMonth;
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid filter. Please adjust your values</p>;
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  console.log("filteredEvents", filteredEvents);
  if (!filteredEvents || filteredEvents.length === 0) {
    return <span>No events found for the choosen filter</span>;
  }
  if (!filterData) {
    <p className="center">No data present</p>;
  }

  return (
    <Fragment>
      <EventsList items={filteredEvents} />
    </Fragment>
  );
};

export default FilteredEventPage;
