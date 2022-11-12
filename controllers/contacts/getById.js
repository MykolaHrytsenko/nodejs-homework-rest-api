const { Contact } = require("../../models/contact");
const { RequestError } = require("../../helpers");

const getById = async (req, res) => {
    const { contactId } = req.params;
    // const result = await Contact.findOne({ _id: contactId }); "приклад для пошуку не тільки по id"
    const result = await Contact.findById(contactId)
    if (!result) {
        throw RequestError(404, "Not Found")
    }
    res.json(result)
}

module.exports = getById;