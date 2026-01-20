package data

// Amenity represents a course amenity
type Amenity struct {
	Title       string
	Description string
	Icon        string
}

// Amenities contains all course amenities
var Amenities = []Amenity{
	{
		Title:       "Pro Shop",
		Description: "Full-service pro shop with the latest equipment, apparel, and accessories.",
		Icon:        "shopping-bag",
	},
	{
		Title:       "Restaurant & Bar",
		Description: "Enjoy food and drinks before or after your round. Open Monday through Sunday 10 AM to Close.",
		Icon:        "utensils",
	},
	{
		Title:       "Indoor Simulator",
		Description: "Play year-round with our state-of-the-art Uneekor EYE XO SwingBay Golf Simulator.",
		Icon:        "tv",
	},
	{
		Title:       "Golf Leagues",
		Description: "Join our active golf leagues and compete with fellow golf enthusiasts.",
		Icon:        "users",
	},
	{
		Title:       "Club Championships",
		Description: "Annual club championship events for members of all skill levels.",
		Icon:        "trophy",
	},
	{
		Title:       "Event Hosting",
		Description: "Host your corporate outing, charity event, or private party at our beautiful facility.",
		Icon:        "calendar",
	},
}

// SimulatorInfo contains golf simulator details
var SimulatorInfo = struct {
	Name        string
	Equipment   string
	Description string
	Hours       string
	Pricing     []struct {
		Duration string
		Price    int
	}
	Features []string
}{
	Name:        "Indoor Golf Simulator",
	Equipment:   "Uneekor EYE XO SwingBay Golf Simulator",
	Description: "An all-in-one golf simulator package combining advanced launch monitor technology with a simulator enclosure, projector, and golf mat.",
	Hours:       "Wednesday through Sunday from 10:00 AM to Close (Winter Hours)",
	Pricing: []struct {
		Duration string
		Price    int
	}{
		{Duration: "30 minutes", Price: 20},
		{Duration: "1 hour", Price: 40},
	},
	Features: []string{
		"Access to hundreds of courses worldwide, including Whispering Pines",
		"Overhead launch monitor technology requiring no marked golf balls",
		"High-speed camera and doppler system for real-time data",
		"Extreme slow-motion replay capability through impact",
		"22+ data points including ball speed, club head speed, spin rates, launch angles, distance measurements, and impact location",
	},
}
