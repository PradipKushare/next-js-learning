import { useEffect, useState } from "react";
import useSWR from "swr";

const LastSalesPage = ({ sData }) => {
  const [sales, setSales] = useState(sData);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://nextjs-course-b7d60-default-rtdb.firebaseio.com/sales.json",
    fetcher
  );

  useEffect(() => {
    if (data) {
      const transformSales = [];
      for (const key in data) {
        transformSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformSales);
    }
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  //   useEffect(() => {
  //     setIsLoading(true);
  //     fetch("https://nextjs-course-b7d60-default-rtdb.firebaseio.com/sales.json")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const transformSales = [];
  //         for (const key in data) {
  //           transformSales.push({
  //             id: key,
  //             username: data[key].username,
  //             volume: data[key].volume,
  //           });
  //         }
  //         setSales(transformSales);
  //         setIsLoading(false);
  //       });
  //   }, []);

  if (!sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
};

export const getStaticProps = async (context) => {
  const response = await fetch(
    "https://nextjs-course-b7d60-default-rtdb.firebaseio.com/sales.json"
  );
  const data = await response.json();

  let sData = [];
  for (const key in data) {
    await sData.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }

  return {
    props: {
      sData: sData,
    },
  };
};

export default LastSalesPage;
