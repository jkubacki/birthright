UnitType.find_or_create_by(
  name: "Infantry",
  discipline: 6,
  discipline_close: 6,
  armor: 3,
  defense: 5,
  hp: 9,
  fighting: 3,
  shooting: 0,
  fighting_damage: 4,
  shooting_damage: 0,
  range: 0,
  speed: 4
)

UnitType.find_or_create_by(
  name: "Archers",
  discipline: 6,
  discipline_close: 9,
  armor: 2,
  defense: 7,
  hp: 6,
  fighting: 2,
  shooting: 3,
  fighting_damage: 2,
  shooting_damage: 4,
  range: 10,
  speed: 4
)
