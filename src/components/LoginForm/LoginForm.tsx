import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Button,
  Textfield,
  Heading,
  Spinner,
} from "@digdir/design-system-react";
import { useNavigate } from "react-router-dom";

import classes from "./LoginForm.module.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Skriv inn en gyldig e-post addresse.")
    .required("E-post feltet er påkrevd."),
  password: Yup.string()
    .min(8, "Passordet må være minst 8 tegn.")
    .required("Passord feltet er påkrevd."),
});

const initialValues = {
  email: "",
  password: "",
};

type ValuesType = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const tryToLoginUser = async (values: ValuesType) => {
    setLoading(true);
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className={classes.form}>
      <Heading level={1} size="small" className={classes.heading}>
        Logg inn
      </Heading>

      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={(values) => tryToLoginUser(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              as={Textfield}
              name="email"
              label="E-post"
              error={errors.email && touched.email ? errors.email : null}
            />

            <Field
              as={Textfield}
              name="password"
              label="Passord"
              type="password"
              error={
                errors.password && touched.password ? errors.password : null
              }
            />

            <Button type="submit" fullWidth className={classes.button}>
              {loading && <Spinner title="ff" />}

              {!loading && <>Logg inn</>}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
