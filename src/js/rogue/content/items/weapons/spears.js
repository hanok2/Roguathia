
import _ from 'lodash';
import { Hands } from '../../../definitions/equipment';
import Attacks from '../../attacks/_all';

export class OrcishSpear extends Hands {
  static get rarity() { return 35; }
  constructor(opts = {}) {
    _.extend(opts, {
      glyph: { fg: '#ccc' },
      attacks: [Attacks.Stab({ roll: '1d5' })]
    });
    super(opts);
  }
}

export class Spear extends Hands {
  static get rarity() { return 25; }
  constructor(opts = {}) {
    _.extend(opts, {
      glyph: { fg: 'teal' },
      attacks: [Attacks.Stab({ roll: '1d6' })]
    });
    super(opts);
  }
}

export class Trident extends Hands {
  static get rarity() { return 1; }
  constructor(opts = {}) {
    _.extend(opts, {
      glyph: { fg: 'teal' },
      attacks: [Attacks.Stab({ roll: '2d6 + 1' })]
    });
    super(opts);
  }

  LizardBane() { return 2; }
  LizardFury() { return 1; }
}