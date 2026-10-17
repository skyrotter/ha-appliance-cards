# Appliance Cards for Home Assistant

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://hacs.xyz/docs/faq/custom_repositories)
[![Validate](https://github.com/skyrotter/ha-appliance-electromenager-cards/actions/workflows/validate.yml/badge.svg)](https://github.com/skyrotter/ha-appliance-electromenager-cards/actions/workflows/validate.yml)

Thirty-six Lovelace cards for household appliances, with **realistic animated illustrations** (tumbling drum, water and foam, spin with vibration, rotating spray arms, glowing oven element, turntable, opening fridge door, flickering pellet-stove flames, water flowing through a pool pump, a 3D printer building its part layer by layer, a chest freezer lid lifting, freezer drawers sliding out, a sun powering solar panels on their frame, a bathroom extractor fan drawing in steam, cooktop zones glowing under a steaming pot, an electric radiator sending heat waves, a dual-basket air fryer blowing hot air over fries, a coffee maker filling the carafe or the cup, a flat TV switching on like a real screen, a range hood sucking up the steam, an air-conditioning split and its outdoor heat pump, a heated towel rail glowing with warm towels, a homelab server rack with blinking LEDs and spinning fans, a desktop PC with RGB fans, a laptop with a live screen, a wine cooler with cold air flowing between the bottles, an aquarium with swimming fish, a Linky electricity meter, a home battery bank, an EV wallbox charging a car, a robot vacuum, a robot mower a pellet boiler feeding its burner through an auger and a gas boiler with its blue flames…), live status, power, energy and cost.
They follow your Home Assistant theme (light/dark) and switch between **French** and **English** automatically.

**▶ [Try it online / Essayer en ligne](https://skyrotter.github.io/ha-appliance-electromenager-cards/docs/demo.html)** · [Automated tests](https://skyrotter.github.io/ha-appliance-electromenager-cards/docs/tests.html)

*🇫🇷 Version française plus bas.*

<p align="center"><img src="docs/hero.gif" width="560" alt="Animated appliance cards for Home Assistant"></p>

| Card | Type |
|---|---|
| Washing machine | `custom:appliance-washer-card` |
| Dryer | `custom:appliance-dryer-card` |
| Dishwasher | `custom:appliance-dishwasher-card` |
| Water heater | `custom:appliance-water-heater-card` |
| Oven | `custom:appliance-oven-card` |
| Microwave | `custom:appliance-microwave-card` |
| Refrigerator | `custom:appliance-fridge-card` |
| Pellet stove | `custom:appliance-pellet-stove-card` |
| Pool pump | `custom:appliance-pool-pump-card` |
| 3D printer | `custom:appliance-printer-3d-card` |
| Chest freezer | `custom:appliance-chest-freezer-card` |
| Upright drawer freezer | `custom:appliance-drawer-freezer-card` |
| Solar panels | `custom:appliance-solar-card` |
| Bathroom extractor fan (VMC) | `custom:appliance-vmc-card` |
| Electric cooktop | `custom:appliance-hob-card` |
| Electric radiator | `custom:appliance-radiator-card` |
| Air fryer (dual basket) | `custom:appliance-air-fryer-card` |
| Coffee maker (drip, pods, espresso) | `custom:appliance-coffee-maker-card` |
| Flat TV | `custom:appliance-tv-card` |
| Range hood | `custom:appliance-range-hood-card` |
| Air conditioner – indoor split | `custom:appliance-ac-split-card` |
| Heat pump – outdoor unit | `custom:appliance-heat-pump-card` |
| Heated towel rail | `custom:appliance-towel-dryer-card` |
| Server rack (homelab) | `custom:appliance-server-rack-card` |
| Desktop PC | `custom:appliance-desktop-pc-card` |
| Laptop | `custom:appliance-laptop-card` |
| Wine cooler | `custom:appliance-wine-cooler-card` |
| Aquarium | `custom:appliance-aquarium-card` |
| Linky electricity meter | `custom:appliance-linky-card` |
| Home battery (solar storage) | `custom:appliance-battery-card` |
| EV charger (wallbox + car) | `custom:appliance-ev-charger-card` |
| Robot vacuum | `custom:appliance-robot-vacuum-solo-card` |
| Robot mower | `custom:appliance-robot-mower-solo-card` |
| Pellet boiler | `custom:appliance-pellet-boiler-card` |
| Gas boiler | `custom:appliance-gas-boiler-card` |
| Water-to-water / ground source heat pump | `custom:appliance-water-heat-pump-card` |

Works with a simple smart plug (power sensor only) as well as with connected appliances (program, remaining time, progress, door…).

## Installation

### HACS (recommended)

1. HACS → ⋮ → **Custom repositories** → add `https://github.com/skyrotter/ha-appliance-electromenager-cards`, category **Dashboard**.
2. Search for **Appliance Cards**, install, then reload your browser (Ctrl+F5).

### Manual

1. Copy `dist/ha-appliance-electromenager-cards.js` to `/config/www/`.
2. Settings → Dashboards → ⋮ → Resources → add `/local/ha-appliance-electromenager-cards.js` (JavaScript module).

## Configuration

All cards have a visual editor. When added from the card picker, entities are detected automatically by name (`lave_linge`, `washer`, `dryer`, `frigo`, `ballon`…).

### Common options

| Option | Description |
|---|---|
| `entity` | Status entity: `switch`, `input_boolean`, `binary_sensor`, `sensor`, `input_select`, `water_heater`… |
| `power` | Power sensor (W or kW) |
| `energy` | Energy sensor (kWh) — e.g. today's consumption |
| `cost` | Cost sensor (any currency) |
| `switch` | Switch controlled by the power button (button hidden if unset) |
| `threshold` | Power above which the appliance is considered running (W). Defaults: 10 (washer/dryer/dishwasher), 20 (fridge), 50 (others) |
| `name` | Custom name |
| `color` | Accent color (any CSS color) |
| `show_toggle` | `false` to hide the power button |
| `animations` | `false` to disable animations |
| `confirm_off` | Washer, dryer, dishwasher: `false` to turn off the safety confirmation (default `true`, see below) |

### Type-specific options

| Option | Cards |
|---|---|
| `remaining` | washer, dryer, dishwasher, oven, microwave, air fryer — minutes, `H:MM[:SS]`, or a timestamp of the end |
| `progress` | washer, dryer, dishwasher — % |
| `program` | washer, dryer, dishwasher, oven, microwave, air fryer |
| `door` | all except water heater (`binary_sensor`, `on` = open) |
| `temperature`, `target_temperature` | water heater, oven, fridge (`temperature` only) |
| `freezer_temperature`, `freezer_door` | fridge |
| `power_level` (1–5), `pellet_level` (%), `ignition_threshold` (default 250 W), `pellet_alert` (default 15 %) | pellet stove |
| `temperature` (water), `runtime` (filtration time today), `speed` (rpm or %), `max_power` | pool pump |
| `progress`, `remaining`, `program` (job name), `temperature` (nozzle), `bed_temperature`, `filament_color` | 3D printer |
| `temperature`, `door`, `freezer_max_temperature` (default −12 °C) | chest freezer, drawer freezer |
| `power` (production), `energy` (today), `cost` (savings), `max_power` (peak Wp, default 3000), `sun_entity` (default `sun.sun`) | solar panels |
| `speed` (select/sensor: text, level or %), `humidity`, `high_threshold` (default 35 W), `humidity_max` (default 70 %) | extractor fan (VMC) |
| `zone_1`…`zone_4` (level 0–9, W or %), `zone_power` (default 1500 W), `residual_minutes` (default 10) | cooktop |
| `mode` (pilot wire / select: comfort, eco, frost, off), `window`, `temperature`, `target_temperature`, `max_power` (default 1500 W) | electric radiator |
| `max_temperature` (default 8), `freezer_max_temperature` (default −12) | fridge alerts |

### How the status is computed

1. `entity` set to a descriptive state (`running`, `finished`, `idle`, `off`… or a free text such as *Rinsing*) → used as-is.
2. `entity` is an `input_boolean`/`binary_sensor` → `on` = running.
3. `entity`/`switch` is a plug that is on → the **power sensor** decides (above `threshold` = running, otherwise standby).
4. Power only → above `threshold` = running.

**Phases** (washer, dryer, dishwasher): if the status entity or `program` contains *wash/lavage*, *rinse/rinçage*, *spin/essorage*, *dry/séchage* or *cool/refroidissement*, the illustration and LCD follow that phase (water, foam, fast spin…). Otherwise the default phase is used.

Tip: for washers, a cycle-detection automation driving an `input_boolean` is more reliable than raw power (soaking phases drop to a few watts). Ready-to-use example below.

### Smart plug + cycle detection (recommended for washer, dryer, dishwasher)

A washer pauses, soaks and heats in steps: its power can drop to a few watts for several minutes in the middle of a cycle. Reading raw power alone makes the card flicker between *Running* and *Standby*. This automation fixes that. It decides a cycle has **started** when power stays above 100 W for 30 s, and that it has **ended** when power stays below 20 W for 8 minutes.

**1. Create the helper:** Settings → Devices & services → Helpers → Create helper → Toggle → name it `Washer running` (entity `input_boolean.washer_running`). Or in YAML:

```yaml
input_boolean:
  washer_running:
    name: Washer running
    icon: mdi:washing-machine
```

**2. Add the automation** (Settings → Automations → ⋮ → Edit in YAML). Replace `sensor.washer_plug_power` with your plug's power sensor:

```yaml
alias: Washer – cycle detection
mode: restart
triggers:
  - trigger: numeric_state
    entity_id: sensor.washer_plug_power
    above: 100
    for: "00:00:30"
    id: start
  - trigger: numeric_state
    entity_id: sensor.washer_plug_power
    below: 20
    for: "00:08:00"
    id: end
actions:
  - choose:
      - conditions:
          - condition: trigger
            id: start
        sequence:
          - action: input_boolean.turn_on
            target:
              entity_id: input_boolean.washer_running
      - conditions:
          - condition: trigger
            id: end
          - condition: state
            entity_id: input_boolean.washer_running
            state: "on"
        sequence:
          - action: input_boolean.turn_off
            target:
              entity_id: input_boolean.washer_running
          # optional: get notified when the laundry is done
          # - action: notify.mobile_app_your_phone
          #   data:
          #     message: "The washing machine is done 🧺"
```

**3. Use it in the card:**

```yaml
type: custom:appliance-washer-card
entity: input_boolean.washer_running
power: sensor.washer_plug_power
energy: sensor.washer_plug_energy_today
```

Suggested values: washer 100 W / 20 W / 8 min, dryer 100 W / 15 W / 5 min, dishwasher 50 W / 10 W / 10 min (dishwashers sit at a few watts while drying). Adjust them to your appliance by looking at its power history. Requires Home Assistant 2024.10 or newer for the `triggers:` / `actions:` syntax; on older versions, use `trigger:` / `platform:` / `action:` / `service:`.

### Pellet stove

A pellet stove draws a lot of power while **igniting** (the igniter element, typically 250–400 W for a few minutes) and little while **burning** (fan and auger, typically 30–100 W). With just a power-monitoring plug, the card therefore tells apart:

| Power | Status | Animation |
|---|---|---|
| above `ignition_threshold` (250 W) | Igniting | small flame, red igniter, smoke from the flue |
| above `threshold` (20 W) | Heating | full flames sized by `power_level`, glowing embers, warm air |
| below `threshold` | Off / Standby | clock on the display |

Shutting down, cleaning and alarms can't be guessed from power: they come from a status entity (`entity:`) whose text contains *extinction/shutdown/cooling*, *alarme/alarm/error*, *allumage/ignition*, *eco/standby*… A `climate` entity from a stove integration also works (its `hvac_action`, current and target temperature are used).

```yaml
type: custom:appliance-pellet-stove-card
power: sensor.stove_plug_power          # enough on its own
energy: sensor.stove_plug_energy_today
temperature: sensor.living_room_temperature
target_temperature: input_number.stove_target   # optional
power_level: sensor.stove_power_level           # optional, 1–5
pellet_level: sensor.stove_pellet_level         # optional, %
```

⚠️ **Never cut a pellet stove's power while it is burning or shutting down**: its fan must keep running to evacuate smoke. Use the stove's own controls or integration to turn it off. If you set `switch:`, the card asks for a second click before cutting power while the stove is igniting, heating or shutting down.

### Pool pump

Water flows in a loop on the drawing: from the pool, through the pre-filter (water swirling, leaves in the basket), the pump and back to the pool, with bubbles at the return jet. The motor fan spins and the pump hums while filtering.

- With a smart plug: above `threshold` (50 W) = **Filtering**. Plug on below it = **Standby**.
- Animation speed follows the pump speed: `speed` in rpm (2800 rpm = full speed) or %, or the power divided by `max_power` for variable-speed pumps.
- The display shows the rpm, the % or the power.
- `runtime`: filtration time today, e.g. a `history_stats` sensor:

```yaml
sensor:
  - platform: history_stats
    name: Pool filtration today
    entity_id: switch.pool_pump
    state: "on"
    type: time
    start: "{{ today_at() }}"
    end: "{{ now() }}"
```

```yaml
type: custom:appliance-pool-pump-card
switch: switch.pool_pump
entity: switch.pool_pump
power: sensor.pool_pump_power
energy: sensor.pool_pump_energy_today
temperature: sensor.pool_water_temperature
runtime: sensor.pool_filtration_today
max_power: 1100
```

### 3D printer

An open-frame, bed-slinger style printer (Bambu Lab A1, Prusa MK, Ender…). The print head sweeps left and right, the gantry rises layer by layer and the part grows with `progress`. The spool turns while printing. While heating, the nozzle glows and heat rises from the bed. The display shows the progress, the nozzle temperature, PAUSE, DONE or ERROR.

- **With a printer integration** (Bambu Lab, OctoPrint, Moonraker/Klipper, PrusaLink…): use its status entity as `entity`. States such as `prepare`, `running`, `pause`, `finish`, `failed`, `idle`, `offline` or `Printing` are recognised. Add `progress`, `remaining`, nozzle and bed temperatures and the job name (`program`).
- **With a smart plug only**: above `threshold` (40 W) = Printing. The part then grows in a loop, since the real progress is unknown.
- Set `filament_color` to match your spool (default orange).
- If you set `switch:`, cutting power while printing or paused needs a second click.

```yaml
type: custom:appliance-printer-3d-card
entity: sensor.a1_print_status
progress: sensor.a1_print_progress
remaining: sensor.a1_remaining_time
temperature: sensor.a1_nozzle_temperature
bed_temperature: sensor.a1_bed_temperature
program: sensor.a1_task_name
power: sensor.printer_plug_power
filament_color: "#ff8a1f"
```

### Freezers (chest and upright with drawers)

- **Chest freezer**: drawn in three-quarter view. When `door` opens, the **lid lifts up** and reveals the lit inside (tubs, bags, basket) with cold mist escaping.
- **Upright drawer freezer**: when `door` opens, the door swings open on **four transparent drawers** full of food and one **drawer slides out**.
- Both: the display shows the temperature, the snowflake pulses and cold air flows out at the bottom while the compressor runs (power above `threshold`, 20 W). A **too warm** alert fires above `freezer_max_temperature` (−12 °C by default), plus a door-open alert.
- A freezer should never be switched off by mistake: if you set `switch:`, turning it off always needs a second click.

```yaml
type: custom:appliance-chest-freezer-card
power: sensor.chest_freezer_plug_power
energy: sensor.chest_freezer_plug_energy_today
temperature: sensor.chest_freezer_temperature
door: binary_sensor.chest_freezer_lid
```

### Solar panels

Just the sun, two panels on their aluminium frame and the inverter on its post (no background).

| Situation | What you see | Display |
|---|---|---|
| Producing | yellow sun growing with production (vs `max_power`), turning rays, light sweeping over the panels, energy flowing along the cable to the inverter | `2.4kW` |
| Low production (< 15 % of peak) | same, slower | `280W` |
| Not producing (night or no sun) | grey sun, darkened panels, cable and inverter at rest | `0W` / `NIGHT` |

Tiles: production now, energy today, savings (`cost`) and % of peak.

```yaml
type: custom:appliance-solar-card
power: sensor.solar_power
energy: sensor.solar_energy_today
cost: sensor.solar_savings_today   # optional
max_power: 3000                    # your installation's peak power (Wp)
```

### Bathroom extractor fan (VMC)

A wall-mounted bathroom extractor: white square front with a wavy top edge, round grille with horizontal slats and curved fan blades behind it, on a tiled bathroom wall.

- **Low speed**: the blades turn slowly and humid air is drawn towards the grille.
- **High speed**: everything goes faster.
- **High humidity** (above `humidity_max`, 70 %): steam rises and condensation drops run down the tiles, with an alert.
- With a smart plug: 5–35 W = low speed, above `high_threshold` (35 W) = high speed. A `speed` entity (select, sensor, level or %) takes priority if you have one.

```yaml
type: custom:appliance-vmc-card
power: sensor.vmc_plug_power
energy: sensor.vmc_plug_energy_today
humidity: sensor.bathroom_humidity
```

### Electric cooktop

A black glass cooktop with four zones, a saucepan on the front-left zone and a frying pan on the back-right one.

- Each active zone **glows red**, brighter with its level, and the touch strip shows the level (1–9).
- The pot steams; at high level the lid rattles. The pan sizzles.
- After cooking, an **H** (residual heat) stays on the zones that were used for `residual_minutes` (10 min).
- **Per-zone data** (`zone_1` = front-left, `zone_2` = front-right, `zone_3` = back-left, `zone_4` = back-right), as a level, W or %, when your cooktop integration provides it (Home Connect, SmartThings…).
- **Total power only**: the zones are lit from the power (about `zone_power`, 1500 W, per zone).

⚠️ A cooktop is wired on a dedicated 20–32 A circuit, **never on a smart plug**. Measure it with a DIN-rail energy meter or a CT clamp at the electrical panel.

```yaml
type: custom:appliance-hob-card
power: sensor.cooktop_power      # from a DIN-rail meter or CT clamp
energy: sensor.cooktop_energy_today
```

### Electric radiator

A wall-mounted inertia radiator with six wide vertical elements and its control box (display, Comfort / Eco / Frost icons and buttons).

- **Heating**: the columns glow and heat waves rise from the top grille, stronger with the power drawn (vs `max_power`).
- **Mode**: sun = Comfort, moon = Eco, snowflake = Frost protection (`H-G` on the display), read from a pilot-wire `select`, a `climate` preset or any mode entity. The display shows the target temperature.
- **Window open** (`window`): cold air blows in and an alert is shown.
- Works with a `climate` entity (current/target temperature, `hvac_action`, `preset_mode`), a pilot-wire mode entity, or simply a power sensor (above `threshold`, 50 W = heating).

```yaml
type: custom:appliance-radiator-card
entity: climate.living_room_radiator   # or power / mode only
power: sensor.radiator_power
window: binary_sensor.living_room_window
```

### Air fryer

<p align="center"><img src="docs/air-fryer.gif" width="340" alt="Air fryer card"></p>

A black dual-basket air fryer with its touch panel and two stainless drawers with windows (fries on the left, nuggets on the right).

- **Cooking** (power above `threshold`, 50 W by default): the baskets light up, the heating coils glow, hot air swirls, the food bounces and steam escapes from the top. The display shows the remaining time (`remaining`), otherwise the temperature (`temperature`), otherwise `ON`.
- **Finished**: `End` in green on the display (with a status entity reporting `finished`), food golden brown.
- Designed for a simple smart plug (power + energy), works with a connected air fryer too.

```yaml
type: custom:appliance-air-fryer-card
entity: switch.airfryer_plug        # optional: the plug
power: sensor.airfryer_power
energy: sensor.airfryer_energy_today
cost: sensor.airfryer_cost_today
# remaining: sensor.airfryer_remaining   # optional
```

### Coffee maker

<p align="center"><img src="docs/coffee-maker.gif" width="520" alt="Coffee maker card"></p>

Three illustrations, chosen with `style`: `filtre` (drip coffee maker with glass carafe, default), `dosette` (pod machine: Senseo, Nespresso, Dolce Gusto…) or `expresso` (bean-to-cup espresso machine).

- **Brewing** (power above `threshold`, 300 W by default): coffee drips or flows, the carafe or cup fills up, the water tank empties, steam rises, the buttons blink and the display shows `BREW` (`CAFE` in French).
- **Keeping warm** (drip only, between `warm_threshold` — 5 W by default — and `threshold`): the hot plate glows and the full carafe steams.
- **Ready** (pods / espresso, same power range): green LEDs, display `READY`.
- Designed for a smart plug (power + energy). If your keep-warm plate draws more than 300 W, raise `threshold`.

```yaml
type: custom:appliance-coffee-maker-card
style: dosette                 # filtre | dosette | expresso
entity: switch.coffee_plug
power: sensor.coffee_power
energy: sensor.coffee_energy_today
```

### Flat TV and range hood

<p align="center"><img src="docs/tv-range-hood.gif" width="560" alt="TV and range hood cards"></p>

**TV** (`custom:appliance-tv-card`): a wall-mounted flat screen, nothing around it.

<p align="center"><img src="docs/tv.gif" width="300" alt="TV card"></p>

- **Switching on**: a bright line opens up the panel, light streaks converge into a start-up logo, then the streaming home screen appears; **switching off**: the picture collapses into a line, then a dot.
- **On**: a streaming home screen (featured banner, rows of tiles scrolling, moving selection). **Standby**: black screen, red LED. **Off**: black screen, no LED.
- With a smart plug: on above `threshold` (25 W), standby between `standby_threshold` (0.2 W) and 25 W, off below. With a `media_player`: `on` / `playing` / `paused` / `idle` = on, `standby` = standby, `off` = off, and the app or source is shown (« Allumée · Netflix »).

```yaml
type: custom:appliance-tv-card
entity: switch.tv_plug          # or media_player.living_room_tv
power: sensor.tv_plug_power
energy: sensor.tv_plug_energy_today
```

**Range hood** (`custom:appliance-range-hood-card`): chimney hood above a cooktop and a steaming pot.
- **Fan running**: the fan spins, steam from the pot is drawn up into the hood, air flows upwards; faster at high speed, with the speed LEDs.
- **Lights**: the lamps light up the cooktop. With a power sensor alone, a few watts (above `light_threshold`, 3 W) without the motor = « Lights only »; or set a `light` entity.
- Speeds from power (above `threshold` 40 W = low, above `high_threshold` 130 W = high) or from a `speed` entity.

```yaml
type: custom:appliance-range-hood-card
power: sensor.hood_power
light: light.hood_light         # optional
```

### Air conditioning pack (indoor split + outdoor heat pump)

<p align="center"><img src="docs/air-conditioning.gif" width="560" alt="Air conditioning cards"></p>

Two cards meant to sit side by side, both driven by the same `climate` entity (and/or a power sensor).

**Indoor split** (`custom:appliance-ac-split-card`): the flap opens and swings, air blows down — blue when cooling, orange with a warm glow and rising heat waves when heating, grey in fan mode, droplets in dry mode; the display shows the target temperature with a mode icon. At target: the flap stays open with a gentle airflow.

**Outdoor unit** (`custom:appliance-heat-pump-card`): the fan spins behind its grille, the unit vibrates while the compressor runs, warm air waves come out when cooling, cold air waves when heating, steam rises during defrost. At target: the fan turns slowly.

- With a `climate` entity: `hvac_action` (cooling, heating, drying, fan, idle, defrosting) or, failing that, the HVAC mode.
- With a power sensor only: running above `threshold` (60 W); set `hvac: cool` or `hvac: heat` (default `auto` = cooling May–September, heating otherwise).
- `temperature` on the outdoor card can be an outdoor temperature sensor.

```yaml
type: custom:appliance-ac-split-card
entity: climate.living_room
power: sensor.ac_power
---
type: custom:appliance-heat-pump-card
entity: climate.living_room
temperature: sensor.outdoor_temperature
```

### Heated towel rail, server rack, desktop PC and laptop

Four cards driven by a smart plug (`power`), with an optional `entity` and `switch`.

- **Heated towel rail** (`custom:appliance-towel-dryer-card`): above `threshold` (50 W) the rails glow orange, heat waves rise, towels sway and steam. Below it with the plug on: "At target" (rails barely warm). Optional `temperature` / `target_temperature` (the display shows the target).
- **Server rack / homelab** (`custom:appliance-server-rack-card`): above `threshold` (30 W) the LEDs blink, the fans spin, drive bays glow blue and data flows along the cables. The blink rate follows the load (`max_power`, default 300 W). The UPS display shows the live power draw.
- **Desktop PC** (`custom:appliance-desktop-pc-card`): above `threshold` (40 W) the screen lights up with a desktop (typing code, bars, moving cursor) and the case fans spin with RGB rings. Between 0.5 W and the threshold: sleep (amber LED).
- **Laptop** (`custom:appliance-laptop-card`): above `threshold` (15 W) the screen shows a live dashboard and the keys are backlit; below it: sleep (amber LED).

```yaml
type: custom:appliance-towel-dryer-card
power: sensor.towel_rail_power
temperature: sensor.bathroom_temperature
---
type: custom:appliance-server-rack-card
power: sensor.rack_power
max_power: 250
---
type: custom:appliance-desktop-pc-card
power: sensor.pc_power
---
type: custom:appliance-laptop-card
power: sensor.laptop_power
```

### Wine cooler

`custom:appliance-wine-cooler-card`: a glass-door wine cabinet with bottles on wooden shelves. When the compressor runs (above `threshold`, 15 W) the interior lights up, cold air flows between the bottles, condensation drips on the glass and the LED pulses. On standby the cabinet stays lit; opening the door (`door` sensor) swings it open. The display shows the temperature, and the card warns when it exceeds `max_temperature` (18 °C by default).

```yaml
type: custom:appliance-wine-cooler-card
power: sensor.cave_a_vin_power
temperature: sensor.cave_a_vin_temperature
door: binary_sensor.cave_a_vin_door   # optional
```

### Modes (radiator and heated towel rail)

With a `mode` entity (`select`, `input_select`, or a `climate` entity used as `entity`), the radiator and the heated towel rail show four buttons — **Comfort, Eco, Frost protection, Off** — to switch mode, and the active mode is highlighted. Options are matched by name (Confort, Eco/Nuit, Hors-gel, Arrêt/Off…); a button is only shown if a matching option exists. Hide them with `show_modes: false`.

```yaml
type: custom:appliance-towel-dryer-card
power: sensor.towel_rail_power
mode: select.towel_rail_mode
```

### Water heater with a solar router

The water heater card accepts a second power sensor (`power_solar`) and a second energy sensor (`energy_solar`), e.g. a classic contactor on `power` and a solar-surplus router on `power_solar`. Both are added up to detect heating; when the solar one is above `threshold`, the card shows "Solar surplus" and separate Grid / Solar tiles.

```yaml
type: custom:appliance-water-heater-card
power: sensor.contacteur_power
power_solar: sensor.routeur_solaire_power
energy: sensor.contacteur_energy
energy_solar: sensor.routeur_solaire_energy
```

### Aquarium, Linky meter, home battery, EV charger, robots and pellet boiler

These seven cards have their own options (prefixed `entity_…`) and a full visual editor. Every value tile can be hidden with its `show_…` option, and `language: fr|en|de|nb` forces the language.

<p align="center">
<img src="docs/aquarium.gif" width="260" alt="Aquarium card"> <img src="docs/linky.gif" width="260" alt="Linky card"> <img src="docs/battery.gif" width="260" alt="Home battery card">
<img src="docs/ev-charger.gif" width="260" alt="EV charger card"> <img src="docs/robot-vacuum.gif" width="260" alt="Robot vacuum card"> <img src="docs/robot-mower.gif" width="260" alt="Robot mower card">
<img src="docs/pellet-boiler.gif" width="260" alt="Pellet boiler card">
</p>

| Card | Options |
|---|---|
| Aquarium | `entity_power`, `entity_energy`, `entity_temperature`, `entity_light` (day/night), `entity_cost` or `price_per_kwh`, `temp_min` / `temp_max` (default 24–27 °C), `max_power` (default 200 W), `show_power`, `show_energy`, `show_temperature`, `show_cost` |
| Linky | `entity_power` (W, VA, kW or kVA), `entity_active_power` (W, optional), `entity_power_l1`, `entity_power_l2`, `entity_power_l3` (VA per phase, three-phase), `phase_gauge` (`needles` default, `cycle` or `max`), `entity_hp`, `entity_hc` (indexes, kWh), `entity_tariff` (HP/HC) or `hc_ranges` (e.g. `01:00-07:00,12:30-14:30`), `entity_cost`, `subscribed_power` (kVA, default 9), `show_gauge`, `show_phases`, `show_index`, `show_tariff`, `show_cost` |
| Home battery | `entity_soc` (%), `entity_power` (positive = charging, `invert_power: true` if yours is reversed), `entity_energy`, `entity_temperature`, `capacity_kwh` (default 10), `max_power`, `low_threshold` (default 15 %), `show_power`, `show_energy`, `show_temperature`, `show_time` |
| EV charger | `entity_power`, `entity_session_energy`, `entity_car_soc`, `entity_status` (charging / connected / complete…), `entity_cost` or `price_per_kwh`, `max_power` (default 7400 W), `car_color`, `show_power`, `show_energy`, `show_soc`, `show_status`, `show_duration`, `show_cost` |
| Robot vacuum | `entity` (`vacuum.*`, required), `entity_battery`, `entity_area` (m²), `entity_time` (min), `entity_status`, `entity_filter`, `entity_brush` (%), `show_battery`, `show_area`, `show_time`, `show_fan`, `show_status`, `show_consumables`, `show_buttons` |
| Robot mower | `entity` (`lawn_mower.*` or `vacuum.*`, required), `entity_battery`, `entity_area`, `entity_time`, `entity_next_start`, `entity_blade` (%), `entity_rain`, `entity_status`, `show_battery`, `show_area`, `show_time`, `show_next`, `show_status`, `show_blade`, `show_buttons` |
| Pellet boiler | `entity_status` (ignition / heating / shutdown / alarm…), `entity_power`, `entity_energy`, `entity_cost` or `price_per_kwh`, `entity_flow_temp`, `entity_return_temp`, `entity_pellet_level` (%), `threshold` (default 30 W), `ignition_threshold` (default 300 W), `pellet_alert` (default 15 %), `flow_temp_max` (default 80 °C), `show_power`, `show_energy`, `show_cost`, `show_temps`, `show_pellets`, `show_status` |
| Gas boiler | `entity_status` (climate or text: heating / dhw / standby / alarm…), `entity_flame` (binary_sensor), `entity_power`, `entity_energy`, `entity_gas` (m³ or kWh), `entity_cost` or `price_per_unit`, `entity_flow_temp`, `entity_return_temp`, `entity_pressure` (bar), `entity_modulation` (%), `threshold` (default 15 W), `off_threshold` (off below, standby above, default 0.5 W), `pressure_min` / `pressure_max` (default 1–2.5 bar), `flow_temp_max` (default 80 °C), `show_power`, `show_energy`, `show_gas`, `show_cost`, `show_temps`, `show_pressure`, `show_modulation`, `show_status` |
| Water heat pump | `entity_status` (climate, water_heater or text: heating / hot water / cooling / off / fault…), `entity_power` (electric, W or kW), `entity_heat_power` (heat output, W or kW), `entity_cop` (otherwise computed: heat output / electric power while the compressor runs), `entity_flow_temp`, `entity_return_temp` (ΔT shown), `entity_source_in_temp`, `entity_source_out_temp` (ground loop / well, optional), `entity_flow_rate` (l/h or m³/h), `entity_energy`, `entity_heat_energy`, `entity_scop`, `threshold` (compressor running above, default 100 W), `off_threshold` (off below, standby above, default 0.5 W), `source_threshold` (source loop animation above it: well / primary pumps start before the compressor and stop after it; default: with the compressor), `compressor_threshold` (compressor animation above it, default `threshold`: on/off heat pumps can heat with only the circulation pump running), `buffer_tank` (true: the heat pump charges a buffer tank and the circulation pump feeds the emitters from it, even when the compressor is off; the flow rate, if set, is the heat pump side), `entity_buffer_temp` (tank temperature), `entity_compressor` and `entity_source_pump` (optional relays: binary_sensor, switch or a numeric sensor, running above 0; they replace the power steps), `heating_delay` (s, power must stay above `threshold` this long before showing heating, default 0: ignores short pump runs during standby), `show_status`, `show_power`, `show_heat`, `show_cop`, `show_temps`, `show_source`, `show_flow_rate`, `show_energy`, `show_scop`, `animations` |

- **Aquarium**: fish swim back and forth, bubbles and tails speed up with power, the water turns blue / turquoise / orange / red with temperature (alert badge outside `temp_min`–`temp_max`), the lamp follows `entity_light`.
- **Linky**: lime-green meter with a scrolling LCD (power, HP/HC indexes, tariff, cost — the two buttons switch pages), a gauge against the subscribed power (overload alert above 95 %) and a consumption LED blinking faster as the load rises.
  - **Three-phase**: the Linky cuts off phase by phase, at a third of the subscribed power (5 kVA per phase for 15 kVA). With `entity_power_l1`…`l3` (`SINSTS1`…`3`, in VA), each phase is compared to `subscribed_power / 3` and three bars show each phase (`show_phases: false` hides them). `phase_gauge` sets the gauge: `needles` (default) one coloured needle per phase, `cycle` L1 → L2 → L3 every 3 s, `max` the most loaded phase. In every mode, the overload alert follows the most loaded phase. Otherwise the gauge compares the total to the subscribed power.
  - **Active power**: the Linky's TIC only gives apparent power (VA), which is what the cut-off limit uses, so the gauge stays in VA. For the actual consumption in W, set `entity_active_power`, e.g. a [Derivative](https://www.home-assistant.io/integrations/derivative/) helper (time unit: hours, so kWh gives kW; time window ~2 min) on a template sensor adding `entity_hp` + `entity_hc`. It is shown under the gauge and as an LCD page.
- **Home battery**: three modules wired with orange cables, no background. The charge level rises in the modules (green → orange → red), energy flows along the cables in one direction when charging and the other when discharging, with time to full / empty.
- **EV charger**: wall box with a status light (grey unplugged, blue plugged, pulsing green charging, steady green complete), energy flowing through the cable to the car and a battery gauge on the car door.
- **Robot vacuum / robot mower**: the robot alone, no background. Vacuum: side brushes spin, dust is sucked in, lidar scans, a light ring shows the battery level. Mower: wheels and blade spin, grass clippings fly, rain when `entity_rain` is on. Both have **Start / Pause / Dock** buttons (`vacuum.start` / `pause` / `return_to_base`, `lawn_mower.start_mowing` / `pause` / `dock`).
- **Pellet boiler**: boiler with its touchscreen and combustion window, pellet hopper with a level sight glass and an inclined auger, no background. Igniting: glowing igniter, small flame, fast auger. Heating: full flame, pellets travelling up the auger, water flowing in the copper flow/return pipes that turn red with temperature. Low-pellet alert below `pellet_alert`. Without a status entity, the state comes from power (above 300 W igniting, above 30 W heating).
- **Gas boiler**: wall-mounted gas boiler, no background. Blue flames on the burner rail (sized by modulation), flue gas, pressure gauge, and flow/return copper pipes that turn from blue to red with temperature, with water flowing when the pump runs. Hot-water (DHW) and heating modes, low/high pressure and flow-too-hot alerts.
- **Water heat pump** (water-to-water or ground source: borehole, ground loop, well): no fan and no air, unlike the outdoor unit of the *Heat pump* card. The compressor vibrates between the evaporator (source loop, going down into the ground on the left) and the condenser (heating loop to a radiator on the right). The flow/return pipes turn from blue (20 °C) to red (55 °C) and the water flows while the flow rate is above zero (or while the compressor runs, without `entity_flow_rate`). The COP comes from `entity_cop`, or is computed from a heat meter (`entity_heat_power`) and an electricity meter (`entity_power`). Without a status entity, the compressor runs above `threshold`.

```yaml
type: custom:appliance-robot-vacuum-solo-card
entity: vacuum.robot
entity_area: sensor.robot_cleaned_area
entity_time: sensor.robot_cleaning_time
```

### Power button safety

The power button only appears when you set `switch:`. On the **washer, dryer, dishwasher and pellet stove**, cutting the plug **while a cycle is running (or the stove is burning)** takes **two clicks**: the first one turns the button red and shows "Cycle running – click again to cut power" for 4 seconds. Turning the plug on, or off while idle, stays a single click. Set `confirm_off: false` to turn this off.

Advice: on a washing machine you usually don't need `switch:` at all. Leave it out and the button won't be shown.

### Examples

```yaml
type: custom:appliance-washer-card
entity: input_boolean.washer_running
power: sensor.washer_power
energy: sensor.washer_energy_daily
cost: sensor.washer_cost_today
```

```yaml
type: custom:appliance-water-heater-card
switch: switch.water_heater
power: sensor.water_heater_power
temperature: sensor.water_heater_temperature
target_temperature: input_number.water_heater_target
```

```yaml
type: custom:appliance-fridge-card
power: sensor.fridge_power
temperature: sensor.fridge_temperature
freezer_temperature: sensor.freezer_temperature
door: binary_sensor.fridge_door
```

### Theming

The cards use your theme variables. You can override them in a theme or with card-mod:

```yaml
appliance-active-color: "#03a9f4"
appliance-heat-color: "#ff8a3d"
appliance-cold-color: "#2b9af9"
appliance-alert-color: "#db4437"
appliance-ok-color: "#43a047"
appliance-illustration-size: 116px
```

## Development and translations

`dist/ha-appliance-electromenager-cards.js` is generated: edit `src/` instead, then rebuild (Node.js, no dependencies):

```sh
node build.js           # writes dist/
node build.js --check   # fails if dist/ is out of date (run by CI)
```

HACS installs a single file, so `build.js` concatenates the files of `src/` in the order it lists (like `<script>` tags in a page):

```
src/
  header.js            licence banner
  core/                the 26 core cards, sharing one scope (order matters)
    version.js  i18n.js  illustrations.js  definitions.js  helpers.js
    base.js  editor.js  style.js  register.js
    svg/<kind>.js      one illustration per kind: SVG.washer = () => `…`
    style/*.css        card styles, concatenated into STYLE (order listed in build.js)
  cards/*.js           self-contained cards (aquarium, linky, battery, …), one IIFE each
  i18n/<lang>.json     texts, one file per language
```

- New core card: add its `DEF` entry (`core/definitions.js`), `core/svg/<kind>.js` (picked up automatically), a CSS file listed in `CSS_FILES` and its strings. New self-contained card: add `cards/<name>.js` and list it in `CARD_FILES`. The build warns about any `src/` file it does not list.
- Texts: one file per language in `src/i18n/` (`en.json`, `fr.json`, `de.json`, `nb.json`). Each file has a `common` section for the 26 core cards and one section per extra card (`aquarium`, `linky`, …). The build inlines them where the source says `/*@i18n <section>*/{}`.
- English is the reference: a key missing in another language falls back to English, and the build prints a warning.
- To add a language, copy `en.json` to e.g. `it.json`, translate it and rebuild: the cards follow the Home Assistant language, and the extra cards list it in their `language` option.
- Commit `src/` and the rebuilt `dist/` together. On a merge conflict in `dist/`, resolve `src/` and re-run `node build.js`.

---

## 🇫🇷 En français

Vingt-sept cartes Lovelace pour l'électroménager et l'énergie (lave-linge, sèche-linge, lave-vaisselle, ballon d'eau chaude, four, micro-ondes, réfrigérateur, poêle à granulés, pompe de piscine, imprimante 3D, congélateur coffre, congélateur à tiroirs, panneaux solaires, VMC, plaques de cuisson, radiateur électrique, airfryer, cafetière, téléviseur, hotte aspirante, climatiseur et pompe à chaleur) : illustration animée, état en direct, puissance, énergie et coût. Elles suivent le thème de Home Assistant et s'affichent en français si Home Assistant est en français.

**Installation HACS** : HACS → ⋮ → *Dépôts personnalisés* → `https://github.com/skyrotter/ha-appliance-electromenager-cards`, catégorie **Dashboard** → installer → recharger le navigateur (Ctrl+F5).

**Configuration** : éditeur visuel disponible ; les entités sont détectées automatiquement à l'ajout (noms contenant `lave_linge`, `seche_linge`, `lave_vaisselle`, `ballon`, `four`, `micro_ondes`, `frigo`, `washer`, `dryer`, `fridge`…). Les options sont les mêmes que ci-dessus.

```yaml
type: custom:appliance-washer-card
entity: binary_sensor.lave_linge_en_cours
power: sensor.lave_linge_puissance
energy: sensor.lave_linge_energie_jour
cost: sensor.lave_linge_cout_jour
```

**Prise connectée + détection de cycle** : pour le lave-linge, le sèche-linge et le lave-vaisselle, utilise l'automatisation de détection de cycle décrite plus haut (section *Smart plug + cycle detection*). Elle allume un `input_boolean` au démarrage (plus de 100 W pendant 30 s) et l'éteint à la fin (moins de 20 W pendant 8 min). Ça évite que la carte passe en « Veille » pendant le trempage.

**Poêle à granulés** : avec une simple prise connectée, la carte distingue l'**allumage** (plus de 250 W, la résistance chauffe) de la **chauffe** (20 à 250 W, ventilateur et vis sans fin). L'extinction et les alarmes viennent d'une entité d'état ou de l'intégration du poêle. ⚠️ Ne coupe jamais l'alimentation d'un poêle en fonctionnement ou en extinction : le ventilateur doit évacuer les fumées.

**Pompe de piscine** : l'eau circule sur le dessin (bassin → préfiltre → pompe → bassin) avec le ventilateur du moteur qui tourne. Au-dessus de 50 W, la carte affiche « Filtration ». La vitesse de l'animation suit la vitesse de la pompe (tr/min, %, ou puissance / `max_power`). Tuiles : température de l'eau et durée de filtration du jour (capteur `history_stats`, exemple ci-dessus).

**Imprimante 3D** : la tête va et vient, le portique monte couche par couche et la pièce grandit selon la progression. Fonctionne avec l'intégration Bambu Lab, OctoPrint, Moonraker… (états `prepare`, `running`, `pause`, `finish`, `failed`), ou avec une simple prise (au-dessus de 40 W = impression, la pièce grandit alors en boucle). Couleur du filament réglable (`filament_color`).

**Congélateurs** : le coffre lève son couvercle quand le capteur d'ouverture s'ouvre (intérieur éclairé, froid qui s'échappe). Le congélateur armoire ouvre sa porte sur 4 tiroirs, et un tiroir sort. Alerte « Trop chaud » au-dessus de −12 °C (réglable) et alerte porte ouverte. Couper un congélateur demande toujours une confirmation.

**Panneaux solaires** : uniquement le soleil, deux panneaux sur leur structure et l'onduleur (sans fond). En production, le soleil jaune grossit selon la production (par rapport à `max_power`), un reflet balaie les panneaux et l'énergie circule jusqu'à l'onduleur. Sans production, le soleil devient gris et les panneaux s'assombrissent. Tuiles : production, énergie du jour, économies, % de la crête.

**VMC** : façade blanche murale, grille ronde à lamelles et hélice visible, sur un mur carrelé. L'hélice tourne, l'air humide est aspiré vers la grille, et en cas d'humidité élevée la buée monte et la condensation coule sur le carrelage. Petite vitesse (5–35 W) et grande vitesse (au-dessus de 35 W) détectées par la prise, ou via une entité de vitesse. Alerte humidité au-dessus de 70 %.

**Plaques de cuisson** : table vitrocéramique noire avec 4 foyers qui rougeoient selon leur niveau, une casserole qui fume (couvercle qui tremble à feu fort) et une poêle qui grésille. Le bandeau affiche le niveau de chaque foyer et un « H » de chaleur résiduelle après l'arrêt. Niveaux par foyer via l'intégration de la plaque, ou déduits de la puissance totale (≈ 1500 W par foyer). ⚠️ Une plaque n'est jamais sur une prise connectée : mesure-la avec un compteur modulaire ou une pince au tableau.

**Radiateur électrique** : radiateur à inertie mural à 6 éléments avec son boîtier de commande (écran, icônes de mode, boutons). En chauffe, les éléments rougeoient et des ondes de chaleur montent (selon la puissance). Mode affiché : soleil = Confort, lune = Éco, flocon = Hors-gel (fil pilote, `climate` ou liste). Fenêtre ouverte : air froid et alerte. Fonctionne avec un thermostat `climate`, un fil pilote ou une simple mesure de puissance.

**Airfryer** : airfryer noir double bac avec bandeau tactile et deux tiroirs inox à hublot (frites à gauche, nuggets à droite). En cuisson (au-dessus de 50 W sur la prise), les bacs s'éclairent, les résistances rougeoient, l'air chaud tourbillonne, les frites sautillent et de la vapeur sort du dessus. L'écran affiche le temps restant (`remaining`), sinon la température, sinon `ON` ; `End` en vert quand c'est terminé. Type : `custom:appliance-air-fryer-card`.

**Cafetière** : trois dessins au choix avec `style` : `filtre` (verseuse en verre, par défaut), `dosette` (Senseo, Nespresso, Dolce Gusto…) ou `expresso` (machine à grains). Au-dessus de 300 W sur la prise, le café coule, la verseuse ou la tasse se remplit, le réservoir d'eau se vide et la vapeur monte (écran `CAFE`). Entre 5 et 300 W : « Maintien au chaud » (plaque rouge) pour une cafetière filtre, « Prêt » pour les autres. Type : `custom:appliance-coffee-maker-card`.

**Téléviseur** : écran plat fixé au mur, sans pied. À l'allumage, une ligne lumineuse s'ouvre, des faisceaux convergent vers un logo de démarrage, puis l'écran d'accueil de streaming apparaît ; à l'extinction, l'image se replie en une ligne puis un point. Allumée : écran d'accueil animé (bannière, rangées de vignettes qui défilent) ; veille : écran noir et voyant rouge ; éteinte : rien. Avec une prise : allumée au-dessus de 25 W, veille entre 0,2 et 25 W. Avec un `media_player`, l'appli ou la source s'affiche (« Allumée · Netflix »). Type : `custom:appliance-tv-card`.

**Hotte aspirante** : hotte cheminée au-dessus d'une plaque et d'une casserole qui fume. Moteur en marche : l'hélice tourne, la vapeur est aspirée, l'air monte (plus vite en grande vitesse). Éclairage : les spots éclairent la plaque (quelques watts sans moteur = « Éclairage », ou entité `light`). Vitesses : au-dessus de 40 W petite vitesse, au-dessus de 130 W grande vitesse (`high_threshold`), ou entité `speed`. Type : `custom:appliance-range-hood-card`.

**Pack clim** : deux cartes à mettre côte à côte, pilotées par la même entité `climate` (et/ou une prise). **Split intérieur** (`custom:appliance-ac-split-card`) : le volet s'ouvre et balaie, l'air souffle (bleu en froid, orange en chaud, gris en ventilation, gouttes en déshumidification), l'écran affiche la consigne. **Unité extérieure** (`custom:appliance-heat-pump-card`) : l'hélice tourne, le groupe vibre quand le compresseur tourne, ondes d'air chaud en clim et d'air froid en chauffage, vapeur pendant le dégivrage. Consigne atteinte : hélice au ralenti. Sans entité `climate`, régler `hvac: cool` ou `hvac: heat` (par défaut : clim de mai à septembre, chauffage sinon).

**Sécurité du bouton marche/arrêt** : sur le lave-linge, le sèche-linge, le lave-vaisselle et le poêle à granulés, couper la prise pendant un cycle (ou poêle allumé) demande deux clics (le bouton devient rouge et affiche « Cycle en cours – cliquer encore pour couper »). Option `confirm_off: false` pour désactiver. Conseil : sur un lave-linge, ne mets pas de `switch:` du tout.

**Sèche-serviettes, baie informatique, PC fixe, PC portable, cave à vin** : cinq cartes pilotées par une prise connectée (`power`). `custom:appliance-towel-dryer-card` : au-dessus de 50 W, les barres rougeoient, la chaleur monte, les serviettes se balancent et fument ; prise allumée sous le seuil : « Consigne atteinte ». `custom:appliance-server-rack-card` (homelab) : au-dessus de 30 W, les LED clignotent, les ventilateurs tournent, les baies de disques s'allument en bleu et les données circulent dans les câbles ; la vitesse suit la charge (`max_power`, 300 W par défaut) et l'onduleur affiche la puissance. `custom:appliance-desktop-pc-card` : au-dessus de 40 W, l'écran s'allume (code qui s'écrit, graphique, curseur) et les ventilateurs RGB tournent ; entre 0,5 W et le seuil : veille (voyant orange). `custom:appliance-laptop-card` : au-dessus de 15 W, l'écran affiche un tableau de bord animé et le clavier est rétroéclairé ; en dessous : veille. `custom:appliance-wine-cooler-card` : cave vitrée ; quand le compresseur tourne (au-dessus de 15 W), l'intérieur s'éclaire, l'air froid circule entre les bouteilles et la condensation coule ; la porte s'ouvre avec un capteur `door` ; alerte au-dessus de `max_temperature` (18 °C).

**Aquarium, Linky, batterie, borne de recharge, robots, chaudière à granulés** : sept cartes avec leurs propres options (`entity_…`, voir le tableau en anglais) et l'éditeur visuel. Chaque tuile se masque avec son option `show_…`. `custom:appliance-aquarium-card` : poissons qui nagent, bulles et queues plus rapides selon la puissance, eau qui change de couleur selon la température (alerte hors plage), éclairage jour/nuit. `custom:appliance-linky-card` : compteur vert anis avec écran LCD qui défile (puissance, index HP/HC, tarif, coût — les boutons changent de page), jauge par rapport à la puissance souscrite (alerte au-delà de 95 %), voyant conso qui clignote plus vite quand ça consomme ; en triphasé, avec `entity_power_l1`…`l3` (`SINSTS1`…`3`), chaque phase est comparée à 1/3 de la puissance souscrite, avec une barre par phase ; `phase_gauge` choisit la jauge : `needles` (par défaut) une aiguille de couleur par phase, `cycle` L1 → L2 → L3 toutes les 3 s, `max` la phase la plus chargée ; l'alerte suit toujours la phase la plus chargée ; `entity_active_power` (capteur en W, par ex. le helper « Dérivée » sur la somme des index) affiche la consommation réelle sous la jauge et sur l'écran. `custom:appliance-battery-card` : trois modules reliés par des câbles orange, sans fond ; le niveau monte dans les modules, l'énergie circule dans un sens en charge et dans l'autre en décharge, avec le temps restant avant plein ou vide. `custom:appliance-ev-charger-card` : wallbox murale et voiture de profil ; voyant selon le statut, énergie qui circule dans le câble, jauge de batterie sur la portière, durée et coût de la session. `custom:appliance-robot-vacuum-solo-card` et `custom:appliance-robot-mower-solo-card` : le robot seul, sans fond ; brosses, lidar et anneau de batterie pour l'aspirateur, roues, lame, herbe projetée et pluie pour la tondeuse, avec les boutons **Démarrer / Pause / Base**. `custom:appliance-pellet-boiler-card` : chaudière à granulés sans fond, avec trémie, hublot de niveau et vis sans fin ; à l'allumage la résistance rougit, en chauffe la flamme danse, les granulés montent dans la vis et l'eau circule dans les tuyaux départ/retour qui rougissent avec la température ; alerte « Granulés bas » sous `pellet_alert` (15 %).

**PAC eau/eau (géothermie, nappe)** : `custom:appliance-water-heat-pump-card`, sans ventilateur ni flux d'air, contrairement à l'unité extérieure de la carte *Pompe à chaleur*. Le compresseur vibre entre l'évaporateur (boucle de captage qui descend dans le sol, à gauche) et le condenseur (boucle de chauffage vers un radiateur, à droite). Le départ et le retour passent du bleu (20 °C) au rouge (55 °C), l'eau circule quand le débit est non nul. Le COP vient de `entity_cop`, ou est calculé avec un compteur de chaleur (`entity_heat_power`) et un compteur électrique (`entity_power`). Températures de captage facultatives. Options : voir le tableau en anglais.

**Développement et traductions** : `dist/` est généré, on modifie `src/` puis on lance `node build.js` (sans dépendance). Le code est découpé en petits fichiers : `src/core/` pour les 26 cartes de base (un dessin par appareil dans `svg/`, un fichier CSS par appareil dans `style/`), `src/cards/` pour les cartes autonomes, et les textes dans un fichier par langue (`src/i18n/en.json`, `src/i18n/fr.json`, `src/i18n/de.json`, `src/i18n/nb.json`). Voir *Development and translations* plus haut.

## License

MIT

## Demo

- Interactive test page (simulated data, no Home Assistant needed): https://skyrotter.github.io/ha-appliance-electromenager-cards/docs/demo.html
- Automated tests: https://skyrotter.github.io/ha-appliance-electromenager-cards/docs/tests.html
