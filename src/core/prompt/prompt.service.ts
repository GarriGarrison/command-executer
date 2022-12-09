import inqueirer from 'inquirer';
import { PromptType } from './prompt.types';

export class PromptService {
  public async input<T>(message: string, type: PromptType) {
    const { result } = await inqueirer.prompt<{ result: T }>([
      {
        type: 'input',
        name: 'result',
        message,
      },
    ]);

    return result;
  }
}
