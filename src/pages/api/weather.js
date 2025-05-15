export default async function handler(req, res) {
  const { q } = req.query;
  const apiKey = process.env.NEXT_PUBLIC_CITY_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: "API key байхгүй байна" });
  }

  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${q}&days=1&aqi=no&alerts=no`
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Weather API Error:", errorText);
      return res.status(500).json({ error: "Weather API failed", detail: errorText });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error("Catch Error:", err.message);
    return res.status(500).json({ error: "Internal server error", detail: err.message });
  }
}
