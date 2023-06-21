// REFERENCE: https://geo.ipify.org/docs
export async function getIpData(ip: string) {
  const API_CALL = `https://geo.ipify.org/api/v2/country?apiKey=${process.env.API_KEY}&ipAddress=${ip}`;

  const request = await fetch(API_CALL);
  if (!request.ok) throw new Error('Something went wrong!');

  const data = await request.json();
  console.log(data);

  return data;
}