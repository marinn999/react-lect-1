import { useEffect, useState } from "react";
import s from "./Forms.module.css";

const ControlledForm = () => {
  // Початковий стан форми
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    country: "Ukraine",
    aboutMe: "",
    gender: "male",
    agree: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Очищуємо форму до початкових значень після натиску кнопки
    setFormData({
      username: "",
      password: "",
      email: "",
      country: "Ukraine",
      aboutMe: "",
      gender: "male",
      agree: false,
    });
  };

  // Зміна username (взяли інфу з formData, «розсипали» її на елементи (...formData) і змінюємо імʼя при натисканні
  // на клавіші.«Розсипання» потрібне для того, щоб змінювати елемент у вже існуючому обʼєкті. Якщо цього не зробити,
  // то просто створиться новий обʼєкт(стираються всі дані і буде зберігатись лише одне введене значення наприклад імейла без імʼя і пароля)
  // Кожен раз, коли натискаю на клавіші, буде ініціалізуватись зміна і я побачу,що обновиться інпут і додасться символ.

  // Робимо щоб контролювати форму.

  // Тепер в Chrome у вкладці Components можна побачити, що відображені всі введені дані як хук: hooks

  // State
  // :
  // username
  // :"Lana"
  // password
  // :"lanalana"
  // email
  // :"lana@com.ua"

  // const handleChangeUserName = (e) => {
  //   setFormData({ ...formData, username: e.target.value });
  // };
  // const handleChangeEmail = (e) => {
  //   setFormData({ ...formData, email: e.target.value });
  // };
  // const handleChangePassword = (e) => {
  //   setFormData({ ...formData, password: e.target.value });
  // };

  // Ці три функції записуєм більш лаконічно, звертаючись до username, email i password через «name”

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    // Якщо імʼя ʼagree’, то міняю його на протилежне. «Agree» може мати лише два стана: true/false.
    // Тому через if прописуємо, що якщо вибрано не true, то воно автоматично перемикається на false
    if (name === "agree") {
      return setFormData({ ...formData, agree: !formData.agree });
    }
    // agree: !formData.agree це заміна довгого запису agree: formData.agree===true?false:true

    setFormData({ ...formData, [name]: value });
  };
  // А тепер виводимо все не у вкладку components, а в консоль
  console.log(formData);
  // «Плюс» контрольованої форми, що можна встановлювати обмеження. Наприклад можна заборонити вводити імʼя Петро
  useEffect(() => {
    if (formData.username === "Petro") {
      alert("Petro is not allowed");
    }
  }, [formData.username]);

  return (
    <div className={s.wrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          <span>Name</span>
          <input
            // Значення value робить форму контрольованою
            value={formData.username}
            name="username"
            // Коли відбувається подія у інпуті, тоді спрацьовує onChange
            onChange={handleChangeInput}
            className={s.input}
            type="text"
            placeholder="Enter name..."
          />
        </label>
        <label className={s.label}>
          <span>Email</span>
          <input
            value={formData.email}
            name="email"
            onChange={handleChangeInput}
            className={s.input}
            type="email"
            placeholder="Enter email..."
          />
        </label>
        <label className={s.label}>
          <span>Password</span>
          <input
            value={formData.password}
            name="password"
            onChange={handleChangeInput}
            className={s.input}
            type="password"
            placeholder="Enter password..."
          />
        </label>

        <label className={s.label}>
          <span>Country</span>
          <select
            value={formData.country}
            onChange={handleChangeInput}
            className={s.input}
            name="country"
          >
            <option value="Ukraine">Ukraine</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
        </label>

        <label>
          <input
            // Перевіряємо який зараз активний елемент y radio button (checked=)
            checked={formData.gender === "male"}
            onChange={handleChangeInput}
            type="radio"
            name="gender"
            value="male"
          />
          <span>Male</span>
          <input
            checked={formData.gender === "female"}
            onChange={handleChangeInput}
            type="radio"
            name="gender"
            value="female"
          />
          <span>Female</span>
        </label>

        <label className={s.label}>
          <span>About me</span>
          <textarea
            name="aboutMe"
            onChange={handleChangeInput}
            value={formData.aboutMe}
          ></textarea>
        </label>

        <label className={s.label}>
          <input
            checked={formData.agree}
            name="agree"
            onChange={handleChangeInput}
            type="checkbox"
          />
          <span>All rules accepted</span>
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default ControlledForm;
