import { useRouter } from "next/router";
const ClientProjectPage = () => {
  const router = useRouter();
  console.log("sssss", router.query);

  const loadProjectHandler = () => {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "2323", clientprojectid: "cli-pro-22" },
    });
  };

  return (
    <div>
      <h1>Client Project listed over here</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectPage;
