package handler

import (
	"encoding/json"
	"log/slog"
	"net/http"
	"strconv"

	"whispering-pines/pkg/data"
	"whispering-pines/pkg/templates/pages"
	"whispering-pines/pkg/weather"

	"github.com/labstack/echo/v4"
)

func (h *Handler) Health(c echo.Context) error {
	c.Response().Header().Set("Content-Type", "application/json")
	return json.NewEncoder(c.Response().Writer).Encode(map[string]string{
		"status": "healthy",
	})
}

func (h *Handler) Home(c echo.Context) error {
	return pages.Home().Render(c.Request().Context(), c.Response().Writer)
}

func (h *Handler) Course(c echo.Context) error {
	return pages.Course().Render(c.Request().Context(), c.Response().Writer)
}

func (h *Handler) HoleDetail(c echo.Context) error {
	numberStr := c.Param("number")
	number, err := strconv.Atoi(numberStr)
	if err != nil || number < 1 || number > 18 {
		return c.Redirect(http.StatusFound, "/course")
	}

	hole := data.GetHole(number)
	if hole == nil {
		return c.Redirect(http.StatusFound, "/course")
	}

	return pages.HoleDetail(*hole).Render(c.Request().Context(), c.Response().Writer)
}

func (h *Handler) Booking(c echo.Context) error {
	return pages.Booking().Render(c.Request().Context(), c.Response().Writer)
}

func (h *Handler) Rates(c echo.Context) error {
	return pages.Rates().Render(c.Request().Context(), c.Response().Writer)
}

func (h *Handler) Events(c echo.Context) error {
	return pages.Events().Render(c.Request().Context(), c.Response().Writer)
}

func (h *Handler) Location(c echo.Context) error {
	return pages.Location().Render(c.Request().Context(), c.Response().Writer)
}

func (h *Handler) ProShop(c echo.Context) error {
	return pages.ProShop().Render(c.Request().Context(), c.Response().Writer)
}

func (h *Handler) Menu(c echo.Context) error {
	return pages.Menu().Render(c.Request().Context(), c.Response().Writer)
}

func (h *Handler) Simulator(c echo.Context) error {
	return pages.Simulator().Render(c.Request().Context(), c.Response().Writer)
}

func (h *Handler) Weather(c echo.Context) error {
	current, err := weather.FetchCurrent()
	if err != nil {
		slog.Error("failed to fetch weather", "error", err)
		// Render page without weather data
		return pages.Weather(nil).Render(c.Request().Context(), c.Response().Writer)
	}
	return pages.Weather(current).Render(c.Request().Context(), c.Response().Writer)
}

func (h *Handler) Contact(c echo.Context) error {
	return pages.Contact().Render(c.Request().Context(), c.Response().Writer)
}

func (h *Handler) Clubhouse(c echo.Context) error {
	return pages.Clubhouse().Render(c.Request().Context(), c.Response().Writer)
}

func (h *Handler) Scorecard(c echo.Context) error {
	return pages.Scorecard().Render(c.Request().Context(), c.Response().Writer)
}

// WeatherAPI returns just the weather content for HTMX refresh
func (h *Handler) WeatherAPI(c echo.Context) error {
	current, err := weather.FetchCurrent()
	if err != nil {
		slog.Error("failed to fetch weather for API", "error", err)
		return pages.WeatherContent(nil).Render(c.Request().Context(), c.Response().Writer)
	}
	return pages.WeatherContent(current).Render(c.Request().Context(), c.Response().Writer)
}
