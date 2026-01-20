package database

import (
	"context"
	"database/sql"
	"fmt"
	"log/slog"
	"sync"
	"time"

	_ "github.com/lib/pq"
)

var (
	db   *sql.DB
	once sync.Once
)

// Connect returns a database connection, creating one if necessary.
// This is safe for concurrent use and will reuse the connection pool.
func Connect(databaseURL string) (*sql.DB, error) {
	var err error
	once.Do(func() {
		db, err = sql.Open("postgres", databaseURL)
		if err != nil {
			return
		}

		// Configure connection pool for serverless
		db.SetMaxOpenConns(5)
		db.SetMaxIdleConns(2)
		db.SetConnMaxLifetime(5 * time.Minute)
		db.SetConnMaxIdleTime(1 * time.Minute)

		// Verify connection
		ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
		defer cancel()

		if err = db.PingContext(ctx); err != nil {
			db = nil
			return
		}

		slog.Info("database connected")
	})

	if err != nil {
		return nil, fmt.Errorf("failed to connect to database: %w", err)
	}

	return db, nil
}

// Get returns the existing database connection or nil if not connected
func Get() *sql.DB {
	return db
}
