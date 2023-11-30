
import { assert, test } from 'vitest';
import { calculerHeure, CadranLune, CadranTerre, CadranSoleil, Heure } from './ServiceTemps';

test('calculerHeure - Matin', () => {
  const heure = calculerHeure(CadranLune.Un, CadranTerre.Un, CadranSoleil.Un);
  assert.equal(heure, Heure.Matin);
});

test('calculerHeure - Apresmidi', () => {
  const heure = calculerHeure(CadranLune.Un, CadranTerre.Deux, CadranSoleil.Un);
  assert.equal(heure, Heure.ApresMidi);
});

test('calculerHeure - Soir', () => {
  const heure = calculerHeure(CadranLune.Deux, CadranTerre.Deux, CadranSoleil.Un);
  assert.equal(heure, Heure.Soir);
});

test('calculerHeure - Nuit', () => {
  const heure = calculerHeure(CadranLune.Deux, CadranTerre.Deux, CadranSoleil.Deux);
  assert.equal(heure, Heure.Nuit);
});
