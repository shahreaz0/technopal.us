"use client";

import { useDataTable } from "@/components/core/data-table/use-data-table";

import Stripe from "stripe";

import { columns } from "./columns";
import { UserTableToolbar } from "./payment-table-toolbar";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent, useState } from "react";
import { useLocalStorage } from "@/hooks/use-local-storage";

type Props = {
  data: Stripe.PaymentIntent[];
};

const dataS = [];

export function PaymentTable(props: Props) {
  const { render, table } = useDataTable({
    data: props.data,
    columns: columns,
  });

  const [open, setOpen] = useLocalStorage("modal", true);

  function onFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const username = formData.get("username");
    const password = formData.get("password");

    if (username === "technopal" && password === "admin1122") {
      setOpen(false);
    }
  }

  return (
    <section className="space-y-4 m-8">
      <UserTableToolbar table={table} />
      {render}

      <Dialog open={open}>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={onFormSubmit}>
            <DialogHeader>
              <DialogTitle>Login</DialogTitle>
              <DialogDescription>To access this page please login</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Username
                </Label>
                <Input id="name" name="username" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Password
                </Label>
                <Input
                  id="username"
                  name="password"
                  className="col-span-3"
                  type="password"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Login</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
