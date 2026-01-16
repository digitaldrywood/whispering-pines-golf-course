# Whispering Pines Golf Course - Go Web Application

## Project Overview

This is a Go web application for Whispering Pines Golf Course, built with:
- **Go 1.24** - Backend server
- **Echo v4** - Web framework
- **Templ** - Type-safe HTML templating
- **HTMX** - Client-side interactivity
- **Tailwind CSS v4** - Styling
- **SQLite** - Database (via modernc.org/sqlite, CGO-free)
- **goose** - Database migrations

## Critical: Build Error Checking

**ALWAYS check `./tmp/air-combined.log` after making code changes.** This log contains:
- Compilation errors
- Template generation errors
- SQL generation errors

Never assume code changes succeeded without checking this log.

## Development Workflow

`make dev` is the primary development command. It runs Air which automatically:
1. Kills any existing process on PORT
2. Regenerates Templ files (`templ generate`)
3. Runs `go mod tidy`
4. Rebuilds and restarts the server

**You do NOT need to manually run:**
- `templ generate`
- `go build`
- `air`

**In a separate terminal, run `make css-watch`** to watch Tailwind CSS changes.

## Project Structure

```
whispering-pines/
├── cmd/server/           # Application entry point
│   ├── main.go          # Server initialization
│   ├── slog.go          # Structured logging setup
│   └── generate.go      # go:generate directives
├── internal/
│   ├── config/          # Environment configuration
│   ├── ctxkeys/         # Context key types
│   ├── data/            # Course data (holes, amenities)
│   ├── database/        # SQLite database & migrations
│   ├── handler/         # HTTP handlers (routes)
│   ├── meta/            # SEO meta tag helpers
│   └── middleware/      # Echo middleware
├── templates/
│   ├── layouts/         # Base layout, meta tags
│   ├── components/      # Reusable components (nav, footer, icons)
│   └── pages/           # Page templates
├── static/
│   ├── css/            # Tailwind input/output
│   ├── js/             # JavaScript files
│   └── images/         # Course images
├── data/               # SQLite database files (gitignored)
├── go.mod
├── Makefile
├── .air.toml           # Air hot-reload config
└── .envrc              # Environment variables (direnv)
```

## Key Commands

| Command | Description |
|---------|-------------|
| `make dev` | Start with hot reload (main workflow) |
| `make build` | Build production binary |
| `make test` | Run tests with race detection |
| `make lint` | Run golangci-lint and templ fmt |
| `make css` | Build Tailwind CSS (minified) |
| `make css-watch` | Watch and rebuild Tailwind CSS |
| `make migrate` | Run database migrations |
| `make setup` | Install development tools |

## Environment Variables

All configuration via `.envrc` (use direnv):

```bash
DATABASE_URL="./data/whispering-pines.db"
PORT="3000"
ENV="development"
LOG_LEVEL="DEBUG"
SITE_NAME="Whispering Pines Golf Course"
SITE_URL="http://localhost:3000"
```

## Code Patterns

### Logging
Use `slog` (never `fmt.Printf` or `log.Printf`):
```go
slog.Info("message", "key", value)
slog.Error("failed to do something", "error", err)
```

### Error Handling
Wrap errors with context:
```go
if err != nil {
    return fmt.Errorf("failed to load course: %w", err)
}
```

### Templates
Templates own their meta - handlers don't pass it:
```go
// Handler (simple)
func (h *Handler) Home(c echo.Context) error {
    return pages.Home().Render(c.Request().Context(), c.Response().Writer)
}

// Template (owns meta)
templ Home() {
    @layouts.Base(meta.New("Home", "Welcome to Whispering Pines")) {
        // content
    }
}
```

### Adding New Pages

1. Add handler in `internal/handler/pages.go`
2. Register route in `internal/handler/handler.go`
3. Create template in `templates/pages/`

## Deployment

### Fly.io (Recommended)
```bash
fly launch
fly deploy
```

### Docker
```bash
docker build -t whispering-pines .
docker run -p 3000:3000 -v wpdata:/app/data whispering-pines
```

### Self-hosted
```bash
make build
./whispering-pines
```

## Course Data

Course information is in `internal/data/`:
- `course.go` - All 18 holes with details
- `amenities.go` - Amenities and simulator info

To add/modify hole information, edit these files directly.

## Image Assets

Images are stored in `static/images/`:
- `holes/` - Individual hole photos (hole-1.jpg through hole-18.jpg)
- `slider/` - Homepage carousel images
- `gallery/` - General course photos
- `logos/` - Branding assets
