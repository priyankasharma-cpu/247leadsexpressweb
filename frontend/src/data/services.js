import {
    Target,
    MonitorSmartphone,
    MessageSquareText,
    Mail,
    UsersRound,
} from "lucide-react";

const services = [
    {
        id: 1,
        number: "01",
        title: "Lead Generation",
        shortTitle: "Lead Generation",
        description:
            "Turn targeted traffic into qualified leads with performance-driven campaigns built around your business goals.",
        icon: Target,
        path: "/services/lead-generation",
        tag: "Generate",
        featured: true,
    },

    {
        id: 2,
        number: "02",
        title: "Website Development",
        shortTitle: "Website Development",
        description:
            "Build fast, modern and conversion-focused websites that turn visitors into customers.",
        icon: MonitorSmartphone,
        path: "/services/website-development",
        tag: "Build",
        featured: false,
    },

    {
        id: 3,
        number: "03",
        title: "SMS Marketing",
        shortTitle: "SMS Marketing",
        description:
            "Reach your audience instantly with strategic SMS campaigns designed for engagement and conversions.",
        icon: MessageSquareText,
        path: "/services/sms-marketing",
        tag: "Connect",
        featured: false,
    },

    {
        id: 4,
        number: "04",
        title: "Email Marketing",
        shortTitle: "Email Marketing",
        description:
            "Nurture prospects and build lasting customer relationships through targeted email campaigns.",
        icon: Mail,
        path: "/services/email-marketing",
        tag: "Nurture",
        featured: false,
    },

    {
        id: 5,
        number: "05",
        title: "Affiliate Marketing",
        shortTitle: "Affiliate Marketing",
        description:
            "Expand your reach with performance-based partnerships that bring qualified traffic and measurable results.",
        icon: UsersRound,
        path: "/services/affiliate-marketing",
        tag: "Scale",
        featured: false,
    },
];

export default services;