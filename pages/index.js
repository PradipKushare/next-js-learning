import fs from "fs";
import Link from "next/link";
import path from "path";
const HomePage = ({ products }) => {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/${product.id}`}>{product.title}</Link>
          </li>
        ))}
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
