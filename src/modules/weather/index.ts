// constants
import { API_KEY, BASE_API_URL } from "@/constants";
export class weather {
  private baseURL: string = BASE_API_URL;
  private keyAPI: string = API_KEY;
  constructor() {}
  public async getWeather(location: string) {
    try {
      const response = await fetch(
        `${BASE_API_URL}q=${location}&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error(`Failed to fetch weather data for ${location}`);
      }
      const json = await response.json();
      return json;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error; // Re-throw the error to handle it elsewhere if needed
    }
  }
}
