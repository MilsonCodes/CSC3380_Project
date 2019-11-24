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
  static getAll(req, res) {
    const specials = Special.findAll({ where: { deleted: false } });
    return specials.then(specials =>
      res.status(201).send({ message: "All Specials: ", specials })
    );
  }
}
export default Specials;
