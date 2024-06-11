import { useContext, useState } from "react";

import axios from "axios";
import LoadData from "./LoadData";
import { userContext } from "../Context/UserProvider";

function AllData({ handleEdit }) {
  let { userData, setUserData } = useContext(userContext);

  let fetchData = async () => {
    const res = await axios.get(
      "https://66685f46f53957909ff7c0ce.mockapi.io/users/users"
    );

    setUserData(() => [...userData, ...res.data]);
    console.log(res.data);
  };

  function handleClick() {
    if (userData.length == 0) {
      fetchData();
    }
  }

  return (
    <>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((el, index) => {
            return (
              <LoadData
                key={index}
                name={el.name}
                userName={el.username}
                email={el.email}
                phone={el.phone}
                id={el.id}
                handleEdit={handleEdit}
              />
            );
          })}
        </tbody>
      </table>
      <button className="btn btn-success" onClick={handleClick}>
        Load data
      </button>
    </>
  );
}

export default AllData;
