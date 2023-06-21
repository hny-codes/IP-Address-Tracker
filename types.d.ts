type IP = {
  ip: string;
  location: {
    country: string;
    region: string;
    timezone: string;
  };
  domains: string[];
  isp: string;
};
