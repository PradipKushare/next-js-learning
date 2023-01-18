import { useRouter } from "next/router";
import { Fragment, useEffect } from "react";
import fs from "fs";
import path from "path";

const ProductDetails = ({ loadedProducts }) => {
  const router = useRouter;
  //   const { eventId } = router.query;

  if (!loadedProducts) {
    return <p>Loading...</p>;
  }
  return (
    <Fragment>
      <h1>{loadedProducts.title}</h1>
      <p>{loadedProducts.description}</p>
    </Fragment>
  );
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const producId = params.pid;
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  const product = data.products.find((product) => product.id === producId);
  if (!product) {
    return {
      notFound: true,
    };
  }
  return {
    props: { loadedProducts: product },
  };
};

export const getStaticPaths = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  const ids = await data.products.map((product) => product.id);
  const pathWithParams = await ids.map((id) => ({ params: { pid: id } }));
  return {
    paths: pathWithParams,
    fallback: true,
  };
};

export default ProductDetails;
