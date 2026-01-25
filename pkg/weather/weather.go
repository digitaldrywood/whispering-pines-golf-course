package weather

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

// Cadott, Wisconsin coordinates
const (
	Latitude  = 44.9483
	Longitude = -91.1518
)

// Current holds current weather conditions
type Current struct {
	Temperature       float64
	ApparentTemp      float64
	Humidity          int
	WindSpeed         float64
	WindGusts         float64
	WindDirection     int
	Precipitation     float64
	WeatherCode       int
	Description       string
	Icon              string
	IsGoodForGolf     bool
	GolfCondition     string
	LastUpdated       time.Time
}

// openMeteoResponse represents the API response
type openMeteoResponse struct {
	Current struct {
		Time              string  `json:"time"`
		Temperature2m     float64 `json:"temperature_2m"`
		RelativeHumidity  int     `json:"relative_humidity_2m"`
		ApparentTemp      float64 `json:"apparent_temperature"`
		Precipitation     float64 `json:"precipitation"`
		WeatherCode       int     `json:"weather_code"`
		WindSpeed10m      float64 `json:"wind_speed_10m"`
		WindDirection10m  int     `json:"wind_direction_10m"`
		WindGusts10m      float64 `json:"wind_gusts_10m"`
	} `json:"current"`
}

// FetchCurrent fetches current weather from Open-Meteo API
func FetchCurrent() (*Current, error) {
	url := fmt.Sprintf(
		"https://api.open-meteo.com/v1/forecast?latitude=%f&longitude=%f&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America/Chicago",
		Latitude, Longitude,
	)

	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Get(url)
	if err != nil {
		return nil, fmt.Errorf("failed to fetch weather: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("weather API returned status %d", resp.StatusCode)
	}

	var data openMeteoResponse
	if err := json.NewDecoder(resp.Body).Decode(&data); err != nil {
		return nil, fmt.Errorf("failed to decode weather response: %w", err)
	}

	current := &Current{
		Temperature:   data.Current.Temperature2m,
		ApparentTemp:  data.Current.ApparentTemp,
		Humidity:      data.Current.RelativeHumidity,
		WindSpeed:     data.Current.WindSpeed10m,
		WindGusts:     data.Current.WindGusts10m,
		WindDirection: data.Current.WindDirection10m,
		Precipitation: data.Current.Precipitation,
		WeatherCode:   data.Current.WeatherCode,
		LastUpdated:   time.Now(),
	}

	current.Description, current.Icon = weatherCodeToDescription(data.Current.WeatherCode)
	current.IsGoodForGolf, current.GolfCondition = evaluateGolfConditions(current)

	return current, nil
}

// weatherCodeToDescription converts WMO weather codes to descriptions and icons
func weatherCodeToDescription(code int) (string, string) {
	switch code {
	case 0:
		return "Clear sky", "sun"
	case 1:
		return "Mainly clear", "sun"
	case 2:
		return "Partly cloudy", "cloud-sun"
	case 3:
		return "Overcast", "cloud"
	case 45, 48:
		return "Foggy", "cloud"
	case 51, 53, 55:
		return "Drizzle", "cloud-rain"
	case 56, 57:
		return "Freezing drizzle", "cloud-rain"
	case 61, 63, 65:
		return "Rain", "cloud-rain"
	case 66, 67:
		return "Freezing rain", "cloud-rain"
	case 71, 73, 75:
		return "Snow", "snowflake"
	case 77:
		return "Snow grains", "snowflake"
	case 80, 81, 82:
		return "Rain showers", "cloud-rain"
	case 85, 86:
		return "Snow showers", "snowflake"
	case 95:
		return "Thunderstorm", "cloud-bolt"
	case 96, 99:
		return "Thunderstorm with hail", "cloud-bolt"
	default:
		return "Unknown", "cloud"
	}
}

// evaluateGolfConditions determines if conditions are good for golf
func evaluateGolfConditions(c *Current) (bool, string) {
	// Check for precipitation
	if c.WeatherCode >= 51 {
		return false, "Not recommended - precipitation expected"
	}

	// Check temperature (too cold or too hot)
	if c.Temperature < 45 {
		return false, "Chilly - dress warmly"
	}
	if c.Temperature > 95 {
		return false, "Very hot - stay hydrated"
	}

	// Check wind
	if c.WindSpeed > 20 {
		return false, "Windy - expect challenging conditions"
	}
	if c.WindGusts > 30 {
		return false, "Gusty winds - ball flight affected"
	}

	// Good conditions
	if c.Temperature >= 60 && c.Temperature <= 85 && c.WindSpeed < 10 {
		return true, "Excellent conditions for golf!"
	}

	if c.Temperature >= 50 && c.Temperature <= 90 && c.WindSpeed < 15 {
		return true, "Good conditions for golf"
	}

	return true, "Playable conditions"
}

// WindDirectionToString converts degrees to cardinal direction
func WindDirectionToString(degrees int) string {
	directions := []string{"N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"}
	index := int((float64(degrees)+11.25)/22.5) % 16
	return directions[index]
}
