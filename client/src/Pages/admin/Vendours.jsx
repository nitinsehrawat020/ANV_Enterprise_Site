import VendoursList from "../../adminComponent/vendours/VendoursList";
import { Content } from "./Style";

const vendoursData = [
  {
    id: 1,
    name: "Tilak Nagar",
    phoneNumber: "+91 8826231971",
    payment: {
      totalBalance: "60,000",
    },
    transaction: [
      {
        id: 1,
        date: "2023-10-01",
        amount: "9600",
        status: "not paid",
        items: [
          {
            id: 1,
            name: "pop Bags",
            price: "230",
            quantity: 40,
            site: "mumpy",
          },
          {
            id: 2,
            name: "scrrew",
            price: "200",
            quantity: 2,
            site: "mumpy",
          },
        ],
      },
      {
        id: 2,
        date: "2023-10-02",
        amount: "9200",
        status: "paid",
        items: [
          {
            id: 2,
            name: "pop Bags",
            price: "230",
            quantity: 40,
            site: "mumpy",
          },
          {
            id: 3,
            name: "fastener",
            price: "180",
            quantity: 5,
            site: "mumpy",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "yogi",
    phoneNumber: "+91 8826231971",
    payment: {
      totalBalance: "60,000",
    },
    tranaction: [
      {
        id: 1,
        date: "2023-10-01",
        amount: "10,000",
        status: "not paid",
        items: [
          {
            id: 1,
            name: "pop Bags",
            price: "230",
            quantity: 40,
            site: "mumpy",
          },
          {
            id: 2,
            name: "scrrew",
            price: "200",
            quantity: 2,
            site: "mumpy",
          },
        ],
      },
      {
        id: 2,
        date: "2023-10-02",
        amount: "20,000",
        status: "paid",
        items: [
          {
            id: 2,
            name: "pop Bags",
            price: "230",
            quantity: 40,
            site: "mumpy",
          },
        ],
      },
    ],
  },
];

function Vendours({ sites }) {
  return (
    <Content>
      <VendoursList vendoursData={vendoursData} />
    </Content>
  );
}

export default Vendours;
