package handler

import (
	"context"
	"net/http"

	"whispering-pines/pkg/config"
	"whispering-pines/pkg/ctxkeys"
)

// WithSiteConfig adds site configuration to the request context
func WithSiteConfig(r *http.Request) *http.Request {
	cfg := config.Get()
	ctx := context.WithValue(r.Context(), ctxkeys.SiteConfig, cfg.Site)
	return r.WithContext(ctx)
}

// SetHTMLHeaders sets common headers for HTML responses
func SetHTMLHeaders(w http.ResponseWriter) {
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	w.Header().Set("X-Content-Type-Options", "nosniff")
	w.Header().Set("X-Frame-Options", "SAMEORIGIN")
	w.Header().Set("X-XSS-Protection", "1; mode=block")
}

// SetJSONHeaders sets common headers for JSON responses
func SetJSONHeaders(w http.ResponseWriter) {
	w.Header().Set("Content-Type", "application/json; charset=utf-8")
}
