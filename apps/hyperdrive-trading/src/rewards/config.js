// swagger-typescript-api config file

module.exports = {
  codeGenConstructs: (constructs) => {
    return {
      ...constructs,
      TypeField: ({ key, value, readonly, optional }) => {
        let fieldValue = value;
        // Convert vanilla string to the appropriate address type
        if (key.toLowerCase().endsWith("address")) {
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
  // TODO: Convert fields ending with "-Amount" from string to bigint. This will
  // require post-processing in the api client
};
