package data

// HoleData contains information about a single hole
type HoleData struct {
	Number      int
	Par         int
	YardageTips int
	YardageWhite int
	YardageBlue int
	Description string
	Features    []string
	Tips        string
	Signature   bool
}

// CourseInfo contains general course information
var CourseInfo = struct {
	Name        string
	Tagline     string
	Description string
	Address     string
	Phone       string
	Email       string
	TotalPar    int
	Rating      float64
	Slope       int
}{
	Name:        "Whispering Pines Golf Course",
	Tagline:     "Where the pines meet the sky",
	Description: "An 18-hole championship course located approximately 12 miles east of Eau Claire, Wisconsin on Highway 29 and 1½ miles west of Cadott on County Trunk X.",
	Address:     "24700 County Highway X, Cadott, WI 54727",
	Phone:       "(715) 289-4653",
	Email:       "todd@whisperingpinesgc.net",
	TotalPar:    72,
	Rating:      71.2,
	Slope:       128,
}

// Holes contains all 18 holes data
var Holes = []HoleData{
	{
		Number:       1,
		Par:          4,
		YardageTips:  421,
		YardageWhite: 356,
		Description:  "A rather halcyon opening hole and one of the few easier holes on the front nine. This dogleg right offers a gentle start to your round.",
		Features:     []string{"Dogleg right", "Out of bounds along the right (typically not in play)", "Fairway bunker on the right side"},
		Tips:         "Longer hitters need a substantial drive to reach the green in regulation from the tips. When the pin is at the back, approach shots are extremely difficult - over-the-green shots are nearly impossible to recover from.",
	},
	{
		Number:       2,
		Par:          4,
		YardageWhite: 340,
		Description:  "A rather short par 4 doglegging to the right. The fairway slopes rightward, encouraging players to aim left.",
		Features:     []string{"Dogleg right", "Fairway slopes right to left", "Green has severe left-to-right slope"},
		Tips:         "Aim down the left side whether your ball fades or flies straight. Position your approach to leave an uphill putt rather than a sidehill one.",
	},
	{
		Number:       3,
		Par:          4,
		YardageWhite: 429,
		Description:  "Considered by many to be the most difficult par four on the front nine. The elevated tee sits approximately 20 feet above the fairway landing zone.",
		Features:     []string{"Elevated tee (20 feet above fairway)", "Out of bounds and pond right", "Dense trees left", "Sand and water left of green", "Water over the green", "Green slopes back to front"},
		Tips:         "Precision from the tee is essential to reach the fairway safely. Even from the fairway, the approach shot presents significant challenges due to multiple hazards surrounding the green.",
	},
	{
		Number:       4,
		Par:          3,
		YardageWhite: 153,
		YardageBlue:  189,
		Description:  "Features a very large green with undulations running from back right to front left. A small bunker guards the front left side.",
		Features:     []string{"Large undulating green", "Bunker front left", "Large pine trees frame the green"},
		Tips:         "Large pine trees can be intimidating when attacking the green, particularly when the pin is tucked right. The spacious putting surface provides multiple landing areas.",
	},
	{
		Number:       5,
		Par:          4,
		YardageWhite: 320,
		Description:  "The second shortest par 4 on the course, yet it produces numerous double bogeys due to strategic hazards.",
		Features:     []string{"Pond left of landing zone", "Narrow fairway (20-25 yards)", "Dense rough right", "Challenging green to navigate"},
		Tips:         "Block out all the danger on the right and left to focus on the tee shot. Success depends heavily on driving accuracy, as the green itself presents additional navigational challenges.",
	},
	{
		Number:       6,
		Par:          3,
		YardageWhite: 145,
		Description:  "The shortest hole on the course, but don't be fooled. The green is one of the most difficult to read with the most severe back-to-front slope.",
		Features:     []string{"Shortest hole on course", "Severe back-to-front slope on green", "Sand traps that attract balls", "Raised green", "Persistent headwind conditions"},
		Tips:         "Beware of this 'easy' golf hole. Should you be left, right, or over the back, chipping to the stick is most difficult.",
	},
	{
		Number:       7,
		Par:          5,
		YardageTips:  493,
		YardageWhite: 478,
		Description:  "A straight-away and reachable par 5 that presents birdie opportunities for skilled players. Probably the most birdiable par five on the course.",
		Features:     []string{"Straight-away layout", "Narrow 15-yard opening between trees", "Double and triple breaking greens", "Severe slopes on putting surface"},
		Tips:         "Second shot typically requires a 3-wood to 4-iron depending on wind conditions. Success requires a long initial drive, accurate approach through the narrow opening, and ability to handle severe green slopes.",
	},
	{
		Number:       8,
		Par:          4,
		YardageWhite: 290,
		Description:  "The shortest par four at Whispering Pines and also rates consistently as one of the most difficult. This is the course's signature hole.",
		Features:     []string{"Signature hole", "Green reachable with 260-yard fade", "Creek/water hazard left of green", "Out-of-bounds right", "50-year-old pine trees", "Small pond beyond green with steep sides", "Two-tiered putting surface"},
		Tips:         "The recommended strategy is to hit a 4-5 iron followed by an 8-PW to the green, then two-putt for par. Don't look back after completing this hole!",
		Signature:    true,
	},
	{
		Number:       9,
		Par:          5,
		YardageTips:  580,
		YardageWhite: 545,
		Description:  "The longest par 5 in the Chippewa Valley. This hole has never been reached in two by anyone playing by the Official Rules of Golf from the tips.",
		Features:     []string{"Longest par 5 in Chippewa Valley", "Minimal hazards between tee and green", "Largest and most difficult green on the course", "Multi-level putting surface"},
		Tips:         "Most golfers require a fairway wood followed by an iron for their approach. If the pin and your ball are on opposing levels, plan on three putting. A nice ending to a challenging front nine.",
	},
	{
		Number:       10,
		Par:          4,
		YardageWhite: 356,
		Description:  "The back nine begins with this dogleg right par four. A solid opening hole for the inward nine.",
		Features:     []string{"Dogleg right", "Lateral hazards in dense underbrush left", "Risk if drive goes too far and straight", "Small green relative to course standards"},
		Tips:         "The ideal approach involves a drive of approximately 230 yards, followed by an approach shot using 9-iron to sand wedge. Go for the middle of the green due to its smaller size.",
	},
	{
		Number:       11,
		Par:          3,
		YardageWhite: 148,
		YardageBlue:  185,
		Description:  "A hole that seems to play longer than the yardage. Select a club one higher than usual.",
		Features:     []string{"Plays longer than posted yardage", "Subtle breaks from left to right on green", "Deceptive distance"},
		Tips:         "After choosing your initial club selection, opt for one club higher to better handle the perceived distance.",
	},
	{
		Number:       12,
		Par:          4,
		YardageWhite: 380,
		Description:  "A straightaway par four with trouble on the right for faders and out of bounds left for those who draw the ball.",
		Features:     []string{"Pond at end of fairway", "Water over the green", "Drainage canal left of green", "Water guards right side of green", "35-yard deep green"},
		Tips:         "Multiple water hazards surround the green. The 35-yard deep green allows players to select from multiple club options depending on pin placement. A straight shot remains preferable.",
	},
	{
		Number:       13,
		Par:          4,
		YardageWhite: 350,
		Description:  "A straightaway par four with no trouble for the errant right drive, though the left side presents challenges with out-of-bounds markers.",
		Features:     []string{"Straightaway layout", "New bunker on right fairway", "Relatively small green", "Green sits within grove of maple trees"},
		Tips:         "The hole's design rewards accuracy on the approach while the tree-lined green setting demands precision for completing the hole successfully.",
	},
	{
		Number:       14,
		Par:          5,
		YardageBlue:  590,
		YardageWhite: 560,
		Description:  "One of the longest par 5's in the Chippewa Valley. No one is known to have reached this green in two strokes.",
		Features:     []string{"One of longest par 5s in Chippewa Valley", "Narrow creek 100 yards in front of green", "Large green prone to three-putts", "Water frequently claims aggressive second shots"},
		Tips:         "It may be prudent to lay up short with a long iron for a mid-iron third to the green. Players attempting aggressive second shots typically find their balls in the creek.",
	},
	{
		Number:       15,
		Par:          3,
		YardageWhite: 165,
		YardageBlue:  190,
		Description:  "A challenging par 3 with multiple hazards demanding confidence and concentration.",
		Features:     []string{"Water hazard behind green", "Dense brush and lateral hazard right", "Trees and brush left", "Stream across front of green", "Raised green makes chipping difficult"},
		Tips:         "Have confidence, resolve and concentration, and don't pause at the top once you've selected your club. From the wrong side, chipping to the stick is most difficult.",
	},
	{
		Number:       16,
		Par:          4,
		YardageTips:  435,
		YardageWhite: 410,
		Description:  "The only par four measuring over 400 yards on the back nine. Multiple hazards require strategic play.",
		Features:     []string{"Longest par 4 on back nine", "Small reservoir right of fairway", "Trees lining the left side", "Meandering stream for longer drives pulled left", "Challenging when facing westerly winds"},
		Tips:         "Demands accuracy from the tee. Even optimal approach shots may fall short of the putting surface, particularly when facing prevailing wind conditions from the west.",
	},
	{
		Number:       17,
		Par:          5,
		YardageWhite: 490,
		Description:  "A deceptively challenging par 5 that defies typical course design expectations. A very difficult but short par 5.",
		Features:     []string{"Water hazard (reservoir) right from tee", "Dense rough left", "Creek bordering fairway left and in front of green", "Narrow landing areas"},
		Tips:         "The artful golfer must make critical decisions about whether to attempt reaching the green or lay up safely. The narrow fairway creates risks even for conservative approach shots.",
	},
	{
		Number:       18,
		Par:          4,
		YardageWhite: 400,
		Description:  "The finishing hole features a drive through a corridor of trees with minimal hazards on either side.",
		Features:     []string{"Tree-lined chute off the tee", "Greenside bunker on the right", "Relatively open fairway", "Green with very subtle breaks, practically flat"},
		Tips:         "Length is what you're looking for here as it will make your approach shot easier. The pin typically sits on the right side near the greenside bunker. We hope you enjoyed your round at Whispering Pines!",
	},
}

// GetHole returns hole data by number (1-18)
func GetHole(number int) *HoleData {
	if number < 1 || number > 18 {
		return nil
	}
	return &Holes[number-1]
}

// FrontNine returns holes 1-9
func FrontNine() []HoleData {
	return Holes[:9]
}

// BackNine returns holes 10-18
func BackNine() []HoleData {
	return Holes[9:]
}

// GetTotalPar calculates total par for a set of holes
func GetTotalPar(holes []HoleData) int {
	total := 0
	for _, h := range holes {
		total += h.Par
	}
	return total
}

// GetTotalYardage calculates total yardage for a set of holes using white tees
func GetTotalYardage(holes []HoleData) int {
	total := 0
	for _, h := range holes {
		if h.YardageWhite > 0 {
			total += h.YardageWhite
		} else if h.YardageTips > 0 {
			total += h.YardageTips
		}
	}
	return total
}

// GetYardage returns the appropriate yardage for a hole
func (h *HoleData) GetYardage() int {
	if h.YardageWhite > 0 {
		return h.YardageWhite
	}
	if h.YardageTips > 0 {
		return h.YardageTips
	}
	return h.YardageBlue
}
