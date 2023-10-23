interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Edd Sheeran",
    year: 2015,
  },
};

const {
  audioVolume,
  songDuration,
  details: { author },
} = audioPlayer;
// console.log({ audioVolume, songDuration, author });

const dbz: string[] = ["Goku", "Vegeta", "Trunks"];
const [, , trunks = "Not Found"] = dbz;
console.log("Personaje3", trunks);

export {};
