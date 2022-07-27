import Form from "../Form/Form";

function Login() {
  return (
    <Form title="Рады видеть!" submit="Войти" text="Ещё не зарегистрированы?" link="Регистрация" path="/signup">
      <label className="form__item">
        <p className="form__item-text">E-mail</p>
        <input type="email" className="form__field" defaultValue="pochta@yandex.ru" required />
        <span className="form__error"></span>
      </label>

      <label className="form__item">
        <p className="form__item-text">Пароль</p>
        <input type="password" className="form__field form__field_color-error" required />
        <span className="form__error form__error-display"></span>
      </label>
    </Form>
  );
};

export default Login;