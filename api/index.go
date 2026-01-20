package handler

import (
	"log/slog"
	"net/http"
	"os"
	"sync"

	"whispering-pines/pkg/config"
	"whispering-pines/pkg/handler"
	"whispering-pines/pkg/middleware"

	"github.com/labstack/echo/v4"
)

var (
	e    *echo.Echo
	once sync.Once
)

func init() {
	// Set up structured logging for production
	slog.SetDefault(slog.New(slog.NewJSONHandler(os.Stderr, &slog.HandlerOptions{
		Level: slog.LevelInfo,
	})))
}

func getEcho() *echo.Echo {
	once.Do(func() {
		cfg := config.Load()

		e = echo.New()
		e.HideBanner = true
		e.HidePort = true

		middleware.Setup(e, cfg)

		h := handler.New(cfg)
		h.RegisterRoutes(e)
	})

	return e
}

// Handler is the Vercel serverless function entry point
func Handler(w http.ResponseWriter, r *http.Request) {
	getEcho().ServeHTTP(w, r)
}
