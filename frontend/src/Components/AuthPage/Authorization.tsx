import { useForm, SubmitHandler } from "react-hook-form";
import { FC } from "react";
import { AuthService } from "../../services/auth.service";
import { IAuthData } from "../../interfaces/auth.interface";
import styles from "./auth.module.scss";


const Authorization: FC = () => {

    const { register, handleSubmit, formState: {errors} } = useForm<IAuthData>({
        mode: 'onChange'
    });

    const onSubmit:SubmitHandler<IAuthData> = ( data ) => {
        AuthService.sendData(data, "http://localhost:5001/auth")
    }

    return (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <p className={styles.title}>Авторизация</p>

                <div className={styles.inputWrapper}>
                    <input placeholder="Почта" className={styles.input}{
                        ...register("login", {
                            required: "Почта обязательна для заполнения",
                            // pattern: {
                            //     value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                            //     message: "Введите корректный Email"
                            // }
                        })} 
                        type="email"/>
                    {errors.login && <p className={styles.error}>{errors.login.message}</p>}
                </div>

                
                <div className={styles.inputWrapper}>
                    <input placeholder="Пароль" className={styles.input}{
                        ...register("password", {
                            required: "Пароль обязателен для заполнения",
                            // pattern: {
                            //     value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                            //     message: "Пароль должен быть > 8 символов"
                            // },
                        })} 
                        type="password"
                    />
                    {errors.password && <p className={styles.error}>{errors.password.message}</p>}
                </div>

                <button className={styles.button}>Авторизироваться</button>
            </form>
        </div>
    );
}
 
export default Authorization;