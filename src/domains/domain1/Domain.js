import { DomainValidator } from "./utils/DomainValidators.js";
import { DOMAIN, DOMAIN_ERROR } from "./utils/DomainConstants.js";

class Domain {
  #exampleProperty;

  constructor(exampleProperty) {
    this.#exampleProperty = exampleProperty;
  }
}

export { Domain };