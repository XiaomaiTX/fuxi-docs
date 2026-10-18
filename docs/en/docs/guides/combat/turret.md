---
author: Fr0zenmn
title: Practical Turret Guide
description: A practical guide to turret damage types, range, tracking, hit chance, damage calculations, weapon systems, and ammunition in EVE Online.
---

# Practical Turret Guide

Turrets are one of EVE's most common weapon systems. Their damage is applied immediately, they use ammunition or crystals, and their chance to hit depends on range and tracking. Understanding the mechanics is more useful than memorizing weapon stats: a patch can change the numbers, while the underlying mechanics remain the same.

This guide starts with practical choices, then explains why they work:

1. **Choose a damage type** — learn the four damage types and common NPC resist profiles.
2. **Choose short-range or long-range turrets** — understand their different roles.
3. **Improve your damage in combat** — learn which factors you can control.
4. **Understand turret damage** — hit chance, hit quality, and how average damage falls off.
5. **Compare turret systems** — learn the strengths and trade-offs of each weapon family.
6. **Choose ammunition** — compare Tech I, faction, and Tech II ammunition.

> **Data as of October 2026.** The formulas and relationships are long-standing, but specific values can change. Check the fitting window and in-game item attributes. English names below follow in-game terminology.

## 1. Choose the right damage type

EVE has four damage types. Weapons, ammunition, and resists all use them:

| Damage type   | Common sources                                                                                 |
| ------------- | ---------------------------------------------------------------------------------------------- |
| **EM**        | Lasers, EMP projectile ammunition, and some drones.                                            |
| **Thermal**   | Lasers, hybrid turrets, and some projectile ammunition and drones.                             |
| **Kinetic**   | Hybrid turrets, projectile ammunition (nearly all types include kinetic damage), and missiles. |
| **Explosive** | Projectile turrets (which favor explosive damage), some missiles, and some drones.             |

Target resist profiles help you choose damage:

| Target layer | Typically weaker to                 | Ammunition choice                                      |
| ------------ | ----------------------------------- | ------------------------------------------------------ |
| Shield       | EM and thermal                      | **EM or thermal** against shields.                     |
| Armor        | Kinetic and explosive               | **Kinetic or explosive** against armor.                |
| Structure    | Usually no clear general preference | Choose based on the target's shield and armor resists. |

> A Tech I ship's baseline resists are typically: shield — 0% EM, 20% thermal, 40% kinetic, and 50% explosive; armor — 50% EM, 35% thermal, 25% kinetic, and 10% explosive. **Ship type, modules, and rigs can change these values.** Use the target's actual resists or common fitting, not the baseline table, in combat.

As a rule, match ammunition to the target's weakest damage type. Ammunition in the same tier often deals similar total damage but distributes it differently. For PvE, remember these common NPC profiles:

- Blood Raiders and Sansha are weak to EM and thermal.
- Guristas and Serpentis are weak to kinetic and thermal.
- Angel Cartel NPCs are weak to explosive and kinetic.

## 2. Short-range or long-range turrets?

Each turret family has short-range and long-range weapons with different roles.

### 2.1 Comparison

| Attribute             | Short-range turrets                                        | Long-range turrets                          |
| --------------------- | ---------------------------------------------------------- | ------------------------------------------- |
| Examples              | Blasters, pulse lasers, autocannons                        | Railguns, beam lasers, artillery            |
| DPS                   | **High**                                                   | Lower                                       |
| Alpha damage per shot | Lower                                                      | **High**                                    |
| Tracking              | **Better**                                                 | Worse                                       |
| Optimal range         | Short                                                      | **Long**                                    |
| Falloff               | Short (projectile turrets are an exception)                | Usually shorter                             |
| Ammunition profile    | Short range, high damage (e.g. Antimatter, Multifrequency) | Long range, lower damage (e.g. Iron, Radio) |
| Common roles          | Close-range damage, anti-frigate, brawling                 | Sniping, kiting, fleet volleys              |

### 2.2 Differences that are easy to miss

