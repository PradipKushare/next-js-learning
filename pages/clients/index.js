import Link from "next/link";

const ClientsPage = () => {
  const clients = [
    { id: "max", name: "Maximilan" },
    { id: "manual", name: "Manuel" },
    { id: "temp", name: "Temporary" },
    { id: "dummy", name: "Dummy" },
  ];
  return (
    <div>
      <h1> This is client page</h1>
      <ul>
        {clients.map((cl) => (
          <li key={cl.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: cl.id },
              }}
            >
              {cl.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
