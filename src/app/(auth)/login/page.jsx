'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {

    const {
        register,               // Name(s) of input
        handleSubmit,           // Handle function
        watch,                  // Watch input values in real time
        formState: { errors }   // Show error messages
    } = useForm()               // The Hook from React Hook Form 

    // console.log(watch("email"));
    // console.log(watch("password"));

    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleLoginFunc = async(data) => {
        // console.log(data);

        const { data: res, error } = await authClient.signIn.email({
            email: data.email, // required
            password: data.password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        // console.log(res, error);
        if (error) {
            alert(error.message);
        }
        if (res) {
            alert("SignIn was Successful!");
        }
    }

    // const handleLoginFunc = (e) => {
    //     e.preventDefault();
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;
    //     console.log(email, password);
    // }
    // Then use name="email" or name ="password".

    return (
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-[#F6C992]">
            <div className="p-4 rounded-xl bg-[#F3E308]">
                <h2 className="font-bold text-3xl text-center mb-6">Login your Account</h2>
                <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email Address</legend>
                        <input type="email" className="input" placeholder="Enter your Email Address"
                            {...register("email", { required: "Email must be given!" })} />
                        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input type={isShowPassword ? "text":"password"}
                        className="input" placeholder="Enter your Password"
                            {...register("password", { required: "Password must be filled!" })} />
                        <span onClick={() => setIsShowPassword(!isShowPassword)} className="text-xl absolute right-2 top-4 cursor-pointer"
                        >{isShowPassword ? <FaEye/> : <FaEyeSlash/>}</span>
                        {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                    </fieldset>
                    <button className="btn w-full bg-green-500 border-black text-white">Login</button>
                </form>
                <p className="mt-6">Don&apos;t have an account? <Link href={"/register"} className="text-blue-600">Register Now</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;