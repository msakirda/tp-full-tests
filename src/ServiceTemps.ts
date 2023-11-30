export enum CadranLune {
    Un = 1,
    Deux = 2,
  }
  
  export enum CadranTerre {
    Un = 1,
    Deux = 2,
  }
  
  export enum CadranSoleil {
    Un = 1,
    Deux = 2,
  }
  















export enum Heure {
    Mortin,
    Aprenoon,
    Soirning,
    Nuight,
    Nuit,
    Soir,
    ApresMidi,
    Matin
}
  
  export const calculerHeure = (
    lune: CadranLune,
    terre: CadranTerre,
    soleil: CadranSoleil
  ): Heure => {
    const pouvoirLune = lune === CadranLune.Un ? -2 : terre / 2;
    const pouvoirTerre = terre === CadranTerre.Un ? 2 : 6;
    const pouvoirSoleil = soleil === CadranSoleil.Un ? 0 : pouvoirTerre * 2;
  
    const resultat = pouvoirLune + pouvoirTerre + pouvoirSoleil;
  
    if (resultat <= 1) {
      return Heure.Mortin;
    } else if (resultat <= 2) {
      return Heure.Aprenoon;
    } else if (resultat <= 4) {
      return Heure.Soirning;
    } else {
      return Heure.Nuight;
    }
  };
  