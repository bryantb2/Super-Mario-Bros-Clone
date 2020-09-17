import {tileIDs, animationTypes, playerData, playerMovement, playerSize} from './gameGlobals';
import { guidGenerator } from './basicHelpers';
// BRICK
import BRICK_1 from '../assets/materials/brick/BRICK_1.png';
import BRICK_2 from '../assets/materials/brick/BRICK_2.png';
import BRICK_3 from '../assets/materials/brick/BRICK_3.png';
import BRICK_4 from '../assets/materials/brick/BRICK_4.png';
// MYSTERY BOX
import WOOD_1 from '../assets/materials/mysteryBox/WOOD_1.png';
import WOOD_2 from '../assets/materials/mysteryBox/WOOD_2.png';
import WOOD_3 from '../assets/materials/mysteryBox/WOOD_3.png';
import WOOD_4 from '../assets/materials/mysteryBox/WOOD_4.png';
import WOOD_5 from '../assets/materials/mysteryBox/WOOD_5.png';
import FLOOR from '../assets/materials/static/FLOOR.png';
// PIPE
import PIPE_1 from '../assets/materials/static/PIPE_1.png';
import PIPE_2 from '../assets/materials/static/PIPE_2.png';
import PIPE_3 from '../assets/materials/static/PIPE_3.png';
import PIPE_4 from '../assets/materials/static/PIPE_4.png';
// SMALL MARIO STANDARD
import S_MARIO_STANDING from '../assets/player/smallMario/standard/STANDING.png';
import S_MARIO_DYING from '../assets/player/smallMario/standard/DYING.png';
import S_MARIO_JUMP from '../assets/player/smallMario/standard/JUMP.png';
import S_MARIO_INITIAL_SPRINT from '../assets/player/smallMario/standard/INITIAL_SPRINT.png';
import S_MARIO_INITIAL_WALK from '../assets/player/smallMario/standard/INITIAL_WALK.png';
import S_MARIO_MID_WALK from '../assets/player/smallMario/standard/MID_WALK.png';
import S_MARIO_FINAL_WALK from '../assets/player/smallMario/standard/FINAL_WALK.png';
import S_MARIO_POLE_INITIAL from '../assets/player/smallMario/standard/POLE_INITIAL.png';
import S_MARIO_POLE_FINAL from '../assets/player/smallMario/standard/POLE_FINAL.png'

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
        this.animationData = materialRenderInstructions.find(animation => animation.materialId === initialMaterialId);
    }

    // properties
    get instanceId() { return this.objectId; }
    get materialType() { return this.initialMaterialId; }
    get materialAnimation() { return this.animationData; }
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
export const materialRenderInstructions = (
    // create appropriate material animation frames
    [
        {
            materialId: tileIDs.BRICK,
            baseMaterial: BRICK_1,
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
                        BRICK_1
                    ]
                },
                {
                    type: animationTypes.DESTROY_ANIMATION,
                    cycleTime: 1000,
                    imageFrames: [
                        BRICK_1,
                        BRICK_2,
                        BRICK_3,
                        BRICK_4
                    ]
                }
            ]
        },
        {
            materialId: tileIDs.MYSTERY_BOX,
            baseMaterial: WOOD_1,
            animations: [
                {
                    type: animationTypes.BASE_ANIMATION,
                    cycleTime: 1000,
                    imageFrames: [
                        WOOD_1,
                        WOOD_2,
                        WOOD_3
                    ]
                },
                {
                    type: animationTypes.HIT_ANIMATION,
                    cycleTime: 1000,
                    imageFrames: [
                        WOOD_1
                    ]
                },
                {
                    type: animationTypes.DESTROY_ANIMATION,
                    cycleTime: 1000,
                    imageFrames: [
                        WOOD_1,
                        WOOD_2,
                        WOOD_3,
                        WOOD_4,
                        WOOD_5
                    ]
                }
            ]
        },
        {
            materialId: tileIDs.FLOOR_BRICK,
            baseMaterial: FLOOR,
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
            baseMaterial: PIPE_1,
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
            baseMaterial: PIPE_2,
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
            baseMaterial: PIPE_3,
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
            baseMaterial: PIPE_4,
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
);

export const playerAnimation = (
    [
        {
            playerId: playerSize[0].id,
            restingSprite: S_MARIO_STANDING,
            animations: [
                {
                    type: playerMovement.WALK,
                    cycleTime: 1500,
                    imageFrames: [
                        S_MARIO_INITIAL_WALK,
                        S_MARIO_MID_WALK,
                        S_MARIO_FINAL_WALK
                    ]
                },
                {
                    type: playerMovement.JUMP,
                    cycleTime: 1000,
                    imageFrames: [
                        S_MARIO_JUMP
                    ]
                },
                {
                    type: playerMovement.SPRINT,
                    cycleTime: 500,
                    imageFrames: [
                        S_MARIO_INITIAL_SPRINT,
                        S_MARIO_INITIAL_WALK,
                        S_MARIO_MID_WALK,
                        S_MARIO_FINAL_WALK
                    ]
                }
            ]
        }
    ]
);
