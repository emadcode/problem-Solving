def solution(lst):
    if not lst:
        return ""
    
    result = []
    start = lst[0]
    prev = lst[0]
    
    for i in range(1, len(lst)):
        if lst[i] != prev + 1:
            if prev == start:
                result.append(f"{start}")
            elif prev == start + 1:
                result.append(f"{start},{prev}")
            else:
                result.append(f"{start}-{prev}")
            start = lst[i]
        prev = lst[i]

    # Handle the last sequence
    if prev == start:
        result.append(f"{start}")
    elif prev == start + 1:
        result.append(f"{start},{prev}")
    else:
        result.append(f"{start}-{prev}")
    
    return ",".join(result)

# Test the function with the provided example
print(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))
# Expected output: "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
