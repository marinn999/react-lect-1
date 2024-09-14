import { Field, Form, Formik } from "formik";
import React from "react";
import s from "./OrderForm.module.css";

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
  return (
    <div className={s.formWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
            </label>
            <label className={s.label}>
              <span>Електронна пошта: </span>
              <Field
                type="email"
                name="email"
                className={s.input}
                placeholder="Введіть пошту"
              />
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
