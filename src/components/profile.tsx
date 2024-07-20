import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { MdOutlineModeEdit } from "react-icons/md";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { IoMdWallet } from "react-icons/io";

import { Button } from "./ui/button";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
    status: "complete",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
    status: "complete",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
    status: "complete",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
    status: "pending",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
    status: "complete",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
    status: "pending",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
    status: "complete",
  },
];

export default function Profile() {
  return (
    <section className="z-25 bg-white absolute w-full top-0 left-0 h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col py-[.8rem]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div>
                <img
                  className="w-[60px] h-auto object-cover"
                  src="/img/avatar.png"
                  alt="avatar"
                />
              </div>
              <div className="capitalize">
                <p className="text-md font-bold text-[#3a3d45]">System Admin</p>
                <p className="text-sm font-light">admin@gmail.com</p>
              </div>
            </div>
            <Button variant="destructive">close</Button>
          </div>
          <div>
            <div className="flex flex-col my-[20px] py-[1rem] gap-4 lg:flex-row">
              <Popover>
                <div className="w-[90%] bg-[#3a3d45] text-[#fafafa] p-[1rem] border lg:w-[45%] lg:h-[120px] mx-auto">
                  <div className="flex items-center justify-center gap-1 mx-auto w-[80%]">
                    <IoMdWallet className="text-[1.5rem] pt-[5px]" />
                    <p className="font-bold text-[2.5rem]">
                      850.20{" "}
                      <sub className="uppercase font-medium text-sm">usd</sub>
                    </p>
                    <PopoverTrigger>
                      <MdOutlineModeEdit className="pt-[5px] ml-[2rem] text-[1.5rem]" />
                    </PopoverTrigger>
                  </div>
                  <p className="capitalize text-sm mt-[10px] text-center mx-auto font-[500]">
                    wallet balance
                  </p>
                </div>
                <PopoverContent>
                  <div className="p-[1rem]">
                    <label className="capitalize" htmlFor="wallet">
                      Wallet balance
                    </label>
                    <input
                      id="wallet"
                      className="w-full text-[#3a3d45] border-[#3a3d45] border-[1px] mt-[10px] p-[10px] text-md"
                      type="text"
                    />
                    <button className="py-[10px] w-full my-[10px] bg-green-700 text-white rounded-md font-semibold text-md">
                      Update
                    </button>
                  </div>
                </PopoverContent>
              </Popover>
              <Popover>
                <div className="w-[90%] bg-[#3a3d45] text-[#fafafa] p-[1rem] border-[1px] lg:w-[45%] lg:h-[120px] mx-auto">
                  <div className="flex items-center justify-center gap-1 mx-auto w-[80%]">
                    <IoMdWallet className="text-[1.5rem] pt-[5px]" />
                    <p className="font-bold text-[2.5rem]">
                      850.20{" "}
                      <sub className="uppercase font-medium text-sm">usd</sub>
                    </p>
                    <PopoverTrigger>
                      <MdOutlineModeEdit className="pt-[5px] ml-[2rem] text-[1.5rem]" />
                    </PopoverTrigger>
                  </div>
                  <p className="capitalize text-sm mt-[10px] text-center font-[500]">
                    investment balance
                  </p>
                </div>
                <PopoverContent>
                  <div className="p-[1rem]">
                    <label className="capitalize" htmlFor="wallet">
                      investment balance
                    </label>
                    <input
                      id="wallet"
                      className="w-full text-[#3a3d45] border-[#3a3d45]  border-[1px] mt-[10px] p-[10px] text-md"
                      type="text"
                    />
                    <button className="py-[10px] w-full my-[10px] bg-green-700 text-white rounded-md font-semibold text-md">
                      Update
                    </button>
                  </div>
                </PopoverContent>
              </Popover>
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
                    <TableHead className="text-right"> </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((item) => (
                    <TableRow key={item.invoice}>
                      <TableCell className="font-medium">
                        ${item.invoice}
                      </TableCell>
                      <TableCell>
                        <p
                          className={`p-[2px] text-white text-center ${
                            item.status === "complete"
                              ? "bg-green-500"
                              : "bg-red-500"
                          }`}
                        >
                          {item.status}
                        </p>
                      </TableCell>
                      <TableCell>{item.paymentMethod}</TableCell>
                      <TableCell>
                        <div className="w-full flex items-center justify-center">
                          <button className="text-md py-[8px] w-fit mx-auto rounded-md bg-green-700 text-[#fafafa] px-[26px] font-semibold">
                            Approve
                          </button>
                        </div>
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