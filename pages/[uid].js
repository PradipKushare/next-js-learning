const UserIdPage = ({ uid }) => {
  return <h1>{uid}</h1>;
};
export default UserIdPage;

export const getServerSideProps = async (context) => {
  const { params, req, res } = context;
  console.log("Server side code");
  const userId = params.uid;
  return {
    props: {
      uid: "userid-" + userId,
    },
  };
};
