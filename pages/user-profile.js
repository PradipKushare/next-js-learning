const UserProfile = ({ userName }) => {
  return <h1>{userName}</h1>;
};
export default UserProfile;

export const getServerSideProps = async (context) => {
  const { params, req, res } = context;

  return {
    props: {
      userName: "pradip",
    },
  };
};
