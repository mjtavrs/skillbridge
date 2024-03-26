import { useState } from "react";

import { IoEye, IoEyeOffSharp } from "react-icons/io5";

export default function PasswordInput() {

    // Logic for the password visibility
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <>
            <label
                htmlFor="password"
                className="text-sm text-grey_15 font-medium leading-[150%] mb-2"
            >
                Password
            </label>
            <div className="flex relative">
                <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white_99 border-[1px] border-white_95 text-sm text-grey_40 p-5 rounded-lg w-full"
                    placeholder="Enter your Password"
                />
                {/* Button to change the visibility of the password */}
                <button
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-1 flex items-center justify-center px-4 py-2 focus:outline-none text-2xl text-grey_30"
                >
                    {showPassword ? <IoEyeOffSharp /> : <IoEye />}
                </button>
            </div>
        </>
    );
}