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
  static getAllActive(req, res) {
    const specials = Special.findAll({
      where: { deleted: false, isActive: true }
    });
    return specials.then(specials =>
      res.status(201).send({ message: "All Specials: ", specials })
    );
  }
  static modify(req, res) {
    const { name, description, isActive, startDate, endDate } = req.body;
    return Special.findById(req.params.specialId)
      .then(special => {
        special
          .update({
            name: name || special.name,
            description: description || special.description,
            isActive: isActive || special.isActive,
            startDate: startDate || special.startDate,
            endDate: endDate || special.endDate
          })
          .then(updatedSpecial => {
            res.status.send(200).send({
              message: "Special updated successfully",
              data: {
                name: name || updatedSpecial.name,
                description: description || updatedSpecial.description,
                isActive: isActive || updatedSpecial.isActive,
                startDate: startDate || updatedSpecial.startDate,
                endDate: endDate || updatedSpecial.endDate
              }
            });
          })
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
  static delete(req, res) {
    return Special.findById(req.params.specialId)
      .then(special => {
        if (!special) {
          return res.status(400).send({ message: "Special not found" });
        }
        return special
          .update({ deleted: true, isActive: false })
          .then(() =>
            res.status(200).send({ message: "Special successfully deleted!" })
          )
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
}
export default Specials;