- **Tech II short- and long-range turrets use separate skills.** Small Blaster Specialization and Small Railgun Specialization are different skills. Check your skills before choosing a fit.
- **Weapon size determines which ships can fit it.** Small turrets are for frigates and destroyers; medium for cruisers and battlecruisers; large for battleships and attack battlecruisers; and capital turrets for capital ships.
- **Poor tracking is another drawback of long-range turrets.** If an enemy gets close and orbits you, long-range turrets may struggle to hit. Long-range fits need ways to control distance, such as a microwarpdrive, webs, or a kiting approach.
- **Closing range is the main risk with short-range turrets.** You have to reach your engagement range while taking incoming fire.

### 2.3 Which should you choose?

| Situation                                      | Recommendation                                                                                                     |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Ratting, brawling, or running combat anomalies | **Short-range turrets:** higher DPS and better tracking give you more room for error.                              |
| Small-gang PvP or anti-ganking                 | **Short-range turrets:** effective in close engagements and for quick kills.                                       |
| Fleet volleys or sniping                       | **Long-range turrets:** use range and alpha damage to fire from beyond the opponent's range.                       |
| Kiting and range control                       | **Long-range turrets**, or short-range projectile turrets with long falloff.                                       |
| Not sure                                       | Start with short-range turrets. Better tracking makes it easier to apply damage and gives more immediate feedback. |

## 3. How to apply more damage

The mechanics are useful because they guide your piloting. Here are practical factors you can control; **Section 4 explains why they work.**

### 3.1 Improve your chance to hit

| What to do                                                  | Why it helps                                                                             |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Stay within optimal range                                   | Range no longer reduces hit chance; only the target's angular velocity affects tracking. |
| Use a web, **Approach**, or **Keep at Range**               | The target moves across your firing line more slowly, so your turrets can track it.      |
| Use a **Target Painter**                                    | It increases the target's signature radius, helping every attacker apply damage.         |
| Fit a Tracking Computer, Tracking Enhancer, or relevant rig | Your turrets track faster.                                                               |
| Shoot larger targets                                        | Larger ships have a larger signature radius and are easier to hit.                       |
| Use projectile turret falloff                               | You can still deal useful damage beyond optimal range.                                   |

When an enemy is orbiting you, **Keep at Range** is not always the best command. If your ship is faster and more agile, **Approach** can reduce the target's angular velocity relative to you. If your ship is slow and handles poorly, flying in a straight line at full speed so the opponent has to pursue you may work better.

### 3.2 Take less damage

| What to do                                                    | Why it helps                                                                      |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Orbit instead of flying straight away                         | The opponent's turrets have more trouble tracking you and miss more often.        |
| Reduce your signature radius (use shield extenders with care) | You appear smaller on the opponent's sensors and are harder to track.             |
| Increase range beyond the opponent's optimal                  | You move into their falloff, reducing both hit chance and damage.                 |
| Avoid flying directly toward or away from long-range guns     | A straight course requires little turret tracking and can make you easier to hit. |

> **Both ships always have the same distance and angular velocity between them** — this follows from geometry. Whoever controls those values controls how damage is exchanged. In EVE, range control follows directly from turret mechanics.

## 4. How turret damage works

This section explains the ideas in Sections 1–3. If you only need practical advice, the earlier sections are enough; read on to understand the mechanics and apply them elsewhere.

### 4.1 Turrets and missiles work differently

| Attribute          | Turrets                                                                  | Missiles                                                                               |
| ------------------ | ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| Damage application | **Immediate**, with no travel time                                       | Missiles have travel time and must catch the target.                                   |
| Can it miss?       | **Yes.** Depends on range and tracking.                                  | Does not miss, but damage is reduced based on the target's signature radius and speed. |
| Main constraints   | Tracking speed versus angular velocity and signature radius              | Target signature radius and speed                                                      |
| Common frustration | **Large guns shooting small ships:** poor tracking leads to many misses. | Fast small ships take reduced damage.                                                  |

The key question for turrets is **whether the shot hits**. For missiles, the key question is **how much damage is applied when the missile hits**.

### 4.2 Hit chance: two independent factors

