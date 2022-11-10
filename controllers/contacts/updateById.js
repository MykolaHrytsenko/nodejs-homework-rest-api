const { Contact } = require("../../models/contact");
const { RequestError } = require("../../helpers");

const updateById = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, { new: true })
    res.status(200).json(result)
    if (!result) {
        throw RequestError(404, "Not Found")
    }
}

module.exports = updateById;