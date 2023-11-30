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
  ApresMidi ,
  Soir,
  Nuit,
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
    return Heure.Matin
  } else if (resultat <= 2 ) {
    return Heure.ApresMidi;
  } else if (resultat === 4 || resultat === 3) {
    return Heure.Soir;
  } else {
    return Heure.Nuit;
  }
};
