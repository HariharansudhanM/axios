import { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import toast, { Toaster } from "react-hot-toast";

import axios from "axios";

import AllUserData from "./AllUserData";

function AllData() {
  let [userData, setUserData] = useState([]);

  let fetchData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUserData(() => res.data);
    console.log(res.data);
  };

  function handleClick() {
    fetchData();
  }

  function handlePost() {
    try {
      let importData = userData.map((user) => {
        return {
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
        };
      });
      let data = JSON.stringify(importData);
      console.log(data);
      let postData = () => {
        axios.post(
          "https://65f1a03c034bdbecc76336f5.mockapi.io/Users",
          importData
        );
      };
      postData();
      toast("successful");
    } catch (error) {
      message: `error occured ${console.log(error)}`;
    }
  }

  return (
    <>
      <Button variant="primary" onClick={handlePost}>
        export data to db
      </Button>{" "}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        {userData.length > 1 ? (
          userData.map((userData, index) => {
            return <AllUserData key={index} userData={userData} />;
          })
        ) : (
          <tbody>
            <tr>
              <td>no data</td>
            </tr>
          </tbody>
        )}
      </Table>
      <Button variant="primary" onClick={handleClick}>
        Get Data
      </Button>{" "}
      <Toaster />
    </>
  );
}

export default AllData;
