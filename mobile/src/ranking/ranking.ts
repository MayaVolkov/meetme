//defing the 3 reactions allowed in the ranking system
export type Reaction = "loved" | "fine" | "disliked";

//defining our categories
export type Category = 'hostel'| 'restaurant' | 'activity'| 'beach'; 

//defining our log - what has to go in it
export type Log = {
    id:string; //a unique label for each log 
    placeName: string; //show in lists
    city:string; //to show under name 
    country: string; //for filtering by country
    category:Category; //rankings happen per category 
    reaction: Reaction; //picks the reaction group 
    position:number; //where it sits in that group

};

//defining the score ranges so we doesnt have to remember all the numbers
export const SCORE_RANGES = {
    loved: {top:10, bottom:7},
    fine: {top:7, bottom:4}, 
    disliked: {top:4, bottom:0}
};

// function that takes in the top/bottom number of that ranking group, the position of that logged item, and the size of the group and outputs that items score
export function calculateScore(top:number, bottom:number, position:number, groupSize:number): number{
    // because new items are logged, we have to keep the scoring dynamic
    // so the "width of the slice" almost works like slicing a pie 
    // the more items in that reaction group the smaller each piece becomes - each piece is assigned to an item
    const sliceWidth = (top-bottom) / groupSize; 
    // position is a whole number, by adding 0.5 it ensures the final ranking doesnt land on either edge case (for example for loved it, it wouldnt land on 7 or 10)
    const score = top -(sliceWidth * (position + 0.5));
    return score; 
};

//Rounds a score to one decimal for display, so it's easy to read on a phone
//separate from calculateScore so that averaging personal scores into public scores is more accurate
export function roundScore(score:number) : number{
    return Math.round(score * 10) / 10; 
};

export function scoreForReaction(reaction:Reaction, position:number, groupSize:number):number{
    const score_range = SCORE_RANGES[reaction];
    return calculateScore(score_range.top, score_range.bottom, position,groupSize);
};

export function getGroup(logs:Log[], category:Category , reaction:Reaction):Log[]{
    return logs.filter((log) => log.category === category && log.reaction === reaction); 

};