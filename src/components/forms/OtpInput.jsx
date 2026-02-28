"use client";
import { useState, useRef, useEffect } from "react";
import Button from "../Button";
import { ChevronsLeft } from "lucide-react";
import { AUTH_STEPS } from "@/hooks/useRegistration";

const OtpInput = ({
  length = 6,
  setStep,
  onSubmit,
  onResend,
  isLoading = false,
}) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputs = useRef([]);

  const handleChange = (value, index) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];
    // Take only the last character if multiple are entered (preventing double digits)
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Focus next input
    if (value && index < length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        // If current input is empty, move back and clear previous
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
        inputs.current[index - 1].focus();
      } else {
        // Clear current input
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const data = e.clipboardData.getData("text").trim();
    if (!/^\d+$/.test(data)) return;

    const pasteData = data.split("").slice(0, length);
    const newOtp = [...otp];

    pasteData.forEach((char, index) => {
      newOtp[index] = char;
      if (inputs.current[index]) {
        inputs.current[index].value = char;
      }
    });

    setOtp(newOtp);

    // Focus the last filled input or the last input overall
    const lastIndex = Math.min(pasteData.length, length - 1);
    inputs.current[lastIndex].focus();
  };

  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center gap-2 mx-auto w-fit">
        <h2 className="text-2xl font-semibold mb-6 text-center text-light">
          Verify Your Email
        </h2>

        <div className="flex gap-2 justify-center">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              ref={(el) => (inputs.current[index] = el)}
              value={data}
              onPaste={handlePaste}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onFocus={(e) => e.target.select()}
              className="w-8 md:w-12 h-8 md:h-12 text-center text-xl font-bold border-2 rounded-lg 
                      border-gray-300 focus:border-secondary focus:ring-1 
                     focus:ring-secondary outline-none transition-all"
            />
          ))}
        </div>

        <div className="flex items-center justify-between">
          <Button
            className={
              "text-dark bg-light p-0.5 px-1 rounded-sm flex items-center"
            }
            onClick={() => setStep(AUTH_STEPS.REGISTER)}
          >
            <ChevronsLeft />
            <span> back</span>
          </Button>
          <Button
            onClick={() => {
              onResend();
              setOtp(new Array(length).fill(""));
              inputs.current[0]?.focus();
            }}
            className={"text-secondary underline"}
          >
            Resend OTP
          </Button>
        </div>
      </div>

      <Button
        type="submit"
        className={"bg-secondary px-4 py-2 rounded-md text-xl w-full my-4"}
        onClick={() => onSubmit(otp)}
        disabled={isLoading}
      >
        {isLoading ? "Verifying..." : "Verify"}
      </Button>
    </>
  );
};

export default OtpInput;
