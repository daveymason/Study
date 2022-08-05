for i in range(20, -21, -5):
    print(i)

for i in range(0, 6, 1):
    print('*')
    if i == 0 or i == 6:
        print("*")
    elif i == 1 or i == 5:
        print("**")
    elif i == 2 or i == 3:
        print("***")
    else:
        print("****")


for amount_loaded in range(0, 101, 5):
    print(amount_loaded)
    if amount_loaded == 25:
        print("1/4 of the way there")
    if amount_loaded == 50:
        print("1/2 of the way there")
    if amount_loaded == 75:
        print("3/4 of the way there")
    if amount_loaded == 100:
        print("Loading Complete!")

        

stars = ""
for i in range(0, 5, 1):
    for j in range(0, i, 1):
        stars += "*"
    print(stars)