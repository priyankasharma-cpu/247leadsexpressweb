import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },

        phone: {
            type: String,
            trim: true,
        },

        company: {
            type: String,
            trim: true,
        },

        subject: {
            type: String,
            trim: true,
        },

        message: {
            type: String,
            required: true,
            trim: true,
        },

        // Marketing tracking
        utm_source: {
            type: String,
            default: null,
        },

        utm_medium: {
            type: String,
            default: null,
        },

        utm_campaign: {
            type: String,
            default: null,
        },

        utm_term: {
            type: String,
            default: null,
        },

        utm_content: {
            type: String,
            default: null,
        },

        gclid: {
            type: String,
            default: null,
        },

        fbclid: {
            type: String,
            default: null,
        },

        landing_page: {
            type: String,
            default: null,
        },

        referrer: {
            type: String,
            default: null,
        },

        status: {
            type: String,
            enum: ["new", "contacted", "closed"],
            default: "new",
        },
    },
    {
        timestamps: true,
    }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;