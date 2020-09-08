import { tileIDs, animationTypes } from './gameGlobals';
import { guidGenerator } from './basicHelpers';

export class Material {
    constructor(
        initialMaterialId,
        hitRewardId,
        destroyRewardId,
        isLethal,
        interactive,
        maxHitCount
    ) {
        this.objectId = guidGenerator();
        this.initialMaterialId = initialMaterialId;
        this.interactable = interactive;
        this.lethal = isLethal;
        this.hitCount = 0;
        this.maxHitCount = maxHitCount;
        this.hitReward = hitRewardId; // item produced upon interaction with the material
        this.destroyReward = destroyRewardId; // item produced upon final destruction of the material
    }

    // properties
    get instanceId() { return this.objectId; }
    get materialType() { return this.initialMaterialId; }
    get isLethal() { return this.lethal; }
    get isInteractable() { return this.interactable; }
    get isDestroyed() { return this.hitCount >= this.maxHitCount }
    //get currentHitCount() { this.hitCount; }
    //get maximumHitsAllowed() { this.maxHitCount; }

    // methods
    registerCollision = () => {
        // when called during a collision, this function records and appropriately manipulates the material properties
        if (this.isInteractable) {
            // increment hit counter
            this.hitCount++;
            if (this.hitCount < this.maxHitCount) return this.hitReward; // return a hit reward
            else if (this.hitCount >= this.maxHitCount) {
                // make object non-interactable
                // return a destroy reward
                // this.interactable = false;
                return this.destroyReward;
            }
        }
    }
}

/*
    MATERIAL ANIMATION SCHEMA
    {
        materialId: '', // always required
        baseMaterial: 'path/to/material', // always required
        animations: [
            {
                type: animationTypes.BASE_ANIMATION,
                cycleTime: 1000, // in milliseconds
                imageFrames: [] // empty array means there is no animation
            },
            {
                type: animationTypes.HIT_ANIMATION,
                cycleTime: 1000,
                imageFrames: []
            },
            {
                type: animationTypes.DESTROY_ANIMATION,
                cycleTime: 1000,
                imageFrames: [
                    'path/to/material',
                    'path/to/material'
                ] // if destroy animation is present, final material in destroy animation persists as new base material asset
            }
        ]
    }
 */
export const materialRenderInstructions = () => {
    // create appropriate material animation frames
    return [
        {
            materialId: tileIDs.BRICK,
            baseMaterial: '../assets/brick/BRICK_1.png',
            animations: [
                {
                    type: animationTypes.BASE_ANIMATION,
                    cycleTime: 1000,
                    imageFrames: []
                },
                {
                    type: animationTypes.HIT_ANIMATION,
                    cycleTime: 1000,
                    imageFrames: [
                        '../assets/brick/BRICK_1.png'
                    ]
                },
                {
                    type: animationTypes.DESTROY_ANIMATION,
                    cycleTime: 1000,
                    imageFrames: [
                        '../assets/brick/BRICK_1.png',
                        '../assets/brick/BRICK_2.png',
                        '../assets/brick/BRICK_3.png',
                        '../assets/brick/BRICK_4.png'
                    ]
                }
            ]
        },
        {
            materialId: tileIDs.MYSTERY_BOX,
            baseMaterial: '../assets/mysteryBox/WOOD_1.png',
            animations: [
                {
                    type: animationTypes.BASE_ANIMATION,
                    cycleTime: 1000,
                    imageFrames: []
                },
                {
                    type: animationTypes.HIT_ANIMATION,
                    cycleTime: 1000,
                    imageFrames: [
                        '../assets/mysteryBox/WOOD_1.png'
                    ]
                },
                {
                    type: animationTypes.DESTROY_ANIMATION,
                    cycleTime: 1000,
                    imageFrames: [
                        '../assets/mysteryBox/WOOD_1.png',
                        '../assets/mysteryBox/WOOD_2.png',
                        '../assets/mysteryBox/WOOD_3.png',
                        '../assets/mysteryBox/WOOD_4.png',
                        '../assets/mysteryBox/WOOD_5.png'
                    ]
                }
            ]
        },
        {
            materialId: tileIDs.FLOOR_BRICK,
            baseMaterial: '../assets/static/FLOOR.png',
            animations: [
                {
                    type: animationTypes.BASE_ANIMATION,
                    cycleTime: 1000,
                    imageFrames: []
                },
                {
                    type: animationTypes.HIT_ANIMATION,
                    cycleTime: 1000,
                    imageFrames: []
                },
                {
                    type: animationTypes.DESTROY_ANIMATION,
                    cycleTime: 1000,
                    imageFrames: []
                }
            ]
        },
        {
            materialId: tileIDs.PIPE_TOP_LEFT,
            baseMaterial: '../assets/static/PIPE_1.png',
            animations: [
                {
                    type: animationTypes.BASE_ANIMATION,
                    cycleTime: 1000,
                    imageFrames: []
                },
                {
                    type: animationTypes.HIT_ANIMATION,
                    cycleTime: 1000,
                    imageFrames: []
                },
                {
                    type: animationTypes.DESTROY_ANIMATION,
                    cycleTime: 1000,
                    imageFrames: []
                }
            ]
        },
        {
            materialId: tileIDs.PIPE_TOP_RIGHT,
            baseMaterial: '../assets/static/PIPE_2.png',
            animations: [
                {
                    type: animationTypes.BASE_ANIMATION,
                    cycleTime: 1000,
                    imageFrames: []
                },
                {
                    type: animationTypes.HIT_ANIMATION,
                    cycleTime: 1000,
                    imageFrames: []
                },
                {
                    type: animationTypes.DESTROY_ANIMATION,
                    cycleTime: 1000,
                    imageFrames: []
                }
            ]
        },
        {
            materialId: tileIDs.PIPE_SHAFT_LEFT,
            baseMaterial: '../assets/static/PIPE_3.png',
            animations: [
                {
                    type: animationTypes.BASE_ANIMATION,
                    cycleTime: 1000,
                    imageFrames: []
                },
                {
                    type: animationTypes.HIT_ANIMATION,
                    cycleTime: 1000,
                    imageFrames: []
                },
                {
                    type: animationTypes.DESTROY_ANIMATION,
                    cycleTime: 1000,
                    imageFrames: []
                }
            ]
        },
        {
            materialId: tileIDs.PIPE_SHAFT_RIGHT,
            baseMaterial: '../assets/static/PIPE_4.png',
            animations: [
                {
                    type: animationTypes.BASE_ANIMATION,
                    cycleTime: 1000,
                    imageFrames: []
                },
                {
                    type: animationTypes.HIT_ANIMATION,
                    cycleTime: 1000,
                    imageFrames: []
                },
                {
                    type: animationTypes.DESTROY_ANIMATION,
                    cycleTime: 1000,
                    imageFrames: []
                }
            ]
        }
    ]
};