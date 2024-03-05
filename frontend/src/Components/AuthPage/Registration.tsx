import { useForm, SubmitHandler } from "react-hook-form";
import { FC } from "react";
import { AuthService } from "../../services/auth.service";
import { IAuthData } from "../../interfaces/auth.interface";
import styles from "./auth.module.scss";

// // ^((\+7|7|8)+([0-9]){10})$
const Registration:FC = () => {
    const { register, handleSubmit, formState: {errors} } = useForm<IAuthData>({
        mode: 'onChange'
    });

    const onSubmit:SubmitHandler<IAuthData> = ( data ) => {
        console.log(data)
        console.log("ДАнные отправлены")
        AuthService.sendData(data, "/Register");
    }

    return (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <p className={styles.title}>Регистрация</p>

                <div className={styles.inputWrapper}>
                    <input placeholder="Почта" className={styles.input}{
                        ...register("login", {
                            required: "Почта обязательна для заполнения",
                            // pattern: {
                            //     value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                            //     message: "Введите корректный Email"
                            // }
                        })} 
                        type="text"/>
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
                            min: 4,
                            max: 20
                        })} 
                        type="password"
                    />
                    {errors.password && <p className={styles.error}>{errors.password.message}</p>}
                </div>

                <div className={styles.inputWrapper}>
                    <input placeholder="Номер телефона" className={styles.input}{
                        ...register("phone", {
                            required: "Телефон обязателен для заполнения",
                            // pattern: {
                            //     // value: /^((8|\+7)[\- ]?)?(?\d{3}?[\- ]?)?[\d\- ]{7,10}$/i,
                            //     message: "Введите корректный номер телефона"
                            // }
                        })} 
                        type="phone"/>
                    {errors.phone && <p className={styles.error}>{errors.phone?.message}</p>}
                </div>
                
                <button className={styles.button} type="submit">Создать аккаунт</button>
            </form>
        </div>
    );
}
 
export default Registration;