import axios from "axios";
import React, { useContext } from "react";
import { userContext } from "../Context/UserProvider";

function LoadData({ name, userName, email, phone, id, handleEdit }) {
  let { userData, setUserData, edit } = useContext(userContext);
  async function handleDelete(id) {
    try {
      await axios.delete(
        `https://66685f46f53957909ff7c0ce.mockapi.io/users/users/${id}`
      );

      setUserData(() => userData.filter((e) => e.id !== id));
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{userName}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>
          {!edit ? (
            <button
              className="btn btn-success"
              type="button"
              onClick={() => handleEdit(id)}
            >
              Edit
            </button>
          ) : (
            <button className="btn btn-success" type="button" disabled>
              Edit
            </button>
          )}

          {"                "}

          {!edit ? (
            <button
              className="btn btn-success"
              type="button"
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
          ) : (
            <button
              className="btn btn-success"
              type="button"
              onClick={handleEdit}
            >
              Cancel
            </button>
          )}
        </td>
      </tr>
    </>
  );
}

export default LoadData;
