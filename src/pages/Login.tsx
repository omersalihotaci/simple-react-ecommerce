import TextField from '@mui/material/TextField';
import InputAdornment from "@mui/material/InputAdornment";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import "../css/login.css"
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import type { LoginFormValues, UserType } from '../types/Types';
import { loginValidationSchema } from '../validations/loginValidation';
import LoginPageService from "../services/LoginPageService";
import {  toast } from "react-toastify";

import { useNavigate } from 'react-router-dom';
import type { FormikHelpers } from "formik";
import { useDispatch } from 'react-redux';
import { setCurrentUser, setLoading, setLog } from '../redux/slices/userSlice';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const checkUser = async (password: string, username: string)=> {
        try {
            const users = await LoginPageService.getAll();

       
            const user = users.find(
                (user: UserType) =>
                    user.password === password && user.username === username
            );
            return user || null;
            
        } catch (err) {
            console.error("Hata:", err);
            toast.error("Sunucu hatası, lütfen daha sonra tekrar deneyiniz");
        }
    };

    
    
    const submit = async (
        values: LoginFormValues,
        { resetForm }: FormikHelpers<LoginFormValues>
    ) => {
        try {
            dispatch(setLoading(true));

            const checkedUser = await checkUser(
                values.password,
                values.username
            );

            if (checkedUser) {
                dispatch(setCurrentUser(checkedUser));
                dispatch(setLog(true));
                navigate("/home");
                toast.success("Başarıyla giriş yapıldı");
            } else {
                toast.error("Şifre veya kullanıcı adı hatalı");
                resetForm();
            }
        } catch (err) {
            toast.error("Sunucu hatası, lütfen daha sonra tekrar deneyiniz");
            console.error(err);
        } finally {
            dispatch(setLoading(false));
        }
    };



     const formik = useFormik<LoginFormValues>({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: loginValidationSchema,
        onSubmit: submit
    });
  return (
    <div className="login-container">
          <form onSubmit={formik.handleSubmit} className="form">
              <div className="form-container">
                  <TextField
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="username"
                      id="username"
                      placeholder="İsminizi giriniz"
                      slotProps={{
                          input: {
                              startAdornment: (
                                  <InputAdornment position="start">
                                      <FaRegUserCircle />
                                  </InputAdornment>
                              ),
                          },
                      }}
                      variant="standard"
                  />
                  {formik.touched.username && formik.errors.username && (
                      <div style={{ color: "red" }}>
                          {formik.errors.username}
                      </div>
                  )}
                  <TextField
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="password"
                      type="password"
                      id="password"
                      placeholder="Şifrenizi giriniz"
                      slotProps={{
                          input: {
                              startAdornment: (
                                  <InputAdornment position="start">
                                      <RiLockPasswordLine />
                                  </InputAdornment>
                              ),
                          },
                      }}
                      variant="standard"
                  />
                  {formik.touched.password && formik.errors.password && (
                      <div style={{ color: "red" }}>
                          {formik.errors.password}
                      </div>
                  )}
              </div>
              <Stack>
                  <Button onClick={()=>navigate("/register")}>Kaydol</Button>
                  <Button type="submit">Giriş yap</Button>
              </Stack>
          </form>
      </div>
  );
  
}

export default Login