"use client";
import "animate.css";
import { authClient } from "@/lib/auth-client";
import {
  Input,
  Button,
  Card,
  Form,
  TextField,
  Label,
  FieldError,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const EditProfile = () => {
  const router = useRouter();

  async function handleUpdate(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const image = formData.get("image");

    try {
      await authClient.updateUser({
        name: name,
        image: image,
      });
      toast.success("Profile Updated!");
      router.push("/my-profile");
      router.refresh();
    } catch (err) {
      toast.error("Error updating profile", err);
    }
  }

  return (
    <section className="py-20 md:py-30 animate__animated animate__fadeIn">
      <Card className="border mx-auto w-full max-w-125 py-10 md:py-12 mt-5 animate__animated animate__zoomIn">
        <h1 className="text-center text-2xl font-bold animate__animated animate__fadeInDown">
          Update Profile
        </h1>

        <Form
          className="flex w-full max-w-96 mx-auto flex-col gap-4 animate__animated animate__fadeIn"
          onSubmit={handleUpdate}
        >
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input name="name" placeholder="Change your name" />
            <FieldError />
          </TextField>

          <TextField isRequired name="image" type="text">
            <Label>Image URL</Label>
            <Input name="image" placeholder="Change your image URL" />
            <FieldError />
          </TextField>

          <div className="flex gap-2 justify-center animate__animated animate__fadeInUp">
            <Button type="submit">Update</Button>
          </div>
        </Form>
      </Card>
    </section>
  );
};

export default EditProfile;
