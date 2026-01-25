package main

import (
	"log/slog"
	"os"

	"whispering-pines/pkg/config"
	"whispering-pines/pkg/handler"
	"whispering-pines/pkg/middleware"

	"github.com/labstack/echo/v4"
)

func main() {
	// Set up structured logging
	level := slog.LevelInfo
	if os.Getenv("LOG_LEVEL") == "DEBUG" {
		level = slog.LevelDebug
	}
	slog.SetDefault(slog.New(slog.NewTextHandler(os.Stderr, &slog.HandlerOptions{
		Level: level,
	})))

	cfg := config.Load()

	e := echo.New()
	e.HideBanner = true

	// Serve static files
	e.Static("/static", "public")

	middleware.Setup(e, cfg)

	h := handler.New(cfg)
	h.RegisterRoutes(e)

	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	slog.Info("Starting server", "port", port)
	if err := e.Start(":" + port); err != nil {
		slog.Error("Server error", "error", err)
		os.Exit(1)
	}
}
