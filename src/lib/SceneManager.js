import config from '../config.js';
import { Start } from '../scenes/index.js';
import { Sandbox } from '../sandbox/index.js';

function ImportScenes() {
    if (config.envMode === 'dev') {
        return [ Sandbox ];
    }

    return [ Start ];
}

export { ImportScenes };