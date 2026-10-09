import { calculateScore , roundScore, SCORE_RANGES, scoreForReaction } from "./ranking"; 

test("2nd of 3 loved places scores 8.5" , () => {
    expect(calculateScore(10,7,1,3)).toBe(8.5)
}); 

test("2 of 4 fine resturants scores 5.875", () => {
    expect(calculateScore(7, 4, 1, 4)).toBe(5.875)
})

test("the only loved hostel (1 of 1)", () => {
    expect(calculateScore(10, 7, 0, 1)).toBe(8.5)
})

test("5.875 should round to 5.9" , () => {
    expect(roundScore(5.875)).toBe(5.9)
})
test("8.5 rounds to 8.5" , () => {
    expect(roundScore(8.5)).toBe(8.5)
})

test("score ranges have the right numbers", () => {
    expect(SCORE_RANGES.fine.top).toBe(7)
    expect(SCORE_RANGES.disliked.top).toBe(4)
})

test("score for reactions", () => {
    expect(scoreForReaction("fine", 1, 4)).toBe(5.875)
})