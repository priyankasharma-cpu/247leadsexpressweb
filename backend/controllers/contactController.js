import Contact from "../models/Contact.js";

/* =========================================================
   CREATE CONTACT
========================================================= */

export const createContact = async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            company,
            subject,
            message,

            // Marketing Tracking
            utm_source,
            utm_medium,
            utm_campaign,
            utm_term,
            utm_content,
            gclid,
            fbclid,
            landing_page,
            referrer,
        } = req.body;


        /* =====================================================
           BASIC VALIDATION
        ===================================================== */

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "Name, email and message are required.",
            });
        }


        /* =====================================================
           SAVE CONTACT
        ===================================================== */

        const contact = await Contact.create({
            name,
            email,
            phone,
            company,
            subject,
            message,

            utm_source,
            utm_medium,
            utm_campaign,
            utm_term,
            utm_content,
            gclid,
            fbclid,
            landing_page,
            referrer,
        });


        /* =====================================================
           RESPONSE
        ===================================================== */

        return res.status(201).json({
            success: true,
            message: "Your message has been submitted successfully.",
            data: {
                id: contact._id,
            },
        });

    } catch (error) {

        console.error("❌ Contact submission error:", error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong. Please try again later.",
        });
    }
};

/*===== GET controller ======*/
export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            count: contacts.length,
            data: contacts,
        });
    } catch (error) {
        console.error("❌ Fetch contacts error:", error);

        return res.status(500).json({
            success: false,
            message: "Unable to fetch contacts.",
        });
    }
};