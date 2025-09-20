import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
    username: Yup.string()
        .min(3, "en az 3 karakter olmalı")
        .max(30, "En fazla 30 karakter olabilir")
        .matches(/^[a-zA-Z0-9_]+$/, "Sadece harf, rakam ve _ kullanabilirsiniz")

        .required("Kullanıcı adı zorunlu"),
   password: Yup.string()
  .min(6, "En az 6 karakter olmalı")
  .max(50, "En fazla 50 karakter olabilir")
  .matches(/[0-9]/, "En az bir rakam içermeli")
  .matches(/[A-Z]/, "En az bir büyük harf içermeli")
  .matches(/[a-z]/, "En az bir küçük harf içermeli")
  .matches(/[@$!%*?&+-]/, "En az bir özel karakter içermeli")
  .required("Password zorunlu")

});