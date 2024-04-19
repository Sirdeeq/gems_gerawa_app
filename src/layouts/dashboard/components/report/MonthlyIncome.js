import React from "react";
import ProgressLineChart from "examples/Charts/LineCharts/ProgressLineChart";

const MonthlyIncomeChart = () => {
  //   const [monthlyIncomeData, setMonthlyIncomeData] = useState(null);

  //   useEffect(() => {
  //     const fetchMonthlyIncomeData = async () => {
  //       try {
  //         // Fetch monthly income data from the backend endpoint
  //         const response = await axios.get("your_backend_income_endpoint_url");

  //         // Extract data from the response
  //         const incomeData = response.data;

  //         // Set the income data to state
  //         setMonthlyIncomeData(incomeData);
  //       } catch (error) {
  //         console.error("Error fetching monthly income data:", error);
  //       }
  //     };

  //     fetchMonthlyIncomeData();
  //   }, []);

  //   if (!monthlyIncomeData) {
  //     // Return a loading indicator or placeholder while data is being fetched
  //     return <div>Loading...</div>;
  //   }
  // Sample monthly income data
  const monthlyIncomeData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    data: [1500, 1600, 1700, 1550, 1650, 1750, 1800, 1850, 1900, 2000, 2100, 2200],
  };

  // Calculate total income
  const totalIncome = monthlyIncomeData.data.reduce((acc, val) => acc + val, 0);

  // Calculate progress (assumed value)
  //   const progress = Math.floor((totalIncome / 3000) * 100); // Assuming the maximum income is 3000

  return (
    <div style={{ width: "100%", maxWidth: "100%" }}>
      <ProgressLineChart
        icon="date_range"
        title="Monthly Income"
        count={totalIncome}
        // progress={progress}
        height="10rem"
        chart={monthlyIncomeData}
      />
      {/* <div>
        Balance: {totalIncome} 
      </div> */}
    </div>
  );
};

export default MonthlyIncomeChart;