For each shot, the game generates a random number from 0 to 1 and compares it with the calculated **hit chance**. The shot hits if the random number is below the hit chance.

Hit chance has a **tracking term** and a **range term**. They are calculated independently and added together:

```text
Hit chance = 0.5 ^ ( tracking term^2 + range term^2 )

  tracking term = (target angular velocity * 40000)
                  / (turret tracking speed * target signature radius)
  range term = max(0, distance - optimal range) / falloff
```

This leads to two useful conclusions:

- **Tracking does not affect shots against a stationary target.** Even a large gun can hit a small ship if it is stationary or flying directly toward or away from you.
- **Inside optimal range, the range term is zero.** Only tracking affects hit chance.

> The constant 40,000 is the normalized turret signature-resolution value. If you see the older **Turret Signature Resolution** attribute in a guide, substitute that value for 40,000; the mechanic is the same.

### 4.3 Range: optimal and falloff

Turrets have two range attributes: **Optimal Range** and **Falloff**.

| Distance               | Hit chance from range alone | Notes                                                             |
| ---------------------- | --------------------------- | ----------------------------------------------------------------- |
| At or inside optimal   | No range penalty            | Only tracking affects hit chance.                                 |
| Optimal + half falloff | About **84%**               | Hit chance is 0.5^0.25; average damage is about 79% of paper DPS. |
| Optimal + one falloff  | **50%**                     | This is the defining point of falloff.                            |
| Optimal + two falloffs | **6.25%**                   | Continuing to fire at this range is rarely useful.                |

Within about 33% of one falloff beyond optimal, range-based hit chance remains above 90%. This makes falloff a useful buffer when managing range. Minmatar ships make particular use of this: projectile turrets have short optimal range and long falloff, so they are well suited to fighting in the falloff band.

### 4.4 Tracking: angular velocity and signature radius

**Tracking speed** measures how well a turret can follow a moving target. It is countered by the target's **angular velocity**, which depends on speed, heading, and distance:

```text
Angular velocity = target's transversal velocity / distance
```

- A target orbiting you has high angular velocity and is harder to hit.
- A target flying directly toward you has angular velocity near zero and is easier to hit.
- At the same speed, a target farther away has lower angular velocity and is easier to hit.

**Signature radius** is the target's apparent size to sensors and is part of the tracking calculation:

```text
Tracking term is proportional to angular velocity
                      / (tracking speed * signature radius)
```

These three values act as equivalent levers: doubling tracking speed or signature radius, or halving angular velocity, has the same effect on hit chance. This explains why:

- **Frigates are hard to hit** (typically 35–40 m signature radius), while **battleships are easier to hit** (300–400 m).
- **Stasis Webifiers are powerful** because reducing target speed also reduces angular velocity.
- **Target Painters help** by increasing the target's signature radius for all attackers.
- **Shield extenders make your ship easier to hit** by increasing its signature radius. Armor plates add mass and reduce speed, which can also make you easier to hit.

Tracking decreases as turret size increases. For the same size, short-range turrets track better than long-range turrets (medium pulse lasers track better than medium beam lasers; large blasters track better than large railguns).

### 4.5 Damage on a hit: 0.5–1.5x and the 1% wrecking shot

One random number determines both whether the shot hits and the quality of the hit:

```text
x = rand(0, 1)     # The same random number is used for hit chance.

damage multiplier = x + 0.49     (x >= 0.01: normal hit, 0.50–1.49x)
                  = 3            (x < 0.01: wrecking shot, fixed 300%)
```

- **Normal hits** deal 50%–149% of base damage, approximately evenly across the range.
- A **wrecking shot** deals exactly 300% damage and ignores tracking and signature radius. It occurs when the random number is below 0.01, so its probability is 1%.
- When hit chance is below 1%, the only outcomes are misses and wrecking shots.

The combat log's hit-quality messages correspond to these damage multipliers:

| Log message | Damage multiplier |
| ----------- | ----------------- |
| Grazes      | 0.500–0.625       |
| Glances off | 0.625–0.750       |
| Hits        | 0.750–1.000       |
| Penetrates  | 1.000–1.250       |
| Smashes     | 1.250–1.490       |
| Wrecks      | 3.000             |

