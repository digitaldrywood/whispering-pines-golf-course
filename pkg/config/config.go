package config

import (
	"os"
)

type SiteConfig struct {
	Name           string
	URL            string
	DefaultOGImage string
}

type Config struct {
	DatabaseURL string
	Port        string
	Env         string
	Site        SiteConfig
}

var cfg *Config

func Load() *Config {
	if cfg != nil {
		return cfg
	}
	cfg = &Config{
		DatabaseURL: os.Getenv("DATABASE_URL"),
		Port:        getEnvOrDefault("PORT", "3000"),
		Env:         getEnvOrDefault("ENV", "production"),
		Site: SiteConfig{
			Name:           getEnvOrDefault("SITE_NAME", "Whispering Pines Golf Course"),
			URL:            getEnvOrDefault("SITE_URL", "https://whisperingpinesgc.net"),
			DefaultOGImage: getEnvOrDefault("DEFAULT_OG_IMAGE", "/static/images/og-default.png"),
		},
	}
	return cfg
}

func Get() *Config {
	if cfg == nil {
		return Load()
	}
	return cfg
}

func (c *Config) IsDevelopment() bool {
	return c.Env == "development"
}

func (c *Config) IsProduction() bool {
	return c.Env == "production"
}

func getEnvOrDefault(key, defaultValue string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return defaultValue
}
