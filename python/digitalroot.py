def digital_root(n): 
    digit_arr = [int(digit) for digit in str(n)]
    while len(digit_arr)>1:
        value = 0
        for element in digit_arr: 
            value = value + element
        digit_arr = [int(digit) for digit in str(value)]
    return digit_arr[0]
