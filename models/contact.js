const { Schema, model } = require("mongoose")
const Joi = require("joi")

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
    }, { versionKey: false, timestamps: true }
)

const addSchema = Joi.object({
    name: Joi.string().required().messages({
        'string.base': `"name" should be a type of 'string'`,
        'any.required': `"name" is a required field`
    }),
    email: Joi.string().required().messages({
        'string.base': `"email" should be a type of 'string'`,
        'any.required': `"email" is a required field`
    }),
    phone: Joi.string().required().messages({
        'string.base': `"phone" should be a type of 'string'`,
        'any.required': `"phone" is a required field`
    }),
    favorite: Joi.boolean(),
})

const updateFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required(),
})

const schemas = {
    addSchema,
    updateFavoriteSchema
}

contactSchema.post("save", handleSaveErrors)

const Contact = model("contact", contactSchema)

module.exports = {
    Contact,
    schemas,
};