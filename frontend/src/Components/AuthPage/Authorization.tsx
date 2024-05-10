import { useForm, SubmitHandler } from "react-hook-form";
import { FC } from "react";
import { AuthService } from "../../services/auth.service";
import { IAuthData } from "../../interfaces/auth.interface";
import styles from "./auth.module.scss";
import { validatorData } from "./settingsForValidator";


const Authorization: FC = () => {

    const { register, handleSubmit, formState: {errors} } = useForm<IAuthData>({
        mode: 'onChange'
    });

    const onSubmit:SubmitHandler<IAuthData> = ( data ) => {
        AuthService.sendAuthData(data, "/Login")
    }

    return (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <p className={styles.title}>Авторизация</p>

                <div className={styles.inputWrapper}>
                    <input placeholder="Почта" className={styles.input}{
                        ...register("email", validatorData.email)} 
                        type="email"/>
                    {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                </div>

                <div className={styles.inputWrapper}>
                    <input placeholder="Пароль" className={styles.input}{
                        ...register("password", validatorData.password)} 
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