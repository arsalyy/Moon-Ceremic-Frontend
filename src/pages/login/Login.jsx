import React from "react";
import loginImage from "../../assets/login.png";
import { FaArrowRight } from "react-icons/fa6";
import Button from "../../components/Button";
import { InputText } from "../../components";
import LoginSchema from "../../schemas/LoginSchema";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import network from "../../config/network";
import URL from "../../config/url";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../../redux/slices/AuthSlice";
import { useToast } from "../../hooks";

const LoginPage = () => {
  //Hooks
  const { showToast } = useToast();
  const dispath = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: LoginSchema,
    onSubmit: (val, action) => {
      handleLogin(val);
      // action.resetForm();
    },
  });

  const handleLogin = async (data) => {
    const response = await network.post(URL.Login, data);
    if (!response.ok) return showToast(response.data.message, "error");
    showToast("User logged In Successfully", "success");
    console.log({ user: response.data.data, token: response.data.token });
    dispath(
      LoginUser({ user: response.data.data, token: response.data.token })
    );
    navigate("/");
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-40 py-8">
        <div>
          <img src={loginImage} className="rounded" alt="" />
        </div>
        <div className="flex justify-center items-center gap-3  flex-col">
          <h3 className="font-bold text-4xl tracking-widest ">Login</h3>
          <InputText
            placeholder={"Enter Email Address"}
            label={"Email Address"}
            className={" lg:!w-96"}
            name={"email"}
            value={values.email}
            onChange={handleChange}
            error={errors.email}
          />{" "}
          <InputText
            placeholder={"Enter Password"}
            className={"lg:!w-96"}
            type={"password"}
            label={"Password"}
            name={"password"}
            value={values.password}
            onChange={handleChange}
            error={errors.password}
          />
          <Button
            onClick={handleSubmit}
            className={
              "flex gap-1 justify-center   bg-primary-100 text-white  lg:!px-[155px] text-center"
            }
          >
            login
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
