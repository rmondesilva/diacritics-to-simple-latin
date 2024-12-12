import { expect, test } from 'vitest';
import { convertDiacritics } from './convertDiacritics';

test('Convert German Umlauts to simple latin characters.', () => {
  expect(convertDiacritics('März')).toBe('Maerz');
});