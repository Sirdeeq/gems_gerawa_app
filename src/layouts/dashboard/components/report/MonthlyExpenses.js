import React from "react";
import ProgressLineChart from "examples/Charts/LineCharts/ProgressLineChart";

const MonthlyExpenseChart = () => {
  //   const [monthlyExpenseData, setMonthlyExpenseData] = useState(null);

  //   useEffect(() => {    console.log("monthlyExpenseData", monthlyExpenseData);
  //     const fetchMonthlyExpenseData = async () => {
  //       try {
  //         // Fetch monthly expense data from the backend endpoint
  //         const response = await axios.get("your_backend_expense_endpoint_url");

  //         // Extract data from the response
  //         const expenseData = response.data;

  //         // Set the expense data to state
  //         setMonthlyExpenseData(expenseData);
  //       } catch (error) {
  //         console.error("Error fetching monthly expense data:", error);
  //       }
  //     };

  //     fetchMonthlyExpenseData();
  //   }, []);

  //   if (!monthlyExpenseData) {
  //     // Return a loading indicator or placeholder while data is being fetched
  //     return <div>Loading...</div>;
  //   }

  // Sample monthly expense data
  const monthlyExpenseData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    data: [1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100],
  };

  // Calculate total expense
  const totalExpense = monthlyExpenseData.data.reduce((acc, val) => acc + val, 0);

  // Calculate progress (assumed value)
  //   const progress = Math.floor((totalExpense / 3000) * 100); // Assuming the maximum expense is 3000

  return (
    <div style={{ width: "100%", maxWidth: "100%" }}>
      <ProgressLineChart
        icon="date_range"
        title="Monthly Expenses"
        count={totalExpense}
        // progress={progress}
        height="10rem"
        chart={monthlyExpenseData}
      />
      {/* <div>
        Balance: {totalExpense} 
      </div> */}
    </div>
  );
};

export default MonthlyExpenseChart;
