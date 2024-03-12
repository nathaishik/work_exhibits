def ramanujan(x):
    import time
    cubes = []
    sum_set = {}
    hr_nums = []
    num_of_hr_nums = int(x)
    def hr(i):
        for j in cubes:
            number = i**3 + j
            num_set = {i, int(j**(1/3))}
            try:
                if sum_set[number]:
                    sum_set[number].append(num_set) 
                    hr_nums.append(number)
            except KeyError:
                sum_set[number] = [num_set]
        cubes.append(i**3)       
    i = 0
    start = time.time()
    while len(hr_nums) < num_of_hr_nums:
        hr(i)
        i +=1
    end = time.time()
    return {"runtime": end - start, "hr_nums": hr_nums}

print(ramanujan(int(input("How many HR nums? ")))["hr_nums"])



    



