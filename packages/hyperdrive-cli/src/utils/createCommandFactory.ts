import { command, CommandModule, OptionsConfig, OptionType } from "clide-js";

/**
 * Create a custom command module factory with typed data.
 */
export function createCommandFactory<TData>() {
  return <
    TOptionsKey extends string = string,
    TOptionsType extends OptionType = OptionType,
    TOptions extends OptionsConfig<TOptionsKey, TOptionsType> = OptionsConfig<
      TOptionsKey,
      TOptionsType
    >,
  >(
    options: CommandModule<TData, TOptions>,
  ): CommandModule<TData, TOptions> => {
    return command(options);
  };
}
