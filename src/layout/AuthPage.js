import AuthForm from "../components/login/AuthForm";
import { useSelector } from "react-redux";

const AuthPage = () => {
  const loginData = useSelector((state) => state.auth);
  console.log(loginData);

  return <AuthForm />;
};

export default AuthPage;
