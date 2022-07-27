import Form from "../Form/Form";

function Register() {
  return (
    <Form title="Добро пожаловать!" submit="Зарегистрироваться" text="Уже зарегистрированы?" link="Войти" path="/signin">
      <label className="form__item">
        <p className="form__item-text">Имя</p>
        <input type="text" className="form__field" defaultValue="Виталий" required />
        <span className="form__error">Что-то пошло не так...</span>
      </label>

      <label className="form__item">
        <p className="form__item-text">E-mail</p>
        <input type="email" className="form__field" defaultValue="pochta@yandex.ru" required />
        <span className="form__error">Что-то пошло не так...</span>
      </label>

      <label className="form__item">
        <p className="form__item-text">Пароль</p>
        <input type="password" className="form__field form__field_color-error" defaultValue="••••••••••••••" required />
        <span className="form__error form__error-visible">Что-то пошло не так...</span>
      </label>
    </Form>
  );
};

export default Register;