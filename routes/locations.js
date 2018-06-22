const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { Location } = require("../models/locations");
// const auth = require("../middleware/auth");

//retrieve all locations
//submit new locations
//delete locations
//update locations
router.get("/", async (req, res) => {
  await Location.collection.remove();

  const locArray = [
    "Abandoned Factory ",
    "Abandoned Mine ",
    "Abandoned Office ",
    "Abandoned Quarry ",
    "Abandoned Road ",
    "Abandoned Subway",
    "Abandoned Warehouse ",
    "Abbey",
    "Academy",
    "Active Volcano ",
    "Aerie ",
    "Aero Club",
    "Aerodrome ",
    "Agricultural Equipment Center",
    "Agricultural Experiments Facility",
    "Agricultural Service Center ",
    "Air Cargo Terminal ",
    "Air Passenger Terminal ",
    "Air Purification Plant",
    "Air Show",
    "Airborne Aircraft ",
    "Airborne Research Facility ",
    "Aircraft Bunker",
    "Aircraft Carrier ",
    "Aircraft Charter",
    "Aircraft Graveyard",
    "Aircraft Museum",
    "Aircraft on the Ground ",
    "Aircraft Repair Facility ",
    "Aircraft Service Center",
    "Aircraft Test & Simulations Facility ",
    "Airline Offices ",
    "Airpark",
    "Airport Control Tower ",
    "Airport Hangar ",
    "Airship ",
    "Airstrip",
    "Alarm Monitoring Center ",
    "Alter",
    "Amphibious Vehicle ",
    "Amphitheatre",
    "Amusement Park",
    "Amusement Park ",
    "An Abandoned Ship ",
    "Anchorage",
    "Anchorage or Mooring",
    "Ancient Battleground ",
    "Ancient Ruins ",
    "Animal Hospital ",
    "Animal Shelter ",
    "Animal Trail",
    "Animal Trainer ",
    "Annex",
    "Anomalous Mine",
    "Antique Aircraft Airfield",
    "Apartment Tower",
    "Aquarium ",
    "Aquatic Preserve",
    "Aqueduct ",
    "Arch Bridge ",
    "Archaeology Dig Site ",
    "Archipelago",
    "Arctic Fishing Cabin",
    "Arena ",
    "Armory ",
    "Arsenal ",
    "Art Gallery ",
    "Art Institute",
    "Art Museum ",
    "Art School ",
    "Artic Expedition HQ ",
    "Auction House ",
    "Audio Recording Studio ",
    "Auto Body Shop",
    "Auto Dealership ",
    "Auto Parts Shop ",
    "Automobile Graveyard",
    "Automobile Manufacturing Complex",
    "Automobile Museum",
    "Automobile Race Track",
    "Automobile Tunnel",
    "Aviary ",
    "Badlands ",
    "Bail Bond House ",
    "Ballet Studio ",
    "Ballroom ",
    "Banquet Facility ",
    "Bar ",
    "Barbershop ",
    "Barge",
    "Barn ",
    "Barracks",
    "Baseball Park",
    "Baseball Stadium",
    "Basement ",
    "Basin",
    "Basketball Arena",
    "Bathhouse",
    "Battle Field ",
    "Battleship ",
    "Bay ",
    "Bayou ",
    "Beach House ",
    "Beached Shipwreck ",
    "Beam Bridge ",
    "Beauty Salon ",
    "Bed & Breakfast ",
    "Beneath a Bridge ",
    "Bermuda Triangle",
    "Bible Institute",
    "Billiard Hall ",
    "Bluffs",
    "Boat Dealership ",
    "Boat House",
    "Boat Ramp",
    "Boat Taking on Water",
    "Bog ",
    "Bookshop ",
    "Border Crossing ",
    "Botanical Garden",
    "Bowling Alley ",
    "Box Canyon",
    "Brewery ",
    "Bridge",
    "Broadcast Tower ",
    "Bull Fighting Ring ",
    "Bungalow",
    "Bunker ",
    "Burial Mound",
    "Bus Depot",
    "Bus Station ",
    "Bus Stop ",
    "Bus Terminal ",
    "Busy Intersection",
    "Butcher Shop ",
    "Butte ",
    "Cabaret/Supper Club",
    "Cabin",
    "Cable Company",
    "Cable Television Company ",
    "Cable-Stayed Bridge ",
    "Cafeteria ",
    "Caldera",
    "Campground ",
    "Camping Area ",
    "Canal ",
    "Candy Factory ",
    "Cantilever Bridge ",
    "Canyon Mouth",
    "Cape ",
    "Car Wash ",
    "Cargo Aircraft ",
    "Cargo Container ",
    "Cargo Plane ",
    "Cargo Terminal ",
    "Carnival",
    "Casino ",
    "Castle ",
    "Cathedral ",
    "Causeway",
    "Cave",
    "Caverns ",
    "Cemetery ",
    "Cenote ",
    "Central Park",
    "Chalet ",
    "Chamber of Commerce ",
    "Chapel",
    "Chasm",
    "Checkpoint ",
    "Chemical Dump ",
    "Chemical Plant ",
    "Chemical Storage Facility",
    "Chemical Tanker Ship",
    "Chicken Farm",
    "Children's Hospital",
    "Children's Museum",
    "Chinese Junk (Sailing Ship)",
    "Chiropractic Clinic",
    "Church ",
    "Church Camp",
    "Church Tower ",
    "Cinema ",
    "Circus",
    "Citadel ",
    "Citrus Grove",
    "City",
    "City Center",
    "City Hall ",
    "Civic Center",
    "Clandestine Drug Lab",
    "Cliff",
    "Clinic ",
    "Clock Tower ",
    "Club House ",
    "Coal Mine ",
    "Coal Processing Plant",
    "Coal-Fired Power Plant ",
    "Coastal Game Preserve ",
    "Coastal Island ",
    "Coastal Marsh",
    "Coastal Resort",
    "Coastal Shallows ",
    "Coastline ",
    "Cocktail Lounge ",
    "Coffee House",
    "Collapsed Bridge ",
    "Collapsed Mine ",
    "Collapsed Tunnel ",
    "Collection Agency ",
    "College ",
    "Colonial Style Residence",
    "Combination Office/Warehouse",
    "Commercial Construction Area ",
    "Community Building",
    "Community College Complex",
    "Commuter Train ",
    "Concert Hall ",
    "Concrete",
    " Sand",
    " & Gravel Company ",
    "Condominium Tower",
    "Conference ",
    "Construction Crane",
    "Container Ship",
    "Convenience Store ",
    "Convent ",
    "Convention Center ",
    "Coral Reef ",
    "Correctional Institute Airport",
    "Correctional Institution",
    "Country Club ",
    "Country Store",
    "Courthouse ",
    "Cove ",
    "Covered Bridge ",
    "Cow Camp",
    "Crater",
    "Credit Union ",
    "Crematorium",
    "Crystal Mine ",
    "Culinary Institute ",
    "Culvert ",
    "Cypress Swamp",
    "Dairy Farm ",
    "Dam ",
    "Dance Club ",
    "Dance Hall ",
    "Dance Studio ",
    "Data Storage & Processing Center ",
    "Deep Canyon ",
    "Deep Canyon Bridge",
    "Deep Earth Exploration Facility ",
    "Deep in the Earth",
    "Deep Sea Trench",
    "Deep Sea Tugboat (Ship)",
    "Deep-Sea Research Submarine",
    "Delta",
    "Dense Jungle",
    "Dental Center ",
    "Department of Corrections Medical Center",
    "Department Store ",
    "Desert ",
    "Desert Basin",
    "Desert Flats ",
    "Desert Hills",
    "Desert Isle ",
    "Deserted Island",
    "Destroyer ",
    "Detention Facility",
    "Diamond Field",
    "Dike",
    "Diner ",
    "Dirigible ",
    "Distillery ",
    "District Office",
    "Ditch",
    " or Small Canal",
    "Dive Boat ",
    "Dog Racing Track ",
    "Drag Strip ",
    "Drainage Canal",
    "Drive-In Movie Theatre ",
    "Drive-in Restaurant",
    "Drug & Alcohol Abuse Treatment Facility ",
    "Drug Laboratory ",
    "Dry Cleaner ",
    "Dry Dock ",
    "Dry Flood Channel",
    "Dry Gulch or Canyon",
    "Dry Riverbed ",
    "Dungeon ",
    "Election Headquarters ",
    "Electric Company",
    "Electric Company ",
    "Electrical Storm",
    "Electronics Manufacturer ",
    "Elementary School ",
    "Elevated Train ",
    "Embassy",
    "Emergency Response Center ",
    "Emergency Shelter ",
    "Engine House (Train)",
    "Engine Repair Shop ",
    "Environmental Rally ",
    "Esplanade ",
    "Estate ",
    "Estuary ",
    "Excavation ",
    "Exibition Center",
    "Exotic Restaurant ",
    "Experimental Facility ",
    "Experimental Station",
    "Experimental Vehicle ",
    "Exploration Submarine ",
    "Extra-Dimensional Gate ",
    "Factory ",
    "Fair",
    "Fallen Log Foot Bridge ",
    "Fallout Shelter ",
    "Falls",
    "Farm ",
    "Farm Equipment Dealership ",
    "Fast Food Restaurant ",
    "Ferris Wheel ",
    "Ferry Boat ",
    "Ferry Embarkation Point ",
    "Ferryboat ",
    "Festival",
    "Festival",
    "Filtration Plant",
    "Fine Dining Restaurant ",
    "Fire Academy",
    "Fire Department ",
    "Fire Station",
    "Fire Watchtower",
    "Fireworks Display ",
    "Fish Farm",
    "Fish Hatchery",
    "Fishing Boat ",
    "Fishing Lodge",
    "Fishing Pier",
    "Fishing Trawler (Small Ship)",
    "Fitness Center",
    "Fitness Center ",
    "Fixed Radar Site ",
    "Fjord",
    "Flats",
    "Flea Market ",
    "Flight School ",
    "Floating Casino ",
    "Floating Crane (Ship)",
    "Floating Dock ",
    "Floating Drydock (Ship)",
    "Flooded Bridge ",
    "Flooded Building",
    " or Structure ",
    "Flooded River ",
    "Florist or Flower shop ",
    "Foot Bridge ",
    "Football Stadium",
    "Foothills ",
    "Foreign Restaurant ",
    "Forest ",
    "Forest Fire ",
    "Forested Hills ",
    "Fort ",
    "Fortified Bridge ",
    "Fortified Underground Complex",
    "Fortress ",
    "Fraternity House ",
    "Freight Train ",
    "Freighter (ship) ",
    "Frontier Style Residence",
    "Funeral Home ",
    "Funeral in Progress",
    "Gambling Den ",
    "Game Management Area",
    "Game Preserve ",
    "Gap",
    "Garage ",
    "Garden ",
    "Gas Company ",
    "Gas Station ",
    "Gas-Fired Power Plant",
    "Gate ",
    "General Cargo Ship",
    "Geological Park",
    "Geothermal Electric Plant",
    "Geothermal Park",
    "Geyser Park",
    "Ghost Town ",
    "Glacier ",
    "Glass-Bottomed Boat ",
    "Gold Mine ",
    "Gorge",
    "Government Academy",
    "Government Office Building",
    "Government Office Complex",
    "Government Offices ",
    "Grain Elevator",
    "Grain Mill",
    "Grain Storage Bin",
    "Grassy Heights",
    "Gravel Road ",
    "Greenhouse ",
    "Grocery Store ",
    "Grotto",
    "Grove ",
    "Guard House",
    "Guard Station",
    "Gulch",
    "Gun Shop ",
    "Gymnasium",
    "Gymnasium",
    "Gymnastics Center ",
    "Halfway House",
    "Harbor ",
    "Harbormasters Office",
    "Haunted House ",
    "Haven",
    "Haven",
    "Health Club ",
    "Helicopter ",
    "Helicopter Charter",
    "Helicopter Flight School",
    "Heliport",
    "Heliport ",
    "High Speed Patrol Boat",
    "Hiking Trails",
    "Hilltop ",
    "Hi-Rise Construction Site ",
    "Historic District ",
    "Historic Monument ",
    "History Museum ",
    "Hole",
    " or Open Pit",
    "Holiday or Major Public Gathering ",
    "Hollow",
    "Homestead",
    "Horn",
    "Horse Park",
    "Horse Racing Track ",
    "Hospital ",
    "Hot Air Balloon ",
    "Hot Springs",
    "Hotel/Casino",
    "Hunter/Killer Submarine",
    "Hunting Lodge ",
    "Ice Pack ",
    "Ice Plain ",
    "Iceberg ",
    "Icebreaker Ship ",
    "Illegal Fighting Pits",
    "Import/Export Warehouse",
    "In the Eye of a Hurricane",
    "Inactive Volcano",
    "Incline Mine",
    "Incomplete Bridge ",
    "Indian Burial Grounds",
    "Indian Reservation",
    "Indoor Arena",
    "Indoor Gun Range",
    "Industrial Equipment Supply ",
    "Industrial Parts Plant",
    "Industrial Plant ",
    "Inlet ",
    "Inn ",
    "Institute",
    "Insurance Office ",
    "Intelligence Agency ",
    "Interchange ",
    "International Airport ",
    "Interstate or Highways ",
    "Interstellar Exploration Facility ",
    "Intervention Center",
    "Island Keys",
    "Jail ",
    "Jet Ski Terminal ",
    "Jetty",
    "Jewel Mine ",
    "Jewelry Shop ",
    "Junction",
    "Jungle ",
    "Jungle Isle ",
    "Junkyard ",
    "Karate Dojo ",
    "Kennel ",
    "Kennel Club",
    "Kindergarten & Daycare",
    "Knob",
    "Labor Union ",
    "Laboratory ",
    "Lagoon ",
    "Lake ",
    "Lakefront Cabin",
    "Landfill ",
    "Landing Craft (Ship)",
    "Landing Strip",
    "Large Apartment Complex ",
    "Large Canyon",
    "Large City Sewers",
    "Large Mesa ",
    "Large Office Building",
    "Large Waterfall ",
    "Laundromat ",
    "Lava Field",
    "Law Library",
    "Law Offices ",
    "Levee",
    "Library",
    "Light Buoy",
    "Light House ",
    "Lighted Data Tower",
    "Linguistics Institute",
    "Liquor Store ",
    "Listening Post ",
    "Loading Dock ",
    "Loch",
    "Lodge",
    "Log Cabin ",
    "Long Range Patrol Ship",
    "Lookout Tower",
    "Lumber Mill ",
    "Machine Shop",
    "Major Concert ",
    "Man-made Wonder ",
    "Mansion ",
    "Manufacturing Plant ",
    "Marina",
    "Marine & Boat Storage Facility ",
    "Marine Repair Facility ",
    "Marine Sanctuary ",
    "Marine Service & Fueling Station ",
    "Maritime Museum ",
    "Marketplace ",
    "Marsh ",
    "Marsh ",
    "Martial Arts Dojo ",
    "Martial Arts Facility",
    "Martial Arts Studio",
    "Mausoleum ",
    "Mausoleum Crypt",
    "Maze ",
    "Meadow",
    "Media Ceremony/ Event ",
    "Medical Center ",
    "Medical Laboratory ",
    "Medical Library",
    "Medical School ",
    "Medium Boat ",
    "Medium Office Building ",
    "Meeting House ",
    "Megalithic Ruin",
    "Memorial Library",
    "Memorial Park ",
    "Mental Health Center",
    "Mental Health Center ",
    "Merchant Ship ",
    "Metalworks Mill",
    "Microwave Relay Tower ",
    "Microwave Transmitter Tower",
    "Military Academy ",
    "Military Airbase ",
    "Military Bombing Range ",
    "Military Cruiser ",
    "Military Facility ",
    "Military Installation ",
    "Military Institute",
    "Military-Industrial Complex",
    "Mill ",
    "Mine ",
    "Missile Base ",
    "Mission (Church or Social)",
    "Mixed Jungle and Rice Paddies on Hillside Terraces",
    "Mobile Home ",
    "Mobile Home park",
    "Mobile Radar Site ",
    "Modern Bank",
    "Modern Hotel",
    "Monastery ",
    "Monument ",
    "Moon",
    "Morgue ",
    "Mosque ",
    "Motel ",
    "Motocross or Dirt Bike Raceway",
    "Motor Speedway ",
    "Motorcycle Dealership ",
    "Motorcycle Raceway ",
    "Mound ",
    "Mountain Climbing Expedition ",
    "Mountain Meadow",
    "Mountain Pass ",
    "Mountain Peak",
    "Mountain Range",
    "Mountain Spring",
    "Mountains ",
    "Mountainside Cliff ",
    "Mountainside Terraces",
    "Mountaintop ",
    "Movie Filming Location ",
    "Movie Studio ",
    "Movie Theatre ",
    "Moving Bridge ",
    "Municipal Airport",
    "Munitions Storage Facility ",
    "Narrow Canyon ",
    "National Historic Landmark ",
    "National Park ",
    "National Park Complex",
    "Native Holy Grounds ",
    "Natural Bridge ",
    "Natural Overlook ",
    "Natural Spring ",
    "Natural Wonder ",
    "Naval Station ",
    "Naval Supply Ship ",
    "Neck",
    "Newspaper ",
    "Nightclub ",
    "Nomad Camp",
    "Nuclear Attack Submarine",
    "Nuclear Plant ",
    "Nuclear Shelter Complex",
    "Nuclear Testing Ground ",
    "Nunnery",
    "Nursing Home ",
    "Oasis",
    "Observation Tower",
    "Observation Tower ",
    "Observatory ",
    "Ocean Front Bar/Tavern",
    "Ocean Liner ",
    "Ocean Storm",
    "Oceanfront Condominium",
    "Office Complex",
    "Office Tower ",
    "Oil & Gas Platform (Ocean)",
    "Oil & Gas Rig ",
    "Oil Terminal ",
    "Oilfield",
    "Old Bank ",
    "Old Hotel",
    "Old Sailing Vessel ",
    "Old Theatre ",
    "Old Town ",
    "Old Town Historical District",
    "Old U-Boat (Submarine)",
    "Open Pit ",
    "Open Pit Mine",
    "Opera Hall ",
    "Orchard ",
    "Ossuary ",
    "Outcropping",
    "Outdoor Concert",
    "Outer Space",
    "Outpost ",
    "Overnight Automobile/Passenger Ferry Ship",
    "Package Terminal ",
    "Packing Plant ",
    "Pagoda ",
    "Palace ",
    "Parachute School",
    "Paranormal Institute",
    "Park & Recreation Facility ",
    "Parking Garage ",
    "Parking Lot ",
    "Parliament",
    "Partially Buried Pyramid",
    "Passenger Cruise Ship",
    "Passenger Train ",
    "Patrol Vessel ",
    "Paved Airstrip ",
    "Pavilion ",
    "Pawnbroker ",
    "Performing Arts Awards Ceremony ",
    "Performing Arts Theatre ",
    "Pet Shop ",
    "Petroleum Manufacturing Facility ",
    "Petroleum Storage Facility ",
    "Photography Lab",
    "Picnic Area",
    "Pier ",
    "Pipeline Terminal ",
    "Pizza Palace ",
    "Placer Mine",
    "Plains or Grassland ",
    "Plant Nursery ",
    "Plant Nursery ",
    "Plastics Factory",
    "Plateau",
    "Playground ",
    "Plaza",
    "Point",
    "Police Station ",
    "Police Sub-Station",
    "Political Party HQ",
    "Political Rally ",
    "Polluted Waterway ",
    "Polo Club ",
    "Pond",
    "Pontoon Bridge ",
    "Pool",
    "Pool Hall ",
    "Post Office",
    "Post Office ",
    "Power Collection Array ",
    "Power Substation ",
    "Prep School ",
    "Preparatory School",
    "Primitive Village",
    "Print Shop ",
    "Prison ",
    "Prison Camp",
    "Prison Medical Center",
    "Private Beach ",
    "Private Golf Course ",
    "Private Home ",
    "Private Island",
    "Private Library ",
    "Private Park ",
    "Private School ",
    "Processing Facility ",
    "Protest March ",
    "Psychic Research Facility ",
    "Pub",
    "Public Beach",
    "Public Ceremony ",
    "Public Gathering ",
    "Public Golf Course ",
    "Public Library ",
    "Public Park ",
    "Publishing House",
    "Putt-Putt Golf Course ",
    "Race Track",
    "Racetrack",
    "Radio Station ",
    "Radio Telescope ",
    "Radioactive Mine ",
    "Radioactive Waste Storage Facility ",
    "Raft ",
    "Rail Yard ",
    "Railcar Wash ",
    "Railway",
    "Railway Bridge ",
    "Railway Platform ",
    "Railway Station ",
    "Railway Tunnel ",
    "Ranch ",
    "Ranger Station",
    "Rapids",
    "Recovery Ward ",
    "Recreation Area",
    "Recreation Area",
    "Recreational Vehicle ",
    "Recreational Vehicle Park",
    "Red-light District ",
    "Reef",
    "Refrigerated Ship",
    "Refrigerated Storage Facility ",
    "Regional Medical Center ",
    "Rehabilitation Center",
    "Religious Rally ",
    "Religious Retreat ",
    "Religious Sanctuary",
    "Remote Island ",
    "Remote Listening Post ",
    "Remote Research Facility ",
    "Remote Research Station ",
    "Rental Agency ",
    "Research Facility ",
    "Research Laboratory ",
    "Research Vessel ",
    "Reservoir",
    "Reservoir ",
    "Residential Construction Area ",
    "Resort ",
    "Resort",
    " Golf Course",
    " & Country Club",
    "Restaurant ",
    "Retail Store ",
    "Retirement Community",
    "Rice Paddy",
    "Ridge ",
    "Ridge ",
    "Rifle & Pistol Range ",
    "Rift Valley",
    "River ",
    "River Canyon",
    "River Ford ",
    "River Island ",
    "River Lock",
    "River Tunnel",
    "Riverbank",
    "Riverbend",
    "Riverboat (Paddlewheel) ",
    "Road ",
    "Road Fork",
    "Road Paving Company",
    "Road Tunnel ",
    "Roadside Store ",
    "Rock Garden ",
    "Rock Quarry ",
    "Rock Tower ",
    "Rocky Desert",
    "Rocky Ridges",
    "Rooftop ",
    "Rookery",
    "Rope Bridge",
    "Roundhouse (Train)",
    "Rugged Coastline ",
    "Ruins ",
    "Safari Preserve ",
    "Safe House",
    "Sailboat ",
    "Salt Flats ",
    "Salt Mine ",
    "Sand & Gravel Pit",
    "Sandbar ",
    "Sanitarium ",
    "Sargasso Sea",
    "Satellite",
    "Satellite Communications Center ",
    "Science & Industry Museum",
    "Science Institute",
    "Science Laboratory ",
    "Science Museum ",
    "Scientific Library",
    "Scrap Metal Yard",
    "Scrap Yard ",
    "Sculpture Garden ",
    "Sea Banks",
    "Sea Canyon",
    "Sea Cargo Terminal ",
    "Sea Going Hydrofoil (Ship)",
    "Sea Passenger Terminal ",
    "Sea Trench",
    "Seadrome",
    "Seaplane Base",
    "Secondary School ",
    "Secret Military Facility ",
    "Secret Stronghold ",
    "Secret Underground Stronghold ",
    "Security Center ",
    "Sewer Company",
    "Sewer Entrance ",
    "Sewers ",
    "Shaft Mine",
    "Shanty Town ",
    "Shantytown",
    "Ship Taking on Water",
    "Shipping Warehouse",
    "Shipwreck ",
    "Shipyard",
    "Shoals",
    "Shoals & Banks",
    "Shopping Center",
    "Shopping Mall ",
    "Shrine",
    "Silver Mine ",
    "Sink",
    "Sinkhole ",
    "Sinking Ship ",
    "Skateboard Rink ",
    "Skating Rink ",
    "Skating Rink ",
    "Ski Area",
    "Ski Lift ",
    "Ski Resort ",
    "Slaughterhouse",
    "Small Airport ",
    "Small Apartment Complex ",
    "Small Canyon ",
    "Small Day Passenger Ship",
    "Small Mesa ",
    "Small Office Building ",
    "Small Open Boat ",
    "Small Town",
    "Small Waterfall ",
    "Smooth Pyramid",
    "Snowfield ",
    "Snowy Crevasse ",
    "Solar Observatory ",
    "Solar Power Plant",
    "Solar System Exploration Facility ",
    "Sorority House ",
    "Spa ",
    "Space Landing Facility ",
    "Space Launch Facility ",
    "Space Station ",
    "Spacecraft ",
    "Spacecraft Repair Facility ",
    "Spanish Mission",
    "Speedboat ",
    "Sports Arena ",
    "Stables ",
    "Stadium ",
    "State Park ",
    "Station",
    "Steamship",
    "Steel Manufacturing Plant",
    "Steel Mill",
    "Stepped Pyramid",
    "Stockyard ",
    "Store ",
    "Strait or Sound ",
    "Street",
    "Strip Club ",
    "Strip Mall ",
    "Strip Mine ",
    "Structural Rubble",
    "Studio Back Lot ",
    "Sub-glacial Cave ",
    "Subterranean River",
    "Subway ",
    "Summer Camp",
    "Survivalist Enclave ",
    "Suspension Bridge ",
    "Swamp ",
    "Swimming Pool ",
    "Synagogue ",
    "Tanker (Ship)",
    "Tanning Salon",
    "Tavern ",
    "Taxi Company ",
    "Technology Gallery ",
    "Telecommunication Center ",
    "Teleconferencing Center ",
    "Telephone Company ",
    "Television Recording Studio ",
    "Television Station ",
    "Temple ",
    "Tents ",
    "Terrarium ",
    "Test Range",
    "Textiles Factory",
    "Textiles Mill",
    "The Docks ",
    "Theme Park",
    "Tire Dump ",
    "Toll Booth",
    "Toll Road",
    "Tomb ",
    "Tool Shop ",
    "Tour Bus ",
    "Town Bridge ",
    "Town Square",
    "Townhouse",
    "Toxic Waste Storage Facility ",
    "Trading Post",
    "Traffic Control Tower",
    "Trail Crossing",
    "Trailer ",
    "Trailer park",
    "Trailhead",
    "Train Depot",
    "Train Museum",
    "Train Station ",
    "Training Facility ",
    "Trash Company ",
    "Trash Dump ",
    "Travel Agency ",
    "Treatment Center",
    "Tree Nursery ",
    "Trolley ",
    "Truck Terminal ",
    "Truck Terminal ",
    "Tug Boat ",
    "Tundra",
    "Tunnel",
    "Tunnel Mine",
    "Ultralight Aircraft School",
    "Underground Bunker Complex ",
    "Underground Garage ",
    "Underground Mall ",
    "Underground Storage Facility ",
    "Underground Stronghold ",
    "Undersea Tunnel",
    "Underwater - Deep Sea ",
    "Underwater Caves & Caverns ",
    "Underwater -Coastal ",
    "Underwater Facility ",
    "Underwater Kelp Farm ",
    "Underwater Pen or Contained Area ",
    "Underwater Preserve",
    "Underwater Research Facility",
    "Union Hall ",
    "University ",
    "University Experimental Farm",
    "Unpaved Airstrip ",
    "Unusual Rock Formation",
    "Urban Fire ",
    "Urban Street ",
    "Valley ",
    "Vast Antennae Array ",
    "Vault ",
    "Vehicle Tire Store",
    "Victorian Residence",
    "Villa",
    "Village",
    "Vineyards ",
    "Volunteer Fire Department",
    "War Museum",
    "Warehouse ",
    "Warehouse District ",
    "Warm Springs",
    "Washed-Out Bridge ",
    "Washed-Out Road ",
    "Waste Water Treatment Plant ",
    "Wastewater Treatment Plant",
    "Watchtower",
    "Water Buoy",
    "Water Garden",
    "Water Garden ",
    "Water Hole",
    "Water Landing",
    "Water Park ",
    "Water Passage",
    "Water Pumping Station",
    "Water Pumping Station ",
    "Water Purification Plant ",
    "Water Tower ",
    "Water Trail",
    "Waterfront Commercial",
    "Waterfront Industrial",
    "Waterfront Restaurant",
    "Watermill",
    "Watershed",
    "Waterworks ",
    "Wax Museum ",
    "Weapons Laboratory ",
    "Wedding Hall",
    "Wedding in Progress",
    "Welcome Center",
    "Welding Equipment Store ",
    "Well ",
    "Well House",
    "Whaling Boat ",
    "Whitewater Rapids",
    "Wide Canyon ",
    "Wild Animal Park ",
    "Wilderness Park ",
    "Wildlife Refuge ",
    "Wildlife Rehabilitation Center ",
    "Wildlife Sanctuary ",
    "Windmill",
    "Winery ",
    "Woodshop ",
    "Workshop",
    "Worlds Fair ",
    "Wreck ",
    "Yacht ",
    "Yacht & Country Club",
    "Yacht Center",
    "Yacht Harbor",
    "Yacht Show",
    "Youth Camp",
    "Youth Center ",
    "Zoo"
  ];
  const generatedLists = locArray.map(loc => {
    return { category: "location", name: loc };
  });
  await Location.collection.insert({
    name: "location",
    locations: generatedLists
  });
  //get all

  const locations = await Location.find().sort("name");
  res.send(locations);
});

//get one
router.get("/:id", async (req, res) => {
  const location = await Location.findById(req.params.id);
  if (!location)
    return res.status(404).send("The location with this ID was not found...");
  res.send(location);
});

//put
router.put("/:id", async (req, res) => {
  const location = await Location.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  );

  if (!location)
    return res.status(404).send("The location with this ID was not found...");
  res.send(location);
});

//delete
router.delete("/:id", async (req, res) => {
  const location = await Location.findByIdAndRemove(req.params.id);

  if (!location)
    return res.status(404).send("The location with this ID was not found...");
  res.send(location);
});
//new
router.post("/", async (req, res) => {
  const location = new Location({
    name: req.body.name
  });
  res.send(await location.save());
});

module.exports = router;
