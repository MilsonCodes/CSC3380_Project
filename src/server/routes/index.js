import Reports from "../controllers/reports";

export default app => {
  app.get("/api/reports", Reports.getReports);

  app.post("/api/report", Reports.makeReport); // API route for reports
};
