# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {/* {userData?.map((user, index) => {
            <AllUserData
              key={index}
              name={user?.name}
              userName={user?.username}
              email={user?.email}
              id={user?.id}
            />;
          })} */}
        </tbody>
      </Table>
      <Button variant="primary" onClick={fetchData}>
        Get All data
      </Button>{" "}
