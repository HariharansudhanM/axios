import React, { useContext } from "react";
import Header from "../Components/Header";
import AllData from "../Components/AllData";
import Footer from "../Components/Footer";

import { useFormik } from "formik";
import { useNavigate } from "react-router";
import axios from "axios";
import { Form } from "react-bootstrap";
import { userContext } from "../Context/UserProvider";

function AllUsers() {
  let { userData, setUserData, setEdit, edit } = useContext(userContext);

  ////Edit
  async function handleEdit(id) {
    setEdit(() => !edit);

    if (!edit) {
      try {
        let res = await axios.get(
          `https://66685f46f53957909ff7c0ce.mockapi.io/users/users/${id}`
        );

        let data = res.data;
        setValues({
          id: data.id,
          name: data.name,
          username: data.username,
          email: data.email,
          phone: data.phone,
        });
        //   console.log("Inside HandleEdit", id);
      } catch (error) {
        console.log(error);
      }
    } else {
      setValues({
        id: "",
        name: "",
        username: "",
        email: "",
        phone: "",
      });
    }

    // try {
    //   let res = await axios.get(
    //     `https://66685f46f53957909ff7c0ce.mockapi.io/users/users/${id}`
    //   );

    //   let data = res.data;
    //   setValues({
    //     id: data.id,
    //     name: data.name,
    //     username: data.username,
    //     email: data.email,
    //     phone: data.phone,
    //   });
    //   //   console.log("Inside HandleEdit", id);
    // } catch (error) {
    //   console.log(error);
    // }
  }

  //   async function editSubmit(e,ID) {
  //     const formData = new FormData(e.target);
  //     const formprops = Object.fromEntries(formData);
  //     console.log(formprops);
  //   }

  /////Formik

  const { touched, errors, values, handleSubmit, handleChange, setValues } =
    useFormik({
      initialValues: {
        id: "",
        name: "",
        username: "",
        email: "",
        phone: "",
      },
      validate(values) {
        if (values.name == "") {
          return { name: "name is required" };
        }
        if (values.username == "") {
          return { username: "username is required" };
        }
        if (values.email == "") {
          return { email: "email is required" };
        }
      },
      async onSubmit(values) {
        console.log(values);

        if (!edit) {
          try {
            await axios.post(
              `https://66685f46f53957909ff7c0ce.mockapi.io/users/users`,
              values
            );
            setUserData(() => [...userData, values]);
            setValues({
              id: "",
              name: "",
              username: "",
              email: "",
              phone: "",
            });
          } catch (error) {
            console.log(error);
          }
        } else {
          let id = values.id;
          try {
            await axios.put(
              `https://66685f46f53957909ff7c0ce.mockapi.io/users/users/${id}`,
              values
            );

            setUserData(() => [...userData.filter((e) => e.id !== id), values]);

            setValues({
              id: "",
              name: "",
              username: "",
              email: "",
              phone: "",
            });

            setEdit(() => !edit);
          } catch (error) {
            console.log(error);
          }
        }
      },
    });

  return (
    <>
      <Header />
      <section style={{ padding: "50px" }}>
        <AllData handleEdit={handleEdit} />

        <section className="form">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> UserName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter UserName"
                name="username"
                value={values.username}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                placeholder="Number"
                name="phone"
                value={values.phone}
                onChange={handleChange}
              />
            </Form.Group>

            <button className="btn btn-success" type="submit">
              Submit
            </button>
          </Form>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default AllUsers;
