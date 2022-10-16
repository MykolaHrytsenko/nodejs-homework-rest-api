const { Schema, model } = require("mongoose")

const { handleSaveErrors } = require("../helpers")

const contactSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Set name for contact'],
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        favorite: {
            type: Boolean,
            default: false,
        },
    }
)

contactSchema.post("save", handleSaveErrors)

const Contact = model("contact", contactSchema)

module.exports = Contact;