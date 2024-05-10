import { useForm, SubmitHandler } from "react-hook-form";
import { FC } from "react";
import { AuthService } from "../../services/auth.service";
import { IAuthData } from "../../interfaces/auth.interface";
import styles from "./auth.module.scss";
import { validatorData } from "./settingsForValidator";


const Registration:FC = () => {
    const { register, handleSubmit, formState: {errors} } = useForm<IAuthData>({
        mode: 'onChange'
    });

    const onSubmit:SubmitHandler<IAuthData> = ( data ) => {
        console.log(data)
        console.log("ДАнные отправлены")
        AuthService.sendAuthData(data, "/Register");
    }

    return (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <p className={styles.title}>Регистрация</p>

                <div className={styles.inputWrapper}>
                    <input placeholder="Почта" className={styles.input}{
                        ...register("email", validatorData.email)} 
                        type="text"/>
                    {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                </div>
                
                <div className={styles.inputWrapper}>
                    <input placeholder="Пароль" className={styles.input}{
                        ...register("password", validatorData.password)} 
                        type="password"
                    />
                    {errors.password && <p className={styles.error}>{errors.password.message}</p>}
                </div>

                <div className={styles.inputWrapper}>
                    <input placeholder="Номер телефона" className={styles.input}{
                        ...register("phone", validatorData.phone)} 
                        type="phone"/>
                    {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
                </div>
                
                <button className={styles.button} type="submit">Создать аккаунт</button>
            </form>
        </div>
    );
}
 
export default Registration;