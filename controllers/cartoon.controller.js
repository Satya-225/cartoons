async function getAllCartoons(req, res) {
    const cartoons = await Cartoon.find();
    res.status(200).send(cartoons);
  }
  
  async function getCartoonById(req, res) {
    try {
      const cartoon = await Cartoon.findById(req.params.id);
      res.status(200).send(cartoon);
    } catch (ex) {
      res.status(404).send({
        message: `Cartoon with id does ${id}not exist`,
      });
    }
  } ?
  async function createCartoon(req, res) {
    try {
      const cartoon = req.body;
      const createdCartoon = await Cartoon.create(cartoon);
      res.status(201).send(createdCartoon);
    } catch (ex) {
      res.status(500).send({ message: "Error Occured while creating" });
    }
  }
  async function updateCartoon(req, res) {
    try {
      const id = req.params.id;
      const updatedCartoon = await Cartoon.findByIdAndUpdate(id, req.body);
      res.status(200).send(updatedCartoon);
    } catch (ex) {
      res.status(404).send({
        message: `Cartoon with id does ${id}not exist`,
      });
    }
  } 
  async function deleteCartoon(req, res) {
    try {
      await Cartoon.findByIdAndDelete(req.params.id);
      res.status(200).send({ message: "Succesfully Deleted" });
    } catch (ex) {
      res.status(404).send({
        message: `Cartoon with id does ${id}not exist`,
      });
    }
  }