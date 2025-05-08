import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Mail, Lock } from 'lucide-react';
import SocialLogin from '../utils/SocialLogin';

const Login = () => {
  const loginValidationSchema = Yup.object({
    email: Yup.string().email('Geçerli bir e-posta adresi girin').required('E-posta gerekli'),
    password: Yup.string().required('Şifre gerekli').min(6, 'Şifre en az 6 karakter olmalı'),
  });

  return (
    <div className="max-w-md w-full mx-auto">
      <h2 className="text-3xl font-semibold text-white text-center mb-8">Giriş Yap</h2>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginValidationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <div className="mb-6 relative">
            <Mail className="absolute left-3 top-3.5 text-gray-400" size={20} />
            <Field
              type="email"
              name="email"
              placeholder="E-posta"
              className="w-full pl-10 pr-4 py-3 bg-gray-700 text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <ErrorMessage name="email" component="div" className="text-sm text-red-500 mt-1 ml-1" />
          </div>

          <div className="mb-6 relative">
            <Lock className="absolute left-3 top-3.5 text-gray-400" size={20} />
            <Field
              type="password"
              name="password"
              placeholder="Şifre"
              className="w-full pl-10 pr-4 py-3 bg-gray-700 text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <ErrorMessage name="password" component="div" className="text-sm text-red-500 mt-1 ml-1" />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition duration-200"
          >
            Giriş Yap
          </button>
        </Form>
      </Formik>

      <div className="mt-8">
        <p className="text-center text-gray-400 mb-4">veya sosyal medya ile devam et</p>
        <div className="flex justify-center gap-4">
        <SocialLogin/>
        </div>
      </div>
    </div>
  );
};

export default Login;