The English log messages are shown above; use the in-game combat log as the reference for localized names. To judge shot quality, focus on the multiplier: 0.5x is a graze, 1.49x is a strong hit, and 3.0x is a wrecking shot, sometimes called a critical hit by players.

> The 1% threshold can also be checked against the average-damage formula in Section 4.6. Combining a 1% chance to deal 3x damage with normal hits from 0.5x to 1.49x yields the 0.0501 constant in the formula below. Use the in-game combat log as the final reference if testing indicates a different value.

### 4.6 Why damage falls faster than hit chance

Shots with high random numbers would have dealt more damage, but they are also the first to miss. As hit chance decreases:

1. Some shots **miss entirely** and deal no damage.
2. Among the remaining hits, **the maximum damage also falls**; the distribution no longer reaches 1.49x.

Average damage can be summarized with one formula. This is normalized, so 1.0 means the paper DPS shown in the fitting window:

```text
Average damage multiplier = 0.5 * min(
  hit chance^2 + 0.98 * hit chance + 0.0501,
  6 * hit chance
)
```

| Situation                                                              | Hit chance | Average damage                                  |
| ---------------------------------------------------------------------- | ---------- | ----------------------------------------------- |
| Inside optimal, stationary target                                      | 100%       | About 101% (wrecking shots add a small amount). |
| Optimal + half falloff                                                 | About 84%  | About **79%** of paper DPS.                     |
| Optimal + one falloff                                                  | 50%        | About **40%** of paper DPS.                     |
| Tracking term = 1 (e.g. high-angular-velocity target at the threshold) | 50%        | About **40%** of paper DPS.                     |

> **Practical takeaway:** 50% hit chance does not mean half damage; average damage is about 40%. Poor range or tracking costs more damage than intuition suggests.

Two other mechanics are easy to misunderstand:

- **Grouping turrets does not change damage.** Even when the fitting window groups weapons, each turret still makes its own hit and damage roll.
- **Alpha damage depends on damage per shot.** Higher single-shot damage increases the chance that a fleet volley destroys its target. This is the main value of artillery and other long-range turrets.

## 5. Turret systems and their strengths

EVE has four turret families. Their damage types, capacitor use, and ammunition mechanics determine what a ship is suited to fight and how to fly it.

### 5.1 At a glance

| Turret family              | Damage type                                                                    | Capacitor use | Ammunition                                                                                       | Short-range          | Long-range | Main factions         | Damage module             |
| -------------------------- | ------------------------------------------------------------------------------ | ------------- | ------------------------------------------------------------------------------------------------ | -------------------- | ---------- | --------------------- | ------------------------- |
| **Hybrid**                 | Kinetic + thermal                                                              | Low           | Consumes ammunition                                                                              | Blaster              | Railgun    | Gallente / Caldari    | Magnetic Field Stabilizer |
| **Energy (laser)**         | EM + thermal                                                                   | **Highest**   | Crystals switch instantly. Tech I combat crystals do not break; Tech II and faction crystals do. | Pulse laser          | Beam laser | Amarr                 | Heat Sink                 |
| **Projectile**             | All four types, depending on ammunition; weighted toward kinetic and explosive | **None**      | Consumes ammunition                                                                              | Autocannon           | Artillery  | Minmatar              | Gyrostabilizer            |
| **Entropic Disintegrator** | Thermal + explosive                                                            | High          | Consumes Exotic Plasma                                                                           | One short-range type | —          | Triglavian Collective | Entropic Radiation Sink   |

### 5.2 Hybrid turrets: an all-round option for Caldari and Gallente

Hybrid turrets use a magnetic field to fire charged projectiles. They **use capacitor like lasers and ammunition like projectile turrets**, a compromise between the two systems.

