import { Log } from "../ranking/ranking";

// Fake logs for tests (and later, for screens before Supabase is connected).
// Same places as the sample data in docs/prototype.html.
//
// They're deliberately NOT in ranking order, so code that needs them in order
// has to sort them itself. Positions start at 0 within each reaction group.
//
// Expected order per category and reaction group:
//   hostel, loved:        Aegean Nest (0), Casa Selva (1), Jardín Azul (2)
//   hostel, fine:         Acropolis Backpackers (0), Hostal del Centro (1)
//   hostel, disliked:     Party House Puerto (0)
//   restaurant, loved:    Tacos Don Beto (0), Taverna Kostas (1)
//   restaurant, fine:     Café Luna (0)
//   beach, loved:         Kapsali Cove (0), Playa Escondida (1)
//   activity, loved:      Cenote snorkelling tour (0)
//   activity, fine:       Acropolis walking tour (0)
export const SAMPLE_LOGS: Log[] = [
  { id: "l_h3", placeName: "Jardín Azul Hostel", city: "Oaxaca", country: "Mexico", category: "hostel", reaction: "loved", position: 2 },
  { id: "l_h5", placeName: "Hostal del Centro", city: "Mexico City", country: "Mexico", category: "hostel", reaction: "fine", position: 1 },
  { id: "l_r2", placeName: "Taverna Kostas", city: "Paros", country: "Greece", category: "restaurant", reaction: "loved", position: 1 },
  { id: "l_h1", placeName: "Aegean Nest Hostel", city: "Paros", country: "Greece", category: "hostel", reaction: "loved", position: 0 },
  { id: "l_b2", placeName: "Playa Escondida", city: "Tulum", country: "Mexico", category: "beach", reaction: "loved", position: 1 },
  { id: "l_h6", placeName: "Party House Puerto", city: "Puerto Escondido", country: "Mexico", category: "hostel", reaction: "disliked", position: 0 },
  { id: "l_a2", placeName: "Acropolis walking tour", city: "Athens", country: "Greece", category: "activity", reaction: "fine", position: 0 },
  { id: "l_h4", placeName: "Acropolis Backpackers", city: "Athens", country: "Greece", category: "hostel", reaction: "fine", position: 0 },
  { id: "l_r1", placeName: "Tacos Don Beto", city: "Mexico City", country: "Mexico", category: "restaurant", reaction: "loved", position: 0 },
  { id: "l_h2", placeName: "Casa Selva Hostel", city: "Tulum", country: "Mexico", category: "hostel", reaction: "loved", position: 1 },
  { id: "l_b1", placeName: "Kapsali Cove", city: "Athens Riviera", country: "Greece", category: "beach", reaction: "loved", position: 0 },
  { id: "l_r3", placeName: "Café Luna", city: "Tulum", country: "Mexico", category: "restaurant", reaction: "fine", position: 0 },
  { id: "l_a1", placeName: "Cenote snorkelling tour", city: "Tulum", country: "Mexico", category: "activity", reaction: "loved", position: 0 },
];
