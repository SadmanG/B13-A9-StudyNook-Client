'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {

    const {
        register,               // Name(s) of input
        handleSubmit,           // Handle function
        watch,                  // Watch input values in real time
        formState: { errors }   // Show error messages
    } = useForm()               // The Hook from React Hook Form

    // console.log(watch("email"));
    // console.log(watch("password"));

    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleRegisterFunc = async (data) => {
        // console.log(data);
        const { name, photo, email, password } = data;
        // console.log(name, photo, email, password);

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        });
        // console.log(res, error);
        if (error) {
            alert(error.message);
        }
        if (res) {
            alert("SignUp was Successful!");
        }
    }

    // const handleRegisterFunc = (e) => {
    //     e.preventDefault();
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;
    //     console.log(email, password);
    // }
    // Then use name="email" or name ="password".

    return (
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-[#F6C992] p-8">
            <div className="p-4 rounded-xl bg-[#F3E308]">
                <h2 className="font-bold text-3xl text-center mb-6">Register your Account</h2>
                <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Your Name</legend>
                        <input type="text" className="input" placeholder="Enter your Username"
                            {...register("name", { required: "Enter Your Username!" })} />
                        {errors.name && <p className="text-red-600">{errors.name.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo URL</legend>
                        <input type="text" className="input" placeholder="Enter your Photo URL"
                            {...register("photo", { required: "Enter Your Photo URL!" })} />
                        {errors.photo && <p className="text-red-600">{errors.photo.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email Address</legend>
                        <input type="email" className="input" placeholder="Enter your Email Address"
                            {...register("email", { required: "Enter Your Email!" })} />
                        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend">Password</legend>
                        <input type={isShowPassword ? "text":"password"} className="input" placeholder="Enter your Password"
                            {...register("password", { required: "Give Your Password!" })} />
                        <span onClick={() => setIsShowPassword(!isShowPassword)} className="text-xl absolute right-10 top-4 cursor-pointer"
                        >{isShowPassword ? <FaEye /> : <FaEyeSlash />}</span>
                        {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                    </fieldset>
                    <button className="btn w-full bg-blue-500 border-black text-white">Register</button>
                </form>
                <p className="mt-6">Already have an account? <Link href={"/login"} className="text-green-600">Login Now</Link></p>
            </div>
        </div>
    );
};

export default RegisterPage;