- Damage is fixed to **kinetic and thermal**. Ammunition can change the ratio, but cannot switch to a different damage type.
- Short-range blasters have some of the highest DPS in the game, at the cost of very short range and demanding tracking.
- Long-range railguns have excellent range and are a common choice for sniper fits.
- Tech II ammunition is a **trade-off**, not a straight upgrade:
  - Blasters: **Void** has the highest damage per shot in the game, but reduces range and tracking. **Null** adds 40% range and falloff, but deals slightly less damage than Tech I Antimatter Charge.
  - Railguns: **Spike** adds 80% range, with much worse tracking and low damage; it is for sniping. **Javelin** greatly reduces range in exchange for 25% more tracking and higher damage.

Watch your capacitor in a fight. Hybrid turrets use less capacitor than lasers, but sustained fire combined with webs and shield repairs can still drain it.

### 5.3 Energy turrets (lasers): switch crystals, not ammunition

Amarr energy weapons use **frequency crystals** instead of conventional ammunition. There is no reload cycle, and crystals can be switched instantly. Laser ships can change range bands during a fight without waiting for a reload.

Crystals do not all last forever:

| Crystal type              | Can it break?                        | Approximate lifespan                                     |
| ------------------------- | ------------------------------------ | -------------------------------------------------------- |
| **Tech I combat crystal** | No (the damaged attribute is False). | Can be reused indefinitely.                              |
| **Tech II crystal**       | Yes.                                 | About 1,000 shots, with a chance of damage on each shot. |
| **Faction crystal**       | Yes.                                 | Exactly 4,000 shots.                                     |

- Damage is **EM and thermal**. The longest-range Radio crystal deals EM damage only.
- Lasers use **the most capacitor**, so capacitor management is central to laser fitting.
- Pulse lasers have good tracking and high DPS; beam lasers have longer range and higher damage per shot.
- The eight Tech I crystal types run from short-range, high-damage Multifrequency to longer-range, lower-damage Standard and Radio. Carrying two or three range options is usually enough.
- **Crystals use very little cargo space.** You can carry several types and spares with little cargo cost and switch range instantly. This is the main logistics advantage of lasers.

> Do not confuse combat crystals with crystals used in **mining** modules. Mining crystals, including Tech I crystals, can break (their volatility is about 2.5%). Tech I combat crystals do not take damage. To check a crystal, right-click it, select **Show Info**, and inspect its attributes for crystal damage and volatility. **Use the in-game attributes as the reference.**

### 5.4 Projectile turrets: no capacitor use and flexible damage

Minmatar projectile turrets are low-tech weapons that **use no capacitor to fire**, leaving more capacitor available for defense and propulsion.

- They can deal **all four damage types**, depending on ammunition. This is their main tactical advantage: you can change damage to match a target's resist profile without changing guns.
- All projectile ammunition includes **kinetic** damage and is generally weighted toward **explosive**.
- Short-range autocannons have high DPS, good tracking, and unusually long falloff. They can fight effectively in the falloff band.
- Artillery has the **highest alpha damage among long-range turrets**, making fleet volleys that destroy a target in one round a core use. The trade-off is very poor tracking.
- Larger turrets deal more damage per shot and have longer range, but track worse.

### 5.5 Entropic Disintegrators: Triglavian weapons

Entropic Disintegrators are exclusive to Triglavian ships and work differently from other turret families:

- They deal **thermal and explosive** damage, consume Exotic Plasma, and use a lot of capacitor.
- They have one relatively short-range weapon type rather than separate short- and long-range turrets.
- Their damage **increases while they maintain continuous fire**. They work best when they can stay on target and keep firing, rather than in a “fire once and leave” engagement.

## 6. Ammunition: Tech I, faction, and Tech II

The turret family determines which gun you fit; **ammunition determines how much damage it deals**. There are four broad tiers:

| Tier               | Damage compared with matching Tech I ammunition | How to obtain it                                                                      | Common use                                  |
| ------------------ | ----------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------- |
| **Tech I**         | Baseline                                        | Mass-produced and inexpensive on the market.                                          | Ratting, practice, and cost-sensitive fits. |
| **Navy faction**   | **+15%**                                        | Loyalty Point stores; readily available and relatively inexpensive.                   | **Standard PvP ammunition.**                |
| **Pirate faction** | Lower-tier **+10%** / higher-tier **+20%**      | Loot from faction NPC wrecks.                                                         | More expensive; performance varies by tier. |
| **Tech II**        | Substantial increase, with penalties            | Invented and manufactured; fits only Tech II, faction, storyline, or officer turrets. | Specialized situations.                     |

