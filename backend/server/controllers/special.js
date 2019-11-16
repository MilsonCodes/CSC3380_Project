import model from "../models";

const { Special } = model;

class Specials {
  static create(req, res) {
    const { name, description, isActive, startDate, endDate } = req.body;
    const { userId } = req.params;
    return Special.create({
      name,
      description,
      isActive,
      startDate,
      endDate,
      userId
    }).then(special =>
      res.status(201).send({
        message: "Your special " + name + " has been created!",
        special
      })
    );
  }
}
export default Specials;
