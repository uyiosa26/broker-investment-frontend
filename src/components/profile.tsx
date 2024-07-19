import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "./ui/button";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export default function Profile() {
  return (
    <section className="z-25 bg-white absolute w-full top-0 left-0 h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div>
                <img
                  className="w-[50px] h-auto object-cover"
                  src="/img/avatar.png"
                  alt="avatar"
                />
              </div>
              <div className="capitalize">
                <p className="text-sm font-[600]">System Admin</p>
                <p className="text-sm">admin@gmail.com</p>
              </div>
            </div>
            <Button variant="destructive">close</Button>
          </div>
          <div>
            <div className="flex flex-col lg:flex-row">
              <div className="w-[200px] h-[120px] border-black mx-auto"></div>
              <div className="w-[200px] h-[120px] border-black mx-auto"></div>
            </div>
          </div>
          <div>
            <div className="overflow-x-scroll">
              <Table>
                <TableCaption>Transaction List</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="uppercase">Amount</TableHead>
                    <TableHead className="uppercase">Status</TableHead>
                    <TableHead className="uppercase">Method</TableHead>
                    <TableHead className="text-right"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((item) => (
                    <TableRow key={item.invoice}>
                      <TableCell className="font-medium">
                        {item.invoice}
                      </TableCell>
                      <TableCell>{item.paymentStatus}</TableCell>
                      <TableCell>{item.paymentMethod}</TableCell>
                      <TableCell className="text-right">
                        ${item.totalAmount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
