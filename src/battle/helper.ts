export const generateString = () => {
  let text = Date.now();
  return text.toString(36).substr(2).toUpperCase();
};

export const calculateLevel = (xp) => {
  if (xp < 1000) return 0;
  if (xp >= 1000 && xp < 1800) return 1;
  if (xp >= 1800 && xp < 3240) return 2;
  if (xp >= 3240 && xp < 5832) return 3;
  if (xp >= 5832 && xp < 10498) return 4;
  if (xp >= 10498 && xp < 18896) return 5;
  if (xp >= 18896 && xp < 34012) return 6;
  if (xp >= 34012 && xp < 61222) return 7;
  if (xp >= 61222 && xp < 110200) return 8;
  if (xp >= 110200 && xp < 198359) return 9;
  if (xp >= 198359 && xp < 357047) return 10;
  if (xp >= 357047 && xp < 642684) return 11;
  if (xp >= 642684) return 12;
};

/**
 *
 * @param myTbr
 * @param opponentsTbr
 * @param result  1, 0, 0.5
 */
export const calculateTBR = ({
  myTbr,
  opponentsTbr,
  result,
}: {
  myTbr: number;
  opponentsTbr: number;
  result: TBRResult;
}) => {
  let k = 20;
  let possiblePoint = 1 / (1 + Math.pow(10, (opponentsTbr - myTbr) / 400));
  let newTbr = myTbr + k * (result - possiblePoint);

  return newTbr;
};

/**
 *
 * @param time  answered time in seconds
 * @param questionTime total time in seconds
 * @param isCorrect boolean value
 */

export const calculateTBP = ({ time, questionTime, isCorrect }) => {
  let T = time / questionTime / 2;
  let possiblePoint = 10;

  let tbp = (1 - T) * possiblePoint * (isCorrect ? 1 : 0);
  tbp = parseFloat(tbp.toFixed(2)) * 100;

  return tbp;
};

/**
 *
 * @param winrate  number of win / number of battles
 * @param totalBattles number of battles

 */

export const calculateBattleXP = ({ winrate, totalBattles }) => {
  let battleXP = (totalBattles * winrate) / 100;
  return battleXP;
};

/**
 * define rank using ranking questions
 * @param score onboard exam score
 */
export const scoreToTBR = (score: number) => {
  if (score <= 5) {
    return {
      englishLevel: "A1",
      tbr: 1000,
    };
  }

  if (score > 5 && score <= 10) {
    return {
      englishLevel: "A2",
      tbr: 1200,
    };
  }

  if (score > 10 && score <= 15) {
    return {
      englishLevel: "A2 - B1",
      tbr: 1597,
    };
  }

  if (score > 15 && score <= 20) {
    return {
      englishLevel: "B1 - B2",
      tbr: 1933,
    };
  }

  if (score > 20 && score <= 25) {
    return {
      englishLevel: "C1 - C2",
      tbr: 2126,
    };
  }
};

/**
 * Return name of the league
 * @param battlexp
 */
export const getLeague = (battlexp: number) => {
  if (battlexp < 35) return "League 2";
  if (battlexp >= 35 && battlexp < 70) return "League 2";
  if (battlexp >= 70 && battlexp < 105) return "League 1";
  if (battlexp >= 105 && battlexp < 140) return "National League";
  if (battlexp >= 140) return "International League";
};

export const getRankSymbol = (rank: number) => {
  if (rank < 1320) return "D-";
  if (rank >= 1320 && rank < 1452) return "D";
  if (rank >= 1452 && rank < 1597) return "D+";
  if (rank >= 1597 && rank < 1757) return "C-";
  if (rank >= 1757 && rank < 1933) return "C";
  if (rank >= 1933 && rank < 2126) return "C+";
  if (rank >= 2126 && rank < 2338) return "B-";
  if (rank >= 2338 && rank < 2572) return "B";
  if (rank >= 2572 && rank < 2830) return "B+";
  if (rank >= 2830 && rank < 3112) return "A-";
  if (rank >= 3112 && rank < 3424) return "A";
  if (rank >= 3424 && rank < 3766) return "A+";
  if (rank >= 3766 && rank < 4143) return "S";
  if (rank >= 4143 && rank < 4557) return "S+";
  if (rank > 4457) return "E";
};

export const nextLevelXp = (xp: number) => {
  if (xp < 1000) return 1000;
  if (xp >= 1000 && xp < 1800) return 1800;
  if (xp >= 1800 && xp < 3240) return 3240;
  if (xp >= 3240 && xp < 5832) return 5832;
  if (xp >= 5832 && xp < 10498) return 10498;
  if (xp >= 10498 && xp < 18896) return 18896;
  if (xp >= 18896 && xp < 34012) return 34012;
  if (xp >= 34012 && xp < 61222) return 61222;
  if (xp >= 61222 && xp < 110200) return 110200;
  if (xp >= 110200 && xp < 198359) return 198359;
  if (xp >= 198359 && xp < 357047) return 357047;
  if (xp >= 357047 && xp < 642684) return 642684;
  if (xp >= 642684) return null;
};

export enum TBRResult {
  WIN = 1,
  DRAW = 0.5,
  LOSE = 0,
}
