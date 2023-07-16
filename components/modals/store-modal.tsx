"use client";

import React, { useState } from "react";
import Modal from "../ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {toast} from "react-hot-toast"
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";
const formSchema = z.object({
  name: z.string().min(1),
});

const StoreModal = () => {
  const storeModal = useStoreModal();

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/stores", values);
      console.log(response.data); 
      toast.success("Store created!")
    } catch (error) {
      console.log("send request error");
      toast.error("Send request went wrong")
    }
  };

  return (
    <Modal
      title="Create store"
      description="Add a new Store to manager products and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name={"name"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="E-commerce"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button disabled={loading} onClick={storeModal.onClose}>
                  Cancel
                </Button>
                <Button disabled={loading} type="submit" variant={"outline"}>
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default StoreModal;
