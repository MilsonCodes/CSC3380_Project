import model from "../models";

const { Special } = model;

class Specials {
  static create(req, res) {
    const { name, description, isActive, startDate, endDate } = req.body; // Get information from the body of the request
    const { userId } = req.params; // Get the user id from the request parameters
    return Special.create({
      // Create the special object
      name,
      description,
      isActive,
      startDate,
      endDate,
      userId
    }).then(special =>
      res.status(201).send({
        // Send a response message if successful
        message: "Your special " + name + " has been created!",
        special
      })
    );
  }

  static getAll(req, res) {
    const specials = Special.findAll({ where: { deleted: false } }); // Query all specials that are not deleted
    return specials.then(
      specials => res.status(201).send({ message: "All Specials: ", specials }) // Send a response message showing the specials
    );
  }

  static getAllActive(req, res) {
    const specials = Special.findAll({
      // Query all specials that are active and not deleted
      where: { deleted: false, isActive: true }
    });
    return specials.then(
      specials => res.status(201).send({ message: "All Specials: ", specials }) // Send a response message showing the specials
    );
  }

  static modify(req, res) {
    const { name, description, isActive, startDate, endDate } = req.body; // Get the information from the body of the request
    return Special.findById(req.params.specialId) // Find the special attempting to be changed
      .then(special => {
        // Update special with new values or keep old values
        special
          .update({
            name: name || special.name,
            description: description || special.description,
            isActive: isActive || special.isActive,
            startDate: startDate || special.startDate,
            endDate: endDate || special.endDate
          })
          .then(updatedSpecial => {
            // Send a response message containing the new special
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
          .catch(error => res.status(400).send(error)); // Handle error if fields are incorrect
      })
      .catch(error => res.status(400).send(error)); // Handle error if no special is found
  }

  static delete(req, res) {
    return Special.findById(req.params.specialId) // Find requested special
      .then(special => {
        if (!special) {
          // Handle special not found
          return res.status(400).send({ message: "Special not found" });
        }
        return special // Return the special that is being deleted
          .update({ deleted: true, isActive: false }) // Update the special to be marked as deleted
          .then(() =>
            res.status(200).send({ message: "Special successfully deleted!" })
          )
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
}
export default Specials;
