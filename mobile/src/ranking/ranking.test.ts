import { calculateScore } from "./ranking"; 

test("2nd of 3 loved places scores 8.5" , () => {
    expect(calculateScore(10,7,1,3)).toBe(8.5)
}); 

test("2 of 4 fine resturants scores 5.875", () => {
    expect(calculateScore(7, 4, 1, 4)).toBe(5.875)
})

test("the only loved hostel (1 of 1)", () => {
    expect(calculateScore(10, 7, 0, 1)).toBe(8.5)
})