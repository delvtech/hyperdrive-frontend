// swagger-typescript-api config file

module.exports = {
  codeGenConstructs: (constructs) => {
    return {
      ...constructs,
      TypeField: ({ key, value, readonly, optional }) => {
        let fieldValue = value;
        if (
          key.endsWith("Address") ||
          key.endsWith("Contract") ||
          key.endsWith("Token")
        ) {
          fieldValue = "`0x${string}`";
        }

        if (key.endsWith("Proof")) {
          fieldValue = "`0x${string}`[]";
        }

        return [readonly && "readonly ", key, optional && "?", ": ", fieldValue]
          .filter(Boolean)
          .join("");
      },
    };
  },
  // TODO: Convert fields ending with "-Amount" from string to bigint
};
