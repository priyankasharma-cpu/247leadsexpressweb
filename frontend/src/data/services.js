import {
    Target,
    Code2,
    MessageSquare,
    Mail,
    TrendingUp,
} from "lucide-react";

export const services = [
    {
        id: "lead-generation",
        icon: Target,
        title: "Lead Generation",
        description:
            "Attract and convert high-quality prospects with targeted lead generation strategies built for measurable growth.",
        features: [
            "Qualified leads",
            "Conversion-focused campaigns",
            "Performance tracking",
        ],
        path: "/services/lead-generation",
    },

    {
        id: "website-development",
        icon: Code2,
        title: "Website Development",
        description:
            "Build fast, modern, responsive websites designed to create strong digital experiences and generate more business.",
        features: [
            "Responsive websites",
            "Modern UI & UX",
            "Performance optimized",
        ],
        path: "/services/website-development",
    },

    {
        id: "sms-marketing",
        icon: MessageSquare,
        title: "SMS Marketing",
        description:
            "Reach your audience instantly with targeted SMS campaigns designed to increase engagement and conversions.",
        features: [
            "Targeted campaigns",
            "Instant communication",
            "Campaign tracking",
        ],
        path: "/services/sms-marketing",
    },

    {
        id: "email-marketing",
        icon: Mail,
        title: "Email Marketing",
        description:
            "Build meaningful customer relationships through strategic email campaigns that drive engagement and sales.",
        features: [
            "Email campaigns",
            "Audience targeting",
            "Performance analytics",
        ],
        path: "/services/email-marketing",
    },

    {
        id: "affiliate-marketing",
        icon: TrendingUp,
        title: "Affiliate Marketing",
        description:
            "Expand your reach through performance-driven affiliate marketing partnerships that help scale your business.",
        features: [
            "Affiliate partnerships",
            "Performance tracking",
            "Revenue growth",
        ],
        path: "/services/affiliate-marketing",
    },
];