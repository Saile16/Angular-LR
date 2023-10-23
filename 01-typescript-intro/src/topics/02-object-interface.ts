let skills: string[] = ["Bash", "Counter", "Healing"];

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometow?: string; // el ? hace que la propiedad sea opcional
}
const strider: Character = {
  name: "Strider",
  hp: 100,
  skills: ["Bash", "Counter"],
  hometow: "",
};

strider.hometow = "Rivendell";
console.table(strider);
export {};
