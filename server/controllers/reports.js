const model = require("../models");
const { reports } = model;
class Reports {
  static makeReport(req, res) {
    const { type, title, description } = req.body;
    return reports.create({ type, title, description }).then(reportData =>
      res.status(201).send({
        success: true,
        message: "Report successfully created",
        reportData
      })
    );
  }
  static getReports(req, res) {
    const allReports = reports
      .findAll({ where: { resolved: false } })
      .then(reports => {
        res.status(201).send({ success: true, reports });
      });
    return allReports;
  }
}
module.exports = Reports;
