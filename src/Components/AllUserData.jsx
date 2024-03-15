import axios from "axios";
import Button from "react-bootstrap/Button";

function AllUseruserData({ userData }) {
  function handleDelete() {
    axios.delete();
  }

  return (
    <tbody>
      <tr>
        <td>{userData?.id}</td>
        <td>{userData?.name}</td>
        <td>{userData?.username}</td>
        <td>{userData?.email}</td>
        <td>edit</td>
        <td>
          {" "}
          <Button variant="primary">delete</Button>{" "}
        </td>
      </tr>
    </tbody>
  );
}

export default AllUseruserData;
