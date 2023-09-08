import "./authentication.styles.scss";
import SignUpForm from "../../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {
  return (
    <div className="auth-container">
      <div className="sign-in-form-container">
        <SignInForm />
      </div>
      <div className="sign-up-form-container">
        <SignUpForm />
      </div>
    </div>
  );
};

export default Authentication;
