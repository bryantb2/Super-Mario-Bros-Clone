import { tileIDs } from './gameGlobals';
import { guidGenerator } from './basicHelpers';

const materialAnimationSchema = {
    materialId: '',
    hasBaseAnimation: false,
    baseAnimation: {
        loopEvery: 1000, // in milliseconds
        imageFrames: [
            'path/to/image',
            'path/to/image',
        ]
    },
    hitAnimation: {
        lasts: 1000, // in milliseconds
        imageFrames: [

        ]
    },
    destroyAnimation: {
        lasts: 1000, // in milliseconds
        imageFrames: [

        ]
    }
};

export const materialAnimations = () => {
    // create appropriate material animation frames

}

export class Material {
    constructor(
        initialMaterialId,
        finalMaterialId,
        isLethal,
        interactable,
        maxHitCount,
        hitRewardId,
        destroyRewardId
    ) {
        this.objectId = guidGenerator();
        this.hitCount = 0;
        this.maxHitCount = maxHitCount;
        this.hitReward = hitRewardId; // item produced upon interaction with the material
        this.destroyReward = destroyRewardId; // item produced upon final destruction of the material
        this.finalMaterial = finalMaterialId;
        this.currentMaterialType = initialMaterialId;
        this.interactable = interactable;
    }

    // properties
    get instanceId() { this.objectId; }
    get materialType() { this.currentMaterialType; }
    get isLethal() { this.isLethal; }
    get isInteractable() { this.interactable; }
    get currentHitCount() { this.hitCount; }
    get maximumHitsAllowed() { this.maxHitCount; }

    // methods
    registerCollision = () => {
        // when called during a collision, this function records and appropriately manipulates the material properties
        if (this.isInteractable) {
            // increment hit counter
            this.hitCount++;
            if (this.hitCount < this.maxHitCount) return this.hitReward; // return a hit reward
            else if (this.hitCount >= this.maxHitCount) {
                // set current material ID
                // make object non-interactable
                // return a destroy reward
                this.currentMaterialType = this.finalMaterial;
                this.interactable = false;
                return this.destroyReward;
            }
        }
    }
}

/*
Material class

properties:
    - isInteractable
    - isLethal
    - currentHitCount
    - maxHitCount
    - currentMaterialType
    - hitReward
    - destroyReward
Methods:
    - destroyMaterial
    - recordHit
 */