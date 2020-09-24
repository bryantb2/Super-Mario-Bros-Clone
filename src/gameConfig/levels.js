import {
  worldAndLevelIDs as levelIDs,
  tileIDs,
  itemIDs,
  gameGrid,
  Material,
} from '.'
import WOneLOne from '../assets/worldBackgrounds/blankBackground.png'

// level matrix is a row/column system, with the first element of the sub-array being the top of the level
export const gameLevels = [
  {
    worldId: levelIDs.WORLD_1,
    worldLevels: [
      {
        levelId: levelIDs.LEVEL_1,
        background: WOneLOne,
        levelData: [
          // FIRST MYSTERY AND BRICK BLOCKS
          {
            xBlock: 16,
            yBlock: 10,
            materialId: tileIDs.MYSTERY_BOX,
          },
          {
            xBlock: 20,
            yBlock: 10,
            materialId: tileIDs.BRICK,
          },
          {
            xBlock: 21,
            yBlock: 10,
            materialId: tileIDs.MYSTERY_BOX,
          },
          {
            xBlock: 22,
            yBlock: 6,
            materialId: tileIDs.BRICK,
          },
          {
            xBlock: 22,
            yBlock: 10,
            materialId: tileIDs.BRICK,
          },
          {
            xBlock: 23,
            yBlock: 10,
            materialId: tileIDs.MYSTERY_BOX,
          },
          {
            xBlock: 24,
            yBlock: 10,
            materialId: tileIDs.BRICK,
          },

          // FIRST PIPE
          {
            xBlock: 28,
            yBlock: 12,
            materialId: tileIDs.PIPE_TOP_LEFT,
          },
          {
            xBlock: 28,
            yBlock: 13,
            materialId: tileIDs.PIPE_SHAFT_LEFT,
          },
          {
            xBlock: 29,
            yBlock: 12,
            materialId: tileIDs.PIPE_TOP_RIGHT,
          },
          {
            xBlock: 28,
            yBlock: 13,
            materialId: tileIDs.PIPE_SHAFT_RIGHT,
          },

          // SECOND PIPE
          {
            xBlock: 38,
            yBlock: 11,
            materialId: tileIDs.PIPE_TOP_LEFT,
          },
          {
            xBlock: 38,
            yBlock: 12,
            materialId: tileIDs.PIPE_SHAFT_LEFT,
          },
          {
            xBlock: 38,
            yBlock: 13,
            materialId: tileIDs.PIPE_SHAFT_LEFT,
          },
          {
            xBlock: 39,
            yBlock: 11,
            materialId: tileIDs.PIPE_TOP_RIGHT,
          },
          {
            xBlock: 39,
            yBlock: 12,
            materialId: tileIDs.PIPE_SHAFT_RIGHT,
          },
          {
            xBlock: 39,
            yBlock: 13,
            materialId: tileIDs.PIPE_SHAFT_RIGHT,
          },

          // THIRD PIPE
          {
            xBlock: 46,
            yBlock: 10,
            materialId: tileIDs.PIPE_TOP_LEFT,
          },
          {
            xBlock: 46,
            yBlock: 11,
            materialId: tileIDs.PIPE_SHAFT_LEFT,
          },
          {
            xBlock: 46,
            yBlock: 12,
            materialId: tileIDs.PIPE_SHAFT_LEFT,
          },
          {
            xBlock: 46,
            yBlock: 13,
            materialId: tileIDs.PIPE_SHAFT_LEFT,
          },
          {
            xBlock: 47,
            yBlock: 10,
            materialId: tileIDs.PIPE_TOP_RIGHT,
          },
          {
            xBlock: 47,
            yBlock: 11,
            materialId: tileIDs.PIPE_SHAFT_RIGHT,
          },
          {
            xBlock: 47,
            yBlock: 12,
            materialId: tileIDs.PIPE_SHAFT_RIGHT,
          },
          {
            xBlock: 47,
            yBlock: 13,
            materialId: tileIDs.PIPE_SHAFT_RIGHT,
          },

          // FOURTH PIPE
          {
            xBlock: 57,
            yBlock: 10,
            materialId: tileIDs.PIPE_TOP_LEFT,
          },
          {
            xBlock: 57,
            yBlock: 11,
            materialId: tileIDs.PIPE_SHAFT_LEFT,
          },
          {
            xBlock: 57,
            yBlock: 12,
            materialId: tileIDs.PIPE_SHAFT_LEFT,
          },
          {
            xBlock: 57,
            yBlock: 13,
            materialId: tileIDs.PIPE_SHAFT_LEFT,
          },
          {
            xBlock: 58,
            yBlock: 10,
            materialId: tileIDs.PIPE_TOP_RIGHT,
          },
          {
            xBlock: 58,
            yBlock: 11,
            materialId: tileIDs.PIPE_SHAFT_RIGHT,
          },
          {
            xBlock: 58,
            yBlock: 12,
            materialId: tileIDs.PIPE_SHAFT_RIGHT,
          },
          {
            xBlock: 58,
            yBlock: 13,
            materialId: tileIDs.PIPE_SHAFT_RIGHT,
          },

          // SECOND SECTION OF MYSTERY AND BRICK BLOCKS
          {
            xBlock: 77,
            yBlock: 10,
            materialId: tileIDs.BRICK,
          },
          {
            xBlock: 78,
            yBlock: 10,
            materialId: tileIDs.MYSTERY_BOX,
          },
          {
            xBlock: 79,
            yBlock: 10,
            materialId: tileIDs.BRICK,
          },

          {
            xBlock: 80,
            yBlock: 6,
            materialId: tileIDs.BRICK,
          },
          {
            xBlock: 81,
            yBlock: 6,
            materialId: tileIDs.BRICK,
          },
          {
            xBlock: 82,
            yBlock: 6,
            materialId: tileIDs.BRICK,
          },
          {
            xBlock: 83,
            yBlock: 6,
            materialId: tileIDs.BRICK,
          },
          {
            xBlock: 84,
            yBlock: 6,
            materialId: tileIDs.BRICK,
          },
          {
            xBlock: 85,
            yBlock: 6,
            materialId: tileIDs.BRICK,
          },
          {
            xBlock: 86,
            yBlock: 6,
            materialId: tileIDs.BRICK,
          },
          {
            xBlock: 87,
            yBlock: 6,
            materialId: tileIDs.BRICK,
          },
          {
            xBlock: 91,
            yBlock: 6,
            materialId: tileIDs.BRICK,
          },
          {
            xBlock: 92,
            yBlock: 6,
            materialId: tileIDs.BRICK,
          },
          {
            xBlock: 93,
            yBlock: 6,
            materialId: tileIDs.BRICK,
          },
          {
            xBlock: 94,
            yBlock: 6,
            materialId: tileIDs.MYSTERY_BOX,
          },
          {
            xBlock: 94,
            yBlock: 10,
            materialId: tileIDs.BRICK,
          },
          {
            xBlock: 100,
            yBlock: 10,
            materialId: tileIDs.BRICK,
          },
          {
            xBlock: 101,
            yBlock: 10,
            materialId: tileIDs.BRICK,
          },
          {
            xBlock: 106,
            yBlock: 10,
            materialId: tileIDs.MYSTERY_BOX,
          },
          {
            xBlock: 109,
            yBlock: 10,
            materialId: tileIDs.MYSTERY_BOX,
          },
          {
            xBlock: 109,
            yBlock: 6,
            materialId: tileIDs.MYSTERY_BOX,
          },
          {
            xBlock: 112,
            yBlock: 10,
            materialId: tileIDs.MYSTERY_BOX,
          },
          {
            xBlock: 118,
            yBlock: 10,
            materialId: tileIDs.BRICK,
          },
          {
            xBlock: 121,
            yBlock: 6,
            materialId: tileIDs.BRICK,
          },
          {
            xBlock: 122,
            yBlock: 6,
            materialId: tileIDs.BRICK,
          },
          {
            xBlock: 123,
            yBlock: 6,
            materialId: tileIDs.BRICK,
          },
          {
            xBlock: 128,
            yBlock: 6,
            materialId: tileIDs.BRICK,
          },
          {
            xBlock: 129,
            yBlock: 6,
            materialId: tileIDs.MYSTERY_BOX,
          },
          {
            xBlock: 129,
            yBlock: 10,
            materialId: tileIDs.BRICK,
          },
          {
            xBlock: 130,
            yBlock: 6,
            materialId: tileIDs.MYSTERY_BOX,
          },
          {
            xBlock: 130,
            yBlock: 10,
            materialId: tileIDs.BRICK,
          },
          {
            xBlock: 131,
            yBlock: 6,
            materialId: tileIDs.BRICK,
          },
          {
            xBlock: 134,
            yBlock: 6,
            materialId: tileIDs.BRICK,
          },
          {
            xBlock: 135,
            yBlock: 6,
            materialId: tileIDs.BRICK,
          },
          // todo
        ],
      },
    ],
  },
  {
    worldId: levelIDs.TEST_WORLD,
    worldLevels: [
      {
        levelId: levelIDs.LEVEL_1,
        background: WOneLOne,
        levelData: [
          // FIRST MYSTERY AND BRICK BLOCKS
          {
            xBlock: 16,
            yBlock: 10,
            materialId: tileIDs.MYSTERY_BOX,
          },
          {
            xBlock: 20,
            yBlock: 10,
            materialId: tileIDs.BRICK,
          },
          {
            xBlock: 21,
            yBlock: 10,
            materialId: tileIDs.MYSTERY_BOX,
          },
          {
            xBlock: 22,
            yBlock: 6,
            materialId: tileIDs.BRICK,
          },
          {
            xBlock: 22,
            yBlock: 10,
            materialId: tileIDs.BRICK,
          },
          {
            xBlock: 23,
            yBlock: 10,
            materialId: tileIDs.MYSTERY_BOX,
          },
          {
            xBlock: 24,
            yBlock: 10,
            materialId: tileIDs.BRICK,
          },
        ],
      },
    ],
  },
]

