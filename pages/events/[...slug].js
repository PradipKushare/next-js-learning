import { useRouter } from "next/router";
import EventsList from "../../components/events/EventsList";
import { Fragment } from "react";
import Button from "../../components/ui/Button";
import { getFilteredEvents } from "../../helpers/api-utils";
import Head from "next/head";

const FilteredEventPage = ({ hasError, events, date }) => {
  // const router = useRouter();
  // const filterData = router.query.slug;

  // const filterredYear = filterData?.[0];
  // const filteredMonth = filterData?.[1];

  // const numYear = +filterredYear;
  // const numMonth = +filteredMonth;
  if (hasError) {
    return (
      <Fragment>
        <p>Invalid filter. Please adjust your values</p>
        <div className="center">
          <Button link={"/events"}>Browse all events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return <span>No events found for the choosen filter</span>;
  }

  return (
    <Fragment>
      <Head>
        <title>Filtered Events</title>
        <meta
          name="description"
          content={`All events for ${date.year}/${date.month}`}
        />
      </Head>
      <EventsList items={filteredEvents} />
    </Fragment>
  );
};

export const getServerSideProps = async (ctx) => {
  const { params } = ctx;

  const { slug } = params;
  const filterredYear = slug?.[0];
  const filteredMonth = slug?.[1];

  const numYear = +filterredYear;
  const numMonth = +filteredMonth;

  console.log({ slug, filterredYear, filteredMonth, numYear, numMonth });

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      // notFound:true,
      props: {
        hasError: true,
      },
      // redirect:{
      //   destination:'/error'
      // }
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
};

export default FilteredEventPage;
