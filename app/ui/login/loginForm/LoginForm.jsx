"use client";

import { authenticate } from "@/app/lib/actions";
import styles from "./LoginForm.module.css";
// import { useFormState } from "react-dom";

const LoginForm = () => {
    //METHOD 1
    // const [state, formAction] = useFormState(authenticate, undefined);

    //METHOD 2
    // const [err, setErr ] = useState();
    
    // const handleLogin = async (formData) => {
    //     const data = await authenticate(formData);
    //     data.error && setErr(data.error);
    // }

  return (
    <div className={styles.container}>
      <form action={authenticate} className={styles.form}>
        <h1>Login</h1>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        {/* {state?.error && <span>{state.error}</span>} */}
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
