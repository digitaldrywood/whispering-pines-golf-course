package handler

import (
	"whispering-pines/internal/config"
	"whispering-pines/internal/database"

	"github.com/labstack/echo/v4"
)

type Handler struct {
	cfg *config.Config
	db  *database.DB
}

func New(cfg *config.Config, db *database.DB) *Handler {
	return &Handler{
		cfg: cfg,
		db:  db,
	}
}

func (h *Handler) RegisterRoutes(e *echo.Echo) {
	// Static files
	e.Static("/static", "static")

	// Health check
	e.GET("/health", h.Health)

	// Public routes
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
