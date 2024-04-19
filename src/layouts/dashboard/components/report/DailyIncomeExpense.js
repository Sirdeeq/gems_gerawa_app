import React from "react";
import DefaultLineChart from "examples/Charts/LineCharts/DefaultLineChart";

const IncomeExpenseChart = () => {
  // Mock data for the past seven days
  const mockData = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [
      {
        label: "Expense",
        data: [30, 50, 40, 60, 70, 45, 55], // Mock expense data
        color: "primary", // Set the color for the expense line
      },
      {
        label: "Income",
        data: [50, 60, 70, 55, 65, 75, 80], // Mock income data
        color: "info", // Set the color for the income line
      },
    ],
  };

  //   const [chartData, setChartData] = useState(null);

  //   // Effect to fetch data from the backend endpoint
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         // Fetch data from the backend endpoint using Axios
  //         const response = await axios.get("your_backend_endpoint_url");
  //         // Extract the necessary data from the response and format it
  //         const formattedData = {
  //           labels: response.data.labels,
  //           datasets: [
  //             {
  //               label: "Expense",
  //               data: response.data.expenseData,
  //               color: "primary", // Set the color for the expense line
  //             },
  //             {
  //               label: "Income",
  //               data: response.data.incomeData,
  //               color: "info", // Set the color for the income line
  //             },
  //           ],
  //         };
  //         // Set the fetched data to the state
  //         setChartData(formattedData);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     };

  //     fetchData(); // Call the fetchData function
  //   }, []);

  return (
    <div style={{ width: "100%", maxWidth: "100%" }}>
      <DefaultLineChart
        icon={{ color: "info", component: "leaderboard" }}
        title="Income and Expense Overview"
        description="Daily insights"
        chart={mockData}
      />

      {/* {chartData && (
        <DefaultLineChart
          icon={{ color: "info", component: "leaderboard" }}
          title="Income and Expense Overview"
          description="Daily insights"
          chart={chartData}
        />
      )} */}
    </div>
  );
};

export default IncomeExpenseChart;
