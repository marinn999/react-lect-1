import { Field, Form, Formik } from "formik";
import React from "react";
import s from "./OrderForm.module.css";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

const OrderForm = () => {
  const initialValues = {
    username: "",
    email: "",
    city: "",
    age: "",
    petType: "",
    summary: "",
    gender: "Жінка",
    agree: false,
  };
  const handleSubmit = (values, options) => {
    console.log("IT WORKS");
    console.log("values", values);
    //Стандартна функція options.resetForm()
    options.resetForm();
  };

  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
      .min(5, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .min(8, "Too Short!")
      .matches(re, "this is not email")
      .required("required!"),
    age: Yup.number()
      .min(1, "Type ur age")
      .max(2, "Ur not so old")
      .required("required")
      .positive(),
    petType: Yup.string().oneOf(["Собака", "Кошеня"]).required("required"),
  });

  return (
    <div className={s.formWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        {/* Якщо звичайна форма, то можна без колбека {() => <Form></Form>}. Так
        пишемо для того, щоб зробити кнопку активною лише при прийнятті згоди «я
        прочитав правила» */}
        {({ values }) => (
          <Form className={s.form}>
            <label className={s.label}>
              <span>ПІБ: </span>
              <Field
                name="username"
                className={s.input}
                placeholder="Введіть імʼя"
              />
              <ErrorMessage name="username" component="p" className={s.error} />
            </label>
            <label className={s.label}>
              <span>Електронна пошта: </span>
              <Field
                type="email"
                name="email"
                className={s.input}
                placeholder="Введіть пошту"
              />
              <ErrorMessage name="email" component="p" className={s.error} />
            </label>
            <label className={s.label}>
              <span>Місто: </span>
              <Field
                name="city"
                className={s.input}
                placeholder="Введіть місто"
              />
            </label>
            <label className={s.label}>
              <span>Bik: </span>
              <Field
                type="number"
                name="age"
                className={s.input}
                placeholder="Введіть вік"
              />
              <ErrorMessage name="age" component="p" className={s.error} />
            </label>
            <label className={s.label}>
              <span>Вид улюбленця: </span>
              <Field
                as="select"
                name="petType"
                className={s.input}
                placeholder="Назва тварини"
              >
                <option value="Собака">Собака</option>
                <option value="Кошеня">Кошеня</option>
                <option value="Папуга">Папуга</option>
                <option value="Крокодил">Крокодил</option>
              </Field>
              <ErrorMessage name="petType" component="p" className={s.error} />
            </label>

            <label className={s.label}>
              <span>Побажання: </span>
              <Field
                as="textarea"
                name="summary"
                className={s.input}
                placeholder="Введіть побажання"
              />
            </label>

            <div>
              <label>
                <Field
                  type="radio"
                  value="Жінка"
                  name="gender"
                  className={s.input}
                />
                Жінка
              </label>
              <label>
                <Field
                  type="radio"
                  value="Чоловік"
                  name="gender"
                  className={s.input}
                />
                Чоловік
              </label>
            </div>

            <label>
              <Field type="checkbox" name="agree" className={s.input} />Я
              прочитав правила і погоджуюсь
            </label>

            <button disabled={values.agree === false} type="submit">
              Create order
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OrderForm;
