import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import {
  StylePieChart,
  ChartContainer,
  ChartWrapper,
  CenterText,
  DataPanel,
  DataCard,
  DataInfo,
  DataIcon,
  DataDetails,
  Percentage,
} from "./styleDashboard";
import Heading from "../../ui/Heading";

function InfoChart({ dashboardStats }) {
  // Prepare data for the pie chart
  const chartData = [
    {
      name: "Total Revenue",
      value: dashboardStats?.totalRevenue || 0,
      color: "#4ade80",
      icon: "💰",
      bgColor: "#16a34a",
    },
    {
      name: "Worker Expenses",
      value: dashboardStats?.totalWorkerExpenses || 0,
      color: "#f87171",
      icon: "👷",
      bgColor: "#dc2626",
    },
    {
      name: "Vendor Expenses",
      value: dashboardStats?.totalVendourExpenses || 0,
      color: "#60a5fa",
      icon: "🏪",
      bgColor: "#2563eb",
    },
  ];

  // Filter out zero values
  const filteredData = chartData.filter((item) => item.value > 0);

  // Calculate total and percentages
  const totalAmount = filteredData.reduce((sum, item) => sum + item.value, 0);

  const dataWithPercentages = filteredData.map((item) => ({
    ...item,
    percentage:
      totalAmount > 0 ? ((item.value / totalAmount) * 100).toFixed(1) : 0,
  }));

  // Custom tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      return (
        <div
          style={{
            background: "var(--color-background-900, #1a1d29)",
            color: "var(--color-white, #fff)",
            padding: "12px 16px",
            borderRadius: "8px",
            border: "1px solid var(--color-background-600, #3a3d4a)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            fontSize: "14px",
          }}
        >
          <p style={{ margin: "0 0 4px 0", fontWeight: "bold" }}>{data.name}</p>
          <p
            style={{
              margin: "0",
              color: "var(--color-text-secondary, #8b9dc3)",
            }}
          >
            ₹{data.value.toLocaleString()}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <StylePieChart>
      <Heading
        as="h3"
        style={{
          color: "var(--color-white, #fff)",
          marginBottom: "1.5rem",
        }}
      >
        Financial Overview
      </Heading>

      <ChartContainer>
        {/* Left side - Pie Chart */}
        <ChartWrapper>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dataWithPercentages}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
                animationBegin={0}
                animationDuration={1000}
              >
                {dataWithPercentages.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    stroke={entry.color}
                    strokeWidth={2}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>

          <CenterText>
            <div className="title">Total Amount</div>
            <div className="amount">₹{totalAmount.toLocaleString()}</div>
          </CenterText>
        </ChartWrapper>

        {/* Right side - Data Cards */}
        <DataPanel>
          {dataWithPercentages.map((item, index) => (
            <DataCard key={index}>
              <DataInfo>
                <DataIcon bgColor={item.bgColor}>{item.icon}</DataIcon>
                <DataDetails>
                  <div className="label">{item.name}</div>
                  <div className="value">₹{item.value.toLocaleString()}</div>
                </DataDetails>
              </DataInfo>
              <Percentage>{item.percentage}%</Percentage>
            </DataCard>
          ))}
        </DataPanel>
      </ChartContainer>
    </StylePieChart>
  );
}

export default InfoChart;
