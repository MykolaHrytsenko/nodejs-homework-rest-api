const contacts = require("../../models/contacts")

const { RequestError } = require("../../helpers")

const updateById = async (req, res) => {
    const { contactId } = req.params;
    const result = await contacts.updateContactById(contactId, req.body)
    res.status(200).json(result)
    if (!result) {
        throw RequestError(404, "Not Found")
    }
}

module.exports = updateById;