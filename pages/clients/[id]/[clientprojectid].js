import { useRouter } from "next/router";

const SelectedClientProjectPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>selected client project page here</h1>
    </div>
  );
};

export default SelectedClientProjectPage;