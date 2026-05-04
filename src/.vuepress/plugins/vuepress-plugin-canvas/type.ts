interface RibbonOptions {
  zIndex?: number;
  alpha?: number;
  size?: number;
}

enum CanvasPluginType {
  /**
   * Geometric Shapes
   */
  Figure = "figure",
  /**
   * Rainbow Ribbon
   */
  Ribbon = "ribbon",
}

interface BackgroundOptions {
  type: CanvasPluginType;
  ribbonOption?: RibbonOptions;
}

export { CanvasPluginType };
export type { BackgroundOptions, RibbonOptions };
