import { getChildrenWithRank } from './getChildrenWithRank.js'
import { rootedContextOf } from './rootedContextOf.js'
import { headKey } from './headKey.js'
import { headRank } from './headRank.js'

/** Gets a new rank after the given item in a list but before the following item. */
export const getRankAfter = itemsRanked => {

  const value = headKey(itemsRanked)
  const rank = headRank(itemsRanked)
  const context = rootedContextOf(itemsRanked)
  const children = getChildrenWithRank(context)

  // if there are no children, start with rank 0
  if (children.length === 0) {
    return 0
  }
  // if there is no value, it means nothing is selected
  // get rank after the last child
  else if (value === undefined) {
    return children[children.length - 1].rank + 1
  }

  let i = children.findIndex(child => child.key === value && child.rank === rank) // eslint-disable-line fp/no-let

  // quick hack for context view when rank has been supplied as 0
  if (i === -1) {
    i = children.findIndex(child => child.key === value)
  }

  // cannot find items with given rank
  if (i === -1) {
    return 0
  }

  const prevChild = children[i]
  const nextChild = children[i + 1]

  const newRank = nextChild
    ? (prevChild.rank + nextChild.rank) / 2
    : prevChild.rank + 1

  return newRank
}