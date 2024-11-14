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