Practical notes:

- **Faction ammunition adds damage without changing other stats** compared with the matching Tech I type. It does not change range or tracking, so it is common in PvP: more damage with no fitting trade-off.
- **For PvE**, choose faction ammunition based on the site's income and ammunition cost. It is common for higher-value missions, anomalies, and wormhole sites; Tech I can make sense for low-cost ratting.
- **Tech II ammunition choices can be counterintuitive:**
  - **Short-range turrets:** Tech II ammunition is often better overall than Tech I, though it comes with tracking penalties. Example: Void for blasters.
  - **Long-range turrets:** Pilots often prefer the shortest-range Navy faction ammunition over short-range Tech II ammunition because the latter's range penalty is severe. For railguns, Javelin deals more damage but cuts range by 75%, so many pilots use Navy Antimatter Charge instead.
- **Lasers are different.** Tech I, Tech II, and faction crystals change the balance between range and damage rather than simply increasing damage (see Section 5.3).

> **Localized item names:** Simplified Chinese, Traditional Chinese, and third-party wikis may use different names for Tech II and faction ammunition. This guide uses English item names; check the in-game client for localized names.

## Appendix: formulas and quick reference

### Hit chance

```text
Hit chance = 0.5 ^ ( tracking term^2 + range term^2 )

  tracking term = (target angular velocity * 40000)
                  / (turret tracking speed * target signature radius)
  range term = max(0, distance - optimal range) / falloff
```

### Damage per shot

```text
Base damage per shot = ammunition base damage
                     * turret damage multiplier
                     * ship and skill bonuses

x = rand(0, 1)
damage multiplier = x + 0.49  (x >= 0.01)
                  = 3         (x < 0.01, wrecking shot)
```

### Average damage (normalized DPS)

```text
Average damage multiplier = 0.5 * min(
  hit chance^2 + 0.98 * hit chance + 0.0501,
  6 * hit chance
)
```

### Reference points

| Distance               | Hit chance       | Average damage          |
| ---------------------- | ---------------- | ----------------------- |
| Inside optimal         | No range penalty | Depends on tracking.    |
| Optimal + half falloff | About 84%        | About 79% of paper DPS. |
| Optimal + one falloff  | 50%              | About 40% of paper DPS. |
| Optimal + two falloffs | 6.25%            | Very low.               |

### Common countermeasures

| Module or tactic                      | Effect                                                          |
| ------------------------------------- | --------------------------------------------------------------- |
| Tech I / Tech II web                  | Reduces target speed by 50% / 60%; overheating increases range. |
| Target Painter                        | Increases target signature radius for all attackers.            |
| Tracking Computer / Tracking Enhancer | Improves turret tracking; some scripts also improve range.      |
| Shield extender                       | Increases your signature radius, making you **easier to hit**.  |

## References

- [EVE University Wiki — Turret mechanics](https://wiki.eveuniversity.org/Turret_mechanics) — Hit-chance formula, damage distribution, average damage, and hit quality.
- [EVE University Wiki — Turrets](https://wiki.eveuniversity.org/Turrets) — Turret families, ammunition, and short- versus long-range weapons.
- [EVE University Wiki — Crystal damage](https://wiki.eveuniversity.org/Crystal_damage) — Crystal damage and Tech I, Tech II, and faction crystal lifespans.
- [EVE University Wiki — Tech and meta levels](https://wiki.eveuniversity.org/Tech_and_meta_levels) — Faction ammunition damage bonuses and Tech II trade-offs.
- [EVE Online Support](https://support.eveonline.com/hc/en-us/) — Official gameplay information.
- [EVE Ref](https://everef.net/) — Item and ammunition attributes.

> This guide reflects in-game behavior in October 2026. The formulas and relationships are long-standing; use the fitting window and in-game tests for specific values.
> For item-by-item ammunition values, see the separate ammunition reference. This guide focuses on mechanics and turret-family trade-offs.
