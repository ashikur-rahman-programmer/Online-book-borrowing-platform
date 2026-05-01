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

const EditProfile = () => {
  async function handleUpdate(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("userName");
    const image = formData.get("userImage");

    try {
      await authClient.updateUser({
        name: name,
        image: image,
      });
      alert("Profile Updated!");
    } catch (err) {
      console.error("Error updating profile", err);
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
            <Input placeholder="Change your name" />
            <FieldError />
          </TextField>

          <TextField isRequired name="image" type="text">
            <Label>Image URL</Label>
            <Input placeholder="Change your image URL" />
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
