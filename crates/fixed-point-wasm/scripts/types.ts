export interface CargoToml {
  package: {
    name: string;
    version: string;
    edition: string;
    authors: string[];
    license: string;
  };
  lib: {
    "crate-type": string[];
  };
  features: {
    [feature: string]: string[];
  };
  dependencies: {
    [dependency: string]: string | DependencyDetails;
  };
  "dev-dependencies": {
    [dependency: string]: string;
  };
}

export interface DependencyDetails {
  version: string;
  optional?: boolean;
  "default-features"?: boolean;
  features?: string[];
  path?: string;
}

export interface PackageJson {
  name: string;
  collaborators: string[];
  version: string;
  license: string;
  files: string[];
  types: string;
  sideEffects: string[];
  type: string;
  main: string;
  exports: {
    ".": {
      default: {
        require: string;
        import: string;
        types: string;
      };
    };
  };
  publishConfig: {
    access: string;
  };
}