// meant to generate a full (uncompressed) tile ID array
export const generateMaterialGrid = (compressedTileArr) =>
  // go through each column
  buildGridStructure()
    .map((columnArr, columnIndex) =>
      // map the contents of the column
      [...columnArr].map((tile, rowIndex) => {
        let material = tile
        if (rowIndex >= columnArr.length - 2) {
          // fill with floor blocks
          material = tileIDs.FLOOR_BRICK
        } else {
          // incorporate interactive level data from block array
          const customBlock = findLevelDataByIndexes(
            compressedTileArr,
            columnIndex,
            rowIndex,
          )
          material =
            customBlock == undefined ? material : customBlock.materialId
        }
        return material
      }),
    )
    // map each individual tile to full material object
    .map((columnArr) =>
      columnArr.map((tile) =>
        tile === undefined ? tile : createMaterialById(tile),
      ),
    )

const createMaterialById = (materialId) => {
  // randomize interactivity
  const isInteractive = getNumberBetween(0, 1) !== 0
  let material
  if (isInteractive) {
    // generate destroy and hit rewards (since interactive)
    const hitRewardIndex = getNumberBetween(0, Object.values(itemIDs).length)
    const destroyRewardIndex = getNumberBetween(
      0,
      Object.values(itemIDs).length,
    )
    const maxHitCount = getNumberBetween(1, 5)
    material = new Material(
      materialId,
      maxHitCount > 1 ? itemIDs.COIN : Object.values(itemIDs)[hitRewardIndex],
      hitRewardIndex === destroyRewardIndex
        ? tileIDs.NOTHING
        : Object.values(itemIDs)[destroyRewardIndex],
      false,
      true,
      maxHitCount,
    )
  } else {
    material = new Material(
      materialId,
      itemIDs.NOTHING,
      itemIDs.NOTHING,
      false,
      false,
      0,
    )
  }
  return material
}

const getNumberBetween = (min, max) => Math.random() * (max - min) + min

// takes in a row and column index, searches the tile array for block with specified indexes
const findLevelDataByIndexes = (tileArr, columnIndex, rowIndex) =>
  // tile coordinates are 1 GREATER than raw indexes
  tileArr.find(
    (tile) => tile.xBlock === columnIndex + 1 && tile.yBlock === rowIndex + 1,
  )

// builds the initial grid structure used to store game data
const buildGridStructure = () =>
  Array(gameGrid.GRID_WIDTH)
    .fill(levelIDs.NOTHING)
    .map((_) => Array(gameGrid.RENDERABLE_HEIGHT).fill(levelIDs.NOTHING))
