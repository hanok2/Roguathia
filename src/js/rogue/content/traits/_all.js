
import Trait from '../../definitions/trait';

class InfravisionTrait extends Trait {
  infravision() { return this.level; }
}

export var Infravision = (level) => new InfravisionTrait(level);

class ProtectionTrait extends Trait {
  protection() { return this.level; }
}

export var Protection = (level) => new ProtectionTrait(level);

class HasteTrait extends Trait {
  haste() { return this.level * 25; }
}

export var Haste = (level) => new HasteTrait(level);