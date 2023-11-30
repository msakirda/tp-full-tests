
import { assert, test } from 'vitest';
import { calculerHeure, CadranLune, CadranTerre, CadranSoleil, Heure } from './ServiceTemps';

test('calculerHeure - Matin', () => {
  const heure = calculerHeure(CadranLune.Un, CadranTerre.Un, CadranSoleil.Un);
  assert.equal(heure, Heure.Matin);
});

test('calculerHeure - Matin', () => {
  const heure = calculerHeure(CadranLune.Un, CadranTerre.Deux, CadranSoleil.Deux);
  assert.equal(heure, Heure.Matin);
});

test('calculerHeure - Nuit', () => {
  const heure = calculerHeure(CadranLune.Un, CadranTerre.Un, CadranSoleil.Deux);
  assert.equal(heure, Heure.Nuit);
});

test('calculerHeure - Nuit', () => {
  const heure = calculerHeure(CadranLune.Un, CadranTerre.Deux, CadranSoleil.Deux);
  assert.equal(heure, Heure.Nuit);
});
test('calculerHeure - Nuit', () => {
  const heure = calculerHeure(CadranLune.Deux, CadranTerre.Deux, CadranSoleil.Deux);
  assert.equal(heure, Heure.Nuit);
});
test('calculerHeure - Nuit', () => {
  const heure = calculerHeure(CadranLune.Deux, CadranTerre.Deux, CadranSoleil.Un);
  assert.equal(heure, Heure.Nuit);
});
test('calculerHeure - Nuit', () => {
  const heure = calculerHeure(CadranLune.Deux, CadranTerre.Un, CadranSoleil.Deux);
  assert.equal(heure, Heure.Nuit);
});
test('calculerHeure - Apres midi', () => {
  const heure = calculerHeure(CadranLune.Deux, CadranTerre.Un, CadranSoleil.Un);
  assert.equal(heure, Heure.ApresMidi);
});


