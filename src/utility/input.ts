import prompt, { AutocompleteBehavior, Key } from 'prompt-sync-plus';
import promptHistory from 'prompt-sync-history';
import { commands } from './commands';

function autoComplete(command: string) {
    return commands.filter((command) => command.indexOf(command) === 0);
}

const config = {
    autocomplete: {
        behavior: AutocompleteBehavior.SUGGEST,
        fill: false,
        searchFn: autoComplete,
        sticky: false,
        suggestColCount: 10,
        triggerKey: Key.TAB,
    },
    defaultResponse: '',
    echo: undefined,
    eot: false,
    history: promptHistory(),
    sigint: false,
};

// @ts-ignore
export const input = prompt(config);
