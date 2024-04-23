import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { stripe } from "@/configs/stripe";
import { auth, clerkClient } from "@clerk/nextjs";
import { format } from "date-fns";
import { Download } from "lucide-react";

export async function InvoiceHistoryCard() {
  const { userId } = await auth();

  const { publicMetadata } = await clerkClient.users.getUser(userId!);

  const { data } = await stripe.paymentIntents.list({
    customer: publicMetadata.stripeCustomerId as string,
    expand: ["data.invoice.subscription"],
  });

  return (
    <Card x-chunk="dashboard-05-chunk-3">
      <CardHeader className="px-7">
        <CardTitle>Invoice History</CardTitle>
        <CardDescription>Recent invoice history.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead className="hidden sm:table-cell">Currency</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((pi) => (
              <TableRow className="odd:bg-accent" key={pi.id}>
                <TableCell>
                  <Download
                    className="h-4 w-4 cursor-pointer"
                    // onClick={() => {
                    //   //   window.location.href = pi.invoice?.invoice_pdf || "";
                    // }}
                  />
                </TableCell>
                <TableCell className="hidden sm:table-cell">{pi.currency}</TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs capitalize" variant="secondary">
                    {pi.status}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {format(pi?.created * 1000, "MMM dd, h:mm a")}
                </TableCell>
                <TableCell className="text-right">
                  ${new Number(pi.amount / 100).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
