"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LoginPage = () => {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
      remember: true,
      callbackUrl: "/",
    });

    if (error) {
      toast.error(error.message);
    }
    if (data) {
      toast.success("Login successful! ");
      router.push("/");
    }
  };
  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <Card className="bg-[#e9dfdb] border mx-auto w-125 py-10 mt-12">
      <h1 className="text-center text-2xl font-bold">Login</h1>

      <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <button className="block mx-auto mt-4 px-6 py-2 border border-red-400 text-red-400 rounded hover:bg-red-400 hover:text-white transition cursor-pointer">
          Login
        </button>
      </Form>
      <p className="text-center font-semibold text-gray-700">Or </p>
      <Button onClick={handleGoogleLogin} className="w-full" variant="tertiary">
        <Icon icon="devicon:google" />
        Sign in with Google
      </Button>
      <div className="mt-6 text-center text-sm">
        <p className="text-[#706F6F] font-semibold">
          Don't have an account?{" "}
          <Link href="/register" className="text-[#F34949] hover:underline">
            Register
          </Link>
        </p>
      </div>
    </Card>
  );
};

export default LoginPage;
