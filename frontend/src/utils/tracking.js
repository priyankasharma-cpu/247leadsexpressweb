/* =========================================================
   TRACKING PARAMETERS
========================================================= */

const TRACKING_KEYS = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "gclid",
    "fbclid",
];


/* =========================================================
   GET TRACKING PARAMETERS FROM URL
========================================================= */

export const getTrackingParams = () => {
    const params = new URLSearchParams(window.location.search);

    const trackingData = {};

    TRACKING_KEYS.forEach((key) => {
        const value = params.get(key);

        if (value) {
            trackingData[key] = value;
        }
    });

    return trackingData;
};


/* =========================================================
   SAVE TRACKING PARAMETERS
========================================================= */

export const saveTrackingParams = () => {
    const currentParams = getTrackingParams();

    if (Object.keys(currentParams).length === 0) {
        return;
    }

    sessionStorage.setItem(
        "trackingParams",
        JSON.stringify(currentParams)
    );
};


/* =========================================================
   GET STORED TRACKING PARAMETERS
========================================================= */

export const getStoredTrackingParams = () => {
    try {
        const stored = sessionStorage.getItem("trackingParams");

        return stored ? JSON.parse(stored) : {};
    } catch (error) {
        console.error("❌ Tracking data error:", error);

        return {};
    }
};