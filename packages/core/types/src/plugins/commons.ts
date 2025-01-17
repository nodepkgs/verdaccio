import { Config, Logger } from '../configuration';

export class Plugin<T> {
  public constructor(config: T, options: PluginOptions) {}
}

export interface IPlugin<T> {
  // TODO: not used on core yet
  version?: string;
}

export interface PluginOptions {
  config: Config;
  logger: Logger;
}
