# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

Used the slides to learn how mergesort works and how it is implemented when sorting arrays. Asked Ali Torabi if he could look over my past code to see if I was doing this exercise correctly. Found I was not going through recursively so needed to change some of the implementation. Looked at your lecture video on solving mergesort, and looked at the slides for comparisons. I was unsure how to solve the constant, so I asked chatgpt for a formula, which it gave me a geometric series formula.

I submitted this work Fall 2024.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

T(n) = {
$T(n)$ = 0, n = 0
$T(n)$ = a[0], n= 1
$T(n)$ = a[0] + a[1], n = 2
$T(n)$ = 3T(n/3) + 1, n > 2 }
since there are 3 recursive calls. The data gets smaller by 1/3. The + 1 is for the time it takes to add the sum.
$T(n)$ = 3T(n/3) + 1
T(n/3) = 3T(n/3/3) + 1
T(n)   = 3(3T(n/9) + 1) + 1
       = 9T(n/9) + 4
T(n/9) = 3T(n/9/3) + 1 
T(n)   = 9(3T(n/27) + 1) + 4
       = 27T(n/27) + 13
T(n/27)= 3T(n/27/3) + 1
T(n)   = 27(3T(n/71) + 1) + 13
1...4...13...40
Using a geometric series formula, 
1(3^k - 1)/ 3 -1 = (3^k - 1)/2
T(n) = (3^i)T(n/(3^i)) + (((3^i)-1)/2), i = log3n
     = (3^(log3n))T(n/(3^(log3n)) + ((3^(log3n) - 1)/2)
     = n * T(n/(3^(log3n)) + ((n-1)/2)
     = n(T(n/3^(log3n))) + ((n-1)/2)
     T(n/3^(log3n) + ((n-1)/2)) = 1
     = 3^(log3n) * 1
     = n 
     = ∈ Θ(n) 
