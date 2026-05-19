'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const UpdatePage = () => {

    const {
        register,               // Name(s) of input
        handleSubmit,           // Handle function
        watch,                  // Watch input values in real time
        formState: { errors }   // Show error messages
    } = useForm()               // The Hook from React Hook Form

    // console.log(watch("email"));

    const handleUpdateFunc = async (data) => {
        // console.log(data);
        const { name, photo, email, password } = data;
        // console.log(name, photo, email, password);

        const { data: res, error } = await authClient.updateUser({
            image: photo,
            name: name,
            callbackURL: "/",
        });
        // console.log(res, error);
        if (error) {
            alert(error.message);
        }
        if (res) {
            alert("Profile Updated Successfullly!");
        }
    }

    // const handleUpdateFunc = (e) => {
    //     e.preventDefault();
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;
    //     console.log(email, password);
    // }
    // Then use name="email" or name ="password".

    return (
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-[#F6C992] p-8">
            <div className="p-4 rounded-xl bg-[#F3E308]">
                <h2 className="font-bold text-3xl text-center mb-6">Update your Profile</h2>
                <form className="space-y-4" onSubmit={handleSubmit(handleUpdateFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Your New Name</legend>
                        <input type="text" className="input" placeholder="Enter your New Username"
                            {...register("name", { required: "Enter Your Username!" })} />
                        {errors.name && <p className="text-red-600">{errors.name.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">New Photo URL</legend>
                        <input type="text" className="input" placeholder="Enter your New Photo URL"
                            {...register("photo", { required: "Enter Your Photo URL!" })} />
                        {errors.photo && <p className="text-red-600">{errors.photo.message}</p>}
                    </fieldset>
                    <button className="btn w-full btn-info border-black text-white">Update Now</button>
                </form>
                <p className="mt-6">Don&apos;t want to update your profile? <Link href={"/myprofile"} className="text-red-600">Go Back</Link></p>
            </div>
        </div>
    );
};

export default UpdatePage;