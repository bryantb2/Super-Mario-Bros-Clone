export const gameGrid = {
    RENDERABLE_HEIGHT:  15, // THIS ONLY INCLUDES THE NON-CONSTANT LEVEL BLOCKS, LIKE MYS. BOXES AND PIPES
    RENDERABLE_WIDTH:   16, // DO NOT PUT ANY RENDERABLE BLOCKS PAST THIS POINT
    INTERACTIVE_WIDTH:  38,
    INTERACTIVE_HEIGHT: 25,
    GRID_WIDTH:         250
};

export const baseUnitSize = () => ({
    WIDTH: '70', //Math.floor(window.innerWidth / gameGrid.RENDERABLE_WIDTH),
    HEIGHT: Math.floor(window.innerHeight / gameGrid.RENDERABLE_HEIGHT), // '67',
    UNITS:  'px'
});

export const animationTypes = {
    HIT_ANIMATION:      'HIT_ANIMATION', // swells occur when a player interacts with a material
    BASE_ANIMATION:     'BASE_ANIMATION', // frame loops are infinite and are only interrupted by player interactions
    DESTROY_ANIMATION:  'DESTROY_ANIMATION' // transitions are animations that occur once when a material is being destroyed
};

export const playerData = {
    // height / width values are values multiplied relative to base units object
    JUMP_HEIGHT_STANDING:   4,
    JUMP_HEIGHT_WALKING:    4.25,
    JUMP_HEIGHT_RUNNING:    5,
    JUMP_HEIGHT_SPRINT:     5.5,
    JUMP_DISTANCE_STANDING: 0,
    JUMP_DISTANCE_WALKING:  4.75,
    JUMP_DISTANCE_RUNNING:  8.5,
    JUMP_DISTANCE_SPRINT:   11.5,
};

export const playerSize = [
    {
        id: 'SMALL_MARIO',
        height: 2,
        width: 1
    },
    {
        id: 'SUPER_MARIO',
        height: 1,
        width: 0.75
    }
];

export const playerMovement = {
    // actions
    STAND:   'STANDING',
    WALK:    'WALKING',
    JUMP:    'JUMP',
    CROUCH:  'CROUCHING',
    SWIM:    'SWIMMING',
    SPRINT:  'SPRINT',
    // directions
    UP:      'W',
    DOWN:    'S',
    LEFT:    'A',
    RIGHT:   'D',
    RUN:     'SHIFT'
};


// game tile objects that are rendered at start
export const tileIDs = {
    BRICK:              'BRICK',
    MYSTERY_BOX:        'MYSTERY_BOX',
    STAIRS_BRICK:       'STAIRS_BRICK',
    // RIVETED_BRICK:      'RIVETED_BRICK',
    FLOOR_BRICK:        'FLOOR_BRICK',
    PIPE_TOP_LEFT:      'PIPE_TOP_LEFT',
    PIPE_SHAFT_LEFT:    'PIPE_SHAFT_LEFT',
    PIPE_TOP_RIGHT:     'PIPE_TOP_RIGHT',
    PIPE_SHAFT_RIGHT:   'PIPE_SHAFT_RIGHT',
    NOTHING:             null
};

// objects Mario interacts with and gains power from
export const itemIDs = {
    GREEN_MUSHROOM: 'GREEN_MUSHROOM',
    RED_MUSHROOM:   'RED_MUSHROOM',
    POWER_FLOWER:   'POWER_FLOWER',
    SUPER_STAR:     'SUPER_STAR',
    COIN:           'COIN',
    NOTHING:         null
};

// enemy AI
export const entityIDs = {
    GOOMBA:        'GOOMBA',
    KOOPA_TROOPA:  'KOOPA_TROOPA'
};

// passive items
export const passiveDisplayItemIDs = {
    SCORE: 'SCORE'
};

export const worldAndLevelIDs = {
    // worlds
    TEST_WORLD: 'TEST_WORLD',
    WORLD_1: 1,
    WORLD_2: 2,
    WORLD_3: 3,
    WORLD_4: 4,
    WORLD_5: 5,
    WORLD_6: 6,
    WORLD_7: 7,
    WORLD_8: 8,
    // levels (4 per world)
    LEVEL_1: 1,
    LEVEL_2: 2,
    LEVEL_3: 3,
    LEVEL_4: 4
};