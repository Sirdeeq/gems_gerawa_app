import React from "react";
import Grid from "@mui/material/Grid";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import IncomeExpenseChart from "./components/report/DailyIncomeExpense";
import MonthlyIncomeChart from "./components/report/MonthlyIncome";
import MonthlyExpenseChart from "./components/report/MonthlyExpenses";
import MessagesList from "./components/messages/RecentMessages";
import ReceivedReleasedComponent from "./components/supply/R&R";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <br />
      <Grid container spacing={3}>
        {/* Main chart and income/expenses */}
        <Grid item xs={12} md={8}>
          <IncomeExpenseChart />
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <MonthlyIncomeChart />
            </Grid>
            <Grid item xs={12} md={12}>
              <MonthlyExpenseChart />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4}>
          <MessagesList />
        </Grid>
        <Grid item xs={12} lg={8}>
          <ReceivedReleasedComponent />
        </Grid>
      </Grid>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
