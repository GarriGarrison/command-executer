export class FfmpegBuilder {
  private inputPath: string;
  private options: Map<string, string> = new Map();

  constructor() {
    this.options.set('-c:v', 'libx264');
  }

  public input(inputPath: string): this {
    this.inputPath = inputPath;
    return this;
  }

  public setVideoSize(width: number, heigth: number): this {
    this.options.set('-s', `${width}x${heigth}`);
    return this;
  }

  public output(outputPath: string): string[] {
    if (!this.inputPath) {
      throw new Error('Незадан параметр input');
    }

    const args: string[] = ['-i', this.inputPath];
    this.options.forEach((value, key) => {
      args.push(key);
      args.push(value);
    });
    args.push(outputPath);

    return args;
  }
}
