"use client";
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
    <section className="py-20">
      <Card className="border mx-auto w-125 py-10 mt-5">
        <h1 className="text-center text-2xl font-bold">Update Profile</h1>

        <Form
          className="flex w-96 mx-auto flex-col gap-4"
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

          <div className="flex gap-2 justify-center">
            <Button type="submit">Update</Button>
          </div>
        </Form>
      </Card>
    </section>
  );
};

export default EditProfile;
