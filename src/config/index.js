export const API_NAMES = [ 
    "accounts", 
    "assets", 
    "customers",
    "datapoints", 
    "devices", 
    "documents", 
    "forms", 
    "invites",
    "media", 
    "messages", 
    "namespaces", 
    "orders", 
    "patients", 
    "relationships", 
    "rules", 
    "templates",
    "users", 
    "workflows",
];

export const path = (url) => `https://api.factoryfour.com/${url}/health/status`;

export const UPDATE_INTERVAL = 15000
