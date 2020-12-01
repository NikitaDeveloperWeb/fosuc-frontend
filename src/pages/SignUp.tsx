//libs
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
//component

//img
import logo from '../assets/img/logo.png';

//схема валидации
const RegisterFormSchema = yup.object().shape({
  email: yup.string().email('Неверная почта').required('Введите почту'),
  username: yup.string().required('Введите логин').min(5, 'Минимум пять символов'),
  fullname: yup.string().required('Введите полоное имя').min(2, 'Минимум два символа'),
  date: yup.string().required('Введите дату рождения').min(6, 'Минимум шесть символов'),
  avatarUrl: yup.string(),
  password: yup.string().min(6, 'Минимум шесть символов').required(),
  password2: yup.string().required('Введите дату рождения').min(6, 'Минимум шесть символов'),
});

export interface RegisterProps {
  email: string;
  username: string;
  fullname: string;
  date: string;
  avatarUrl: string;
  password2: string;
  password: string;
}

function SignUp() {
  //referents
  const { register, handleSubmit } = useForm<RegisterProps>({
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = async (data: RegisterProps) => {
    try {
      axios.post('https://focus-network.herokuapp.com/auth/register', data);
    } catch (error) {}
  };

  return (
    <div className="signUp_ligth">
      <div className="signUp_ligth_bg"></div>
      <div className="signUp_ligth_form">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo_img" />
          <h1>Focus</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Sign Up</h2>
          <span>
            <input
              type="text"
              name="username"
              placeholder="Username"
              ref={register}
              className="input_ligth"
            />
          </span>
          <span>
            <input
              type="email"
              name="email"
              placeholder="Mail"
              ref={register}
              className="input_ligth"
            />
          </span>
          <span>
            <input
              type="text"
              name="fullname"
              placeholder="Fullname"
              ref={register}
              className="input_ligth"
            />
          </span>
          <span>
            <input
              type="date"
              name="date"
              placeholder="Date"
              ref={register}
              className="input_ligth"
            />
          </span>
          <span>
            <input
              type="text"
              name="avatarUrl"
              placeholder="Avatar url"
              ref={register}
              className="input_ligth"
            />
          </span>
          <span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              ref={register}
              className="input_ligth"
            />
          </span>
          <span>
            <input
              name="password2"
              type="password"
              placeholder="Repeat password"
              ref={register}
              className="input_ligth"
            />
          </span>
          <span>
            <button type="submit" className="button_ligth">
              Sign up
            </button>
          </span>
          <span>
            <ul>
              <li>
                <Link to="">Login</Link>
              </li>
            </ul>
          </span>
        </form>
        <footer>
          <p>Focus - all rights reserved 2020.</p>
          <br />
        </footer>
      </div>
    </div>
  );
}

export default SignUp;
