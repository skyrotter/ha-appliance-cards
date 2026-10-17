/*!
 * HA Appliance Cards
 * Lovelace cards for household appliances: washer, dryer, dishwasher,
 * water heater, oven, microwave, refrigerator, air fryer, coffee maker, TV, range hood, air conditioning,
 * heated towel rail, server rack, desktop PC, laptop, aquarium, Linky meter,
 * home battery, EV charger, robot vacuum, robot mower, pellet boiler…
 * MIT License
 */
(() => {
"use strict";
const VERSION = "1.17.0";

/* ------------------------------------------------------------------ */
/* i18n — strings live in src/i18n/<lang>.json, inlined by build.js    */
/* ------------------------------------------------------------------ */
const STRINGS = {
  "en": {
    "washer": "Washing machine",
    "dryer": "Dryer",
    "dishwasher": "Dishwasher",
    "water_heater": "Water heater",
    "oven": "Oven",
    "microwave": "Microwave",
    "air_fryer": "Air fryer",
    "coffee_maker": "Coffee maker",
    "tv": "TV",
    "range_hood": "Range hood",
    "towel_dryer": "Heated towel rail",
    "server_rack": "Server rack (homelab)",
    "desktop_pc": "Desktop PC",
    "laptop": "Laptop",
    "online": "Online",
    "f_max_power_rack": "Max load (W)",
    "f_power_solar": "Solar surplus power sensor (W)",
    "f_energy_solar": "Solar surplus energy sensor (kWh)",
    "solar_surplus": "Solar surplus",
    "mode_off": "Off",
    "wine_cooler": "Wine cooler",
    "f_max_temperature_wine": "Alert above (°C)",
    "f_show_modes": "Show mode buttons",
    "grid": "Grid",
    "energy_grid": "Grid energy",
    "energy_solar": "Solar energy",
    "ac_split": "Air conditioner (indoor)",
    "heat_pump": "Heat pump (outdoor unit)",
    "ac_dry": "Drying",
    "ac_fan": "Fan only",
    "at_target": "At target",
    "defrost": "Defrosting",
    "f_hvac": "Mode without climate entity",
    "screen_on": "On",
    "lights": "Lights only",
    "f_light": "Light entity (optional)",
    "brewing": "Brewing",
    "keep_warm": "Keeping warm",
    "f_style": "Coffee maker type",
    "f_warm_threshold": "Keep-warm / ready above (W)",
    "fridge": "Refrigerator",
    "pellet_stove": "Pellet stove",
    "pool_pump": "Pool pump",
    "printer_3d": "3D printer",
    "chest_freezer": "Chest freezer",
    "drawer_freezer": "Upright freezer",
    "solar": "Solar panels",
    "vmc": "Extractor fan",
    "hob": "Cooktop",
    "radiator": "Electric radiator",
    "comfort": "Comfort",
    "eco": "Eco",
    "frost": "Frost protection",
    "window_open": "Window open",
    "f_mode": "Mode entity (pilot wire, select…)",
    "f_window": "Window sensor",
    "f_max_power_rad": "Radiator power (W)",
    "cooking": "Cooking",
    "residual": "Residual heat",
    "zones": "Active zones",
    "f_zone_power": "Power of one zone (W)",
    "f_zone_1": "Front-left zone (level or W)",
    "f_zone_2": "Front-right zone",
    "f_zone_3": "Back-left zone",
    "f_zone_4": "Back-right zone",
    "f_residual_minutes": "Residual heat display (min)",
    "speed1": "Low speed",
    "speed2": "High speed",
    "humid": "High humidity",
    "humidity": "Humidity",
    "f_humidity": "Humidity sensor (%)",
    "f_high_threshold": "High speed above (W)",
    "f_humidity_max": "Humidity alert above (%)",
    "producing": "Producing",
    "low": "Low production",
    "night": "Night",
    "production": "Production",
    "savings": "Savings",
    "f_sun_entity": "Sun entity",
    "f_max_power_solar": "Peak power (Wp)",
    "printing": "Printing",
    "paused": "Paused",
    "failed": "Failed",
    "progress": "Progress",
    "nozzle": "Nozzle",
    "bed": "Bed",
    "f_bed_temperature": "Bed temperature sensor",
    "f_filament_color": "Filament color (CSS)",
    "filtering": "Filtering",
    "water": "Water",
    "today": "Today",
    "speed": "Speed",
    "f_runtime": "Filtration time today sensor",
    "f_speed": "Speed sensor (rpm or %)",
    "f_max_power": "Max power at full speed (W)",
    "ignition": "Igniting",
    "extinguishing": "Shutting down",
    "alarm": "Alarm",
    "pellets": "Pellets",
    "pellets_low": "Low pellets",
    "level": "Level",
    "f_power_level": "Heat level sensor (1-5)",
    "f_pellet_level": "Pellet level sensor (%)",
    "f_ignition_threshold": "Ignition above (W)",
    "f_pellet_alert": "Low pellet alert below (%)",
    "off": "Off",
    "idle": "Idle",
    "standby": "Standby",
    "running": "Running",
    "finished": "Finished",
    "heating": "Heating",
    "ready": "Ready",
    "preheating": "Preheating",
    "cooling": "Cooling",
    "door_open": "Door open",
    "unavailable": "Unavailable",
    "too_warm": "Too warm",
    "ph_wash": "Washing",
    "ph_rinse": "Rinsing",
    "ph_spin": "Spinning",
    "ph_dry": "Drying",
    "ph_cool": "Cooling down",
    "power": "Power",
    "energy": "Energy",
    "cost": "Cost",
    "remaining": "Remaining",
    "program": "Program",
    "temperature": "Temperature",
    "target": "Target",
    "fridge_temp": "Fridge",
    "freezer_temp": "Freezer",
    "ends_at": "Ends at",
    "toggle": "Turn on/off",
    "confirm_off": "Cycle running – click again to cut power",
    "f_name": "Name",
    "f_entity": "Status entity (switch, sensor, input_select…)",
    "f_power": "Power sensor (W)",
    "f_energy": "Energy sensor (kWh)",
    "f_cost": "Cost sensor",
    "f_remaining": "Remaining time sensor",
    "f_progress": "Progress sensor (%)",
    "f_program": "Program / phase sensor",
    "f_door": "Door sensor",
    "f_switch": "Switch to toggle (optional)",
    "f_threshold": "Running threshold (W)",
    "f_temperature": "Temperature sensor",
    "f_target_temperature": "Target temperature sensor",
    "f_freezer_temperature": "Freezer temperature sensor",
    "f_freezer_door": "Freezer door sensor",
    "f_max_temperature": "Fridge alert above (°C)",
    "f_freezer_max_temperature": "Freezer alert above (°C)",
    "f_color": "Accent color (CSS)",
    "f_animations": "Animations",
    "f_confirm_off": "Confirm before cutting power during a cycle",
    "err_need_entity": "Set at least one of `entity`, `power`, `switch` or `temperature`.",
    "of_peak": "of peak",
    "lcd_night": "NIGHT",
    "lcd_ignition": "IGNIT",
    "lcd_extinguishing": "COOL",
    "lcd_brewing": "BREW",
    "lcd_ready": "READY"
  },
  "de": {
    "washer": "Waschmaschine",
    "dryer": "Wäschetrockner",
    "dishwasher": "Geschirrspüler",
    "water_heater": "Warmwasserspeicher",
    "oven": "Backofen",
    "microwave": "Mikrowelle",
    "air_fryer": "Heißluftfritteuse",
    "coffee_maker": "Kaffeemaschine",
    "tv": "Fernseher",
    "range_hood": "Dunstabzugshaube",
    "towel_dryer": "Handtuchheizkörper",
    "server_rack": "Serverschrank (Homelab)",
    "desktop_pc": "Desktop-PC",
    "laptop": "Laptop",
    "online": "Online",
    "f_max_power_rack": "Maximale Last (W)",
    "f_power_solar": "Sensor Solarüberschuss-Leistung (W)",
    "f_energy_solar": "Sensor Solarüberschuss-Energie (kWh)",
    "solar_surplus": "Solarüberschuss",
    "mode_off": "Aus",
    "wine_cooler": "Weinkühlschrank",
    "f_max_temperature_wine": "Alarm über (°C)",
    "f_show_modes": "Modus-Tasten anzeigen",
    "grid": "Netz",
    "energy_grid": "Netzenergie",
    "energy_solar": "Solarenergie",
    "ac_split": "Klimagerät (Innengerät)",
    "heat_pump": "Wärmepumpe (Außengerät)",
    "ac_dry": "Entfeuchten",
    "ac_fan": "Nur Lüfter",
    "at_target": "Sollwert erreicht",
    "defrost": "Abtauen",
    "f_hvac": "Modus ohne Klima-Entität",
    "screen_on": "Ein",
    "lights": "Nur Beleuchtung",
    "f_light": "Licht-Entität (optional)",
    "brewing": "Brüht",
    "keep_warm": "Warmhalten",
    "f_style": "Kaffeemaschinentyp",
    "f_warm_threshold": "Warmhalten / bereit über (W)",
    "fridge": "Kühlschrank",
    "pellet_stove": "Pelletofen",
    "pool_pump": "Poolpumpe",
    "printer_3d": "3D-Drucker",
    "chest_freezer": "Gefriertruhe",
    "drawer_freezer": "Gefrierschrank",
    "solar": "Solarmodule",
    "vmc": "Badlüfter",
    "hob": "Kochfeld",
    "radiator": "Elektroheizkörper",
    "comfort": "Komfort",
    "eco": "Eco",
    "frost": "Frostschutz",
    "window_open": "Fenster offen",
    "f_mode": "Modus-Entität (Steuerleitung, Auswahl…)",
    "f_window": "Fenstersensor",
    "f_max_power_rad": "Heizkörperleistung (W)",
    "cooking": "Kochen",
    "residual": "Restwärme",
    "zones": "Aktive Kochzonen",
    "f_zone_power": "Leistung einer Kochzone (W)",
    "f_zone_1": "Kochzone vorne links (Stufe oder W)",
    "f_zone_2": "Kochzone vorne rechts",
    "f_zone_3": "Kochzone hinten links",
    "f_zone_4": "Kochzone hinten rechts",
    "f_residual_minutes": "Restwärmeanzeige (min)",
    "speed1": "Niedrige Stufe",
    "speed2": "Hohe Stufe",
    "humid": "Hohe Luftfeuchtigkeit",
    "humidity": "Luftfeuchtigkeit",
    "f_humidity": "Feuchtigkeitssensor (%)",
    "f_high_threshold": "Hohe Stufe über (W)",
    "f_humidity_max": "Feuchtigkeitsalarm über (%)",
    "producing": "Erzeugt",
    "low": "Geringe Erzeugung",
    "night": "Nacht",
    "production": "Erzeugung",
    "savings": "Ersparnis",
    "f_sun_entity": "Sonnen-Entität",
    "f_max_power_solar": "Spitzenleistung (Wp)",
    "printing": "Druckt",
    "paused": "Pausiert",
    "failed": "Fehlgeschlagen",
    "progress": "Fortschritt",
    "nozzle": "Düse",
    "bed": "Druckbett",
    "f_bed_temperature": "Sensor Druckbetttemperatur",
    "f_filament_color": "Filamentfarbe (CSS)",
    "filtering": "Filtert",
    "water": "Wasser",
    "today": "Heute",
    "speed": "Drehzahl",
    "f_runtime": "Sensor Filterlaufzeit heute",
    "f_speed": "Drehzahlsensor (U/min oder %)",
    "f_max_power": "Maximale Leistung bei voller Drehzahl (W)",
    "ignition": "Zündung",
    "extinguishing": "Abschaltung",
    "alarm": "Alarm",
    "pellets": "Pellets",
    "pellets_low": "Pellets niedrig",
    "level": "Stufe",
    "f_power_level": "Sensor Heizstufe (1-5)",
    "f_pellet_level": "Sensor Pelletfüllstand (%)",
    "f_ignition_threshold": "Zündung über (W)",
    "f_pellet_alert": "Pelletalarm unter (%)",
    "off": "Aus",
    "idle": "Inaktiv",
    "standby": "Standby",
    "running": "Läuft",
    "finished": "Fertig",
    "heating": "Heizt",
    "ready": "Bereit",
    "preheating": "Vorheizen",
    "cooling": "Kühlt",
    "door_open": "Tür offen",
    "unavailable": "Nicht verfügbar",
    "too_warm": "Zu warm",
    "ph_wash": "Waschen",
    "ph_rinse": "Spülen",
    "ph_spin": "Schleudern",
    "ph_dry": "Trocknen",
    "ph_cool": "Abkühlen",
    "power": "Leistung",
    "energy": "Energie",
    "cost": "Kosten",
    "remaining": "Restzeit",
    "program": "Programm",
    "temperature": "Temperatur",
    "target": "Sollwert",
    "fridge_temp": "Kühlschrank",
    "freezer_temp": "Gefrierfach",
    "ends_at": "Endet um",
    "toggle": "Ein/Aus",
    "confirm_off": "Zyklus läuft – erneut klicken zum Abschalten",
    "f_name": "Name",
    "f_entity": "Status-Entität (switch, sensor, input_select…)",
    "f_power": "Leistungssensor (W)",
    "f_energy": "Energiesensor (kWh)",
    "f_cost": "Kostensensor",
    "f_remaining": "Restzeitsensor",
    "f_progress": "Fortschrittssensor (%)",
    "f_program": "Programm-/Phasensensor",
    "f_door": "Türsensor",
    "f_switch": "Zu schaltender Schalter (optional)",
    "f_threshold": "Betriebsschwelle (W)",
    "f_temperature": "Temperatursensor",
    "f_target_temperature": "Sollwertsensor",
    "f_freezer_temperature": "Gefrierfach-Temperatursensor",
    "f_freezer_door": "Gefrierfach-Türsensor",
    "f_max_temperature": "Kühlschrankalarm über (°C)",
    "f_freezer_max_temperature": "Gefrierfachalarm über (°C)",
    "f_color": "Akzentfarbe (CSS)",
    "f_animations": "Animationen",
    "f_confirm_off": "Abschalten während eines Zyklus bestätigen",
    "err_need_entity": "Mindestens eines von `entity`, `power`, `switch` oder `temperature` angeben.",
    "of_peak": "der Spitzenleistung",
    "lcd_night": "NACHT",
    "lcd_ignition": "ZÜND",
    "lcd_extinguishing": "STOP",
    "lcd_brewing": "BRÜHT",
    "lcd_ready": "BEREIT"
  },
  "fr": {
    "washer": "Lave-linge",
    "dryer": "Sèche-linge",
    "dishwasher": "Lave-vaisselle",
    "water_heater": "Ballon d'eau chaude",
    "oven": "Four",
    "microwave": "Micro-ondes",
    "air_fryer": "Airfryer",
    "coffee_maker": "Cafetière",
    "tv": "Téléviseur",
    "range_hood": "Hotte aspirante",
    "towel_dryer": "Sèche-serviettes",
    "server_rack": "Baie informatique (homelab)",
    "desktop_pc": "PC fixe",
    "laptop": "PC portable",
    "online": "En ligne",
    "f_max_power_rack": "Charge max (W)",
    "f_power_solar": "Capteur de puissance surplus solaire (W)",
    "f_energy_solar": "Capteur d'énergie surplus solaire (kWh)",
    "solar_surplus": "Surplus solaire",
    "mode_off": "Arrêt",
    "wine_cooler": "Cave à vin",
    "f_max_temperature_wine": "Alerte au-dessus de (°C)",
    "f_show_modes": "Afficher les boutons de mode",
    "grid": "Réseau",
    "energy_grid": "Énergie réseau",
    "energy_solar": "Énergie solaire",
    "ac_split": "Climatiseur (split)",
    "heat_pump": "Pompe à chaleur (ext.)",
    "ac_dry": "Déshumidification",
    "ac_fan": "Ventilation",
    "at_target": "Consigne atteinte",
    "defrost": "Dégivrage",
    "f_hvac": "Mode sans entité climate",
    "screen_on": "Allumée",
    "lights": "Éclairage",
    "f_light": "Entité d'éclairage (optionnel)",
    "brewing": "Préparation du café",
    "keep_warm": "Maintien au chaud",
    "f_style": "Type de cafetière",
    "f_warm_threshold": "Maintien au chaud / prête au-dessus de (W)",
    "fridge": "Réfrigérateur",
    "pellet_stove": "Poêle à granulés",
    "pool_pump": "Pompe de piscine",
    "printer_3d": "Imprimante 3D",
    "chest_freezer": "Congélateur coffre",
    "drawer_freezer": "Congélateur à tiroirs",
    "solar": "Panneaux solaires",
    "vmc": "VMC",
    "hob": "Plaques de cuisson",
    "radiator": "Radiateur",
    "comfort": "Confort",
    "eco": "Éco",
    "frost": "Hors-gel",
    "window_open": "Fenêtre ouverte",
    "f_mode": "Entité de mode (fil pilote, liste…)",
    "f_window": "Capteur de fenêtre",
    "f_max_power_rad": "Puissance du radiateur (W)",
    "cooking": "Cuisson",
    "residual": "Chaleur résiduelle",
    "zones": "Foyers actifs",
    "f_zone_power": "Puissance d'un foyer (W)",
    "f_zone_1": "Foyer avant gauche (niveau ou W)",
    "f_zone_2": "Foyer avant droit",
    "f_zone_3": "Foyer arrière gauche",
    "f_zone_4": "Foyer arrière droit",
    "f_residual_minutes": "Affichage chaleur résiduelle (min)",
    "speed1": "Petite vitesse",
    "speed2": "Grande vitesse",
    "humid": "Humidité élevée",
    "humidity": "Humidité",
    "f_humidity": "Capteur d'humidité (%)",
    "f_high_threshold": "Grande vitesse au-dessus de (W)",
    "f_humidity_max": "Alerte humidité au-dessus de (%)",
    "producing": "Production",
    "low": "Production faible",
    "night": "Nuit",
    "production": "Production",
    "savings": "Économies",
    "f_sun_entity": "Entité soleil",
    "f_max_power_solar": "Puissance crête (Wc)",
    "printing": "Impression",
    "paused": "En pause",
    "failed": "Échec",
    "progress": "Progression",
    "nozzle": "Buse",
    "bed": "Plateau",
    "f_bed_temperature": "Capteur de température du plateau",
    "f_filament_color": "Couleur du filament (CSS)",
    "filtering": "Filtration",
    "water": "Eau",
    "today": "Aujourd'hui",
    "speed": "Vitesse",
    "f_runtime": "Capteur de durée de filtration du jour",
    "f_speed": "Capteur de vitesse (tr/min ou %)",
    "f_max_power": "Puissance max à pleine vitesse (W)",
    "ignition": "Allumage",
    "extinguishing": "Extinction",
    "alarm": "Alarme",
    "pellets": "Granulés",
    "pellets_low": "Granulés bas",
    "level": "Niveau",
    "f_power_level": "Capteur de puissance de chauffe (1-5)",
    "f_pellet_level": "Capteur de niveau de granulés (%)",
    "f_ignition_threshold": "Allumage au-dessus de (W)",
    "f_pellet_alert": "Alerte granulés sous (%)",
    "off": "Éteint",
    "idle": "Inactif",
    "standby": "Veille",
    "running": "En cours",
    "finished": "Terminé",
    "heating": "En chauffe",
    "ready": "Prêt",
    "preheating": "Préchauffage",
    "cooling": "Refroidit",
    "door_open": "Porte ouverte",
    "unavailable": "Indisponible",
    "too_warm": "Trop chaud",
    "ph_wash": "Lavage",
    "ph_rinse": "Rinçage",
    "ph_spin": "Essorage",
    "ph_dry": "Séchage",
    "ph_cool": "Refroidissement",
    "power": "Puissance",
    "energy": "Énergie",
    "cost": "Coût",
    "remaining": "Restant",
    "program": "Programme",
    "temperature": "Température",
    "target": "Consigne",
    "fridge_temp": "Frigo",
    "freezer_temp": "Congélateur",
    "ends_at": "Fin à",
    "toggle": "Allumer/éteindre",
    "confirm_off": "Cycle en cours – cliquer encore pour couper",
    "f_name": "Nom",
    "f_entity": "Entité d'état (switch, sensor, input_select…)",
    "f_power": "Capteur de puissance (W)",
    "f_energy": "Capteur d'énergie (kWh)",
    "f_cost": "Capteur de coût",
    "f_remaining": "Capteur de temps restant",
    "f_progress": "Capteur de progression (%)",
    "f_program": "Capteur de programme / phase",
    "f_door": "Capteur de porte",
    "f_switch": "Interrupteur à piloter (optionnel)",
    "f_threshold": "Seuil de fonctionnement (W)",
    "f_temperature": "Capteur de température",
    "f_target_temperature": "Capteur de consigne",
    "f_freezer_temperature": "Capteur température congélateur",
    "f_freezer_door": "Capteur porte congélateur",
    "f_max_temperature": "Alerte frigo au-dessus de (°C)",
    "f_freezer_max_temperature": "Alerte congélateur au-dessus de (°C)",
    "f_color": "Couleur d'accent (CSS)",
    "f_animations": "Animations",
    "f_confirm_off": "Confirmer avant de couper pendant un cycle",
    "err_need_entity": "Indique au moins `entity`, `power`, `switch` ou `temperature`.",
    "of_peak": "de la crête",
    "lcd_night": "NUIT",
    "lcd_ignition": "ALLUM",
    "lcd_extinguishing": "EXTIN",
    "lcd_brewing": "CAFE",
    "lcd_ready": "PRET"
  },
  "nb": {
    "washer": "Vaskemaskin",
    "dryer": "Tørketrommel",
    "dishwasher": "Oppvaskmaskin",
    "water_heater": "Varmtvannsbereder",
    "oven": "Stekeovn",
    "microwave": "Mikrobølgeovn",
    "air_fryer": "Airfryer",
    "coffee_maker": "Kaffetrakter",
    "tv": "TV",
    "range_hood": "Kjøkkenvifte",
    "towel_dryer": "Håndklevarmer",
    "server_rack": "Serverrack (homelab)",
    "desktop_pc": "Stasjonær PC",
    "laptop": "Bærbar PC",
    "online": "Tilkoblet",
    "f_max_power_rack": "Maks last (W)",
    "f_power_solar": "Sensor for soloverskudd (W)",
    "f_energy_solar": "Energisensor for soloverskudd (kWh)",
    "solar_surplus": "Soloverskudd",
    "mode_off": "Av",
    "wine_cooler": "Vinkjøleskap",
    "f_max_temperature_wine": "Varsel over (°C)",
    "f_show_modes": "Vis modusknapper",
    "grid": "Strømnett",
    "energy_grid": "Energi fra nettet",
    "energy_solar": "Solenergi",
    "ac_split": "Klimaanlegg (innedel)",
    "heat_pump": "Varmepumpe (utedel)",
    "ac_dry": "Avfukting",
    "ac_fan": "Bare vifte",
    "at_target": "Ved måltemperatur",
    "defrost": "Avriming",
    "f_hvac": "Modus uten klima-entitet",
    "screen_on": "På",
    "lights": "Bare lys",
    "f_light": "Lys-entitet (valgfri)",
    "brewing": "Trakter",
    "keep_warm": "Holder varm",
    "f_style": "Type kaffetrakter",
    "f_warm_threshold": "Holder varm / klar over (W)",
    "fridge": "Kjøleskap",
    "pellet_stove": "Pelletsovn",
    "pool_pump": "Bassengpumpe",
    "printer_3d": "3D-skriver",
    "chest_freezer": "Fryseboks",
    "drawer_freezer": "Fryseskap",
    "solar": "Solcellepaneler",
    "vmc": "Avtrekksvifte",
    "hob": "Koketopp",
    "radiator": "Panelovn",
    "comfort": "Komfort",
    "eco": "Øko",
    "frost": "Frostsikring",
    "window_open": "Vindu åpent",
    "f_mode": "Modus-entitet (styretråd, select…)",
    "f_window": "Vindussensor",
    "f_max_power_rad": "Ovnens effekt (W)",
    "cooking": "Koker",
    "residual": "Restvarme",
    "zones": "Aktive soner",
    "f_zone_power": "Effekt for én sone (W)",
    "f_zone_1": "Sone foran venstre (nivå eller W)",
    "f_zone_2": "Sone foran høyre",
    "f_zone_3": "Sone bak venstre",
    "f_zone_4": "Sone bak høyre",
    "f_residual_minutes": "Vis restvarme i (min)",
    "speed1": "Lav hastighet",
    "speed2": "Høy hastighet",
    "humid": "Høy fukt",
    "humidity": "Fuktighet",
    "f_humidity": "Fuktsensor (%)",
    "f_high_threshold": "Høy hastighet over (W)",
    "f_humidity_max": "Fuktvarsel over (%)",
    "producing": "Produserer",
    "low": "Lav produksjon",
    "night": "Natt",
    "production": "Produksjon",
    "savings": "Besparelse",
    "f_sun_entity": "Sol-entitet",
    "f_max_power_solar": "Toppeffekt (Wp)",
    "printing": "Skriver ut",
    "paused": "Pause",
    "failed": "Feilet",
    "progress": "Fremdrift",
    "nozzle": "Dyse",
    "bed": "Plate",
    "f_bed_temperature": "Sensor for platetemperatur",
    "f_filament_color": "Filamentfarge (CSS)",
    "filtering": "Filtrerer",
    "water": "Vann",
    "today": "I dag",
    "speed": "Hastighet",
    "f_runtime": "Sensor for filtreringstid i dag",
    "f_speed": "Hastighetssensor (rpm eller %)",
    "f_max_power": "Maks effekt ved full hastighet (W)",
    "ignition": "Tenner",
    "extinguishing": "Slukker",
    "alarm": "Alarm",
    "pellets": "Pellets",
    "pellets_low": "Lite pellets",
    "level": "Nivå",
    "f_power_level": "Sensor for varmenivå (1-5)",
    "f_pellet_level": "Sensor for pelletsnivå (%)",
    "f_ignition_threshold": "Tenning over (W)",
    "f_pellet_alert": "Varsel lite pellets under (%)",
    "off": "Av",
    "idle": "Inaktiv",
    "standby": "Hvilemodus",
    "running": "I gang",
    "finished": "Ferdig",
    "heating": "Varmer",
    "ready": "Klar",
    "preheating": "Forvarmer",
    "cooling": "Kjøler",
    "door_open": "Døren er åpen",
    "unavailable": "Utilgjengelig",
    "too_warm": "For varmt",
    "ph_wash": "Vasker",
    "ph_rinse": "Skyller",
    "ph_spin": "Sentrifugerer",
    "ph_dry": "Tørker",
    "ph_cool": "Kjøler ned",
    "power": "Effekt",
    "energy": "Energi",
    "cost": "Kostnad",
    "remaining": "Gjenstår",
    "program": "Program",
    "temperature": "Temperatur",
    "target": "Mål",
    "fridge_temp": "Kjøleskap",
    "freezer_temp": "Fryser",
    "ends_at": "Ferdig kl.",
    "toggle": "Slå på/av",
    "confirm_off": "Syklus pågår – trykk igjen for å bryte strømmen",
    "f_name": "Navn",
    "f_entity": "Status-entitet (switch, sensor, input_select…)",
    "f_power": "Effektsensor (W)",
    "f_energy": "Energisensor (kWh)",
    "f_cost": "Kostnadssensor",
    "f_remaining": "Sensor for gjenstående tid",
    "f_progress": "Fremdriftssensor (%)",
    "f_program": "Sensor for program / fase",
    "f_door": "Dørsensor",
    "f_switch": "Bryter som slås av/på (valgfri)",
    "f_threshold": "Terskel for «i gang» (W)",
    "f_temperature": "Temperatursensor",
    "f_target_temperature": "Sensor for måltemperatur",
    "f_freezer_temperature": "Temperatursensor fryser",
    "f_freezer_door": "Dørsensor fryser",
    "f_max_temperature": "Varsel kjøleskap over (°C)",
    "f_freezer_max_temperature": "Varsel fryser over (°C)",
    "f_color": "Aksentfarge (CSS)",
    "f_animations": "Animasjoner",
    "f_confirm_off": "Bekreft før strømmen brytes under en syklus",
    "err_need_entity": "Angi minst én av `entity`, `power`, `switch` eller `temperature`.",
    "of_peak": "av topp",
    "lcd_night": "NATT",
    "lcd_ignition": "TENN",
    "lcd_extinguishing": "KJØL",
    "lcd_brewing": "TRAKT",
    "lcd_ready": "KLAR"
  }
};
const lang = (hass) => {
  let l = ((hass && (hass.locale?.language || hass.language)) || document.documentElement.lang || "en").toLowerCase().slice(0, 2);
  if (l === "no" || l === "nn") l = "nb"; // norvégien : no / nn → nb (bokmål)
  return STRINGS[l] ? l : "en";
};
const tr = (hass, key) => STRINGS[lang(hass)][key] ?? STRINGS.en[key] ?? key;

/* ------------------------------------------------------------------ */
/* Realistic illustrations — viewBox 0 0 120 140, "ID" = unique prefix  */
/* ------------------------------------------------------------------ */
const DEFS = `
<linearGradient id="ID-body" x1="0" x2="1"><stop offset="0" stop-color="#eef1f4"/><stop offset=".5" stop-color="#ffffff"/><stop offset="1" stop-color="#d4d9df"/></linearGradient>
<linearGradient id="ID-panel" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f3f5f7"/><stop offset="1" stop-color="#d9dee3"/></linearGradient>
<linearGradient id="ID-chrome" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fbfcfd"/><stop offset=".3" stop-color="#a3abb4"/><stop offset=".55" stop-color="#eef1f4"/><stop offset=".8" stop-color="#8d959f"/><stop offset="1" stop-color="#c9ced4"/></linearGradient>
<linearGradient id="ID-inox" x1="0" x2="1"><stop offset="0" stop-color="#b9bfc6"/><stop offset=".22" stop-color="#eceff2"/><stop offset=".5" stop-color="#c5cad0"/><stop offset=".75" stop-color="#e6e9ec"/><stop offset="1" stop-color="#a8afb7"/></linearGradient>
<radialGradient id="ID-steel" cx=".42" cy=".38" r=".8"><stop offset="0" stop-color="#eef1f3"/><stop offset=".55" stop-color="#aab2ba"/><stop offset="1" stop-color="#5f6770"/></radialGradient>
<linearGradient id="ID-gloss" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/></linearGradient>
<radialGradient id="ID-shadow"><stop offset="0" stop-color="#000" stop-opacity=".38"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>
<linearGradient id="ID-dark" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b3138"/><stop offset="1" stop-color="#101317"/></linearGradient>
<radialGradient id="ID-warm" cx=".5" cy=".35" r=".75"><stop offset="0" stop-color="#ffe2a3"/><stop offset=".6" stop-color="#f3a54a" stop-opacity=".75"/><stop offset="1" stop-color="#7a3b12" stop-opacity=".2"/></radialGradient>
<pattern id="ID-holes" width="4.5" height="4.5" patternUnits="userSpaceOnUse"><circle cx="2.25" cy="2.25" r=".75" fill="#4f5760" opacity=".55"/></pattern>
<pattern id="ID-mesh" width="2.4" height="2.4" patternUnits="userSpaceOnUse"><circle cx="1.2" cy="1.2" r=".55" fill="#000" opacity=".45"/></pattern>`;

const lcd = (x, y, w, h) => `
<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="1.5" fill="#0c1720" stroke="#8f98a2" stroke-width=".6"/>
<text class="lcd" x="${x + w / 2}" y="${y + h / 2 + 2.5}" text-anchor="middle">OFF</text>`;

const clothes = `
<g class="clothes">
  <path d="M38 92 q8 -7 17 -2 q4 6 -3 9 q-8 3 -14 -7z" fill="#e5484d"/>
  <path d="M52 95 q9 -9 19 -3 q3 7 -6 9 q-9 2 -13 -6z" fill="#3e8ed0"/>
  <path d="M66 90 q8 -4 13 3 q-1 7 -9 6 q-6 -2 -4 -9z" fill="#f2c94c"/>
  <path d="M44 99 q10 -3 18 3 q-4 6 -12 5 q-6 -2 -6 -8z" fill="#9b6ad6"/>
  <path d="M60 101 q8 -5 15 1 q-3 6 -10 5z" fill="#3fbf7f"/>
  <path d="M41 86 q5 -4 10 0 q-2 4 -6 4z" fill="#ff8fab"/>
</g>`;

const porthole = (cx, cy, inner, tag) => `
<circle cx="${cx}" cy="${cy}" r="${inner + 9}" fill="#000" opacity=".08"/>
<circle cx="${cx}" cy="${cy}" r="${inner + 7}" fill="url(#ID-chrome)"/>
<circle cx="${cx}" cy="${cy}" r="${inner + 3}" fill="#2a2f35"/>
<circle cx="${cx}" cy="${cy}" r="${inner}" fill="url(#ID-steel)"/>
<g clip-path="url(#ID-win)">${tag}</g>
<circle cx="${cx}" cy="${cy}" r="${inner}" fill="url(#ID-gloss)"/>
<path d="M${cx - inner * 0.72} ${cy - inner * 0.42} a${inner * 0.85} ${inner * 0.85} 0 0 1 ${inner * 0.62} -${inner * 0.48}" stroke="#fff" stroke-opacity=".75" stroke-width="2.4" fill="none" stroke-linecap="round"/>
<circle cx="${cx}" cy="${cy}" r="${inner}" fill="none" stroke="#000" stroke-opacity=".25"/>`;

const drumInside = (cx, cy, r) => `
<g class="drum">
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#ID-holes)"/>
  <circle cx="${cx}" cy="${cy}" r="${r * 0.35}" fill="none" stroke="#8b939c" stroke-opacity=".5"/>
  <path d="M${cx} ${cy - r} l-3 7 h6z M${cx - r * 0.866} ${cy + r / 2} l6.5 -1 l-3 -5.5z M${cx + r * 0.866} ${cy + r / 2} l-6.5 -1 l3 -5.5z" fill="#c9cfd5" stroke="#7d858e" stroke-width=".5"/>
  ${clothes}
</g>`;

const feet = (xs, y) => xs.map((x) => `<rect x="${x}" y="${y}" width="10" height="7" rx="1.5" fill="#3a3f45"/>`).join("");

const cfStyle = (c) => ({ filtre: "filtre", filter: "filtre", drip: "filtre", dosette: "dosette", dosettes: "dosette", pod: "dosette", capsule: "dosette", capsules: "dosette", senseo: "dosette", nespresso: "dosette", expresso: "expresso", espresso: "expresso", grains: "expresso", bean: "expresso", beans: "expresso" }[String(c?.style || "filtre").toLowerCase()] || "filtre");
const SVG = {};

SVG.ac_split = () => `
<defs>${DEFS}
<radialGradient id="ID-acheat" cx=".5" cy=".3" r=".6"><stop offset="0" stop-color="#ff9a4a" stop-opacity=".45"/><stop offset=".6" stop-color="#ff7a2e" stop-opacity=".15"/><stop offset="1" stop-color="#ff7a2e" stop-opacity="0"/></radialGradient>
<linearGradient id="ID-split" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".7" stop-color="#eef1f4"/><stop offset="1" stop-color="#cfd5db"/></linearGradient></defs>
<ellipse class="ac-warm" cx="60" cy="98" rx="54" ry="30" fill="url(#ID-acheat)"/>
<g class="ac-waves"><path d="M30 122q4-4 0-8t0-8"/><path d="M60 126q4-4 0-8t0-8"/><path d="M90 122q4-4 0-8t0-8"/></g>
<g class="ac-air">
  <path d="M22 84q-6 14 0 26t-2 22"/><path d="M40 84q-4 14 2 26t0 22"/><path d="M60 84q-3 14 3 26t-1 22"/>
  <path d="M80 84q-2 14 4 26t0 22"/><path d="M98 84q0 14 6 26t2 22"/>
</g>
<g class="ac-drops"><circle cx="34" cy="90" r="1.3"/><circle cx="56" cy="92" r="1.3"/><circle cx="76" cy="90" r="1.3"/><circle cx="92" cy="93" r="1.3"/></g>
<path d="M6 54q0-10 10-10h88q10 0 10 10v18q0 6-6 8h-96q-6-2-6-8z" fill="url(#ID-split)" stroke="#aab2ba" stroke-width=".7"/>
<path d="M14 48h92" stroke="#c4cbd2" stroke-width=".6"/>
<path d="M16 51h88M16 53.5h88" stroke="#d7dce1" stroke-width=".5"/>
<path d="M10 70h100" stroke="#fff" stroke-opacity=".9" stroke-width="1"/>
<rect class="ac-slot" x="12" y="73.5" width="96" height="5" rx="2.5" fill="#2a2f35"/>
<g class="ac-flap"><path d="M12 74.5h96q0 4.5-4 5h-88q-4-.5-4-5z" fill="#f2f4f6" stroke="#aab2ba" stroke-width=".5"/></g>
<rect x="84" y="58" width="22" height="9" rx="2" fill="#0c1720" opacity=".9"/>
<text class="lcd" x="95" y="64.6" text-anchor="middle">OFF</text>
<g class="ac-ico ico-cool" stroke="#4fc3f7" stroke-width=".9" stroke-linecap="round"><path d="M78 59v8M74.5 61l7 4M74.5 65l7-4"/></g>
<g class="ac-ico ico-heat"><circle cx="78" cy="63" r="2" fill="#ff8a3d"/><path d="M78 58.6v1.2M78 66.2v1.2M73.6 63h1.2M81.2 63h1.2M74.9 59.9l.8.8M80.3 65.3l.8.8M74.9 66.1l.8-.8M80.3 60.7l.8-.8" stroke="#ff8a3d" stroke-width=".8" stroke-linecap="round"/></g>
<g class="ac-ico ico-dry"><path d="M78 59q-3 4-3 5.6a3 3 0 0 0 6 0q0-1.6-3-5.6z" fill="#7fd6c0"/></g>
<g class="ac-ico ico-fan" stroke="#cfd6dd" stroke-width="1" stroke-linecap="round" fill="none"><path d="M78 63q-3-4 0-4.5M78 63q4-1 3.5 2.4M78 63q-1 4-4 2"/></g>
<circle class="led l1" cx="18" cy="64" r="1.1"/>`;

SVG.air_fryer = () => `
<defs>${DEFS}<clipPath id="ID-w1"><rect x="14" y="58" width="39" height="31" rx="3"/></clipPath><clipPath id="ID-w2"><rect x="67" y="58" width="39" height="31" rx="3"/></clipPath>
<linearGradient id="ID-cav" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a3f45"/><stop offset="1" stop-color="#15181b"/></linearGradient>
<linearGradient id="ID-glass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#272c32"/><stop offset="1" stop-color="#0b0d10"/></linearGradient>
<linearGradient id="ID-fry" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd76a"/><stop offset="1" stop-color="#e09b2d"/></linearGradient>
<radialGradient id="ID-nug" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#e9a54c"/><stop offset="1" stop-color="#9c5a1e"/></radialGradient></defs>
<ellipse cx="60" cy="130" rx="56" ry="5" fill="url(#ID-shadow)"/>
<g class="af-steam"><path d="M42 23q-3-5 0-9t0-9"/><path d="M60 23q-3-5 0-9t0-9"/><path d="M78 23q-3-5 0-9t0-9"/></g>
<rect x="10" y="123" width="12" height="5" rx="1.5" fill="#15181b"/><rect x="98" y="123" width="12" height="5" rx="1.5" fill="#15181b"/>
<rect x="5" y="26" width="110" height="100" rx="9" fill="url(#ID-dark)" stroke="#05070a" stroke-width=".8"/>
<path d="M14 27.5h92" stroke="#4a525b" stroke-width=".8" stroke-linecap="round"/>
<rect x="9" y="30" width="102" height="17" rx="4" fill="url(#ID-glass)" stroke="#3a424b" stroke-width=".5"/>
<path d="M11 32h40" stroke="#fff" stroke-opacity=".08" stroke-width="1.2" stroke-linecap="round"/>
${lcd(46, 33, 28, 11)}
<circle class="led l1" cx="41" cy="38.5" r="1.2"/>
<g fill="none" stroke="#7d8792" stroke-width=".7">
  <circle cx="17" cy="38.5" r="2.6"/><path d="M15.6 38.5h2.8"/>
  <circle cx="25" cy="38.5" r="2.6"/><path d="M23.6 38.5h2.8M25 37.1v2.8"/>
  <circle cx="33" cy="38.5" r="2.6"/><path d="M32 37.4l2 1.1l-2 1.1z"/>
  <circle cx="87" cy="38.5" r="2.6"/><path d="M86 37.4l2 1.1l-2 1.1z"/>
  <circle cx="95" cy="38.5" r="2.6"/><path d="M93.6 38.5h2.8M95 37.1v2.8"/>
  <circle cx="103" cy="38.5" r="2.6"/><path d="M103 36.8v1.6M101.5 37.6a2 2 0 1 0 3 0"/>
</g>
<rect x="9" y="52" width="49" height="69" rx="5" fill="url(#ID-inox)" stroke="#6f7780" stroke-width=".6"/>
<rect x="62" y="52" width="49" height="69" rx="5" fill="url(#ID-inox)" stroke="#6f7780" stroke-width=".6"/>
<rect x="12.5" y="56.5" width="42" height="34" rx="4" fill="#15181b"/>
<rect x="65.5" y="56.5" width="42" height="34" rx="4" fill="#15181b"/>
<rect x="14" y="58" width="39" height="31" rx="3" fill="url(#ID-cav)"/>
<rect x="67" y="58" width="39" height="31" rx="3" fill="url(#ID-cav)"/>
<g clip-path="url(#ID-w1)">
  <rect class="ilight" x="14" y="58" width="39" height="31" fill="url(#ID-warm)"/>
  <path class="af-coil" d="M16 61h3l1.8 2l1.8-2l1.8 2l1.8-2l1.8 2l1.8-2l1.8 2l1.8-2l1.8 2l1.8-2l1.8 2l1.8-2l1.8 2h3"/>
  <g class="af-air"><path d="M17 74q7-8 16-3t16-2"/><path d="M17 68q8 5 16 0t16 1"/></g>
  <path d="M15 84h37v5h-37z" fill="url(#ID-mesh)" opacity=".9"/>
  <g class="fries">
    <rect x="18" y="80" width="15" height="3" rx="1" fill="url(#ID-fry)" transform="rotate(-14 25 81)"/>
    <rect x="27" y="78.5" width="14" height="3" rx="1" fill="url(#ID-fry)" transform="rotate(18 34 80)"/>
    <rect x="35" y="80.5" width="15" height="3" rx="1" fill="url(#ID-fry)" transform="rotate(-6 42 82)"/>
    <rect x="21" y="83" width="13" height="3" rx="1" fill="url(#ID-fry)" transform="rotate(8 27 84)"/>
    <rect x="31" y="83.5" width="15" height="3" rx="1" fill="url(#ID-fry)" transform="rotate(-20 38 85)"/>
    <rect x="24" y="76.5" width="12" height="2.8" rx="1" fill="url(#ID-fry)" transform="rotate(32 30 78)"/>
    <rect x="40" y="77.5" width="10" height="2.8" rx="1" fill="url(#ID-fry)" transform="rotate(-38 45 79)"/>
  </g>
</g>
<g clip-path="url(#ID-w2)">
  <rect class="ilight" x="67" y="58" width="39" height="31" fill="url(#ID-warm)"/>
  <path class="af-coil" d="M69 61h3l1.8 2l1.8-2l1.8 2l1.8-2l1.8 2l1.8-2l1.8 2l1.8-2l1.8 2l1.8-2l1.8 2l1.8-2l1.8 2h3"/>
  <g class="af-air"><path d="M70 74q7-8 16-3t16-2"/><path d="M70 68q8 5 16 0t16 1"/></g>
  <path d="M68 84h37v5h-37z" fill="url(#ID-mesh)" opacity=".9"/>
  <g class="nuggets">
    <ellipse cx="75" cy="83" rx="5" ry="3.4" fill="url(#ID-nug)"/>
    <ellipse cx="85" cy="84" rx="5.4" ry="3.2" fill="url(#ID-nug)" transform="rotate(-10 85 84)"/>
    <ellipse cx="96" cy="83" rx="5" ry="3.5" fill="url(#ID-nug)" transform="rotate(12 96 83)"/>
    <ellipse cx="80" cy="79" rx="4.6" ry="3" fill="url(#ID-nug)" transform="rotate(15 80 79)"/>
    <ellipse cx="91" cy="79" rx="4.8" ry="3.1" fill="url(#ID-nug)" transform="rotate(-18 91 79)"/>
    <path d="M73 82.5q2-1 4 0M84 83.5q2-1 4 0M94 82q2-1 4 0M89 78.5q2-1 4 0" stroke="#7a3f12" stroke-width=".6" fill="none" opacity=".7"/>
  </g>
</g>
<path d="M14 72L30 58h9L14 80z" fill="#fff" opacity=".1"/>
<path d="M67 72L83 58h9L67 80z" fill="#fff" opacity=".1"/>
<rect x="14" y="58" width="39" height="31" rx="3" fill="none" stroke="#000" stroke-opacity=".35"/>
<rect x="67" y="58" width="39" height="31" rx="3" fill="none" stroke="#000" stroke-opacity=".35"/>
<rect x="17" y="96" width="33" height="19" rx="4" fill="url(#ID-dark)" stroke="#05070a" stroke-width=".5"/>
<rect x="70" y="96" width="33" height="19" rx="4" fill="url(#ID-dark)" stroke="#05070a" stroke-width=".5"/>
<path d="M20 98.5h27M73 98.5h27" stroke="#fff" stroke-opacity=".14" stroke-width="1" stroke-linecap="round"/>
<rect x="29" y="105" width="9" height="2.2" rx="1.1" fill="#59616b"/><rect x="82" y="105" width="9" height="2.2" rx="1.1" fill="#59616b"/>
<path d="M11 55l14-1M64 55l14-1" stroke="#fff" stroke-opacity=".5" stroke-width=".8" stroke-linecap="round"/>`;

SVG.chest_freezer = () => `
<defs>${DEFS}
<linearGradient id="ID-side" x1="0" x2="1"><stop offset="0" stop-color="#cfd5db"/><stop offset="1" stop-color="#aeb6be"/></linearGradient>
<linearGradient id="ID-top" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#e3e8ec"/></linearGradient>
<linearGradient id="ID-cav" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfe6f5"/><stop offset="1" stop-color="#f4fbff"/></linearGradient>
<linearGradient id="ID-liner" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9edf0"/><stop offset="1" stop-color="#c9d0d6"/></linearGradient></defs>
<ellipse cx="62" cy="131" rx="54" ry="4.5" fill="url(#ID-shadow)"/>
<rect x="12" y="126" width="9" height="5" rx="1.5" fill="#3a3f45"/><rect x="88" y="126" width="9" height="5" rx="1.5" fill="#3a3f45"/>
<path d="M100 73L112 61V117L100 129Z" fill="url(#ID-side)"/>
<path d="M103 112l6-6M103 116l6-6M103 120l6-6" stroke="#8f979f" stroke-width=".7"/>
<rect x="8" y="73" width="92" height="56" rx="2.5" fill="url(#ID-body)" stroke="#bfc6ce" stroke-width=".7"/>
<rect x="8" y="121" width="92" height="8" rx="2" fill="#e2e6ea"/>
<path d="M76 123.5h20M76 125.5h20M76 127.5h20" stroke="#aab1b9" stroke-width=".6"/>
<rect x="68" y="79" width="28" height="11" rx="2" fill="#0c1720" stroke="#8f98a2" stroke-width=".5"/>
<text class="lcd" x="84.5" y="86.8" text-anchor="middle">--°</text>
<g class="flake"><path d="M72 81.5v6M69.4 83l5.2 3M69.4 86l5.2-3" stroke-width=".8" stroke-linecap="round"/></g>
<circle class="led l1" cx="72" cy="94" r="1.2"/><circle class="led l2" cx="77" cy="94" r="1.2"/>
<g class="cavity">
  <path d="M10 73L98 73L110 61L22 61Z" fill="url(#ID-cav)"/>
  <path d="M10 73L98 73L110 61L22 61Z" fill="#fffbe6" class="clight"/>
  <path d="M22 61L110 61M60 61L50 73" stroke="#9fc3db" stroke-width=".6"/>
  <path d="M18 71l3-4h14l-3 4z" fill="#e5484d"/><path d="M33 71l3-4h12l-3 4z" fill="#3e8ed0"/>
  <path d="M28 66l2.5-3h10l-2.5 3z" fill="#f2c94c"/><path d="M42 66l2.5-3h9l-2.5 3z" fill="#ffffff" stroke="#c9d3dc" stroke-width=".4"/>
  <path d="M58 70l4-5h16l-4 5z" fill="#9fd356" opacity=".9"/><path d="M63 64l2-2.5h10l-2 2.5z" fill="#ff8f3d"/>
  <path d="M80 70l4-5h12l-4 5z" fill="#c4c9cf" stroke="#9aa3ad" stroke-width=".4"/>
</g>
<g class="cold-out"><circle cx="40" cy="58" r="2"/><circle cx="58" cy="56" r="2.4"/><circle cx="76" cy="58" r="1.8"/><circle cx="94" cy="57" r="2.1"/></g>
<g class="lid">
  <path class="lid-side" d="M100 66L112 54L112 61L100 73Z" fill="url(#ID-side)"/>
  <path class="lid-top" d="M8 66L100 66L112 54L20 54Z" fill="url(#ID-top)" stroke="#bfc6ce" stroke-width=".6"/>
  <path class="lid-under" d="M20 54L112 54L112 54L20 54Z" fill="url(#ID-liner)" stroke="#9aa3ad" stroke-width=".6"/>
  <path class="lid-front" d="M8 66L100 66L100 73L8 73Z" fill="#f1f3f5" stroke="#bfc6ce" stroke-width=".6"/>
</g>
<rect class="lid-handle" x="44" y="68.5" width="20" height="2.6" rx="1.3" fill="#7d858e"/>
<g class="mist"><circle cx="30" cy="131" r="1.1"/><circle cx="46" cy="132" r=".9"/><circle cx="64" cy="131" r="1.2"/><circle cx="80" cy="132" r=".9"/></g>`;

SVG.coffee_maker = (c) => {
    const st = cfStyle(c);
    const defs = `<defs>${DEFS}
<linearGradient id="ID-glassv" x1="0" x2="1"><stop offset="0" stop-color="#e8f1f7" stop-opacity=".35"/><stop offset=".3" stop-color="#ffffff" stop-opacity=".12"/><stop offset="1" stop-color="#c9d6e0" stop-opacity=".3"/></linearGradient>
<linearGradient id="ID-cof" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7a4a24"/><stop offset=".15" stop-color="#4a2a14"/><stop offset="1" stop-color="#2a170b"/></linearGradient>
<linearGradient id="ID-mug" x1="0" x2="1"><stop offset="0" stop-color="#e9ecef"/><stop offset=".45" stop-color="#ffffff"/><stop offset="1" stop-color="#cfd5db"/></linearGradient>
<linearGradient id="ID-tank" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe6ff" stop-opacity=".55"/><stop offset="1" stop-color="#5fb4ea" stop-opacity=".7"/></linearGradient>`;
    const steam = (xs, y) => `<g class="cf-steam">${xs.map((x) => `<path d="M${x} ${y}q-3-5 0-9t0-9"/>`).join("")}</g>`;
    if (st === "dosette") return `${defs}<clipPath id="ID-cup"><rect x="41" y="84" width="30" height="20" rx="2"/></clipPath></defs>
<g class="cf s-dosette">
<ellipse cx="60" cy="131" rx="44" ry="4.5" fill="url(#ID-shadow)"/>
<rect x="80" y="18" width="18" height="86" rx="6" fill="url(#ID-tank)" stroke="#7fb6d8" stroke-width=".6"/>
<g class="cf-water"><rect x="82" y="34" width="14" height="66" rx="4" fill="#4aa6e0" opacity=".45"/></g>
<path d="M44 12h34q8 0 8 8v96h-50v-96q0-8 8-8z" fill="url(#ID-dark)" stroke="#05070a" stroke-width=".6"/>
<path d="M24 22q0-10 10-10h40q8 0 8 8v24q0 8-8 8h-40q-10 0-10-10z" fill="url(#ID-dark)" stroke="#05070a" stroke-width=".6"/>
<path d="M28 16h44" stroke="#fff" stroke-opacity=".18" stroke-width="1.4" stroke-linecap="round"/>
<circle class="cf-led" cx="40" cy="31" r="3.4"/><circle class="cf-led" cx="54" cy="31" r="3.4"/>
<circle cx="40" cy="31" r="3.4" fill="none" stroke="#7d8792" stroke-width=".6"/><circle cx="54" cy="31" r="3.4" fill="none" stroke="#7d8792" stroke-width=".6"/>
<circle cx="70" cy="31" r="4.2" fill="url(#ID-chrome)" stroke="#5c646d" stroke-width=".4"/><path d="M70 28.6v2.2M68.1 29.6a2.6 2.6 0 1 0 3.8 0" stroke="#3a424b" stroke-width=".8" fill="none" stroke-linecap="round"/>
<rect x="49" y="52" width="14" height="5" rx="2" fill="#2a2f35"/>
<path class="cf-stream" d="M56 57v28"/>
<rect x="24" y="108" width="72" height="16" rx="6" fill="url(#ID-inox)" stroke="#7d858e" stroke-width=".6"/>
<rect x="30" y="106" width="56" height="5" rx="2" fill="#2a2f35"/><rect x="30" y="106" width="56" height="5" rx="2" fill="url(#ID-mesh)"/>
<path d="M71 87q9 0 9 7t-9 7" fill="none" stroke="#dfe3e7" stroke-width="3.2"/>
<path d="M39 82h34l-2 22q-1 3-4 3h-22q-3 0-4-3z" fill="url(#ID-mug)" stroke="#aab2ba" stroke-width=".6"/>
<g clip-path="url(#ID-cup)"><rect class="cf-level" x="38" y="84" width="36" height="20" fill="url(#ID-cof)"/></g>
<ellipse cx="56" cy="82.5" rx="17" ry="1.8" fill="#9aa2ab" opacity=".5"/>
${steam([50, 60], 80)}
</g>`;
    if (st === "expresso") return `${defs}<clipPath id="ID-cup"><rect x="47" y="93" width="26" height="14" rx="2"/></clipPath></defs>
<g class="cf s-expresso">
<ellipse cx="60" cy="131" rx="54" ry="5" fill="url(#ID-shadow)"/>
<rect x="22" y="4" width="40" height="8" rx="3" fill="#2a2f35"/><rect x="26" y="2.5" width="32" height="3" rx="1.5" fill="#3d444c"/>
<g class="cf-body">
<rect x="9" y="10" width="102" height="116" rx="9" fill="url(#ID-inox)" stroke="#7d858e" stroke-width=".7"/>
<rect x="15" y="14" width="90" height="26" rx="5" fill="url(#ID-dark)"/>
${lcd(38, 20, 44, 13)}
<circle class="cf-led" cx="26" cy="27" r="3"/><circle cx="26" cy="27" r="3" fill="none" stroke="#7d8792" stroke-width=".6"/>
<circle class="cf-led" cx="94" cy="27" r="3"/><circle cx="94" cy="27" r="3" fill="none" stroke="#7d8792" stroke-width=".6"/>
<rect x="20" y="46" width="80" height="70" rx="5" fill="#15181b"/>
<path d="M22 48h76" stroke="#fff" stroke-opacity=".06" stroke-width="2"/>
<rect x="38" y="48" width="44" height="12" rx="3" fill="url(#ID-chrome)" stroke="#5c646d" stroke-width=".5"/>
<rect x="51" y="60" width="5" height="6" rx="1" fill="#8f979f"/><rect x="64" y="60" width="5" height="6" rx="1" fill="#8f979f"/>
<path class="cf-stream" d="M53.5 66v29"/><path class="cf-stream" d="M66.5 66v29"/>
<path d="M73 97q7 0 7 4.5t-7 4.5" fill="none" stroke="#dfe3e7" stroke-width="2.6"/>
<path d="M45 92h30l-1.6 14q-1 4-5 4h-17q-4 0-5-4z" fill="url(#ID-mug)" stroke="#aab2ba" stroke-width=".6"/>
<g clip-path="url(#ID-cup)"><rect class="cf-level" x="44" y="93" width="32" height="14" fill="url(#ID-cof)"/></g>
<ellipse cx="60" cy="92.5" rx="15" ry="1.6" fill="#9aa2ab" opacity=".5"/>
<ellipse cx="60" cy="112" rx="24" ry="2" fill="#000" opacity=".35"/>
<rect x="17" y="112" width="86" height="10" rx="3" fill="url(#ID-chrome)" stroke="#6f7780" stroke-width=".5"/>
<rect x="21" y="114" width="78" height="6" rx="2" fill="url(#ID-holes)"/>
<path d="M13 16v100" stroke="#fff" stroke-opacity=".5" stroke-width="1.2" stroke-linecap="round"/>
</g>
${steam([55, 65], 90)}
</g>`;
    return `${defs}<clipPath id="ID-car"><path d="M30 70h40v30q0 6-6 6h-28q-6 0-6-6z"/></clipPath></defs>
<g class="cf s-filtre">
<ellipse cx="60" cy="131" rx="52" ry="5" fill="url(#ID-shadow)"/>
<rect x="74" y="16" width="34" height="96" rx="6" fill="url(#ID-dark)" stroke="#05070a" stroke-width=".6"/>
<rect x="80" y="28" width="10" height="62" rx="4" fill="url(#ID-tank)" stroke="#7fb6d8" stroke-width=".5"/>
<g class="cf-water"><rect x="81.5" y="40" width="7" height="48" rx="3" fill="#4aa6e0" opacity=".5"/></g>
<path d="M82 34h2M82 46h2M82 58h2M82 70h2" stroke="#fff" stroke-opacity=".6" stroke-width=".8"/>
<path d="M22 30q0-10 10-10h46v26h-48q-8 0-8-8z" fill="url(#ID-dark)" stroke="#05070a" stroke-width=".6"/>
<path d="M28 24h44" stroke="#fff" stroke-opacity=".18" stroke-width="1.4" stroke-linecap="round"/>
<path d="M30 46h44l-9 12h-26z" fill="#262b31" stroke="#05070a" stroke-width=".5"/>
<g class="cf-drip"><circle cx="52" cy="60" r="1.3"/><circle cx="52" cy="60" r="1.1"/><circle cx="52" cy="60" r="1.2"/></g>
<rect x="12" y="106" width="96" height="21" rx="6" fill="url(#ID-dark)" stroke="#05070a" stroke-width=".6"/>
<rect class="cf-plate" x="26" y="104.5" width="48" height="3.5" rx="1.7"/>
${lcd(80, 112, 24, 9)}
<circle class="cf-led" cx="22" cy="116.5" r="3"/><circle cx="22" cy="116.5" r="3" fill="none" stroke="#7d8792" stroke-width=".6"/>
<path d="M28 76q-11 1-11 12q0 10 11 11" fill="none" stroke="#454d57" stroke-width="4" stroke-linecap="round"/>
<g clip-path="url(#ID-car)"><rect class="cf-level" x="28" y="70" width="44" height="36" fill="url(#ID-cof)"/></g>
<path d="M30 66h40v34q0 6-6 6h-28q-6 0-6-6z" fill="url(#ID-glassv)" stroke="#c4d2dd" stroke-opacity=".8" stroke-width=".8"/>
<path d="M34 72v26" stroke="#fff" stroke-opacity=".55" stroke-width="1.6" stroke-linecap="round"/>
<rect x="28" y="61" width="44" height="7" rx="2.5" fill="#1d2126"/><rect x="47" y="59" width="10" height="3" rx="1" fill="#1d2126"/>
${steam([44, 56], 19)}
</g>`;
  };

SVG.desktop_pc = () => `
<defs>${DEFS}
<linearGradient id="ID-pcwall" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0f2a5c"/><stop offset=".55" stop-color="#1c5fc4"/><stop offset="1" stop-color="#5ec8ff"/></linearGradient>
<linearGradient id="ID-pcdesk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9c3a5"/><stop offset="1" stop-color="#b79a74"/></linearGradient>
<linearGradient id="ID-pcglass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2b3138"/><stop offset="1" stop-color="#090b0e"/></linearGradient>
<clipPath id="ID-pcclip"><rect x="10" y="22" width="68" height="44" rx="1"/></clipPath></defs>
<ellipse cx="60" cy="126" rx="56" ry="3.5" fill="url(#ID-shadow)"/>
<path d="M2 110h116l-5 12h-106z" fill="url(#ID-pcdesk)"/>
<path d="M2 110h116" stroke="#fff" stroke-opacity=".5" stroke-width="1"/>
<path d="M36 104h12l2 7h-16z" fill="url(#ID-dark)"/>
<rect x="38" y="70" width="8" height="36" fill="url(#ID-inox)" stroke="#7d858e" stroke-width=".4"/>
<ellipse cx="42" cy="108" rx="16" ry="3.2" fill="url(#ID-inox)" stroke="#7d858e" stroke-width=".4"/>
<rect x="6" y="18" width="76" height="52" rx="3.5" fill="url(#ID-dark)" stroke="#05070a" stroke-width=".6"/>
<rect x="10" y="22" width="68" height="44" rx="1" fill="#0a0d11"/>
<g class="pc-screen" clip-path="url(#ID-pcclip)">
  <rect x="10" y="22" width="68" height="44" fill="url(#ID-pcwall)"/>
  <circle cx="64" cy="32" r="9" fill="#bfeaff" opacity=".35"/>
  <rect x="13" y="26" width="30" height="24" rx="1.5" fill="#0d1520" stroke="#2b4a73" stroke-width=".4"/>
  <rect x="13" y="26" width="30" height="3.4" rx="1.5" fill="#22344d"/>
  <circle cx="15.2" cy="27.7" r=".7" fill="#ff5f56"/><circle cx="17.6" cy="27.7" r=".7" fill="#ffbd2e"/><circle cx="20" cy="27.7" r=".7" fill="#27c93f"/>
  <g class="pc-code"><rect x="16" y="32" width="16" height="1.6" rx=".8" fill="#6fd8ff"/><rect x="19" y="35.4" width="20" height="1.6" rx=".8" fill="#b894ff"/><rect x="19" y="38.8" width="12" height="1.6" rx=".8" fill="#ffd76a"/><rect x="16" y="42.2" width="22" height="1.6" rx=".8" fill="#6fe3a1"/><rect x="19" y="45.6" width="14" height="1.6" rx=".8" fill="#6fd8ff"/></g>
  <rect x="46" y="38" width="28" height="19" rx="1.5" fill="#f4f7fb" opacity=".92"/>
  <g class="pc-bars"><rect x="50" y="48" width="4" height="7" fill="#3b82f6"/><rect x="56" y="43" width="4" height="12" fill="#22c55e"/><rect x="62" y="45.5" width="4" height="9.5" fill="#f59e0b"/><rect x="68" y="41" width="4" height="14" fill="#ef4444"/></g>
  <rect x="10" y="61" width="68" height="5" fill="#0b1626" opacity=".85"/>
  <circle cx="14" cy="63.5" r="1.4" fill="#5ec8ff"/><rect x="19" y="62.6" width="3.4" height="1.8" rx=".5" fill="#8fa3bd"/><rect x="24" y="62.6" width="3.4" height="1.8" rx=".5" fill="#8fa3bd"/><rect x="29" y="62.6" width="3.4" height="1.8" rx=".5" fill="#8fa3bd"/>
  <path class="pc-cursor" d="M0 0l0 6l1.7 -1.6l1.2 2.7l1.1 -.5l-1.2 -2.6l2.3 0z" fill="#fff" stroke="#000" stroke-width=".4"/>
</g>
<path d="M10 22h68l-28 44h-40z" fill="url(#ID-gloss)" opacity=".35"/>
<circle class="pc-mled" cx="44" cy="68" r=".9"/>
<g class="pc-tower">
  <rect x="86" y="38" width="28" height="74" rx="3" fill="url(#ID-dark)" stroke="#05070a" stroke-width=".6"/>
  <rect x="90" y="43" width="20" height="62" rx="1.5" fill="url(#ID-pcglass)" stroke="#3b424a" stroke-width=".4"/>
  <g class="pc-rgb" fill="none" stroke-width="1.3">
    <circle cx="100" cy="53" r="7.6"/><circle cx="100" cy="72" r="7.6"/><circle cx="100" cy="91" r="7.6"/>
  </g>
  <g class="pc-fan"><circle cx="100" cy="53" r="6.5" fill="#12161a"/><path d="M100 53v-6M100 53l5.2 3M100 53l-5.2 3" stroke="#a9b1ba" stroke-width="2" stroke-linecap="round"/><circle cx="100" cy="53" r="7.6" fill="none"/></g>
  <g class="pc-fan"><circle cx="100" cy="72" r="6.5" fill="#12161a"/><path d="M100 72v-6M100 72l5.2 3M100 72l-5.2 3" stroke="#a9b1ba" stroke-width="2" stroke-linecap="round"/><circle cx="100" cy="72" r="7.6" fill="none"/></g>
  <g class="pc-fan"><circle cx="100" cy="91" r="6.5" fill="#12161a"/><path d="M100 91v-6M100 91l5.2 3M100 91l-5.2 3" stroke="#a9b1ba" stroke-width="2" stroke-linecap="round"/><circle cx="100" cy="91" r="7.6" fill="none"/></g>
  <circle cx="100" cy="53" r="1.4" fill="#d7dce1"/><circle cx="100" cy="72" r="1.4" fill="#d7dce1"/><circle cx="100" cy="91" r="1.4" fill="#d7dce1"/>
  <path d="M91 44h8l-8 14z" fill="#fff" opacity=".07"/>
  <rect x="104" y="40.2" width="6" height="1.8" rx=".9" fill="#2a2f35"/>
  <circle class="pc-led" cx="94" cy="41" r="1.2"/>
  <rect x="90" y="106.6" width="20" height="3" rx="1" fill="#2a2f35"/>
</g>
<rect x="10" y="114" width="62" height="7" rx="1.4" fill="url(#ID-dark)" stroke="#05070a" stroke-width=".4"/>
<g class="pc-keys" fill="#4b535c"><rect x="12" y="115.2" width="58" height="1.2" opacity=".9"/><rect x="12" y="117.2" width="58" height="1.2" opacity=".9"/><rect x="12" y="119.2" width="58" height="1.2" opacity=".9"/></g>
<path d="M12 116.4h58M12 118.4h58" stroke="#05070a" stroke-width=".4" stroke-dasharray="2.2 .8"/>
<ellipse cx="78" cy="117" rx="3.6" ry="3" fill="url(#ID-dark)" stroke="#05070a" stroke-width=".4"/><path d="M78 114.2v2" stroke="#6f7780" stroke-width=".6"/>`;

SVG.dishwasher = () => `
<defs>${DEFS}<clipPath id="ID-win"><rect x="22" y="38" width="76" height="76" rx="4"/></clipPath>
<linearGradient id="ID-tub" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5b646d"/><stop offset="1" stop-color="#2c3238"/></linearGradient></defs>
<ellipse class="floorlight" cx="60" cy="135" rx="9" ry="2.2"/>
<ellipse cx="60" cy="133" rx="50" ry="5" fill="url(#ID-shadow)"/>
<g>
  <rect x="14" y="8" width="92" height="120" rx="6" fill="url(#ID-inox)" stroke="#9aa2ab" stroke-width=".8"/>
  <rect x="14" y="8" width="92" height="15" rx="6" fill="url(#ID-dark)"/>
  <rect x="14" y="17" width="92" height="6" fill="url(#ID-dark)"/>
  ${lcd(45, 11, 30, 9)}
  <circle class="led l1" cx="22" cy="15.5" r="1.4"/><circle class="led l2" cx="28" cy="15.5" r="1.4"/>
  <circle class="led l4" cx="34" cy="15.5" r="1.4"/>
  <rect x="82" y="12.5" width="7" height="6" rx="1.5" fill="#3b424a" stroke="#58616b" stroke-width=".5"/>
  <rect x="92" y="12.5" width="7" height="6" rx="1.5" fill="#3b424a" stroke="#58616b" stroke-width=".5"/>
  <rect x="40" y="26" width="40" height="5" rx="2.5" fill="#7c848d"/>
  <rect x="41" y="26" width="38" height="2.4" rx="1.2" fill="#2f353b" opacity=".6"/>
  <rect x="22" y="38" width="76" height="76" rx="4" fill="url(#ID-tub)"/>
  <g clip-path="url(#ID-win)">
    <g class="wash-light"><rect x="22" y="38" width="76" height="76" fill="#8fd3ff" opacity=".18"/></g>
    <path d="M26 62h68M26 66h68" stroke="#aab2ba" stroke-width="1.1"/>
    <path d="M30 62v-8M42 62v-8M54 62v-8M66 62v-8M78 62v-8M90 62v-8" stroke="#aab2ba" stroke-width=".7"/>
    <path d="M32 61l2-12h7l2 12z M47 61l2-12h7l2 12z M65 61l2-12h7l2 12z M80 61l2-12h7l2 12z" fill="#dff3ff" opacity=".7" stroke="#fff" stroke-width=".5"/>
    <path d="M26 100h68M26 104h68" stroke="#aab2ba" stroke-width="1.1"/>
    <ellipse cx="33" cy="88" rx="3.2" ry="13" fill="#f6f7f9" stroke="#c8ced5" stroke-width=".6"/>
    <ellipse cx="43" cy="88" rx="3.2" ry="13" fill="#f6f7f9" stroke="#c8ced5" stroke-width=".6"/>
    <ellipse cx="53" cy="88" rx="3.2" ry="13" fill="#f6f7f9" stroke="#c8ced5" stroke-width=".6"/>
    <ellipse cx="63" cy="91" rx="2.6" ry="10" fill="#e7f1fb" stroke="#c8ced5" stroke-width=".6"/>
    <ellipse cx="72" cy="91" rx="2.6" ry="10" fill="#e7f1fb" stroke="#c8ced5" stroke-width=".6"/>
    <path d="M80 99l3-14h9l3 14z" fill="#c4473a"/>
    <g class="arm arm-top"><rect x="36" y="68" width="48" height="2.6" rx="1.3" fill="#9aa3ad"/></g>
    <g class="arm arm-bot"><rect x="30" y="107" width="60" height="3" rx="1.5" fill="#9aa3ad"/></g>
    <circle cx="60" cy="69.3" r="2" fill="#7d868f"/><circle cx="60" cy="108.5" r="2.4" fill="#7d868f"/>
    <g class="jets">
      <path d="M40 106l-6-38M50 106l-2-40M70 106l2-40M80 106l6-38M45 67l-4-22M75 67l4-22"/>
    </g>
    <g class="drops">
      <circle cx="35" cy="44" r="1"/><circle cx="52" cy="46" r="1.2"/><circle cx="68" cy="43" r="1"/><circle cx="86" cy="47" r="1.1"/>
    </g>
    <g class="steam-in"><path d="M40 112q-4-10 2-18t0-16M60 112q-4-10 2-18t0-16M80 112q-4-10 2-18t0-16"/></g>
  </g>
  <rect x="22" y="38" width="76" height="76" rx="4" fill="url(#ID-gloss)"/>
  <rect x="22" y="38" width="76" height="76" rx="4" fill="none" stroke="#7e8790" stroke-width="1.2"/>
  <rect x="14" y="118" width="92" height="10" rx="2" fill="#2b3036"/>
</g>`;

SVG.drawer_freezer = () => `
<defs>${DEFS}
<linearGradient id="ID-in" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#dfeaf3"/></linearGradient></defs>
<ellipse cx="60" cy="134" rx="40" ry="4.5" fill="url(#ID-shadow)"/>
<rect x="26" y="4" width="68" height="126" rx="6" fill="#9aa2ab"/>
<rect x="29" y="7" width="62" height="118" rx="3" fill="url(#ID-in)"/>
<rect class="flight" x="29" y="7" width="62" height="118" fill="#fffbe6" opacity="0"/>
<path d="M33 12h54" stroke="#b9c8d6" stroke-width="1.2"/><path d="M37 9.5h46" stroke="#cfdbe5" stroke-width="2" stroke-dasharray="2 1.5"/>
<g class="drawer d1"><rect x="31" y="16" width="58" height="24" rx="2.5" fill="#e9f5ff" opacity=".9" stroke="#9fc3db" stroke-width=".6"/>
  <rect x="35" y="23" width="12" height="13" rx="2" fill="#e5484d"/><rect x="49" y="26" width="14" height="10" rx="2" fill="#3e8ed0"/><rect x="65" y="22" width="18" height="14" rx="3" fill="#f2c94c"/>
  <rect x="31" y="16" width="58" height="5" rx="2" fill="#cfe6f5" opacity=".9"/><rect x="50" y="17.3" width="20" height="2" rx="1" fill="#9fc3db"/></g>
<g class="drawer d2 pull"><rect x="31" y="43" width="58" height="26" rx="2.5" fill="#e9f5ff" opacity=".92" stroke="#9fc3db" stroke-width=".6"/>
  <path d="M35 66l3-14h12l3 14z" fill="#9fd356"/><rect x="55" y="54" width="14" height="12" rx="2" fill="#ffffff" stroke="#c9d3dc" stroke-width=".5"/><circle cx="77" cy="61" r="5" fill="#ff8f3d"/>
  <rect x="31" y="43" width="58" height="5" rx="2" fill="#cfe6f5" opacity=".95"/><rect x="50" y="44.3" width="20" height="2" rx="1" fill="#9fc3db"/></g>
<g class="drawer d3"><rect x="31" y="72" width="58" height="24" rx="2.5" fill="#e9f5ff" opacity=".9" stroke="#9fc3db" stroke-width=".6"/>
  <rect x="35" y="80" width="20" height="12" rx="2" fill="#c4c9cf"/><rect x="58" y="78" width="10" height="14" rx="2" fill="#e5484d" opacity=".85"/><rect x="71" y="81" width="14" height="11" rx="2" fill="#8a5a2b" opacity=".8"/>
  <rect x="31" y="72" width="58" height="5" rx="2" fill="#cfe6f5" opacity=".9"/><rect x="50" y="73.3" width="20" height="2" rx="1" fill="#9fc3db"/></g>
<g class="drawer d4"><rect x="31" y="99" width="58" height="23" rx="2.5" fill="#e9f5ff" opacity=".9" stroke="#9fc3db" stroke-width=".6"/>
  <rect x="35" y="107" width="16" height="11" rx="2" fill="#3e8ed0" opacity=".85"/><rect x="54" y="105" width="30" height="13" rx="3" fill="#f6f7f9" stroke="#c9d3dc" stroke-width=".5"/>
  <rect x="31" y="99" width="58" height="5" rx="2" fill="#cfe6f5" opacity=".9"/><rect x="50" y="100.3" width="20" height="2" rx="1" fill="#9fc3db"/></g>
<g class="drawer-mist"><circle cx="44" cy="74" r="2"/><circle cx="60" cy="76" r="2.4"/><circle cx="76" cy="74" r="1.8"/></g>
<g class="dz-door">
  <rect x="26" y="4" width="68" height="126" rx="6" fill="url(#ID-body)" stroke="#bfc6ce" stroke-width=".7"/>
  <rect x="84" y="20" width="3.4" height="46" rx="1.7" fill="url(#ID-chrome)" stroke="#6f7781" stroke-width=".4"/>
  <rect x="35" y="12" width="28" height="12" rx="2" fill="#0c1720" stroke="#7d868f" stroke-width=".5"/>
  <text class="lcd fr-temp" x="51.5" y="20.8" text-anchor="middle">--°</text>
  <g class="flake"><path d="M39.5 15v6M36.9 16.5l5.2 3M36.9 19.5l5.2-3" stroke-width=".8" stroke-linecap="round"/></g>
  <circle class="led l1" cx="38" cy="28" r="1.2"/><circle class="led l2" cx="43" cy="28" r="1.2"/>
  <rect x="26" y="122" width="68" height="8" rx="3" fill="#e2e6ea"/><path d="M34 125h52M34 127h52" stroke="#aab1b9" stroke-width=".6"/>
  <path d="M30 8v112" stroke="#fff" stroke-opacity=".6" stroke-width="2"/>
</g>
<g class="mist"><circle cx="40" cy="132" r="1.1"/><circle cx="52" cy="133" r=".9"/><circle cx="66" cy="132" r="1.2"/><circle cx="79" cy="133" r=".9"/></g>`;

SVG.dryer = () => `
<defs>${DEFS}<clipPath id="ID-win"><circle cx="60" cy="80" r="29"/></clipPath>
<radialGradient id="ID-heat" cx=".5" cy=".6" r=".6"><stop offset="0" stop-color="#ffb347" stop-opacity=".55"/><stop offset="1" stop-color="#ff7b2e" stop-opacity="0"/></radialGradient></defs>
<ellipse cx="60" cy="133" rx="50" ry="5" fill="url(#ID-shadow)"/>
<g class="shake-soft">
  ${feet([20, 90], 124)}
  <rect x="14" y="8" width="92" height="120" rx="8" fill="url(#ID-body)" stroke="#bfc6ce" stroke-width=".8"/>
  <path d="M14 16a8 8 0 0 1 8-8h76a8 8 0 0 1 8 8v17H14z" fill="url(#ID-panel)"/>
  <line x1="14" y1="33" x2="106" y2="33" stroke="#bfc6ce" stroke-width=".8"/>
  <circle cx="27" cy="21" r="8.2" fill="url(#ID-chrome)" stroke="#88919a" stroke-width=".6"/>
  <circle cx="27" cy="21" r="5.8" fill="#eff2f5" stroke="#b2b9c1" stroke-width=".6"/>
  <g class="knob"><line x1="27" y1="21" x2="27" y2="16.2" stroke="#4f5964" stroke-width="1.5" stroke-linecap="round"/></g>
  ${lcd(43, 13, 30, 11)}
  <circle class="led l1" cx="49" cy="29" r="1.4"/><circle class="led l2" cx="55" cy="29" r="1.4"/>
  <circle class="led l3" cx="61" cy="29" r="1.4"/><circle class="led l4" cx="67" cy="29" r="1.4"/>
  <rect x="80" y="15" width="8" height="5" rx="1.5" fill="#e7eaee" stroke="#aeb5bd" stroke-width=".6"/>
  <rect x="91" y="15" width="8" height="5" rx="1.5" fill="#e7eaee" stroke="#aeb5bd" stroke-width=".6"/>
  <rect x="80" y="23" width="19" height="5" rx="1.5" fill="#dfe3e8" stroke="#aeb5bd" stroke-width=".6"/>
  ${porthole(60, 80, 29, `
    <rect x="20" y="40" width="80" height="80" fill="#3a4148" opacity=".25"/>
    ${drumInside(60, 80, 29)}
    <circle class="heat" cx="60" cy="80" r="29" fill="url(#ID-heat)"/>`)}
  <rect x="20" y="72" width="5" height="16" rx="2" fill="url(#ID-chrome)" stroke="#8d959f" stroke-width=".4"/>
  <rect x="95.5" y="74" width="4" height="12" rx="1.5" fill="#9aa3ad"/>
  <rect x="22" y="114" width="76" height="9" rx="2" fill="#e3e7eb" stroke="#c3c9d0" stroke-width=".6"/>
  <path d="M28 116.5h64M28 118.5h64M28 120.5h64" stroke="#b7bec6" stroke-width=".6"/>
</g>`;

SVG.fridge = () => `
<defs>${DEFS}
<linearGradient id="ID-in" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#dfe9f2"/></linearGradient>
<linearGradient id="ID-frost" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9f6ff"/><stop offset="1" stop-color="#bfe0f5"/></linearGradient></defs>
<ellipse cx="60" cy="134" rx="40" ry="4.5" fill="url(#ID-shadow)"/>
<rect x="26" y="4" width="68" height="126" rx="6" fill="#9aa2ab"/>
<!-- interiors -->
<rect x="29" y="7" width="62" height="36" rx="3" fill="url(#ID-frost)"/>
<path d="M31 25h58" stroke="#a9cbe2" stroke-width="1"/>
<rect x="34" y="28" width="22" height="11" rx="2" fill="#d9eefb" stroke="#a9cbe2" stroke-width=".6"/>
<rect x="60" y="28" width="26" height="11" rx="2" fill="#d9eefb" stroke="#a9cbe2" stroke-width=".6"/>
<rect x="29" y="47" width="62" height="78" rx="3" fill="url(#ID-in)"/>
<path d="M31 72h58M31 96h58" stroke="#b9c8d6" stroke-width="1.1"/>
<rect x="36" y="58" width="6" height="14" rx="1.5" fill="#3fbf7f"/><rect x="44" y="62" width="8" height="10" rx="2" fill="#f2c94c"/>
<rect x="56" y="64" width="12" height="8" rx="2" fill="#e5484d"/><rect x="72" y="60" width="5" height="12" rx="1.5" fill="#3e8ed0"/>
<rect x="38" y="86" width="14" height="10" rx="2" fill="#ffffff" stroke="#c9d3dc" stroke-width=".6"/><circle cx="64" cy="91" r="5" fill="#ff8f3d"/><circle cx="74" cy="92" r="4" fill="#9fd356"/>
<rect x="32" y="104" width="56" height="18" rx="2" fill="#e3eef7" stroke="#b9c8d6" stroke-width=".6"/>
<rect class="flight" x="29" y="47" width="62" height="78" fill="#fffbe6" opacity="0"/>
<!-- doors -->
<g class="fz-door">
  <rect x="26" y="4" width="68" height="40" rx="6" fill="url(#ID-inox)" stroke="#8f979f" stroke-width=".7"/>
  <rect x="84" y="12" width="3.4" height="24" rx="1.7" fill="url(#ID-chrome)" stroke="#6f7781" stroke-width=".4"/>
</g>
<g class="fr-door">
  <rect x="26" y="46" width="68" height="84" rx="6" fill="url(#ID-inox)" stroke="#8f979f" stroke-width=".7"/>
  <rect x="84" y="52" width="3.4" height="40" rx="1.7" fill="url(#ID-chrome)" stroke="#6f7781" stroke-width=".4"/>
  <rect x="35" y="54" width="24" height="12" rx="2" fill="#0c1720" stroke="#7d868f" stroke-width=".5"/>
  <text class="lcd fr-temp" x="49.5" y="62.8" text-anchor="middle">--°</text>
  <g class="flake"><path d="M39.5 57v6M36.9 58.5l5.2 3M36.9 61.5l5.2-3" stroke-width=".8" stroke-linecap="round"/></g>
  <path d="M30 50v76" stroke="#fff" stroke-opacity=".55" stroke-width="2"/>
</g>
<g class="mist"><circle cx="40" cy="132" r="1.1"/><circle cx="52" cy="133" r=".9"/><circle cx="66" cy="132" r="1.2"/><circle cx="79" cy="133" r=".9"/></g>`;

SVG.heat_pump = () => `
<defs>${DEFS}
<linearGradient id="ID-hp" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4f6f8"/><stop offset="1" stop-color="#cfd5db"/></linearGradient>
<radialGradient id="ID-grill" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#3a4048"/><stop offset="1" stop-color="#1c2025"/></radialGradient></defs>
<ellipse cx="60" cy="126" rx="56" ry="4" fill="url(#ID-shadow)"/>
<g class="hp-steam"><path d="M30 30q-3-5 0-9t0-9"/><path d="M46 28q-3-5 0-9t0-9"/><path d="M62 30q-3-5 0-9t0-9"/></g>
<g class="hp-body">
<rect x="14" y="114" width="14" height="8" rx="1" fill="#59616b"/><rect x="92" y="114" width="14" height="8" rx="1" fill="#59616b"/>
<rect x="8" y="34" width="104" height="82" rx="4" fill="url(#ID-hp)" stroke="#9aa2ab" stroke-width=".7"/>
<path d="M10 37h100" stroke="#fff" stroke-width="1.2"/>
<path d="M84 40v72" stroke="#b9c0c7" stroke-width=".7"/>
<g stroke="#bfc6cd" stroke-width=".6"><path d="M88 46h20M88 50h20M88 54h20M88 58h20M88 62h20M88 66h20"/></g>
<rect x="88" y="84" width="20" height="18" rx="1.5" fill="#e3e7eb" stroke="#aab2ba" stroke-width=".5"/>
<circle cx="98" cy="93" r="1.3" fill="#9aa2ab"/>
<circle class="hp-led" cx="104" cy="75" r="1.2"/>
<circle cx="46" cy="75" r="31" fill="#d4d9de" stroke="#aab2ba" stroke-width=".6"/>
<circle cx="46" cy="75" r="28" fill="url(#ID-grill)"/>
<g class="hp-fan" fill="#8e979f"><path d="M46 75q-2-16 8-23q3 9-8 23z"/><path d="M46 75q15-6 23 3q-9 4-23-3z"/><path d="M46 75q-13 10-24 4q5-8 24-4z"/></g>
<circle cx="46" cy="75" r="4" fill="#59616b"/>
<g fill="none" stroke="#e6eaee" stroke-opacity=".8" stroke-width=".7"><circle cx="46" cy="75" r="9"/><circle cx="46" cy="75" r="15"/><circle cx="46" cy="75" r="21"/><circle cx="46" cy="75" r="27"/><path d="M46 47v56M18 75h56"/></g>
</g>
<g class="hp-out"><circle cx="46" cy="75" r="30"/><circle cx="46" cy="75" r="30"/><circle cx="46" cy="75" r="30"/></g>
<path d="M112 98h4q3 0 3 3v19" stroke="#c77b3a" stroke-width="2.4" fill="none" stroke-linecap="round"/>
<path d="M112 104h2q2 0 2 2v14" stroke="#2a2f35" stroke-width="3.2" fill="none" stroke-linecap="round"/>`;

SVG.hob = () => `
<defs>${DEFS}
<clipPath id="ID-all"><rect x="0" y="0" width="120" height="140" rx="12"/></clipPath>
<linearGradient id="ID-glass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a2d31"/><stop offset="1" stop-color="#0d0e10"/></linearGradient>
<linearGradient id="ID-wood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9c4a3"/><stop offset="1" stop-color="#b89a73"/></linearGradient>
<radialGradient id="ID-hot"><stop offset="0" stop-color="#ffb347"/><stop offset=".45" stop-color="#ff4a1f"/><stop offset="1" stop-color="#8a1205" stop-opacity=".25"/></radialGradient>
<linearGradient id="ID-pot" x1="0" x2="1"><stop offset="0" stop-color="#8d959e"/><stop offset=".3" stop-color="#f1f3f5"/><stop offset=".6" stop-color="#c3c9cf"/><stop offset="1" stop-color="#7d858e"/></linearGradient></defs>
<ellipse cx="60" cy="125" rx="50" ry="4" fill="url(#ID-shadow)"/>
<g transform="translate(-9 -24) scale(1.15)">
<path d="M12 122L108 122L97 60L23 60Z" fill="#8d959e"/>
<path d="M14 120L106 120L96 62L24 62Z" fill="url(#ID-glass)"/>
<g class="zone z1">
  <ellipse cx="40" cy="99" rx="18" ry="9.7" fill="none" stroke="#5a6068" stroke-width=".5"/>
  <ellipse class="zglow" cx="40" cy="99" rx="16" ry="8.5" fill="url(#ID-hot)"/>
  <g class="coil" fill="none" stroke="#ff5a1f" stroke-width=".7">
    <ellipse cx="40" cy="99" rx="13.1" ry="7.0"/><ellipse cx="40" cy="99" rx="9.3" ry="4.9"/><ellipse cx="40" cy="99" rx="5.4" ry="2.9"/></g>
  <ellipse cx="40" cy="99" rx="16" ry="8.5" fill="none" stroke="#7d848c" stroke-width=".7" stroke-dasharray="2 1.4"/>
</g><g class="zone z2">
  <ellipse cx="82" cy="99" rx="14" ry="7.7" fill="none" stroke="#5a6068" stroke-width=".5"/>
  <ellipse class="zglow" cx="82" cy="99" rx="12" ry="6.5" fill="url(#ID-hot)"/>
  <g class="coil" fill="none" stroke="#ff5a1f" stroke-width=".7">
    <ellipse cx="82" cy="99" rx="9.8" ry="5.3"/><ellipse cx="82" cy="99" rx="7.0" ry="3.8"/><ellipse cx="82" cy="99" rx="4.1" ry="2.2"/></g>
  <ellipse cx="82" cy="99" rx="12" ry="6.5" fill="none" stroke="#7d848c" stroke-width=".7" stroke-dasharray="2 1.4"/>
</g><g class="zone z3">
  <ellipse cx="44" cy="73" rx="13" ry="6.4" fill="none" stroke="#5a6068" stroke-width=".5"/>
  <ellipse class="zglow" cx="44" cy="73" rx="11" ry="5.2" fill="url(#ID-hot)"/>
  <g class="coil" fill="none" stroke="#ff5a1f" stroke-width=".7">
    <ellipse cx="44" cy="73" rx="9.0" ry="4.3"/><ellipse cx="44" cy="73" rx="6.4" ry="3.0"/><ellipse cx="44" cy="73" rx="3.7" ry="1.8"/></g>
  <ellipse cx="44" cy="73" rx="11" ry="5.2" fill="none" stroke="#7d848c" stroke-width=".7" stroke-dasharray="2 1.4"/>
</g><g class="zone z4">
  <ellipse cx="78" cy="73" rx="16" ry="7.7" fill="none" stroke="#5a6068" stroke-width=".5"/>
  <ellipse class="zglow" cx="78" cy="73" rx="14" ry="6.5" fill="url(#ID-hot)"/>
  <g class="coil" fill="none" stroke="#ff5a1f" stroke-width=".7">
    <ellipse cx="78" cy="73" rx="11.5" ry="5.3"/><ellipse cx="78" cy="73" rx="8.1" ry="3.8"/><ellipse cx="78" cy="73" rx="4.8" ry="2.2"/></g>
  <ellipse cx="78" cy="73" rx="14" ry="6.5" fill="none" stroke="#7d848c" stroke-width=".7" stroke-dasharray="2 1.4"/>
</g>
<path d="M30 63L58 63L22 118L16 118Z" fill="#fff" opacity=".05"/>
<path d="M18 109H102" stroke="#3b4047" stroke-width=".5"/>
<g class="digits">
  <text class="zd zd1" x="28" y="116.5" text-anchor="middle">0</text>
  <text class="zd zd3" x="44" y="116.5" text-anchor="middle">0</text>
  <text class="zd zd4" x="76" y="116.5" text-anchor="middle">0</text>
  <text class="zd zd2" x="92" y="116.5" text-anchor="middle">0</text>
</g>
<circle cx="60" cy="114.5" r="2.4" fill="none" stroke="#5a6068" stroke-width=".6"/><path d="M60 112.6v1.6" stroke="#5a6068" stroke-width=".6"/>
<path d="M51 114.5h3M66 114.5h3M67.5 113v3" stroke="#5a6068" stroke-width=".6"/>
<g class="pan">
  <path d="M90 66L104 52" stroke="#2b2f34" stroke-width="2.6" stroke-linecap="round"/>
  <ellipse cx="78" cy="71" rx="13" ry="6.2" fill="#2b2f34"/>
  <ellipse cx="78" cy="70" rx="11.5" ry="5.2" fill="#3b4047"/>
  <ellipse cx="76" cy="70" rx="5" ry="2.6" fill="#ffffff"/><ellipse cx="76.5" cy="69.8" rx="2" ry="1.2" fill="#f2b632"/>
  <g class="sizzle"><path d="M68 64l-1-3M74 62l0-3M84 62l1-3M89 65l2-2"/></g>
</g>
<g class="pot">
  <path d="M24 86l-10-2" stroke="#2b2f34" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M25 80V96Q25 101 40 101Q55 101 55 96V80Z" fill="url(#ID-pot)" stroke="#6f7781" stroke-width=".5"/>
  <ellipse cx="40" cy="96.5" rx="15" ry="4.5" fill="none" stroke="#6f7781" stroke-width=".4" opacity=".6"/>
  <g class="lid"><ellipse cx="40" cy="80" rx="15.5" ry="4.6" fill="#d7dce1" stroke="#7d858e" stroke-width=".6"/>
  <ellipse cx="40" cy="79.4" rx="11" ry="3" fill="#eef1f4"/>
  <rect x="37.5" y="75" width="5" height="3.4" rx="1.4" fill="#2b2f34"/></g>
  <g class="steam-pot"><path d="M34 72q-3-5 0-10t0-10"/><path d="M41 70q-3-5 0-10t0-10"/><path d="M48 72q-3-5 0-10t0-10"/></g>
</g></g>`;

SVG.laptop = () => `
<defs>${DEFS}
<linearGradient id="ID-lpwall" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2a1a63"/><stop offset=".5" stop-color="#6b3fc9"/><stop offset="1" stop-color="#ff8fab"/></linearGradient>
<linearGradient id="ID-lpbody" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e4e8ec"/><stop offset="1" stop-color="#bfc6cd"/></linearGradient>
<radialGradient id="ID-lpglow" cx=".5" cy="0" r="1"><stop offset="0" stop-color="#7fdcff" stop-opacity=".55"/><stop offset="1" stop-color="#7fdcff" stop-opacity="0"/></radialGradient>
<clipPath id="ID-lpclip"><rect x="22" y="21" width="76" height="52" rx="1"/></clipPath></defs>
<ellipse cx="60" cy="116" rx="54" ry="4" fill="url(#ID-shadow)"/>
<rect x="16" y="14" width="88" height="64" rx="5" fill="url(#ID-dark)" stroke="#05070a" stroke-width=".6"/>
<rect x="22" y="21" width="76" height="52" rx="1" fill="#0a0d11"/>
<g class="lp-screen" clip-path="url(#ID-lpclip)">
  <rect x="22" y="21" width="76" height="52" fill="url(#ID-lpwall)"/>
  <rect x="22" y="21" width="76" height="5" fill="#0b1020" opacity=".6"/>
  <circle cx="26" cy="23.5" r="1" fill="#fff" opacity=".8"/><rect x="82" y="22.6" width="14" height="1.8" rx=".9" fill="#fff" opacity=".7"/>
  <rect x="27" y="30" width="20" height="14" rx="2" fill="#fff" opacity=".9"/><rect x="50" y="30" width="20" height="14" rx="2" fill="#fff" opacity=".9"/><rect x="73" y="30" width="20" height="14" rx="2" fill="#fff" opacity=".9"/>
  <circle cx="33" cy="37" r="3" fill="#ffb347"/><circle cx="56" cy="37" r="3" fill="#38d9ff"/><circle cx="79" cy="37" r="3" fill="#43c07a"/>
  <rect x="38" y="35.4" width="7" height="1.6" rx=".8" fill="#4b535c"/><rect x="61" y="35.4" width="7" height="1.6" rx=".8" fill="#4b535c"/><rect x="84" y="35.4" width="7" height="1.6" rx=".8" fill="#4b535c"/>
  <rect x="27" y="48" width="66" height="19" rx="2" fill="#0d1520" opacity=".88"/>
  <path class="lp-line" d="M30 62l8-4l7 3l8-8l8 5l8-7l8 3l8-6l6 2" fill="none" stroke="#38d9ff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M30 64h60" stroke="#3b4a63" stroke-width=".5"/>
  <circle class="lp-dot" cx="90" cy="53" r="1.6" fill="#fff"/>
</g>
<path d="M22 21h76l-26 52h-50z" fill="url(#ID-gloss)" opacity=".3"/>
<circle cx="60" cy="17.4" r=".9" fill="#2a2f35"/><circle class="lp-cam" cx="60" cy="17.4" r=".45"/>
<path d="M14 78h92l8 30h-108z" fill="url(#ID-lpbody)" stroke="#9aa2ab" stroke-width=".6"/>
<path d="M14 78h92" stroke="#fff" stroke-width="1" opacity=".8"/>
<path d="M6 108h108v3q0 2.5-3 2.5h-102q-3 0-3-2.5z" fill="#aab2ba" stroke="#8f98a2" stroke-width=".5"/>
<path d="M48 108h24v1.6q-12 1.6-24 0z" fill="#8f98a2"/>
<path d="M18 81h84l5 20h-94z" fill="#151a1f" opacity=".85"/>
<g class="lp-keys" fill="#cfd5db">
  <path d="M20.6 83h8l-1.2 3h-8zM30.4 83h8l-.5 3h-8zM40.2 83h8l-.2 3h-8zM50 83h8v3h-8zM59.8 83h8v3h-8zM69.6 83h8l.2 3h-8zM79.4 83h8l.5 3h-8zM89.2 83h8l1.2 3h-8z"/>
  <path d="M19.2 87.4h8.6l-1.2 3.2h-8.6zM29.4 87.4h8.6l-.6 3.2h-8.6zM39.6 87.4h8.6l-.2 3.2h-8.6zM49.8 87.4h8.6v3.2h-8.6zM60 87.4h8.6l.2 3.2h-8.6zM70.2 87.4h8.6l.6 3.2h-8.6zM80.4 87.4h8.6l1.2 3.2h-8.6zM90.6 87.4h6.4l1.4 3.2h-6.6z"/>
  <path d="M17.8 92h9.2l-1.3 3.4h-9.2zM28.6 92h9.2l-.6 3.4h-9.2zM39.4 92h9.2l-.2 3.4h-9.2zM50.2 92h9.2v3.4h-9.2zM61 92h9.2l.2 3.4h-9.2zM71.8 92h9.2l.6 3.4h-9.2zM82.6 92h9.2l1.3 3.4h-9.2z"/>
</g>
<path d="M46 97h28l1 4h-30z" fill="#aab2ba" stroke="#8f98a2" stroke-width=".4"/>
<path d="M18 81h84l5 20h-94z" fill="url(#ID-lpglow)" class="lp-glow"/>
<circle class="lp-led" cx="60" cy="111" r="1.1"/>`;

SVG.microwave = () => `
<defs>${DEFS}<clipPath id="ID-win"><rect x="13" y="42" width="66" height="62" rx="4"/></clipPath>
<linearGradient id="ID-cav" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a4f55"/><stop offset="1" stop-color="#22262a"/></linearGradient></defs>
<ellipse cx="60" cy="117" rx="56" ry="5" fill="url(#ID-shadow)"/>
<rect x="8" y="111" width="10" height="4" rx="1" fill="#2c3136"/><rect x="102" y="111" width="10" height="4" rx="1" fill="#2c3136"/>
<rect x="5" y="34" width="110" height="78" rx="6" fill="url(#ID-inox)" stroke="#949ca5" stroke-width=".8"/>
<rect x="9" y="38" width="74" height="70" rx="5" fill="#1a1d21"/>
<rect x="13" y="42" width="66" height="62" rx="4" fill="url(#ID-cav)"/>
<g clip-path="url(#ID-win)">
  <rect class="ilight" x="13" y="42" width="66" height="62" fill="url(#ID-warm)"/>
  <ellipse cx="46" cy="94" rx="24" ry="5" fill="#c8d4dc" opacity=".85"/>
  <ellipse cx="46" cy="93.4" rx="21" ry="3.8" fill="#e7eef3" opacity=".9"/>
  <g class="bowl">
    <path d="M35 80h22q-1 11-11 12q-10-1-11-12z" fill="#f4f1ea" stroke="#c9c2b4" stroke-width=".6"/>
    <ellipse cx="46" cy="80" rx="11" ry="2.4" fill="#d9822b"/>
    <path d="M38 85h16" stroke="#3e8ed0" stroke-width="1.2"/>
  </g>
  <g class="steam-in"><path d="M42 76q-3-5 0-10t0-10M50 76q-3-5 0-10t0-10"/></g>
  <rect x="13" y="42" width="66" height="62" fill="url(#ID-mesh)"/>
</g>
<path d="M13 60L33 42h14L13 74z" fill="#fff" opacity=".1"/>
<rect x="84" y="38" width="3" height="70" rx="1.5" fill="url(#ID-chrome)"/>
${lcd(90, 42, 21, 10)}
<g fill="#d7dce1" stroke="#9aa2ab" stroke-width=".4">
  <rect x="90" y="57" width="6" height="5" rx="1.2"/><rect x="97.5" y="57" width="6" height="5" rx="1.2"/><rect x="105" y="57" width="6" height="5" rx="1.2"/>
  <rect x="90" y="64" width="6" height="5" rx="1.2"/><rect x="97.5" y="64" width="6" height="5" rx="1.2"/><rect x="105" y="64" width="6" height="5" rx="1.2"/>
  <rect x="90" y="71" width="6" height="5" rx="1.2"/><rect x="97.5" y="71" width="6" height="5" rx="1.2"/><rect x="105" y="71" width="6" height="5" rx="1.2"/>
</g>
<circle cx="100.5" cy="88" r="7" fill="url(#ID-chrome)" stroke="#7d858e" stroke-width=".5"/>
<circle cx="100.5" cy="88" r="4.6" fill="#e9ecef"/>
<g class="knob"><line x1="100.5" y1="88" x2="100.5" y2="84.2" stroke="#4f5964" stroke-width="1.3" stroke-linecap="round"/></g>
<rect class="start" x="90" y="98" width="21" height="6" rx="2"/>`;

SVG.oven = () => `
<defs>${DEFS}<clipPath id="ID-win"><rect x="22" y="56" width="76" height="56" rx="4"/></clipPath>
<linearGradient id="ID-cavity" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a3330"/><stop offset="1" stop-color="#181412"/></linearGradient></defs>
<ellipse cx="60" cy="133" rx="52" ry="5" fill="url(#ID-shadow)"/>
<rect x="10" y="10" width="100" height="120" rx="5" fill="url(#ID-inox)" stroke="#949ca5" stroke-width=".8"/>
<rect x="10" y="10" width="100" height="22" rx="5" fill="url(#ID-dark)"/>
<rect x="10" y="26" width="100" height="6" fill="url(#ID-dark)"/>
<circle cx="24" cy="21" r="7" fill="url(#ID-chrome)" stroke="#5c646d" stroke-width=".5"/>
<circle cx="24" cy="21" r="4.6" fill="#2a3036"/><g class="knob"><line x1="24" y1="21" x2="24" y2="17.2" stroke="#e7eaed" stroke-width="1.3" stroke-linecap="round"/></g>
<circle cx="96" cy="21" r="7" fill="url(#ID-chrome)" stroke="#5c646d" stroke-width=".5"/>
<circle cx="96" cy="21" r="4.6" fill="#2a3036"/><line x1="96" y1="21" x2="99" y2="18.5" stroke="#e7eaed" stroke-width="1.3" stroke-linecap="round"/>
${lcd(43, 15, 34, 12)}
<circle class="led l1" cx="38" cy="21" r="1.3"/>
<rect x="14" y="36" width="92" height="90" rx="3" fill="url(#ID-inox)" stroke="#8f979f" stroke-width=".6"/>
<rect x="20" y="40.5" width="80" height="4.5" rx="2.25" fill="url(#ID-chrome)" stroke="#7d858e" stroke-width=".5"/>
<rect x="24" y="44.5" width="3" height="4" fill="#8f979f"/><rect x="93" y="44.5" width="3" height="4" fill="#8f979f"/>
<rect x="22" y="56" width="76" height="56" rx="4" fill="url(#ID-cavity)"/>
<g clip-path="url(#ID-win)">
  <rect class="ilight" x="22" y="56" width="76" height="56" fill="url(#ID-warm)"/>
  <path class="element" d="M26 61h8l3 3l3-3l3 3l3-3l3 3l3-3l3 3l3-3l3 3l3-3l3 3l3-3l3 3l3-3h8"/>
  <path d="M24 97h72M24 99.5h72" stroke="#8d8680" stroke-width=".9"/>
  <path d="M36 97l3-10h42l3 10z" fill="#b5442f"/>
  <path d="M39 87q21-8 42 0z" fill="#d06a3c"/>
  <ellipse cx="60" cy="86.5" rx="5" ry="1.4" fill="#5b2a1a"/>
  <path d="M42 90h36" stroke="#e48a5c" stroke-width=".8"/>
  <g class="haze"><path d="M44 82q-3-5 0-10t0-10M60 80q-3-5 0-10t0-10M76 82q-3-5 0-10t0-10"/></g>
</g>
<path d="M22 70L44 56h16L22 82z" fill="#fff" opacity=".08"/>
<rect x="22" y="56" width="76" height="56" rx="4" fill="none" stroke="#5d656d" stroke-width="1.2"/>
<rect x="14" y="118" width="92" height="8" rx="1.5" fill="#000" opacity=".12"/>`;

SVG.pellet_stove = () => `
<defs>${DEFS}
<clipPath id="ID-win"><rect x="34" y="46" width="52" height="50" rx="5"/></clipPath>
<linearGradient id="ID-blk" x1="0" x2="1"><stop offset="0" stop-color="#17191c"/><stop offset=".5" stop-color="#34383e"/><stop offset="1" stop-color="#141618"/></linearGradient>
<linearGradient id="ID-white" x1="0" x2="1"><stop offset="0" stop-color="#d9dde2"/><stop offset=".55" stop-color="#ffffff"/><stop offset="1" stop-color="#c9ced4"/></linearGradient>
<linearGradient id="ID-brick" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b1712"/><stop offset="1" stop-color="#0f0706"/></linearGradient>
<radialGradient id="ID-glow" cx=".5" cy=".85" r=".85"><stop offset="0" stop-color="#ffd27a" stop-opacity=".95"/><stop offset=".45" stop-color="#ff7a1a" stop-opacity=".55"/><stop offset="1" stop-color="#3a0d00" stop-opacity="0"/></radialGradient>
<linearGradient id="ID-fl" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#fff3b0"/><stop offset=".3" stop-color="#ffc23d"/><stop offset=".68" stop-color="#ff7a1a"/><stop offset="1" stop-color="#e5381c" stop-opacity="0"/></linearGradient>
<linearGradient id="ID-core" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#ffffff"/><stop offset=".4" stop-color="#fff0a0"/><stop offset="1" stop-color="#ffc23d" stop-opacity="0"/></linearGradient></defs>
<g transform="translate(-6.5 -4.5) scale(1.11)">
<ellipse cx="60" cy="134" rx="44" ry="4.5" fill="url(#ID-shadow)"/>
<g class="flue-smoke"><path d="M57 0q-4-5 0-10t0-10"/><path d="M63 -2q-4-5 0-10t0-10"/></g>
<rect x="53" y="3" width="14" height="11" fill="url(#ID-chrome)"/>
<rect x="51" y="1" width="18" height="4" rx="1.5" fill="url(#ID-chrome)" stroke="#7d858e" stroke-width=".4"/>
<rect x="28" y="124" width="9" height="7" rx="1.5" fill="#24272b"/><rect x="83" y="124" width="9" height="7" rx="1.5" fill="#24272b"/>
<rect x="22" y="14" width="76" height="113" rx="7" fill="url(#ID-blk)" stroke="#0b0c0e" stroke-width=".6"/>
<rect x="22" y="22" width="9.5" height="102" rx="3.5" fill="url(#ID-white)"/>
<rect x="88.5" y="22" width="9.5" height="102" rx="3.5" fill="url(#ID-white)"/>
<rect x="19" y="11" width="82" height="8" rx="3" fill="#2b2f34" stroke="#474c53" stroke-width=".6"/>
<rect x="40" y="12.4" width="40" height="5" rx="1.6" fill="#1b1d21" stroke="#555b63" stroke-width=".5"/>
<path d="M36 23.5h48M36 26h48M36 28.5h48" stroke="#0b0c0e" stroke-width="1.2"/>
${lcd(46, 31.5, 28, 9)}
<circle cx="40" cy="36" r="2" fill="#3b4148" stroke="#5a616a" stroke-width=".4"/>
<circle class="led l1" cx="80" cy="36" r="1.5"/>
<rect x="31" y="43" width="58" height="56" rx="7" fill="#0f1113" stroke="#4a5058" stroke-width=".8"/>
<rect x="34" y="46" width="52" height="50" rx="5" fill="url(#ID-brick)"/>
<g clip-path="url(#ID-win)">
  <path d="M34 56h52M34 66h52M34 76h52M46 46v10M62 46v10M78 46v10M40 56v10M56 56v10M72 56v10M48 66v10M64 66v10M80 66v10" stroke="#3d2219" stroke-width=".6" opacity=".9"/>
  <rect class="glow" x="34" y="46" width="52" height="50" fill="url(#ID-glow)"/>
  <g class="fire">
    <path class="flame f2" d="M52.5 86C46.5 81 47.5 73 50 68C51.5 73 54 73.5 54 69C57.5 74.5 58.5 82 52.5 86Z" fill="url(#ID-fl)"/>
    <path class="flame f3" d="M67.5 86C62 82 63 74 65.5 70C66.5 74.5 68.5 74.5 69.5 70C73.5 76.5 72.5 83 67.5 86Z" fill="url(#ID-fl)"/>
    <path class="flame f1" d="M60 86C51 80 52.5 69 57 62C58 68.5 61 68.5 60.5 60C67.5 67 71 78 60 86Z" fill="url(#ID-fl)"/>
    <path class="flame f5" d="M59.5 68C57.5 62 59.5 56 61.5 52C62.5 58 63.5 62.5 59.5 68Z" fill="url(#ID-fl)" opacity=".85"/>
    <path class="flame f4" d="M60 86C56 83 56 77 58.5 72.5C59.5 76 61.5 76.5 62 73C64.5 78 64.5 83 60 86Z" fill="url(#ID-core)"/>
  </g>
  <g class="smoke-in"><path d="M55 82q-3-6 0-12t0-12"/><path d="M64 82q-3-6 0-12t0-12"/></g>
  <path d="M45 92h30l-3.5-7h-23z" fill="#3a3f45" stroke="#5c636b" stroke-width=".5"/>
  <g class="pellets" fill="#8a5a2b"><rect x="50" y="83.6" width="3" height="1.4" rx=".7"/><rect x="54" y="84.2" width="3" height="1.4" rx=".7" transform="rotate(20 55.5 85)"/><rect x="58" y="83.4" width="3" height="1.4" rx=".7"/><rect x="62" y="84" width="3" height="1.4" rx=".7" transform="rotate(-15 63.5 84.7)"/><rect x="66" y="83.6" width="3" height="1.4" rx=".7"/></g>
  <g class="embers"><circle cx="51" cy="84.6" r=".9"/><circle cx="55.5" cy="85.2" r="1"/><circle cx="59.5" cy="84.4" r=".9"/><circle cx="63.5" cy="85" r="1"/><circle cx="67.5" cy="84.6" r=".9"/></g>
  <circle class="igniter" cx="60" cy="88.5" r="1.8"/>
</g>
<path d="M36 60L50 46h8L36 70z" fill="#fff" opacity=".08"/>
<rect x="34" y="46" width="52" height="50" rx="5" fill="none" stroke="#000" stroke-opacity=".5"/>
<rect x="86.3" y="60" width="2.3" height="16" rx="1.1" fill="url(#ID-chrome)"/>
<rect x="34" y="104" width="52" height="12" rx="2" fill="#18191c" stroke="#3b4047" stroke-width=".6"/>
<rect x="52" y="108.5" width="16" height="3" rx="1.5" fill="#4a5058"/>
<path d="M36 120h48M36 122.5h48" stroke="#0b0c0e" stroke-width="1"/>
<g class="warm-air"><path d="M42 30q-2-3 0-6t0-6"/><path d="M54 30q-2-3 0-6t0-6"/><path d="M66 30q-2-3 0-6t0-6"/><path d="M78 30q-2-3 0-6t0-6"/></g>
</g>`;

SVG.pool_pump = () => `
<defs>${DEFS}
<clipPath id="ID-win"><rect x="22" y="52" width="16" height="32" rx="3"/></clipPath>
<clipPath id="ID-pool"><rect x="0" y="113" width="120" height="27"/></clipPath>
<linearGradient id="ID-motor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3f86d8"/><stop offset=".35" stop-color="#6fb0f0"/><stop offset=".6" stop-color="#2f6fbf"/><stop offset="1" stop-color="#174a85"/></linearGradient>
<linearGradient id="ID-grey" x1="0" x2="1"><stop offset="0" stop-color="#b9c0c7"/><stop offset=".45" stop-color="#eef1f4"/><stop offset="1" stop-color="#a3abb4"/></linearGradient>
<linearGradient id="ID-water" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5fd0ff"/><stop offset="1" stop-color="#0a6fb8"/></linearGradient>
<linearGradient id="ID-pot" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fdcff" stop-opacity=".55"/><stop offset="1" stop-color="#1b88d0" stop-opacity=".85"/></linearGradient></defs>
<rect x="0" y="113" width="120" height="27" fill="url(#ID-water)"/>
<g clip-path="url(#ID-pool)">
  <path d="M0 117h120" stroke="#1d6fa8" stroke-width="2.2" stroke-dasharray="3 1"/>
  <g class="ripple"><path d="M-30 124q5-2 10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0" fill="none" stroke="#fff" stroke-opacity=".45" stroke-width=".9"/>
  <path d="M-25 132q5-2 10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0" fill="none" stroke="#fff" stroke-opacity=".3" stroke-width=".9"/></g>
  <g class="bubbles"><circle cx="108" cy="125" r="1.2"/><circle cx="104" cy="123" r=".9"/><circle cx="106" cy="128" r="1"/><circle cx="101" cy="126" r=".8"/></g>
</g>
<rect x="0" y="108" width="120" height="5.5" fill="#d8d0bf"/>
<path d="M20 108v5.5M44 108v5.5M68 108v5.5M92 108v5.5" stroke="#b7ad98" stroke-width=".6"/>
<rect x="10" y="100" width="100" height="8" fill="#c4bfb4"/><rect x="10" y="100" width="100" height="1.5" fill="#d6d2c8"/>
<g class="pipes">
  <path d="M6 126V72H18" fill="none" stroke="#9aa3ad" stroke-width="8" stroke-linejoin="round"/>
  <path d="M6 126V72H18" fill="none" stroke="#f1f3f5" stroke-width="6" stroke-linejoin="round"/>
  <path d="M52 62V26H112V126" fill="none" stroke="#9aa3ad" stroke-width="8" stroke-linejoin="round"/>
  <path d="M52 62V26H112V126" fill="none" stroke="#f1f3f5" stroke-width="6" stroke-linejoin="round"/>
  <path class="flow" d="M6 126V72H18"/>
  <path class="flow" d="M52 62V26H112V124"/>
  <rect x="2" y="90" width="8" height="5" rx="1" fill="#d5dade" stroke="#9aa3ad" stroke-width=".5"/>
  <rect x="48" y="38" width="8" height="5" rx="1" fill="#d5dade" stroke="#9aa3ad" stroke-width=".5"/>
</g>
<g class="hum">
<rect x="46" y="92" width="56" height="8" rx="1.5" fill="#3a3f45"/>
<rect x="18" y="44" width="24" height="48" rx="4" fill="url(#ID-grey)" stroke="#8f979f" stroke-width=".6"/>
<rect x="16" y="35" width="28" height="9" rx="2.5" fill="#2b3036"/>
<rect x="19" y="36.5" width="22" height="3" rx="1.5" fill="#cfe9ff" opacity=".55"/>
<rect x="22" y="52" width="16" height="32" rx="3" fill="url(#ID-pot)"/>
<g clip-path="url(#ID-win)">
  <path d="M23 58h14M23 64h14M23 70h14M23 76h14M26 52v32M30 52v32M34 52v32" stroke="#ffffff" stroke-opacity=".35" stroke-width=".5"/>
  <g class="swirl">
    <path d="M30 68m-5 0a5 5 0 1 0 10 0a5 5 0 1 0-10 0" fill="none" stroke="#ffffff" stroke-opacity=".55" stroke-width=".8" stroke-dasharray="4 3"/>
    <path d="M27 63q2-2 4 0q-2 1.5-4 0z" fill="#5c9a34"/><path d="M32 72q2-2 4 0q-2 1.5-4 0z" fill="#8a6a2b"/><path d="M26 74q1.5-2 3.5 0q-1.5 1.5-3.5 0z" fill="#4f8a2a"/>
  </g>
</g>
<rect x="22" y="52" width="16" height="32" rx="3" fill="none" stroke="#6f7881" stroke-width=".6"/>
<circle cx="52" cy="74" r="13" fill="url(#ID-grey)" stroke="#8f979f" stroke-width=".6"/>
<circle cx="52" cy="74" r="8" fill="none" stroke="#a7afb7" stroke-width=".7"/>
<rect x="60" y="56" width="42" height="36" rx="6" fill="url(#ID-motor)"/>
<path d="M65 58v32M69 58v32M73 58v32M77 58v32M81 58v32M85 58v32M89 58v32M93 58v32M97 58v32" stroke="#123a6a" stroke-opacity=".45" stroke-width=".9"/>
<rect x="64" y="45" width="32" height="11" rx="2" fill="#1d2126" stroke="#40464e" stroke-width=".5"/>
${lcd(66, 46.5, 24, 8)}
<circle class="led l1" cx="93" cy="50.5" r="1.3"/>
<rect x="99" y="58" width="10" height="32" rx="3" fill="url(#ID-grey)" stroke="#8f979f" stroke-width=".6"/>
<g class="fan"><path d="M104 74l-3.5-5.5M104 74l6-1M104 74l-2.5 6" stroke="#5b636c" stroke-width="2" stroke-linecap="round"/></g>
<path d="M100.5 63h7M100.5 67h7M100.5 71h7M100.5 75h7M100.5 79h7M100.5 83h7" stroke="#6f7881" stroke-width=".9"/>
<path d="M64 60q10-3 34 0" stroke="#fff" stroke-opacity=".35" stroke-width="1.4" fill="none"/>
</g>`;

SVG.printer_3d = () => `
<defs>${DEFS}
<clipPath id="ID-obj"><rect class="objclip" x="40" y="66" width="40" height="38"/></clipPath>
<linearGradient id="ID-frame" x1="0" x2="1"><stop offset="0" stop-color="#2a2e33"/><stop offset=".5" stop-color="#4a5058"/><stop offset="1" stop-color="#23272b"/></linearGradient>
<linearGradient id="ID-alu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f1f3f5"/><stop offset=".5" stop-color="#b9c0c7"/><stop offset="1" stop-color="#8d959e"/></linearGradient>
<linearGradient id="ID-pei" x1="0" x2="1"><stop offset="0" stop-color="#3a3326"/><stop offset=".5" stop-color="#6b5a3a"/><stop offset="1" stop-color="#3a3326"/></linearGradient>
<linearGradient id="ID-fil" x1="0" x2="1"><stop offset="0" style="stop-color:var(--fil)" stop-opacity=".75"/><stop offset=".45" style="stop-color:var(--fil)"/><stop offset="1" style="stop-color:var(--fil)" stop-opacity=".7"/></linearGradient>
<pattern id="ID-layers" width="4" height="1.3" patternUnits="userSpaceOnUse"><rect width="4" height=".55" fill="#000" opacity=".18"/></pattern></defs>
<ellipse cx="60" cy="133" rx="50" ry="4.5" fill="url(#ID-shadow)"/>
<g class="spool">
  <circle cx="97" cy="20" r="11" fill="#1f2226" stroke="#3b4047" stroke-width=".6"/>
  <circle cx="97" cy="20" r="9" style="fill:var(--fil)"/>
  <circle cx="97" cy="20" r="9" fill="none" stroke="#000" stroke-opacity=".22" stroke-width="2.6" stroke-dasharray=".8 1.2"/>
  <circle cx="97" cy="20" r="4" fill="#2b2f34" stroke="#555b63" stroke-width=".6"/>
  <circle cx="97" cy="20" r="1.6" fill="#8d959e"/>
  <path d="M93 16.5l2 2M101 16.5l-2 2M93 23.5l2-2M101 23.5l-2-2" stroke="#555b63" stroke-width=".8"/>
</g>
<rect x="94" y="32" width="6" height="10" rx="1.5" fill="url(#ID-frame)"/>
<rect x="17" y="16" width="10" height="100" rx="2.5" fill="url(#ID-frame)"/>
<rect x="15.5" y="13" width="13" height="5" rx="2" fill="#33373d"/>
<rect x="20.8" y="20" width="2.4" height="92" rx="1.2" fill="url(#ID-alu)" opacity=".85"/>
<rect x="10" y="112" width="100" height="16" rx="4" fill="url(#ID-frame)" stroke="#16181b" stroke-width=".6"/>
<rect x="12" y="113" width="96" height="1.6" rx=".8" fill="#fff" opacity=".12"/>
${lcd(78, 116, 26, 9)}
<circle class="led l1" cx="72" cy="120.5" r="1.4"/>
<rect x="32" y="108" width="56" height="4" rx="1" fill="#5d646c"/>
<g class="bedheat"><path d="M40 101q-2-3 0-6t0-6"/><path d="M54 101q-2-3 0-6t0-6"/><path d="M66 101q-2-3 0-6t0-6"/><path d="M80 101q-2-3 0-6t0-6"/></g>
<rect x="30" y="104" width="60" height="4.5" rx="1" fill="url(#ID-pei)" stroke="#1c1a15" stroke-width=".5"/>
<g clip-path="url(#ID-obj)"><g class="object">
  <path d="M49 104C47 96 45 88 48 80C50 74 52 70 52 66H68C68 70 70 74 72 80C75 88 73 96 71 104Z" fill="url(#ID-fil)"/>
  <path d="M49 104C47 96 45 88 48 80C50 74 52 70 52 66H68C68 70 70 74 72 80C75 88 73 96 71 104Z" fill="url(#ID-layers)"/>
  <path d="M53 101C52 94 51 88 53 82" stroke="#fff" stroke-opacity=".35" stroke-width="1.4" fill="none" stroke-linecap="round"/>
</g></g>
<g class="gantry">
  <rect x="22" y="82" width="76" height="5" rx="1.5" fill="url(#ID-alu)" stroke="#7d858e" stroke-width=".4"/>
  <rect x="94" y="80" width="6" height="9" rx="1.5" fill="url(#ID-frame)"/>
  <g class="head">
    <rect x="51" y="78" width="18" height="21" rx="3" fill="#ececec" stroke="#a7afb7" stroke-width=".6"/>
    <rect x="51" y="78" width="18" height="5" rx="2" fill="#2b2f34"/>
    <circle cx="60" cy="90" r="4.2" fill="#2b2f34"/>
    <g class="hfan"><path d="M60 90l0-3.4M60 90l2.9 1.7M60 90l-2.9 1.7" stroke="#8d959e" stroke-width="1.3" stroke-linecap="round"/></g>
    <path d="M57.5 99h5l-1.6 4h-1.8z" fill="#c9a43a" stroke="#8a6d1f" stroke-width=".4"/>
    <path d="M69 81q12-4 25-30" fill="none" stroke="#e9ecef" stroke-opacity=".75" stroke-width="1.6" stroke-linecap="round"/>
    <circle class="tip" cx="60" cy="103.4" r="1.2"/>
    <rect class="filpath" x="59.2" y="70" width="1.6" height="8" style="fill:var(--fil)"/>
  </g>
</g>`;

SVG.radiator = () => `
<defs>${DEFS}
<clipPath id="ID-fins"><path d="M12.0 27H23.4V100Q23.4 104 20.4 104H15.0Q12.0 104 12.0 100Z"/><path d="M24.8 27H36.2V100Q36.2 104 33.2 104H27.8Q24.8 104 24.8 100Z"/><path d="M37.6 27H49.0V100Q49.0 104 46.0 104H40.6Q37.6 104 37.6 100Z"/><path d="M50.4 27H61.8V100Q61.8 104 58.8 104H53.4Q50.4 104 50.4 100Z"/><path d="M63.2 27H74.6V100Q74.6 104 71.6 104H66.2Q63.2 104 63.2 100Z"/><path d="M76.0 27H87.4V100Q87.4 104 84.4 104H79.0Q76.0 104 76.0 100Z"/></clipPath>
<linearGradient id="ID-fin" x1="0" x2="1"><stop offset="0" stop-color="#e3e6e9"/><stop offset=".25" stop-color="#ffffff"/><stop offset=".85" stop-color="#f6f7f8"/><stop offset="1" stop-color="#d9dde1"/></linearGradient>
<linearGradient id="ID-side" x1="0" x2="1"><stop offset="0" stop-color="#e7eaed"/><stop offset="1" stop-color="#cdd2d7"/></linearGradient>
<linearGradient id="ID-heatglow" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#ff8a3d" stop-opacity=".15"/><stop offset="1" stop-color="#ff5a1f" stop-opacity=".9"/></linearGradient>
<linearGradient id="ID-box" x1="0" x2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#e2e5e8"/></linearGradient></defs>
<g class="rwaves"><path d="M22 18q-3-5 0-10t0-10"/><path d="M38 16q-3-5 0-10t0-10"/><path d="M54 18q-3-5 0-10t0-10"/><path d="M70 16q-3-5 0-10t0-10"/></g>
<g class="cold-air"><path d="M-6 50q6-3 12 0t12 0"/><path d="M-8 66q6-3 12 0t12 0"/><path d="M-6 82q6-3 12 0t12 0"/></g>
<path d="M16 30H95.4V108H16Z" fill="#000" opacity=".1" filter="blur(2px)"/>
<path d="M87.4 27L91.4 23V100L87.4 104Z" fill="url(#ID-side)" stroke="#c9ced4" stroke-width=".4"/>
<circle cx="89.4" cy="31" r="1.6" fill="#e9ecef" stroke="#aeb5bc" stroke-width=".5"/>
<path d="M12.0 27L15.5 23H26.9L23.4 27Z" fill="#eef0f2" stroke="#cfd4d9" stroke-width=".4"/><rect x="15.0" y="24" width="8.4" height="1.6" rx=".8" fill="#c3c9cf"/><path d="M24.8 27L28.3 23H39.7L36.2 27Z" fill="#eef0f2" stroke="#cfd4d9" stroke-width=".4"/><rect x="27.8" y="24" width="8.4" height="1.6" rx=".8" fill="#c3c9cf"/><path d="M37.6 27L41.1 23H52.5L49.0 27Z" fill="#eef0f2" stroke="#cfd4d9" stroke-width=".4"/><rect x="40.6" y="24" width="8.4" height="1.6" rx=".8" fill="#c3c9cf"/><path d="M50.4 27L53.9 23H65.3L61.8 27Z" fill="#eef0f2" stroke="#cfd4d9" stroke-width=".4"/><rect x="53.4" y="24" width="8.4" height="1.6" rx=".8" fill="#c3c9cf"/><path d="M63.2 27L66.7 23H78.1L74.6 27Z" fill="#eef0f2" stroke="#cfd4d9" stroke-width=".4"/><rect x="66.2" y="24" width="8.4" height="1.6" rx=".8" fill="#c3c9cf"/><path d="M76.0 27L79.5 23H90.9L87.4 27Z" fill="#eef0f2" stroke="#cfd4d9" stroke-width=".4"/><rect x="79.0" y="24" width="8.4" height="1.6" rx=".8" fill="#c3c9cf"/>
<path d="M12.0 27H23.4V100Q23.4 104 20.4 104H15.0Q12.0 104 12.0 100Z" fill="url(#ID-fin)" stroke="#d2d6da" stroke-width=".4"/><path d="M24.8 27H36.2V100Q36.2 104 33.2 104H27.8Q24.8 104 24.8 100Z" fill="url(#ID-fin)" stroke="#d2d6da" stroke-width=".4"/><path d="M37.6 27H49.0V100Q49.0 104 46.0 104H40.6Q37.6 104 37.6 100Z" fill="url(#ID-fin)" stroke="#d2d6da" stroke-width=".4"/><path d="M50.4 27H61.8V100Q61.8 104 58.8 104H53.4Q50.4 104 50.4 100Z" fill="url(#ID-fin)" stroke="#d2d6da" stroke-width=".4"/><path d="M63.2 27H74.6V100Q74.6 104 71.6 104H66.2Q63.2 104 63.2 100Z" fill="url(#ID-fin)" stroke="#d2d6da" stroke-width=".4"/><path d="M76.0 27H87.4V100Q87.4 104 84.4 104H79.0Q76.0 104 76.0 100Z" fill="url(#ID-fin)" stroke="#d2d6da" stroke-width=".4"/>
<g clip-path="url(#ID-fins)"><rect class="rglow" x="10" y="26" width="87.4" height="80" fill="url(#ID-heatglow)"/></g>
<path d="M82.4 84h18q2 0 2 2v16q0 3-3 6l-3 10h-10q-2 0-2-2V86q0-2 2-2z" fill="url(#ID-box)" stroke="#bfc6ce" stroke-width=".6"/>
${lcd(84.8, 86.5, 15, 8)}
<g class="micon m-comfort" transform="translate(87.4 97.3) scale(.48)"><circle r="2.2"/><path d="M0-4.2v1.1M0 3.1v1.1M-4.2 0h1.1M3.1 0h1.1M-3 -3l.8.8M2.2 2.2l.8.8M-3 3l.8-.8M2.2-2.2l.8-.8" stroke-width=".9" stroke-linecap="round"/></g>
<g class="micon m-eco" transform="translate(92.4 97.3) scale(.48)"><path d="M1.6-3a3.4 3.4 0 1 0 1.8 5.6a2.8 2.8 0 0 1-1.8-5.6z"/></g>
<g class="micon m-frost" transform="translate(97.4 97.3) scale(.48)"><path d="M0-3.4v6.8M-3 -1.7l6 3.4M-3 1.7l6-3.4" stroke-width="1.1" stroke-linecap="round"/></g>
<g fill="#eef0f2" stroke="#a7aeb5" stroke-width=".4"><circle cx="86.8" cy="102.5" r="1.4"/><circle cx="91.8" cy="102.5" r="1.4"/><circle cx="96.8" cy="102.5" r="1.4"/><circle cx="89.3" cy="106.5" r="1.4"/><circle cx="94.3" cy="106.5" r="1.4"/></g>
<circle class="led l1" cx="96.8" cy="106.5" r=".8"/>`;

SVG.range_hood = () => `
<defs>${DEFS}
<linearGradient id="ID-beam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff4c9" stop-opacity=".55"/><stop offset="1" stop-color="#fff4c9" stop-opacity="0"/></linearGradient>
<linearGradient id="ID-glass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b3138"/><stop offset="1" stop-color="#0d1013"/></linearGradient></defs>
<ellipse cx="60" cy="133" rx="52" ry="4" fill="url(#ID-shadow)"/>
<g class="hd-beam"><path d="M24 80l-12 40h32z" fill="url(#ID-beam)"/><path d="M96 80l-12 40h32z" fill="url(#ID-beam)"/></g>
<g class="hd-air"><path d="M38 118q-4-18 10-36"/><path d="M60 116v-34"/><path d="M82 118q4-18-10-36"/><path d="M28 112q2-16 18-30"/><path d="M92 112q-2-16-18-30"/></g>
<g class="hd-steam"><path d="M54 96q-3-5 0-9t0-9"/><path d="M60 95q-3-5 0-9t0-9"/><path d="M66 96q-3-5 0-9t0-9"/></g>
<rect x="46" y="4" width="28" height="46" fill="url(#ID-inox)" stroke="#8f979f" stroke-width=".6"/>
<path d="M48 4v46" stroke="#fff" stroke-opacity=".6" stroke-width="1.2"/>
<path d="M50 40h20M50 43h20M50 46h20" stroke="#6f7780" stroke-width=".7"/>
<path d="M16 50h88l10 20h-108z" fill="url(#ID-inox)" stroke="#7d858e" stroke-width=".6"/>
<path d="M20 52h40l-6 16h-44z" fill="#fff" opacity=".18"/>
<rect x="6" y="70" width="108" height="8" rx="1.5" fill="url(#ID-chrome)" stroke="#6f7780" stroke-width=".5"/>
<circle cx="60" cy="60" r="7.5" fill="#22272d" stroke="#6f7780" stroke-width=".6"/>
<g class="hd-fan"><path d="M60 60l0-6.2M60 60l5.4 3.1M60 60l-5.4 3.1" stroke="#a9b1ba" stroke-width="2.4" stroke-linecap="round"/></g>
<circle cx="60" cy="60" r="1.6" fill="#d7dce1"/>
<circle cx="60" cy="60" r="7.5" fill="url(#ID-holes)" opacity=".6"/>
<circle class="hd-led s1" cx="86" cy="74" r="1.4"/><circle class="hd-led s2" cx="93" cy="74" r="1.4"/><circle class="hd-led s3" cx="100" cy="74" r="1.4"/>
<circle class="hd-led lt" cx="20" cy="74" r="1.4"/>
<path d="M17 74h-3M27 74h-3" stroke="#59616b" stroke-width=".8"/>
<rect x="9" y="78" width="102" height="3" rx="1" fill="#2a2f35"/><rect x="12" y="78" width="96" height="3" fill="url(#ID-mesh)"/>
<rect class="hd-lamp" x="20" y="79.6" width="8" height="1.8" rx=".9"/><rect class="hd-lamp" x="92" y="79.6" width="8" height="1.8" rx=".9"/>
<path d="M45 98h30v16q0 4-4 4h-22q-4 0-4-4z" fill="url(#ID-inox)" stroke="#7d858e" stroke-width=".6"/>
<rect x="44" y="96" width="32" height="3" rx="1.5" fill="url(#ID-chrome)"/><rect x="57" y="93.5" width="6" height="3" rx="1.2" fill="#2a2f35"/>
<path d="M45 102h-5M75 102h5" stroke="#2a2f35" stroke-width="2.2" stroke-linecap="round"/>
<rect x="10" y="118" width="100" height="7" rx="1.5" fill="url(#ID-glass)" stroke="#05070a" stroke-width=".5"/>
<ellipse class="hd-zone" cx="60" cy="119.5" rx="17" ry="1.3"/>
<ellipse cx="88" cy="121" rx="10" ry="1.2" fill="none" stroke="#3a424b" stroke-width=".6"/>`;

SVG.server_rack = () => `
<defs>${DEFS}
<linearGradient id="ID-rkframe" x1="0" x2="1"><stop offset="0" stop-color="#2a2f35"/><stop offset=".5" stop-color="#14171b"/><stop offset="1" stop-color="#262b31"/></linearGradient>
<linearGradient id="ID-rkunit" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b424a"/><stop offset=".15" stop-color="#262b31"/><stop offset="1" stop-color="#16191d"/></linearGradient>
<linearGradient id="ID-rkblue" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b9cff" stop-opacity=".5"/><stop offset="1" stop-color="#3b9cff" stop-opacity="0"/></linearGradient></defs>
<ellipse cx="60" cy="135" rx="50" ry="3.5" fill="url(#ID-shadow)"/>
<rect x="16" y="4" width="88" height="126" rx="3" fill="url(#ID-rkframe)" stroke="#4a525a" stroke-width=".8"/>
<rect x="22" y="10" width="76" height="114" fill="#07090b"/>
<path d="M19 12v110M101 12v110" stroke="#556068" stroke-width=".6" stroke-dasharray="1.2 4.2"/>
<g class="rk-glow"><rect x="22" y="92" width="76" height="30" fill="url(#ID-rkblue)"/></g>
<rect x="24" y="12" width="72" height="7" rx="1" fill="url(#ID-rkunit)" stroke="#59616b" stroke-width=".4"/>
<circle class="rk-led rk-g" cx="30" cy="15.5" r="1"/><circle class="rk-led rk-r" cx="35" cy="15.5" r="1"/>
<path d="M44 14h4M50 14h4M56 14h4M62 14h4M68 14h4M74 14h4M80 14h4M86 14h4" stroke="#7d858e" stroke-width="1.4"/>
<path d="M44 17.2h46" stroke="#59616b" stroke-width=".5"/>
<rect x="24" y="30" width="72" height="1" fill="#2b3138"/>
<rect x="46" y="22" width="28" height="8" rx="1.6" fill="#d7dce1" stroke="#9aa2ab" stroke-width=".4"/>
<circle class="rk-led rk-g" cx="52" cy="26" r="1"/><circle class="rk-led rk-g" cx="57" cy="26" r="1" style="animation-delay:.4s"/><circle class="rk-led rk-b" cx="62" cy="26" r="1" style="animation-delay:.9s"/>
<rect x="24" y="32" width="72" height="14" rx="1" fill="url(#ID-rkunit)" stroke="#59616b" stroke-width=".4"/>
<rect x="26" y="33.6" width="24" height="3.2" rx=".8" fill="#e9ecef"/>
<path d="M30 40h40M30 42.4h40M30 44.8h40" stroke="#080a0d" stroke-width="1.2" stroke-linecap="round" opacity=".9"/>
<circle class="rk-led rk-g" cx="84" cy="36.5" r="1"/><circle class="rk-led rk-g" cx="89" cy="36.5" r="1" style="animation-delay:.6s"/>
<g class="rk-fan"><circle cx="80" cy="42" r="3.2" fill="#0b0d10"/><path d="M80 42v-3M80 42l2.6 1.5M80 42l-2.6 1.5" stroke="#8d959f" stroke-width="1" stroke-linecap="round"/><circle cx="80" cy="42" r="3.2" fill="none"/></g>
<rect x="24" y="48" width="72" height="7" rx="1" fill="#dfe3e7" stroke="#9aa2ab" stroke-width=".4"/>
<path d="M27 50h3v3h-3zM32 50h3v3h-3zM37 50h3v3h-3zM42 50h3v3h-3zM47 50h3v3h-3zM52 50h3v3h-3zM57 50h3v3h-3zM62 50h3v3h-3zM67 50h3v3h-3zM72 50h3v3h-3zM77 50h3v3h-3zM82 50h3v3h-3z" fill="#2b3138"/>
<path d="M28.5 53v4M33.5 53v5M38.5 53v4M43.5 53v6M48.5 53v4" stroke="#f4f6f8" stroke-width="1.4" stroke-linecap="round"/>
<rect x="24" y="57" width="72" height="9" rx="1" fill="url(#ID-rkunit)" stroke="#59616b" stroke-width=".4"/>
<text x="29" y="63.4" font-family="Arial,sans-serif" font-size="3.6" font-weight="700" fill="#e04b3c">APC</text>
<rect x="60" y="58.4" width="30" height="6.4" rx="1.2" fill="#0c1720" stroke="#8f98a2" stroke-width=".4"/>
<text class="lcd" x="75" y="63.6" text-anchor="middle">OFF</text>
<rect x="24" y="68" width="72" height="8" rx="1" fill="url(#ID-panel)" stroke="#9aa2ab" stroke-width=".4"/>
<rect x="27" y="70" width="40" height="4" rx=".8" fill="#2b3138"/>
<circle class="rk-led rk-g" cx="30" cy="72" r=".9"/><circle class="rk-led rk-g" cx="34" cy="72" r=".9" style="animation-delay:.2s"/><circle class="rk-led rk-g" cx="38" cy="72" r=".9" style="animation-delay:.7s"/>
<circle class="rk-led rk-g" cx="42" cy="72" r=".9" style="animation-delay:.4s"/><circle class="rk-led rk-g" cx="46" cy="72" r=".9" style="animation-delay:1s"/><circle class="rk-led rk-g" cx="50" cy="72" r=".9" style="animation-delay:.1s"/>
<circle class="rk-led rk-g" cx="54" cy="72" r=".9" style="animation-delay:.8s"/><circle class="rk-led rk-g" cx="58" cy="72" r=".9" style="animation-delay:.5s"/><circle class="rk-led rk-g" cx="62" cy="72" r=".9" style="animation-delay:1.2s"/>
<path d="M72 72h20" stroke="#7d858e" stroke-width="2" stroke-linecap="round"/>
<rect x="24" y="78" width="72" height="14" rx="1" fill="url(#ID-rkunit)" stroke="#59616b" stroke-width=".4"/>
<rect x="26" y="80" width="30" height="10" rx="1" fill="#0b0d10"/>
<g class="rk-fan"><circle cx="34" cy="85" r="4" fill="#15181c"/><path d="M34 85v-3.6M34 85l3.1 1.8M34 85l-3.1 1.8" stroke="#a9b1ba" stroke-width="1.3" stroke-linecap="round"/><circle cx="34" cy="85" r="4" fill="none"/></g>
<g class="rk-fan"><circle cx="48" cy="85" r="4" fill="#15181c"/><path d="M48 85v-3.6M48 85l3.1 1.8M48 85l-3.1 1.8" stroke="#a9b1ba" stroke-width="1.3" stroke-linecap="round"/><circle cx="48" cy="85" r="4" fill="none"/></g>
<rect x="26" y="80" width="30" height="10" fill="url(#ID-mesh)" opacity=".5"/>
<circle class="rk-led rk-g" cx="84" cy="82" r="1"/><circle class="rk-led rk-b" cx="89" cy="82" r="1" style="animation-delay:.7s"/>
<path d="M62 85h14M62 88h14" stroke="#4a525a" stroke-width=".8"/>
<rect x="24" y="94" width="72" height="26" rx="1.5" fill="url(#ID-rkunit)" stroke="#59616b" stroke-width=".4"/>
<g fill="#0a0c0f" stroke="#4a525a" stroke-width=".5">
  <rect x="27" y="97" width="12" height="9" rx=".8"/><rect x="41" y="97" width="12" height="9" rx=".8"/><rect x="55" y="97" width="12" height="9" rx=".8"/><rect x="69" y="97" width="12" height="9" rx=".8"/>
  <rect x="27" y="108" width="12" height="9" rx=".8"/><rect x="41" y="108" width="12" height="9" rx=".8"/><rect x="55" y="108" width="12" height="9" rx=".8"/><rect x="69" y="108" width="12" height="9" rx=".8"/>
</g>
<g class="rk-hdd">
  <rect class="rk-led rk-b" x="29" y="103.6" width="8" height="1.4"/><rect class="rk-led rk-b" x="43" y="103.6" width="8" height="1.4" style="animation-delay:.5s"/>
  <rect class="rk-led rk-b" x="57" y="103.6" width="8" height="1.4" style="animation-delay:1.1s"/><rect class="rk-led rk-b" x="71" y="103.6" width="8" height="1.4" style="animation-delay:.3s"/>
  <rect class="rk-led rk-b" x="29" y="114.6" width="8" height="1.4" style="animation-delay:.9s"/><rect class="rk-led rk-b" x="43" y="114.6" width="8" height="1.4" style="animation-delay:.2s"/>
  <rect class="rk-led rk-b" x="57" y="114.6" width="8" height="1.4" style="animation-delay:.7s"/><rect class="rk-led rk-b" x="71" y="114.6" width="8" height="1.4" style="animation-delay:1.3s"/>
</g>
<rect x="85" y="97" width="9" height="20" rx="1" fill="#15181c" stroke="#4a525a" stroke-width=".4"/>
<circle class="rk-led rk-g" cx="89.5" cy="102" r="1"/><circle class="rk-led rk-b" cx="89.5" cy="107" r="1" style="animation-delay:.6s"/>
<g class="rk-cables" fill="none" stroke-linecap="round">
  <path d="M27 54q-9 2 -6 10t6 10" stroke="#2dd4bf" stroke-width="1.3"/><path d="M29 54q-12 4 -8 14t8 8" stroke="#f5d90a" stroke-width="1.3"/>
  <path d="M93 54q9 2 6 10t-6 10" stroke="#2dd4bf" stroke-width="1.3"/>
</g>
<g class="rk-flow" fill="none" stroke-linecap="round" stroke-width="1.6">
  <path d="M27 54q-9 2 -6 10t6 10"/><path d="M29 54q-12 4 -8 14t8 8"/><path d="M93 54q9 2 6 10t-6 10"/>
</g>
<rect x="22" y="121" width="76" height="3" fill="#1c2024"/>
<path d="M18 130v4M102 130v4" stroke="#14171b" stroke-width="4" stroke-linecap="round"/>
<path d="M20 6h80" stroke="#fff" stroke-opacity=".25" stroke-width="1"/>`;

SVG.solar = () => `
<defs>${DEFS}
<clipPath id="ID-pan"><path d="M7.1 93.1L40.4 93.1L53.9 50.9L20.6 50.9Z M42.1 93.1L75.4 93.1L88.9 50.9L55.6 50.9Z"/></clipPath>
<linearGradient id="ID-cell" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#132a52"/><stop offset=".55" stop-color="#1f4683"/><stop offset="1" stop-color="#3a6fb8"/></linearGradient>
<linearGradient id="ID-rail" x1="0" x2="1"><stop offset="0" stop-color="#8d959e"/><stop offset=".5" stop-color="#e3e7eb"/><stop offset="1" stop-color="#7d858e"/></linearGradient>
<linearGradient id="ID-sweep" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".55"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
<radialGradient id="ID-sunglow"><stop offset="0" stop-color="#fff6c2" stop-opacity=".9"/><stop offset=".5" stop-color="#ffd23f" stop-opacity=".35"/><stop offset="1" stop-color="#ffd23f" stop-opacity="0"/></radialGradient></defs>
<g class="sunwrap">
    <circle cx="98" cy="20" r="22" fill="url(#ID-sunglow)"/>
    <g class="rays"><path d="M98 4v5M98 31v5M82 20h5M109 20h5M86.7 8.7l3.5 3.5M105.8 27.8l3.5 3.5M86.7 31.3l3.5-3.5M105.8 12.2l3.5-3.5" stroke="#ffc51a" stroke-width="2.2" stroke-linecap="round"/></g>
    <circle cx="98" cy="20" r="8" fill="#ffd23f" stroke="#ffb400" stroke-width="1"/>
  </g>
<ellipse cx="46" cy="113" rx="40" ry="3.5" fill="url(#ID-shadow)"/>
<!-- rear legs and braces (behind the panels) -->
<rect x="24" y="52" width="3" height="58" fill="url(#ID-rail)"/>
<rect x="84" y="52" width="3" height="58" fill="url(#ID-rail)"/>
<path d="M26 104L84 78M26 80L84 104" stroke="#9aa3ad" stroke-width="1.2"/>
<path d="M26 92L12 104M86 92L72 104" stroke="#9aa3ad" stroke-width="1.2"/>
<!-- front legs -->
<rect x="9" y="92" width="2.6" height="18" fill="url(#ID-rail)"/>
<rect x="69" y="92" width="2.6" height="18" fill="url(#ID-rail)"/>
<!-- concrete blocks -->
<rect x="5.5" y="108" width="10" height="5" rx="1" fill="#b8b4ac" stroke="#8f8a80" stroke-width=".5"/>
<rect x="65.5" y="108" width="10" height="5" rx="1" fill="#b8b4ac" stroke="#8f8a80" stroke-width=".5"/>
<rect x="20.5" y="108" width="10" height="5" rx="1" fill="#b8b4ac" stroke="#8f8a80" stroke-width=".5"/>
<rect x="80.5" y="108" width="10" height="5" rx="1" fill="#b8b4ac" stroke="#8f8a80" stroke-width=".5"/>
<!-- panels -->
<path d="M6.0 94.0L76.0 94.0L90.0 50.0L20.0 50.0Z" fill="#c9d1da" stroke="#8d959e" stroke-width=".8" stroke-linejoin="round"/>
<path d="M7.1 93.1L40.4 93.1L53.9 50.9L20.6 50.9Z M42.1 93.1L75.4 93.1L88.9 50.9L55.6 50.9Z" fill="url(#ID-cell)" stroke="#dfe5ea" stroke-width="1" stroke-linejoin="round"/>
<path d="M9.4 86.1L42.7 86.1M11.6 79.0L44.9 79.0M13.8 72.0L47.2 72.0M16.1 65.0L49.4 65.0M18.3 57.9L51.6 57.9M15.4 93.1L28.9 50.9M23.8 93.1L37.2 50.9M32.1 93.1L45.5 50.9M44.4 86.1L77.7 86.1M46.6 79.0L79.9 79.0M48.8 72.0L82.2 72.0M51.1 65.0L84.4 65.0M53.3 57.9L86.6 57.9M50.5 93.1L63.9 50.9M58.8 93.1L72.2 50.9M67.1 93.1L80.5 50.9" stroke="#6f97d4" stroke-width=".35" opacity=".85"/>
<g clip-path="url(#ID-pan)"><rect class="sweep" x="-20" y="44" width="24" height="54" fill="url(#ID-sweep)" transform="skewX(-18)"/></g>
<path class="panglow" d="M7.1 93.1L40.4 93.1L53.9 50.9L20.6 50.9Z M42.1 93.1L75.4 93.1L88.9 50.9L55.6 50.9Z" fill="#ffe28a"/>
<path class="panshade" d="M7.1 93.1L40.4 93.1L53.9 50.9L20.6 50.9Z M42.1 93.1L75.4 93.1L88.9 50.9L55.6 50.9Z" fill="#0b1630"/>
<!-- cable to inverter -->
<path d="M70 92V106H101V98" fill="none" stroke="#2b2f34" stroke-width="1.6" stroke-linejoin="round"/>
<path class="sflow" d="M70 92V106H101V98"/>
<!-- inverter on its post -->
<rect x="100" y="94" width="3" height="16" fill="url(#ID-rail)"/>
<rect x="97" y="108" width="9" height="5" rx="1" fill="#b8b4ac" stroke="#8f8a80" stroke-width=".5"/>
<rect x="91" y="64" width="22" height="32" rx="2.5" fill="#e7eaee" stroke="#9aa3ad" stroke-width=".6"/>
<rect x="91" y="64" width="22" height="4.5" rx="2" fill="#cfd5db"/>
<path d="M94 88h16M94 90.5h16M94 93h16" stroke="#b3bac2" stroke-width=".6"/>
${lcd(93, 71, 18, 8)}
<circle class="led l1" cx="96" cy="83" r="1.3"/>
<path d="M104 80l-2 4h3l-2 4" stroke="#ffb400" stroke-width=".9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;

SVG.towel_dryer = () => `
<defs>${DEFS}
<linearGradient id="ID-tdglow" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffb877"/><stop offset="1" stop-color="#ff6a1f"/></linearGradient>
<linearGradient id="ID-tdtowel" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2f9fb3"/><stop offset=".5" stop-color="#58c3d4"/><stop offset="1" stop-color="#2a8ea1"/></linearGradient>
<linearGradient id="ID-tdwall" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7a828b" stop-opacity=".16"/><stop offset="1" stop-color="#7a828b" stop-opacity="0"/></linearGradient></defs>
<rect x="14" y="10" width="92" height="116" rx="6" fill="url(#ID-tdwall)"/>
<g class="td-heat"><path d="M44 112q-4-20 2-44t-2-44"/><path d="M60 112q4-20-2-44t2-44"/><path d="M76 112q-4-20 2-44t-2-44"/></g>
<rect x="22" y="16" width="9" height="106" rx="4.5" fill="#000" opacity=".12"/>
<rect x="89" y="16" width="9" height="106" rx="4.5" fill="#000" opacity=".12"/>
<path d="M44 55h32v22h-32z" fill="#237a8b"/>
<g class="td-bars">
  <rect x="29" y="22" width="62" height="5" rx="2.5" fill="url(#ID-body)" stroke="#aeb6be" stroke-width=".5"/>
  <rect x="29" y="38" width="62" height="5" rx="2.5" fill="url(#ID-body)" stroke="#aeb6be" stroke-width=".5"/>
  <rect x="29" y="54" width="62" height="5" rx="2.5" fill="url(#ID-body)" stroke="#aeb6be" stroke-width=".5"/>
  <rect x="29" y="70" width="62" height="5" rx="2.5" fill="url(#ID-body)" stroke="#aeb6be" stroke-width=".5"/>
  <rect x="29" y="86" width="62" height="5" rx="2.5" fill="url(#ID-body)" stroke="#aeb6be" stroke-width=".5"/>
  <rect x="29" y="102" width="62" height="5" rx="2.5" fill="url(#ID-body)" stroke="#aeb6be" stroke-width=".5"/>
</g>
<g class="td-glow" fill="url(#ID-tdglow)">
  <rect x="29" y="22" width="62" height="5" rx="2.5"/><rect x="29" y="38" width="62" height="5" rx="2.5"/><rect x="29" y="54" width="62" height="5" rx="2.5"/>
  <rect x="29" y="70" width="62" height="5" rx="2.5"/><rect x="29" y="86" width="62" height="5" rx="2.5"/><rect x="29" y="102" width="62" height="5" rx="2.5"/>
  <rect x="20" y="14" width="9" height="106" rx="4.5"/><rect x="91" y="14" width="9" height="106" rx="4.5"/>
</g>
<path d="M29 23.2h62M29 39.2h62M29 55.2h62M29 71.2h62M29 87.2h62M29 103.2h62" stroke="#fff" stroke-opacity=".85" stroke-width="1"/>
<rect x="20" y="14" width="9" height="106" rx="4.5" fill="url(#ID-body)" stroke="#aeb6be" stroke-width=".6"/>
<rect x="91" y="14" width="9" height="106" rx="4.5" fill="url(#ID-body)" stroke="#aeb6be" stroke-width=".6"/>
<path d="M22.5 18v98M93.5 18v98" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".9"/>
<g class="td-glow td-glow2" fill="url(#ID-tdglow)"><rect x="20" y="14" width="9" height="106" rx="4.5"/><rect x="91" y="14" width="9" height="106" rx="4.5"/></g>
<g class="td-towel">
  <path d="M42 56h36v30q-3 3-6 0q-3 3-6 0q-3 3-6 0q-3 3-6 0q-3 3-6 0q-3 3-3 0z" fill="url(#ID-tdtowel)"/>
  <path d="M42 80h36v3h-36z" fill="#e8f7fa" opacity=".9"/>
  <path d="M42 56h36v3h-36z" fill="#1f7384" opacity=".5"/>
  <path d="M50 59v20M60 59v20M70 59v20" stroke="#1f7384" stroke-opacity=".25" stroke-width="1"/>
</g>
<g class="td-towel td-towel2">
  <path d="M63 88h20v12q-3 2-5 0q-3 2-5 0q-3 2-5 0q-3 2-5 0z" fill="#f2a6b8"/>
  <path d="M63 96h20v2h-20z" fill="#fff" opacity=".7"/>
</g>
<g class="td-steam"><path d="M48 52q-3-4 0-8t0-8"/><path d="M60 50q-3-4 0-8t0-8"/><path d="M72 52q-3-4 0-8t0-8"/></g>
<rect x="18" y="120" width="13" height="5" rx="1.5" fill="#3a3f45"/><rect x="89" y="120" width="13" height="5" rx="1.5" fill="#3a3f45"/>
<rect x="70" y="108" width="36" height="14" rx="3" fill="url(#ID-dark)" stroke="#8f98a2" stroke-width=".6"/>
${lcd(74, 110, 22, 10)}
<circle class="td-led" cx="101" cy="115" r="1.4"/>
<ellipse cx="60" cy="132" rx="46" ry="3" fill="url(#ID-shadow)"/>`;

SVG.tv = () => `
<defs>${DEFS}<clipPath id="ID-scr"><rect x="4" y="38" width="112" height="63" rx="1"/></clipPath>
<linearGradient id="ID-off" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1b2027"/><stop offset=".6" stop-color="#0a0c0f"/><stop offset="1" stop-color="#14181d"/></linearGradient>
<linearGradient id="ID-hero" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0f5a73"/><stop offset=".55" stop-color="#3b2a7a"/><stop offset="1" stop-color="#0f1420"/></linearGradient>
<linearGradient id="ID-fade" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0f1420" stop-opacity=".95"/><stop offset=".6" stop-color="#0f1420" stop-opacity="0"/></linearGradient>
<linearGradient id="ID-logo" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#38e1ff"/><stop offset="1" stop-color="#8a5cff"/></linearGradient></defs>
<rect x="2.5" y="36.5" width="115" height="66" rx="2" fill="#0b0d10" stroke="#2c3138" stroke-width=".7"/>
<rect x="4" y="38" width="112" height="63" rx="1" fill="url(#ID-off)"/>
<g clip-path="url(#ID-scr)">
  <g class="tv-content">
    <rect x="4" y="38" width="112" height="63" fill="#0f1420"/>
    <rect x="4" y="38" width="112" height="33" fill="url(#ID-hero)"/>
    <circle cx="92" cy="50" r="9" fill="#ffb35c" opacity=".85"/>
    <path d="M60 71l14-12l9 6l12-10l21 16z" fill="#1d1640" opacity=".9"/>
    <rect x="4" y="38" width="112" height="33" fill="url(#ID-fade)"/>
    <rect x="9" y="51" width="30" height="3.2" rx="1" fill="#fff"/>
    <rect x="9" y="56" width="22" height="1.6" rx=".8" fill="#9aa3b8"/>
    <rect x="9" y="61" width="11" height="4" rx="1" fill="#fff"/><path d="M12 61.9l2.4 1.1l-2.4 1.1z" fill="#0f1420"/>
    <rect x="22" y="61" width="11" height="4" rx="1" fill="#59616b"/>
    <rect x="9" y="74" width="16" height="1.6" rx=".8" fill="#c9d0db"/>
    <g class="tv-row">
      <rect x="9" y="77.5" width="17" height="11" rx="1.2" fill="#e85d75"/><rect x="28" y="77.5" width="17" height="11" rx="1.2" fill="#3fb6a8"/>
      <rect x="47" y="77.5" width="17" height="11" rx="1.2" fill="#f2b84b"/><rect x="66" y="77.5" width="17" height="11" rx="1.2" fill="#5b7cfa"/>
      <rect x="85" y="77.5" width="17" height="11" rx="1.2" fill="#a55cd6"/><rect x="104" y="77.5" width="17" height="11" rx="1.2" fill="#4fb36b"/>
      <rect x="123" y="77.5" width="17" height="11" rx="1.2" fill="#e8834a"/><rect x="142" y="77.5" width="17" height="11" rx="1.2" fill="#3a8fd6"/>
      <path d="M12 86h8M31 86h10M50 86h7M69 86h9M88 86h10M107 86h8M126 86h9M145 86h8" stroke="#fff" stroke-opacity=".75" stroke-width="1" stroke-linecap="round"/>
    </g>
    <rect class="tv-sel" x="8.4" y="76.9" width="18.2" height="12.2" rx="1.6" fill="none" stroke="#fff" stroke-width=".9"/>
    <rect x="9" y="91.5" width="12" height="1.6" rx=".8" fill="#c9d0db"/>
    <g class="tv-row2">
      <rect x="9" y="95" width="24" height="9" rx="1.2" fill="#2f6f8f"/><rect x="35" y="95" width="24" height="9" rx="1.2" fill="#8f3f5f"/>
      <rect x="61" y="95" width="24" height="9" rx="1.2" fill="#6f6f2f"/><rect x="87" y="95" width="24" height="9" rx="1.2" fill="#3f4f8f"/>
      <rect x="113" y="95" width="24" height="9" rx="1.2" fill="#2f8f5f"/>
    </g>
  </g>
  <g class="tv-intro">
    <rect x="4" y="38" width="112" height="63" fill="#05070c"/>
    <g class="tv-streaks" stroke-linecap="round" fill="none">
      <path d="M4 44L60 69.5" stroke="#38e1ff"/><path d="M116 44L60 69.5" stroke="#8a5cff"/>
      <path d="M4 95L60 69.5" stroke="#8a5cff"/><path d="M116 95L60 69.5" stroke="#38e1ff"/>
      <path d="M60 38v31.5" stroke="#5fd0ff"/><path d="M60 101v-31.5" stroke="#a07cff"/>
    </g>
    <g class="tv-logo">
      <circle cx="60" cy="69.5" r="11" fill="none" stroke="url(#ID-logo)" stroke-width="2.2"/>
      <path d="M56.5 63.5q0-1.6 1.4-.8l8.6 5.4q1.3.8 0 1.6l-8.6 5.4q-1.4.8-1.4-.8z" fill="url(#ID-logo)"/>
    </g>
  </g>
  <rect class="tv-flash" x="4" y="38" width="112" height="63" fill="#eef6ff"/>
</g>
<path d="M4 38L46 38L4 78z" fill="#fff" opacity=".06"/>
<rect x="4" y="38" width="112" height="63" rx="1" fill="none" stroke="#000" stroke-opacity=".5"/>
<circle class="tv-led" cx="60" cy="101.8" r=".7"/>`;

SVG.vmc = () => `
<defs>${DEFS}
<clipPath id="ID-all"><rect x="0" y="0" width="120" height="140" rx="12"/></clipPath>
<clipPath id="ID-hole"><circle cx="60" cy="70" r="25"/></clipPath>
<linearGradient id="ID-stone" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7e7a75"/><stop offset=".5" stop-color="#94908a"/><stop offset="1" stop-color="#6f6b66"/></linearGradient>
<linearGradient id="ID-tile" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4f2ee"/><stop offset="1" stop-color="#e3e0da"/></linearGradient>
<linearGradient id="ID-face" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".6" stop-color="#f3f5f7"/><stop offset="1" stop-color="#d9dee3"/></linearGradient>
<radialGradient id="ID-recess" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#e9edf0"/><stop offset=".75" stop-color="#c3cad1"/><stop offset="1" stop-color="#8f979f"/></radialGradient></defs>
<g clip-path="url(#ID-all)">
  <rect x="0" y="0" width="120" height="60" fill="url(#ID-stone)"/>
  <circle cx="28.3" cy="6.0" r="0.54" fill="#8a8580" opacity=".55"/><circle cx="10.8" cy="1.1" r="0.63" fill="#9c978f" opacity=".55"/><circle cx="96.1" cy="44.4" r="0.43" fill="#9c978f" opacity=".55"/><circle cx="33.2" cy="10.0" r="0.36" fill="#8a8580" opacity=".55"/><circle cx="113.2" cy="1.5" r="0.68" fill="#9c978f" opacity=".55"/><circle cx="96.1" cy="11.2" r="0.49" fill="#9c978f" opacity=".55"/><circle cx="10.4" cy="35.1" r="0.70" fill="#8a8580" opacity=".55"/><circle cx="21.3" cy="27.5" r="0.35" fill="#9c978f" opacity=".55"/><circle cx="0.9" cy="16.9" r="0.72" fill="#9c978f" opacity=".55"/><circle cx="101.8" cy="29.5" r="0.55" fill="#9c978f" opacity=".55"/><circle cx="51.7" cy="9.4" r="0.48" fill="#6b6763" opacity=".55"/><circle cx="9.7" cy="26.8" r="0.90" fill="#57534f" opacity=".55"/><circle cx="84.1" cy="8.4" r="0.70" fill="#6b6763" opacity=".55"/><circle cx="49.5" cy="11.8" r="0.68" fill="#9c978f" opacity=".55"/><circle cx="22.0" cy="25.3" r="0.65" fill="#8a8580" opacity=".55"/><circle cx="108.5" cy="5.9" r="0.34" fill="#8a8580" opacity=".55"/><circle cx="33.3" cy="33.8" r="0.82" fill="#6b6763" opacity=".55"/><circle cx="39.7" cy="10.3" r="0.58" fill="#6b6763" opacity=".55"/><circle cx="42.9" cy="4.8" r="0.88" fill="#9c978f" opacity=".55"/><circle cx="88.2" cy="55.7" r="0.31" fill="#9c978f" opacity=".55"/><circle cx="38.6" cy="8.9" r="0.69" fill="#6b6763" opacity=".55"/><circle cx="35.2" cy="11.1" r="0.57" fill="#8a8580" opacity=".55"/><circle cx="30.0" cy="34.7" r="0.40" fill="#6b6763" opacity=".55"/><circle cx="43.6" cy="26.4" r="0.52" fill="#9c978f" opacity=".55"/><circle cx="119.7" cy="33.1" r="0.56" fill="#8a8580" opacity=".55"/><circle cx="50.9" cy="12.1" r="0.34" fill="#6b6763" opacity=".55"/><circle cx="88.5" cy="34.5" r="0.88" fill="#6b6763" opacity=".55"/><circle cx="65.5" cy="33.8" r="0.49" fill="#6b6763" opacity=".55"/><circle cx="14.7" cy="30.7" r="0.76" fill="#57534f" opacity=".55"/><circle cx="78.2" cy="11.6" r="0.42" fill="#57534f" opacity=".55"/><circle cx="49.3" cy="2.1" r="0.55" fill="#8a8580" opacity=".55"/><circle cx="77.7" cy="24.8" r="0.43" fill="#8a8580" opacity=".55"/><circle cx="3.8" cy="14.8" r="0.45" fill="#8a8580" opacity=".55"/><circle cx="92.7" cy="24.2" r="0.46" fill="#9c978f" opacity=".55"/><circle cx="6.2" cy="53.8" r="0.64" fill="#57534f" opacity=".55"/><circle cx="115.5" cy="37.9" r="0.82" fill="#6b6763" opacity=".55"/><circle cx="59.3" cy="5.4" r="0.43" fill="#8a8580" opacity=".55"/><circle cx="40.4" cy="38.1" r="0.78" fill="#9c978f" opacity=".55"/><circle cx="97.8" cy="30.6" r="0.69" fill="#9c978f" opacity=".55"/><circle cx="40.6" cy="22.7" r="0.60" fill="#9c978f" opacity=".55"/><circle cx="115.4" cy="38.8" r="0.33" fill="#8a8580" opacity=".55"/><circle cx="92.0" cy="15.6" r="0.81" fill="#8a8580" opacity=".55"/><circle cx="82.5" cy="26.9" r="0.58" fill="#57534f" opacity=".55"/><circle cx="111.3" cy="12.7" r="0.30" fill="#8a8580" opacity=".55"/><circle cx="1.6" cy="50.8" r="0.37" fill="#57534f" opacity=".55"/><circle cx="105.3" cy="31.9" r="0.83" fill="#8a8580" opacity=".55"/><circle cx="19.4" cy="35.3" r="0.79" fill="#57534f" opacity=".55"/><circle cx="109.8" cy="25.5" r="0.35" fill="#6b6763" opacity=".55"/><circle cx="58.7" cy="50.2" r="0.66" fill="#8a8580" opacity=".55"/><circle cx="5.0" cy="4.6" r="0.83" fill="#6b6763" opacity=".55"/><circle cx="35.6" cy="20.1" r="0.34" fill="#57534f" opacity=".55"/><circle cx="45.7" cy="45.7" r="0.49" fill="#8a8580" opacity=".55"/><circle cx="91.0" cy="49.6" r="0.54" fill="#6b6763" opacity=".55"/><circle cx="13.7" cy="36.0" r="0.83" fill="#57534f" opacity=".55"/><circle cx="49.9" cy="41.3" r="0.57" fill="#8a8580" opacity=".55"/><circle cx="76.4" cy="53.9" r="0.59" fill="#6b6763" opacity=".55"/><circle cx="95.8" cy="9.7" r="0.82" fill="#8a8580" opacity=".55"/><circle cx="84.8" cy="18.9" r="0.82" fill="#9c978f" opacity=".55"/><circle cx="65.0" cy="52.4" r="0.73" fill="#6b6763" opacity=".55"/><circle cx="77.8" cy="7.0" r="0.37" fill="#57534f" opacity=".55"/><circle cx="63.2" cy="30.2" r="0.55" fill="#9c978f" opacity=".55"/><circle cx="42.8" cy="44.5" r="0.89" fill="#6b6763" opacity=".55"/><circle cx="81.2" cy="35.4" r="0.49" fill="#57534f" opacity=".55"/><circle cx="93.9" cy="33.0" r="0.86" fill="#57534f" opacity=".55"/><circle cx="73.6" cy="25.6" r="0.38" fill="#9c978f" opacity=".55"/><circle cx="118.3" cy="19.7" r="0.56" fill="#8a8580" opacity=".55"/><circle cx="81.0" cy="36.1" r="0.47" fill="#9c978f" opacity=".55"/><circle cx="23.7" cy="46.0" r="0.70" fill="#6b6763" opacity=".55"/><circle cx="9.2" cy="37.4" r="0.84" fill="#9c978f" opacity=".55"/><circle cx="78.5" cy="18.9" r="0.48" fill="#6b6763" opacity=".55"/><circle cx="72.5" cy="30.4" r="0.75" fill="#6b6763" opacity=".55"/><circle cx="96.1" cy="46.8" r="0.87" fill="#8a8580" opacity=".55"/><circle cx="21.9" cy="57.2" r="0.70" fill="#6b6763" opacity=".55"/><circle cx="91.2" cy="56.2" r="0.37" fill="#57534f" opacity=".55"/><circle cx="81.0" cy="43.2" r="0.67" fill="#9c978f" opacity=".55"/><circle cx="102.3" cy="39.9" r="0.83" fill="#8a8580" opacity=".55"/><circle cx="107.6" cy="40.8" r="0.49" fill="#8a8580" opacity=".55"/><circle cx="89.5" cy="31.2" r="0.62" fill="#57534f" opacity=".55"/><circle cx="107.9" cy="23.2" r="0.54" fill="#9c978f" opacity=".55"/><circle cx="34.1" cy="23.9" r="0.31" fill="#8a8580" opacity=".55"/><circle cx="107.7" cy="26.6" r="0.64" fill="#9c978f" opacity=".55"/><circle cx="48.5" cy="22.5" r="0.32" fill="#6b6763" opacity=".55"/><circle cx="55.0" cy="56.0" r="0.68" fill="#9c978f" opacity=".55"/><circle cx="72.5" cy="18.1" r="0.35" fill="#9c978f" opacity=".55"/><circle cx="58.0" cy="37.1" r="0.59" fill="#6b6763" opacity=".55"/><circle cx="17.8" cy="13.8" r="0.48" fill="#6b6763" opacity=".55"/><circle cx="19.6" cy="45.8" r="0.71" fill="#9c978f" opacity=".55"/><circle cx="2.2" cy="14.2" r="0.75" fill="#8a8580" opacity=".55"/><circle cx="3.8" cy="18.4" r="0.37" fill="#6b6763" opacity=".55"/><circle cx="105.4" cy="37.3" r="0.67" fill="#8a8580" opacity=".55"/><circle cx="87.8" cy="38.0" r="0.87" fill="#6b6763" opacity=".55"/><circle cx="67.2" cy="40.2" r="0.73" fill="#8a8580" opacity=".55"/><circle cx="60.3" cy="8.9" r="0.81" fill="#57534f" opacity=".55"/><circle cx="60.9" cy="21.8" r="0.40" fill="#9c978f" opacity=".55"/><circle cx="61.8" cy="31.2" r="0.48" fill="#57534f" opacity=".55"/><circle cx="39.4" cy="22.4" r="0.55" fill="#6b6763" opacity=".55"/><circle cx="33.4" cy="39.2" r="0.48" fill="#8a8580" opacity=".55"/><circle cx="10.3" cy="6.7" r="0.67" fill="#6b6763" opacity=".55"/><circle cx="27.8" cy="32.1" r="0.59" fill="#8a8580" opacity=".55"/><circle cx="106.3" cy="26.2" r="0.74" fill="#57534f" opacity=".55"/><circle cx="40.3" cy="10.0" r="0.62" fill="#8a8580" opacity=".55"/><circle cx="12.9" cy="35.9" r="0.85" fill="#9c978f" opacity=".55"/><circle cx="111.7" cy="48.2" r="0.55" fill="#6b6763" opacity=".55"/><circle cx="98.5" cy="12.3" r="0.65" fill="#9c978f" opacity=".55"/><circle cx="94.1" cy="27.7" r="0.80" fill="#6b6763" opacity=".55"/><circle cx="107.0" cy="51.8" r="0.83" fill="#6b6763" opacity=".55"/><circle cx="72.6" cy="30.6" r="0.89" fill="#9c978f" opacity=".55"/><circle cx="111.4" cy="10.3" r="0.33" fill="#8a8580" opacity=".55"/><circle cx="4.7" cy="39.2" r="0.50" fill="#8a8580" opacity=".55"/><circle cx="83.6" cy="6.8" r="0.89" fill="#6b6763" opacity=".55"/><circle cx="8.6" cy="13.1" r="0.46" fill="#6b6763" opacity=".55"/><circle cx="106.9" cy="56.5" r="0.31" fill="#8a8580" opacity=".55"/><circle cx="25.6" cy="14.5" r="0.74" fill="#9c978f" opacity=".55"/><circle cx="97.9" cy="17.3" r="0.53" fill="#57534f" opacity=".55"/><circle cx="4.1" cy="23.9" r="0.88" fill="#9c978f" opacity=".55"/><circle cx="67.2" cy="16.4" r="0.42" fill="#57534f" opacity=".55"/><circle cx="38.6" cy="12.5" r="0.59" fill="#57534f" opacity=".55"/><circle cx="111.8" cy="16.0" r="0.75" fill="#57534f" opacity=".55"/><circle cx="114.0" cy="53.8" r="0.55" fill="#8a8580" opacity=".55"/><circle cx="30.7" cy="29.6" r="0.32" fill="#9c978f" opacity=".55"/><circle cx="73.1" cy="39.2" r="0.68" fill="#9c978f" opacity=".55"/><circle cx="10.4" cy="57.2" r="0.40" fill="#6b6763" opacity=".55"/><circle cx="84.1" cy="54.2" r="0.45" fill="#8a8580" opacity=".55"/><circle cx="106.9" cy="29.0" r="0.37" fill="#9c978f" opacity=".55"/><circle cx="1.0" cy="33.1" r="0.42" fill="#6b6763" opacity=".55"/><circle cx="29.3" cy="48.9" r="0.37" fill="#9c978f" opacity=".55"/><circle cx="35.6" cy="32.9" r="0.70" fill="#6b6763" opacity=".55"/><circle cx="79.4" cy="57.6" r="0.84" fill="#6b6763" opacity=".55"/><circle cx="90.7" cy="46.5" r="0.71" fill="#9c978f" opacity=".55"/><circle cx="4.2" cy="18.8" r="0.50" fill="#9c978f" opacity=".55"/><circle cx="118.4" cy="9.4" r="0.75" fill="#6b6763" opacity=".55"/><circle cx="114.7" cy="55.2" r="0.71" fill="#6b6763" opacity=".55"/><circle cx="80.8" cy="15.2" r="0.85" fill="#57534f" opacity=".55"/><circle cx="12.5" cy="11.6" r="0.38" fill="#57534f" opacity=".55"/><circle cx="72.2" cy="28.8" r="0.49" fill="#57534f" opacity=".55"/><circle cx="89.2" cy="48.6" r="0.76" fill="#6b6763" opacity=".55"/><circle cx="21.7" cy="20.8" r="0.48" fill="#9c978f" opacity=".55"/><circle cx="68.9" cy="11.3" r="0.67" fill="#9c978f" opacity=".55"/><circle cx="46.0" cy="31.1" r="0.37" fill="#8a8580" opacity=".55"/><circle cx="22.9" cy="20.2" r="0.89" fill="#8a8580" opacity=".55"/><circle cx="2.5" cy="6.8" r="0.48" fill="#9c978f" opacity=".55"/><circle cx="112.6" cy="28.8" r="0.32" fill="#9c978f" opacity=".55"/><circle cx="96.0" cy="46.5" r="0.40" fill="#57534f" opacity=".55"/><circle cx="74.1" cy="20.3" r="0.30" fill="#8a8580" opacity=".55"/><circle cx="53.7" cy="43.1" r="0.85" fill="#57534f" opacity=".55"/><circle cx="25.4" cy="19.2" r="0.66" fill="#6b6763" opacity=".55"/><circle cx="107.4" cy="27.9" r="0.88" fill="#6b6763" opacity=".55"/><circle cx="21.7" cy="35.7" r="0.66" fill="#6b6763" opacity=".55"/><circle cx="87.0" cy="1.3" r="0.56" fill="#8a8580" opacity=".55"/><circle cx="74.6" cy="7.8" r="0.66" fill="#8a8580" opacity=".55"/><circle cx="52.2" cy="18.2" r="0.68" fill="#8a8580" opacity=".55"/><circle cx="87.6" cy="53.8" r="0.80" fill="#9c978f" opacity=".55"/><circle cx="31.0" cy="19.4" r="0.62" fill="#8a8580" opacity=".55"/><circle cx="43.9" cy="50.0" r="0.42" fill="#57534f" opacity=".55"/><circle cx="99.4" cy="4.3" r="0.68" fill="#8a8580" opacity=".55"/><circle cx="118.5" cy="8.3" r="0.73" fill="#6b6763" opacity=".55"/><circle cx="64.6" cy="20.1" r="0.86" fill="#6b6763" opacity=".55"/><circle cx="94.2" cy="35.1" r="0.63" fill="#9c978f" opacity=".55"/><circle cx="75.0" cy="17.1" r="0.83" fill="#9c978f" opacity=".55"/><circle cx="25.1" cy="27.4" r="0.47" fill="#6b6763" opacity=".55"/>
  <rect x="0" y="58" width="120" height="4" fill="#c9c5be"/><rect x="0" y="58" width="120" height="1" fill="#e9e6e0"/>
  <rect x="0" y="62" width="120" height="78" fill="url(#ID-tile)"/>
  <g stroke="#d6d2ca" stroke-width=".35" opacity=".8"><path d="M0 64H120" /><path d="M0 67H120" /><path d="M0 70H120" /><path d="M0 73H120" /><path d="M0 76H120" /><path d="M0 79H120" /><path d="M0 82H120" /><path d="M0 85H120" /><path d="M0 88H120" /><path d="M0 91H120" /><path d="M0 94H120" /><path d="M0 97H120" /><path d="M0 100H120" /><path d="M0 103H120" /><path d="M0 106H120" /><path d="M0 109H120" /><path d="M0 112H120" /><path d="M0 115H120" /><path d="M0 118H120" /><path d="M0 121H120" /><path d="M0 124H120" /><path d="M0 127H120" /><path d="M0 130H120" /><path d="M0 133H120" /><path d="M0 136H120" /><path d="M0 139H120" /></g>
  <g class="condensation"><path d="M10 80q1.2 2 0 3.4q-1.2-1.4 0-3.4z"/><path d="M14 96q1.2 2 0 3.4q-1.2-1.4 0-3.4z"/><path d="M106 84q1.2 2 0 3.4q-1.2-1.4 0-3.4z"/><path d="M110 104q1.2 2 0 3.4q-1.2-1.4 0-3.4z"/><path d="M8 118q1.2 2 0 3.4q-1.2-1.4 0-3.4z"/><path d="M104 122q1.2 2 0 3.4q-1.2-1.4 0-3.4z"/></g>
  <g class="steam"><path d="M14 136q-4-8 2-14t0-14"/><path d="M28 140q-4-8 2-14t0-14"/><path d="M98 138q-4-8 2-14t0-14"/></g>
</g>
<path d="M22 31C42 21 78 35 100 25V117H22Z" fill="#000" opacity=".16" transform="translate(3 4)"/>
<path d="M19 29C40 19 78 33 101 23V116Q101 120 97 120H23Q19 120 19 116Z" fill="#d3d8dd"/>
<path d="M18 27C39 17 77 31 99 21V114Q99 118 95 118H22Q18 118 18 114Z" fill="url(#ID-face)" stroke="#c9ced4" stroke-width=".6"/>
<path d="M21 28C40 19 76 32 97 23" fill="none" stroke="#ffffff" stroke-width="1.6" opacity=".9"/>
<circle cx="60" cy="70" r="28" fill="#e2e6ea" stroke="#c4cad0" stroke-width=".8"/>
<circle cx="60" cy="70" r="25" fill="url(#ID-recess)"/>
<g clip-path="url(#ID-hole)">
  <circle cx="60" cy="70" r="25" fill="#3d4349" opacity=".55"/>
  <g class="fanv" fill="#f4f6f8" stroke="#c4cad0" stroke-width=".4"><path d="M60 70C60 61 65 50 75 45C73 55 69 63 60 70Z" transform="rotate(0 60 70)"/><path d="M60 70C60 61 65 50 75 45C73 55 69 63 60 70Z" transform="rotate(30 60 70)"/><path d="M60 70C60 61 65 50 75 45C73 55 69 63 60 70Z" transform="rotate(60 60 70)"/><path d="M60 70C60 61 65 50 75 45C73 55 69 63 60 70Z" transform="rotate(90 60 70)"/><path d="M60 70C60 61 65 50 75 45C73 55 69 63 60 70Z" transform="rotate(120 60 70)"/><path d="M60 70C60 61 65 50 75 45C73 55 69 63 60 70Z" transform="rotate(150 60 70)"/><path d="M60 70C60 61 65 50 75 45C73 55 69 63 60 70Z" transform="rotate(180 60 70)"/><path d="M60 70C60 61 65 50 75 45C73 55 69 63 60 70Z" transform="rotate(210 60 70)"/><path d="M60 70C60 61 65 50 75 45C73 55 69 63 60 70Z" transform="rotate(240 60 70)"/><path d="M60 70C60 61 65 50 75 45C73 55 69 63 60 70Z" transform="rotate(270 60 70)"/><path d="M60 70C60 61 65 50 75 45C73 55 69 63 60 70Z" transform="rotate(300 60 70)"/><path d="M60 70C60 61 65 50 75 45C73 55 69 63 60 70Z" transform="rotate(330 60 70)"/></g>
  <circle cx="60" cy="70" r="7" fill="#ffffff" stroke="#c4cad0" stroke-width=".6"/>
  <g class="slats" fill="none" stroke-linecap="round">
    <g stroke="#9aa3ad" stroke-width="2" transform="translate(0 .7)" opacity=".5"><path d="M30 47.5Q60 45.9 90 47.5" /><path d="M30 52.9Q60 51.3 90 52.9" /><path d="M30 58.3Q60 56.7 90 58.3" /><path d="M30 63.7Q60 62.1 90 63.7" /><path d="M30 69.1Q60 67.5 90 69.1" /><path d="M30 74.5Q60 72.9 90 74.5" /><path d="M30 79.9Q60 78.3 90 79.9" /><path d="M30 85.3Q60 83.7 90 85.3" /><path d="M30 90.7Q60 89.1 90 90.7" /></g>
    <g stroke="#ffffff" stroke-width="1.7"><path d="M30 47.5Q60 45.9 90 47.5" /><path d="M30 52.9Q60 51.3 90 52.9" /><path d="M30 58.3Q60 56.7 90 58.3" /><path d="M30 63.7Q60 62.1 90 63.7" /><path d="M30 69.1Q60 67.5 90 69.1" /><path d="M30 74.5Q60 72.9 90 74.5" /><path d="M30 79.9Q60 78.3 90 79.9" /><path d="M30 85.3Q60 83.7 90 85.3" /><path d="M30 90.7Q60 89.1 90 90.7" /></g>
  </g>
</g>
<circle cx="60" cy="70" r="25" fill="none" stroke="#b5bcc3" stroke-width="1"/>
<g class="intake"><path d="M20 98q8-6 14-4"/><path d="M98 100q-8-6-14-3"/><path d="M28 40q8 2 12 8"/><path d="M94 42q-8 2-12 8"/><path d="M60 112q-2-6 0-12"/></g>`;

SVG.washer = () => `
<defs>${DEFS}<clipPath id="ID-win"><circle cx="60" cy="80" r="28"/></clipPath></defs>
<ellipse cx="60" cy="133" rx="50" ry="5" fill="url(#ID-shadow)"/>
<g class="shake">
  ${feet([20, 90], 124)}
  <rect x="14" y="8" width="92" height="120" rx="8" fill="url(#ID-body)" stroke="#bfc6ce" stroke-width=".8"/>
  <path d="M14 16a8 8 0 0 1 8-8h76a8 8 0 0 1 8 8v17H14z" fill="url(#ID-panel)"/>
  <line x1="14" y1="33" x2="106" y2="33" stroke="#bfc6ce" stroke-width=".8"/>
  <rect x="19" y="13" width="25" height="15" rx="2" fill="#f8f9fb" stroke="#b9c0c8" stroke-width=".7"/>
  <rect x="24" y="22.5" width="15" height="2.2" rx="1.1" fill="#a6aeb7"/>
  ${lcd(49, 13, 30, 11)}
  <circle class="led l1" cx="55" cy="29" r="1.4"/><circle class="led l2" cx="61" cy="29" r="1.4"/>
  <circle class="led l3" cx="67" cy="29" r="1.4"/><circle class="led l4" cx="73" cy="29" r="1.4"/>
  <circle cx="93" cy="21" r="8.2" fill="url(#ID-chrome)" stroke="#88919a" stroke-width=".6"/>
  <circle cx="93" cy="21" r="5.8" fill="#eff2f5" stroke="#b2b9c1" stroke-width=".6"/>
  <g class="knob"><line x1="93" y1="21" x2="93" y2="16.2" stroke="#4f5964" stroke-width="1.5" stroke-linecap="round"/></g>
  ${porthole(60, 80, 28, `
    ${drumInside(60, 80, 28)}
    <g class="water"><path class="wave" d="M10 88q10-4 20 0t20 0t20 0t20 0t20 0t20 0v30H10z"/></g>
    <g class="foam">
      <circle cx="44" cy="90" r="2.2"/><circle cx="52" cy="92" r="1.6"/><circle cx="61" cy="89" r="2.6"/>
      <circle cx="70" cy="91" r="1.8"/><circle cx="77" cy="88" r="1.4"/><circle cx="56" cy="95" r="1.2"/>
    </g>`)}
  <rect x="20" y="72" width="5" height="16" rx="2" fill="url(#ID-chrome)" stroke="#8d959f" stroke-width=".4"/>
  <rect x="95.5" y="74" width="4" height="12" rx="1.5" fill="#9aa3ad"/>
  <rect x="22" y="117" width="76" height="6" rx="2" fill="#000" opacity=".05"/>
</g>`;

SVG.water_heater = () => `
<defs>${DEFS}
<linearGradient id="ID-cyl" x1="0" x2="1"><stop offset="0" stop-color="#c3c9cf"/><stop offset=".3" stop-color="#ffffff"/><stop offset=".6" stop-color="#eef0f2"/><stop offset="1" stop-color="#aeb5bc"/></linearGradient>
<linearGradient id="ID-copper" x1="0" x2="1"><stop offset="0" stop-color="#a0603a"/><stop offset=".45" stop-color="#e2a477"/><stop offset="1" stop-color="#8a4f2e"/></linearGradient>
<linearGradient id="ID-arc" x1="0" x2="1"><stop offset="0" stop-color="#3e8ed0"/><stop offset=".5" stop-color="#f2c94c"/><stop offset="1" stop-color="#e5484d"/></linearGradient></defs>
<g class="hw-waves">
  <path d="M46 12q-3-4 0-8t0-8"/><path d="M60 10q-3-4 0-8t0-8"/><path d="M74 12q-3-4 0-8t0-8"/>
</g>
<ellipse cx="60" cy="133" rx="34" ry="4" fill="url(#ID-shadow)"/>
<rect x="49" y="114" width="6" height="18" fill="url(#ID-copper)"/>
<rect x="65" y="114" width="6" height="18" fill="url(#ID-copper)"/>
<rect x="48" y="122" width="8" height="3" rx="1" fill="#3e8ed0"/>
<rect x="64" y="122" width="8" height="3" rx="1" fill="#e5484d"/>
<rect x="40" y="117" width="9" height="5" rx="1.2" fill="#c9a43a" stroke="#8a6d1f" stroke-width=".4"/>
<path d="M30 26q0-14 30-14t30 14v80q0 12-30 12t-30-12z" fill="url(#ID-cyl)" stroke="#a7aeb5" stroke-width=".8"/>
<path d="M30 26q0 9 30 9t30-9" fill="none" stroke="#b7bec5" stroke-width=".8"/>
<path d="M30 104q0 9 30 9t30-9" fill="none" stroke="#b7bec5" stroke-width=".8"/>
<rect x="38" y="58" width="44" height="40" rx="5" fill="#f4f6f8" stroke="#b5bcc3" stroke-width=".7"/>
<circle cx="60" cy="76" r="13" fill="url(#ID-chrome)"/>
<circle cx="60" cy="76" r="11" fill="#fcfcfd"/>
<path d="M51.5 84.5a12 12 0 1 1 17 0" fill="none" stroke="url(#ID-arc)" stroke-width="2.2" stroke-linecap="round" transform="rotate(0 60 76)"/>
<path d="M60 67.4v2M52.6 70.6l1.4 1.4M67.4 70.6l-1.4 1.4M50 76h2M68 76h2" stroke="#7d868f" stroke-width=".7"/>
<g class="needle"><path d="M60 76l-1.1 0l1.1-8.5l1.1 8.5z" fill="#c62828"/></g>
<circle cx="60" cy="76" r="1.6" fill="#3a4148"/>
<text class="gauge-txt" x="60" y="85" text-anchor="middle">--°</text>
<circle class="hw-led" cx="76" cy="92" r="1.8"/>
<rect x="43" y="90.5" width="16" height="3" rx="1.2" fill="#d5dade"/>
<path d="M36 40q4-6 6-1" stroke="#fff" stroke-opacity=".9" stroke-width="2" fill="none" stroke-linecap="round"/>
<rect x="34" y="34" width="5" height="70" rx="2.5" fill="#fff" opacity=".35"/>`;

SVG.wine_cooler = () => `
<defs>${DEFS}
<linearGradient id="ID-wnlight" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff1c9" stop-opacity=".85"/><stop offset=".55" stop-color="#ffd98a" stop-opacity=".25"/><stop offset="1" stop-color="#ffd98a" stop-opacity="0"/></linearGradient>
<linearGradient id="ID-wncab" x1="0" x2="1"><stop offset="0" stop-color="#2b3036"/><stop offset=".5" stop-color="#14171b"/><stop offset="1" stop-color="#262b31"/></linearGradient>
<linearGradient id="ID-wnwood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c9a26b"/><stop offset="1" stop-color="#8a6a3f"/></linearGradient>
<clipPath id="ID-wnclip"><rect x="30" y="32" width="60" height="86"/></clipPath></defs>
<ellipse cx="60" cy="133" rx="46" ry="3.5" fill="url(#ID-shadow)"/>
<rect x="22" y="6" width="76" height="122" rx="4" fill="url(#ID-wncab)" stroke="#05070a" stroke-width=".8"/>
<rect x="26" y="9" width="68" height="17" rx="2" fill="#0d1013"/>
<circle class="wn-led" cx="34" cy="17.5" r="1.6"/>
<path d="M42 15h10M42 18h10M42 21h10" stroke="#3b424a" stroke-width=".8" stroke-linecap="round"/>
<rect x="64" y="12" width="26" height="11" rx="1.6" fill="#0c1720" stroke="#59616b" stroke-width=".5"/>
<text class="lcd" x="77" y="20.4" text-anchor="middle">OFF</text>
<rect x="28" y="30" width="64" height="92" fill="#07090b"/>
<g class="wn-inside" clip-path="url(#ID-wnclip)">
  <rect x="30" y="32" width="60" height="86" fill="#14181d"/>
  <rect class="wn-light" x="30" y="32" width="60" height="86" fill="url(#ID-wnlight)"/>
  <rect x="31" y="33" width="58" height="2" fill="#fff6dc" class="wn-strip"/>
  <g class="wn-bottles">
    <g>
      <circle cx="37" cy="44" r="5" fill="#5b1226"/><circle cx="48.6" cy="44" r="5" fill="#1f4d2e"/><circle cx="60.2" cy="44" r="5" fill="#5b1226"/><circle cx="71.8" cy="44" r="5" fill="#b0852f"/><circle cx="83.4" cy="44" r="5" fill="#1f4d2e"/>
      <circle cx="37" cy="44" r="2.4" fill="none" stroke="#fff" stroke-opacity=".22"/><circle cx="48.6" cy="44" r="2.4" fill="none" stroke="#fff" stroke-opacity=".22"/><circle cx="60.2" cy="44" r="2.4" fill="none" stroke="#fff" stroke-opacity=".22"/><circle cx="71.8" cy="44" r="2.4" fill="none" stroke="#fff" stroke-opacity=".22"/>
      <path d="M33.6 41.6a4.6 4.6 0 0 1 4-2" stroke="#fff" stroke-opacity=".5" stroke-width="1" fill="none" stroke-linecap="round"/><path d="M56.8 41.6a4.6 4.6 0 0 1 4-2" stroke="#fff" stroke-opacity=".5" stroke-width="1" fill="none" stroke-linecap="round"/>
    </g>
    <rect x="30" y="49.5" width="60" height="3" fill="url(#ID-wnwood)"/>
    <g>
      <circle cx="37" cy="70" r="5" fill="#d48a8a"/><circle cx="48.6" cy="70" r="5" fill="#5b1226"/><circle cx="60.2" cy="70" r="5" fill="#b0852f"/><circle cx="71.8" cy="70" r="5" fill="#1f4d2e"/><circle cx="83.4" cy="70" r="5" fill="#5b1226"/>
      <circle cx="37" cy="70" r="2.4" fill="none" stroke="#fff" stroke-opacity=".22"/><circle cx="48.6" cy="70" r="2.4" fill="none" stroke="#fff" stroke-opacity=".22"/><circle cx="60.2" cy="70" r="2.4" fill="none" stroke="#fff" stroke-opacity=".22"/><circle cx="71.8" cy="70" r="2.4" fill="none" stroke="#fff" stroke-opacity=".22"/>
      <path d="M33.6 67.6a4.6 4.6 0 0 1 4-2" stroke="#fff" stroke-opacity=".5" stroke-width="1" fill="none" stroke-linecap="round"/><path d="M45.1 67.6a4.6 4.6 0 0 1 4-2" stroke="#fff" stroke-opacity=".5" stroke-width="1" fill="none" stroke-linecap="round"/>
    </g>
    <rect x="30" y="75.5" width="60" height="3" fill="url(#ID-wnwood)"/>
    <g>
      <circle cx="37" cy="96" r="5" fill="#1f4d2e"/><circle cx="48.6" cy="96" r="5" fill="#b0852f"/><circle cx="60.2" cy="96" r="5" fill="#5b1226"/><circle cx="71.8" cy="96" r="5" fill="#d48a8a"/><circle cx="83.4" cy="96" r="5" fill="#1f4d2e"/>
      <circle cx="37" cy="96" r="2.4" fill="none" stroke="#fff" stroke-opacity=".22"/><circle cx="48.6" cy="96" r="2.4" fill="none" stroke="#fff" stroke-opacity=".22"/><circle cx="60.2" cy="96" r="2.4" fill="none" stroke="#fff" stroke-opacity=".22"/><circle cx="71.8" cy="96" r="2.4" fill="none" stroke="#fff" stroke-opacity=".22"/>
      <path d="M33.6 93.6a4.6 4.6 0 0 1 4-2" stroke="#fff" stroke-opacity=".5" stroke-width="1" fill="none" stroke-linecap="round"/><path d="M68.4 93.6a4.6 4.6 0 0 1 4-2" stroke="#fff" stroke-opacity=".5" stroke-width="1" fill="none" stroke-linecap="round"/>
    </g>
    <rect x="30" y="101.5" width="60" height="3" fill="url(#ID-wnwood)"/>
    <rect x="30" y="112" width="60" height="3" fill="url(#ID-wnwood)"/>
  </g>
  <g class="wn-air" fill="none" stroke-linecap="round"><path d="M44 116q-5-14 0-28t-3-30"/><path d="M60 116q5-14 0-28t3-30"/><path d="M76 116q-5-14 0-28t-3-30"/></g>
</g>
<g class="wn-door">
  <rect x="26" y="28" width="68" height="96" rx="2" fill="none" stroke="#0a0c0f" stroke-width="3"/>
  <rect x="29" y="31" width="62" height="90" fill="#0d1b2a" opacity=".3"/>
  <g class="wn-drops"><circle cx="40" cy="48" r="1.1"/><circle cx="64" cy="58" r="1.1"/><circle cx="80" cy="46" r="1.1"/><circle cx="52" cy="88" r="1.1"/><circle cx="76" cy="100" r="1.1"/></g>
  <path d="M29 31h62l-26 90h-36z" fill="url(#ID-gloss)" opacity=".45"/>
  <rect x="89" y="50" width="3.6" height="46" rx="1.8" fill="url(#ID-chrome)" stroke="#6f7780" stroke-width=".4"/>
</g>
<path d="M28 124h64" stroke="#3b424a" stroke-width="1"/>
<rect x="30" y="127" width="10" height="5" rx="1.5" fill="#3a3f45"/><rect x="80" y="127" width="10" height="5" rx="1.5" fill="#3a3f45"/>`;

/* ------------------------------------------------------------------ */
/* Appliance definitions                                               */
/* ------------------------------------------------------------------ */
const CYCLE_FIELDS = ["entity", "power", "energy", "cost", "remaining", "progress", "program", "door", "switch"];
const DEF = {
  washer: { accent: "active", threshold: 10, fields: CYCLE_FIELDS,
    keys: ["lave_linge", "lavelinge", "washing_machine", "washer", "machine_a_laver"] },
  dryer: { accent: "active", threshold: 10, fields: CYCLE_FIELDS,
    keys: ["seche_linge", "sechelinge", "tumble_dryer", "dryer"] },
  dishwasher: { accent: "active", threshold: 10, fields: CYCLE_FIELDS,
    keys: ["lave_vaisselle", "lavevaisselle", "dishwasher"] },
  water_heater: { accent: "heat", threshold: 50,
    fields: ["entity", "power", "power_solar", "energy", "energy_solar", "cost", "temperature", "target_temperature", "switch"],
    keys: ["ballon_eau_chaude", "ballon", "chauffe_eau", "water_heater", "boiler", "cumulus"] },
  oven: { accent: "heat", threshold: 50,
    fields: ["entity", "power", "energy", "cost", "temperature", "target_temperature", "remaining", "program", "door", "switch"],
    keys: ["four", "oven"] },
  microwave: { accent: "active", threshold: 50,
    fields: ["entity", "power", "energy", "cost", "remaining", "program", "door", "switch"],
    keys: ["micro_onde", "micro_ondes", "microondes", "microwave"] },
  air_fryer: { accent: "heat", threshold: 50,
    fields: ["entity", "power", "energy", "cost", "remaining", "program", "temperature", "switch"],
    keys: ["air_fryer", "airfryer", "air_frier", "friteuse", "fryer", "cosori", "ninja_foodi", "dual_zone"] },
  ac_split: { accent: "cold", threshold: 60,
    fields: ["entity", "power", "energy", "cost", "temperature", "target_temperature", "switch"],
    keys: ["clim", "climatisation", "climatiseur", "split", "air_conditioner", "aircon", "daikin", "mitsubishi", "atlantic", "toshiba"] },
  heat_pump: { accent: "heat", threshold: 60,
    fields: ["entity", "power", "energy", "cost", "temperature", "switch"],
    keys: ["pac", "pompe_a_chaleur", "heat_pump", "heatpump", "unite_ext", "groupe_ext", "outdoor_unit"] },
  tv: { accent: "active", threshold: 25,
    fields: ["entity", "power", "energy", "cost", "switch"],
    keys: ["tv", "tele", "television", "televiseur", "bravia", "webos", "android_tv", "tizen", "salon_tv"] },
  range_hood: { accent: "active", threshold: 40,
    fields: ["entity", "power", "energy", "cost", "speed", "light", "switch"],
    keys: ["hotte", "range_hood", "cooker_hood", "hood", "aspirante"] },
  towel_dryer: { accent: "heat", threshold: 50,
    fields: ["entity", "power", "energy", "cost", "temperature", "target_temperature", "mode", "switch"],
    keys: ["seche_serviette", "serviette", "towel", "porte_serviette", "towel_rail", "towel_dryer"] },
  server_rack: { accent: "active", threshold: 30,
    fields: ["entity", "power", "energy", "cost", "temperature", "switch"],
    keys: ["baie", "rack", "homelab", "home_lab", "serveur", "server", "proxmox", "unraid", "nas"] },
  desktop_pc: { accent: "active", threshold: 40,
    fields: ["entity", "power", "energy", "cost", "switch"],
    keys: ["pc_fixe", "pcfixe", "desktop", "ordinateur", "gaming", "workstation", "pc_bureau"] },
  laptop: { accent: "active", threshold: 15,
    fields: ["entity", "power", "energy", "cost", "switch"],
    keys: ["pc_portable", "portable", "laptop", "macbook", "notebook", "thinkpad", "chromebook"] },
  coffee_maker: { accent: "heat", threshold: 300,
    fields: ["entity", "power", "energy", "cost", "switch"],
    keys: ["cafetiere", "coffee", "senseo", "nespresso", "dolce_gusto", "tassimo", "expresso", "espresso", "cafe"] },
  wine_cooler: { accent: "cold", threshold: 15,
    fields: ["entity", "power", "energy", "cost", "temperature", "door", "switch"],
    keys: ["cave_a_vin", "cave", "vin", "wine", "cellar", "wine_cooler", "wine_fridge", "vinotheque"] },
  fridge: { accent: "cold", threshold: 20,
    fields: ["entity", "power", "energy", "cost", "temperature", "freezer_temperature", "door", "freezer_door", "switch"],
    keys: ["refrigerateur", "frigo", "fridge", "refrigerator", "frigidaire"] },
  pellet_stove: { accent: "heat", threshold: 20,
    fields: ["entity", "power", "energy", "cost", "temperature", "target_temperature", "power_level", "pellet_level", "switch"],
    keys: ["poele", "pellet", "granule", "stove"] },
  pool_pump: { accent: "active", threshold: 50,
    fields: ["entity", "power", "energy", "cost", "temperature", "runtime", "speed", "switch"],
    keys: ["piscine", "pool", "filtration", "pompe"] },
  chest_freezer: { accent: "cold", threshold: 20,
    fields: ["entity", "power", "energy", "cost", "temperature", "door", "switch"],
    keys: ["congelateur_coffre", "coffre", "chest", "bahut"] },
  drawer_freezer: { accent: "cold", threshold: 20,
    fields: ["entity", "power", "energy", "cost", "temperature", "door", "switch"],
    keys: ["congelateur", "freezer", "tiroir"] },
  solar: { accent: "heat", threshold: 10,
    fields: ["power", "energy", "cost", "entity"],
    keys: ["solaire", "solar", "pv", "photovolta", "onduleur", "inverter"] },
  vmc: { accent: "active", threshold: 5,
    fields: ["entity", "power", "energy", "cost", "speed", "humidity", "switch"],
    keys: ["vmc", "ventilation", "extracteur", "mvhr", "hrv"] },
  hob: { accent: "heat", threshold: 50,
    fields: ["entity", "power", "energy", "cost", "zone_1", "zone_2", "zone_3", "zone_4"],
    keys: ["plaque", "cuisson", "induction", "vitro", "hob", "cooktop", "table_de_cuisson"] },
  radiator: { accent: "heat", threshold: 50,
    fields: ["entity", "power", "energy", "cost", "temperature", "target_temperature", "mode", "window", "switch"],
    keys: ["radiateur", "radiator", "chauffage", "heater", "convecteur"] },
  printer_3d: { accent: "active", threshold: 40,
    fields: ["entity", "power", "energy", "cost", "progress", "remaining", "program", "temperature", "bed_temperature", "switch"],
    keys: ["imprimante", "printer", "3d", "bambu", "prusa", "octoprint", "klipper", "moonraker"] },
};

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */
const BAD = ["unavailable", "unknown", "none", ""];
const OFF_STATES = ["off", "idle", "inactive", "false", "standby", "stopped", "stop", "ready", "arret", "arrêt", "veille", "inactif", "pause", "paused", "0"];
const DONE_STATES = ["finished", "finish", "done", "end", "ended", "complete", "completed", "termine", "terminé", "fin", "cycle_finished"];
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const num = (st) => {
  if (!st || BAD.includes(String(st.state).toLowerCase())) return null;
  const n = parseFloat(st.state);
  return Number.isFinite(n) ? n : null;
};
const domainOf = (id) => (id || "").split(".")[0];
// modes radiateur / sèche-serviettes : confort, éco, hors-gel, arrêt
const MODE_RX = { comfort: /confort|comfort/, eco: /eco|nuit|night|sleep|economy|reduit|réduit/, frost: /hors|frost|gel|away|absent/, off: /^(off|arret|arrêt|stop)$/ };
const MODE_ORDER = ["comfort", "eco", "frost", "off"];
const MODE_ICON = { comfort: "mdi:fire", eco: "mdi:leaf", frost: "mdi:snowflake", off: "mdi:power" };
const modeOptions = (st) => {
  if (!st) return [];
  const d = domainOf(st.entity_id);
  if (d === "select" || d === "input_select") return st.attributes.options || [];
  if (d === "climate") return [...(st.attributes.preset_modes || []), ...(st.attributes.hvac_modes || [])];
  return [];
};
const pickMode = (opts, key) => opts.find((o) => MODE_RX[key].test(String(o).toLowerCase()));
function modeOf(m, main, c) {
  const isClimate = main && domainOf(c.entity) === "climate";
  const raw = isClimate && main.state === "off" ? "off"
    : String(m.mode && !BAD.includes(String(m.mode.state).toLowerCase()) ? m.mode.state
      : isClimate ? (main.attributes.preset_mode || main.state) : "").toLowerCase();
  return /hors|frost|gel|away|absent/.test(raw) ? "frost"
    : /eco|nuit|night|sleep|economy|reduit|réduit/.test(raw) ? "eco"
    : /^(off|arret|arrêt|stop)$/.test(raw) ? "off"
    : raw ? "comfort" : null;
}
const loc = (hass) => hass?.locale?.language || hass?.language || undefined;

function fmtNum(hass, n, digits, minDigits = 0) {
  try {
    return new Intl.NumberFormat(loc(hass), { maximumFractionDigits: digits, minimumFractionDigits: minDigits }).format(n);
  } catch (e) { return n.toFixed(digits); }
}
const powerW = (st) => { const v = num(st); if (v === null) return null; return st.attributes.unit_of_measurement === "kW" ? v * 1000 : v; };
function fmtPower(hass, st) {
  const w = powerW(st); if (w === null) return null;
  return w >= 1000 ? `${fmtNum(hass, w / 1000, 2)} kW` : `${fmtNum(hass, w, w < 10 ? 1 : 0)} W`;
}
function fmtUnit(hass, st, digits, minDigits = 0) {
  const v = num(st); if (v === null) return null;
  const u = st.attributes.unit_of_measurement;
  return u ? `${fmtNum(hass, v, digits, minDigits)} ${u}` : fmtNum(hass, v, digits, minDigits);
}
function parseRemaining(st) {
  if (!st) return null;
  const v = String(st.state);
  if (BAD.includes(v.toLowerCase())) return null;
  const a = st.attributes || {};
  if (a.device_class === "timestamp" || /^\d{4}-\d\d-\d\dT/.test(v)) {
    const d = (new Date(v).getTime() - Date.now()) / 60000;
    return Number.isFinite(d) ? Math.max(0, d) : null;
  }
  const m = v.match(/^(\d+):(\d{2})(?::(\d{2}))?$/);
  if (m) return (+m[1]) * 60 + (+m[2]) + (m[3] ? +m[3] / 60 : 0);
  const n = parseFloat(v);
  if (!Number.isFinite(n)) return null;
  const u = String(a.unit_of_measurement || "min").toLowerCase();
  if (u === "h") return n * 60;
  if (u === "s") return n / 60;
  if (u === "d") return n * 1440;
  return n;
}
function fmtDuration(min) {
  const m = Math.round(min);
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60), r = m % 60;
  return r ? `${h} h ${String(r).padStart(2, "0")}` : `${h} h`;
}
// H:MM like a real washer/oven display; M:SS for short countdowns (microwave)
const lcdDuration = (min, short = false) => {
  if (short) { const s = Math.round(min * 60); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`; }
  const m = Math.ceil(min - 1e-9); return `${Math.floor(m / 60)}:${String(m % 60).padStart(2, "0")}`;
};
function fmtClock(hass, date) {
  try { return date.toLocaleTimeString(loc(hass), { hour: "2-digit", minute: "2-digit" }); }
  catch (e) { return `${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`; }
}
function stateText(hass, st) {
  if (!st) return "";
  try { if (hass.formatEntityState) return hass.formatEntityState(st); } catch (e) { /* ignore */ }
  return st.state;
}
const isOn = (st) => !!st && String(st.state).toLowerCase() === "on";

/* ------------------------------------------------------------------ */
/* Base card                                                           */
/* ------------------------------------------------------------------ */
let SEQ = 0;

class ApplianceCardBase extends HTMLElement {
  static get kind() { return "washer"; }
  static getConfigForm() { return buildForm(this.kind); }
  static getStubConfig(hass) { return stubFor(this.kind, hass); }

  setConfig(config) {
    if (!config) throw new Error("Invalid configuration");
    if (!["entity", "power", "power_solar", "switch", "temperature", "zone_1"].some((f) => config[f])) {
      throw new Error(tr(undefined, "err_need_entity"));
    }
    this._config = { ...config };
    this._kind = this.constructor.kind;
    this._def = DEF[this._kind];
    this._lastKey = null;
    this._build();
    if (this._hass) this._update(true);
  }

  set hass(hass) {
    this._hass = hass;
    if (this._config) this._update(false);
  }

  connectedCallback() {
    // keep LCD clock / countdown fresh even when no entity changes
    this._tick = setInterval(() => { if (this._hass && this._config) this._update(false); }, 20000);
  }
  disconnectedCallback() { clearInterval(this._tick); }

  getCardSize() { return 4; }
  getGridOptions() { return { columns: 12, min_columns: 6 }; }

  _ids() {
    const c = this._config;
    return ["entity", "power", "power_solar", "energy_solar", "energy", "cost", "remaining", "progress", "program", "door", "switch",
      "power_level", "pellet_level", "runtime", "speed", "bed_temperature", "humidity", "light", "zone_1", "zone_2", "zone_3", "zone_4", "mode", "window", "temperature", "target_temperature", "freezer_temperature", "freezer_door"].map((k) => c[k]).filter(Boolean);
  }

  _build() {
    if (!this.shadowRoot) this.attachShadow({ mode: "open" });
    const id = `ac${++SEQ}`;
    const svg = SVG[this._kind](this._config).replace(/ID-/g, `${id}-`);
    this.shadowRoot.innerHTML = `
      <style>${STYLE}</style>
      <ha-card>
        <div class="wrap" id="wrap">
          <div class="top">
            <div class="illus"><svg viewBox="0 0 120 140" aria-hidden="true">${svg}</svg></div>
            <div class="head">
              <div class="info" id="info"></div>
              <div class="actions" id="actions"></div>
            </div>
            <div class="stats" id="stats"></div>
          </div>
          <div class="modes" id="modes"></div>
          <div class="bar" id="bar"><div class="bar-fill" id="barfill"></div></div>
        </div>
      </ha-card>`;
    this.shadowRoot.querySelector("ha-card").addEventListener("click", (ev) => {
      const path = ev.composedPath();
      if (path.some((n) => n.classList && (n.classList.contains("toggle") || n.classList.contains("mode-btn")))) return;
      const tile = path.find((n) => n.dataset && n.dataset.entity);
      const c = this._config;
      const eid = tile ? tile.dataset.entity : (c.entity || c.power || c.switch || c.temperature);
      if (eid) this.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId: eid }, bubbles: true, composed: true }));
    });
    if (this._config.color) this.style.setProperty("--ac-accent", this._config.color);
  }

  _update(force) {
    const hass = this._hass;
    const key = this._ids().map((i) => {
      const s = hass.states[i];
      return s ? `${s.state}|${s.attributes.temperature ?? ""}|${s.attributes.current_temperature ?? ""}` : "x";
    }).join(";") + "|" + lang(hass) + "|" + Math.floor(Date.now() / 30000);
    if (!force && key === this._lastKey) return;
    this._lastKey = key;
    this._render(this._compute());
  }

  /* ---------------- state model ---------------- */
  _compute() {
    const hass = this._hass, c = this._config, d = this._def, kind = this._kind;
    const S = (i) => (i ? hass.states[i] : undefined);
    const main = S(c.entity), pw = S(c.power), pwS = S(c.power_solar), sw = S(c.switch);
    const threshold = c.threshold ?? d.threshold;
    // deux sources de puissance possibles (ex. contacteur réseau + routeur solaire) : on additionne
    const wGrid = powerW(pw), wSolar = powerW(pwS);
    const watts = wGrid === null && wSolar === null ? null : (wGrid || 0) + (wSolar || 0);
    const m = {
      main, pw, pwS, wGrid, wSolar, sw, watts, threshold,
      energy: S(c.energy), energyS: S(c.energy_solar), cost: S(c.cost), remaining: parseRemaining(S(c.remaining)),
      progress: num(S(c.progress)), program: S(c.program), door: S(c.door),
      temp: S(c.temperature), target: S(c.target_temperature),
      ftemp: S(c.freezer_temperature), fdoor: S(c.freezer_door),
      level: num(S(c.power_level)), pellets: num(S(c.pellet_level)),
      runtime: parseRemaining(S(c.runtime)), speed: S(c.speed), bedTemp: num(S(c.bed_temperature)), humidity: num(S(c.humidity)), mode: S(c.mode), window: S(c.window), light: S(c.light),
      status: "idle", phase: null, alerts: [],
    };
    if (main && ["water_heater", "climate"].includes(domainOf(c.entity))) {
      if (!m.temp && main.attributes.current_temperature != null) m.tempVal = main.attributes.current_temperature;
      if (!m.target && main.attributes.temperature != null) m.targetVal = main.attributes.temperature;
    }
    if (m.tempVal == null) m.tempVal = num(m.temp);
    if (m.targetVal == null) m.targetVal = num(m.target);
    m.tempUnit = m.temp?.attributes.unit_of_measurement || hass.config?.unit_system?.temperature || "°C";

    const ref = main || sw;
    const mainIds = ["entity", "power", "power_solar", "switch", "temperature", "zone_1", "zone_2", "zone_3", "zone_4"].map((k) => c[k]).filter(Boolean);
    const usable = mainIds.some((i) => hass.states[i] && !BAD.includes(String(hass.states[i].state).toLowerCase()));
    if (!usable) { m.status = "unavailable"; return m; }
    let base = null;
    if (ref) {
      const s = String(ref.state).toLowerCase();
      const dom = domainOf(main ? c.entity : c.switch);
      if (BAD.includes(s)) base = null;
      else if (DONE_STATES.includes(s)) base = "finished";
      else if (OFF_STATES.includes(s)) {
        base = ["standby", "veille"].includes(s) ? "standby"
          : ["idle", "inactive", "inactif", "ready", "stopped", "stop", "pause", "paused"].includes(s) ? "idle"
          : ["input_boolean", "binary_sensor"].includes(dom) ? "idle" : "off";
      }
      // a plug/switch being "on" only means powered: let the power sensor decide
      else if (["switch", "light", "water_heater", "climate", "fan"].includes(dom)) base = "on";
      // input_boolean / binary_sensor "on", or a descriptive sensor state, means running
      else base = "running";
    }
    if (base === null && !pw && !pwS && ref) base = "unavailable";
    const powered = watts !== null && watts > threshold;
    if (base === "on" || base === null) {
      if (watts !== null) base = powered ? "running" : (base === "on" ? "standby" : "idle");
      else base = base === "on" ? "running" : "idle";
    }
    if (base === "finished" && powered) base = "running";
    if (sw && String(sw.state).toLowerCase() === "off" && base !== "unavailable") base = "off";

    m.solarHeat = kind === "water_heater" && wSolar !== null && wSolar > threshold;
    if (kind === "water_heater") {
      if (base === "off" || base === "unavailable") m.status = base;
      else if (powered || (watts === null && base === "running")) m.status = "heating";
      else m.status = "ready";
    } else if (kind === "oven") {
      if (["off", "idle", "standby", "unavailable", "finished"].includes(base)) m.status = base === "standby" ? "off" : base;
      else if (m.tempVal != null && m.targetVal != null && m.tempVal < m.targetVal - 5) m.status = "preheating";
      else m.status = "heating";
    } else if (kind === "pellet_stove") {
      const raw = main ? `${main.state} ${main.attributes.hvac_action || ""} ${main.attributes.status || ""}`.toLowerCase() : "";
      const ign = c.ignition_threshold ?? 250;
      const byPower = () => (watts > ign ? "ignition" : powered ? "heating" : "standby");
      if (/alarm|alarme|error|erreur|d[eé]faut|fault|bloqu|block/.test(raw)) m.status = "alarm";
      else if (/allum|ignit|d[eé]marr|start|pr[eé]chauf|preheat|charg/.test(raw)) m.status = "ignition";
      else if (/extin|shut.?down|cool|refroid|clean|nettoy/.test(raw)) m.status = "extinguishing";
      else if (base === "off" || base === "unavailable") m.status = base;
      else if (main && ["climate", "water_heater"].includes(domainOf(c.entity))) {
        const act = String(main.attributes.hvac_action || "").toLowerCase();
        m.status = act === "off" ? "off" : act === "heating" ? (watts !== null ? (watts > ign ? "ignition" : "heating") : "heating")
          : act ? "standby" : (watts !== null ? byPower() : "heating");
      }
      else if (/eco|veille|standby|attente|wait/.test(raw)) m.status = "standby";
      else if (watts !== null) m.status = base === "idle" && !powered ? "off" : byPower();
      else m.status = base === "running" ? "heating" : base === "standby" ? "standby" : "off";
      if (m.pellets != null && m.pellets < (c.pellet_alert ?? 15)) m.alerts.push("pellets_low");
    } else if (kind === "pool_pump") {
      m.status = base === "running" ? "filtering" : base;
    } else if (kind === "printer_3d") {
      const raw = main ? `${main.state}`.toLowerCase() : "";
      if (/fail|error|erreur|[eé]chec/.test(raw)) m.status = "failed";
      else if (/paus/.test(raw)) m.status = "paused";
      else if (/finish|done|complete|termin|fini/.test(raw)) m.status = "finished";
      else if (/prepar|heat|chauff|preheat|calibr|level|homing|init/.test(raw)) m.status = "heating";
      else if (/print|running|impression|en cours|busy|slicing/.test(raw)) m.status = "printing";
      else if (/offline|hors ligne/.test(raw)) m.status = "off";
      else if (/idle|ready|pr[eê]t|operational|standby/.test(raw)) m.status = powered ? "printing" : "ready";
      else if (base === "running") m.status = "printing";
      else if (base === "standby" || base === "idle") m.status = main || sw ? "ready" : "off";
      else m.status = base;
    } else if (kind === "radiator") {
      const isClimate = main && domainOf(c.entity) === "climate";
      const act = isClimate ? String(main.attributes.hvac_action || "").toLowerCase() : "";
      m.radMode = modeOf(m, main, c);
      if (base === "unavailable") m.status = "unavailable";
      else if (m.radMode === "off" || base === "off" || act === "off" || (isClimate && main.state === "off")) m.status = "off";
      else if (act === "heating" || (watts != null && powered) || (watts == null && !isClimate && base === "running")) m.status = "heating";
      else m.status = "standby";
      m.heat = m.status !== "heating" ? 0 : watts != null ? Math.max(0.3, Math.min(1, watts / (c.max_power || 1500))) : 0.8;
      if (isOn(m.window)) m.alerts.push("window_open");
    } else if (kind === "hob") {
      const zp = c.zone_power || 1500;
      const lvlOf = (st) => {
        if (!st || BAD.includes(String(st.state).toLowerCase())) return null;
        const t = String(st.state).toLowerCase(), n = parseFloat(t), u = String(st.attributes.unit_of_measurement || "");
        if (/boost|^p$|power/.test(t)) return 9;
        if (["off", "arret", "arrêt", "0"].includes(t)) return 0;
        if (!Number.isFinite(n)) return t === "on" ? 5 : 0;
        if (u === "W") return Math.max(0, Math.min(9, Math.round(n / zp * 9)));
        if (u === "kW") return Math.max(0, Math.min(9, Math.round(n * 1000 / zp * 9)));
        if (u === "%") return Math.max(0, Math.min(9, Math.round(n / 100 * 9)));
        return Math.max(0, Math.min(9, Math.round(n)));
      };
      let zl = [1, 2, 3, 4].map((i) => lvlOf(S(c[`zone_${i}`])));
      if (zl.every((v) => v == null)) {
        // no per-zone data: spread the total power over zones (front-left, back-right, front-right, back-left)
        zl = [0, 0, 0, 0];
        if (base !== "off" && base !== "unavailable" && watts != null && watts > threshold) {
          const n = Math.max(1, Math.min(4, Math.ceil(watts / (zp * 1.4))));
          const per = watts / n;
          const lv = Math.max(1, Math.min(9, Math.round(per / zp * 9)));
          [0, 3, 1, 2].slice(0, n).forEach((z) => { zl[z] = lv; });
        }
      } else zl = zl.map((v) => v ?? 0);
      const now = Date.now(), keep = (c.residual_minutes ?? 10) * 60000;
      this._hot = this._hot || [0, 0, 0, 0];
      zl.forEach((v, i) => { if (v > 0) this._hot[i] = now; });
      m.zones = zl;
      m.residualZones = zl.map((v, i) => v === 0 && this._hot[i] && now - this._hot[i] < keep);
      m.activeZones = zl.filter((v) => v > 0).length;
      if (base === "unavailable") m.status = "unavailable";
      else if (m.activeZones > 0) m.status = "cooking";
      else if (m.residualZones.some(Boolean)) m.status = "residual";
      else m.status = "off";
    } else if (kind === "vmc") {
      const sp = m.speed ? String(m.speed.state).toLowerCase() : "";
      const spn = num(m.speed);
      const hi = c.high_threshold ?? 35;
      if (base === "off" || base === "unavailable") m.status = base;
      else if (m.speed && !BAD.includes(sp) && /boost|grande|high|max|rapide|fast|gv/.test(sp)) m.status = "speed2";
      else if (m.speed && !BAD.includes(sp) && /petite|low|eco|lente|slow|min|pv|auto|normal/.test(sp)) m.status = "speed1";
      else if (spn != null && spn > 0) m.status = (String(m.speed.attributes.unit_of_measurement || "") === "%" ? spn > 60 : spn >= 2) ? "speed2" : "speed1";
      else if (spn === 0) m.status = "off";
      else if (watts != null) m.status = watts > hi ? "speed2" : powered ? "speed1" : (base === "standby" ? "standby" : "off");
      else m.status = base === "running" ? "speed1" : base;
      if (m.humidity != null && m.humidity > (c.humidity_max ?? 70)) m.alerts.push("humid");
    } else if (kind === "solar") {
      const sunSt = hass.states[c.sun_entity || "sun.sun"];
      const hr = new Date().getHours();
      const night = sunSt ? sunSt.state === "below_horizon" : (hr >= 21 || hr < 6);
      m.frac = watts != null ? Math.max(0, Math.min(1, watts / (c.max_power || 3000))) : 0;
      if (base === "unavailable") m.status = "unavailable";
      else if (watts != null && watts > threshold) m.status = m.frac < 0.15 ? "low" : "producing";
      else m.status = night ? "night" : "idle";
    } else if (kind === "chest_freezer" || kind === "drawer_freezer") {
      if (base === "off" || base === "unavailable") m.status = base;
      else m.status = powered ? "cooling" : "standby";
      if (m.tempVal != null && m.tempVal > (c.freezer_max_temperature ?? c.max_temperature ?? -12)) m.alerts.push("too_warm");
    } else if (kind === "ac_split" || kind === "heat_pump") {
      const isClim = main && domainOf(c.entity) === "climate";
      const mode = isClim ? String(main.state).toLowerCase() : null;
      const act = isClim ? String(main.attributes.hvac_action || "").toLowerCase() : "";
      const hint = String(c.hvac || "auto").toLowerCase(), mon = new Date().getMonth();
      const guess = hint === "cool" || hint === "clim" ? "cooling" : hint === "heat" || hint === "chauffage" ? "heating" : (mon >= 4 && mon <= 8 ? "cooling" : "heating");
      const fromMode = (md) => ({ cool: "cooling", heat: "heating", dry: "ac_dry", fan_only: "ac_fan" }[md]);
      if (isClim && BAD.includes(mode)) m.status = "unavailable";
      else if (mode === "off" || (!isClim && ["off", "unavailable"].includes(base))) m.status = mode === "off" ? "off" : base;
      else if (act && act !== "off") m.status = ({ cooling: "cooling", heating: "heating", preheating: "heating", drying: "ac_dry", fan: "ac_fan", idle: "at_target", defrosting: "defrost" }[act]) || fromMode(mode) || guess;
      else if (mode) m.status = (watts !== null && !powered && !["fan_only", "dry"].includes(mode)) ? "at_target" : (fromMode(mode) || guess);
      else if (watts !== null) m.status = powered ? guess : "off";
      else m.status = base === "running" || base === "on" ? guess : "off";
      if (sw && String(sw.state).toLowerCase() === "off") m.status = "off";
      m.acMode = mode && mode !== "off" ? mode : null;
      m.accent = m.status === "heating" ? "heat" : "cold";
    } else if (kind === "tv") {
      const dom = main ? domainOf(c.entity) : null, ms = main ? String(main.state).toLowerCase() : "";
      if (dom === "media_player" && !BAD.includes(ms)) {
        m.status = ["on", "playing", "paused", "idle", "buffering"].includes(ms) ? "screen_on" : ms === "standby" ? "standby" : "off";
        if (watts !== null && m.status !== "screen_on" && watts > threshold) m.status = "screen_on";
      } else if (["off", "unavailable"].includes(base)) m.status = base;
      else if (watts !== null) m.status = watts > threshold ? "screen_on" : watts >= (c.standby_threshold ?? 0.2) ? "standby" : "off";
      else m.status = base === "running" ? "screen_on" : "standby";
      if (sw && String(sw.state).toLowerCase() === "off") m.status = "off";
    } else if (kind === "range_hood") {
      const sp = m.speed ? String(m.speed.state).toLowerCase() : "", spn = num(m.speed);
      const hi = c.high_threshold ?? 130, lightT = c.light_threshold ?? 3;
      if (base === "off" || base === "unavailable") m.status = base;
      else if (m.speed && !BAD.includes(sp) && /boost|grande|high|max|rapide|fast|3|intensi/.test(sp)) m.status = "speed2";
      else if (m.speed && !BAD.includes(sp) && /petite|low|eco|lente|slow|min|1|2|moyen|medium/.test(sp)) m.status = "speed1";
      else if (spn === 0) m.status = "off";
      else if (watts !== null) m.status = watts > hi ? "speed2" : powered ? "speed1" : watts > lightT ? "lights" : "off";
      else m.status = base === "running" ? "speed1" : base === "standby" ? "off" : base;
      m.lights = m.light ? isOn(m.light) : (m.status === "lights" || ((m.status === "speed1" || m.status === "speed2") && c.light === undefined && watts !== null && watts > threshold));
    } else if (kind === "towel_dryer") {
      m.radMode = modeOf(m, main, c);
      if (base === "off" || base === "unavailable") m.status = base;
      else if (m.radMode === "off") m.status = "off";
      else if (powered || (watts === null && base === "running" && !m.mode)) m.status = "heating";
      else m.status = base === "standby" || isOn(sw) || m.radMode ? "at_target" : "off";
    } else if (kind === "server_rack") {
      if (base === "off" || base === "unavailable") m.status = base;
      else if (watts !== null) m.status = powered ? "online" : watts > 0.5 ? "standby" : "off";
      else m.status = base === "running" ? "online" : base === "standby" ? "standby" : "off";
      m.load = watts !== null ? Math.max(0, Math.min(1, watts / (c.max_power || 300))) : 0.4;
    } else if (kind === "desktop_pc" || kind === "laptop") {
      if (base === "off" || base === "unavailable") m.status = base;
      else if (watts !== null) m.status = powered ? "screen_on" : watts >= (c.standby_threshold ?? 0.5) ? "standby" : "off";
      else m.status = base === "running" ? "screen_on" : "standby";
    } else if (kind === "coffee_maker") {
      const warmT = c.warm_threshold ?? 5;
      if (["off", "unavailable"].includes(base)) m.status = base;
      else if (base === "finished") m.status = "ready";
      else if (watts !== null) m.status = watts > threshold ? "brewing" : watts > warmT ? (cfStyle(c) === "filtre" ? "keep_warm" : "ready") : "idle";
      else m.status = base === "running" ? "brewing" : "idle";
    } else if (kind === "air_fryer") {
      m.status = base === "running" ? "cooking" : base === "standby" ? "idle" : base;
    } else if (kind === "wine_cooler") {
      if (base === "off" || base === "unavailable") m.status = base;
      else m.status = powered || (watts === null && base === "running") ? "cooling" : "standby";
      if (m.tempVal != null && m.tempVal > (c.max_temperature ?? 18)) m.alerts.push("too_warm");
    } else if (kind === "fridge") {
      if (base === "off" || base === "unavailable") m.status = base;
      else m.status = powered ? "cooling" : "standby";
      const maxF = c.max_temperature ?? 8, maxZ = c.freezer_max_temperature ?? -12;
      if (m.tempVal != null && m.tempVal > maxF) m.alerts.push("too_warm");
      if (num(m.ftemp) != null && num(m.ftemp) > maxZ) m.alerts.push("too_warm");
    } else {
      m.status = base;
    }

    // phase detection (washer / dryer / dishwasher) from status or program text
    if (m.status === "running" && ["washer", "dryer", "dishwasher"].includes(kind)) {
      const txt = `${main ? main.state : ""} ${m.program ? m.program.state : ""}`.toLowerCase();
      if (/rin[cç]|rinse/.test(txt)) m.phase = "rinse";
      else if (/essor|spin|centrif|essorage/.test(txt)) m.phase = "spin";
      else if (/refroid|cool|anti.?froiss|wrinkle/.test(txt)) m.phase = "cool";
      else if (/s[eé]ch|dry/.test(txt)) m.phase = "dry";
      else m.phase = kind === "dryer" ? "dry" : "wash";
    }
    if (isOn(m.door) || isOn(m.fdoor)) m.alerts.unshift("door_open");
    m.alerts = [...new Set(m.alerts)];
    return m;
  }

  async _setMode(key) {
    const hass = this._hass, c = this._config;
    const id = c.mode || (domainOf(c.entity) === "climate" ? c.entity : null);
    const st = id && hass.states[id];
    if (!st) return;
    const dom = domainOf(id), opts = modeOptions(st);
    const opt = pickMode(opts, key);
    if (!opt) return;
    if (dom === "select" || dom === "input_select") {
      hass.callService(dom, "select_option", { entity_id: id, option: opt });
    } else if (dom === "climate") {
      const hv = st.attributes.hvac_modes || [];
      if (key === "off") { hass.callService("climate", "set_hvac_mode", { entity_id: id, hvac_mode: hv.find((x) => x === "off") || "off" }); return; }
      if (st.state === "off") {
        const on = hv.find((x) => ["heat", "heat_cool", "auto"].includes(x));
        if (on) await hass.callService("climate", "set_hvac_mode", { entity_id: id, hvac_mode: on });
      }
      if ((st.attributes.preset_modes || []).includes(opt)) hass.callService("climate", "set_preset_mode", { entity_id: id, preset_mode: opt });
    }
  }

  /* ---------------- rendering ---------------- */
  _lcdText(m) {
    const hass = this._hass, kind = this._kind;
    const active = ["running", "heating", "preheating", "cooling", "ignition", "filtering", "printing", "producing", "low", "speed1", "speed2", "cooking", "brewing", "keep_warm", "screen_on", "online", "ac_dry", "ac_fan", "defrost"].includes(m.status);
    if (m.status === "unavailable") return "- - -";
    if (["fridge", "wine_cooler", "chest_freezer", "drawer_freezer"].includes(kind)) return m.tempVal != null ? `${fmtNum(hass, m.tempVal, 0)}°` : "--°";
    if (kind === "towel_dryer") {
      if (m.status === "off") return "OFF";
      if (m.radMode === "frost") return "H-G";
      const v = m.targetVal ?? m.tempVal;
      return v != null ? `${Math.round(v)}°` : "ON";
    }
    if (kind === "server_rack") {
      if (m.status === "off") return "OFF";
      if (m.status === "standby") return "STBY";
      return m.watts != null ? `${Math.round(m.watts)}W` : "ON";
    }
    if (kind === "radiator") {
      if (m.status === "off") return "OFF";
      if (m.radMode === "frost") return "H-G";
      const v = m.targetVal ?? m.tempVal;
      return v != null ? `${Math.round(v)}°` : "ON";
    }
    if (kind === "solar") {
      if (m.status === "night") return tr(hass, "lcd_night");
      if (m.watts == null) return "--";
      return m.watts >= 1000 ? `${(m.watts / 1000).toFixed(m.watts >= 10000 ? 0 : 1)}kW` : `${Math.round(m.watts)}W`;
    }
    if (kind === "printer_3d") {
      if (m.status === "printing") return m.progress != null ? `${Math.round(m.progress)}%` : m.remaining ? lcdDuration(m.remaining) : "PRINT";
      if (m.status === "heating") return m.tempVal != null ? `${Math.round(m.tempVal)}°` : "HEAT";
      if (m.status === "paused") return "PAUSE";
      if (m.status === "finished") return "DONE";
      if (m.status === "failed") return "ERROR";
      if (m.status === "ready") return "READY";
      return "OFF";
    }
    if (kind === "pool_pump") {
      if (m.status === "filtering") {
        const sp = num(m.speed), u = String(m.speed?.attributes.unit_of_measurement || "").toLowerCase();
        if (sp != null && u !== "%") return `${Math.round(sp)}`;
        if (sp != null) return `${Math.round(sp)}%`;
        return m.watts != null ? `${Math.round(m.watts)}W` : "ON";
      }
      return m.status === "standby" ? "STBY" : "OFF";
    }
    if (kind === "pellet_stove") {
      if (m.status === "ignition") return tr(hass, "lcd_ignition");
      if (m.status === "extinguishing") return tr(hass, "lcd_extinguishing");
      if (m.status === "alarm") return "ALARM";
      if (m.status === "standby") return "ECO";
      if (m.status === "heating") return m.tempVal != null ? `${Math.round(m.tempVal)}°` : m.level != null ? `P${Math.round(m.level)}` : "ON";
      return fmtClock(hass, new Date());
    }
    if (kind === "oven") {
      if (active && m.tempVal != null) return `${Math.round(m.tempVal)}°`;
      if (active) return m.remaining ? lcdDuration(m.remaining) : "ON";
      return fmtClock(hass, new Date());
    }
    if (kind === "ac_split") {
      if (m.status === "off" || m.status === "unavailable") return "";
      return m.targetVal != null ? `${Math.round(m.targetVal)}°` : m.tempVal != null ? `${Math.round(m.tempVal)}°` : "ON";
    }
    if (kind === "coffee_maker") {
      if (m.status === "brewing") return tr(hass, "lcd_brewing");
      if (m.status === "ready") return tr(hass, "lcd_ready");
      if (m.status === "off") return "OFF";
      return fmtClock(hass, new Date());
    }
    if (kind === "air_fryer") {
      if (m.status === "finished") return "End";
      if (active && m.remaining != null && m.remaining > 0) return lcdDuration(m.remaining, m.remaining < 60);
      if (active && m.tempVal != null) return `${Math.round(m.tempVal)}°`;
      return active ? "ON" : "OFF";
    }
    if (kind === "microwave") {
      if (m.status === "finished") return "End";
      if (active) return m.remaining != null ? lcdDuration(m.remaining, m.remaining < 60) : "ON";
      return fmtClock(hass, new Date());
    }
    if (m.status === "finished") return "END";
    if (!active) return "OFF";
    if (m.remaining != null && m.remaining > 0) return lcdDuration(m.remaining);
    return { wash: "WASH", rinse: "RINSE", spin: "SPIN", dry: "DRY", cool: "COOL" }[m.phase] || "RUN";
  }

  _render(m) {
    const hass = this._hass, c = this._config, kind = this._kind;
    const $ = (i) => this.shadowRoot.getElementById(i);
    const active = ["running", "heating", "preheating", "cooling", "ignition", "filtering", "printing", "producing", "low", "speed1", "speed2", "cooking", "brewing", "keep_warm", "screen_on", "online", "ac_dry", "ac_fan", "defrost"].includes(m.status);
    $("wrap").className = [
      "wrap", `k-${kind}`, `st-${m.status}`, `accent-${m.accent || this._def.accent}`,
      active ? "active" : "", m.phase ? `ph-${m.phase}` : "",
      m.alerts.length ? "alert" : "", isOn(m.door) ? "door-open" : "", isOn(m.fdoor) ? "fz-open" : "",
      m.alerts.includes("too_warm") ? "warm" : "", m.alerts.includes("humid") ? "humid" : "", c.animations === false ? "no-anim" : "", m.lights ? "lights-on" : "", m.solarHeat ? "solar-heat" : "", m.acMode ? `mode-${m.acMode}` : "",
    ].filter(Boolean).join(" ");

    // illustration dynamic parts
    if (kind === "tv") {
      const prev = this._tvPrev, on = m.status === "screen_on";
      const scr = this.shadowRoot.querySelector(".tv-flash");
      if (prev !== undefined && scr && (prev === "screen_on") !== on) {
        const g = this.shadowRoot.querySelector("svg");
        g.classList.remove("tv-boot", "tv-shut"); void g.getBoundingClientRect(); g.classList.add(on ? "tv-boot" : "tv-shut");
        clearTimeout(this._tvT); this._tvT = setTimeout(() => g.classList.remove("tv-boot", "tv-shut"), 3400);
      }
      this._tvPrev = m.status;
    }
    const sr = this.shadowRoot;
    const lcdEl = sr.querySelector(".lcd");
    if (lcdEl) lcdEl.textContent = this._lcdText(m);
    if (kind === "server_rack") $("wrap").style.setProperty("--load", (m.load ?? 0.4).toFixed(2));
    if (kind === "solar") $("wrap").style.setProperty("--sun", (m.frac || 0).toFixed(2));
    if (kind === "radiator" || kind === "towel_dryer") {
      $("wrap").style.setProperty("--heat", (m.heat || 0).toFixed(2));
      ["comfort", "eco", "frost"].forEach((k) => $("wrap").classList.toggle(`mode-${k}`, m.radMode === k || (k === "comfort" && !m.radMode && m.status !== "off")));
      if (kind === "radiator") $("wrap").classList.toggle("win-open", isOn(m.window));
    }
    if (kind === "hob" && m.zones) {
      m.zones.forEach((v, i) => {
        const z = sr.querySelector(`.z${i + 1}`), d = sr.querySelector(`.zd${i + 1}`);
        const res = m.residualZones[i];
        z.style.setProperty("--lvl", v > 0 ? (0.25 + v * 0.083).toFixed(2) : res ? "0.12" : "0");
        z.classList.toggle("on", v > 0); z.classList.toggle("res", !!res);
        d.textContent = v > 0 ? String(v) : res ? "H" : "0";
        d.classList.toggle("on", v > 0 || !!res);
      });
      $("wrap").classList.toggle("pot-on", m.zones[0] > 0);
      $("wrap").classList.toggle("pot-boil", m.zones[0] >= 7);
      $("wrap").classList.toggle("pan-on", m.zones[3] > 0);
    }
    if (kind === "printer_3d") {
      const H = 38;
      let frac = m.progress != null ? Math.max(0, Math.min(1, m.progress / 100)) : null;
      if (m.status === "finished") frac = 1;
      if (m.progress == null && m.status !== "printing" && m.status !== "finished") frac = 0;
      const wrap = $("wrap");
      wrap.classList.toggle("indeterminate", frac == null);
      const h = (frac ?? 0) * H;
      wrap.style.setProperty("--h", h.toFixed(2));
      const clip = sr.querySelector(".objclip");
      clip.setAttribute("y", (104 - h).toFixed(2)); clip.setAttribute("height", h.toFixed(2));
      wrap.style.setProperty("--fil", c.filament_color || "#ff8a1f");
    }
    if (kind === "pool_pump") {
      const sp = num(m.speed), u = String(m.speed?.attributes.unit_of_measurement || "").toLowerCase();
      let spd = 1;
      if (sp != null) spd = u === "%" ? 0.3 + sp / 100 : sp / 2800;
      else if (m.watts != null && c.max_power) spd = m.watts / c.max_power;
      spd = Math.max(0.3, Math.min(1.6, spd));
      $("wrap").style.setProperty("--spd", spd.toFixed(2));
    }
    if (kind === "pellet_stove") {
      const fs = m.level != null ? Math.max(0.55, Math.min(1.2, 0.55 + 0.13 * m.level)) : 1;
      sr.querySelector(".fire").style.setProperty("--fs", fs.toFixed(2));
    }
    if (kind === "water_heater") {
      const t = m.tempVal;
      const ang = t == null ? -135 : -135 + Math.max(0, Math.min(1, (t - 10) / 70)) * 270;
      sr.querySelector(".needle").setAttribute("transform", `rotate(${ang.toFixed(1)} 60 76)`);
      sr.querySelector(".gauge-txt").textContent = t == null ? "--°" : `${Math.round(t)}°`;
    }

    // name + status
    const name = c.name || tr(hass, kind);
    let statusTxt = m.phase ? tr(hass, `ph_${m.phase}`) : tr(hass, m.status);
    if (m.main && ["sensor", "input_select", "select"].includes(domainOf(c.entity)) &&
        active && !["fridge", "water_heater", "printer_3d", "pool_pump"].includes(kind)) {
      const raw = String(m.main.state).toLowerCase();
      if (![...OFF_STATES, ...DONE_STATES, "on", "running", "run"].includes(raw)) statusTxt = stateText(hass, m.main);
    }
    if ((kind === "radiator" || kind === "towel_dryer") && m.radMode && m.radMode !== "off" && m.status !== "off" && m.status !== "unavailable") statusTxt += ` · ${tr(hass, m.radMode)}`;
    if (kind === "tv" && m.status === "screen_on" && m.main && domainOf(c.entity) === "media_player") {
      const a = m.main.attributes || {}, what = a.app_name || a.media_title || a.source;
      if (what) statusTxt += ` · ${what}`;
    }
    if (m.solarHeat && active) statusTxt += ` · ${tr(hass, "solar_surplus")}`;
    const prog = m.program && active && !BAD.includes(String(m.program.state).toLowerCase()) ? stateText(hass, m.program) : "";
    let sub = "";
    if (active && m.remaining != null && m.remaining > 0) {
      sub = `${tr(hass, "ends_at")} ${fmtClock(hass, new Date(Date.now() + m.remaining * 60000))}`;
    }
    const alertTxt = m.alerts.map((a) => tr(hass, a)).join(" · ");
    $("info").innerHTML = `
      <div class="name">${esc(name)}</div>
      <div class="status"><span class="dot"></span><span>${esc(statusTxt)}${prog && prog !== statusTxt ? ` · ${esc(prog)}` : ""}</span></div>
      ${alertTxt ? `<div class="alert-line"><ha-icon icon="mdi:alert-circle-outline"></ha-icon>${esc(alertTxt)}</div>` : ""}
      ${sub ? `<div class="sub">${esc(sub)}</div>` : ""}`;

    if (c.switch && c.show_toggle !== false) {
      const on = isOn(m.sw);
      // safety: cutting a washer/dryer/dishwasher mid-cycle needs a second click
      const freezer = ["chest_freezer", "drawer_freezer"].includes(kind);
      const guarded = c.confirm_off !== false && on && (freezer || ((active || ["extinguishing", "paused"].includes(m.status)) && ["washer", "dryer", "dishwasher", "pellet_stove", "printer_3d"].includes(kind)));
      const arming = guarded && this._confirmUntil && Date.now() < this._confirmUntil;
      const label = arming ? tr(hass, "confirm_off") : tr(hass, "toggle");
      $("actions").innerHTML = `<button class="toggle ${on ? "on" : ""} ${arming ? "confirm" : ""}" title="${esc(label)}" aria-label="${esc(label)}" aria-pressed="${on}"><ha-icon icon="${arming ? "mdi:alert" : "mdi:power"}"></ha-icon></button>${arming ? `<div class="confirm-tip">${esc(label)}</div>` : ""}`;
      $("actions").querySelector("button").onclick = (ev) => {
        ev.stopPropagation();
        if (guarded && !(this._confirmUntil && Date.now() < this._confirmUntil)) {
          this._confirmUntil = Date.now() + 4000;
          this._render(this._compute());
          clearTimeout(this._confirmTimer);
          this._confirmTimer = setTimeout(() => { this._confirmUntil = 0; if (this._hass) this._render(this._compute()); }, 4100);
          return;
        }
        this._confirmUntil = 0;
        clearTimeout(this._confirmTimer);
        const dom = domainOf(c.switch);
        hass.callService(["switch", "input_boolean", "light", "fan"].includes(dom) ? dom : "homeassistant", "toggle", { entity_id: c.switch });
      };
    } else $("actions").innerHTML = "";

    // progress bar
    let pct = null;
    if (active && m.progress != null) pct = m.progress;
    else if ((kind === "oven" && m.status === "preheating") || (kind === "water_heater" && m.status !== "off")) {
      if (m.tempVal != null && m.targetVal) {
        const floor = kind === "water_heater" ? 10 : 20;
        pct = ((m.tempVal - floor) / (m.targetVal - floor)) * 100;
      }
    }
    if (pct != null && Number.isFinite(pct)) {
      $("bar").style.display = "";
      $("barfill").style.width = `${Math.max(0, Math.min(100, pct))}%`;
    } else $("bar").style.display = "none";

    // boutons de mode (confort / éco / hors-gel / arrêt)
    const modesEl = $("modes");
    const mEnt = c.mode || (domainOf(c.entity) === "climate" ? c.entity : null);
    if ((kind === "radiator" || kind === "towel_dryer") && mEnt && c.show_modes !== false && hass.states[mEnt]) {
      const opts = modeOptions(hass.states[mEnt]);
      const cur = m.radMode ?? (m.status !== "off" ? "comfort" : "off");
      modesEl.innerHTML = MODE_ORDER.filter((k) => pickMode(opts, k)).map((k) =>
        `<button class="mode-btn ${cur === k ? "on" : ""}" data-mode="${k}" aria-pressed="${cur === k}"><ha-icon icon="${MODE_ICON[k]}"></ha-icon>${esc(tr(hass, k === "off" ? "mode_off" : k))}</button>`).join("");
      modesEl.querySelectorAll("button").forEach((b) => { b.onclick = (ev) => { ev.stopPropagation(); this._setMode(b.dataset.mode); }; });
    } else modesEl.innerHTML = "";

    // stats
    const tiles = [];
    const tile = (icon, value, label, entity, cls = "") => {
      if (value == null) return;
      tiles.push(`<div class="tile ${cls}" ${entity ? `data-entity="${esc(entity)}"` : ""}>
        <span class="val">${esc(value)}</span><span class="lbl"><ha-icon icon="${icon}"></ha-icon>${esc(label)}</span></div>`);
    };
    const tEntity = c.temperature || (["water_heater", "climate"].includes(domainOf(c.entity)) ? c.entity : null);
    if (kind === "chest_freezer" || kind === "drawer_freezer") {
      if (m.tempVal != null) tile("mdi:snowflake-thermometer", `${fmtNum(hass, m.tempVal, 1)} ${m.tempUnit}`, tr(hass, "temperature"), tEntity,
        m.alerts.includes("too_warm") ? "warn" : "");
    } else if (kind === "wine_cooler") {
      if (m.tempVal != null) tile("mdi:thermometer", `${fmtNum(hass, m.tempVal, 1)} ${m.tempUnit}`, tr(hass, "temperature"), tEntity, m.alerts.includes("too_warm") ? "warn" : "");
    } else if (kind === "fridge") {
      if (m.tempVal != null) tile("mdi:thermometer", `${fmtNum(hass, m.tempVal, 1)} ${m.tempUnit}`, tr(hass, "fridge_temp"), tEntity,
        m.tempVal > (c.max_temperature ?? 8) ? "warn" : "");
      if (m.ftemp) tile("mdi:snowflake", fmtUnit(hass, m.ftemp, 1), tr(hass, "freezer_temp"), c.freezer_temperature,
        num(m.ftemp) > (c.freezer_max_temperature ?? -12) ? "warn" : "");
    } else if (kind === "radiator") {
      const te = c.temperature || (domainOf(c.entity) === "climate" ? c.entity : null);
      if (m.tempVal != null) tile("mdi:home-thermometer", `${fmtNum(hass, m.tempVal, 1)} ${m.tempUnit}`, tr(hass, "temperature"), te);
      if (m.targetVal != null) tile("mdi:target", `${fmtNum(hass, m.targetVal, 1)} ${m.tempUnit}`, tr(hass, "target"), c.target_temperature || te);
    } else if (kind === "hob") {
      /* no extra tile */
    } else if (kind === "vmc") {
      if (m.humidity != null) tile("mdi:water-percent", `${fmtNum(hass, m.humidity, 0)} %`, tr(hass, "humidity"), c.humidity, m.alerts.includes("humid") ? "warn" : "");
    } else if (kind === "printer_3d") {
      if (m.progress != null) tile("mdi:progress-check", `${fmtNum(hass, m.progress, 0)} %`, tr(hass, "progress"), c.progress);
      if (m.tempVal != null) tile("mdi:printer-3d-nozzle-heat", `${fmtNum(hass, m.tempVal, 0)} ${m.tempUnit}`, tr(hass, "nozzle"), tEntity);
      if (m.bedTemp != null) tile("mdi:heat-wave", `${fmtNum(hass, m.bedTemp, 0)} ${m.tempUnit}`, tr(hass, "bed"), c.bed_temperature);
    } else if (kind === "pool_pump") {
      if (m.tempVal != null) tile("mdi:thermometer-water", `${fmtNum(hass, m.tempVal, 1)} ${m.tempUnit}`, tr(hass, "water"), tEntity);
      if (m.runtime != null) tile("mdi:timer-outline", fmtDuration(m.runtime), tr(hass, "today"), c.runtime);
      if (num(m.speed) != null) tile("mdi:speedometer", fmtUnit(hass, m.speed, 0), tr(hass, "speed"), c.speed);
    } else if (kind === "pellet_stove") {
      if (m.tempVal != null) tile("mdi:thermometer", `${fmtNum(hass, m.tempVal, 1)} ${m.tempUnit}`, tr(hass, "temperature"), tEntity);
      if (m.targetVal != null) tile("mdi:target", `${fmtNum(hass, m.targetVal, 1)} ${m.tempUnit}`, tr(hass, "target"), c.target_temperature || tEntity);
      if (m.level != null) tile("mdi:fire", `P${fmtNum(hass, m.level, 0)}`, tr(hass, "level"), c.power_level);
      if (m.pellets != null) tile("mdi:grain", `${fmtNum(hass, m.pellets, 0)} %`, tr(hass, "pellets"), c.pellet_level, m.alerts.includes("pellets_low") ? "warn" : "");
    } else if (["water_heater", "oven", "air_fryer", "ac_split", "heat_pump", "towel_dryer", "server_rack"].includes(kind)) {
      if (m.tempVal != null) tile("mdi:thermometer", `${fmtNum(hass, m.tempVal, 0)} ${m.tempUnit}`, tr(hass, "temperature"), tEntity);
      if (m.targetVal != null) tile("mdi:target", `${fmtNum(hass, m.targetVal, 0)} ${m.tempUnit}`, tr(hass, "target"), c.target_temperature || tEntity);
    }
    if (m.remaining != null && m.remaining > 0 && active && kind !== "water_heater") tile("mdi:timer-sand", fmtDuration(m.remaining), tr(hass, "remaining"), c.remaining);
    const solar = kind === "solar";
    const dual = kind === "water_heater" && (m.pwS || m.energyS);
    if (m.pw) tile(solar ? "mdi:solar-power" : "mdi:flash", fmtPower(hass, m.pw) ?? "—", tr(hass, solar ? "production" : dual ? "grid" : "power"), c.power);
    if (m.pwS) tile("mdi:solar-power", fmtPower(hass, m.pwS) ?? "—", tr(hass, "solar_surplus"), c.power_solar);
    if (m.energy) tile("mdi:lightning-bolt-circle", fmtUnit(hass, m.energy, 2) ?? "—", tr(hass, solar ? "today" : dual ? "energy_grid" : "energy"), c.energy);
    if (m.energyS) tile("mdi:solar-power-variant", fmtUnit(hass, m.energyS, 2) ?? "—", tr(hass, "energy_solar"), c.energy_solar);
    if (m.cost) tile(solar ? "mdi:piggy-bank-outline" : "mdi:cash", fmtUnit(hass, m.cost, 2, 2) ?? "—", tr(hass, solar ? "savings" : "cost"), c.cost);
    if (solar && m.status !== "night" && m.frac != null && m.pw && !BAD.includes(String(m.pw.state).toLowerCase())) tile("mdi:white-balance-sunny", `${Math.round(m.frac * 100)} %`, tr(hass, "of_peak"), c.power);
    $("stats").innerHTML = tiles.join("");
    $("stats").style.display = tiles.length ? "" : "none";
  }
}

/* ------------------------------------------------------------------ */
/* Visual editor schema                                                */
/* ------------------------------------------------------------------ */
const SEL = {
  entity: { entity: {} },
  power: { entity: { domain: "sensor", device_class: "power" } },
  energy: { entity: { domain: "sensor", device_class: "energy" } },
  power_solar: { entity: { domain: "sensor", device_class: "power" } },
  energy_solar: { entity: { domain: "sensor", device_class: "energy" } },
  cost: { entity: { domain: ["sensor", "input_number"] } },
  remaining: { entity: { domain: "sensor" } },
  progress: { entity: { domain: "sensor" } },
  program: { entity: { domain: ["sensor", "select", "input_select"] } },
  door: { entity: { domain: "binary_sensor" } },
  freezer_door: { entity: { domain: "binary_sensor" } },
  switch: { entity: { domain: ["switch", "input_boolean", "light"] } },
  temperature: { entity: { domain: ["sensor", "input_number"], device_class: "temperature" } },
  target_temperature: { entity: { domain: ["sensor", "input_number", "number"] } },
  freezer_temperature: { entity: { domain: "sensor", device_class: "temperature" } },
  power_level: { entity: { domain: ["sensor", "number", "input_number", "select", "input_select"] } },
  pellet_level: { entity: { domain: ["sensor", "number", "input_number"] } },
  runtime: { entity: { domain: ["sensor"] } },
  light: { entity: { domain: ["light", "switch", "binary_sensor", "input_boolean"] } },
  bed_temperature: { entity: { domain: ["sensor"], device_class: "temperature" } },
  humidity: { entity: { domain: ["sensor"], device_class: "humidity" } },
  mode: { entity: { domain: ["select", "input_select", "sensor", "climate"] } },
  window: { entity: { domain: "binary_sensor" } },
  zone_1: { entity: { domain: ["sensor", "number", "select", "input_number"] } },
  zone_2: { entity: { domain: ["sensor", "number", "select", "input_number"] } },
  zone_3: { entity: { domain: ["sensor", "number", "select", "input_number"] } },
  zone_4: { entity: { domain: ["sensor", "number", "select", "input_number"] } },
  speed: { entity: { domain: ["sensor", "number", "input_number", "select"] } },
};
function buildForm(kind) {
  const d = DEF[kind];
  return {
    schema: [
      { name: "name", selector: { text: {} } },
      ...d.fields.map((f) => ({ name: f, selector: SEL[f] })),
      {
        type: "expandable", name: "", title: "Options", flatten: true, schema: [
          { name: "threshold", selector: { number: { min: 0, max: 3000, step: 1, mode: "box", unit_of_measurement: "W" } } },
          ...(["chest_freezer", "drawer_freezer"].includes(kind) ? [
            { name: "freezer_max_temperature", selector: { number: { min: -30, max: 0, step: 0.5, mode: "box" } } },
          ] : []),
          ...(kind === "wine_cooler" ? [
            { name: "max_temperature", selector: { number: { min: 5, max: 25, step: 0.5, mode: "box" } } },
          ] : []),
          ...(kind === "fridge" ? [
            { name: "max_temperature", selector: { number: { min: 0, max: 15, step: 0.5, mode: "box" } } },
            { name: "freezer_max_temperature", selector: { number: { min: -30, max: 0, step: 0.5, mode: "box" } } },
          ] : []),
          { name: "animations", selector: { boolean: {} }, default: true },
          ...(kind === "printer_3d" ? [{ name: "filament_color", selector: { text: {} } }] : []),
          ...(["ac_split", "heat_pump"].includes(kind) ? [
            { name: "hvac", selector: { select: { mode: "dropdown", options: [
              { value: "auto", label: "Auto (saison) / Auto (season)" }, { value: "cool", label: "Climatisation / Cooling" }, { value: "heat", label: "Chauffage / Heating" }] } } },
          ] : []),
          ...(kind === "range_hood" ? [
            { name: "high_threshold", selector: { number: { min: 40, max: 600, step: 5, mode: "box", unit_of_measurement: "W" } } },
          ] : []),
          ...(kind === "coffee_maker" ? [
            { name: "style", selector: { select: { mode: "dropdown", options: [
              { value: "filtre", label: "Filtre / Drip" }, { value: "dosette", label: "Dosettes / Pods" }, { value: "expresso", label: "Expresso / Bean-to-cup" }] } } },
            { name: "warm_threshold", selector: { number: { min: 0, max: 300, step: 1, mode: "box", unit_of_measurement: "W" } } },
          ] : []),
          ...(["radiator", "towel_dryer"].includes(kind) ? [{ name: "show_modes", selector: { boolean: {} }, default: true }] : []),
          ...(kind === "server_rack" ? [
            { name: "max_power", selector: { number: { min: 50, max: 3000, step: 10, mode: "box", unit_of_measurement: "W" } } },
          ] : []),
          ...(kind === "radiator" ? [
            { name: "max_power", selector: { number: { min: 100, max: 5000, step: 50, mode: "box", unit_of_measurement: "W" } } },
          ] : []),
          ...(kind === "hob" ? [
            { name: "zone_power", selector: { number: { min: 500, max: 4000, step: 50, mode: "box", unit_of_measurement: "W" } } },
            { name: "residual_minutes", selector: { number: { min: 0, max: 60, step: 1, mode: "box", unit_of_measurement: "min" } } },
          ] : []),
          ...(kind === "vmc" ? [
            { name: "high_threshold", selector: { number: { min: 5, max: 300, step: 1, mode: "box", unit_of_measurement: "W" } } },
            { name: "humidity_max", selector: { number: { min: 40, max: 100, step: 1, mode: "box", unit_of_measurement: "%" } } },
          ] : []),
          ...(kind === "solar" ? [
            { name: "max_power", selector: { number: { min: 100, max: 50000, step: 50, mode: "box", unit_of_measurement: "Wc" } } },
            { name: "sun_entity", selector: { entity: { domain: "sun" } } },
          ] : []),
          ...(kind === "pool_pump" ? [
            { name: "max_power", selector: { number: { min: 100, max: 3000, step: 10, mode: "box", unit_of_measurement: "W" } } },
          ] : []),
          ...(kind === "pellet_stove" ? [
            { name: "ignition_threshold", selector: { number: { min: 50, max: 1000, step: 10, mode: "box", unit_of_measurement: "W" } } },
            { name: "pellet_alert", selector: { number: { min: 0, max: 50, step: 1, mode: "box", unit_of_measurement: "%" } } },
          ] : []),
          ...(["washer", "dryer", "dishwasher", "pellet_stove", "printer_3d", "chest_freezer", "drawer_freezer"].includes(kind) ? [{ name: "confirm_off", selector: { boolean: {} }, default: true }] : []),
          { name: "color", selector: { text: {} } },
        ],
      },
    ],
    computeLabel: (s) => (s.name ? tr(null, kind === "solar" && s.name === "max_power" ? "f_max_power_solar" : kind === "wine_cooler" && s.name === "max_temperature" ? "f_max_temperature_wine" : kind === "server_rack" && s.name === "max_power" ? "f_max_power_rack" : kind === "radiator" && s.name === "max_power" ? "f_max_power_rad" : `f_${s.name}`) : undefined),
  };
}

/* ------------------------------------------------------------------ */
/* Stub config: auto-detect entities by name                           */
/* ------------------------------------------------------------------ */
function stubFor(kind, hass) {
  const keys = DEF[kind].keys;
  const ids = Object.keys(hass?.states || {});
  const match = (i) => keys.some((k) => i.split(".")[1].includes(k));
  const pick = (pred) => ids.find((i) => match(i) && pred(i, hass.states[i]));
  const dc = (st) => st.attributes.device_class;
  const cfg = {};
  const power = pick((i, st) => i.startsWith("sensor.") && dc(st) === "power");
  const energy = pick((i, st) => i.startsWith("sensor.") && dc(st) === "energy" && /(daily|jour|today|day)/.test(i))
    || pick((i, st) => i.startsWith("sensor.") && dc(st) === "energy");
  const cost = pick((i) => i.startsWith("sensor.") && /(cout|cost|prix)/.test(i) && /(jour|daily|today|day)/.test(i))
    || pick((i, st) => i.startsWith("sensor.") && dc(st) === "monetary");
  const sw = pick((i) => i.startsWith("switch.") && !/(child_lock|lock|led|indicator)/.test(i));
  const wh = kind === "water_heater" ? pick((i) => i.startsWith("water_heater.")) : kind === "tv" ? pick((i) => i.startsWith("media_player.")) : ["ac_split", "heat_pump"].includes(kind) ? pick((i) => i.startsWith("climate.")) : null;
  const temp = pick((i, st) => i.startsWith("sensor.") && dc(st) === "temperature");
  const flag = ["washer", "dryer", "dishwasher", "microwave"].includes(kind)
    ? pick((i) => /^(input_boolean|binary_sensor)\./.test(i) && /(running|en_cours|marche|cycle)/.test(i)) : null;
  if (wh) cfg.entity = wh;
  if (flag) cfg.entity = flag;
  if (power) cfg.power = power;
  if (energy) cfg.energy = energy;
  if (cost) cfg.cost = cost;
  if (sw && ["water_heater", "oven", "microwave", "pool_pump", "air_fryer", "coffee_maker", "tv", "range_hood", "ac_split", "heat_pump", "towel_dryer", "server_rack", "desktop_pc", "laptop", "wine_cooler"].includes(kind)) cfg.switch = sw;
  else if (sw && !cfg.entity) cfg.entity = sw;
  const clim = kind === "radiator" ? pick((i) => i.startsWith("climate.")) : null;
  if (clim) cfg.entity = clim;
  if (temp && ["fridge", "water_heater", "oven", "air_fryer", "pellet_stove", "pool_pump", "printer_3d", "chest_freezer", "drawer_freezer", "radiator", "towel_dryer", "server_rack", "wine_cooler"].includes(kind)) cfg.temperature = temp;
  if (!cfg.entity && !cfg.power && !cfg.switch && !cfg.temperature) cfg.power = "sensor.example_power";
  return cfg;
}

/* ------------------------------------------------------------------ */
/* Styles                                                              */
/* ------------------------------------------------------------------ */
const STYLE = `
:host {
  --ac-active: var(--appliance-active-color, var(--state-active-color, var(--primary-color)));
  --ac-heat: var(--appliance-heat-color, var(--state-climate-heat-color, #ff8a3d));
  --ac-cold: var(--appliance-cold-color, var(--state-climate-cool-color, #2b9af9));
  --ac-alert: var(--appliance-alert-color, var(--error-color, #db4437));
  --ac-ok: var(--appliance-ok-color, var(--success-color, #43a047));
  --ac-lcd: #38d9ff;
  display: block;
}
ha-card { display: block; height: 100%; cursor: pointer; overflow: hidden; container-type: inline-size; }
.wrap { padding: 14px; display: flex; flex-direction: column; gap: 12px; --c: var(--ac-accent, var(--ac-active)); }
.wrap.accent-heat { --c: var(--ac-accent, var(--ac-heat)); }
.wrap.accent-cold { --c: var(--ac-accent, var(--ac-cold)); }
.top {
  display: grid; grid-template-columns: auto minmax(0, 1fr); grid-template-areas: "illus head" "illus stats";
  column-gap: 14px; row-gap: 10px; align-items: start; min-width: 0;
}
.illus { grid-area: illus; } .head { grid-area: head; } .stats { grid-area: stats; }
.illus {
  width: var(--appliance-illustration-size, 116px); flex: none; aspect-ratio: 120 / 140; border-radius: 16px; padding: 4px; box-sizing: content-box;
  background: radial-gradient(circle at 50% 40%, rgba(127,127,127,.10), rgba(127,127,127,.03) 70%);
}
.st-unavailable .illus { opacity: .5; filter: grayscale(1); }
svg { width: 100%; height: 100%; display: block; overflow: visible; }
.head { display: flex; gap: 8px; align-items: flex-start; min-width: 0; }
.info { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 3px; }
.name { font-size: 16px; font-weight: 600; color: var(--primary-text-color); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.status { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--secondary-text-color); min-width: 0; }
.status span:last-child { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.dot { width: 8px; height: 8px; border-radius: 50%; flex: none; background: var(--disabled-text-color, #9e9e9e); }
.active .dot { background: var(--c); box-shadow: 0 0 0 3px rgba(127,127,127,.2); box-shadow: 0 0 0 3px color-mix(in srgb, var(--c) 25%, transparent); }
.active .status { color: var(--primary-text-color); }
.st-finished .dot { background: var(--ac-ok); }
.alert-line { display: flex; align-items: center; gap: 4px; font-size: 12px; font-weight: 600; color: var(--ac-alert); }
.alert-line ha-icon { --mdc-icon-size: 16px; }
.sub { font-size: 12px; color: var(--secondary-text-color); }
.actions:empty { display: none; }
.toggle {
  width: 38px; height: 38px; border-radius: 50%; border: none; cursor: pointer; display: grid; place-items: center; flex: none;
  color: var(--secondary-text-color); background: rgba(127,127,127,.14); transition: background .2s, color .2s;
}
.toggle.on { color: var(--text-primary-color, #fff); background: var(--c); }
.toggle.confirm { color: #fff; background: var(--ac-alert); animation: ac-pulse 1s ease-in-out infinite; }
.actions { position: relative; }
.confirm-tip {
  position: absolute; right: 0; top: 44px; z-index: 2; width: 170px; padding: 6px 8px; border-radius: 8px;
  font-size: 11.5px; line-height: 1.3; color: #fff; background: var(--ac-alert); box-shadow: 0 4px 14px rgba(0,0,0,.3);
}
.toggle:focus-visible { outline: 2px solid var(--c); outline-offset: 2px; }
.toggle ha-icon { --mdc-icon-size: 20px; }
.bar { height: 6px; border-radius: 3px; overflow: hidden; background: rgba(127,127,127,.18); }
.bar-fill { height: 100%; width: 0; border-radius: 3px; background: var(--c); transition: width .6s ease; }
.stats { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px; }
.tile { display: flex; flex-direction: column; padding: 6px 9px; border-radius: 10px; min-width: 0; background: rgba(127,127,127,.09); }
.tile:hover { background: rgba(127,127,127,.16); }
.val { font-size: 14px; font-weight: 600; color: var(--primary-text-color); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.lbl { display: flex; align-items: center; gap: 3px; font-size: 11px; color: var(--secondary-text-color); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.lbl ha-icon { --mdc-icon-size: 13px; flex: none; }
.tile.warn .val, .tile.warn .lbl { color: var(--ac-alert); }
@container (max-width: 400px) {
  .top { grid-template-areas: "illus head" "stats stats"; }
  .illus { width: var(--appliance-illustration-size-small, 84px); }
  .stats { grid-template-columns: repeat(auto-fit, minmax(88px, 1fr)); }
}

/* ---------- illustration: shared ---------- */
.lcd { font: 700 7.2px "Courier New", ui-monospace, monospace; letter-spacing: .4px; fill: #24404f; transition: fill .3s; }
.active .lcd { fill: var(--ac-lcd); }
.st-finished .lcd { fill: #3ddc84; }
.k-oven .lcd, .k-microwave .lcd { fill: #6fd8ff; }
.warm .fr-temp { fill: var(--ac-alert); }
.led { fill: #5a636d; transition: fill .3s; }
.ph-wash .l1, .ph-dry .l1, .k-dishwasher.active .l1, .k-oven.active .l1,
.ph-rinse .l2, .ph-cool .l2, .ph-spin .l3 { fill: var(--ac-lcd); }
.st-finished .l4 { fill: #3ddc84; }
.knob, .drum, .clothes, .bowl, .arm, .needle, .fz-door, .fr-door, .flake { transform-box: view-box; }
.knob { transition: transform .6s; }
.k-washer .knob, .k-dryer .knob { transform-origin: 93px 21px; }
.k-dryer .knob { transform-origin: 27px 21px; }
.k-oven .knob { transform-origin: 24px 21px; }
.k-microwave .knob { transform-origin: 100.5px 88px; }
.active .knob { transform: rotate(120deg); }
.ph-rinse .knob { transform: rotate(170deg); }
.ph-spin .knob { transform: rotate(220deg); }

/* ---------- washer / dryer ---------- */
.drum { transform-origin: 60px 80px; }
.water { opacity: 0; transition: opacity .8s; }
.water path { fill: #3f9fe0; opacity: .5; }
.ph-rinse .water path { fill: #8fd4ff; opacity: .45; }
.ph-wash .water, .ph-rinse .water { opacity: 1; }
.wave { animation: ac-wave 2.4s linear infinite; animation-play-state: paused; }
.ph-wash .wave, .ph-rinse .wave { animation-play-state: running; }
.ph-rinse .wave { animation-duration: 3.2s; }
.foam circle { fill: #fff; opacity: 0; }
.ph-wash .foam circle { animation: ac-bubble 2.6s ease-in infinite; }
.ph-wash .foam circle:nth-child(2) { animation-delay: .5s; } .ph-wash .foam circle:nth-child(3) { animation-delay: 1s; }
.ph-wash .foam circle:nth-child(4) { animation-delay: 1.5s; } .ph-wash .foam circle:nth-child(5) { animation-delay: .8s; }
.ph-wash .foam circle:nth-child(6) { animation-delay: 1.9s; }
.ph-wash .drum { animation: ac-tumble 3.4s ease-in-out infinite; }
.ph-rinse .drum { animation: ac-tumble 4.6s ease-in-out infinite; }
.ph-spin .drum { animation: ac-rot .32s linear infinite; }
.ph-spin .clothes { opacity: .85; }
.ph-spin .shake { animation: ac-shake .14s linear infinite; }
.k-dryer.ph-dry .drum, .k-dryer.ph-cool .drum { animation: ac-rot 2.8s linear infinite; }
.k-dryer.ph-dry .shake-soft { animation: ac-shake-soft .5s linear infinite; }
.heat { opacity: 0; transition: opacity .8s; }
.k-dryer.ph-dry .heat { opacity: 1; animation: ac-glow 2.2s ease-in-out infinite; }

/* ---------- dishwasher ---------- */
.floorlight { fill: #ff3b30; opacity: 0; transition: opacity .6s; filter: blur(1.5px); }
.k-dishwasher.active .floorlight { opacity: .85; }
.wash-light { opacity: 0; transition: opacity .6s; }
.k-dishwasher.active .wash-light { opacity: 1; }
.arm { transform-origin: 60px 0; transform-box: fill-box; }
.k-dishwasher.ph-wash .arm, .k-dishwasher.ph-rinse .arm { animation: ac-arm 1.2s linear infinite; }
.k-dishwasher .arm-top { animation-delay: -.4s !important; }
.jets path { stroke: #bfe8ff; stroke-width: 1; stroke-dasharray: 2 4; opacity: 0; fill: none; }
.k-dishwasher.ph-wash .jets path, .k-dishwasher.ph-rinse .jets path { opacity: .85; animation: ac-jet .5s linear infinite; }
.drops circle { fill: #bfe8ff; opacity: 0; }
.k-dishwasher.ph-wash .drops circle, .k-dishwasher.ph-rinse .drops circle { animation: ac-fall 1.1s ease-in infinite; }
.drops circle:nth-child(2) { animation-delay: .3s !important; } .drops circle:nth-child(3) { animation-delay: .6s !important; }
.drops circle:nth-child(4) { animation-delay: .85s !important; }
.steam-in path { fill: none; stroke: #fff; stroke-width: 2.4; stroke-linecap: round; opacity: 0; }
.k-dishwasher.ph-dry .steam-in path, .k-microwave.active .steam-in path { animation: ac-steam 2.6s ease-out infinite; }
.steam-in path:nth-child(2) { animation-delay: .8s !important; } .steam-in path:nth-child(3) { animation-delay: 1.6s !important; }

/* ---------- water heater ---------- */
.needle { transition: transform 1s ease; }
.gauge-txt { font: 700 5px system-ui, sans-serif; fill: #4b545e; }
.hw-led { fill: #9aa2ab; transition: fill .3s; }
.k-water_heater.st-ready .hw-led { fill: #3ddc84; }
.k-water_heater.st-heating .hw-led { fill: #ff8a3d; animation: ac-pulse 1.4s ease-in-out infinite; }
.hw-waves path { fill: none; stroke: var(--ac-heat); stroke-width: 2; stroke-linecap: round; opacity: 0; }
.k-water_heater.st-heating .hw-waves path { animation: ac-steam 2s ease-out infinite; }
.hw-waves path:nth-child(2) { animation-delay: .6s !important; } .hw-waves path:nth-child(3) { animation-delay: 1.2s !important; }

/* ---------- oven / microwave ---------- */
.ilight { opacity: 0; transition: opacity .8s; }
.active .ilight { opacity: .95; }
.element { fill: none; stroke: #5b3d33; stroke-width: 1.6; stroke-linejoin: round; transition: stroke .6s; }
.k-oven.active .element { stroke: #ff5a1f; filter: drop-shadow(0 0 2px #ff7a2e); animation: ac-pulse 1.8s ease-in-out infinite; }
.haze path { fill: none; stroke: #ffd9a8; stroke-width: 1.2; stroke-linecap: round; opacity: 0; }
.k-oven.active .haze path { animation: ac-steam 2.4s ease-out infinite; }
.haze path:nth-child(1) { animation-delay: .4s !important; }
.bowl { transform-origin: 46px 86px; }
.k-microwave.active .bowl { animation: ac-turn 5s linear infinite; }
.start { fill: #c9ced4; stroke: #8f979f; stroke-width: .4; transition: fill .3s; }
.k-microwave.active .start { fill: #3ddc84; }

/* ---------- radiator ---------- */
.k-radiator { --heat: 0; }
.rglow { opacity: 0; transition: opacity 1.2s; }
.k-radiator.st-heating .rglow { opacity: calc(var(--heat) * .55); animation: ac-hob 3s ease-in-out infinite; --lvl: calc(var(--heat) * .55); }
.rwaves path { fill: none; stroke: var(--ac-heat); stroke-width: 1.8; stroke-linecap: round; opacity: 0; }
.k-radiator.st-heating .rwaves path { animation: ac-steam calc(2.6s - var(--heat) * 1.2s) ease-out infinite; }
.rwaves path:nth-child(2) { animation-delay: .5s !important; } .rwaves path:nth-child(3) { animation-delay: 1s !important; } .rwaves path:nth-child(4) { animation-delay: 1.5s !important; }
.micon { fill: #c3c9cf; stroke: #c3c9cf; transition: fill .4s, stroke .4s; }
.micon.m-comfort circle { stroke: none; }
.mode-comfort .m-comfort { fill: #ffb400; stroke: #ffb400; }
.mode-eco .m-eco { fill: #5b7bd5; stroke: #5b7bd5; }
.mode-frost .m-frost { fill: #2b9af9; stroke: #2b9af9; }
.k-radiator .lcd { fill: #ff9a4a; }
.k-radiator.st-off .lcd, .k-radiator.mode-frost .lcd { fill: #6fd8ff; }
.k-radiator.st-heating .l1 { fill: #ff8a3d; } .k-radiator.st-standby .l1 { fill: #3ddc84; }
.cold-air path { fill: none; stroke: #6fbfff; stroke-width: 1.8; stroke-linecap: round; opacity: 0; }
.win-open .cold-air path { animation: ac-wind 1.8s ease-in-out infinite; }
.cold-air path:nth-child(2) { animation-delay: -.6s !important; } .cold-air path:nth-child(3) { animation-delay: -1.2s !important; }
@keyframes ac-wind { 0% { opacity: 0; transform: translateX(-6px); } 40% { opacity: .9; } 100% { opacity: 0; transform: translateX(14px); } }

/* ---------- cooktop ---------- */
.zone { --lvl: 0; }
.k-hob.st-residual .dot { background: var(--ac-heat); opacity: .6; }
.zglow { opacity: var(--lvl); transition: opacity .8s; }
.zone.on .zglow { animation: ac-hob 2.2s ease-in-out infinite; }
.coil { opacity: 0; transition: opacity .8s; }
.zone.on .coil { opacity: calc(var(--lvl) * .9); }
.zone.res .coil { opacity: .12; }
.zd { font: 700 5.5px "Courier New", ui-monospace, monospace; fill: #4a1d14; }
.zd.on { fill: #ff4a1f; filter: drop-shadow(0 0 1px #ff5a1f); }
.steam-pot path { fill: none; stroke: #ffffff; stroke-width: 2.2; stroke-linecap: round; opacity: 0; }
.pot-on .steam-pot path { animation: ac-steam 2.6s ease-out infinite; }
.pot-boil .steam-pot path { animation-duration: 1.4s; }
.steam-pot path:nth-child(2) { animation-delay: .8s !important; } .steam-pot path:nth-child(3) { animation-delay: 1.6s !important; }
.lid { transform-box: view-box; transform-origin: 40px 80px; }
.pot-boil .lid { animation: ac-lid .35s steps(2) infinite; }
.sizzle path { fill: none; stroke: #f2c94c; stroke-width: .8; stroke-linecap: round; opacity: 0; }
.pan-on .sizzle path { animation: ac-pulse .5s steps(2) infinite; }
.sizzle path:nth-child(2n) { animation-delay: -.25s !important; }
@keyframes ac-hob { 0%, 100% { opacity: var(--lvl); } 50% { opacity: calc(var(--lvl) * .78); } }
@keyframes ac-lid { 0% { transform: translateY(0) rotate(0); } 100% { transform: translateY(-.8px) rotate(-1.5deg); } }

/* ---------- VMC (bathroom extractor fan) ---------- */
.k-vmc .illus { padding: 0; overflow: hidden; }
.fanv { transform-box: view-box; transform-origin: 60px 70px; }
.k-vmc.st-speed1 .fanv { animation: ac-rot 1.1s linear infinite; }
.k-vmc.st-speed2 .fanv { animation: ac-rot .28s linear infinite; }
.intake path { fill: none; stroke: #8fb6d8; stroke-width: 1.5; stroke-linecap: round; opacity: 0; transform-box: view-box; transform-origin: 60px 70px; }
.k-vmc.st-speed1 .intake path { animation: ac-suck 2.4s ease-in infinite; }
.k-vmc.st-speed2 .intake path { animation: ac-suck 1s ease-in infinite; }
.intake path:nth-child(2) { animation-delay: -.5s !important; } .intake path:nth-child(3) { animation-delay: -1s !important; }
.intake path:nth-child(4) { animation-delay: -1.5s !important; } .intake path:nth-child(5) { animation-delay: -2s !important; }
.k-vmc.st-speed2 .intake path:nth-child(n) { animation-delay: calc(var(--i, 0) * -.2s); }
.steam path { fill: none; stroke: #ffffff; stroke-width: 3; stroke-linecap: round; opacity: 0; }
.humid .steam path { animation: ac-steam 2.8s ease-out infinite; }
.steam path:nth-child(2) { animation-delay: .9s !important; } .steam path:nth-child(3) { animation-delay: 1.8s !important; }
.condensation path { fill: #9fd6ff; opacity: 0; transition: opacity 1s; }
.humid .condensation path { opacity: .9; animation: ac-drip 3s ease-in infinite; }
.condensation path:nth-child(2n) { animation-delay: -1.4s !important; } .condensation path:nth-child(3n) { animation-delay: -2.1s !important; }
@keyframes ac-suck { 0% { opacity: 0; transform: scale(1.25); } 30% { opacity: .85; } 100% { opacity: 0; transform: scale(.45); } }
@keyframes ac-drip { 0%, 60% { transform: translateY(0); } 100% { transform: translateY(5px); opacity: .2; } }

/* ---------- solar ---------- */
.k-solar { --sun: 0; }
.sunwrap { transform-box: view-box; transform-origin: 98px 20px; transform: scale(calc(.7 + var(--sun) * .45)); transition: transform 1s, opacity 1s, filter 1s; }
.k-solar:not(.st-producing):not(.st-low) .sunwrap { filter: grayscale(1) brightness(.85); opacity: .45; transform: scale(.75); }
.k-solar:not(.st-producing):not(.st-low) .sunwrap > circle:first-child { opacity: 0; }
.rays { transform-box: view-box; transform-origin: 98px 20px; }
.k-solar.st-producing .rays { animation: ac-rot 18s linear infinite; }
.k-solar.st-low .rays { animation: ac-rot 40s linear infinite; }
.panshade { opacity: 0; transition: opacity 1s; }
.k-solar:not(.st-producing):not(.st-low) .panshade { opacity: .35; }
.sweep { transform-box: view-box; opacity: 0; }
.k-solar.st-producing .sweep { opacity: 1; animation: ac-sweep 3.2s ease-in-out infinite; }
.panglow { opacity: 0; transition: opacity 1s; }
.k-solar.st-producing .panglow { opacity: calc(var(--sun) * .22); }
.sflow { fill: none; stroke: #ffd23f; stroke-width: 1.6; stroke-linecap: round; stroke-dasharray: 2 3; opacity: 0; }
.k-solar.st-producing .sflow, .k-solar.st-low .sflow { opacity: 1; animation: ac-flow calc(1.4s / (var(--sun) + .35)) linear infinite; }
.k-solar.st-producing .l1, .k-solar.st-low .l1 { fill: #3ddc84; }
.k-solar .lcd { font-size: 5.4px; }
.k-solar:not(.st-producing):not(.st-low) .lcd { fill: #24404f; }
@keyframes ac-sweep { 0% { transform: skewX(-18deg) translateX(0); } 60%, 100% { transform: skewX(-18deg) translateX(130px); } }

/* ---------- freezers ---------- */
.k-chest_freezer .flake, .k-drawer_freezer .flake { transform-box: view-box; }
.k-chest_freezer .flake { transform-origin: 72px 84.5px; }
.k-drawer_freezer .flake { transform-origin: 39.5px 18px; }
.k-chest_freezer .lcd, .k-drawer_freezer .lcd { fill: #6fd8ff; }
.warm.k-chest_freezer .lcd, .warm.k-drawer_freezer .lcd { fill: var(--ac-alert); }
.k-chest_freezer.st-cooling .l1, .k-drawer_freezer.st-cooling .l1 { fill: #3ddc84; }
.warm.k-chest_freezer .l2, .warm.k-drawer_freezer .l2 { fill: var(--ac-alert); }
.lid path { transition: d .9s cubic-bezier(.3,.7,.3,1), fill .4s; }
.lid-top { d: path("M8 66L100 66L112 54L20 54Z"); }
.lid-front { d: path("M8 66L100 66L100 73L8 73Z"); }
.lid-side { d: path("M100 66L112 54L112 61L100 73Z"); }
.lid-under { d: path("M20 54L112 54L112 54L20 54Z"); opacity: 0; transition: d .9s cubic-bezier(.3,.7,.3,1), opacity .3s; }
.door-open .lid-top { d: path("M22 61L110 61L110 61L22 61Z"); }
.door-open .lid-front { d: path("M16 6L108 6L108 1L16 1Z"); }
.door-open .lid-side { d: path("M110 61L108 6L114 3L116 58Z"); }
.door-open .lid-under { d: path("M22 61L110 61L108 6L16 6Z"); opacity: 1; }
.lid-handle { transition: opacity .3s; }
.door-open .lid-handle { opacity: 0; }
.cavity { opacity: 0; transition: opacity .5s .2s; }
.door-open .cavity { opacity: 1; }
.clight { opacity: 0; }
.door-open .clight { opacity: .3; }
.cold-out circle, .drawer-mist circle { fill: #dff3ff; opacity: 0; }
.door-open .cold-out circle, .door-open .drawer-mist circle { animation: ac-steam 2.6s ease-out infinite; }
.cold-out circle:nth-child(2), .drawer-mist circle:nth-child(2) { animation-delay: .7s !important; }
.cold-out circle:nth-child(3), .drawer-mist circle:nth-child(3) { animation-delay: 1.4s !important; }
.cold-out circle:nth-child(4) { animation-delay: 2s !important; }
.dz-door { transform-box: view-box; transform-origin: 26px 0; transition: transform .6s cubic-bezier(.3,.7,.3,1); }
.door-open .dz-door { transform: scaleX(.16) skewY(-6deg); }
.drawer { transform-box: view-box; transform-origin: 60px 56px; transition: transform .6s ease; }
.door-open .pull { transform: translateY(3px) scale(1.09); transition-delay: .35s; filter: drop-shadow(0 3px 3px rgba(0,0,0,.25)); }

/* ---------- 3D printer ---------- */
.k-printer_3d { --fil: #ff8a1f; --h: 0; }
.k-printer_3d .gantry { transform-box: view-box; transform: translateY(calc(var(--h) * -1px)); transition: transform .8s ease; }
.k-printer_3d .head { transform-box: view-box; }
.k-printer_3d.st-printing .head { animation: ac-printx 1.1s ease-in-out infinite alternate; }
.k-printer_3d.st-printing .hfan, .k-printer_3d.st-heating .hfan { transform-box: view-box; transform-origin: 60px 90px; animation: ac-rot .25s linear infinite; }
.spool { transform-box: view-box; transform-origin: 97px 20px; }
.k-printer_3d.st-printing .spool { animation: ac-rot 9s linear infinite; }
.tip { fill: #8a6d1f; transition: fill .4s; }
.k-printer_3d.st-printing .tip { fill: #ffd27a; filter: drop-shadow(0 0 1.5px #ffb347); }
.k-printer_3d.st-heating .tip { fill: #ff4a1f; filter: drop-shadow(0 0 2px #ff5a1f); animation: ac-pulse 1s ease-in-out infinite; }
.bedheat path { fill: none; stroke: var(--ac-heat); stroke-width: 1.4; stroke-linecap: round; opacity: 0; }
.k-printer_3d.st-heating .bedheat path { animation: ac-steam 1.8s ease-out infinite; }
.bedheat path:nth-child(2) { animation-delay: .45s !important; } .bedheat path:nth-child(3) { animation-delay: .9s !important; } .bedheat path:nth-child(4) { animation-delay: 1.35s !important; }
.k-printer_3d.indeterminate.st-printing .gantry { transition: none; animation: ac-zrise 14s linear infinite; }
.k-printer_3d.indeterminate.st-printing .object { transform-box: view-box; transform-origin: 60px 104px; animation: ac-grow 14s linear infinite; }
.k-printer_3d.indeterminate.st-printing .objclip { transform: none; }
.k-printer_3d.indeterminate .objclip { y: 66px; height: 38px; }
.k-printer_3d.st-paused .lcd { animation: ac-pulse 1s steps(2) infinite; }
.k-printer_3d.st-failed .lcd { fill: var(--ac-alert); }
.k-printer_3d.st-printing .l1 { fill: #3ddc84; } .k-printer_3d.st-heating .l1 { fill: #ff8a3d; } .k-printer_3d.st-failed .l1 { fill: var(--ac-alert); }
.k-printer_3d.st-failed .dot { background: var(--ac-alert); }
@keyframes ac-printx { from { transform: translateX(-11px); } to { transform: translateX(11px); } }
@keyframes ac-zrise { from { transform: translateY(0); } to { transform: translateY(-38px); } }
@keyframes ac-grow { from { transform: scaleY(0); } to { transform: scaleY(1); } }

/* ---------- pool pump ---------- */
.k-pool_pump { --spd: 1; }
.flow { fill: none; stroke: #36b4f5; stroke-width: 2.2; stroke-linecap: round; stroke-dasharray: 3 5; opacity: 0; transition: opacity .6s; }
.k-pool_pump.st-filtering .flow { opacity: .95; animation: ac-flow calc(.7s / var(--spd)) linear infinite; }
.fan { transform-box: view-box; transform-origin: 104px 74px; }
.k-pool_pump.st-filtering .fan { animation: ac-rot calc(.22s / var(--spd)) linear infinite; }
.swirl { transform-box: view-box; transform-origin: 30px 68px; }
.k-pool_pump.st-filtering .swirl { animation: ac-rot calc(2.4s / var(--spd)) linear infinite; }
.ripple { animation: ac-ripple 6s linear infinite; }
.k-pool_pump.st-filtering .ripple { animation-duration: 3s; }
.bubbles circle { fill: #fff; opacity: 0; }
.k-pool_pump.st-filtering .bubbles circle { animation: ac-jetbub calc(1.4s / var(--spd)) ease-out infinite; }
.bubbles circle:nth-child(2) { animation-delay: -.35s !important; } .bubbles circle:nth-child(3) { animation-delay: -.7s !important; } .bubbles circle:nth-child(4) { animation-delay: -1.05s !important; }
.k-pool_pump.st-filtering .hum { animation: ac-shake-soft .18s linear infinite; }
.k-pool_pump.st-filtering .l1 { fill: #3ddc84; }
.k-pool_pump .lcd { font-size: 6.4px; }
@keyframes ac-flow { to { stroke-dashoffset: -16; } }
@keyframes ac-ripple { from { transform: translateX(0); } to { transform: translateX(20px); } }
@keyframes ac-jetbub { 0% { opacity: 0; transform: translate(0, 0); } 25% { opacity: .9; } 100% { opacity: 0; transform: translate(-14px, -6px); } }

/* ---------- pellet stove ---------- */
.k-pellet_stove .fire { transform-box: view-box; transform-origin: 60px 87px; transform: scale(var(--fs, 1)); opacity: 0; transition: opacity .8s, transform 1s ease; }
.k-pellet_stove.st-heating .fire { opacity: 1; }
.k-pellet_stove.st-ignition .fire { opacity: .9; transform: scale(.32); }
.flame { transform-box: fill-box; transform-origin: 50% 100%; }
.k-pellet_stove.st-heating .flame, .k-pellet_stove.st-ignition .flame { animation: ac-flick .8s ease-in-out infinite alternate; }
.flame.f2 { animation-duration: .62s !important; } .flame.f3 { animation-duration: .71s !important; animation-delay: -.3s !important; }
.flame.f4 { animation-duration: .5s !important; } .flame.f5 { animation-duration: 1.1s !important; animation-delay: -.5s !important; }
.k-pellet_stove .glow { opacity: 0; transition: opacity 1s; }
.k-pellet_stove.st-heating .glow { opacity: 1; animation: ac-glow 1.6s ease-in-out infinite; }
.k-pellet_stove.st-ignition .glow { opacity: .35; }
.k-pellet_stove.st-extinguishing .glow { opacity: .2; }
.embers circle { fill: #ff8a2a; opacity: 0; }
.k-pellet_stove.st-heating .embers circle, .k-pellet_stove.st-ignition .embers circle { opacity: 1; animation: ac-pulse 1.3s ease-in-out infinite; }
.k-pellet_stove.st-extinguishing .embers circle { opacity: .7; fill: #d2511a; animation: ac-pulse 3s ease-in-out infinite; }
.embers circle:nth-child(2) { animation-delay: -.4s !important; } .embers circle:nth-child(4) { animation-delay: -.8s !important; }
.igniter { fill: #5a2a20; }
.k-pellet_stove.st-ignition .igniter { fill: #ff3b1a; filter: drop-shadow(0 0 2px #ff5a1f); animation: ac-pulse .9s ease-in-out infinite; }
.smoke-in path, .flue-smoke path { fill: none; stroke: #c9ced4; stroke-width: 2.2; stroke-linecap: round; opacity: 0; }
.k-pellet_stove.st-ignition .smoke-in path, .k-pellet_stove.st-extinguishing .smoke-in path { animation: ac-steam 2.4s ease-out infinite; }
.k-pellet_stove.st-ignition .flue-smoke path { animation: ac-steam 2.2s ease-out infinite; }
.smoke-in path:nth-child(2), .flue-smoke path:nth-child(2) { animation-delay: 1.1s !important; }
.warm-air path { fill: none; stroke: var(--ac-heat); stroke-width: 1.6; stroke-linecap: round; opacity: 0; }
.k-pellet_stove.st-heating .warm-air path { animation: ac-steam 2s ease-out infinite; }
.warm-air path:nth-child(2) { animation-delay: .5s !important; } .warm-air path:nth-child(3) { animation-delay: 1s !important; } .warm-air path:nth-child(4) { animation-delay: 1.5s !important; }
.k-pellet_stove .lcd { fill: #ff9a4a; }
.k-pellet_stove.st-off .lcd, .k-pellet_stove.st-standby .lcd { fill: #6fd8ff; }
.k-pellet_stove.st-alarm .dot { background: var(--ac-alert); }
.k-pellet_stove.st-alarm .status { color: var(--ac-alert); font-weight: 600; }
.k-pellet_stove.st-alarm .lcd { fill: var(--ac-alert); animation: ac-pulse .8s steps(2) infinite; }
.k-pellet_stove.st-heating .l1, .k-pellet_stove.st-ignition .l1 { fill: #ff8a3d; }
@keyframes ac-flick { 0% { transform: scale(1, 1) skewX(0deg); } 35% { transform: scale(.94, 1.08) skewX(3deg); } 70% { transform: scale(1.04, .93) skewX(-2deg); } 100% { transform: scale(.97, 1.04) skewX(1.5deg); } }

/* ---------- fridge ---------- */
.fz-door, .fr-door { transform-origin: 26px 0; transition: transform .6s cubic-bezier(.3,.7,.3,1); }
.door-open .fr-door { transform: scaleX(.16) skewY(-6deg); }
.fz-open .fz-door { transform: scaleX(.16) skewY(-6deg); }
.flight { transition: opacity .4s; } .door-open .flight { opacity: .35; }
.flake { stroke: var(--ac-cold); transform-origin: 39.5px 60px; }
.k-fridge.st-cooling .flake, .k-chest_freezer.st-cooling .flake, .k-drawer_freezer.st-cooling .flake { animation: ac-pulse 2.4s ease-in-out infinite; }
.mist circle { fill: #9fd6ff; opacity: 0; }
.k-fridge.st-cooling .mist circle, .k-chest_freezer.st-cooling .mist circle, .k-drawer_freezer.st-cooling .mist circle { animation: ac-mist 3s ease-out infinite; }
.mist circle:nth-child(2) { animation-delay: .7s !important; } .mist circle:nth-child(3) { animation-delay: 1.4s !important; }
.mist circle:nth-child(4) { animation-delay: 2.1s !important; }

@keyframes ac-rot { to { transform: rotate(360deg); } }
@keyframes ac-tumble { 0% { transform: rotate(0); } 42% { transform: rotate(250deg); } 50% { transform: rotate(250deg); } 92% { transform: rotate(0); } 100% { transform: rotate(0); } }
@keyframes ac-wave { from { transform: translateX(0); } to { transform: translateX(-40px); } }
@keyframes ac-bubble { 0% { opacity: 0; transform: translateY(4px); } 30% { opacity: .9; } 100% { opacity: 0; transform: translateY(-10px); } }
@keyframes ac-shake { 0%,100% { transform: translate(0,0); } 25% { transform: translate(.6px,-.3px); } 50% { transform: translate(-.5px,.3px); } 75% { transform: translate(.4px,.4px); } }
@keyframes ac-shake-soft { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-.3px); } }
@keyframes ac-glow { 0%,100% { opacity: .55; } 50% { opacity: 1; } }
@keyframes ac-arm { 0% { transform: scaleX(1); } 25% { transform: scaleX(.08); } 50% { transform: scaleX(1); } 75% { transform: scaleX(.08); } 100% { transform: scaleX(1); } }
@keyframes ac-jet { to { stroke-dashoffset: -12; } }
@keyframes ac-fall { 0% { opacity: 0; transform: translateY(0); } 25% { opacity: .9; } 100% { opacity: 0; transform: translateY(16px); } }
@keyframes ac-steam { 0% { opacity: 0; transform: translateY(4px); } 30% { opacity: .55; } 100% { opacity: 0; transform: translateY(-8px); } }
@keyframes ac-pulse { 0%,100% { opacity: 1; } 50% { opacity: .45; } }
@keyframes ac-turn { 0% { transform: translateX(0) scaleX(1); } 25% { transform: translateX(7px) scaleX(.86); } 50% { transform: translateX(0) scaleX(1); } 75% { transform: translateX(-7px) scaleX(.86); } 100% { transform: translateX(0) scaleX(1); } }
@keyframes ac-mist { 0% { opacity: 0; transform: translate(0,0); } 30% { opacity: .8; } 100% { opacity: 0; transform: translate(4px,3px); } }

/* ---------- air fryer ---------- */
.k-air_fryer .lcd { fill: #3b2c22; }
.k-air_fryer.active .lcd { fill: #ff9a4a; }
.k-air_fryer.st-finished .lcd { fill: #3ddc84; }
.k-air_fryer.active .l1 { fill: #ff9a4a; animation: ac-pulse 1.6s ease-in-out infinite; }
.af-coil { fill: none; stroke: #4a3a33; stroke-width: 1.1; stroke-linejoin: round; transition: stroke .6s; }
.k-air_fryer.active .af-coil { stroke: #ff5a1f; filter: drop-shadow(0 0 1.5px #ff7a2e); animation: ac-pulse 1.6s ease-in-out infinite; }
.af-air path { fill: none; stroke: #ffe2b8; stroke-width: 1; stroke-linecap: round; stroke-dasharray: 3 5; opacity: 0; transition: opacity .6s; }
.k-air_fryer.active .af-air path { opacity: .75; animation: ac-flow .7s linear infinite; }
.k-air_fryer.active .af-air path:nth-child(2) { animation-duration: .9s; animation-direction: reverse; }
.fries, .nuggets { transform-box: fill-box; transform-origin: 50% 100%; transition: filter 1s; }
.k-air_fryer.active .fries { animation: af-toss 1.3s ease-in-out infinite; }
.k-air_fryer.active .nuggets { animation: af-toss 1.3s ease-in-out infinite; animation-delay: -.65s; }
.k-air_fryer.st-finished .fries, .k-air_fryer.st-finished .nuggets { filter: saturate(1.25) brightness(.88); }
.af-steam path { fill: none; stroke: #cfd6dd; stroke-width: 2; stroke-linecap: round; opacity: 0; }
.k-air_fryer.active .af-steam path { animation: ac-steam 2.4s ease-out infinite; }
.af-steam path:nth-child(2) { animation-delay: .8s !important; } .af-steam path:nth-child(3) { animation-delay: 1.6s !important; }
@keyframes af-toss { 0%, 100% { transform: translateY(0) rotate(0); } 30% { transform: translateY(-2.2px) rotate(-2deg); } 60% { transform: translateY(-.6px) rotate(1.5deg); } }

/* ---------- coffee maker ---------- */
.cf-level { transform-box: fill-box; transform-origin: 50% 100%; transform: scaleY(0); transition: transform 1.2s ease; }
.s-filtre { --cf-fill: 40s; } .s-dosette { --cf-fill: 16s; } .s-expresso { --cf-fill: 14s; }
.k-coffee_maker.st-keep_warm .cf-level { transform: scaleY(.8); }
.k-coffee_maker.st-brewing .cf-level { animation: cf-fill var(--cf-fill) cubic-bezier(.2,.6,.4,1) forwards; }
.cf-water { transform-box: fill-box; transform-origin: 50% 100%; }
.k-coffee_maker.st-brewing .cf-water { animation: cf-drain var(--cf-fill) linear forwards; }
.k-coffee_maker.st-keep_warm .cf-water { transform: scaleY(.3); }
.cf-stream { fill: none; stroke: #5a3417; stroke-width: 2.2; stroke-linecap: round; stroke-dasharray: 4 2; opacity: 0; transition: opacity .4s; }
.k-coffee_maker.st-brewing .cf-stream { opacity: .95; animation: cf-flow .45s linear infinite; }
.cf-drip circle { fill: #4a2a14; opacity: 0; }
.k-coffee_maker.st-brewing .cf-drip circle { animation: cf-drop 1.1s ease-in infinite; }
.cf-drip circle:nth-child(2) { animation-delay: .37s !important; } .cf-drip circle:nth-child(3) { animation-delay: .74s !important; }
.cf-plate { fill: #3a3232; transition: fill .6s; }
.k-coffee_maker.st-brewing .cf-plate, .k-coffee_maker.st-keep_warm .cf-plate { fill: #ff5a1f; filter: drop-shadow(0 0 2px #ff7a2e); animation: ac-pulse 1.8s ease-in-out infinite; }
.cf-led { fill: #3a424b; transition: fill .3s; }
.k-coffee_maker.st-ready .cf-led { fill: #3ddc84; }
.k-coffee_maker.st-keep_warm .cf-led { fill: #ff8a3d; }
.k-coffee_maker.st-brewing .cf-led { fill: #38d9ff; animation: ac-pulse 1s ease-in-out infinite; }
.k-coffee_maker.st-ready .lcd { fill: #3ddc84; }
.cf-steam path { fill: none; stroke: #cfd6dd; stroke-width: 2; stroke-linecap: round; opacity: 0; }
.k-coffee_maker.st-brewing .cf-steam path, .k-coffee_maker.st-keep_warm .s-filtre .cf-steam path { animation: ac-steam 2.4s ease-out infinite; }
.cf-steam path:nth-child(2) { animation-delay: 1.1s !important; }
.k-coffee_maker.st-brewing .s-expresso .cf-body { animation: ac-shake-soft .45s linear infinite; }
@keyframes cf-fill { from { transform: scaleY(0); } to { transform: scaleY(.85); } }
@keyframes cf-drain { from { transform: scaleY(1); } to { transform: scaleY(.3); } }
@keyframes cf-flow { to { stroke-dashoffset: -12; } }
@keyframes cf-drop { 0% { opacity: 0; transform: translateY(0); } 15% { opacity: .95; } 100% { opacity: .9; transform: translateY(26px); } }

/* ---------- TV (wall-mounted) ---------- */
.k-tv svg { overflow: visible; }
.tv-content { opacity: 0; transition: opacity .5s; }
.k-tv.st-screen_on .tv-content { opacity: 1; }
.tv-row { animation: tv-row 12s ease-in-out infinite; animation-play-state: paused; }
.tv-row2 { animation: tv-row2 16s ease-in-out infinite; animation-play-state: paused; }
.tv-sel { animation: tv-sel 12s ease-in-out infinite; animation-play-state: paused; }
.k-tv.st-screen_on .tv-row, .k-tv.st-screen_on .tv-row2, .k-tv.st-screen_on .tv-sel { animation-play-state: running; }
.tv-intro { opacity: 0; transform-box: view-box; transform-origin: 60px 69.5px; pointer-events: none; }
.tv-boot .tv-intro { animation: tv-intro 3.2s both; }
.tv-streaks path { stroke-width: 1.4; stroke-dasharray: 70; stroke-dashoffset: 70; }
.tv-boot .tv-streaks path { animation: tv-streak 3.2s ease-out both; }
.tv-logo { transform-box: fill-box; transform-origin: center; opacity: 0; }
.tv-boot .tv-logo { animation: tv-logo 3.2s cubic-bezier(.3,1.4,.5,1) both; }
.tv-boot .tv-content { animation: tv-reveal 3.2s both; }
.tv-flash { opacity: 0; transform-box: view-box; transform-origin: 60px 69.5px; }
.tv-shut .tv-flash { animation: tv-shut .9s ease-in both; }
.tv-led { fill: #3a2222; transition: fill .4s; }
.k-tv.st-standby .tv-led { fill: #ff3b30; filter: drop-shadow(0 0 1.2px #ff3b30); }
.k-tv.st-screen_on .tv-led { fill: #ffffff; opacity: .45; }
@keyframes tv-row { 0%, 20% { transform: translateX(0); } 30%, 55% { transform: translateX(-19px); } 65%, 90% { transform: translateX(-38px); } 100% { transform: translateX(0); } }
@keyframes tv-row2 { 0%, 40% { transform: translateX(0); } 55%, 90% { transform: translateX(-26px); } 100% { transform: translateX(0); } }
@keyframes tv-sel { 0%, 8% { transform: translateX(0); } 12%, 20% { transform: translateX(19px); } 24%, 90% { transform: translateX(38px); } 95%, 100% { transform: translateX(0); } }
@keyframes tv-intro { 0% { opacity: 1; transform: scale(.02, .015); filter: brightness(4); } 10% { opacity: 1; transform: scale(1, .015); filter: brightness(4); } 22% { opacity: 1; transform: none; filter: none; } 84% { opacity: 1; } 100% { opacity: 0; } }
@keyframes tv-streak { 0%, 18% { stroke-dashoffset: 70; opacity: 1; } 42% { stroke-dashoffset: 0; opacity: 1; } 55%, 100% { stroke-dashoffset: 0; opacity: 0; } }
@keyframes tv-logo { 0%, 36% { opacity: 0; transform: scale(.3); } 50% { opacity: 1; transform: scale(1.12); } 58% { transform: scale(1); } 80% { opacity: 1; transform: scale(1); } 100% { opacity: 0; transform: scale(2.6); } }
@keyframes tv-reveal { 0%, 84% { opacity: 0; } 100% { opacity: 1; } }
@keyframes tv-shut { 0% { opacity: .85; transform: scale(1, 1); } 45% { opacity: 1; transform: scale(1, .015); } 75% { opacity: 1; transform: scale(.03, .015); } 100% { opacity: 0; transform: scale(0, 0); } }

/* ---------- range hood ---------- */
.hd-fan { transform-box: view-box; transform-origin: 60px 60px; }
.k-range_hood.st-speed1 .hd-fan { animation: ac-rot .9s linear infinite; }
.k-range_hood.st-speed2 .hd-fan { animation: ac-rot .28s linear infinite; }
.hd-air path { fill: none; stroke: #cfe6ff; stroke-width: 1.3; stroke-linecap: round; stroke-dasharray: 3 5; opacity: 0; transition: opacity .6s; }
.k-range_hood.st-speed1 .hd-air path { opacity: .55; animation: hd-up 1.4s linear infinite; }
.k-range_hood.st-speed2 .hd-air path { opacity: .8; animation: hd-up .6s linear infinite; }
.hd-steam path { transform-box: fill-box; transform-origin: 50% 100%; fill: none; stroke: #e3e8ed; stroke-width: 2.2; stroke-linecap: round; opacity: 0; }
.k-range_hood.st-speed1 .hd-steam path, .k-range_hood.st-speed2 .hd-steam path { animation: hd-suck 2s ease-in infinite; }
.k-range_hood.st-speed2 .hd-steam path { animation-duration: 1.2s; }
.hd-steam path:nth-child(2) { animation-delay: .5s !important; } .hd-steam path:nth-child(3) { animation-delay: 1s !important; }
.hd-led { fill: #59616b; transition: fill .3s; }
.k-range_hood.st-speed1 .s1, .k-range_hood.st-speed2 .s1, .k-range_hood.st-speed2 .s2, .k-range_hood.st-speed2 .s3 { fill: #38d9ff; }
.k-range_hood.lights-on .lt { fill: #ffd76a; }
.hd-lamp { fill: #6b737c; transition: fill .4s; }
.k-range_hood.lights-on .hd-lamp { fill: #fff6d5; filter: drop-shadow(0 0 2px #ffe9a0); }
.hd-beam { opacity: 0; transition: opacity .6s; }
.k-range_hood.lights-on .hd-beam { opacity: 1; }
.hd-zone { fill: none; stroke: #ff5a1f; stroke-width: 1; opacity: 0; transition: opacity .6s; }
.k-range_hood.st-speed1 .hd-zone, .k-range_hood.st-speed2 .hd-zone { opacity: .85; filter: drop-shadow(0 0 1.5px #ff7a2e); }
@keyframes hd-up { to { stroke-dashoffset: -16; } }
@keyframes hd-suck { 0% { opacity: 0; transform: translateY(2px) scaleX(1); } 30% { opacity: .7; } 100% { opacity: 0; transform: translateY(-14px) scaleX(.5); } }

/* ---------- air conditioning: indoor split ---------- */
.k-ac_split { --acc: #9aa3ad; }
.k-ac_split.st-cooling { --acc: #4fc3f7; } .k-ac_split.st-heating { --acc: #ff8a3d; }
.k-ac_split.st-ac_dry { --acc: #7fd6c0; } .k-ac_split.st-ac_fan { --acc: #cfd6dd; } .k-ac_split.st-at_target { --acc: #9fd3f0; }
.ac-flap { transform-box: view-box; transform-origin: 60px 74px; transition: transform .9s cubic-bezier(.3,1.3,.5,1); }
.ac-slot { opacity: 0; transition: opacity .6s; }
.k-ac_split:not(.st-off):not(.st-unavailable) .ac-flap { transform: translateY(4.5px) scaleY(.75); }
.k-ac_split:not(.st-off):not(.st-unavailable) .ac-slot { opacity: 1; }
.k-ac_split.st-cooling .ac-flap, .k-ac_split.st-heating .ac-flap { animation: ac-swing 6s ease-in-out infinite; }
.ac-air path { fill: none; stroke: var(--acc); stroke-width: 2; stroke-linecap: round; stroke-dasharray: 5 7; opacity: 0; transition: opacity .8s; }
.k-ac_split.st-cooling .ac-air path, .k-ac_split.st-heating .ac-air path, .k-ac_split.st-ac_fan .ac-air path { opacity: .75; animation: ac-blow 1s linear infinite; }
.k-ac_split.st-ac_dry .ac-air path, .k-ac_split.st-at_target .ac-air path { opacity: .35; animation: ac-blow 2.4s linear infinite; }
.ac-air path:nth-child(2) { animation-delay: -.3s !important; } .ac-air path:nth-child(3) { animation-delay: -.6s !important; } .ac-air path:nth-child(4) { animation-delay: -.15s !important; } .ac-air path:nth-child(5) { animation-delay: -.45s !important; }
.ac-drops circle { fill: #7fd6c0; opacity: 0; }
.k-ac_split.st-ac_dry .ac-drops circle { animation: ac-fall 1.6s ease-in infinite; }
.ac-drops circle:nth-child(2) { animation-delay: .4s !important; } .ac-drops circle:nth-child(3) { animation-delay: .8s !important; } .ac-drops circle:nth-child(4) { animation-delay: 1.2s !important; }
.ac-ico { opacity: 0; transition: opacity .4s; }
.k-ac_split.st-cooling .ico-cool, .k-ac_split.mode-cool .ico-cool, .k-ac_split.st-heating .ico-heat, .k-ac_split.mode-heat .ico-heat,
.k-ac_split.st-ac_dry .ico-dry, .k-ac_split.st-ac_fan .ico-fan { opacity: 1; }
.k-ac_split.st-off .ac-ico, .k-ac_split.st-unavailable .ac-ico { opacity: 0 !important; }
.k-ac_split .lcd { fill: transparent; }
.k-ac_split:not(.st-off):not(.st-unavailable) .lcd { fill: var(--acc); }
.k-ac_split:not(.st-off):not(.st-unavailable) .l1 { fill: #3ddc84; }
.ac-warm { opacity: 0; transition: opacity 1.2s; }
.k-ac_split.st-heating .ac-warm { opacity: 1; animation: ac-glow 3s ease-in-out infinite; }
.ac-waves path { fill: none; stroke: #ffb37a; stroke-width: 1.6; stroke-linecap: round; opacity: 0; }
.k-ac_split.st-heating .ac-waves path { animation: ac-steam 2.6s ease-out infinite; }
.ac-waves path:nth-child(2) { animation-delay: .8s !important; } .ac-waves path:nth-child(3) { animation-delay: 1.6s !important; }
.k-heat_pump.st-heating .hp-fins { stroke: #cfe9ff; }
@keyframes ac-blow { to { stroke-dashoffset: -24; } }
@keyframes ac-swing { 0%, 100% { transform: translateY(4.5px) scaleY(.75); } 50% { transform: translateY(5.5px) scaleY(.55); } }

/* ---------- air conditioning: outdoor heat pump ---------- */
.hp-fan { transform-box: view-box; transform-origin: 46px 75px; }
.k-heat_pump.st-cooling .hp-fan, .k-heat_pump.st-heating .hp-fan, .k-heat_pump.st-ac_dry .hp-fan { animation: ac-rot .45s linear infinite; }
.k-heat_pump.st-ac_fan .hp-fan, .k-heat_pump.st-at_target .hp-fan { animation: ac-rot 2.5s linear infinite; }
.hp-out circle { fill: none; stroke-width: 2.2; opacity: 0; transform-box: view-box; transform-origin: 46px 75px; }
.k-heat_pump.st-cooling .hp-out circle { stroke: #ff8a3d; animation: hp-wave 1.8s ease-out infinite; }
.k-heat_pump.st-heating .hp-out circle, .k-heat_pump.st-ac_dry .hp-out circle { stroke: #4fc3f7; animation: hp-wave 1.8s ease-out infinite; }
.hp-out circle:nth-child(2) { animation-delay: .6s !important; } .hp-out circle:nth-child(3) { animation-delay: 1.2s !important; }
.hp-steam path { fill: none; stroke: #e3e8ed; stroke-width: 2.2; stroke-linecap: round; opacity: 0; }
.k-heat_pump.st-defrost .hp-steam path { animation: ac-steam 2s ease-out infinite; }
.hp-steam path:nth-child(2) { animation-delay: .6s !important; } .hp-steam path:nth-child(3) { animation-delay: 1.2s !important; }
.k-heat_pump.st-cooling .hp-body, .k-heat_pump.st-heating .hp-body { animation: ac-shake-soft .25s linear infinite; }
.hp-led { fill: #9aa2ab; transition: fill .3s; }
.k-heat_pump.st-cooling .hp-led, .k-heat_pump.st-heating .hp-led, .k-heat_pump.st-ac_dry .hp-led, .k-heat_pump.st-defrost .hp-led { fill: #3ddc84; }
.k-heat_pump.st-at_target .hp-led, .k-heat_pump.st-ac_fan .hp-led { fill: #ffd76a; }
@keyframes hp-wave { 0% { opacity: .8; transform: scale(1); } 100% { opacity: 0; transform: scale(1.55); } }

/* ---------- towel dryer ---------- */
.td-glow { opacity: 0; transition: opacity .8s; }
.td-glow2 { mix-blend-mode: multiply; }
.k-towel_dryer.st-heating .td-glow { opacity: .85; animation: ac-glow 2.6s ease-in-out infinite; }
.k-towel_dryer.st-at_target .td-glow { opacity: .22; }
.td-heat path { fill: none; stroke: #ff9a52; stroke-width: 1.6; stroke-linecap: round; stroke-dasharray: 2 7; opacity: 0; transition: opacity .6s; }
.k-towel_dryer.st-heating .td-heat path { opacity: .6; animation: hd-up 1.8s linear infinite; }
.td-heat path:nth-child(2) { animation-duration: 1.4s !important; } .td-heat path:nth-child(3) { animation-duration: 2.2s !important; }
.td-towel { transform-box: fill-box; transform-origin: 50% 0; }
.k-towel_dryer.st-heating .td-towel { animation: td-sway 3.2s ease-in-out infinite; }
.k-towel_dryer.st-heating .td-towel2 { animation-duration: 2.6s; animation-delay: .4s; }
.td-steam path { transform-box: fill-box; transform-origin: 50% 100%; fill: none; stroke: #e3e8ed; stroke-width: 2; stroke-linecap: round; opacity: 0; }
.k-towel_dryer.st-heating .td-steam path { animation: hd-suck 2.6s ease-out infinite; }
.td-steam path:nth-child(2) { animation-delay: .8s !important; } .td-steam path:nth-child(3) { animation-delay: 1.6s !important; }
.td-led { fill: #5a636d; transition: fill .3s; }
.k-towel_dryer.st-heating .td-led { fill: #ff7a2e; filter: drop-shadow(0 0 1.5px #ff7a2e); }
.k-towel_dryer.st-at_target .td-led { fill: #43c07a; }
.k-towel_dryer .lcd { fill: #6fd8ff; }
.k-towel_dryer.st-off .lcd { fill: #24404f; }
@keyframes td-sway { 0%, 100% { transform: skewX(0deg); } 50% { transform: skewX(1.6deg); } }

/* ---------- server rack (homelab) ---------- */
.rk-led { fill: #2d3640; transition: fill .4s; }
.rk-fan { transform-box: fill-box; transform-origin: 50% 50%; }
.k-server_rack.st-online .rk-fan { animation: ac-rot calc(.9s - var(--load, .4) * .6s) linear infinite; }
.k-server_rack.st-online .rk-g { fill: #34d27a; animation: rk-blink calc(1.8s - var(--load, .4) * 1.3s) steps(1, end) infinite; }
.k-server_rack.st-online .rk-b { fill: #3b9cff; filter: drop-shadow(0 0 1.2px #3b9cff); animation: rk-blink calc(1.3s - var(--load, .4) * .9s) steps(1, end) infinite; }
.k-server_rack.st-online .rk-r { fill: #ffb020; }
.k-server_rack.st-standby .rk-g { fill: #34d27a; opacity: .6; }
.k-server_rack.st-standby .rk-r { fill: #ffb020; }
.rk-glow { opacity: 0; transition: opacity .8s; }
.k-server_rack.st-online .rk-glow { opacity: 1; animation: ac-glow 3s ease-in-out infinite; }
.rk-flow path { stroke: #fff; stroke-dasharray: 1.4 9; opacity: 0; transition: opacity .6s; }
.k-server_rack.st-online .rk-flow path { opacity: .85; animation: ac-flow calc(1.8s - var(--load, .4) * 1.2s) linear infinite; }
.k-server_rack:not(.st-online) .rk-cables { opacity: .55; }
.k-server_rack .lcd { font-size: 5.6px; fill: #24404f; }
.k-server_rack.active .lcd { fill: var(--ac-lcd); }
@keyframes rk-blink { 0% { opacity: 1; } 20% { opacity: .25; } 35% { opacity: 1; } 62% { opacity: .35; } 78% { opacity: 1; } 100% { opacity: 1; } }

/* ---------- desktop PC ---------- */
.pc-screen, .lp-screen { opacity: 0; transition: opacity .5s; }
.k-desktop_pc.st-screen_on .pc-screen, .k-laptop.st-screen_on .lp-screen { opacity: 1; }
.pc-fan { transform-box: fill-box; transform-origin: 50% 50%; }
.k-desktop_pc.st-screen_on .pc-fan { animation: ac-rot .7s linear infinite; }
.pc-rgb circle { stroke: #1d242b; transition: stroke .5s; }
.k-desktop_pc.st-screen_on .pc-rgb circle { animation: pc-rgb 4s linear infinite; filter: drop-shadow(0 0 1.6px currentColor); }
.pc-rgb circle:nth-child(2) { animation-delay: -1.3s !important; } .pc-rgb circle:nth-child(3) { animation-delay: -2.6s !important; }
.pc-led { fill: #5a636d; transition: fill .3s; }
.k-desktop_pc.st-screen_on .pc-led { fill: #38d9ff; filter: drop-shadow(0 0 1.4px #38d9ff); }
.k-desktop_pc.st-standby .pc-led { fill: #ffb020; animation: ac-pulse 2.4s ease-in-out infinite; }
.pc-mled { fill: #3a424b; } .k-desktop_pc.st-screen_on .pc-mled { fill: #43c07a; } .k-desktop_pc.st-standby .pc-mled { fill: #ffb020; }
.pc-code rect { transform-box: fill-box; transform-origin: 0 50%; }
.k-desktop_pc.st-screen_on .pc-code rect { animation: pc-type 4.4s ease-in-out infinite; }
.pc-code rect:nth-child(2) { animation-delay: .5s !important; } .pc-code rect:nth-child(3) { animation-delay: 1s !important; }
.pc-code rect:nth-child(4) { animation-delay: 1.5s !important; } .pc-code rect:nth-child(5) { animation-delay: 2s !important; }
.pc-bars rect { transform-box: fill-box; transform-origin: 50% 100%; }
.k-desktop_pc.st-screen_on .pc-bars rect { animation: pc-bar 3.2s ease-in-out infinite alternate; }
.pc-bars rect:nth-child(2) { animation-delay: .4s !important; } .pc-bars rect:nth-child(3) { animation-delay: .8s !important; } .pc-bars rect:nth-child(4) { animation-delay: 1.2s !important; }
.pc-cursor { transform: translate(20px, 30px); }
.k-desktop_pc.st-screen_on .pc-cursor { animation: pc-mouse 6s ease-in-out infinite; }
.k-desktop_pc.st-screen_on .pc-keys rect { fill: #38d9ff; opacity: .5; animation: ac-glow 2.4s ease-in-out infinite; }
@keyframes pc-rgb { 0% { stroke: #ff3b6b; color: #ff3b6b; } 33% { stroke: #3bff9a; color: #3bff9a; } 66% { stroke: #3b9cff; color: #3b9cff; } 100% { stroke: #ff3b6b; color: #ff3b6b; } }
@keyframes pc-type { 0% { transform: scaleX(.1); } 30%, 80% { transform: scaleX(1); } 100% { transform: scaleX(.1); } }
@keyframes pc-bar { from { transform: scaleY(.35); } to { transform: scaleY(1); } }
@keyframes pc-mouse { 0%, 100% { transform: translate(20px, 30px); } 30% { transform: translate(52px, 34px); } 55% { transform: translate(60px, 48px); } 80% { transform: translate(28px, 42px); } }

/* ---------- laptop ---------- */
.lp-line { stroke-dasharray: 130; stroke-dashoffset: 130; }
.k-laptop.st-screen_on .lp-line { animation: lp-draw 5s ease-in-out infinite; }
.lp-dot { opacity: 0; }
.k-laptop.st-screen_on .lp-dot { animation: ac-pulse 1.2s ease-in-out infinite; opacity: 1; }
.lp-glow { opacity: 0; transition: opacity .6s; }
.k-laptop.st-screen_on .lp-glow { opacity: 1; }
.lp-keys { transition: fill .5s; }
.k-laptop.st-screen_on .lp-keys { fill: #bfe9ff; }
.lp-cam { fill: #3a424b; } .k-laptop.st-screen_on .lp-cam { fill: #43e08a; }
.lp-led { fill: #5a636d; transition: fill .3s; }
.k-laptop.st-screen_on .lp-led { fill: #43e08a; filter: drop-shadow(0 0 1.2px #43e08a); }
.k-laptop.st-standby .lp-led { fill: #ffb020; animation: ac-pulse 2.4s ease-in-out infinite; }
@keyframes lp-draw { 0% { stroke-dashoffset: 130; } 55%, 85% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -130; } }
.modes:empty { display: none; }
.modes { display: grid; grid-template-columns: repeat(auto-fit, minmax(78px, 1fr)); gap: 6px; }
.mode-btn { white-space: nowrap; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 4px; padding: 7px 6px; border-radius: 10px; font: inherit; font-size: 12.5px; color: var(--secondary-text-color); background: rgba(127,127,127,.12); transition: background .2s, color .2s; }
.mode-btn:hover { background: rgba(127,127,127,.22); }
.mode-btn ha-icon { --mdc-icon-size: 16px; }
.mode-btn.on { color: #fff; background: var(--mc, var(--c)); }
.mode-btn[data-mode="comfort"] { --mc: #f5a300; } .mode-btn[data-mode="eco"] { --mc: #5b7bd5; } .mode-btn[data-mode="frost"] { --mc: #2b9af9; } .mode-btn[data-mode="off"] { --mc: #6b737c; }
.mode-btn:focus-visible { outline: 2px solid var(--c); outline-offset: 2px; }
.k-towel_dryer.mode-eco.st-heating .td-glow { opacity: .55; } .k-towel_dryer.mode-frost.st-heating .td-glow { opacity: .3; }
.k-towel_dryer.mode-frost .lcd { fill: #6fd8ff; }
.wrap.solar-heat { --c: var(--ac-accent, #f5b301); }

/* ---------- wine cooler ---------- */
.wn-led { fill: #5a636d; transition: fill .3s; }
.k-wine_cooler.st-cooling .wn-led { fill: #38d9ff; filter: drop-shadow(0 0 1.4px #38d9ff); animation: ac-pulse 2.4s ease-in-out infinite; }
.k-wine_cooler.st-standby .wn-led { fill: #43c07a; }
.wn-light, .wn-strip { opacity: 0; transition: opacity .8s; }
.k-wine_cooler.st-cooling .wn-light, .k-wine_cooler.st-standby .wn-light { opacity: .8; }
.k-wine_cooler.st-cooling .wn-strip, .k-wine_cooler.st-standby .wn-strip { opacity: 1; }
.wn-bottles { transition: opacity .8s; opacity: .55; }
.k-wine_cooler.st-cooling .wn-bottles, .k-wine_cooler.st-standby .wn-bottles { opacity: 1; }
.wn-air path { stroke: #9fdcff; stroke-width: 1.4; stroke-dasharray: 3 6; opacity: 0; transition: opacity .6s; }
.k-wine_cooler.st-cooling .wn-air path { opacity: .6; animation: hd-up 2s linear infinite; }
.wn-air path:nth-child(2) { animation-duration: 1.5s !important; } .wn-air path:nth-child(3) { animation-duration: 2.4s !important; }
.wn-drops circle { fill: #cfeeff; opacity: 0; }
.k-wine_cooler.st-cooling .wn-drops circle { animation: ac-fall 4s ease-in infinite; }
.wn-drops circle:nth-child(2) { animation-delay: 1.1s !important; } .wn-drops circle:nth-child(3) { animation-delay: 2.2s !important; }
.wn-drops circle:nth-child(4) { animation-delay: .6s !important; } .wn-drops circle:nth-child(5) { animation-delay: 1.8s !important; }
.wn-door { transform-box: view-box; transform-origin: 26px 76px; transition: transform .6s cubic-bezier(.3,.7,.3,1); }
.door-open .wn-door { transform: scaleX(.2) skewY(-5deg); }
.k-wine_cooler .lcd { fill: #6fd8ff; }
.k-wine_cooler.st-off .lcd { fill: #24404f; }
.k-wine_cooler.warm .lcd { fill: var(--ac-alert); }
.no-anim *, .no-anim { animation: none !important; }
@media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
`;

/* ------------------------------------------------------------------ */
/* Register                                                            */
/* ------------------------------------------------------------------ */
window.customCards = window.customCards || [];
for (const kind of Object.keys(DEF)) {
  const tag = `appliance-${kind.replace("_", "-")}-card`;
  if (customElements.get(tag)) continue;
  customElements.define(tag, class extends ApplianceCardBase { static get kind() { return kind; } });
  window.customCards.push({
    type: tag,
    name: `Appliance – ${STRINGS.en[kind]} / ${STRINGS.fr[kind]}`,
    description: `${STRINGS.en[kind]} card with realistic animated illustration, live status, power, energy and cost.`,
    preview: true,
    documentationURL: "https://github.com/skyrotter/ha-appliance-electromenager-cards",
  });
}
console.info(`%c HA-APPLIANCE-CARDS %c v${VERSION} `,
  "color:#fff;background:#03a9f4;font-weight:700;border-radius:3px 0 0 3px",
  "color:#03a9f4;background:#fff;font-weight:700;border-radius:0 3px 3px 0");
})();

/* ================================================================== */
/* appliance-aquarium-card.js                                       */
/* ================================================================== */
(() => {
"use strict";
const define = (tag, cls) => { if (!customElements.get(tag)) customElements.define(tag, cls); };
window.customCards = window.customCards || [];
/* appliance-aquarium-card — carte Lovelace aquarium animé (puissance, kWh, température, coût)
 * type: custom:appliance-aquarium-card
 */
const I18N_AQUARIUM = {
  "en": {
    "power": "Power",
    "energy": "Energy",
    "temp": "Water",
    "cost": "Cost",
    "name": "Aquarium",
    "alert": "Temperature out of range",
    "unavailable": "Unavailable"
  },
  "de": {
    "power": "Leistung",
    "energy": "Energie",
    "temp": "Wasser",
    "cost": "Kosten",
    "name": "Aquarium",
    "alert": "Temperatur außerhalb des Bereichs",
    "unavailable": "Nicht verfügbar"
  },
  "fr": {
    "power": "Puissance",
    "energy": "Énergie",
    "temp": "Eau",
    "cost": "Coût",
    "name": "Aquarium",
    "alert": "Température hors plage",
    "unavailable": "Indisponible"
  },
  "nb": {
    "power": "Effekt",
    "energy": "Energi",
    "temp": "Vann",
    "cost": "Kostnad",
    "name": "Akvarium",
    "alert": "Temperatur utenfor område",
    "unavailable": "Utilgjengelig"
  }
};

class ApplianceAquariumCard extends HTMLElement {
  static getStubConfig() {
    return { entity_power: '', entity_energy: '', entity_temperature: '', entity_light: '', temp_min: 24, temp_max: 27, price_per_kwh: 0.2 };
  }

  // Éditeur visuel HA
  static getConfigForm() {
    return {
      schema: [
        { name: 'name', selector: { text: {} } },
        { name: 'entity_power', selector: { entity: { domain: 'sensor', device_class: 'power' } } },
        { name: 'entity_energy', selector: { entity: { domain: 'sensor', device_class: 'energy' } } },
        { name: 'entity_temperature', selector: { entity: { domain: 'sensor', device_class: 'temperature' } } },
        { name: 'entity_light', selector: { entity: { domain: ['light', 'switch', 'input_boolean'] } } },
        { name: 'entity_cost', selector: { entity: { domain: 'sensor' } } },
        { name: 'price_per_kwh', selector: { number: { min: 0, max: 2, step: 0.0001, mode: 'box' } } },
        { type: 'grid', name: '', schema: [
          { name: 'temp_min', selector: { number: { min: 0, max: 40, step: 0.5, mode: 'box' } } },
          { name: 'temp_max', selector: { number: { min: 0, max: 40, step: 0.5, mode: 'box' } } },
        ] },
        { type: 'grid', name: '', schema: [
          { name: 'show_power', selector: { boolean: {} }, default: true },
          { name: 'show_energy', selector: { boolean: {} }, default: true },
          { name: 'show_temperature', selector: { boolean: {} }, default: true },
          { name: 'show_cost', selector: { boolean: {} }, default: true },
        ] },
        { name: 'language', selector: { select: { options: Object.keys(I18N_AQUARIUM) } } },
      ],
    };
  }

  setConfig(config) {
    this._config = {
      show_power: true, show_energy: true, show_temperature: true, show_cost: true,
      temp_min: 24, temp_max: 27, price_per_kwh: 0.2, max_power: 200, language: 'fr',
      ...config,
    };
    this._built = false;
    this._build();
  }

  set hass(hass) {
    this._hass = hass;
    this._update();
  }

  getCardSize() { return 5; }

  _t(k) { return (I18N_AQUARIUM[this._config.language] || I18N_AQUARIUM.en)[k] ?? I18N_AQUARIUM.en[k] ?? k; }

  _build() {
    const c = this._config;
    // Poisson tourné vers la droite (tête à x=34), flip automatique au retour
    const fish = (top, dur, delay, body, fin, scale, stripes) => `
      <g class="fish" style="--top:${top}px;--dur:${dur}s;--delay:${delay}s;--s:${scale}">
        <g style="transform:scale(${scale})">
          <path class="tail" d="M2 0 L-12 -9 L-9 0 L-12 9 Z" fill="${fin}"/>
          <path d="M0 0 C8 -10 26 -10 34 0 C26 10 8 10 0 0 Z" fill="${body}"/>
          <path d="M14 -8 L22 -14 L26 -7 Z" fill="${fin}"/>
          ${stripes ? '<path d="M10 -8 L12 8 M18 -9 L20 9 M26 -6 L27 6" stroke="#111" stroke-width="2.4" fill="none"/>' : ''}
          <circle cx="28" cy="-2" r="2" fill="#fff"/><circle cx="28.6" cy="-2" r="1" fill="#111"/>
        </g>
      </g>`;
    const bubbles = Array.from({ length: 10 }, (_, i) =>
      `<circle class="bubble" cx="${262 + (i % 4) * 5}" cy="140" r="${1.5 + (i % 3)}" style="--d:${3 + (i % 4)}s;--dl:${(i * 0.6) % 3}s"/>`).join('');
    const blade = (x, h, w, col, d, pd) => `<path class="plant" d="M${x} 146 q ${-w} ${-h / 3} 0 ${-h / 2} q ${w} ${-h / 3} 0 ${-h / 2}" stroke="${col}" style="--pd:${pd}s;transform-origin:${x}px 146px;stroke-width:${d}"/>`;
    const plants = [
      blade(30, 95, 8, '#3fbf4a', 6, 4), blade(42, 110, -9, '#58d65a', 5, 5), blade(54, 80, 7, '#35a842', 5, 6),
      blade(78, 100, 9, '#6be06a', 4, 5), blade(90, 85, -7, '#3fbf4a', 4, 4), blade(100, 70, 6, '#7ae27a', 4, 6),
      blade(195, 105, 8, '#4cc94c', 8, 4), blade(210, 85, -9, '#37ae3f', 7, 5), blade(280, 95, 7, '#4cc94c', 5, 5),
    ].join('');
    const feathers = [[135, 105], [148, 120], [160, 95], [170, 110]].map(([x, h], i) =>
      `<path class="plant" d="M${x} 146 C ${x - 10} ${146 - h / 2}, ${x + 10} ${146 - h / 1.5}, ${x} ${146 - h}" stroke="#c0789a" style="--pd:${5 + i}s;transform-origin:${x}px 146px;stroke-width:12;opacity:.85"/>`).join('');
    const urchin = Array.from({ length: 22 }, (_, i) => { const a = (i / 22) * Math.PI * 2; return `<line x1="232" y1="136" x2="${232 + Math.cos(a) * 13}" y2="${136 + Math.sin(a) * 11}"/>`; }).join('');
    const speckles = Array.from({ length: 40 }, (_, i) => `<circle cx="${14 + (i * 37) % 292}" cy="${150 + (i * 13) % 12}" r="1" fill="#6f86d6" opacity=".6"/>`).join('');

    if (!this.shadowRoot) this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    <style>
      :host { display:block; }
      ha-card { padding:12px; overflow:hidden; }
      .title { font-weight:600; font-size:1.05em; margin:0 4px 8px; display:flex; justify-content:space-between; align-items:center; }
      .badge { font-size:.75em; color:#fff; background:#e53935; border-radius:10px; padding:2px 8px; display:none; animation:blink 1s infinite; }
      .alert .badge { display:inline-block; }
      svg { width:100%; height:auto; display:block; border-radius:10px; }
      .tint { fill:var(--water, #2a8fd6); opacity:.45; transition:fill 1.5s; }
      .night-overlay { fill:#050b24; opacity:0; transition:opacity 1.2s; }
      .night .night-overlay { opacity:.6; }
      .lamp-glow { fill:#bfe6ff; opacity:0; transition:opacity 1s; }
      .lit .lamp-glow { opacity:.22; } .lit .lamp-led { fill:#e8f6ff; } .lamp-led { fill:#444; }
      .plant { fill:none; stroke-linecap:round; animation:sway var(--pd) ease-in-out infinite alternate; }
      .bubble { fill:rgba(255,255,255,.35); stroke:rgba(255,255,255,.85); stroke-width:.6;
        animation:rise calc(var(--d) / var(--speed,1)) linear infinite; animation-delay:var(--dl); }
      .fish { animation:swim var(--dur) linear infinite; animation-delay:var(--delay); }
      .tail { transform-origin:2px 0; animation:wag calc(.5s / var(--speed,1)) ease-in-out infinite alternate; }
      .stats { display:grid; grid-template-columns:repeat(auto-fit,minmax(70px,1fr)); gap:8px; margin-top:10px; }
      .stat { text-align:center; background:var(--secondary-background-color, rgba(127,127,127,.12)); border-radius:10px; padding:6px 4px; }
      .stat .v { font-weight:700; font-size:1.05em; } .stat .l { font-size:.7em; opacity:.65; text-transform:uppercase; letter-spacing:.04em; }
      .alert .stat.t .v { color:#e53935; animation:blink 1s infinite; }
      @keyframes rise { from { transform:translateY(0); opacity:.9 } to { transform:translateY(-105px); opacity:0 } }
      @keyframes sway { from { transform:rotate(-4deg) } to { transform:rotate(4deg) } }
      /* aller vers la droite, demi-tour, retour vers la gauche */
      @keyframes swim {
        0% { transform:translate(0px,var(--top)) scaleX(1) } 49.9% { transform:translate(290px,var(--top)) scaleX(1) }
        50% { transform:translate(290px,var(--top)) scaleX(-1) } 99.9% { transform:translate(0px,var(--top)) scaleX(-1) }
        100% { transform:translate(0px,var(--top)) scaleX(1) } }
      @keyframes wag { from { transform:scaleY(.7) } to { transform:scaleY(1.2) } }
      @keyframes blink { 50% { opacity:.35 } }
    </style>
    <ha-card>
      <div class="title"><span id="name">${c.name || this._t('name')}</span><span class="badge" id="badge">${this._t('alert')}</span></div>
      <svg viewBox="0 0 320 200" id="tank">
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2d8cf0"/><stop offset="1" stop-color="#0b4fb8"/></linearGradient>
          <linearGradient id="wood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d98534"/><stop offset="1" stop-color="#b8661e"/></linearGradient>
          <clipPath id="glass"><rect x="10" y="24" width="300" height="140"/></clipPath>
        </defs>
        <rect width="320" height="200" fill="#efe6dc"/>
        <rect x="4" y="170" width="312" height="30" fill="url(#wood)"/><line x1="160" y1="172" x2="160" y2="200" stroke="#8a4a14" stroke-width="1.5"/>
        <rect x="10" y="24" width="300" height="140" fill="url(#bg)"/>
        <g clip-path="url(#glass)">
          <rect class="tint" x="10" y="24" width="300" height="140"/>
          <rect x="10" y="24" width="300" height="5" fill="rgba(255,255,255,.35)"/>
          <rect x="108" y="28" width="9" height="115" fill="#10244a" opacity=".85"/>
          ${plants}${feathers}
          <g stroke="#c62828" stroke-width="1.6" stroke-linecap="round">${urchin}</g><circle cx="232" cy="136" r="5" fill="#b71c1c"/>
          <polygon points="95,146 112,120 140,112 160,128 165,146" fill="#555a60"/><polygon points="112,120 140,112 130,128" fill="#6b7076"/>
          <polygon points="180,146 190,124 215,118 228,146" fill="#4a4e54"/><polygon points="270,146 280,128 300,126 306,146" fill="#5a5f66"/>
          <polygon points="45,150 55,140 80,138 90,150" fill="#6a6f76"/>
          <ellipse cx="82" cy="130" rx="9" ry="7" fill="#e8e8e8"/><ellipse cx="128" cy="144" rx="8" ry="5" fill="#dcdcdc"/>
          <circle cx="205" cy="146" r="6" fill="#4caf50"/><circle cx="222" cy="148" r="5" fill="#5cc45c"/><circle cx="244" cy="147" r="6" fill="#4caf50"/><circle cx="258" cy="148" r="5" fill="#5cc45c"/>
          <rect x="10" y="148" width="300" height="16" fill="#12245e"/>${speckles}
          <g>${bubbles}</g>
          ${fish(40, 16, 0, '#ff9a2e', '#ff7a00', 1, false)}
          ${fish(65, 22, -9, '#ffb62e', '#ff9a00', 0.9, false)}
          ${fish(85, 19, -4, '#d8dce6', '#555', 1.05, true)}
          ${fish(105, 25, -14, '#e8c86a', '#c9a227', 0.8, true)}
          ${fish(55, 28, -20, '#ff4d4d', '#d32f2f', 0.7, false)}
          ${fish(120, 21, -6, '#ffc233', '#ff9a00', 0.95, false)}
          <rect class="night-overlay" x="10" y="24" width="300" height="140"/>
          <polygon class="lamp-glow" points="70,24 250,24 305,164 15,164"/>
        </g>
        <rect x="6" y="14" width="308" height="11" fill="#111"/><rect x="6" y="162" width="308" height="8" fill="#111"/>
        <rect x="8" y="24" width="3" height="140" fill="rgba(180,220,255,.5)"/><rect x="309" y="24" width="3" height="140" fill="rgba(180,220,255,.5)"/>
        <rect x="75" y="2" width="170" height="12" rx="3" fill="#1c1c1c"/><rect class="lamp-led" x="82" y="9" width="156" height="3" rx="1.5"/>
      </svg>
      <div class="stats" id="stats"></div>
    </ha-card>`;
    this._built = true;
  }

  _num(id) {
    if (!id || !this._hass) return null;
    const s = this._hass.states[id];
    if (!s || s.state === 'unavailable' || s.state === 'unknown') return null;
    const n = parseFloat(s.state);
    return Number.isFinite(n) ? n : null;
  }

  _update() {
    if (!this._built || !this._hass) return;
    const c = this._config, root = this.shadowRoot;
    const power = this._num(c.entity_power), energy = this._num(c.entity_energy), temp = this._num(c.entity_temperature);
    let cost = this._num(c.entity_cost);
    if (cost === null && energy !== null && c.price_per_kwh) cost = energy * c.price_per_kwh;

    // Vitesse des bulles/queues liée à la puissance (0.5× à 3×)
    const ratio = power === null ? 0 : Math.min(power / (c.max_power || 200), 1);
    root.querySelector('svg').style.setProperty('--speed', (0.5 + ratio * 2.5).toFixed(2));

    // Couleur de l'eau selon la température : froid=bleu, idéal=turquoise, chaud=orange/rouge
    let water = '#2a8fd6', alert = false;
    if (temp !== null) {
      if (temp < c.temp_min) { water = '#1e5fb5'; alert = true; }
      else if (temp > c.temp_max) { water = temp > c.temp_max + 3 ? '#d64a2a' : '#d6962a'; alert = true; }
      else water = '#2ab5c4';
    }
    root.querySelector('svg').style.setProperty('--water', water);
    root.querySelector('ha-card').classList.toggle('alert', alert);

    // Éclairage jour/nuit
    const lightState = c.entity_light && this._hass.states[c.entity_light];
    const lit = lightState ? lightState.state === 'on' : true;
    const tank = root.getElementById('tank');
    tank.classList.toggle('lit', lit);
    tank.classList.toggle('night', !lit);

    const fmt = (v, d, u) => v === null ? '—' : `${v.toFixed(d)} ${u}`;
    const items = [];
    if (c.show_power) items.push(['p', this._t('power'), fmt(power, 0, 'W')]);
    if (c.show_energy) items.push(['e', this._t('energy'), fmt(energy, 2, 'kWh')]);
    if (c.show_temperature) items.push(['t', this._t('temp'), fmt(temp, 1, '°C')]);
    if (c.show_cost) items.push(['c', this._t('cost'), fmt(cost, 2, '€')]);
    root.getElementById('stats').innerHTML = items.map(([k, l, v]) =>
      `<div class="stat ${k}"><div class="v">${v}</div><div class="l">${l}</div></div>`).join('');
  }
}

define('appliance-aquarium-card', ApplianceAquariumCard);
window.customCards = window.customCards || [];
window.customCards.push({ type: 'appliance-aquarium-card', name: 'Aquarium Card', description: 'Aquarium animé : puissance, kWh, température, coût', preview: false });
})();

/* ================================================================== */
/* appliance-linky-card.js                                          */
/* ================================================================== */
(() => {
"use strict";
const define = (tag, cls) => { if (!customElements.get(tag)) customElements.define(tag, cls); };
window.customCards = window.customCards || [];
/* appliance-linky-card — compteur Linky animé (écran LCD, jauge vs puissance souscrite, index HP/HC)
 * type: custom:appliance-linky-card
 */
const I18N_LINKY = {
  "en": {
    "power": "POWER",
    "hp": "PEAK INDEX",
    "hc": "OFF-PEAK INDEX",
    "tariff": "CURRENT TARIFF",
    "cost": "COST TODAY",
    "subscribed": "Subscribed",
    "name": "Linky",
    "conso": "usage",
    "alert": "Overload",
    "active": "ACTIVE POWER",
    "active_short": "Active",
    "per_phase": "per phase"
  },
  "de": {
    "power": "LEISTUNG",
    "hp": "ZÄHLER HT",
    "hc": "ZÄHLER NT",
    "tariff": "AKTUELLER TARIF",
    "cost": "KOSTEN HEUTE",
    "subscribed": "Vertragsleistung",
    "name": "Linky",
    "conso": "Verbrauch",
    "alert": "Überlast",
    "active": "WIRKLEISTUNG",
    "active_short": "Wirkleistung",
    "per_phase": "pro Phase"
  },
  "fr": {
    "power": "PUISSANCE",
    "hp": "INDEX HP",
    "hc": "INDEX HC",
    "tariff": "TARIF EN COURS",
    "cost": "COÛT JOUR",
    "subscribed": "Souscrite",
    "name": "Linky",
    "conso": "conso",
    "alert": "Dépassement",
    "active": "PUISS. ACTIVE",
    "active_short": "Active",
    "per_phase": "par phase"
  },
  "nb": {
    "power": "EFFEKT",
    "hp": "INDEKS TOPPTID",
    "hc": "INDEKS LAVTID",
    "tariff": "GJELDENDE TARIFF",
    "cost": "KOSTNAD I DAG",
    "subscribed": "Abonnert",
    "name": "Linky",
    "conso": "forbruk",
    "alert": "Overbelastning",
    "active": "AKTIV EFFEKT",
    "active_short": "Aktiv",
    "per_phase": "per fase"
  }
};
// Aiguilles L1 / L2 / L3 (mode « needles ») : couleurs distinctes du vert / orange / rouge de la jauge
const PHASE_COLORS = ['#1e88e5', '#8e24aa', '#00897b'];

class ApplianceLinkyCard extends HTMLElement {
  static getStubConfig() {
    return { entity_power: '', entity_hp: '', entity_hc: '', subscribed_power: 9, hc_ranges: '01:00-07:00,12:30-14:30' };
  }

  static getConfigForm() {
    return {
      schema: [
        { name: 'name', selector: { text: {} } },
        { name: 'entity_power', selector: { entity: { domain: 'sensor' } } },
        { name: 'entity_active_power', selector: { entity: { domain: 'sensor', device_class: 'power' } } },
        { type: 'grid', name: '', schema: [
          { name: 'entity_power_l1', selector: { entity: { domain: 'sensor' } } },
          { name: 'entity_power_l2', selector: { entity: { domain: 'sensor' } } },
          { name: 'entity_power_l3', selector: { entity: { domain: 'sensor' } } },
        ] },
        { name: 'phase_gauge', selector: { select: { mode: 'dropdown', options: ['needles', 'cycle', 'max'] } }, default: 'needles' },
        { name: 'entity_hp', selector: { entity: { domain: 'sensor', device_class: 'energy' } } },
        { name: 'entity_hc', selector: { entity: { domain: 'sensor', device_class: 'energy' } } },
        { name: 'entity_tariff', selector: { entity: { domain: ['sensor', 'select'] } } },
        { name: 'entity_cost', selector: { entity: { domain: 'sensor' } } },
        { name: 'subscribed_power', selector: { number: { min: 3, max: 36, step: 1, mode: 'box', unit_of_measurement: 'kVA' } } },
        { name: 'hc_ranges', selector: { text: {} } },
        { type: 'grid', name: '', schema: [
          { name: 'show_gauge', selector: { boolean: {} }, default: true },
          { name: 'show_phases', selector: { boolean: {} }, default: true },
          { name: 'show_index', selector: { boolean: {} }, default: true },
          { name: 'show_tariff', selector: { boolean: {} }, default: true },
          { name: 'show_cost', selector: { boolean: {} }, default: true },
        ] },
        { name: 'language', selector: { select: { options: Object.keys(I18N_LINKY) } } },
      ],
    };
  }

  setConfig(config) {
    this._config = {
      show_gauge: true, show_phases: true, show_index: true, show_tariff: true, show_cost: true,
      phase_gauge: 'needles', subscribed_power: 9, hc_ranges: '', language: 'fr', ...config,
    };
    this._built = false;
    this._build();
  }

  set hass(hass) { this._hass = hass; this._update(); }
  getCardSize() { return 5; }
  _t(k) { return (I18N_LINKY[this._config.language] || I18N_LINKY.en)[k] ?? I18N_LINKY.en[k] ?? k; }

  connectedCallback() {
    // Défilement des pages de l'écran LCD toutes les 3 s (et des phases, en mode jauge « cycle »)
    this._timer = setInterval(() => {
      this._page = (this._page || 0) + 1; this._renderLcd();
      this._cycle = (this._cycle || 0) + 1;
      if (this._tri && this._config.phase_gauge === 'cycle') this._update();
      const b = this.shadowRoot && this.shadowRoot.getElementById('b2');
      if (b) { b.classList.add('press'); setTimeout(() => b.classList.remove('press'), 250); }
    }, 3000);
  }
  disconnectedCallback() { clearInterval(this._timer); }

  _build() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' });
    const ticks = Array.from({ length: 21 }, (_, i) => {
      const a = (-180 + i * 9) * Math.PI / 180, r1 = 78, r2 = i % 5 === 0 ? 68 : 72;
      return `<line x1="${100 + r1 * Math.cos(a)}" y1="${100 + r1 * Math.sin(a)}" x2="${100 + r2 * Math.cos(a)}" y2="${100 + r2 * Math.sin(a)}" stroke="#8a99a8" stroke-width="1.5"/>`;
    }).join('');
    this.shadowRoot.innerHTML = `
    <style>
      :host { display:block; }
      ha-card { padding:12px; }
      .title { font-weight:600; margin:0 4px 10px; }
      .wrap { display:flex; gap:14px; align-items:center; flex-wrap:wrap; justify-content:center; }
      /* Boîtier : coque vert anis, cadre blanc, écran LCD vert sombre, 2 boutons, croix en bas */
      .box { width:150px; background:linear-gradient(160deg,#d4ea35,#b5d11c); border-radius:10px; padding:16px 14px 14px;
        box-shadow:0 3px 10px rgba(0,0,0,.35), inset 0 0 0 2px rgba(255,255,255,.35); position:relative; }
      .eye { width:8px; height:8px; background:#1d2a05; border-radius:2px; margin:-6px auto 8px; }
      .bezel { background:linear-gradient(#f7f7f7,#dcdcdc); border-radius:12px; padding:10px 9px 8px; box-shadow:inset 0 0 0 1px #c9c9c9; }
      .lcd { background:#1f4d2a; border-radius:3px; padding:8px 6px; min-height:66px; text-align:center; position:relative; overflow:hidden;
        box-shadow:inset 0 0 8px rgba(0,0,0,.7); font-family:'Courier New',monospace; color:#b9f08a; display:flex; flex-direction:column; justify-content:center; }
      .lcd::after { content:''; position:absolute; inset:0; background:repeating-linear-gradient(0deg,rgba(0,0,0,.12) 0 1px,transparent 1px 3px); pointer-events:none; }
      .lcd .lab { font-size:.58em; letter-spacing:.08em; opacity:.85; }
      .lcd .val { font-size:1.25em; font-weight:700; text-shadow:0 0 6px rgba(185,240,138,.6); animation:fadein .5s; }
      .btns { display:flex; gap:6px; margin-top:8px; justify-content:center; }
      .btn { width:44px; height:12px; border-radius:3px; background:linear-gradient(#fff,#d2d2d2); border:1px solid #b0b0b0; cursor:pointer; padding:0; transition:transform .1s; }
      .btn:active, .btn.press { transform:translateY(1px); background:#c8c8c8; }
      .plus { text-align:center; font-size:20px; line-height:1; color:#3b4a08; margin-top:12px; font-weight:300; }
      .leds { display:flex; justify-content:center; gap:14px; margin-top:8px; font-size:.55em; letter-spacing:.06em; color:#3b4a08; }
      .led { width:9px; height:9px; border-radius:50%; background:#5a2a2a; margin:0 auto 2px; }
      .led.conso { background:#ff3b30; box-shadow:0 0 8px #ff3b30; animation:pulse var(--pulse,2s) infinite; }
      .led.hc { background:#ffb300; box-shadow:0 0 8px #ffb300; } .led.hp { background:#6b5a2a; }
      .gauge { flex:1; min-width:170px; max-width:260px; }
      .gauge svg { width:100%; display:block; }
      .arc-bg { fill:none; stroke:rgba(127,127,127,.25); stroke-width:12; stroke-linecap:round; }
      .arc { fill:none; stroke:var(--gc,#43a047); stroke-width:12; stroke-linecap:round; transition:stroke-dashoffset 1s ease, stroke .6s; }
      .needle { transform-origin:100px 100px; transition:transform 1s cubic-bezier(.3,1.4,.5,1); stroke:var(--primary-text-color,#223); stroke-width:3; stroke-linecap:round; }
      .gtxt { text-anchor:middle; font-size:15px; font-weight:700; fill:var(--primary-text-color,#223); }
      .gsub { text-align:center; font-size:.7em; opacity:.65; }
      .gact { text-align:center; font-size:.8em; font-weight:600; margin-top:2px; }
      /* Triphasé : une barre par phase, pleine à 1/3 de la puissance souscrite */
      .phases { margin-top:6px; display:grid; grid-template-columns:auto 1fr auto; gap:3px 6px; align-items:center; font-size:.7em; }
      .phases .bar { height:6px; border-radius:3px; background:rgba(127,127,127,.25); overflow:hidden; }
      .phases .bar i { display:block; height:100%; width:0; border-radius:3px; background:#43a047; transition:width 1s ease, background .6s; }
      .phases .pv { text-align:right; font-variant-numeric:tabular-nums; opacity:.8; }
      .phases .cur { font-weight:700; }
      .needle.pn { stroke-width:2.5; }
      .over .arc { animation:pulse .6s infinite; }
      .badge { text-align:center; font-size:.8em; font-weight:700; margin-top:4px; color:#e53935; display:none; }
      .over .badge { display:block; animation:pulse .6s infinite; }
      @keyframes pulse { 50% { opacity:.25 } }
      @keyframes fadein { from { opacity:0; transform:translateY(5px) } to { opacity:1; transform:none } }
    </style>
    <ha-card id="meter">
      <div class="title" id="name">${this._config.name || this._t('name')}</div>
      <div class="wrap">
        <div class="box">
          <div class="eye"></div>
          <div class="bezel">
            <div class="lcd"><div class="lab" id="lab"></div><div class="val" id="val"></div></div>
            <div class="btns"><button class="btn" id="b1" aria-label="-"></button><button class="btn" id="b2" aria-label="+"></button></div>
          </div>
          <div class="plus">+</div>
          <div class="leds"><div><div class="led conso" id="ledc"></div>${this._t('conso')}</div><div><div class="led hp" id="ledt"></div><span id="ledtl">HP</span></div></div>
        </div>
        <div class="gauge" id="gaugebox">
          <svg viewBox="0 0 200 120">
            <path class="arc-bg" d="M20 100 A80 80 0 0 1 180 100"/>
            <path class="arc" id="arc" d="M20 100 A80 80 0 0 1 180 100" stroke-dasharray="251.3" stroke-dashoffset="251.3"/>
            ${ticks}
            <line class="needle" id="needle" x1="100" y1="100" x2="100" y2="32" style="transform:rotate(-90deg)"/>
            ${PHASE_COLORS.map((col, i) => `<line class="needle pn" id="n${i + 1}" x1="100" y1="100" x2="100" y2="${32 + i * 8}" style="stroke:${col};transform:rotate(-90deg);display:none"/>`).join('')}
            <circle cx="100" cy="100" r="6" fill="var(--primary-text-color,#223)"/>
            <text class="gtxt" x="100" y="118" id="gtxt"></text>
          </svg>
          <div class="gsub" id="gsub"></div>
          <div class="gact" id="gact"></div>
          <div class="phases" id="phases">${[1, 2, 3].map((i) =>
            `<span id="phl${i}">L${i}</span><div class="bar"><i id="ph${i}"></i></div><span class="pv" id="phv${i}"></span>`).join('')}</div>
          <div class="badge">${this._t('alert')}</div>
        </div>
      </div>
    </ha-card>`;
    const flip = (d) => () => { this._page = (this._page || 0) + d; this._renderLcd(); };
    this.shadowRoot.getElementById('b1').onclick = flip(-1);
    this.shadowRoot.getElementById('b2').onclick = flip(1);
    this._built = true;
  }

  _num(id) {
    if (!id || !this._hass) return null;
    const s = this._hass.states[id];
    if (!s || ['unavailable', 'unknown'].includes(s.state)) return null;
    const n = parseFloat(s.state);
    return Number.isFinite(n) ? n : null;
  }

  // Puissance en W ou VA (kW / kVA convertis), avec l'unité du capteur
  _power(id) {
    const v = this._num(id);
    if (v === null) return null;
    const u = this._hass.states[id].attributes.unit_of_measurement || 'W';
    return { v: /^k/i.test(u) ? v * 1000 : v, unit: /va/i.test(u) ? 'VA' : 'W' };
  }

  // Heures creuses : entité tarif si fournie, sinon plages "HH:MM-HH:MM,..."
  _isHC() {
    const c = this._config;
    if (c.entity_tariff && this._hass.states[c.entity_tariff]) {
      return /hc|creuse|off|low/i.test(this._hass.states[c.entity_tariff].state);
    }
    const now = new Date(), m = now.getHours() * 60 + now.getMinutes();
    return String(c.hc_ranges).split(',').some((r) => {
      const [a, b] = r.trim().split('-'); if (!a || !b) return false;
      const f = (x) => { const [h, mi] = x.split(':').map(Number); return h * 60 + (mi || 0); };
      const s = f(a), e = f(b);
      return s <= e ? m >= s && m < e : m >= s || m < e;
    });
  }

  _renderLcd() {
    if (!this._built || !this._data) return;
    const d = this._data, c = this._config, pages = [];
    pages.push([this._t('power'), d.power === null ? '—' : `${Math.round(d.power)} ${d.unit}`]);
    if (c.entity_active_power) pages.push([this._t('active'), d.active === null ? '—' : `${Math.round(d.active.v)} ${d.active.unit}`]);
    if (c.show_index) {
      pages.push([this._t('hp'), d.hp === null ? '—' : `${Math.round(d.hp)} kWh`]);
      pages.push([this._t('hc'), d.hc === null ? '—' : `${Math.round(d.hc)} kWh`]);
    }
    if (c.show_tariff) pages.push([this._t('tariff'), d.hcNow ? 'HEURES CREUSES' : 'HEURES PLEINES']);
    if (c.show_cost && d.cost !== null) pages.push([this._t('cost'), `${d.cost.toFixed(2)} €`]);
    const p = pages[(this._page || 0) % pages.length];
    const lab = this.shadowRoot.getElementById('lab'), val = this.shadowRoot.getElementById('val');
    lab.textContent = p[0];
    // On ne relance le fondu que si la page affichée change (pas à chaque mise à jour d'état)
    const key = p[0];
    val.textContent = p[1];
    if (this._lastKey !== key) { this._lastKey = key; val.style.animation = 'none'; void val.offsetWidth; val.style.animation = ''; }
  }

  _update() {
    if (!this._built || !this._hass) return;
    const c = this._config, root = this.shadowRoot;
    const pState = c.entity_power && this._hass.states[c.entity_power];
    let unit = (pState && pState.attributes.unit_of_measurement) || 'W';
    let power = this._num(c.entity_power);
    const hp = this._num(c.entity_hp), hc = this._num(c.entity_hc);
    const hcNow = this._isHC();
    let cost = this._num(c.entity_cost);
    const active = this._power(c.entity_active_power);

    // Jauge : puissance (W ou VA, kW ou kVA) / puissance souscrite (kVA × 1000).
    // Le Linky donne la puissance apparente en VA : on garde l'unité du capteur.
    // En triphasé, il coupe phase par phase à 1/3 de la souscription. Selon phase_gauge :
    // « needles » une aiguille par phase, « cycle » L1 → L2 → L3 toutes les 3 s,
    // « max » la phase la plus chargée. L'alerte suit toujours la phase la plus chargée.
    const max = c.subscribed_power * 1000, phaseMax = max / 3;
    const phases = [c.entity_power_l1, c.entity_power_l2, c.entity_power_l3].map((id) => this._power(id));
    const tri = phases.some(Boolean), mode = ['cycle', 'max'].includes(c.phase_gauge) ? c.phase_gauge : 'needles';
    const pr = (p) => (p ? Math.min(p.v / phaseMax, 1) : 0);
    this._tri = tri;
    let ratio, alertRatio, gtxt, shown = -1;
    if (tri) {
      const worst = phases.reduce((w, p, i) => (p && (w < 0 || p.v > phases[w].v) ? i : w), -1);
      const avail = phases.map((p, i) => (p ? i : -1)).filter((i) => i >= 0);
      shown = mode === 'cycle' ? avail[(this._cycle || 0) % avail.length] : worst;
      ratio = pr(phases[shown]); alertRatio = pr(phases[worst]);
      gtxt = `L${shown + 1} · ${Math.round(phases[shown].v)} ${phases[shown].unit}`;
      if (power === null) { power = phases.reduce((s, p) => s + (p ? p.v : 0), 0); unit = phases[worst].unit; }
    } else {
      const gaugeUnit = /va/i.test(unit) ? 'VA' : 'W';
      const base = power === null ? 0 : (/^k/i.test(unit) ? power * 1000 : power);
      ratio = alertRatio = Math.min(base / max, 1);
      gtxt = power === null ? '—' : `${Math.round(base)} ${gaugeUnit}`;
    }
    this._data = { power, unit, active, hp, hc, hcNow, cost };
    const colorOf = (r) => (r > 0.9 ? '#e53935' : r > 0.65 ? '#fb8c00' : '#43a047');
    const needles = tri && mode === 'needles';
    root.getElementById('arc').style.strokeDashoffset = 251.3 * (1 - ratio);
    root.getElementById('needle').style.transform = `rotate(${-90 + ratio * 180}deg)`;
    root.getElementById('needle').style.display = needles ? 'none' : '';
    phases.forEach((p, i) => {
      const n = root.getElementById(`n${i + 1}`);
      n.style.display = needles && p ? '' : 'none';
      n.style.transform = `rotate(${-90 + pr(p) * 180}deg)`;
      const lab = root.getElementById(`phl${i + 1}`);
      lab.style.color = needles ? PHASE_COLORS[i] : '';
      lab.classList.toggle('cur', tri && mode === 'cycle' && i === shown);
    });
    root.getElementById('gaugebox').style.setProperty('--gc', colorOf(ratio));
    root.getElementById('gtxt').textContent = gtxt;
    root.getElementById('gsub').textContent = `${this._t('subscribed')} : ${c.subscribed_power} kVA`
      + (tri ? ` · ${+(c.subscribed_power / 3).toFixed(1)} kVA ${this._t('per_phase')}` : '');
    const gact = root.getElementById('gact');
    gact.textContent = active ? `${this._t('active_short')} : ${Math.round(active.v)} ${active.unit}` : '';
    gact.style.display = active ? '' : 'none';
    root.getElementById('phases').style.display = tri && c.show_phases ? '' : 'none';
    phases.forEach((p, i) => {
      const r = p ? Math.min(p.v / phaseMax, 1) : 0, bar = root.getElementById(`ph${i + 1}`);
      bar.style.width = `${(r * 100).toFixed(1)}%`;
      bar.style.background = colorOf(r);
      root.getElementById(`phv${i + 1}`).textContent = p ? `${Math.round(p.v)} ${p.unit}` : '—';
    });
    root.getElementById('gaugebox').style.display = c.show_gauge ? '' : 'none';
    root.getElementById('meter').classList.toggle('over', alertRatio > 0.95);

    // LED conso : clignote plus vite quand la puissance monte (2 s → 0.25 s)
    root.getElementById('ledc').style.setProperty('--pulse', `${(2 - alertRatio * 1.75).toFixed(2)}s`);
    const ledt = root.getElementById('ledt');
    ledt.className = `led ${hcNow ? 'hc' : 'hp'}`;
    root.getElementById('ledtl').textContent = hcNow ? 'HC' : 'HP';
    this._renderLcd();
  }
}

define('appliance-linky-card', ApplianceLinkyCard);
window.customCards = window.customCards || [];
window.customCards.push({ type: 'appliance-linky-card', name: 'Linky Card', description: 'Compteur Linky animé : LCD, jauge, index HP/HC', preview: false });
})();

/* ================================================================== */
/* appliance-battery-card.js                                        */
/* ================================================================== */
(() => {
"use strict";
const define = (tag, cls) => { if (!customElements.get(tag)) customElements.define(tag, cls); };
window.customCards = window.customCards || [];
/* appliance-battery-card — batterie de stockage solaire animée (niveau liquide, flux charge/décharge)
 * type: custom:appliance-battery-card
 */
const I18N_BAT = {
  "en": {
    "name": "Solar battery",
    "soc": "Charge",
    "power": "Power",
    "energy": "Energy",
    "temp": "Temperature",
    "charging": "Charging",
    "discharging": "Discharging",
    "idle": "Idle",
    "full": "Full in",
    "empty": "Empty in",
    "low": "Low battery"
  },
  "de": {
    "name": "Solarbatterie",
    "soc": "Ladestand",
    "power": "Leistung",
    "energy": "Energie",
    "temp": "Temperatur",
    "charging": "Lädt",
    "discharging": "Entlädt",
    "idle": "Ruhe",
    "full": "Voll in",
    "empty": "Leer in",
    "low": "Batterie schwach"
  },
  "fr": {
    "name": "Batterie solaire",
    "soc": "Charge",
    "power": "Puissance",
    "energy": "Énergie",
    "temp": "Température",
    "charging": "En charge",
    "discharging": "En décharge",
    "idle": "Repos",
    "full": "Plein dans",
    "empty": "Vide dans",
    "low": "Batterie faible"
  },
  "nb": {
    "name": "Solbatteri",
    "soc": "Ladning",
    "power": "Effekt",
    "energy": "Energi",
    "temp": "Temperatur",
    "charging": "Lader",
    "discharging": "Utlader",
    "idle": "Inaktiv",
    "full": "Full om",
    "empty": "Tom om",
    "low": "Lavt batteri"
  }
};

class ApplianceBatteryCard extends HTMLElement {
  static getStubConfig() { return { entity_soc: '', entity_power: '', entity_energy: '', entity_temperature: '', capacity_kwh: 10, max_power: 5000 }; }

  static getConfigForm() {
    return {
      schema: [
        { name: 'name', selector: { text: {} } },
        { name: 'entity_soc', selector: { entity: { domain: 'sensor', device_class: 'battery' } } },
        { name: 'entity_power', selector: { entity: { domain: 'sensor', device_class: 'power' } } },
        { name: 'invert_power', selector: { boolean: {} } },
        { name: 'entity_energy', selector: { entity: { domain: 'sensor', device_class: 'energy' } } },
        { name: 'entity_temperature', selector: { entity: { domain: 'sensor', device_class: 'temperature' } } },
        { type: 'grid', name: '', schema: [
          { name: 'capacity_kwh', selector: { number: { min: 1, max: 100, step: 0.1, mode: 'box', unit_of_measurement: 'kWh' } } },
          { name: 'max_power', selector: { number: { min: 500, max: 20000, step: 100, mode: 'box', unit_of_measurement: 'W' } } },
          { name: 'low_threshold', selector: { number: { min: 0, max: 50, step: 1, mode: 'box', unit_of_measurement: '%' } } },
        ] },
        { type: 'grid', name: '', schema: [
          { name: 'show_power', selector: { boolean: {} }, default: true },
          { name: 'show_energy', selector: { boolean: {} }, default: true },
          { name: 'show_temperature', selector: { boolean: {} }, default: true },
          { name: 'show_time', selector: { boolean: {} }, default: true },
        ] },
        { name: 'language', selector: { select: { options: Object.keys(I18N_BAT) } } },
      ],
    };
  }

  setConfig(config) {
    // Convention : puissance > 0 = charge (inverser avec invert_power si ton capteur est l'inverse)
    this._config = { show_power: true, show_energy: true, show_temperature: true, show_time: true,
      capacity_kwh: 10, max_power: 5000, low_threshold: 15, invert_power: false, language: 'fr', ...config };
    this._built = false; this._build();
  }
  set hass(h) { this._hass = h; this._update(); }
  getCardSize() { return 5; }
  _t(k) { return (I18N_BAT[this._config.language] || I18N_BAT.en)[k] ?? I18N_BAT.en[k] ?? k; }

  _build() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' });
    // 3 modules façon photo : corps blanc nervuré, couvercle noir, étiquette, câbles orange
    const X = [24, 112, 200], TOP = 40, LID = 22, BODY = 98, W = 80, D = 14;
    const mod = (x0, i) => {
      const ribs = Array.from({ length: 9 }, (_, k) => `<line x1="${x0 + 44 + k * 4}" y1="${TOP + LID + 4}" x2="${x0 + 44 + k * 4}" y2="${TOP + LID + BODY - 4}" stroke="#d9dde1" stroke-width="1"/>`).join('');
      return `
      <g class="mod">
        <polygon points="${x0 + W},${TOP + LID} ${x0 + W + D},${TOP + LID - D} ${x0 + W + D},${TOP + LID + BODY - D} ${x0 + W},${TOP + LID + BODY}" fill="#c9ced3"/>
        <polygon points="${x0 + W},${TOP} ${x0 + W + D},${TOP - D} ${x0 + W + D},${TOP + LID - D} ${x0 + W},${TOP + LID}" fill="#0d0d0d"/>
        <polygon points="${x0},${TOP} ${x0 + D},${TOP - D} ${x0 + W + D},${TOP - D} ${x0 + W},${TOP}" fill="#2a2a2a"/>
        <polygon points="${x0 + 36},${TOP - 4} ${x0 + 42},${TOP - 10} ${x0 + 72},${TOP - 10} ${x0 + 66},${TOP - 4}" fill="#f2f2f2"/>
        <rect x="${x0}" y="${TOP}" width="${W}" height="${LID}" rx="3" fill="#161616"/>
        <rect x="${x0 + 8}" y="${TOP + 7}" width="20" height="6" rx="3" fill="#000"/>
        <circle class="led" cx="${x0 + W - 10}" cy="${TOP + 11}" r="3" style="animation-delay:${i * 0.3}s"/>
        <rect x="${x0}" y="${TOP + LID}" width="${W}" height="${BODY}" fill="url(#body)"/>
        ${ribs}
        <g clip-path="url(#c${i})">
          <rect class="liquid" id="liq${i}" x="${x0}" y="${TOP + LID + BODY}" width="${W}" height="0"/>
          <path class="wave" id="wave${i}" d="M${x0 - 20} 0 q 10 -6 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0 v 10 h-120z" style="animation-delay:${-i * 0.7}s"/>
        </g>
        <circle cx="${x0 + 6}" cy="${TOP + LID + BODY - 6}" r="2" fill="#9aa3ad"/>
      </g>`;
    };
    const clips = X.map((x, i) => `<clipPath id="c${i}"><rect x="${x}" y="${TOP + LID}" width="${W}" height="${BODY}"/></clipPath>`).join('');
    // Câbles orange entre bornes (dessus des couvercles) + câble de sortie
    const cab = (x1, x2) => `M${x1} ${TOP - 6} C ${x1} ${TOP - 30}, ${x2} ${TOP - 30}, ${x2} ${TOP - 6}`;
    const cables = [cab(46, 128), cab(134, 216), `M${X[2] + W + 8} ${TOP - 6} C ${X[2] + W + 30} ${TOP - 20}, ${X[2] + W + 26} ${TOP + 60}, ${X[2] + W + 22} ${TOP + 110}`];
    this.shadowRoot.innerHTML = `
    <style>
      :host { display:block; }
      ha-card { padding:12px; overflow:hidden; }
      .title { font-weight:600; margin:0 4px 4px; display:flex; justify-content:space-between; align-items:center; }
      .badge { font-size:.75em; color:#fff; background:#e53935; border-radius:10px; padding:2px 8px; display:none; animation:blink 1s infinite; }
      .low .badge { display:inline-block; }
      svg { width:100%; height:auto; display:block; overflow:visible; }
      .liquid { fill:var(--lc,#43a047); opacity:.35; transition:y 1.2s ease, height 1.2s ease, fill .8s; }
      .wave { fill:var(--lc,#43a047); opacity:.45; animation:wave 2.6s ease-in-out infinite alternate; transition:fill .8s; }
      .led { fill:var(--lc,#43a047); animation:blink var(--bl,2s) infinite; filter:drop-shadow(0 0 3px var(--lc,#43a047)); }
      .cable { fill:none; stroke:#ff7a1a; stroke-width:5; stroke-linecap:round; }
      .cable-b { fill:none; stroke:#111; stroke-width:8; stroke-linecap:round; }
      .flow { fill:none; stroke-width:2.5; stroke-linecap:round; stroke-dasharray:2 9; opacity:0; }
      .charging .flow { stroke:#fff6a0; opacity:1; animation:dash var(--fs,1s) linear infinite reverse; }
      .discharging .flow { stroke:#b3f5ff; opacity:1; animation:dash var(--fs,1s) linear infinite; }
      .soc { fill:#1d2733; font:800 26px system-ui,sans-serif; text-anchor:middle; }
      .state { fill:#4b5563; font:700 7.5px system-ui,sans-serif; text-anchor:middle; letter-spacing:.12em; }
      .bolt { fill:#ffb300; opacity:0; } .charging .bolt { opacity:1; animation:blink 1.2s infinite; }
      .arrow { fill:#00acc1; opacity:0; } .discharging .arrow { opacity:1; animation:blink 1.2s infinite; }
      .stats { display:grid; grid-template-columns:repeat(auto-fit,minmax(78px,1fr)); gap:8px; margin-top:6px; }
      .stat { text-align:center; background:var(--secondary-background-color, rgba(127,127,127,.12)); border-radius:10px; padding:6px 4px; }
      .stat .v { font-weight:700; font-size:1.05em; } .stat .l { font-size:.7em; opacity:.65; text-transform:uppercase; letter-spacing:.04em; }
      @keyframes dash { to { stroke-dashoffset:-11; } } @keyframes blink { 50% { opacity:.35; } }
      @keyframes wave { from { transform:translate(-12px, var(--wy,0px)); } to { transform:translate(8px, var(--wy,0px)); } }
    </style>
    <ha-card id="card">
      <div class="title"><span>${this._config.name || this._t('name')}</span><span class="badge">${this._t('low')}</span></div>
      <svg viewBox="0 -6 320 176" id="svg">
        <defs>
          <linearGradient id="body" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#f7f8f9"/><stop offset="1" stop-color="#e3e6e9"/></linearGradient>
          ${clips}
        </defs>
        ${[2, 1, 0].map((i) => mod(X[i], i)).join('')}
        ${cables.map((d) => `<path class="cable-b" d="${d}"/><path class="cable" d="${d}"/><path class="flow" d="${d}"/>`).join('')}
        <text class="state" id="state" x="${X[1] + W / 2}" y="${TOP + LID + 20}"></text>
        <text class="soc" id="soc" x="${X[1] + W / 2}" y="${TOP + LID + 52}"></text>
        <path class="bolt" d="M${X[1] + 44} ${TOP + LID + 60} l-9 13 h6 l-3 11 l9 -13 h-6 z"/>
        <path class="arrow" d="M${X[1] + 40} ${TOP + LID + 84} l-7 -9 h4 v-9 h6 v9 h4 z"/>
      </svg>
      <div class="stats" id="stats"></div>
    </ha-card>`;
    this._built = true;
  }

  _num(id) {
    if (!id || !this._hass) return null;
    const s = this._hass.states[id];
    if (!s || ['unavailable', 'unknown'].includes(s.state)) return null;
    const n = parseFloat(s.state); return Number.isFinite(n) ? n : null;
  }

  _update() {
    if (!this._built || !this._hass) return;
    const c = this._config, r = this.shadowRoot;
    const soc = this._num(c.entity_soc), energy = this._num(c.entity_energy), temp = this._num(c.entity_temperature);
    let p = this._num(c.entity_power); if (p !== null && c.invert_power) p = -p;
    const pct = soc === null ? 0 : Math.max(0, Math.min(100, soc));
    // Remplissage des 3 modules (corps : y 62 → 160)
    const h = 98 * pct / 100;
    [0, 1, 2].forEach((i) => {
      const liq = r.getElementById(`liq${i}`); liq.setAttribute('y', 160 - h); liq.setAttribute('height', h);
      r.getElementById(`wave${i}`).style.setProperty('--wy', `${160 - h - 5}px`);
    });
    r.getElementById('soc').textContent = soc === null ? '—' : `${Math.round(pct)}%`;
    const color = pct <= c.low_threshold ? '#e53935' : pct <= 40 ? '#fb8c00' : '#43a047';
    const svg = r.getElementById('svg'); svg.style.setProperty('--lc', color);
    const mode = p === null || Math.abs(p) < 10 ? 'idle' : p > 0 ? 'charging' : 'discharging';
    svg.classList.remove('charging', 'discharging', 'idle'); svg.classList.add(mode);
    r.getElementById('state').textContent = this._t(mode).toUpperCase();
    const ratio = Math.min(Math.abs(p || 0) / c.max_power, 1);
    svg.style.setProperty('--fs', `${(1.4 - ratio * 1.1).toFixed(2)}s`);
    svg.style.setProperty('--bl', mode === 'idle' ? '3s' : '1s');
    r.getElementById('card').classList.toggle('low', soc !== null && pct <= c.low_threshold);

    // Temps restant avant plein / vide
    let time = null;
    if (c.show_time && p !== null && Math.abs(p) >= 10 && c.capacity_kwh) {
      const kwh = p > 0 ? c.capacity_kwh * (100 - pct) / 100 : c.capacity_kwh * pct / 100;
      const hrs = kwh * 1000 / Math.abs(p);
      time = `${p > 0 ? this._t('full') : this._t('empty')} ${Math.floor(hrs)}h${String(Math.round((hrs % 1) * 60)).padStart(2, '0')}`;
    }
    const f = (v, d, u) => (v === null ? '—' : `${v.toFixed(d)} ${u}`);
    const it = [];
    if (c.show_power) it.push([this._t('power'), f(p === null ? null : Math.abs(p), 0, 'W')]);
    if (c.show_energy) it.push([this._t('energy'), f(energy !== null ? energy : (soc === null ? null : c.capacity_kwh * pct / 100), 1, 'kWh')]);
    if (c.show_temperature) it.push([this._t('temp'), f(temp, 0, '°C')]);
    if (time) it.push(['⏱', time]);
    r.getElementById('stats').innerHTML = it.map(([l, v]) => `<div class="stat"><div class="v">${v}</div><div class="l">${l}</div></div>`).join('');
  }
}
define('appliance-battery-card', ApplianceBatteryCard);
window.customCards = window.customCards || [];
window.customCards.push({ type: 'appliance-battery-card', name: 'Solar Battery Card', description: 'Batterie de stockage solaire animée', preview: false });
})();

/* ================================================================== */
/* appliance-ev-charger-card.js                                     */
/* ================================================================== */
(() => {
"use strict";
const define = (tag, cls) => { if (!customElements.get(tag)) customElements.define(tag, cls); };
window.customCards = window.customCards || [];
/* appliance-ev-charger-card — wallbox murale + voiture branchée, animée
 * type: custom:appliance-ev-charger-card
 */
const I18N_EV = {
  "en": {
    "name": "EV charger",
    "power": "Power",
    "energy": "Session",
    "soc": "Battery",
    "status": "Status",
    "duration": "Duration",
    "cost": "Cost",
    "charging": "Charging",
    "plugged": "Plugged in",
    "done": "Complete",
    "disconnected": "Unplugged"
  },
  "de": {
    "name": "Wallbox",
    "power": "Leistung",
    "energy": "Ladevorgang",
    "soc": "Akku",
    "status": "Status",
    "duration": "Dauer",
    "cost": "Kosten",
    "charging": "Lädt",
    "plugged": "Eingesteckt",
    "done": "Fertig",
    "disconnected": "Nicht verbunden"
  },
  "fr": {
    "name": "Borne de recharge",
    "power": "Puissance",
    "energy": "Session",
    "soc": "Batterie",
    "status": "Statut",
    "duration": "Durée",
    "cost": "Coût",
    "charging": "En charge",
    "plugged": "Branchée",
    "done": "Terminée",
    "disconnected": "Débranchée"
  },
  "nb": {
    "name": "Elbillader",
    "power": "Effekt",
    "energy": "Økt",
    "soc": "Batteri",
    "status": "Status",
    "duration": "Varighet",
    "cost": "Kostnad",
    "charging": "Lader",
    "plugged": "Tilkoblet",
    "done": "Ferdig",
    "disconnected": "Frakoblet"
  }
};

class ApplianceEvChargerCard extends HTMLElement {
  static getStubConfig() { return { entity_power: '', entity_session_energy: '', entity_car_soc: '', entity_status: '', max_power: 7400, price_per_kwh: 0.2 }; }

  static getConfigForm() {
    return {
      schema: [
        { name: 'name', selector: { text: {} } },
        { name: 'entity_power', selector: { entity: { domain: 'sensor', device_class: 'power' } } },
        { name: 'entity_session_energy', selector: { entity: { domain: 'sensor', device_class: 'energy' } } },
        { name: 'entity_car_soc', selector: { entity: { domain: 'sensor' } } },
        { name: 'entity_status', selector: { entity: { domain: ['sensor', 'binary_sensor', 'select'] } } },
        { name: 'entity_cost', selector: { entity: { domain: 'sensor' } } },
        { type: 'grid', name: '', schema: [
          { name: 'max_power', selector: { number: { min: 1000, max: 22000, step: 100, mode: 'box', unit_of_measurement: 'W' } } },
          { name: 'price_per_kwh', selector: { number: { min: 0, max: 2, step: 0.0001, mode: 'box' } } },
          { name: 'car_color', selector: { text: {} } },
        ] },
        { type: 'grid', name: '', schema: [
          { name: 'show_power', selector: { boolean: {} }, default: true },
          { name: 'show_energy', selector: { boolean: {} }, default: true },
          { name: 'show_soc', selector: { boolean: {} }, default: true },
          { name: 'show_status', selector: { boolean: {} }, default: true },
          { name: 'show_duration', selector: { boolean: {} }, default: true },
          { name: 'show_cost', selector: { boolean: {} }, default: true },
        ] },
        { name: 'language', selector: { select: { options: Object.keys(I18N_EV) } } },
      ],
    };
  }

  setConfig(config) {
    this._config = { show_power: true, show_energy: true, show_soc: true, show_status: true, show_duration: true, show_cost: true,
      max_power: 7400, price_per_kwh: 0.2, car_color: '#3d6fb6', language: 'fr', ...config };
    this._built = false; this._build();
  }
  set hass(h) { this._hass = h; this._update(); }
  getCardSize() { return 5; }
  connectedCallback() { this._timer = setInterval(() => this._update(), 30000); } // rafraîchit la durée
  disconnectedCallback() { clearInterval(this._timer); }
  _t(k) { return (I18N_EV[this._config.language] || I18N_EV.en)[k] ?? I18N_EV.en[k] ?? k; }

  _build() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' });
    const car = this._config.car_color;
    const cable = 'M44 112 C 44 168, 112 170, 134 118';
    this.shadowRoot.innerHTML = `
    <style>
      :host { display:block; }
      ha-card { padding:12px; overflow:hidden; }
      .title { font-weight:600; margin:0 4px 4px; }
      svg { width:100%; height:auto; display:block; overflow:visible; }
      .ledbar { fill:var(--st,#9e9e9e); filter:drop-shadow(0 0 4px var(--st,#9e9e9e)); transition:fill .6s; }
      .charging .ledbar { animation:breathe var(--sp,2s) ease-in-out infinite; }
      .scr { fill:#0c1a24; } .scrtxt { fill:#7fe0ff; font:700 8px 'Courier New',monospace; text-anchor:middle; }
      .cable { fill:none; stroke:#1b1b1b; stroke-width:6; stroke-linecap:round; }
      .flow { fill:none; stroke:#7cff9b; stroke-width:2.6; stroke-linecap:round; stroke-dasharray:2 9; opacity:0; }
      .charging .flow { opacity:1; animation:dash var(--sp,1s) linear infinite; }
      .plugged-cable { transition:opacity .6s; } .disconnected .plugged-cable { opacity:0; }
      .hang { opacity:0; transition:opacity .6s; } .disconnected .hang { opacity:1; }
      .spark { fill:#fff59d; opacity:0; } .charging .spark { animation:spark 1.2s ease-in-out infinite; }
      .gfill { fill:var(--gc,#43a047); transition:width 1.2s ease, fill .6s; }
      .charging .gfill { animation:breathe 2s ease-in-out infinite; }
      .gtxt { fill:#fff; font:800 10px system-ui,sans-serif; text-anchor:middle; text-shadow:0 1px 2px rgba(0,0,0,.6); }
      .stats { display:grid; grid-template-columns:repeat(auto-fit,minmax(78px,1fr)); gap:8px; margin-top:6px; }
      .stat { text-align:center; background:var(--secondary-background-color, rgba(127,127,127,.12)); border-radius:10px; padding:6px 4px; }
      .stat .v { font-weight:700; font-size:1.05em; } .stat .l { font-size:.7em; opacity:.65; text-transform:uppercase; letter-spacing:.04em; }
      @keyframes dash { to { stroke-dashoffset:-11; } }
      @keyframes breathe { 50% { opacity:.45; } }
      @keyframes spark { 0%,100% { opacity:0; transform:scale(.6); } 50% { opacity:1; transform:scale(1.1); } }
    </style>
    <ha-card>
      <div class="title">${this._config.name || this._t('name')}</div>
      <svg viewBox="0 0 340 172" id="svg">
        <defs>
          <linearGradient id="wb" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#40454d"/><stop offset="1" stop-color="#16191d"/></linearGradient>
          <linearGradient id="carb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${car}"/><stop offset="1" stop-color="${car}" stop-opacity=".75"/></linearGradient>
          <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#9fc3dc"/><stop offset="1" stop-color="#2d4456"/></linearGradient>
        </defs>

        <!-- Wallbox -->
        <rect x="12" y="6" width="64" height="106" rx="14" fill="url(#wb)"/>
        <rect x="18" y="12" width="52" height="94" rx="10" fill="#2c3036" stroke="rgba(255,255,255,.08)"/>
        <rect class="ledbar" x="41" y="22" width="6" height="44" rx="3"/>
        <rect class="scr" x="25" y="76" width="38" height="16" rx="3"/>
        <text class="scrtxt" x="44" y="87" id="scr"></text>
        <rect x="36" y="104" width="16" height="10" rx="3" fill="#111"/>
        <!-- Câble rangé (débranché) -->
        <path class="hang cable" d="M44 112 C 44 150, 92 150, 84 110"/>
        <rect class="hang" x="78" y="96" width="12" height="16" rx="3" fill="#2a2a2a"/>

        <!-- Voiture de profil (avant à droite) -->
        <ellipse cx="228" cy="160" rx="108" ry="5" fill="rgba(0,0,0,.18)"/>
        <path d="M122 142 L122 120 Q124 108 142 104 L180 99 Q200 78 236 75 L272 75 Q300 77 318 98 L328 102 Q338 106 338 122 L338 142 Z" fill="url(#carb)"/>
        <path d="M188 99 Q206 82 236 80 L250 80 L250 99 Z" fill="url(#glass)"/>
        <path d="M256 80 L272 80 Q294 82 308 99 L256 99 Z" fill="url(#glass)"/>
        <rect x="251" y="80" width="4" height="20" fill="${car}"/>
        <path d="M200 104 V138 M256 104 V138" stroke="rgba(0,0,0,.25)" stroke-width="1"/>
        <rect x="236" y="108" width="10" height="2.5" rx="1" fill="rgba(0,0,0,.35)"/><rect x="292" y="108" width="10" height="2.5" rx="1" fill="rgba(0,0,0,.35)"/>
        <path d="M330 106 l6 2 v6 l-7 -1 z" fill="#fff6c2"/><rect x="122" y="108" width="5" height="8" rx="1" fill="#e53935"/>
        <rect x="122" y="132" width="216" height="6" fill="rgba(0,0,0,.25)"/>
        ${[160, 300].map((x) => `<g><circle cx="${x}" cy="142" r="17" fill="#141414"/><circle cx="${x}" cy="142" r="9" fill="#9aa3ad"/><circle cx="${x}" cy="142" r="3" fill="#555"/></g>`).join('')}
        <!-- Trappe de recharge -->
        <rect x="130" y="112" width="10" height="10" rx="2" fill="#1d1d1d"/>
        <!-- Jauge batterie voiture sur la portière -->
        <g id="gauge">
          <rect x="205" y="110" width="80" height="20" rx="5" fill="rgba(0,0,0,.45)" stroke="rgba(255,255,255,.85)" stroke-width="1.5"/>
          <rect x="285" y="116" width="4" height="8" rx="1.5" fill="rgba(255,255,255,.85)"/>
          <rect class="gfill" id="gfill" x="208" y="113" width="0" height="14" rx="3"/>
          <text class="gtxt" x="245" y="124" id="gtxt"></text>
        </g>

        <!-- Câble branché + flux -->
        <g class="plugged-cable">
          <path class="cable" d="${cable}"/>
          <path class="flow" d="${cable}"/>
          <rect x="128" y="111" width="12" height="12" rx="3" fill="#2a2a2a"/>
          <g transform="translate(134 117)"><path class="spark" d="M0 -9 L2 -2 L9 0 L2 2 L0 9 L-2 2 L-9 0 L-2 -2 Z" style="transform-box:fill-box;transform-origin:center"/></g>
        </g>
      </svg>
      <div class="stats" id="stats"></div>
    </ha-card>`;
    this._built = true;
  }

  _num(id) {
    if (!id || !this._hass) return null;
    const s = this._hass.states[id];
    if (!s || ['unavailable', 'unknown'].includes(s.state)) return null;
    const n = parseFloat(s.state); return Number.isFinite(n) ? n : null;
  }

  // Statut : depuis l'entité si fournie (mots-clés FR/EN), sinon déduit de la puissance
  _status(watts) {
    const c = this._config, s = c.entity_status && this._hass.states[c.entity_status];
    if (s) {
      const v = String(s.state).toLowerCase();
      if (/charg(ing|e)\b|en charge|charging/.test(v) && !/dis|termin|complete/.test(v)) return 'charging';
      if (/complete|finish|termin|full|plein|done/.test(v)) return 'done';
      if (/connect|plug|branch|on|wait|attente|ready|prêt/.test(v) && !/disconnect|déconnect|débranch|unplug/.test(v)) return watts > 50 ? 'charging' : 'plugged';
      return 'disconnected';
    }
    return watts > 50 ? 'charging' : 'plugged';
  }

  _update() {
    if (!this._built || !this._hass) return;
    const c = this._config, r = this.shadowRoot;
    const ps = c.entity_power && this._hass.states[c.entity_power];
    let w = this._num(c.entity_power);
    if (w !== null && ps && /kw/i.test(ps.attributes.unit_of_measurement || '')) w *= 1000;
    const energy = this._num(c.entity_session_energy), soc = this._num(c.entity_car_soc);
    let cost = this._num(c.entity_cost);
    if (cost === null && energy !== null && c.price_per_kwh) cost = energy * c.price_per_kwh;
    const st = this._status(w || 0);

    const svg = r.getElementById('svg');
    svg.classList.remove('charging', 'plugged', 'done', 'disconnected'); svg.classList.add(st);
    const colors = { charging: '#43ff64', plugged: '#3fa9ff', done: '#43a047', disconnected: '#d0d0d0' };
    svg.style.setProperty('--st', colors[st]);
    const ratio = Math.min((w || 0) / c.max_power, 1);
    svg.style.setProperty('--sp', `${(1.6 - ratio * 1.2).toFixed(2)}s`);
    r.getElementById('scr').textContent = st === 'charging' ? `${((w || 0) / 1000).toFixed(1)} kW` : this._t(st).toUpperCase().slice(0, 9);

    // Jauge voiture
    const pct = soc === null ? 0 : Math.max(0, Math.min(100, soc));
    r.getElementById('gfill').setAttribute('width', (74 * pct / 100).toFixed(1));
    r.getElementById('gauge').style.display = soc === null ? 'none' : '';
    svg.style.setProperty('--gc', pct < 20 ? '#e53935' : pct < 50 ? '#fb8c00' : '#43a047');
    r.getElementById('gtxt').textContent = soc === null ? '' : `${Math.round(pct)}%`;

    // Durée depuis le dernier changement d'état (statut, sinon puissance)
    let dur = null;
    const ref = (c.entity_status && this._hass.states[c.entity_status]) || ps;
    if (st === 'charging' && ref && ref.last_changed) {
      const m = Math.max(0, Math.round((Date.now() - new Date(ref.last_changed).getTime()) / 60000));
      dur = `${Math.floor(m / 60)}h${String(m % 60).padStart(2, '0')}`;
    }

    const f = (v, d, u) => (v === null ? '—' : `${v.toFixed(d)} ${u}`);
    const it = [];
    if (c.show_power) it.push([this._t('power'), w === null ? '—' : w >= 1000 ? `${(w / 1000).toFixed(1)} kW` : `${Math.round(w)} W`]);
    if (c.show_energy) it.push([this._t('energy'), f(energy, 1, 'kWh')]);
    if (c.show_soc && soc !== null) it.push([this._t('soc'), f(soc, 0, '%')]);
    if (c.show_status) it.push([this._t('status'), this._t(st)]);
    if (c.show_duration) it.push([this._t('duration'), dur || '—']);
    if (c.show_cost) it.push([this._t('cost'), f(cost, 2, '€')]);
    // 5-6 valeurs → 2 lignes équilibrées
    r.getElementById('stats').style.gridTemplateColumns = `repeat(${it.length > 4 ? Math.ceil(it.length / 2) : it.length}, 1fr)`;
    r.getElementById('stats').innerHTML = it.map(([l, v]) => `<div class="stat"><div class="v">${v}</div><div class="l">${l}</div></div>`).join('');
  }
}
define('appliance-ev-charger-card', ApplianceEvChargerCard);
window.customCards = window.customCards || [];
window.customCards.push({ type: 'appliance-ev-charger-card', name: 'EV Charger Card', description: 'Wallbox murale animée avec voiture branchée', preview: false });
})();

/* ================================================================== */
/* appliance-robot-vacuum-card.js                                   */
/* ================================================================== */
(() => {
"use strict";
const define = (tag, cls) => { if (!customElements.get(tag)) customElements.define(tag, cls); };
window.customCards = window.customCards || [];
/* appliance-robot-vacuum-card — robot aspirateur + station de vidage, animé, avec commandes
 * type: custom:appliance-robot-vacuum-card
 */
const I18N_VAC = {
  "en": {
    "name": "Robot vacuum",
    "battery": "Battery",
    "area": "Area",
    "time": "Time",
    "fan": "Suction",
    "status": "Status",
    "filter": "Filter",
    "brush": "Brush",
    "start": "Start",
    "pause": "Pause",
    "dock": "Dock",
    "cleaning": "Cleaning",
    "docked": "Docked",
    "charging": "Charging",
    "returning": "Returning",
    "paused": "Paused",
    "idle": "Idle",
    "error": "Error",
    "emptying": "Emptying"
  },
  "de": {
    "name": "Saugroboter",
    "battery": "Akku",
    "area": "Fläche",
    "time": "Dauer",
    "fan": "Saugleistung",
    "status": "Status",
    "filter": "Filter",
    "brush": "Bürste",
    "start": "Start",
    "pause": "Pause",
    "dock": "Station",
    "cleaning": "Reinigt",
    "docked": "In der Station",
    "charging": "Lädt",
    "returning": "Kehrt zurück",
    "paused": "Pausiert",
    "idle": "Inaktiv",
    "error": "Fehler",
    "emptying": "Entleert"
  },
  "fr": {
    "name": "Robot aspirateur",
    "battery": "Batterie",
    "area": "Surface",
    "time": "Durée",
    "fan": "Aspiration",
    "status": "Statut",
    "filter": "Filtre",
    "brush": "Brosse",
    "start": "Démarrer",
    "pause": "Pause",
    "dock": "Base",
    "cleaning": "Nettoyage",
    "docked": "À la base",
    "charging": "En charge",
    "returning": "Retour base",
    "paused": "En pause",
    "idle": "Inactif",
    "error": "Erreur",
    "emptying": "Vidage"
  },
  "nb": {
    "name": "Robotstøvsuger",
    "battery": "Batteri",
    "area": "Areal",
    "time": "Tid",
    "fan": "Sugeeffekt",
    "status": "Status",
    "filter": "Filter",
    "brush": "Børste",
    "start": "Start",
    "pause": "Pause",
    "dock": "Til lader",
    "cleaning": "Rengjør",
    "docked": "I laderen",
    "charging": "Lader",
    "returning": "På vei hjem",
    "paused": "Pause",
    "idle": "Inaktiv",
    "error": "Feil",
    "emptying": "Tømmer"
  }
};
const ICONS_VAC = {
  start: '<path d="M8 5v14l11-7z"/>',
  pause: '<path d="M6 5h4v14H6zM14 5h4v14h-4z"/>',
  dock: '<path d="M12 3 2 12h3v8h5v-6h4v6h5v-8h3z"/>',
};

// Logique commune (états, services, stats) — le dessin est dans la carte « seule » ci-dessous
class ApplianceRobotVacuumCard extends HTMLElement {
  static getStubConfig() { return { entity: '' }; }

  static getConfigForm() {
    return {
      schema: [
        { name: 'entity', required: true, selector: { entity: { domain: 'vacuum' } } },
        { name: 'name', selector: { text: {} } },
        { name: 'entity_battery', selector: { entity: { domain: 'sensor', device_class: 'battery' } } },
        { name: 'entity_area', selector: { entity: { domain: 'sensor' } } },
        { name: 'entity_time', selector: { entity: { domain: 'sensor' } } },
        { name: 'entity_status', selector: { entity: { domain: 'sensor' } } },
        { name: 'entity_filter', selector: { entity: { domain: 'sensor' } } },
        { name: 'entity_brush', selector: { entity: { domain: 'sensor' } } },
        { type: 'grid', name: '', schema: [
          { name: 'show_battery', selector: { boolean: {} }, default: true },
          { name: 'show_area', selector: { boolean: {} }, default: true },
          { name: 'show_time', selector: { boolean: {} }, default: true },
          { name: 'show_fan', selector: { boolean: {} }, default: true },
          { name: 'show_status', selector: { boolean: {} }, default: true },
          { name: 'show_consumables', selector: { boolean: {} }, default: true },
          { name: 'show_buttons', selector: { boolean: {} }, default: true },
        ] },
        { name: 'language', selector: { select: { options: Object.keys(I18N_VAC) } } },
      ],
    };
  }

  setConfig(config) {
    if (!config.entity) throw new Error('entity (vacuum.xxx) requise');
    this._config = { show_battery: true, show_area: true, show_time: true, show_fan: true, show_status: true,
      show_consumables: true, show_buttons: true, language: 'fr', ...config };
    this._built = false; this._build();
  }
  set hass(h) { this._hass = h; this._update(); }
  getCardSize() { return 6; }
  _t(k) { return (I18N_VAC[this._config.language] || I18N_VAC.en)[k] ?? I18N_VAC.en[k] ?? k; }

  _call(action) {
    if (!this._hass) return;
    const svc = { start: 'start', pause: 'pause', dock: 'return_to_base' }[action];
    this._hass.callService('vacuum', svc, { entity_id: this._config.entity });
  }

  _st(id) { return id && this._hass && this._hass.states[id]; }
  _num(id) {
    const s = this._st(id); if (!s || ['unavailable', 'unknown'].includes(s.state)) return null;
    const n = parseFloat(s.state); return Number.isFinite(n) ? n : null;
  }

  _update() {
    if (!this._built || !this._hass) return;
    const c = this._config, r = this.shadowRoot, e = this._st(c.entity);
    if (!e) return;
    const a = e.attributes || {};
    const status = String((this._st(c.entity_status) || {}).state || a.status || '').toLowerCase();
    let st = ['cleaning', 'docked', 'returning', 'paused', 'idle', 'error'].includes(e.state) ? e.state : 'idle';
    if (st === 'docked' && /charg/.test(status)) st = 'charging';
    const emptying = /empt|vidage|evacu|self.?clean/.test(status);

    const svg = r.getElementById('svg');
    const prev = this._lastSt;
    svg.setAttribute('class', `${st}${emptying ? ' emptying' : ''}${st === 'charging' ? ' docked' : ''}`);
    r.getElementById('card').classList.toggle('error', st === 'error');
    r.getElementById('err').textContent = st === 'error' ? (a.error || this._t('error')) : '';
    this._lastSt = st;

    // Boutons : met en évidence l'action correspondant à l'état
    const active = { cleaning: 'start', paused: 'pause', returning: 'dock', docked: 'dock', charging: 'dock' }[st];
    r.querySelectorAll('.btn').forEach((b) => b.classList.toggle('on', b.dataset.a === active));
    r.getElementById('btns').style.display = c.show_buttons ? '' : 'none';

    const batt = this._num(c.entity_battery) ?? (a.battery_level ?? null);
    const area = this._num(c.entity_area), time = this._num(c.entity_time);
    const it = [];
    if (c.show_battery) it.push([this._t('battery'), batt === null ? '—' : `${Math.round(batt)} %`]);
    if (c.show_status) it.push([this._t('status'), this._t(emptying ? 'emptying' : st)]);
    if (c.show_area) it.push([this._t('area'), area === null ? '—' : `${Math.round(area)} m²`]);
    if (c.show_time) it.push([this._t('time'), time === null ? '—' : `${Math.round(time)} min`]);
    if (c.show_fan && a.fan_speed) it.push([this._t('fan'), String(a.fan_speed)]);
    if (c.show_consumables) {
      const fl = this._num(c.entity_filter), br = this._num(c.entity_brush);
      if (fl !== null) it.push([this._t('filter'), `${Math.round(fl)} %`]);
      if (br !== null) it.push([this._t('brush'), `${Math.round(br)} %`]);
    }
    const stats = r.getElementById('stats');
    stats.style.gridTemplateColumns = `repeat(${it.length > 4 ? Math.ceil(it.length / 2) : it.length}, 1fr)`;
    stats.innerHTML = it.map(([l, v]) => `<div class="stat"><div class="v">${v}</div><div class="l">${l}</div></div>`).join('');
  }
}
window.customCards = window.customCards || [];

/* ───────────────────────────────────────────────────────────────
 * Variante « robot seul » : pas de fond, pas de station, animation sur place
 * type: custom:appliance-robot-vacuum-solo-card  (mêmes options que la carte complète)
 * ─────────────────────────────────────────────────────────────── */
const COMMON_CSS_VAC = `
  :host { display:block; }
  ha-card { padding:12px; overflow:hidden; }
  .title { font-weight:600; margin:0 4px 4px; display:flex; justify-content:space-between; align-items:center; }
  .badge { font-size:.75em; color:#fff; background:#e53935; border-radius:10px; padding:2px 8px; display:none; animation:blink 1s infinite; }
  .error .badge { display:inline-block; }
  svg { width:100%; height:auto; display:block; overflow:visible; }
  .btns { display:flex; gap:8px; margin-top:8px; }
  .btn { flex:1; display:flex; align-items:center; justify-content:center; gap:6px; border:none; cursor:pointer; border-radius:999px; padding:8px 6px;
    background:var(--secondary-background-color, rgba(127,127,127,.15)); color:var(--primary-text-color,#222); font:600 .85em system-ui,sans-serif; transition:transform .1s, background .2s; }
  .btn:active { transform:scale(.95); } .btn svg { width:18px; height:18px; fill:currentColor; }
  .btn.on { background:var(--primary-color,#03a9f4); color:#fff; }
  .stats { display:grid; gap:8px; margin-top:8px; }
  .stat { text-align:center; background:var(--secondary-background-color, rgba(127,127,127,.12)); border-radius:10px; padding:6px 4px; }
  .stat .v { font-weight:700; font-size:1.02em; } .stat .l { font-size:.7em; opacity:.65; text-transform:uppercase; letter-spacing:.04em; }
  @keyframes blink { 50% { opacity:.3 } } @keyframes breathe { 50% { opacity:.4 } }`;

class ApplianceRobotVacuumSoloCard extends ApplianceRobotVacuumCard {
  _build() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' });
    const brush = (x) => `<g transform="translate(${x} 113)"><g class="brush">
      ${[0, 120, 240].map((a) => `<line x1="0" y1="0" x2="17" y2="0" transform="rotate(${a}) scale(1 .35)" stroke="#6b7178" stroke-width="2.4" stroke-linecap="round"/>`).join('')}
      <circle r="3" fill="#30343a"/></g></g>`;
    const dust = Array.from({ length: 12 }, (_, i) =>
      `<circle class="dust" cx="${70 + (i * 37) % 100}" cy="${132 + (i % 3) * 3}" r="${1.2 + (i % 3) * .5}" style="animation-delay:${(i * .17) % 1.4}s"/>`).join('');
    this.shadowRoot.innerHTML = `
    <style>${COMMON_CSS_VAC}
      .bot { transform-origin:120px 100px; }
      .cleaning .bot { animation:wiggle 2.4s ease-in-out infinite; }
      .returning .bot { animation:wiggle 1.6s ease-in-out infinite; }
      .error .bot { animation:shake .4s ease-in-out infinite; }
      .brush { transform:rotate(0); } .cleaning .brush { animation:spin .3s linear infinite; } .returning .brush { animation:spin 1s linear infinite; }
      .dust { fill:#9a9a9a; opacity:0; } .cleaning .dust { animation:suck 1.4s ease-in infinite; }
      .scan { fill:#7fe0ff; opacity:.0; } .cleaning .scan, .returning .scan { opacity:.9; animation:scan 1.2s linear infinite; }
      .track { fill:none; stroke:rgba(0,0,0,.12); stroke-width:3.5; }
      .ring { fill:none; stroke:var(--rc,#43a047); stroke-width:3.5; stroke-linecap:round; transition:stroke-dasharray 1s ease, stroke .6s;
        filter:drop-shadow(0 0 3px var(--rc,#43a047)); }
      .charging .ring, .docked .ring { animation:breathe 2.4s ease-in-out infinite; }
      .paused .ring { stroke:#ffb300; animation:blink 1s infinite; } .error .ring { stroke:#ff3b30; animation:blink .5s infinite; }
      .ico { opacity:0; transition:opacity .4s; }
      .charging .bolt, .docked .bolt { opacity:1; animation:breathe 1.6s ease-in-out infinite; }
      .returning .home { opacity:1; animation:hop 1s ease-in-out infinite; }
      .paused .pz { opacity:1; }
      @keyframes wiggle { 0%,100% { transform:translateX(0) rotate(0) } 25% { transform:translateX(-6px) rotate(-1.5deg) } 75% { transform:translateX(6px) rotate(1.5deg) } }
      @keyframes shake { 0%,100% { transform:rotate(0) } 25% { transform:rotate(-2deg) } 75% { transform:rotate(2deg) } }
      @keyframes spin { to { transform:rotate(360deg) } }
      @keyframes suck { 0% { opacity:0; transform:translateY(0) } 30% { opacity:.9 } 100% { opacity:0; transform:translateY(-20px) scale(.4) } }
      @keyframes scan { from { transform:translateX(0) } to { transform:translateX(18px) } }
      @keyframes hop { 50% { transform:translateY(-4px) } }
    </style>
    <ha-card id="card">
      <div class="title"><span>${this._config.name || this._t('name')}</span><span class="badge" id="err"></span></div>
      <svg viewBox="0 0 240 142" id="svg">
        <defs>
          <linearGradient id="top" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#d3d8dd"/></linearGradient>
          <linearGradient id="side" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b9bfc5"/><stop offset="1" stop-color="#868d94"/></linearGradient>
        </defs>
        ${dust}
        <g class="bot">
          <ellipse cx="120" cy="122" rx="96" ry="11" fill="rgba(0,0,0,.25)"/>
          ${brush(64)}${brush(176)}
          <path d="M30 78 V96 Q30 120 120 120 Q210 120 210 96 V78 Z" fill="url(#side)"/>
          <path d="M34 92 Q40 116 120 117 Q200 116 206 92 V100 Q200 121 120 121 Q40 121 34 100 Z" fill="#2b2f35"/>
          <ellipse cx="120" cy="78" rx="90" ry="30" fill="url(#top)"/>
          <ellipse class="track" cx="120" cy="80" rx="74" ry="23"/>
          <ellipse class="ring" id="ring" cx="120" cy="80" rx="74" ry="23" pathLength="100" stroke-dasharray="0 100" transform="rotate(180 120 80)"/>
          <circle cx="104" cy="94" r="3.5" fill="#cfd4d9" stroke="#b5bbc1"/><circle cx="136" cy="94" r="3.5" fill="#cfd4d9" stroke="#b5bbc1"/>
          <rect x="102" y="54" width="36" height="18" rx="9" fill="#2b2f35"/>
          <ellipse cx="120" cy="55" rx="18" ry="5.5" fill="#4a4f56"/>
          <rect x="108" y="62" width="24" height="4" rx="2" fill="#111"/>
          <rect class="scan" x="108" y="62" width="6" height="4" rx="2"/>
        </g>
        <path class="ico bolt" d="M206 8 l-10 16 h7 l-3 13 l11 -17 h-7 z" fill="#ffd43b"/>
        <path class="ico home" d="M206 10 l-12 11 h4 v10 h6 v-7 h4 v7 h6 v-10 h4 z" fill="#3fa9ff"/>
        <path class="ico pz" d="M198 12 h5 v18 h-5z M208 12 h5 v18 h-5z" fill="#ffb300"/>
      </svg>
      <div class="btns" id="btns">
        ${['start', 'pause', 'dock'].map((a) => `<button class="btn" data-a="${a}"><svg viewBox="0 0 24 24">${ICONS_VAC[a]}</svg>${this._t(a)}</button>`).join('')}
      </div>
      <div class="stats" id="stats"></div>
    </ha-card>`;
    this.shadowRoot.querySelectorAll('.btn').forEach((b) => { b.onclick = () => this._call(b.dataset.a); });
    this._built = true;
  }

  _update() {
    super._update();
    if (!this._built || !this._hass) return;
    const e = this._st(this._config.entity); if (!e) return;
    // Anneau lumineux = niveau de batterie
    const b = this._num(this._config.entity_battery) ?? (e.attributes.battery_level ?? null);
    const pct = b === null ? 100 : Math.max(0, Math.min(100, b));
    const ring = this.shadowRoot.getElementById('ring');
    ring.setAttribute('stroke-dasharray', `${pct} 100`);
    this.shadowRoot.getElementById('svg').style.setProperty('--rc', pct < 20 ? '#e53935' : pct < 50 ? '#fb8c00' : '#43a047');
  }
}
define('appliance-robot-vacuum-solo-card', ApplianceRobotVacuumSoloCard);
window.customCards.push({ type: 'appliance-robot-vacuum-solo-card', name: 'Robot Vacuum Solo Card', description: 'Robot aspirateur seul (sans fond ni station), animé, avec commandes', preview: false });
})();

/* ================================================================== */
/* appliance-robot-mower-card.js                                    */
/* ================================================================== */
(() => {
"use strict";
const define = (tag, cls) => { if (!customElements.get(tag)) customElements.define(tag, cls); };
window.customCards = window.customCards || [];
/* appliance-robot-mower-card — robot tondeuse + station sur bande de pelouse, animé, avec commandes
 * type: custom:appliance-robot-mower-card
 * Compatible lawn_mower.* (recommandé) et vacuum.* (certaines intégrations de tondeuses)
 */
const I18N_MOW = {
  "en": {
    "name": "Robot mower",
    "battery": "Battery",
    "area": "Area",
    "time": "Mowing",
    "next": "Next start",
    "status": "Status",
    "blade": "Blade",
    "rain": "Rain",
    "start": "Mow",
    "pause": "Pause",
    "dock": "Dock",
    "mowing": "Mowing",
    "docked": "Docked",
    "charging": "Charging",
    "returning": "Returning",
    "paused": "Paused",
    "idle": "Idle",
    "error": "Error"
  },
  "de": {
    "name": "Mähroboter",
    "battery": "Akku",
    "area": "Fläche",
    "time": "Mähzeit",
    "next": "Nächster Start",
    "status": "Status",
    "blade": "Messer",
    "rain": "Regen",
    "start": "Mähen",
    "pause": "Pause",
    "dock": "Station",
    "mowing": "Mäht",
    "docked": "In der Station",
    "charging": "Lädt",
    "returning": "Kehrt zurück",
    "paused": "Pausiert",
    "idle": "Inaktiv",
    "error": "Fehler"
  },
  "fr": {
    "name": "Robot tondeuse",
    "battery": "Batterie",
    "area": "Surface",
    "time": "Tonte",
    "next": "Prochain départ",
    "status": "Statut",
    "blade": "Lame",
    "rain": "Pluie",
    "start": "Tondre",
    "pause": "Pause",
    "dock": "Base",
    "mowing": "Tonte",
    "docked": "À la base",
    "charging": "En charge",
    "returning": "Retour base",
    "paused": "En pause",
    "idle": "Inactif",
    "error": "Erreur"
  },
  "nb": {
    "name": "Robotgressklipper",
    "battery": "Batteri",
    "area": "Areal",
    "time": "Klipping",
    "next": "Neste start",
    "status": "Status",
    "blade": "Kniver",
    "rain": "Regn",
    "start": "Klipp",
    "pause": "Pause",
    "dock": "Til lader",
    "mowing": "Klipper",
    "docked": "I laderen",
    "charging": "Lader",
    "returning": "På vei hjem",
    "paused": "Pause",
    "idle": "Inaktiv",
    "error": "Feil"
  }
};
const ICONS_MOW = {
  start: '<path d="M8 5v14l11-7z"/>',
  pause: '<path d="M6 5h4v14H6zM14 5h4v14h-4z"/>',
  dock: '<path d="M12 3 2 12h3v8h5v-6h4v6h5v-8h3z"/>',
};

// Logique commune (états, services, stats) — le dessin est dans la carte « seule » ci-dessous
class ApplianceRobotMowerCard extends HTMLElement {
  static getStubConfig() { return { entity: '' }; }

  static getConfigForm() {
    return {
      schema: [
        { name: 'entity', required: true, selector: { entity: { domain: ['lawn_mower', 'vacuum'] } } },
        { name: 'name', selector: { text: {} } },
        { name: 'entity_battery', selector: { entity: { domain: 'sensor', device_class: 'battery' } } },
        { name: 'entity_area', selector: { entity: { domain: 'sensor' } } },
        { name: 'entity_time', selector: { entity: { domain: 'sensor' } } },
        { name: 'entity_next_start', selector: { entity: { domain: 'sensor' } } },
        { name: 'entity_blade', selector: { entity: { domain: 'sensor' } } },
        { name: 'entity_rain', selector: { entity: { domain: ['binary_sensor', 'sensor'] } } },
        { name: 'entity_status', selector: { entity: { domain: 'sensor' } } },
        { type: 'grid', name: '', schema: [
          { name: 'show_battery', selector: { boolean: {} }, default: true },
          { name: 'show_area', selector: { boolean: {} }, default: true },
          { name: 'show_time', selector: { boolean: {} }, default: true },
          { name: 'show_next', selector: { boolean: {} }, default: true },
          { name: 'show_status', selector: { boolean: {} }, default: true },
          { name: 'show_blade', selector: { boolean: {} }, default: true },
          { name: 'show_buttons', selector: { boolean: {} }, default: true },
        ] },
        { name: 'language', selector: { select: { options: Object.keys(I18N_MOW) } } },
      ],
    };
  }

  setConfig(config) {
    if (!config.entity) throw new Error('entity (lawn_mower.xxx) requise');
    this._config = { show_battery: true, show_area: true, show_time: true, show_next: true, show_status: true,
      show_blade: true, show_buttons: true, language: 'fr', ...config };
    this._built = false; this._build();
  }
  set hass(h) { this._hass = h; this._update(); }
  getCardSize() { return 6; }
  _t(k) { return (I18N_MOW[this._config.language] || I18N_MOW.en)[k] ?? I18N_MOW.en[k] ?? k; }

  _call(action) {
    if (!this._hass) return;
    const domain = this._config.entity.split('.')[0];
    const map = domain === 'vacuum'
      ? { start: 'start', pause: 'pause', dock: 'return_to_base' }
      : { start: 'start_mowing', pause: 'pause', dock: 'dock' };
    this._hass.callService(domain, map[action], { entity_id: this._config.entity });
  }

  _st(id) { return id && this._hass && this._hass.states[id]; }
  _num(id) {
    const s = this._st(id); if (!s || ['unavailable', 'unknown'].includes(s.state)) return null;
    const n = parseFloat(s.state); return Number.isFinite(n) ? n : null;
  }

  _update() {
    if (!this._built || !this._hass) return;
    const c = this._config, r = this.shadowRoot, e = this._st(c.entity);
    if (!e) return;
    const a = e.attributes || {};
    const status = String((this._st(c.entity_status) || {}).state || a.status || '').toLowerCase();
    let st = e.state === 'cleaning' ? 'mowing' : e.state;
    if (!['mowing', 'docked', 'returning', 'paused', 'idle', 'error'].includes(st)) st = 'idle';
    if (st === 'docked' && /charg/.test(status)) st = 'charging';
    const rainS = this._st(c.entity_rain);
    const raining = !!rainS && (rainS.state === 'on' || /rain|pluie|wet/i.test(rainS.state));

    r.getElementById('svg').setAttribute('class', `${st}${st === 'charging' ? ' docked' : ''}${raining ? ' raining' : ''}`);
    r.getElementById('card').classList.toggle('error', st === 'error');
    r.getElementById('err').textContent = st === 'error' ? (a.error || this._t('error')) : '';

    const active = { mowing: 'start', paused: 'pause', returning: 'dock', docked: 'dock', charging: 'dock' }[st];
    r.querySelectorAll('.btn').forEach((b) => b.classList.toggle('on', b.dataset.a === active));
    r.getElementById('btns').style.display = c.show_buttons ? '' : 'none';

    const batt = this._num(c.entity_battery) ?? (a.battery_level ?? null);
    const area = this._num(c.entity_area), time = this._num(c.entity_time), blade = this._num(c.entity_blade);
    // Prochain départ : timestamp → "ven. 14:30", sinon texte brut
    let next = null; const ns = this._st(c.entity_next_start);
    if (ns && !['unavailable', 'unknown'].includes(ns.state)) {
      const d = new Date(ns.state);
      next = isNaN(d) ? ns.state : d.toLocaleString(c.language === 'en' ? 'en-GB' : 'fr-FR', { weekday: 'short', hour: '2-digit', minute: '2-digit' });
    }
    const it = [];
    if (c.show_battery) it.push([this._t('battery'), batt === null ? '—' : `${Math.round(batt)} %`]);
    if (c.show_status) it.push([this._t('status'), raining && st !== 'mowing' ? `${this._t(st)} · ${this._t('rain')}` : this._t(st)]);
    if (c.show_area && area !== null) it.push([this._t('area'), `${Math.round(area)} m²`]);
    if (c.show_time && time !== null) it.push([this._t('time'), time >= 60 ? `${Math.floor(time / 60)}h${String(Math.round(time % 60)).padStart(2, '0')}` : `${Math.round(time)} min`]);
    if (c.show_next && next) it.push([this._t('next'), next]);
    if (c.show_blade && blade !== null) it.push([this._t('blade'), `${Math.round(blade)} %`]);
    const stats = r.getElementById('stats');
    stats.style.gridTemplateColumns = `repeat(${it.length > 4 ? Math.ceil(it.length / 2) : it.length}, 1fr)`;
    stats.innerHTML = it.map(([l, v]) => `<div class="stat"><div class="v">${v}</div><div class="l">${l}</div></div>`).join('');
  }
}
window.customCards = window.customCards || [];

/* ───────────────────────────────────────────────────────────────
 * Variante « tondeuse seule » : pas de fond, pas de station, pas de pelouse
 * type: custom:appliance-robot-mower-solo-card  (mêmes options que la carte complète)
 * ─────────────────────────────────────────────────────────────── */
class ApplianceRobotMowerSoloCard extends ApplianceRobotMowerCard {
  _build() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' });
    const wheel = (x, y, rr) => `<g transform="translate(${x} ${y})"><circle r="${rr}" fill="#1b1b1b"/>
      <g class="spin">${[0, 45, 90, 135].map((a) => `<rect x="${-rr}" y="-.7" width="${rr * 2}" height="1.4" fill="#2e2e2e" transform="rotate(${a})"/>`).join('')}
      <circle r="${rr * .55}" fill="#8d959c"/><path d="M${-rr * .55} 0 H${rr * .55} M0 ${-rr * .55} V${rr * .55}" stroke="#4a4f55" stroke-width="1.2"/></g></g>`;
    const clips = Array.from({ length: 10 }, (_, i) =>
      `<path class="clip" d="M${36 + (i % 4) * 2} ${-3 - (i % 3) * 2} l2 -3" stroke="${i % 2 ? '#6cc457' : '#3f9d35'}" style="animation-delay:${i * .11}s"/>`).join('');
    const rain = Array.from({ length: 18 }, (_, i) =>
      `<line class="drop" x1="${14 + (i * 13) % 212}" y1="${-10 - (i * 9) % 30}" x2="${12 + (i * 13) % 212}" y2="${-2 - (i * 9) % 30}" style="animation-delay:${(i * .13) % 1}s"/>`).join('');
    this.shadowRoot.innerHTML = `
    <style>${COMMON_CSS_MOW}
      .body { animation:none; } .mowing .body { animation:bounce .35s ease-in-out infinite alternate; }
      .error .body { animation:shake .4s ease-in-out infinite; transform-origin:0 -10px; }
      .spin { transform:rotate(0); } .mowing .spin, .returning .spin { animation:spin .6s linear infinite; }
      .blade { fill:none; stroke:#9aa1a8; stroke-width:.8; stroke-dasharray:2 2; opacity:.35; }
      .mowing .blade { opacity:.9; animation:bladespin .12s linear infinite; }
      .clip { fill:none; stroke-width:1.4; stroke-linecap:round; opacity:0; transform-box:fill-box; transform-origin:center; } .mowing .clip { animation:fly .8s ease-out infinite; }
      .speed { stroke:var(--primary-text-color,#888); stroke-width:1; stroke-linecap:round; opacity:0; }
      .mowing .speed, .returning .speed { animation:streak .7s linear infinite; }
      .led { fill:#9e9e9e; } .mowing .led { fill:#43ff64; animation:blink 1.4s infinite; }
      .docked .led, .charging .led { fill:#43ff64; animation:breathe 2.4s ease-in-out infinite; }
      .returning .led { fill:#3fa9ff; } .paused .led { fill:#ffb300; animation:blink 1s infinite; } .error .led { fill:#ff3b30; animation:blink .5s infinite; }
      .rain { display:none; } .raining .rain { display:inline; }
      .drop { stroke:#7fb8ff; stroke-width:1.4; stroke-linecap:round; animation:fall 1s linear infinite; }
      .ico { opacity:0; transition:opacity .4s; }
      .charging .bolt, .docked .bolt { opacity:1; animation:breathe 1.6s ease-in-out infinite; }
      .returning .home { opacity:1; animation:hop 1s ease-in-out infinite; } .paused .pz { opacity:1; }
      @keyframes bounce { to { transform:translateY(-.6px) } }
      @keyframes shake { 0%,100% { transform:rotate(0) } 25% { transform:rotate(-2deg) } 75% { transform:rotate(2deg) } }
      @keyframes spin { to { transform:rotate(-360deg) } }
      @keyframes bladespin { to { stroke-dashoffset:6 } }
      @keyframes fly { 0% { opacity:0; transform:translate(0,0) } 25% { opacity:1 } 100% { opacity:0; transform:translate(14px,-10px) rotate(160deg) } }
      @keyframes streak { 0% { opacity:0; transform:translateX(0) } 30% { opacity:.5 } 100% { opacity:0; transform:translateX(14px) } }
      @keyframes fall { from { transform:translateY(0) } to { transform:translateY(140px) } }
      @keyframes hop { 50% { transform:translateY(-4px) } }
    </style>
    <ha-card id="card">
      <div class="title"><span>${this._config.name || this._t('name')}</span><span class="badge" id="err"></span></div>
      <svg viewBox="0 0 240 132" id="svg">
        <defs><linearGradient id="shell" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6f7f8"/><stop offset="1" stop-color="#b8bec4"/></linearGradient></defs>
        <g class="rain">${rain}</g>
        <g transform="translate(112 120) scale(2.05)">
          <ellipse cx="2" cy="1" rx="40" ry="3" fill="rgba(0,0,0,.25)"/>
          <g>${[[42, -14], [46, -8], [40, -20]].map(([x, y], i) => `<line class="speed" x1="${x}" y1="${y}" x2="${x + 8}" y2="${y}" style="animation-delay:${i * .2}s"/>`).join('')}</g>
          ${clips}
          <g class="body">
            <ellipse class="blade" cx="0" cy="-4" rx="14" ry="1.2"/>
            <path d="M-34 -6 Q-36 -22 -16 -27 L16 -28 Q34 -27 37 -12 L37 -6 Z" fill="url(#shell)"/>
            <path d="M-30 -18 Q-26 -26 -12 -27 L14 -28 Q28 -27 32 -18 Z" fill="#8bc34a"/>
            <path d="M-30 -18 H32" stroke="rgba(0,0,0,.12)" stroke-width=".6"/>
            <rect x="-36" y="-10" width="10" height="5" rx="2" fill="#30343a"/>
            <rect x="-6" y="-31" width="16" height="4" rx="2" fill="#30343a"/><circle cx="12" cy="-29" r="1.6" fill="#e53935"/>
            <path d="M8 -31 V-42" stroke="#30343a" stroke-width="1.6"/><circle cx="8" cy="-43" r="2.4" fill="#30343a"/>
            <circle class="led" cx="-14" cy="-23" r="1.8"/>
          </g>
          ${wheel(22, -9, 10)}${wheel(-24, -5, 5.5)}
        </g>
        <path class="ico bolt" d="M214 6 l-10 16 h7 l-3 13 l11 -17 h-7 z" fill="#ffd43b"/>
        <path class="ico home" d="M214 8 l-12 11 h4 v10 h6 v-7 h4 v7 h6 v-10 h4 z" fill="#3fa9ff"/>
        <path class="ico pz" d="M206 10 h5 v18 h-5z M216 10 h5 v18 h-5z" fill="#ffb300"/>
      </svg>
      <div class="btns" id="btns">
        ${['start', 'pause', 'dock'].map((a) => `<button class="btn" data-a="${a}"><svg viewBox="0 0 24 24">${ICONS_MOW[a]}</svg>${this._t(a)}</button>`).join('')}
      </div>
      <div class="stats" id="stats"></div>
    </ha-card>`;
    this.shadowRoot.querySelectorAll('.btn').forEach((b) => { b.onclick = () => this._call(b.dataset.a); });
    this._built = true;
  }
}
const COMMON_CSS_MOW = `
  :host { display:block; }
  ha-card { padding:12px; overflow:hidden; }
  .title { font-weight:600; margin:0 4px 4px; display:flex; justify-content:space-between; align-items:center; }
  .badge { font-size:.75em; color:#fff; background:#e53935; border-radius:10px; padding:2px 8px; display:none; animation:blink 1s infinite; }
  .error .badge { display:inline-block; }
  svg { width:100%; height:auto; display:block; overflow:visible; }
  .btns { display:flex; gap:8px; margin-top:8px; }
  .btn { flex:1; display:flex; align-items:center; justify-content:center; gap:6px; border:none; cursor:pointer; border-radius:999px; padding:8px 6px;
    background:var(--secondary-background-color, rgba(127,127,127,.15)); color:var(--primary-text-color,#222); font:600 .85em system-ui,sans-serif; transition:transform .1s, background .2s; }
  .btn:active { transform:scale(.95); } .btn svg { width:18px; height:18px; fill:currentColor; }
  .btn.on { background:var(--primary-color,#43a047); color:#fff; }
  .stats { display:grid; gap:8px; margin-top:8px; }
  .stat { text-align:center; background:var(--secondary-background-color, rgba(127,127,127,.12)); border-radius:10px; padding:6px 4px; }
  .stat .v { font-weight:700; font-size:1.02em; } .stat .l { font-size:.7em; opacity:.65; text-transform:uppercase; letter-spacing:.04em; }
  @keyframes blink { 50% { opacity:.3 } } @keyframes breathe { 50% { opacity:.4 } }`;
define('appliance-robot-mower-solo-card', ApplianceRobotMowerSoloCard);
window.customCards.push({ type: 'appliance-robot-mower-solo-card', name: 'Robot Mower Solo Card', description: 'Robot tondeuse seule (sans fond ni station), animée, avec commandes', preview: false });
})();

/* ================================================================== */
/* appliance-pellet-boiler-card.js                                  */
/* ================================================================== */
(() => {
"use strict";
const define = (tag, cls) => { if (!customElements.get(tag)) customElements.define(tag, cls); };
window.customCards = window.customCards || [];
/* appliance-pellet-boiler-card — chaudière à granulés + trémie + vis sans fin, sans fond, animée
 * type: custom:appliance-pellet-boiler-card
 */
const I18N_PB = {
  "en": {
    "name": "Pellet boiler",
    "power": "Power",
    "energy": "Energy",
    "cost": "Cost",
    "flow": "Flow",
    "ret": "Return",
    "pellets": "Pellets",
    "status": "Status",
    "off": "Off",
    "ignition": "Igniting",
    "heating": "Heating",
    "extinguishing": "Shutting down",
    "alarm": "Alarm",
    "low": "Low pellets"
  },
  "de": {
    "name": "Pelletkessel",
    "power": "Leistung",
    "energy": "Energie",
    "cost": "Kosten",
    "flow": "Vorlauf",
    "ret": "Rücklauf",
    "pellets": "Pellets",
    "status": "Status",
    "off": "Aus",
    "ignition": "Zündung",
    "heating": "Heizt",
    "extinguishing": "Abschaltung",
    "alarm": "Alarm",
    "low": "Pellets niedrig"
  },
  "fr": {
    "name": "Chaudière à granulés",
    "power": "Puissance",
    "energy": "Énergie",
    "cost": "Coût",
    "flow": "Départ",
    "ret": "Retour",
    "pellets": "Granulés",
    "status": "Statut",
    "off": "Arrêt",
    "ignition": "Allumage",
    "heating": "Chauffe",
    "extinguishing": "Extinction",
    "alarm": "Alarme",
    "low": "Granulés bas"
  },
  "nb": {
    "name": "Pelletskjel",
    "power": "Effekt",
    "energy": "Energi",
    "cost": "Kostnad",
    "flow": "Tur",
    "ret": "Retur",
    "pellets": "Pellets",
    "status": "Status",
    "off": "Av",
    "ignition": "Tenner",
    "heating": "Varmer",
    "extinguishing": "Slukker",
    "alarm": "Alarm",
    "low": "Lite pellets"
  }
};

class AppliancePelletBoilerCard extends HTMLElement {
  static getStubConfig() { return { entity_power: '', entity_flow_temp: '', entity_return_temp: '', entity_pellet_level: '' }; }

  static getConfigForm() {
    return {
      schema: [
        { name: 'name', selector: { text: {} } },
        { name: 'entity_status', selector: { entity: { domain: ['sensor', 'select', 'climate', 'switch', 'binary_sensor'] } } },
        { name: 'entity_power', selector: { entity: { domain: 'sensor', device_class: 'power' } } },
        { name: 'entity_energy', selector: { entity: { domain: 'sensor', device_class: 'energy' } } },
        { name: 'entity_cost', selector: { entity: { domain: 'sensor' } } },
        { name: 'entity_flow_temp', selector: { entity: { domain: 'sensor', device_class: 'temperature' } } },
        { name: 'entity_return_temp', selector: { entity: { domain: 'sensor', device_class: 'temperature' } } },
        { name: 'entity_pellet_level', selector: { entity: { domain: 'sensor' } } },
        { type: 'grid', name: '', schema: [
          { name: 'price_per_kwh', selector: { number: { min: 0, max: 2, step: 0.0001, mode: 'box' } } },
          { name: 'threshold', selector: { number: { min: 0, max: 500, step: 1, mode: 'box', unit_of_measurement: 'W' } } },
          { name: 'ignition_threshold', selector: { number: { min: 50, max: 2000, step: 10, mode: 'box', unit_of_measurement: 'W' } } },
          { name: 'pellet_alert', selector: { number: { min: 0, max: 50, step: 1, mode: 'box', unit_of_measurement: '%' } } },
          { name: 'flow_temp_max', selector: { number: { min: 40, max: 95, step: 1, mode: 'box', unit_of_measurement: '°C' } } },
        ] },
        { type: 'grid', name: '', schema: [
          { name: 'show_power', selector: { boolean: {} }, default: true },
          { name: 'show_energy', selector: { boolean: {} }, default: true },
          { name: 'show_cost', selector: { boolean: {} }, default: true },
          { name: 'show_temps', selector: { boolean: {} }, default: true },
          { name: 'show_pellets', selector: { boolean: {} }, default: true },
          { name: 'show_status', selector: { boolean: {} }, default: true },
        ] },
        { name: 'language', selector: { select: { options: Object.keys(I18N_PB) } } },
      ],
    };
  }

  setConfig(config) {
    this._config = { show_power: true, show_energy: true, show_cost: true, show_temps: true, show_pellets: true, show_status: true,
      price_per_kwh: 0, threshold: 30, ignition_threshold: 300, pellet_alert: 15, flow_temp_max: 80, language: 'fr', ...config };
    this._built = false; this._build();
  }
  set hass(h) { this._hass = h; this._update(); }
  getCardSize() { return 6; }
  _t(k) { return (I18N_PB[this._config.language] || I18N_PB.en)[k] ?? I18N_PB.en[k] ?? k; }

  _build() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' });
    // Granulés : petits bâtonnets en rangées (dans l'ouverture de la trémie et le hublot de niveau)
    const pellets = (x0, y0, w, h, n) => Array.from({ length: n }, (_, i) => {
      const x = x0 + ((i * 37) % 100) / 100 * w, y = y0 + ((i * 53) % 100) / 100 * h, a = (i * 47) % 180;
      return `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="3.2" height="1.6" rx=".8" transform="rotate(${a} ${x.toFixed(1)} ${y.toFixed(1)})" fill="${i % 3 ? '#c9a066' : '#b38a50'}"/>`;
    }).join('');
    const tube = 'M76 172 L136 112';
    this.shadowRoot.innerHTML = `
    <style>
      :host { display:block; }
      ha-card { padding:12px; overflow:hidden; }
      .title { font-weight:600; margin:0 4px 4px; display:flex; justify-content:space-between; align-items:center; gap:6px; }
      .badge { font-size:.75em; color:#fff; background:#e53935; border-radius:10px; padding:2px 8px; display:none; animation:blink 1s infinite; }
      .alarm .badge.al, .low .badge.lo { display:inline-block; } .badge.lo { background:#fb8c00; }
      svg { width:100%; height:auto; display:block; overflow:visible; }
      /* Flamme dans le hublot */
      .flame { transform-box:fill-box; transform-origin:50% 100%; opacity:0; transition:opacity .8s; }
      .ignition .flame.small, .heating .flame, .extinguishing .flame.small { opacity:1; animation:flick .35s ease-in-out infinite alternate; }
      .extinguishing .flame.small { animation-duration:.7s; opacity:.6; }
      .flame.f2 { animation-delay:.12s !important; } .flame.f3 { animation-delay:.23s !important; }
      .glow { fill:#ff8a2a; opacity:0; transition:opacity .8s; } .heating .glow { opacity:.55; animation:breathe 1.6s ease-in-out infinite; }
      .ignition .glow { opacity:.25; }
      .igniter { stroke:#555; stroke-width:2; } .ignition .igniter { stroke:#ff3b1f; filter:drop-shadow(0 0 3px #ff3b1f); animation:breathe .8s infinite; }
      /* Vis sans fin + granulés qui montent */
      .screw { fill:none; stroke:#7b828a; stroke-width:6; stroke-dasharray:3 4; }
      .feed { fill:none; stroke:#c9a066; stroke-width:3.4; stroke-linecap:round; stroke-dasharray:.1 9; opacity:0; }
      .ignition .screw, .heating .screw { animation:dash var(--fs,1.2s) linear infinite; }
      .ignition .feed, .heating .feed { opacity:1; animation:dash2 var(--fs,1.2s) linear infinite; }
      .pile { transition:transform 1.2s ease; } .heating .pilej, .ignition .pilej { animation:jig .9s ease-in-out infinite alternate; }
      .lvl { transition:y 1.2s ease, height 1.2s ease; }
      .low .hopper-front { animation:warn 1s infinite; }
      /* Tuyaux départ / retour */
      .pipe { fill:none; stroke-width:6; stroke-linecap:round; transition:stroke 1.2s; }
      .flow { fill:none; stroke:rgba(255,255,255,.75); stroke-width:2; stroke-linecap:round; stroke-dasharray:.1 8; opacity:0; }
      .heating .flow { opacity:1; animation:dash2 1s linear infinite; } .heating .flow.ret { animation-direction:reverse; }
      .heat path { fill:none; stroke:#ffb36b; stroke-width:1.6; stroke-linecap:round; opacity:0; }
      .heating .heat path { animation:rise 2.4s ease-in infinite; } .heat path:nth-child(2) { animation-delay:.8s !important; } .heat path:nth-child(3) { animation-delay:1.6s !important; }
      /* Écran */
      .scr { fill:#0d1a24; } .alarm .scr { fill:#4a0d0d; animation:blink .6s infinite; }
      .scrtxt { fill:#7fe0ff; font:700 7px 'Courier New',monospace; text-anchor:middle; } .scrlab { fill:#7fe0ff; font:5px 'Courier New',monospace; text-anchor:middle; opacity:.8; }
      .off .scrtxt, .off .scrlab { fill:#4f7d8f; }
      .led { fill:#6b6b6b; } .heating .led { fill:#43ff64; } .ignition .led { fill:#ffb300; animation:blink .8s infinite; }
      .extinguishing .led { fill:#3fa9ff; animation:blink 1.2s infinite; } .alarm .led { fill:#ff3b30; animation:blink .4s infinite; }
      .stats { display:grid; gap:8px; margin-top:6px; }
      .stat { text-align:center; background:var(--secondary-background-color, rgba(127,127,127,.12)); border-radius:10px; padding:6px 4px; }
      .stat .v { font-weight:700; font-size:1.02em; } .stat .l { font-size:.7em; opacity:.65; text-transform:uppercase; letter-spacing:.04em; }
      @keyframes flick { from { transform:scaleY(.82) scaleX(1.05) } to { transform:scaleY(1.12) scaleX(.94) } }
      @keyframes dash { to { stroke-dashoffset:-14 } } @keyframes dash2 { to { stroke-dashoffset:-18 } }
      @keyframes jig { to { transform:translateY(.8px) } }
      @keyframes rise { 0% { opacity:0; transform:translateY(0) } 30% { opacity:.7 } 100% { opacity:0; transform:translateY(-22px) } }
      @keyframes warn { 50% { fill:#a86a2a } }
      @keyframes blink { 50% { opacity:.35 } } @keyframes breathe { 50% { opacity:.3 } }
    </style>
    <ha-card id="card">
      <div class="title"><span>${this._config.name || this._t('name')}</span><span><span class="badge lo">${this._t('low')}</span> <span class="badge al">${this._t('alarm')}</span></span></div>
      <svg viewBox="0 0 280 214" id="svg">
        <defs>
          <linearGradient id="pbf" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e9ebed"/><stop offset="1" stop-color="#cfd3d7"/></linearGradient>
          <linearGradient id="pbs" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#b3b8bd"/><stop offset="1" stop-color="#9aa0a6"/></linearGradient>
          <linearGradient id="hop" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6a7076"/><stop offset="1" stop-color="#4c5157"/></linearGradient>
          <clipPath id="open"><polygon points="20,66 36,55 104,51 96,63"/></clipPath>
          <clipPath id="sight"><rect x="40" y="74" width="9" height="44" rx="2"/></clipPath>
          <radialGradient id="fire" cx="50%" cy="70%" r="60%"><stop offset="0" stop-color="#fff3b0"/><stop offset=".5" stop-color="#ffb02e"/><stop offset="1" stop-color="#ff5a1f"/></radialGradient>
        </defs>
        <ellipse cx="160" cy="206" rx="118" ry="6" fill="rgba(0,0,0,.22)"/>

        <!-- Tuyaux cuivre départ (gauche) / retour (droite) -->
        <path class="pipe" id="pdep" d="M156 32 V6 H186"/>
        <path class="flow dep" d="M156 32 V6 H186"/>
        <path class="pipe" id="pret" d="M172 32 V14 H186"/>
        <path class="flow ret" d="M172 32 V14 H186"/>
        <text class="scrlab" x="200" y="8" style="fill:var(--primary-text-color,#ddd);text-anchor:start;font-size:6px" id="tdep"></text>
        <text class="scrlab" x="200" y="17" style="fill:var(--primary-text-color,#ddd);text-anchor:start;font-size:6px" id="tret"></text>
        <g class="heat"><path d="M222 28 q3 -5 0 -10 q-3 -5 0 -10"/><path d="M236 28 q3 -5 0 -10 q-3 -5 0 -10"/><path d="M250 28 q3 -5 0 -10 q-3 -5 0 -10"/></g>

        <!-- Chaudière -->
        <polygon points="132,40 146,30 266,30 252,40" fill="#6d7379"/>
        <polygon points="252,40 266,30 266,190 252,200" fill="url(#pbs)"/>
        <rect x="132" y="40" width="120" height="160" fill="url(#pbf)"/>
        <rect x="132" y="40" width="120" height="12" fill="#50565c"/>
        <line x1="132" y1="120" x2="252" y2="120" stroke="#aeb3b8" stroke-width="1.2"/>
        <rect x="244" y="74" width="3" height="16" rx="1.5" fill="#9aa0a6"/><rect x="244" y="150" width="3" height="16" rx="1.5" fill="#9aa0a6"/>
        <rect x="138" y="198" width="10" height="5" fill="#2e3237"/><rect x="236" y="198" width="10" height="5" fill="#2e3237"/>
        <!-- Écran tactile -->
        <rect x="208" y="55" width="36" height="24" rx="3" fill="#2b2f35"/>
        <rect class="scr" x="211" y="58" width="30" height="18" rx="2"/>
        <text class="scrlab" x="226" y="65" id="lab"></text><text class="scrtxt" x="226" y="73" id="val"></text>
        <circle class="led" cx="214" cy="82" r="1.6"/>
        <!-- Hublot de combustion -->
        <circle cx="192" cy="160" r="15" fill="#2b2f35"/>
        <circle cx="192" cy="160" r="11.5" fill="#120a06"/>
        <circle class="glow" cx="192" cy="161" r="11"/>
        <line class="igniter" x1="183" y1="168" x2="201" y2="168"/>
        <g>
          <path class="flame" d="M186 168 Q184 160 189 154 Q189 160 192 160 Q190 152 195 147 Q196 157 199 160 Q201 164 198 168 Z" fill="url(#fire)"/>
          <path class="flame small f2" d="M188 168 Q187 163 191 159 Q192 163 194 163 Q195 160 196 158 Q199 164 196 168 Z" fill="#ffcf4a"/>
          <path class="flame small f3" d="M190 168 Q190 165 192 163 Q194 165 194 168 Z" fill="#fff3b0"/>
        </g>
        <circle cx="192" cy="160" r="11.5" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="1"/>

        <!-- Vis sans fin (tube incliné) -->
        <path d="${tube}" stroke="#3f444a" stroke-width="13" stroke-linecap="round" fill="none"/>
        <path class="screw" d="${tube}"/>
        <path class="feed" d="${tube}"/>
        <rect x="128" y="104" width="10" height="16" rx="2" fill="#3f444a"/>
        <!-- Pied + boîtier moteur -->
        <rect x="62" y="126" width="12" height="40" fill="#4c5157"/>
        <rect x="56" y="160" width="30" height="42" rx="3" fill="#3a3f45"/>
        <rect x="60" y="196" width="22" height="6" fill="#2e3237"/>

        <!-- Trémie -->
        <polygon class="hopper-front" points="20,66 96,63 82,126 50,128" fill="url(#hop)"/>
        <polygon points="96,63 104,51 90,116 82,126" fill="#3f444a"/>
        <polygon points="20,66 36,55 104,51 96,63" fill="#1e2125"/>
        <g clip-path="url(#open)"><g class="pile" id="pile"><g class="pilej">${pellets(18, 50, 90, 16, 120)}</g></g></g>
        <polygon points="20,66 36,55 104,51 96,63" fill="none" stroke="#7b828a" stroke-width="1.2"/>
        <!-- Hublot de niveau -->
        <rect x="40" y="74" width="9" height="44" rx="2" fill="#1e2125"/>
        <g clip-path="url(#sight)"><rect class="lvl" id="lvl" x="40" y="118" width="9" height="0" fill="#c9a066"/>${pellets(40, 74, 9, 44, 30).replace(/fill="#c9a066"|fill="#b38a50"/g, 'fill="rgba(0,0,0,.28)"')}</g>
        <rect x="40" y="74" width="9" height="44" rx="2" fill="none" stroke="#8a9096" stroke-width="1"/>
      </svg>
      <div class="stats" id="stats"></div>
    </ha-card>`;
    this._built = true;
  }

  _st(id) { return id && this._hass && this._hass.states[id]; }
  _num(id) {
    const s = this._st(id); if (!s || ['unavailable', 'unknown'].includes(s.state)) return null;
    const n = parseFloat(s.state); return Number.isFinite(n) ? n : null;
  }

  // Statut : entité (mots-clés FR/EN) sinon déduit de la puissance
  _state(w) {
    const c = this._config, s = this._st(c.entity_status);
    if (s) {
      const v = String(s.state).toLowerCase();
      if (/alarm|alarme|error|erreur|d[ée]faut|fault/.test(v)) return 'alarm';
      if (/allum|ignit|start|d[ée]marr|pr[ée]chauf/.test(v)) return 'ignition';
      if (/extinc|shut|refroid|cool|stopping|nettoy|clean/.test(v)) return 'extinguishing';
      if (/chauff|heat|run|marche|modul|burn|^on$/.test(v)) return w !== null && w > c.ignition_threshold ? 'ignition' : 'heating';
      if (/off|arr[êe]t|standby|veille|idle/.test(v)) return 'off';
    }
    if (w === null) return 'off';
    if (w > c.ignition_threshold) return 'ignition';
    if (w > c.threshold) return 'heating';
    return 'off';
  }

  _update() {
    if (!this._built || !this._hass) return;
    const c = this._config, r = this.shadowRoot;
    const w = this._num(c.entity_power), e = this._num(c.entity_energy);
    const dep = this._num(c.entity_flow_temp), ret = this._num(c.entity_return_temp), lvl = this._num(c.entity_pellet_level);
    let cost = this._num(c.entity_cost); if (cost === null && e !== null && c.price_per_kwh) cost = e * c.price_per_kwh;
    const st = this._state(w);
    const low = lvl !== null && lvl <= c.pellet_alert;
    r.getElementById('svg').setAttribute('class', st);
    const card = r.getElementById('card'); card.classList.toggle('alarm', st === 'alarm'); card.classList.toggle('low', low);
    r.getElementById('svg').classList.toggle('low', low);

    // Vitesse de la vis selon la puissance (si connue)
    r.getElementById('svg').style.setProperty('--fs', `${st === 'ignition' ? 0.8 : 1.4}s`);

    // Tuyaux : cuivre froid → rouge chaud (départ), cuivre → orange (retour)
    const mix = (t) => { const k = t === null ? 0 : Math.max(0, Math.min(1, (t - 25) / (c.flow_temp_max - 25)));
      const a = [184, 115, 51], b = [229, 57, 53]; return `rgb(${a.map((v, i) => Math.round(v + (b[i] - v) * k)).join(',')})`; };
    r.getElementById('pdep').style.stroke = mix(dep);
    r.getElementById('pret').style.stroke = mix(ret === null ? null : ret - 10);
    r.getElementById('tdep').textContent = dep === null ? '' : `▲ ${Math.round(dep)}°`;
    r.getElementById('tret').textContent = ret === null ? '' : `▼ ${Math.round(ret)}°`;

    // Niveau de granulés : hublot + tas dans la trémie
    const p = lvl === null ? 70 : Math.max(0, Math.min(100, lvl));
    const lv = r.getElementById('lvl'); lv.setAttribute('y', 118 - 44 * p / 100); lv.setAttribute('height', 44 * p / 100);
    lv.setAttribute('fill', low ? '#e0782e' : '#c9a066');
    r.getElementById('pile').style.transform = `translateY(${((100 - p) / 100 * 14).toFixed(1)}px)`;
    r.getElementById('pile').style.opacity = p < 8 ? 0.2 : 1;

    // Écran
    const lab = r.getElementById('lab'), val = r.getElementById('val');
    if (st === 'heating') { lab.textContent = this._t('flow').toUpperCase(); val.textContent = dep === null ? 'ON' : `${Math.round(dep)}°C`; }
    else if (st === 'off') { lab.textContent = this._t('off').toUpperCase(); val.textContent = dep === null ? '--' : `${Math.round(dep)}°C`; }
    else { lab.textContent = ''; val.textContent = this._t(st).toUpperCase().slice(0, 9); }

    const f = (v, d, u) => (v === null ? '—' : `${v.toFixed(d)} ${u}`);
    const it = [];
    if (c.show_status) it.push([this._t('status'), this._t(st)]);
    if (c.show_power) it.push([this._t('power'), w === null ? '—' : w >= 1000 ? `${(w / 1000).toFixed(1)} kW` : `${Math.round(w)} W`]);
    if (c.show_temps) { it.push([this._t('flow'), f(dep, 0, '°C')]); it.push([this._t('ret'), f(ret, 0, '°C')]); }
    if (c.show_pellets) it.push([this._t('pellets'), f(lvl, 0, '%')]);
    if (c.show_energy) it.push([this._t('energy'), f(e, 1, 'kWh')]);
    if (c.show_cost && cost !== null) it.push([this._t('cost'), f(cost, 2, '€')]);
    const stats = r.getElementById('stats');
    stats.style.gridTemplateColumns = `repeat(${it.length > 4 ? Math.ceil(it.length / 2) : it.length}, 1fr)`;
    stats.innerHTML = it.map(([l, v]) => `<div class="stat"><div class="v">${v}</div><div class="l">${l}</div></div>`).join('');
  }
}
define('appliance-pellet-boiler-card', AppliancePelletBoilerCard);
window.customCards = window.customCards || [];
window.customCards.push({ type: 'appliance-pellet-boiler-card', name: 'Pellet Boiler Card', description: 'Chaudière à granulés animée (trémie, vis sans fin, flamme, départ/retour)', preview: false });
})();

/* Carte « Chaudière à gaz » — custom:appliance-gas-boiler-card
 * Chaudière murale gaz : flamme bleue sur rampe de brûleur, circuit départ/retour qui
 * change de couleur avec la température, arrivée gaz, ECS, manomètre, fumées.
 */
(() => {
  const TAG = 'appliance-gas-boiler-card';
  if (customElements.get(TAG)) return;

  const T = {
    "en": {
      "name": "Gas boiler",
      "off": "Off",
      "standby": "Standby",
      "heating": "Heating",
      "dhw": "Hot water",
      "alarm": "Fault",
      "power": "Electric",
      "energy": "Elec. energy",
      "gas": "Gas",
      "cost": "Cost",
      "flow": "Flow",
      "ret": "Return",
      "pressure": "Pressure",
      "mod": "Modulation",
      "delta": "ΔT",
      "lowp": "Low pressure",
      "highp": "High pressure",
      "hotf": "Flow too hot"
    },
    "de": {
      "name": "Gastherme",
      "off": "Aus",
      "standby": "Standby",
      "heating": "Heizen",
      "dhw": "Warmwasser",
      "alarm": "Störung",
      "power": "Elektrisch",
      "energy": "Elektr. Energie",
      "gas": "Gas",
      "cost": "Kosten",
      "flow": "Vorlauf",
      "ret": "Rücklauf",
      "pressure": "Druck",
      "mod": "Modulation",
      "delta": "ΔT",
      "lowp": "Druck zu niedrig",
      "highp": "Druck zu hoch",
      "hotf": "Vorlauf zu heiß"
    },
    "fr": {
      "name": "Chaudière gaz",
      "off": "Éteinte",
      "standby": "Veille",
      "heating": "Chauffage",
      "dhw": "Eau chaude",
      "alarm": "Défaut",
      "power": "Électrique",
      "energy": "Énergie élec.",
      "gas": "Gaz",
      "cost": "Coût",
      "flow": "Départ",
      "ret": "Retour",
      "pressure": "Pression",
      "mod": "Modulation",
      "delta": "ΔT",
      "lowp": "Pression basse",
      "highp": "Pression haute",
      "hotf": "Départ trop chaud"
    },
    "nb": {
      "name": "Gasskjel",
      "off": "Av",
      "standby": "Hvilemodus",
      "heating": "Varmer",
      "dhw": "Varmtvann",
      "alarm": "Feil",
      "power": "Elektrisk",
      "energy": "Elektr. energi",
      "gas": "Gass",
      "cost": "Kostnad",
      "flow": "Tur",
      "ret": "Retur",
      "pressure": "Trykk",
      "mod": "Modulering",
      "delta": "ΔT",
      "lowp": "Lavt trykk",
      "highp": "Høyt trykk",
      "hotf": "For varm tur"
    }
  };

  const CSS = `
:host{display:block}
ha-card{display:block;padding:10px 12px 12px;overflow:hidden;--gb-heat:var(--appliance-heat-color,#ff8a3d);--gb-cold:var(--appliance-cold-color,#2b9af9);
  --gb-alert:var(--appliance-alert-color,#db4437);--gb-ok:var(--appliance-ok-color,#43a047);--gb-flow:#3b8fe8;--gb-ret:#3b8fe8;--mod:1}
.head{display:flex;align-items:center;justify-content:space-between;gap:8px}
.title{font-size:14px;font-weight:500;color:var(--primary-text-color);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.badge{font-size:11px;font-weight:600;padding:2px 8px;border-radius:12px;background:var(--secondary-background-color);color:var(--secondary-text-color);white-space:nowrap}
.heating .badge{background:color-mix(in srgb,var(--gb-heat) 22%,transparent);color:var(--gb-heat)}
.dhw .badge{background:color-mix(in srgb,var(--gb-cold) 22%,transparent);color:var(--gb-cold)}
.alarm .badge{background:color-mix(in srgb,var(--gb-alert) 22%,transparent);color:var(--gb-alert)}
.alert{display:none;margin-top:4px;font-size:11px;color:var(--gb-alert);font-weight:500;text-align:center}
.alert.on{display:block}
svg{display:block;width:100%;max-width:170px;height:var(--appliance-illustration-height,auto);margin:2px auto 0;overflow:visible}
.tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(76px,1fr));gap:6px;margin-top:6px}
.tile{box-sizing:border-box;background:var(--secondary-background-color);border-radius:10px;padding:5px 7px;min-width:0;overflow:hidden;text-align:center}
.tile .l{display:flex;align-items:center;justify-content:center;gap:3px;font-size:10px;line-height:14px;color:var(--secondary-text-color);min-width:0}
.tile .l span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.tile .l ha-icon{--mdc-icon-size:13px;flex:none}
.tile .v{font-size:14px;line-height:18px;font-weight:600;color:var(--primary-text-color);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.tile .v small{font-size:10px;font-weight:400;color:var(--secondary-text-color);margin-left:2px}
.tile.hide{display:none}

/* ---- illustration ---- */
.flame{transform-box:fill-box;transform-origin:50% 100%;opacity:0;transform:scaleY(.1)}
.burning .flame{opacity:1;transform:scaleY(calc(.45 + .55*var(--mod)));animation:flick .45s ease-in-out infinite alternate}
.burning .flame:nth-child(odd){animation-duration:.33s;animation-delay:-.1s}
.burning .flame:nth-child(3n){animation-duration:.52s;animation-delay:-.2s}
@keyframes flick{0%{transform:scaleY(calc(.45 + .55*var(--mod)))}100%{transform:scaleY(calc(.3 + .5*var(--mod))) scaleX(1.12)}}
.glow{opacity:0;transition:opacity .6s}
.burning .glow{opacity:calc(.35 + .45*var(--mod));animation:pulse 1.6s ease-in-out infinite alternate}
@keyframes pulse{to{opacity:calc(.2 + .35*var(--mod))}}
.puff{opacity:0;transform-box:fill-box;transform-origin:center}
.burning .puff{animation:rise 3.2s ease-out infinite}
.burning .puff:nth-child(2){animation-delay:-1.1s}.burning .puff:nth-child(3){animation-delay:-2.1s}
@keyframes rise{0%{opacity:0;transform:translate(0,8px) scale(.5)}20%{opacity:.7}100%{opacity:0;transform:translate(10px,-34px) scale(1.9)}}
.dash{stroke-dasharray:3 8;opacity:0}
.pump .dash.ch,.burning .dash.gas,.dhw .dash.dhw{opacity:.9}
.dash.down{animation:dd 1s linear infinite}
.dash.up{animation:du 1s linear infinite}
@keyframes dd{to{stroke-dashoffset:-11}}
@keyframes du{to{stroke-dashoffset:11}}
.noanim *{animation:none!important}
.noanim .flame{transform:scaleY(calc(.45 + .55*var(--mod)))}
.led{fill:#6b7480}
.heating .led{fill:#ff8a3d}.dhw .led{fill:#3fa3ff}.standby .led{fill:#43a047}.alarm .led{fill:#db4437;animation:blink .8s steps(2) infinite}
@keyframes blink{50%{opacity:.15}}
.dsp{fill:#7fe3ff;font:700 15px/1 var(--paper-font-body1_-_font-family,Roboto,sans-serif);text-anchor:middle}
.alarm .dsp{fill:#ffb74d}.off .dsp{fill:#3b4a5c}
.needle{transform-origin:172px 66px;transition:transform .8s}
.off .body-shade{opacity:.55}
`;

  const SVG = `
<svg viewBox="0 0 240 212" role="img" aria-label="gas boiler">
 <defs>
  <linearGradient id="body" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#d9dfe6"/></linearGradient>
  <linearGradient id="fl" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#1239ff"/><stop offset=".5" stop-color="#3fa3ff"/><stop offset="1" stop-color="#c9f2ff"/></linearGradient>
  <radialGradient id="gl" cx=".5" cy="1" r=".9"><stop offset="0" stop-color="#4aa8ff" stop-opacity=".85"/><stop offset=".6" stop-color="#2b6cff" stop-opacity=".25"/><stop offset="1" stop-color="#2b6cff" stop-opacity="0"/></radialGradient>
  <linearGradient id="cu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e59a5a"/><stop offset="1" stop-color="#a45a28"/></linearGradient>
 </defs>
 <!-- conduit de fumées -->
 <rect x="112" y="8" width="16" height="36" rx="2" fill="#cdd3da" stroke="#9aa3ad" stroke-width="1"/>
 <rect x="108" y="4" width="24" height="7" rx="2" fill="#b4bcc5" stroke="#8f98a3" stroke-width="1"/>
 <g fill="#e8eef4"><circle class="puff" cx="120" cy="6" r="5"/><circle class="puff" cx="118" cy="6" r="4"/><circle class="puff" cx="123" cy="6" r="4.5"/></g>
 <!-- caisson -->
 <rect x="48" y="42" width="144" height="116" rx="11" fill="#000" opacity=".12" transform="translate(2 3)"/>
 <rect class="body-shade" x="44" y="40" width="152" height="116" rx="11" fill="url(#body)" stroke="#aeb6c0" stroke-width="1.2"/>
 <!-- bandeau de commande -->
 <rect x="56" y="48" width="70" height="26" rx="5" fill="#0e1b2c" stroke="#27394f"/>
 <text class="dsp" x="91" y="67" id="dsp">--</text>
 <circle class="led" cx="136" cy="55" r="3.4"/>
 <circle cx="138" cy="67" r="4.5" fill="#c8cfd7" stroke="#9aa3ad"/><circle cx="152" cy="67" r="4.5" fill="#c8cfd7" stroke="#9aa3ad"/>
 <!-- manomètre -->
 <circle cx="172" cy="66" r="15" fill="#f6f8fa" stroke="#9aa3ad" stroke-width="1.4"/>
 <path d="M160.5 73 A13 13 0 0 1 183.5 73" fill="none" stroke="#e1e5ea" stroke-width="3"/>
 <path id="okarc" d="M165 63 A13 13 0 0 1 179 63" fill="none" stroke="#43a047" stroke-width="3" stroke-linecap="round"/>
 <line class="needle" id="needle" x1="172" y1="66" x2="172" y2="55" stroke="#db4437" stroke-width="1.8" stroke-linecap="round"/>
 <circle cx="172" cy="66" r="2.2" fill="#444"/>
 <!-- fenêtre de combustion -->
 <rect x="56" y="82" width="128" height="62" rx="7" fill="#0f1620" stroke="#2a3340" stroke-width="1.5"/>
 <!-- échangeur cuivre -->
 <g fill="none" stroke="url(#cu)" stroke-width="3" stroke-linecap="round" opacity=".95">
  <path d="M66 90 H174"/><path d="M66 97 H174"/><path d="M66 104 H174"/>
 </g>
 <g stroke="#e5a468" stroke-width="1" opacity=".6"><path d="M70 88 v18 M82 88 v18 M94 88 v18 M106 88 v18 M118 88 v18 M130 88 v18 M142 88 v18 M154 88 v18 M166 88 v18"/></g>
 <rect class="glow" x="56" y="82" width="128" height="62" rx="7" fill="url(#gl)"/>
 <!-- rampe de brûleur + flammes -->
 <g id="flames"></g>
 <rect x="66" y="130" width="108" height="8" rx="3" fill="#6a7480" stroke="#4a535e"/>
 <g fill="#2a323b" id="ports"></g>
 <path d="M62 86 L84 86 L62 108Z" fill="#fff" opacity=".07"/>
 <!-- platine -->
 <rect x="44" y="156" width="152" height="9" rx="3" fill="#aab3bd"/>
 <!-- tuyauteries -->
 <g stroke-linecap="round">
  <line x1="62" y1="165" x2="62" y2="202" style="stroke:var(--gb-flowc,#3b8fe8)" stroke-width="8"/>
  <line x1="91" y1="165" x2="91" y2="202" stroke="#f0883e" stroke-width="8"/>
  <line x1="120" y1="165" x2="120" y2="202" stroke="#f5c518" stroke-width="8"/>
  <line x1="149" y1="165" x2="149" y2="202" stroke="#3b8fe8" stroke-width="8"/>
  <line x1="178" y1="165" x2="178" y2="202" style="stroke:var(--gb-retc,#3b8fe8)" stroke-width="8"/>
 </g>
 <g fill="#8c95a0"><rect x="57" y="172" width="10" height="5" rx="1"/><rect x="86" y="172" width="10" height="5" rx="1"/><rect x="115" y="172" width="10" height="5" rx="1"/><rect x="144" y="172" width="10" height="5" rx="1"/><rect x="173" y="172" width="10" height="5" rx="1"/></g>
 <g stroke="#fff" stroke-width="2.4" stroke-linecap="round" fill="none">
  <line class="dash ch down" x1="62" y1="167" x2="62" y2="200"/>
  <line class="dash dhw down" x1="91" y1="167" x2="91" y2="200"/>
  <line class="dash gas up" x1="120" y1="200" x2="120" y2="167"/>
  <line class="dash dhw up" x1="149" y1="200" x2="149" y2="167"/>
  <line class="dash ch up" x1="178" y1="200" x2="178" y2="167"/>
 </g>
</svg>`;

  const TILES = [
    ['power', 'mdi:flash', 'show_power'],
    ['energy', 'mdi:lightning-bolt-circle', 'show_energy'],
    ['gas', 'mdi:fire', 'show_gas'],
    ['cost', 'mdi:cash', 'show_cost'],
    ['flow', 'mdi:thermometer-chevron-up', 'show_temps'],
    ['ret', 'mdi:thermometer-chevron-down', 'show_temps'],
    ['pressure', 'mdi:gauge', 'show_pressure'],
    ['mod', 'mdi:percent-circle', 'show_modulation'],
  ];

  class ApplianceGasBoilerCard extends HTMLElement {
    static getConfigElement() { return document.createElement(TAG + '-editor'); }
    static getStubConfig(hass) {
      const ids = Object.keys((hass && hass.states) || {});
      const f = (re, dom) => ids.find((i) => (!dom || i.startsWith(dom + '.')) && re.test(i)) || '';
      return {
        entity_status: f(/chaudiere|boiler|gaz|gas/i, 'climate') || f(/chaudiere|boiler|gaz|gas/i, 'sensor'),
        entity_power: f(/(chaudiere|boiler|gaz|gas).*(power|puissance)/i, 'sensor'),
        entity_gas: f(/(gaz|gas).*(conso|consum|m3|volume|daily|jour)/i, 'sensor'),
      };
    }
    setConfig(c) {
      if (!c || typeof c !== 'object') throw new Error('Invalid configuration');
      this._c = { show_power: true, show_energy: true, show_gas: true, show_cost: true, show_temps: true,
        show_pressure: true, show_modulation: true, show_status: true, threshold: 15, off_threshold: 0.5,
        pressure_min: 1, pressure_max: 2.5, flow_temp_max: 80, ...c };
      this._built = false;
      if (this._hass) this._render();
    }
    set hass(h) { this._hass = h; if (this._c) this._render(); }
    getCardSize() { return 5; }
    getGridOptions() { return { columns: 12, min_columns: 6, rows: 'auto' }; }

    _t(k) { return T[this._lang()][k] ?? T.en[k] ?? k; }
    _lang() { const l = (this._c.language || (this._hass && this._hass.language) || 'en').slice(0, 2); return T[l] ? l : 'en'; }
    _st(id) { return id && this._hass.states[id]; }
    _num(id) {
      const s = this._st(id); if (!s) return NaN;
      const v = parseFloat(String(s.state).replace(',', '.'));
      return isFinite(v) ? v : NaN;
    }
    _watts(id) {
      const v = this._num(id); if (isNaN(v)) return NaN;
      const u = ((this._st(id).attributes || {}).unit_of_measurement || '').toLowerCase();
      return u === 'kw' ? v * 1000 : v;
    }
    _unit(id, d) { const s = this._st(id); return (s && s.attributes && s.attributes.unit_of_measurement) || d; }
    _fmt(v, d = 0) { return isNaN(v) ? '--' : v.toLocaleString(this._lang() === 'fr' ? 'fr-FR' : 'en-US', { maximumFractionDigits: d, minimumFractionDigits: 0 }); }

    _build() {
      const root = this.shadowRoot || this.attachShadow({ mode: 'open' });
      root.innerHTML = `<style>${CSS}</style><ha-card><div class="wrap">
        <div class="head"><div class="title" id="title"></div><div class="badge" id="badge"></div></div>
        ${SVG}
        <div class="alert" id="alert"></div>
        <div class="tiles" id="tiles">${TILES.map(([k, ic]) => `<div class="tile hide" data-k="${k}"><div class="l"><ha-icon icon="${ic}"></ha-icon><span class="lbl"></span></div><div class="v"></div></div>`).join('')}</div>
      </div></ha-card>`;
      // flammes bleues sur la rampe : 11 becs
      const fl = root.getElementById('flames'); const ports = root.getElementById('ports');
      let f = '', p = '';
      for (let i = 0; i < 11; i++) {
        const x = 72 + i * 9.6;
        f += `<path class="flame" d="M${x} 130 C${x - 4} 124 ${x - 3.5} 117 ${x} 108 C${x + 3.5} 117 ${x + 4} 124 ${x} 130Z" fill="url(#fl)"/>`;
        p += `<rect x="${x - 2}" y="132" width="4" height="3" rx="1"/>`;
      }
      fl.innerHTML = f; ports.innerHTML = p;
      this._root = root; this._card = root.querySelector('ha-card'); this._built = true;
    }

    _compute() {
      const c = this._c;
      const pw = this._watts(c.entity_power);
      const stObj = this._st(c.entity_status);
      let txt = '';
      if (stObj) {
        txt = String(stObj.state).toLowerCase();
        const a = stObj.attributes || {};
        if (a.hvac_action) txt += ' ' + String(a.hvac_action).toLowerCase();
      }
      const flameEnt = this._st(c.entity_flame);
      const flame = flameEnt ? flameEnt.state === 'on' : null;
      let st;
      if (/alarm|alarme|error|erreur|fault|défaut|defaut|lock|verrou/.test(txt)) st = 'alarm';
      else if (/unavailable|unknown|^off| off$|arr[eê]t|eteint|éteint/.test(txt) && flame !== true) st = 'off';
      else if (/dhw|ecs|hot.?water|eau chaude|sanitaire|water_heat/.test(txt)) st = 'dhw';
      else if (/heat|chauff|ignit|allum|burn|brûl|brul|running|^on/.test(txt) || flame === true) st = 'heating';
      else if (txt) st = 'standby';
      else if (flame === false) st = 'standby';
      else if (!isNaN(pw)) st = pw > c.threshold ? 'heating' : (pw > c.off_threshold ? 'standby' : 'off');
      else st = 'standby';
      if (flame === false && (st === 'heating' || st === 'dhw') && /standby|idle|veille/.test(txt)) st = 'standby';
      const burning = st === 'heating' || st === 'dhw';
      const pump = burning || (!isNaN(pw) && pw > c.threshold);
      return { st, burning, pump, pw };
    }

    _render() {
      if (!this._built) this._build();
      const c = this._c, h = this._hass, card = this._card, r = this._root;
      const { st, burning, pump, pw } = this._compute();
      const flow = this._num(c.entity_flow_temp), ret = this._num(c.entity_return_temp);
      const press = this._num(c.entity_pressure);
      let mod = this._num(c.entity_modulation); mod = isNaN(mod) ? 1 : Math.max(0, Math.min(100, mod)) / 100;
      card.className = `${st} ${burning ? 'burning' : ''} ${pump ? 'pump' : ''} ${c.animations === false ? 'noanim' : ''}`;
      card.style.setProperty('--mod', mod);
      const tc = (t, d) => isNaN(t) ? d : `color-mix(in srgb, #e5392b ${Math.round(Math.max(0, Math.min(1, (t - 25) / 50)) * 100)}%, #3b8fe8)`;
      card.style.setProperty('--gb-flowc', tc(flow, '#e5533d'));
      card.style.setProperty('--gb-retc', tc(ret, '#3b8fe8'));

      r.getElementById('title').textContent = c.name || this._t('name');
      const badge = r.getElementById('badge'); badge.textContent = this._t(st); badge.style.display = c.show_status === false ? 'none' : '';
      const dsp = !isNaN(flow) && st !== 'off' ? `${Math.round(flow)}°` : (st === 'off' ? 'OFF' : st === 'alarm' ? 'Err' : st === 'dhw' ? 'ECS' : st === 'heating' ? 'CH' : '--');
      r.getElementById('dsp').textContent = dsp;

      // manomètre : 0–4 bar sur 180°, zone verte = pressure_min..pressure_max
      const ang = (p) => -90 + Math.max(0, Math.min(4, p)) / 4 * 180;
      r.getElementById('needle').style.transform = `rotate(${isNaN(press) ? -90 : ang(press)}deg)`;
      const pt = (p) => { const a = (ang(p) - 90) * Math.PI / 180; return [172 + 13 * Math.cos(a), 66 + 13 * Math.sin(a)]; };
      const [x1, y1] = pt(c.pressure_min), [x2, y2] = pt(c.pressure_max);
      r.getElementById('okarc').setAttribute('d', `M${x1.toFixed(1)} ${y1.toFixed(1)} A13 13 0 0 1 ${x2.toFixed(1)} ${y2.toFixed(1)}`);

      // alertes
      let al = '';
      if (!isNaN(press) && press < c.pressure_min) al = `${this._t('lowp')} (${this._fmt(press, 1)} bar)`;
      else if (!isNaN(press) && press > c.pressure_max) al = `${this._t('highp')} (${this._fmt(press, 1)} bar)`;
      else if (!isNaN(flow) && flow > c.flow_temp_max) al = this._t('hotf');
      const ae = r.getElementById('alert'); ae.textContent = al; ae.classList.toggle('on', !!al);

      // tuiles
      const energy = this._num(c.entity_energy), gas = this._num(c.entity_gas);
      let cost = this._num(c.entity_cost), costU = this._unit(c.entity_cost, '€');
      if (isNaN(cost) && c.price_per_unit && !isNaN(gas)) { cost = gas * Number(c.price_per_unit); costU = c.currency || '€'; }
      const V = {
        power: [c.entity_power, isNaN(pw) ? '--' : (pw >= 1000 ? this._fmt(pw / 1000, 2) : this._fmt(pw, 0)), isNaN(pw) ? '' : (pw >= 1000 ? 'kW' : 'W')],
        energy: [c.entity_energy, this._fmt(energy, 2), this._unit(c.entity_energy, 'kWh')],
        gas: [c.entity_gas, this._fmt(gas, 2), this._unit(c.entity_gas, 'm³')],
        cost: [c.entity_cost || (c.price_per_unit && c.entity_gas), this._fmt(cost, 2), costU],
        flow: [c.entity_flow_temp, this._fmt(flow, 1), '°C'],
        ret: [c.entity_return_temp, this._fmt(ret, 1), '°C'],
        pressure: [c.entity_pressure, this._fmt(press, 2), 'bar'],
        mod: [c.entity_modulation, this._fmt(mod * 100, 0), '%'],
      };
      TILES.forEach(([k, , opt]) => {
        const el = r.querySelector(`.tile[data-k="${k}"]`); const [ent, val, unit] = V[k];
        el.classList.toggle('hide', !ent || c[opt] === false);
        el.querySelector('.lbl').textContent = this._t(k);
        el.querySelector('.v').innerHTML = `${val}<small>${unit}</small>`;
        el.onclick = () => { const id = k === 'cost' ? c.entity_cost : c['entity_' + (k === 'ret' ? 'return_temp' : k === 'flow' ? 'flow_temp' : k === 'mod' ? 'modulation' : k)]; if (id) this.dispatchEvent(new CustomEvent('hass-more-info', { detail: { entityId: id }, bubbles: true, composed: true })); };
      });
    }
  }
  customElements.define(TAG, ApplianceGasBoilerCard);

  /* ---- éditeur visuel ---- */
  class ApplianceGasBoilerCardEditor extends HTMLElement {
    setConfig(c) { this._c = c; this._draw(); }
    set hass(h) { this._hass = h; if (this._form) this._form.hass = h; }
    _draw() {
      if (!this._form) {
        this._form = document.createElement('ha-form');
        this._form.addEventListener('value-changed', (e) => {
          this._c = e.detail.value;
          this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: this._c }, bubbles: true, composed: true }));
        });
        this.appendChild(this._form);
      }
      const ent = (name, domain) => ({ name, selector: { entity: domain ? { domain } : {} } });
      this._form.hass = this._hass;
      this._form.data = this._c;
      this._form.schema = [
        { name: 'name', selector: { text: {} } },
        ent('entity_status'), ent('entity_flame', 'binary_sensor'), ent('entity_power', 'sensor'), ent('entity_energy', 'sensor'),
        ent('entity_gas', 'sensor'), ent('entity_cost', 'sensor'), { name: 'price_per_unit', selector: { number: { min: 0, step: 0.0001, mode: 'box' } } },
        ent('entity_flow_temp', 'sensor'), ent('entity_return_temp', 'sensor'), ent('entity_pressure', 'sensor'), ent('entity_modulation', 'sensor'),
        { type: 'grid', name: '', schema: [
          { name: 'threshold', selector: { number: { min: 0, max: 2000, step: 1, mode: 'box', unit_of_measurement: 'W' } } },
          { name: 'off_threshold', selector: { number: { min: 0, max: 500, step: 0.1, mode: 'box', unit_of_measurement: 'W' } } },
        ] },
        { name: 'language', selector: { select: { options: Object.keys(T).map((value) => ({ value, label: { fr: 'Français', en: 'English', de: 'Deutsch', nb: 'Norsk bokmål' }[value] || value })) } } },
        { type: 'grid', name: '', schema: [
          { name: 'show_status', selector: { boolean: {} }, default: true }, { name: 'show_power', selector: { boolean: {} }, default: true },
          { name: 'show_energy', selector: { boolean: {} }, default: true }, { name: 'show_gas', selector: { boolean: {} }, default: true },
          { name: 'show_cost', selector: { boolean: {} }, default: true }, { name: 'show_temps', selector: { boolean: {} }, default: true },
          { name: 'show_pressure', selector: { boolean: {} }, default: true }, { name: 'show_modulation', selector: { boolean: {} }, default: true },
          { name: 'animations', selector: { boolean: {} }, default: true },
        ] },
      ];
      this._form.computeLabel = (s) => s.name;
    }
  }
  customElements.define(TAG + '-editor', ApplianceGasBoilerCardEditor);

  window.customCards = window.customCards || [];
  window.customCards.push({
    type: TAG, name: 'Appliance – Chaudière gaz / Gas boiler',
    description: 'Chaudière gaz animée : flamme, départ/retour, ECS, pression, conso élec et gaz.', preview: true,
  });
})();

/* Carte « PAC eau/eau » — custom:appliance-water-heat-pump-card
 * Pompe à chaleur eau/eau ou sol/eau (géothermie, nappe) : compresseur qui vibre entre
 * l'évaporateur (boucle de captage, à gauche) et le condenseur (boucle de chauffage, à droite),
 * départ/retour qui changent de couleur avec la température, COP instantané.
 */
(() => {
  const TAG = 'appliance-water-heat-pump-card';
  if (customElements.get(TAG)) return;

  const T = {
    "en": {
      "name": "Water heat pump",
      "off": "Off",
      "standby": "Standby",
      "heating": "Heating",
      "dhw": "Hot water",
      "cooling": "Cooling",
      "alarm": "Fault",
      "power": "Electric",
      "heat": "Heat output",
      "cop": "COP",
      "flow": "Flow",
      "ret": "Return",
      "delta": "ΔT",
      "src_in": "Source in",
      "src_out": "Source out",
      "rate": "Flow rate",
      "energy": "Elec. energy",
      "heat_energy": "Heat energy",
      "scop": "SCOP",
      "buffer": "Buffer tank"
    },
    "de": {
      "name": "Wasser/Wasser-Wärmepumpe",
      "off": "Aus",
      "standby": "Standby",
      "heating": "Heizen",
      "dhw": "Warmwasser",
      "cooling": "Kühlen",
      "alarm": "Störung",
      "power": "Elektrisch",
      "heat": "Wärmeleistung",
      "cop": "COP",
      "flow": "Vorlauf",
      "ret": "Rücklauf",
      "delta": "ΔT",
      "src_in": "Quelle ein",
      "src_out": "Quelle aus",
      "rate": "Durchfluss",
      "energy": "Elektr. Energie",
      "heat_energy": "Wärmeenergie",
      "scop": "SCOP",
      "buffer": "Pufferspeicher"
    },
    "fr": {
      "name": "PAC eau/eau",
      "off": "Arrêt",
      "standby": "Veille",
      "heating": "Chauffage",
      "dhw": "Eau chaude",
      "cooling": "Rafraîchissement",
      "alarm": "Défaut",
      "power": "Électrique",
      "heat": "Thermique",
      "cop": "COP",
      "flow": "Départ",
      "ret": "Retour",
      "delta": "ΔT",
      "src_in": "Captage entrée",
      "src_out": "Captage sortie",
      "rate": "Débit",
      "energy": "Énergie élec.",
      "heat_energy": "Énergie chaleur",
      "scop": "SCOP",
      "buffer": "Ballon tampon"
    },
    "nb": {
      "name": "Vann-til-vann-varmepumpe",
      "off": "Av",
      "standby": "Hvilemodus",
      "heating": "Varmer",
      "dhw": "Varmtvann",
      "cooling": "Kjøler",
      "alarm": "Feil",
      "power": "Elektrisk",
      "heat": "Varmeeffekt",
      "cop": "COP",
      "flow": "Tur",
      "ret": "Retur",
      "delta": "ΔT",
      "src_in": "Kilde inn",
      "src_out": "Kilde ut",
      "rate": "Gjennomstrømning",
      "energy": "Elektr. energi",
      "heat_energy": "Varmeenergi",
      "scop": "SCOP",
      "buffer": "Buffertank"
    }
  };

  const CSS = `
:host{display:block}
ha-card{display:block;padding:10px 12px 12px;overflow:hidden;--wp-heat:var(--appliance-heat-color,#ff8a3d);--wp-cold:var(--appliance-cold-color,#2b9af9);
  --wp-alert:var(--appliance-alert-color,#db4437)}
.head{display:flex;align-items:center;justify-content:space-between;gap:8px}
.title{font-size:14px;font-weight:500;color:var(--primary-text-color);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.badge{font-size:11px;font-weight:600;padding:2px 8px;border-radius:12px;background:var(--secondary-background-color);color:var(--secondary-text-color);white-space:nowrap}
.heating .badge{background:color-mix(in srgb,var(--wp-heat) 22%,transparent);color:var(--wp-heat)}
.dhw .badge,.cooling .badge{background:color-mix(in srgb,var(--wp-cold) 22%,transparent);color:var(--wp-cold)}
.alarm .badge{background:color-mix(in srgb,var(--wp-alert) 22%,transparent);color:var(--wp-alert)}
svg{display:block;width:100%;height:var(--appliance-illustration-height,auto);margin:2px auto 0;overflow:visible}
.tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(76px,1fr));gap:6px;margin-top:6px}
.tile{box-sizing:border-box;background:var(--secondary-background-color);border-radius:10px;padding:5px 7px;min-width:0;overflow:hidden;text-align:center;cursor:pointer}
.tile .l{display:flex;align-items:center;justify-content:center;gap:3px;font-size:10px;line-height:14px;color:var(--secondary-text-color);min-width:0}
.tile .l span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.tile .l ha-icon{--mdc-icon-size:13px;flex:none}
.tile .v{font-size:14px;line-height:18px;font-weight:600;color:var(--primary-text-color);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.tile .v small{font-size:10px;font-weight:400;color:var(--secondary-text-color);margin-left:2px}
.tile.hide{display:none}

/* ---- illustration ---- */
.comp{transform-box:fill-box;transform-origin:50% 100%}
.run .comp{animation:vib .11s linear infinite alternate}
@keyframes vib{0%{transform:translate(-.5px,0)}100%{transform:translate(.5px,-.4px)}}
.dash{stroke-dasharray:3 8;opacity:0}
.src .dash.src,.run .dash.ref,.circ .dash.ch,.chg .dash.chg{opacity:.9;animation:flow 1s linear infinite}
.run .dash.ref{opacity:.55;animation-duration:1.6s}
@keyframes flow{to{stroke-dashoffset:-11}}
.rad{fill:#e9edf1;transition:fill .8s}
.heating .rad{fill:color-mix(in srgb,var(--wp-flowc,#e5533d) 35%,#f4f6f8)}
.cooling .rad{fill:color-mix(in srgb,#3b8fe8 22%,#f4f6f8)}
.led{fill:#6b7480}
.heating .led{fill:#ff8a3d}.dhw .led{fill:#3fa3ff}.cooling .led{fill:#4dd0e1}.standby .led{fill:#43a047}.alarm .led{fill:#db4437;animation:blink .8s steps(2) infinite}
@keyframes blink{50%{opacity:.15}}
.dsp{fill:#7fe3ff;font:700 13px/1 var(--paper-font-body1_-_font-family,Roboto,sans-serif);text-anchor:middle}
.alarm .dsp{fill:#ffb74d}.off .dsp{fill:#3b4a5c}
.off .body-shade{opacity:.55}
.buf{display:none}.buffer .buf{display:inline}.buffer .direct{display:none}
.noanim *{animation:none!important}
`;

  const SVG = `
<svg viewBox="0 0 290 204" role="img" aria-label="water heat pump">
 <defs>
  <linearGradient id="wp-body" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#d9dfe6"/></linearGradient>
  <linearGradient id="wp-comp" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#5b6570"/><stop offset=".45" stop-color="#3a434d"/><stop offset="1" stop-color="#22292f"/></linearGradient>
  <linearGradient id="wp-tank" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--wp-tankc,#e5533d)"/><stop offset="1" style="stop-color:var(--wp-retc,#3b8fe8)"/></linearGradient>
  <linearGradient id="wp-soil" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#a1856a"/><stop offset="1" stop-color="#6f5641"/></linearGradient>
 </defs>
 <!-- sol et sonde de captage -->
 <rect x="0" y="158" width="66" height="46" rx="3" fill="url(#wp-soil)" opacity=".85"/>
 <path d="M0 158 H66" stroke="#6aa84f" stroke-width="3"/>
 <!-- radiateur -->
 <g transform="translate(40 0)">
 <rect x="184" y="14" width="52" height="50" rx="5" fill="#000" opacity=".1" transform="translate(1.5 2)"/>
 <g class="rad" stroke="#aab3bd" stroke-width="1">
  <rect x="184" y="14" width="52" height="8" rx="3"/><rect x="184" y="56" width="52" height="8" rx="3"/>
  <rect x="187" y="18" width="7" height="42" rx="3"/><rect x="198" y="18" width="7" height="42" rx="3"/>
  <rect x="209" y="18" width="7" height="42" rx="3"/><rect x="220" y="18" width="7" height="42" rx="3"/>
 </g>
 </g>
 <!-- caisson -->
 <rect x="76" y="26" width="96" height="128" rx="9" fill="#000" opacity=".12" transform="translate(2 3)"/>
 <rect class="body-shade" x="72" y="24" width="96" height="128" rx="9" fill="url(#wp-body)" stroke="#aeb6c0" stroke-width="1.2"/>
 <rect x="82" y="31" width="58" height="21" rx="4" fill="#0e1b2c" stroke="#27394f"/>
 <text class="dsp" id="dsp" x="111" y="46">--</text>
 <circle class="led" cx="152" cy="37" r="3.2"/>
 <circle cx="152" cy="47" r="3.6" fill="#c8cfd7" stroke="#9aa3ad"/>
 <rect x="80" y="58" width="80" height="88" rx="6" fill="#18212c" stroke="#2a3340" stroke-width="1.4"/>
 <!-- boucles d'eau : captage (gauche) et chauffage (droite), jusqu'aux échangeurs -->
 <g fill="none" stroke-width="6" stroke-linecap="round">
  <path d="M92 80 H30 V188" stroke="#4aa3df"/>
  <path d="M30 188 Q38 199 46 188" stroke="#3d8fd0"/>
  <path d="M46 188 V104 H92" stroke="#2b6cb0"/>
 </g>
 <g class="direct" fill="none" stroke-width="6" stroke-linecap="round">
  <path d="M148 80 H236 V64" style="stroke:var(--wp-flowc,#e5533d)"/>
  <path d="M264 64 V104 H148" style="stroke:var(--wp-retc,#3b8fe8)"/>
 </g>
 <!-- ballon tampon : boucle de charge (PAC ↔ ballon) et boucle de distribution (ballon ↔ émetteurs) -->
 <g class="buf">
  <g fill="none" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
   <path d="M148 80 H204 V128 H232" style="stroke:var(--wp-flowc,#e5533d)"/>
   <path d="M232 186 H190 V104 H148" style="stroke:var(--wp-retc,#3b8fe8)"/>
   <path d="M251 118 V84 H236 V64" style="stroke:var(--wp-tankc,#e5533d)"/>
   <path d="M264 64 V96 H280 V180 H270" style="stroke:var(--wp-retc,#3b8fe8)"/>
  </g>
  <rect x="234" y="120" width="38" height="78" rx="12" fill="#000" opacity=".12"/>
  <rect x="232" y="118" width="38" height="78" rx="12" fill="url(#wp-tank)" stroke="#8f99a4" stroke-width="1.2"/>
  <rect x="237" y="124" width="6" height="66" rx="3" fill="#fff" opacity=".28"/>
 </g>
 <!-- évaporateur (captage) et condenseur (chauffage) : échangeurs à plaques -->
 <g fill="#5fa8e8" stroke="#2f6ea8" stroke-width=".5">
  <rect x="86" y="70" width="2.6" height="42" rx=".8"/><rect x="89.6" y="70" width="2.6" height="42" rx=".8"/><rect x="93.2" y="70" width="2.6" height="42" rx=".8"/>
  <rect x="96.8" y="70" width="2.6" height="42" rx=".8"/><rect x="100.4" y="70" width="2.6" height="42" rx=".8"/>
 </g>
 <g fill="#f0883e" stroke="#a8541c" stroke-width=".5">
  <rect x="137" y="70" width="2.6" height="42" rx=".8"/><rect x="140.6" y="70" width="2.6" height="42" rx=".8"/><rect x="144.2" y="70" width="2.6" height="42" rx=".8"/>
  <rect x="147.8" y="70" width="2.6" height="42" rx=".8"/><rect x="151.4" y="70" width="2.6" height="42" rx=".8"/>
 </g>
 <!-- circuit frigorifique : aspiration, refoulement, détendeur -->
 <g fill="none" stroke="#c98a55" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M94 70 V64 H114 V92"/><path d="M126 92 V64 H146 V70"/><path d="M146 112 V136 H94 V112"/>
 </g>
 <circle cx="120" cy="136" r="3" fill="#8c95a0" stroke="#5c6570"/>
 <g stroke="#fff" stroke-width="1.2" stroke-linecap="round" fill="none">
  <path class="dash ref" d="M94 70 V64 H114 V92"/><path class="dash ref" d="M126 92 V64 H146 V70"/><path class="dash ref" d="M146 112 V136 H94 V112"/>
 </g>
 <!-- compresseur -->
 <g class="comp">
  <rect x="107" y="88" width="26" height="40" rx="11" fill="url(#wp-comp)" stroke="#1b2127"/>
  <ellipse cx="120" cy="92" rx="11" ry="4" fill="#6b7580" opacity=".55"/>
  <rect x="103" y="127" width="34" height="6" rx="2" fill="#4a535e"/>
 </g>
 <!-- circulation de l'eau -->
 <g stroke="#fff" stroke-width="2.4" stroke-linecap="round" fill="none">
  <path class="dash src" d="M30 188 V80 H72"/><path class="dash src" d="M72 104 H46 V188"/>
  <g class="direct"><path class="dash ch" d="M172 80 H236 V64"/><path class="dash ch" d="M264 64 V104 H172"/></g>
  <g class="buf"><path class="dash chg" d="M168 80 H204 V128 H232"/><path class="dash chg" d="M232 186 H190 V104 H168"/>
   <path class="dash ch" d="M251 118 V84 H236 V64"/><path class="dash ch" d="M264 64 V96 H280 V180 H270"/></g>
 </g>
</svg>`;

  const TILES = [
    ['power', 'mdi:flash', 'show_power', 'entity_power'],
    ['heat', 'mdi:heat-wave', 'show_heat', 'entity_heat_power'],
    ['cop', 'mdi:speedometer', 'show_cop', 'entity_cop'],
    ['flow', 'mdi:thermometer-chevron-up', 'show_temps', 'entity_flow_temp'],
    ['ret', 'mdi:thermometer-chevron-down', 'show_temps', 'entity_return_temp'],
    ['delta', 'mdi:delta', 'show_temps', 'entity_flow_temp'],
    ['buffer', 'mdi:storage-tank', 'show_temps', 'entity_buffer_temp'],
    ['src_in', 'mdi:thermometer-water', 'show_source', 'entity_source_in_temp'],
    ['src_out', 'mdi:thermometer-low', 'show_source', 'entity_source_out_temp'],
    ['rate', 'mdi:pump', 'show_flow_rate', 'entity_flow_rate'],
    ['energy', 'mdi:lightning-bolt-circle', 'show_energy', 'entity_energy'],
    ['heat_energy', 'mdi:fire-circle', 'show_energy', 'entity_heat_energy'],
    ['scop', 'mdi:chart-line', 'show_scop', 'entity_scop'],
  ];
  const SHOW = ['show_status', 'show_power', 'show_heat', 'show_cop', 'show_temps', 'show_source', 'show_flow_rate', 'show_energy', 'show_scop', 'animations'];

  class ApplianceWaterHeatPumpCard extends HTMLElement {
    static getStubConfig(hass) {
      const ids = Object.keys((hass && hass.states) || {});
      const f = (re, dom) => ids.find((i) => (!dom || i.startsWith(dom + '.')) && re.test(i)) || '';
      return {
        entity_status: f(/pac|heat_?pump|pompe_a_chaleur|geotherm/i, 'climate'),
        entity_power: f(/(pac|heat_?pump|pompe_a_chaleur|geotherm).*(power|puissance)/i, 'sensor'),
        entity_heat_power: f(/(chaleur|heat_meter|thermi|multical|kamstrup).*(power|puissance)/i, 'sensor'),
      };
    }
    static getConfigForm() {
      const ent = (name, domain, extra = {}) => ({ name, selector: { entity: { domain, ...extra } } });
      const RELAY = ['binary_sensor', 'switch', 'input_boolean', 'sensor'];
      return {
        schema: [
          { name: 'name', selector: { text: {} } },
          ent('entity_status', ['climate', 'sensor', 'select', 'input_select', 'water_heater']),
          { type: 'grid', name: '', schema: [ent('entity_power', 'sensor'), ent('entity_heat_power', 'sensor'), ent('entity_cop', 'sensor')] },
          { type: 'grid', name: '', schema: [ent('entity_flow_temp', 'sensor'), ent('entity_return_temp', 'sensor'), ent('entity_flow_rate', 'sensor')] },
          { type: 'grid', name: '', schema: [ent('entity_source_in_temp', 'sensor'), ent('entity_source_out_temp', 'sensor')] },
          { type: 'grid', name: '', schema: [{ name: 'buffer_tank', selector: { boolean: {} } }, ent('entity_buffer_temp', 'sensor')] },
          { type: 'grid', name: '', schema: [ent('entity_energy', 'sensor'), ent('entity_heat_energy', 'sensor'), ent('entity_scop', 'sensor')] },
          { type: 'grid', name: '', schema: [ent('entity_compressor', RELAY), ent('entity_source_pump', RELAY)] },
          { type: 'grid', name: '', schema: [
            { name: 'threshold', selector: { number: { min: 0, max: 2000, step: 5, mode: 'box', unit_of_measurement: 'W' } } },
            { name: 'off_threshold', selector: { number: { min: 0, max: 500, step: 0.1, mode: 'box', unit_of_measurement: 'W' } } },
            { name: 'source_threshold', selector: { number: { min: 0, max: 5000, step: 5, mode: 'box', unit_of_measurement: 'W' } } },
            { name: 'compressor_threshold', selector: { number: { min: 0, max: 5000, step: 5, mode: 'box', unit_of_measurement: 'W' } } },
            { name: 'heating_delay', selector: { number: { min: 0, max: 600, step: 1, mode: 'box', unit_of_measurement: 's' } } },
          ] },
          { type: 'grid', name: '', schema: SHOW.map((name) => ({ name, selector: { boolean: {} }, default: true })) },
          { name: 'language', selector: { select: { options: Object.keys(T) } } },
        ],
      };
    }
    setConfig(c) {
      if (!c || typeof c !== 'object') throw new Error('Invalid configuration');
      this._c = { ...Object.fromEntries(SHOW.map((k) => [k, true])), threshold: 100, off_threshold: 0.5, ...c };
      this._built = false;
      if (this._hass) this._render();
    }
    set hass(h) { this._hass = h; if (this._c) this._render(); }
    getCardSize() { return 5; }
    disconnectedCallback() { clearTimeout(this._dt); this._dt = null; }
    // Chauffage seulement si la puissance reste au-dessus du seuil pendant heating_delay secondes
    // (ex. pompes de puits et du primaire qui tournent ~20 s par jour pendant la veille).
    _sustained(above) {
      const d = (+this._c.heating_delay || 0) * 1000;
      if (!above) { this._since = null; clearTimeout(this._dt); this._dt = null; return false; }
      if (!d) return true;
      const now = Date.now();
      if (this._since == null) this._since = Math.min(now, Date.parse((this._st(this._c.entity_power) || {}).last_changed) || now);
      const left = this._since + d - now;
      if (left <= 0) return true;
      if (!this._dt) this._dt = setTimeout(() => { this._dt = null; if (this._hass) this._render(); }, left + 50);
      return false;
    }
    getGridOptions() { return { columns: 12, min_columns: 6, rows: 'auto' }; }

    _t(k) { return T[this._lang()][k] ?? T.en[k] ?? k; }
    _lang() { const l = (this._c.language || (this._hass && this._hass.language) || 'en').slice(0, 2); return T[l] ? l : 'en'; }
    _st(id) { return id && this._hass.states[id]; }
    _num(id) {
      const s = this._st(id); if (!s) return NaN;
      const v = parseFloat(String(s.state).replace(',', '.'));
      return isFinite(v) ? v : NaN;
    }
    _watts(id) {
      const v = this._num(id); if (isNaN(v)) return NaN;
      const u = ((this._st(id).attributes || {}).unit_of_measurement || '').toLowerCase();
      return u === 'kw' ? v * 1000 : u === 'mw' ? v * 1e6 : v;
    }
    // relais (binary_sensor, switch…) : on / off ; capteur numérique : marche au-dessus de 0
    _on(id) {
      const s = this._st(id); if (!s) return false;
      const v = this._num(id);
      return isNaN(v) ? /^(on|true|running|marche|heat|cool)/i.test(String(s.state)) : v > 0;
    }
    _unit(id, d) { const s = this._st(id); return (s && s.attributes && s.attributes.unit_of_measurement) || d; }
    _fmt(v, d = 0) { return isNaN(v) ? '--' : v.toLocaleString(this._lang() === 'en' ? 'en-US' : this._lang(), { maximumFractionDigits: d, minimumFractionDigits: 0 }); }
    _kw(w) { return isNaN(w) ? ['--', ''] : w >= 1000 ? [this._fmt(w / 1000, 2), 'kW'] : [this._fmt(w, 0), 'W']; }

    _build() {
      const root = this.shadowRoot || this.attachShadow({ mode: 'open' });
      root.innerHTML = `<style>${CSS}</style><ha-card><div class="wrap">
        <div class="head"><div class="title" id="title"></div><div class="badge" id="badge"></div></div>
        ${SVG}
        <div class="tiles" id="tiles">${TILES.map(([k, ic]) => `<div class="tile hide" data-k="${k}"><div class="l"><ha-icon icon="${ic}"></ha-icon><span class="lbl"></span></div><div class="v"></div></div>`).join('')}</div>
      </div></ha-card>`;
      this._root = root; this._card = root.querySelector('ha-card'); this._built = true;
    }

    // État : entité climate / texte si fournie, sinon puissance électrique (compresseur au-dessus du seuil)
    _compute() {
      const c = this._c, pw = this._watts(c.entity_power), heat = this._watts(c.entity_heat_power);
      const s = this._st(c.entity_status);
      const state = s ? String(s.state).toLowerCase() : '';
      const action = s ? String((s.attributes || {}).hvac_action || '').toLowerCase() : '';
      const txt = `${state} ${action}`, key = action || state;
      let st;
      if (/alarm|alarme|error|erreur|fault|défaut|defaut|lock|verrou/.test(txt)) st = 'alarm';
      else if (s && /^(unavailable|unknown|off|arr[eê]t|eteint|éteint)$/.test(state)) st = 'off';
      else if (/idle|standby|veille|attente/.test(action)) st = 'standby';
      else if (/dhw|ecs|hot.?water|eau.?chaude|sanitaire/.test(txt) || (s && String(c.entity_status).startsWith('water_heater.'))) st = 'dhw';
      else if (/cool|rafra|froid/.test(key) && key !== 'heat_cool') st = 'cooling';
      else if (/heat|chauff|compress|running|marche|^on/.test(key)) st = 'heating';
      else if (s) st = 'standby';
      else if (!isNaN(pw)) st = this._sustained(pw > c.threshold) ? 'heating' : pw > c.off_threshold ? 'standby' : 'off';
      else if (!isNaN(heat)) st = heat > 0 ? 'heating' : 'standby';
      else st = 'standby';
      const active = st === 'heating' || st === 'dhw' || st === 'cooling';
      // Trois animations séparées, par paliers de puissance ou par entité (relais) :
      // - circuit de chauffage au-dessus de threshold (une PAC tout-ou-rien chauffe souvent
      //   avec le seul circulateur, ~40 W, compresseur à l'arrêt) ;
      // - captage (pompes de puits / primaire) au-dessus de source_threshold : elles démarrent
      //   avant le compresseur et s'arrêtent après ; sans réglage, captage = compresseur ;
      // - compresseur et circuit frigorifique au-dessus de compressor_threshold (sinon threshold).
      const pump = active && (isNaN(pw) || pw > c.threshold);
      const run = c.entity_compressor ? this._on(c.entity_compressor) : active && (isNaN(pw) || pw > (c.compressor_threshold ?? c.threshold));
      const src = c.entity_source_pump ? this._on(c.entity_source_pump)
        : c.source_threshold != null && !isNaN(pw) ? pw > c.source_threshold || run : run;
      const rate = this._num(c.entity_flow_rate);
      // ballon tampon : la PAC charge le ballon (compresseur, ou débit côté PAC s'il est mesuré)
      // et le circulateur distribue l'eau du ballon vers les émetteurs, compresseur arrêté ou non
      if (c.buffer_tank) {
        const chg = c.entity_flow_rate ? rate > 0 : run;
        return { st, run, src, chg, circ: pump, pw, heat, rate };
      }
      const circ = c.entity_flow_rate ? rate > 0 : pump || heat > 0;
      return { st, run, src, chg: false, circ, pw, heat, rate };
    }

    _render() {
      if (!this._built) this._build();
      const c = this._c, card = this._card, r = this._root;
      const { st, run, src, chg, circ, pw, heat, rate } = this._compute();
      const flow = this._num(c.entity_flow_temp), ret = this._num(c.entity_return_temp);
      card.className = `${st} ${run ? 'run' : ''} ${src ? 'src' : ''} ${chg ? 'chg' : ''} ${circ ? 'circ' : ''} ${c.buffer_tank ? 'buffer' : ''} ${c.animations === false ? 'noanim' : ''}`;
      // départ / retour : bleu à 20 °C, rouge à 55 °C (températures de PAC, plus basses qu'une chaudière)
      const tc = (t, d) => isNaN(t) ? d : `color-mix(in srgb, #e5392b ${Math.round(Math.max(0, Math.min(1, (t - 20) / 35)) * 100)}%, #3b8fe8)`;
      card.style.setProperty('--wp-flowc', tc(flow, '#e5533d'));
      card.style.setProperty('--wp-retc', tc(ret, '#3b8fe8'));
      const buf = this._num(c.entity_buffer_temp);
      card.style.setProperty('--wp-tankc', tc(isNaN(buf) ? flow : buf, '#e5533d'));

      r.getElementById('title').textContent = c.name || this._t('name');
      const badge = r.getElementById('badge'); badge.textContent = this._t(st); badge.style.display = c.show_status === false ? 'none' : '';
      r.getElementById('dsp').textContent = st === 'off' ? 'OFF' : st === 'alarm' ? 'Err' : isNaN(flow) ? '--' : `${Math.round(flow)}°`;

      // COP : capteur si fourni, sinon puissance thermique / puissance électrique quand le compresseur tourne
      let cop = this._num(c.entity_cop);
      if (!c.entity_cop && run && heat > 0 && pw > 0) cop = heat / pw;
      const hasCop = c.entity_cop || (c.entity_heat_power && c.entity_power);
      const V = {
        power: [c.entity_power, ...this._kw(pw)],
        heat: [c.entity_heat_power, ...this._kw(heat)],
        cop: [hasCop, this._fmt(cop, 1), ''],
        flow: [c.entity_flow_temp, this._fmt(flow, 1), '°C'],
        ret: [c.entity_return_temp, this._fmt(ret, 1), '°C'],
        delta: [c.entity_flow_temp && c.entity_return_temp, this._fmt(flow - ret, 1), 'K'],
        buffer: [c.entity_buffer_temp, this._fmt(buf, 1), '°C'],
        src_in: [c.entity_source_in_temp, this._fmt(this._num(c.entity_source_in_temp), 1), '°C'],
        src_out: [c.entity_source_out_temp, this._fmt(this._num(c.entity_source_out_temp), 1), '°C'],
        rate: [c.entity_flow_rate, this._fmt(rate, 2), this._unit(c.entity_flow_rate, 'l/h')],
        energy: [c.entity_energy, this._fmt(this._num(c.entity_energy), 1), this._unit(c.entity_energy, 'kWh')],
        heat_energy: [c.entity_heat_energy, this._fmt(this._num(c.entity_heat_energy), 2), this._unit(c.entity_heat_energy, 'kWh')],
        scop: [c.entity_scop, this._fmt(this._num(c.entity_scop), 2), ''],
      };
      TILES.forEach(([k, , opt, more]) => {
        const el = r.querySelector(`.tile[data-k="${k}"]`); const [shown, val, unit] = V[k];
        el.classList.toggle('hide', !shown || c[opt] === false);
        el.querySelector('.lbl').textContent = this._t(k);
        el.querySelector('.v').innerHTML = `${val}<small>${unit}</small>`;
        const id = k === 'cop' && !c.entity_cop ? c.entity_heat_power : c[more];
        el.onclick = () => { if (id) this.dispatchEvent(new CustomEvent('hass-more-info', { detail: { entityId: id }, bubbles: true, composed: true })); };
      });
    }
  }
  customElements.define(TAG, ApplianceWaterHeatPumpCard);

  window.customCards = window.customCards || [];
  window.customCards.push({
    type: TAG, name: 'Appliance – PAC eau/eau / Water heat pump',
    description: 'Pompe à chaleur eau/eau ou géothermique animée : compresseur, captage, départ/retour, COP.', preview: true,
  });
})();
