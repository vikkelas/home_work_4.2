export default function sortHero(array) {
  return array.sort((a, b) => b.health - a.health);
}
