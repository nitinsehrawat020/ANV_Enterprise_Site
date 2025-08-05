import { FaEye } from "react-icons/fa";
import { useState } from "react";
import { useUser } from "../../LoginAndSignup/useUser";
import {
  AccountHeading,
  TConatiner,
  THeader,
  TBody,
  TR,
  TH,
  TD,
  TWrapper,
} from "../StyleMyAccount";
import OrderDetailsModal from "./OrderDetailsModal";

const OrderHistoryContent = () => {
  const { user, isLoading } = useUser();
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Show loading state
  if (isLoading) {
    return (
      <>
        <AccountHeading>Order History</AccountHeading>
        <div style={{ textAlign: "center", padding: "40px" }}>
          Loading order history...
        </div>
      </>
    );
  }

  // Extract order history from user sites
  const orders =
    user?.userSites?.length > 0
      ? user.userSites.map((site) => {
          // Calculate total amount from payment logs
          const totalPaid =
            site.paymentLog?.reduce((sum, payment) => {
              return sum + (payment.amount || 0);
            }, 0) || 0;

          // Calculate estimated project cost from costMaking
          const estimatedCost =
            site.costMaking?.reduce((total, costGroup) => {
              const groupTotal = costGroup.reduce((groupSum, item) => {
                return groupSum + (item.price || 0) * (item.quantity || 0);
              }, 0);
              return total + groupTotal;
            }, 0) || 0;

          return {
            _id: site._id,
            siteName: site.name,
            address: site.address,
            status: site.status,
            workType: site.workType,
            totalPaid: `₹${totalPaid.toLocaleString("en-IN")}`,
            estimatedCost: `₹${estimatedCost.toLocaleString("en-IN")}`,
            updatedAt: site.updatedAt
              ? new Date(site.updatedAt).toLocaleDateString("en-IN")
              : "N/A",
            phoneNumber: site.phoneNumber,
            inventoryCount: site.inventory?.length || 0,
            paymentCount:
              site.paymentLog?.filter((p) => p.amount > 0)?.length || 0,
            // Additional data for modal
            paymentHistory: site.paymentLog?.filter((p) => p.amount > 0) || [],
            inventory: site.inventory || [],
            costMaking: site.costMaking || [],
            rawTotalPaid: totalPaid,
            rawEstimatedCost: estimatedCost,
          };
        })
      : [];

  // Handle modal functions
  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
    setIsModalOpen(false);
  };

  // Calculate summary statistics
  const totalSites = orders.length;
  const activeSites = orders.filter(
    (order) => order.status === "active"
  ).length;
  const totalAmountPaid = orders.reduce((sum, order) => {
    const amount = parseFloat(
      order.totalPaid.replace("₹", "").replace(/,/g, "")
    );
    return sum + amount;
  }, 0);

  return (
    <>
      <AccountHeading>Order History</AccountHeading>

      {/* Order Summary */}
      {orders.length > 0 && (
        <div
          style={{
            marginBottom: "20px",
            padding: "15px",
            backgroundColor: "var(--color-whitesmoke)",
            borderRadius: "8px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "15px",
          }}
        >
          <div>
            <span
              style={{
                display: "block",
                fontSize: "14px",
                color: "var(--color-dimgray)",
              }}
            >
              Total Sites
            </span>
            <span
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "var(--color-orange)",
              }}
            >
              {totalSites}
            </span>
          </div>
          <div>
            <span
              style={{
                display: "block",
                fontSize: "14px",
                color: "var(--color-dimgray)",
              }}
            >
              Active Sites
            </span>
            <span
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "var(--color-green)",
              }}
            >
              {activeSites}
            </span>
          </div>
          <div>
            <span
              style={{
                display: "block",
                fontSize: "14px",
                color: "var(--color-dimgray)",
              }}
            >
              Total Amount Paid
            </span>
            <span
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "var(--color-orange)",
              }}
            >
              ₹{totalAmountPaid.toLocaleString("en-IN")}
            </span>
          </div>
        </div>
      )}

      <TWrapper>
        <TConatiner>
          <THeader>
            <TR>
              <TH>Site Name</TH>
              <TH>Work Type</TH>
              <TH>Status</TH>
              <TH>Amount Paid</TH>
              <TH>Details</TH>
            </TR>
          </THeader>
          <TBody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <TR key={order._id}>
                  <TD>
                    <div>
                      <div style={{ fontWeight: "600" }}>{order.siteName}</div>
                      <div
                        style={{
                          fontSize: "12px",
                          color: "var(--color-dimgray)",
                          marginTop: "2px",
                        }}
                      >
                        {order.address?.substring(0, 50)}
                        {order.address?.length > 50 ? "..." : ""}
                      </div>
                    </div>
                  </TD>
                  <TD>{order.workType}</TD>
                  <TD>
                    <span
                      style={{
                        padding: "4px 8px",
                        borderRadius: "12px",
                        fontSize: "12px",
                        fontWeight: "600",
                        backgroundColor:
                          order.status === "active"
                            ? "var(--color-green-light)"
                            : "var(--color-gray-200)",
                        color:
                          order.status === "active"
                            ? "var(--color-green)"
                            : "var(--color-dimgray)",
                      }}
                    >
                      {order.status}
                    </span>
                  </TD>
                  <TD>{order.totalPaid}</TD>
                  <TD color={true}>
                    <FaEye
                      size={16}
                      title="View Details"
                      style={{
                        cursor: "pointer",
                        color: "var(--color-orange)",
                      }}
                      onClick={() => handleViewDetails(order)}
                    />
                  </TD>
                </TR>
              ))
            ) : (
              <TR>
                <TD
                  colSpan="5"
                  style={{ textAlign: "center", padding: "20px" }}
                >
                  No order history found
                </TD>
              </TR>
            )}
          </TBody>
        </TConatiner>
      </TWrapper>

      {/* Order Details Modal */}
      {isModalOpen && (
        <OrderDetailsModal order={selectedOrder} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default OrderHistoryContent;
