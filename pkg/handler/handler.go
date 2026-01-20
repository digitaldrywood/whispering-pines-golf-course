package handler

import (
	"whispering-pines/pkg/config"

	"github.com/labstack/echo/v4"
)

type Handler struct {
	cfg *config.Config
}

func New(cfg *config.Config) *Handler {
	return &Handler{
		cfg: cfg,
	}
}

func (h *Handler) RegisterRoutes(e *echo.Echo) {
	// Health check
	e.GET("/health", h.Health)

	// Public pages
	e.GET("/", h.Home)
	e.GET("/course", h.Course)
	e.GET("/course/hole/:number", h.HoleDetail)
	e.GET("/booking", h.Booking)
	e.GET("/rates", h.Rates)
	e.GET("/events", h.Events)
	e.GET("/location", h.Location)
	e.GET("/pro-shop", h.ProShop)
	e.GET("/menu", h.Menu)
	e.GET("/simulator", h.Simulator)
	e.GET("/weather", h.Weather)
	e.GET("/contact", h.Contact)
	e.GET("/clubhouse", h.Clubhouse)
}
