import { Spritesheet, Animation } from '@rpgjs/client'

const to = () => {
    const array: any = [];
    let k = 0;
    const durationFrame = 2;
    for (let j = 0; j < 8; j++) {
        array.push({ time: k * durationFrame, frameX: j, frameY: 0 });
        k++;
    }
    array.push({ time: k * durationFrame });
    return array;
}
@Spritesheet({
    framesWidth: 8,
    framesHeight: 1,
    width: 135,
    height: 16,
    opacity: 1,
    anchor: [0.5],
    scale: [0.1],
    textures: {
        [Animation.Stand]: {
            animations: () => [to()]
        },
    }
})
export default class CoinAnimations { }