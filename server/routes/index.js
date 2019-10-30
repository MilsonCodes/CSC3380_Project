const Reports = require("../controllers/reports");

module.exports = app => {
  app.get("/api/reports", Reports.getReports);

  app.post("/api/report", Reports.makeReport); // API route for reports
};
