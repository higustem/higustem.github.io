export const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  endpoints: {
    contact: '/api/contact',
  } as const
} as const;

export const getApiUrl = (endpoint: keyof typeof API_CONFIG.endpoints): string => {
  return `${API_CONFIG.baseUrl}${API_CONFIG.endpoints[endpoint]}`;
};