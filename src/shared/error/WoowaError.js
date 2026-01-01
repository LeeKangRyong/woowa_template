class WoowaError extends Error {
  constructor(errorMessage) {
        super(`${ERROR_PREFIX} ${errorMessage}`);
        this.name = "WoowaError";
  }
}

export { WoowaError };