const knex = require('knex')(require('../knexfile'));

const getServiceById = async (req, res) => {
  const serviceId = req.params.id;

  try {
    const service = await knex('services').where('id', serviceId).first();
    if (!service) {
      return res.status(404).json({ message: `Service with ID ${serviceId} not found.` });
    }
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ error: `Error getting service: ${error}` });
  }
};

const getAllServices = async (req, res) => {
  try {
    const services = await knex('services');
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: `Error getting services: ${error}` });
  }
};

const createService = async (req, res) => {
  const { name, description } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  try {
    const [serviceId] = await knex('services')
      .insert({ 
          name,
          description
        });
    const newservice = await knex('services').where('id', serviceId).first();
    res.status(201).json(newservice);
  } catch (error) {
    res.status(500).json({ error: `Error creating service: ${error}` });
  }
};

const updateService = async (req, res) => {
  const serviceId = req.params.id;
  const { name, description } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  
  try {
    const updatedRows = await knex('services')
      .where('id', serviceId)
      .update({ name, description });

    if (updatedRows === 0) {
      return res.status(404).json({ message: `Service with ID ${serviceId} not found.` });
    }
    const updatedservice = await knex('services').where('id', serviceId).first();
    res.status(200).json(updatedservice);
  } catch (error) {
    res.status(500).json({ error: `Error updating service: ${error}` });
  }
};

const deleteService = async (req, res) => {
  const serviceId = req.params.id;

  try {
    const deletedRows = await knex('services').where('id', serviceId).del();
    if (deletedRows === 0) {
      return res.status(404).json({ message: `Service with ID ${serviceId} not found.` });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: `Error deleting service: ${error}` });
  }
};

module.exports = {
  getServiceById,
  getAllServices,
  createService,
  updateService,
  deleteService,
};
