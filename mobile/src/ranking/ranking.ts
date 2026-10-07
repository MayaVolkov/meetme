// function that takes in the top/bottom number of that ranking group, the position of that logged item, and the size of the group and outputs that items score
export function calculateScore(top:number, bottom:number, position:number, groupSize:number): number{
    // because new items are logged, we have to keep the scoring dynamic
    // so the "width of the slice" almost works like slicing a pie 
    // the more items in that reaction group the smaller each piece becomes - each piece is assigned to an item
    const sliceWidth = (top-bottom) / groupSize; 
    // position is a whole number, by adding 0.5 it ensures the final ranking doesnt land on either edge case (for example for loved it, it wouldnt land on 7 or 10)
    const score = top -(sliceWidth * (position + 0.5));
    return score; 
}
